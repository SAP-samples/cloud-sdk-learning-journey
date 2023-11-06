package com.sap.cloud.sdk.tutorial.controllers;

import java.util.List;

import com.google.gson.Gson;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


import com.sap.cloud.sdk.cloudplatform.connectivity.DefaultDestination;
import com.sap.cloud.sdk.cloudplatform.connectivity.HttpDestination;
import com.sap.cloud.sdk.datamodel.odata.helper.Order;
import com.sap.cloud.sdk.s4hana.datamodel.odata.namespaces.businesspartner.BusinessPartner;
import com.sap.cloud.sdk.s4hana.datamodel.odata.services.DefaultBusinessPartnerService;

@RestController
public class BusinessPartnerController {
    private static final long serialVersionUID = 1L;
    private static final Logger logger = LoggerFactory.getLogger(BusinessPartnerController.class);

    private static final String CATEGORY_PERSON = "1";
    private static final String APIKEY_HEADER = "apikey";
    private static final String SANDBOX_APIKEY = "JIzPB8YwC3gFHFMfTmTks6yMxmQGKtuE";

    @RequestMapping( value = "/getBusinessPartners", method = RequestMethod.GET )
    public String getBusinessPartners() {

        // Destination to the local Mock Server
        final HttpDestination destination = DefaultDestination.builder()
                                                .property("Name", "mydestination")
                                                .property("URL", "http://localhost:8081")
                                                .property("Type", "HTTP")
                                                .property("Authentication", "NoAuthentication")
                                                .build().asHttp();

        // Destination to the api.sap.com Sandbox
        // final HttpDestination destination = DefaultDestination.builder()
        //                                         .property("Name", "mydestination")
        //                                         .property("URL", "https://sandbox.api.sap.com/s4hanacloud/sap/opu/odata/sap")
        //                                         .property("Type", "HTTP")
        //                                         .property("Authentication", "NoAuthentication")
        //                                         .build().asHttp();

        // Destination to a SAP S/4HANA Cloud (public edition) tenant
        //final HttpDestination destination = DefaultDestination.builder()
        //                                         .property("Name", "mydestination")
        //                                         .property("URL", "https://my######.s4hana.ondemand.com")
        //                                         .property("Type", "HTTP")
        //                                         .property("Authentication", "BasicAuthentication")
        //                                         .property("User", "ADDRESS_MANAGER_###")
        //                                         .property("Password", "WelcomeToTheClouds1!")
        //                                         .build().asHttp();

        final List<BusinessPartner> businessPartners =
                    new DefaultBusinessPartnerService()
                            .getAllBusinessPartner()
                            .select(BusinessPartner.BUSINESS_PARTNER,
                                    BusinessPartner.LAST_NAME,
                                    BusinessPartner.FIRST_NAME,
                                    BusinessPartner.IS_MALE,
                                    BusinessPartner.IS_FEMALE,
                                    BusinessPartner.CREATION_DATE)
                            .filter(BusinessPartner.BUSINESS_PARTNER_CATEGORY.eq(CATEGORY_PERSON))
                            .orderBy(BusinessPartner.LAST_NAME, Order.ASC)
                            .top(200)
                            .withHeader(APIKEY_HEADER, SANDBOX_APIKEY)
                            .executeRequest(destination);

            logger.info(String.format("Found %d business partner(s).", businessPartners.size()));

        return new Gson().toJson(businessPartners);
    }
    
}