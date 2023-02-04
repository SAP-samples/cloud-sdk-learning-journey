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
import com.sap.cloud.sdk.s4hana.datamodel.odata.namespaces.businesspartner.BusinessPartner;
import com.sap.cloud.sdk.s4hana.datamodel.odata.services.BusinessPartnerService;
import com.sap.cloud.sdk.s4hana.datamodel.odata.services.DefaultBusinessPartnerService;

public class GetBusinessPartnersCommand {
    private static final long serialVersionUID = 1L;
    private static final Logger logger = LoggerFactory.getLogger(GetBusinessPartnersCommand.class);

    private static final String CATEGORY_PERSON = "1";
    private final HttpDestination destination;
    private static final String APIKEY_HEADER = "apikey";
    private static final String SANDBOX_APIKEY = "YOUR APIKEY GOES HERE";

    private final BusinessPartnerService businessPartnerService;
    private final ResilienceConfiguration myResilienceConfig;

    public GetBusinessPartnersCommand(HttpDestination destination) {
        this(destination, new DefaultBusinessPartnerService());
    }

    public GetBusinessPartnersCommand(HttpDestination destination, BusinessPartnerService service) {
        this.destination = destination;
        businessPartnerService = service;

        myResilienceConfig = ResilienceConfiguration.of(BusinessPartnerService.class)
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
                            BusinessPartner.IS_MALE, 
                            BusinessPartner.IS_FEMALE, 
                            BusinessPartner.CREATION_DATE)
                    .filter(BusinessPartner.BUSINESS_PARTNER_CATEGORY.eq(CATEGORY_PERSON))
                    .orderBy(BusinessPartner.LAST_NAME, Order.ASC)
                    .top(200)
                    // TODO: Uncomment the line below, if you are using the sandbox service
                    .withHeader(APIKEY_HEADER, System.getenv("API_KEY"))
                    .executeRequest(destination);
        } catch (ODataException e) {
            throw new ResilienceRuntimeException(e);
        }
    }
}
