package com.sap.cloud.sdk.tutorial.utils;

import java.util.List;
import java.time.Duration;
import java.util.Collections;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.sap.cloud.sdk.cloudplatform.resilience.ResilienceConfiguration;
import com.sap.cloud.sdk.cloudplatform.resilience.ResilienceDecorator;
import com.sap.cloud.sdk.cloudplatform.resilience.ResilienceIsolationMode;
import com.sap.cloud.sdk.cloudplatform.resilience.ResilienceRuntimeException;
import com.sap.cloud.sdk.datamodel.odata.client.exception.ODataException;
import com.sap.cloud.sdk.cloudplatform.connectivity.HttpDestination;
import com.sap.cloud.sdk.datamodel.odata.helper.Order;
import com.sap.vdm.namespaces.businesspartner.BusinessPartner;
import com.sap.vdm.services.APIBUSINESSPARTNERService;
import com.sap.vdm.services.DefaultAPIBUSINESSPARTNERService;

public class GetBusinessPartnersCommand {
    private static final long serialVersionUID = 1L;
    private static final Logger logger = LoggerFactory.getLogger(GetBusinessPartnersCommand.class);

    private static final String CATEGORY_PERSON = "1";
    private final HttpDestination destination;
    private static final String APIKEY_HEADER = "apikey";
    private static final String SANDBOX_APIKEY = "YOUR APIKEY GOES HERE";

    private final APIBUSINESSPARTNERService businessPartnerService;
    private final ResilienceConfiguration myResilienceConfig;

    public GetBusinessPartnersCommand(HttpDestination destination) {
        this(destination, new DefaultAPIBUSINESSPARTNERService());
    }

    public GetBusinessPartnersCommand(HttpDestination destination, DefaultAPIBUSINESSPARTNERService service) {
        this.destination = destination;
        businessPartnerService = service;

        myResilienceConfig = ResilienceConfiguration.of(APIBUSINESSPARTNERService.class)
                .isolationMode(ResilienceIsolationMode.TENANT_AND_USER_OPTIONAL)
                .timeLimiterConfiguration(
                        ResilienceConfiguration.TimeLimiterConfiguration.of().timeoutDuration(Duration.ofMillis(10000)))
                .bulkheadConfiguration(ResilienceConfiguration.BulkheadConfiguration.of().maxConcurrentCalls(20));

        final ResilienceConfiguration.CacheConfiguration cacheConfig = ResilienceConfiguration.CacheConfiguration
                .of(Duration.ofSeconds(30)).withoutParameters();

        myResilienceConfig.cacheConfiguration(cacheConfig);
    }

    public List<BusinessPartner> execute() {
        return ResilienceDecorator.executeSupplier(this::run, myResilienceConfig, e -> {
            logger.warn("Fallback called because of exception.", e);
            return Collections.emptyList();
        });
    }

    private List<BusinessPartner> run() {
        try {
            return businessPartnerService.getAllBusinessPartner()
                    .select(BusinessPartner.BUSINESS_PARTNER, 
                            BusinessPartner.LAST_NAME, 
                            BusinessPartner.FIRST_NAME,
                            BusinessPartner.MALE, 
                            BusinessPartner.FEMALE, 
                            BusinessPartner.CREATED_AT)
                    .filter(BusinessPartner.BP_CATEGORY.eq(CATEGORY_PERSON))
                    .orderBy(BusinessPartner.LAST_NAME, Order.ASC)
                    .top(200)
                    .withHeader(APIKEY_HEADER, SANDBOX_APIKEY)
                    .executeRequest(destination);
        } catch (ODataException e) {
            throw new ResilienceRuntimeException(e);
        }
    }
}
