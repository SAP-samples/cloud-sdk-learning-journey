package com.sap.cloud.sdk.tutorial.utils;

import java.util.List;

import com.google.gson.Gson;

import java.time.Duration;
import java.util.Collections;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.sap.cloud.sdk.cloudplatform.resilience.ResilienceConfiguration;
import com.sap.cloud.sdk.cloudplatform.resilience.ResilienceDecorator;
import com.sap.cloud.sdk.cloudplatform.resilience.ResilienceIsolationMode;
import com.sap.cloud.sdk.cloudplatform.resilience.ResilienceRuntimeException;
import com.sap.cloud.sdk.datamodel.odata.client.exception.ODataException;
import com.sap.cloud.sdk.cloudplatform.connectivity.HttpDestination;
import com.sap.cloud.sdk.datamodel.odata.helper.ModificationResponse;
import com.sap.cloud.sdk.s4hana.datamodel.odata.namespaces.businesspartner.BusinessPartner;
import com.sap.cloud.sdk.s4hana.datamodel.odata.services.BusinessPartnerService;
import com.sap.cloud.sdk.s4hana.datamodel.odata.services.DefaultBusinessPartnerService;

public class CreateBusinessPartnerCommand {
    private static final long serialVersionUID = 1L;
    private static final Logger logger = LoggerFactory.getLogger(CreateBusinessPartnerCommand.class);

    private final HttpDestination destination;
    private final BusinessPartner businessPartner;
    private static final String APIKEY_HEADER = "apikey";
    private static final String SANDBOX_APIKEY = "<YOUR APIKEY GOES HERE>";

    private final BusinessPartnerService businessPartnerService;
    private final ResilienceConfiguration myResilienceConfig;

    public CreateBusinessPartnerCommand(HttpDestination destination, BusinessPartner businessPartner) {
        this(destination, businessPartner,
                new DefaultBusinessPartnerService());
    }

    public CreateBusinessPartnerCommand(HttpDestination destination, BusinessPartner businessPartner, BusinessPartnerService service) {
        this.destination = destination;
        this.businessPartner = businessPartner;
        businessPartnerService = service;

        myResilienceConfig = ResilienceConfiguration.of(BusinessPartnerService.class)
                .isolationMode(ResilienceIsolationMode.TENANT_AND_USER_OPTIONAL)
                .timeLimiterConfiguration(
                        ResilienceConfiguration.TimeLimiterConfiguration.of().timeoutDuration(Duration.ofMillis(10000)))
                .bulkheadConfiguration(ResilienceConfiguration.BulkheadConfiguration.of().maxConcurrentCalls(20));

    }

    public ModificationResponse<BusinessPartner> execute() {
        return ResilienceDecorator.executeSupplier(this::run, myResilienceConfig, e -> {
            logger.warn("Fallback called because of exception.", e);
            return null;
        });
    }

    private ModificationResponse<BusinessPartner> run() {
        try {
            return businessPartnerService.createBusinessPartner(businessPartner)
                    .withHeader(APIKEY_HEADER, System.getenv("API_KEY"))
                    .executeRequest(destination);
        } catch (ODataException e) {
            throw new ResilienceRuntimeException(e);
        }
    }
    
}
