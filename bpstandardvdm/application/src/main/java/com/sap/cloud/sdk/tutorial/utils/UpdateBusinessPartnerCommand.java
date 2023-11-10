package com.sap.cloud.sdk.tutorial.utils;

import java.time.Duration;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.sap.cloud.sdk.cloudplatform.resilience.ResilienceConfiguration;
import com.sap.cloud.sdk.cloudplatform.resilience.ResilienceDecorator;
import com.sap.cloud.sdk.cloudplatform.resilience.ResilienceIsolationMode;
import com.sap.cloud.sdk.cloudplatform.resilience.ResilienceRuntimeException;
import com.sap.cloud.sdk.datamodel.odata.client.exception.ODataException;
import com.sap.cloud.sdk.cloudplatform.connectivity.HttpDestination;
import com.sap.vdm.namespaces.businesspartner.BusinessPartner;
import com.sap.vdm.namespaces.businesspartner.BusinessPartnerByKeyFluentHelper;
import com.sap.vdm.services.APIBUSINESSPARTNERService;
import com.sap.vdm.services.DefaultAPIBUSINESSPARTNERService;


public class UpdateBusinessPartnerCommand {
    private static final long serialVersionUID = 1L;
    private static final Logger logger = LoggerFactory.getLogger(UpdateBusinessPartnerCommand.class);

    private final HttpDestination destination;
    private final String id;
    private final BusinessPartner businessPartner;
    private static final String APIKEY_HEADER = "apikey";
    private static final String SANDBOX_APIKEY = "<YOUR APIKEY GOES HERE>";

    private final APIBUSINESSPARTNERService businessPartnerService;
    private final ResilienceConfiguration myResilienceConfig;

    public UpdateBusinessPartnerCommand(HttpDestination destination, String id, BusinessPartner businessPartner) {
        this(destination, id, businessPartner, new DefaultAPIBUSINESSPARTNERService());
    }

    public UpdateBusinessPartnerCommand(HttpDestination destination, String id, BusinessPartner businessPartner, APIBUSINESSPARTNERService service) {
        this.destination = destination;
        this.id = id;
        this.businessPartner = businessPartner;
        businessPartnerService = service;

        myResilienceConfig = ResilienceConfiguration.of(APIBUSINESSPARTNERService.class)
                .isolationMode(ResilienceIsolationMode.TENANT_AND_USER_OPTIONAL)
                .timeLimiterConfiguration(
                        ResilienceConfiguration.TimeLimiterConfiguration.of().timeoutDuration(Duration.ofMillis(10000)))
                .bulkheadConfiguration(ResilienceConfiguration.BulkheadConfiguration.of().maxConcurrentCalls(20));

    }

    public String execute() {
        return ResilienceDecorator.executeSupplier(this::run, myResilienceConfig, e -> {
            logger.warn("Fallback called because of exception.", e);
            return "Business Partner update failed...";
        });
    }

    private String run() {
        try {
            BusinessPartner bp = businessPartnerService.getBusinessPartnerByKey(id)
                    .select(BusinessPartner.BUSINESS_PARTNER, 
                            BusinessPartner.LAST_NAME, 
                            BusinessPartner.FIRST_NAME,
                            BusinessPartner.MALE, 
                            BusinessPartner.FEMALE, 
                            BusinessPartner.CREATED_AT)
                    .withHeader(APIKEY_HEADER, System.getenv("API_KEY"))
                    .executeRequest(destination);

            bp.setFirstName(businessPartner.getFirstName());
            bp.setLastName(businessPartner.getLastName());
            businessPartnerService
                .updateBusinessPartner(bp)
                .executeRequest(destination);

            return "Business Partner update succeeded...";

        } catch (ODataException e) {
            throw new ResilienceRuntimeException(e);
        }
    }
}
