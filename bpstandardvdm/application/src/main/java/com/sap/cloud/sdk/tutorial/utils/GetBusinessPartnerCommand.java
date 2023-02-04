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
import com.sap.cloud.sdk.s4hana.datamodel.odata.namespaces.businesspartner.BusinessPartner;
import com.sap.cloud.sdk.s4hana.datamodel.odata.services.BusinessPartnerService;
import com.sap.cloud.sdk.s4hana.datamodel.odata.services.DefaultBusinessPartnerService;

public class GetBusinessPartnerCommand {
    private static final long serialVersionUID = 1L;
    private static final Logger logger = LoggerFactory.getLogger(GetBusinessPartnerCommand.class);

    private final HttpDestination destination;
    private final String id;
    private static final String APIKEY_HEADER = "apikey";
    private static final String SANDBOX_APIKEY = "<YOUR APIKEY GOES HERE>";

    private final BusinessPartnerService businessPartnerService;
    private final ResilienceConfiguration myResilienceConfig;

    public GetBusinessPartnerCommand(HttpDestination destination, String id) {
        this(destination, id,
                new DefaultBusinessPartnerService());
    }

    public GetBusinessPartnerCommand(HttpDestination destination, String id, BusinessPartnerService service) {
        this.destination = destination;
        this.id = id;
        businessPartnerService = service;

        myResilienceConfig = ResilienceConfiguration.of(BusinessPartnerService.class)
                .isolationMode(ResilienceIsolationMode.TENANT_AND_USER_OPTIONAL)
                .timeLimiterConfiguration(
                        ResilienceConfiguration.TimeLimiterConfiguration.of().timeoutDuration(Duration.ofMillis(10000)))
                .bulkheadConfiguration(ResilienceConfiguration.BulkheadConfiguration.of().maxConcurrentCalls(20));

        final ResilienceConfiguration.CacheConfiguration cacheConfig = ResilienceConfiguration.CacheConfiguration
                .of(Duration.ofSeconds(10)).withoutParameters();

        myResilienceConfig.cacheConfiguration(cacheConfig);

    }

    public BusinessPartner execute() {
        return ResilienceDecorator.executeSupplier(this::run, myResilienceConfig, e -> {
            logger.warn("Fallback called because of exception.", e);
            return null;
        });
    }

    private BusinessPartner run() {
        try {
            return businessPartnerService.getBusinessPartnerByKey(id)
                    .select(BusinessPartner.BUSINESS_PARTNER, 
                            BusinessPartner.LAST_NAME, 
                            BusinessPartner.FIRST_NAME,
                            BusinessPartner.IS_MALE, 
                            BusinessPartner.IS_FEMALE, 
                            BusinessPartner.CREATION_DATE)
                    .withHeader(APIKEY_HEADER, System.getenv("API_KEY"))
                    .executeRequest(destination);
        } catch (ODataException e) {
            throw new ResilienceRuntimeException(e);
        }
    }
}
