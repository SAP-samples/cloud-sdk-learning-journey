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
import com.sap.cloud.sdk.s4hana.datamodel.odata.namespaces.businesspartner.BusinessPartner;
import com.sap.cloud.sdk.tutorial.utils.GetBusinessPartnersCommand;

@RestController
public class BusinessPartnerController {
    private static final long serialVersionUID = 1L;
    private static final Logger logger = LoggerFactory.getLogger(BusinessPartnerController.class);

    @RequestMapping(value = "/getBusinessPartners", method = RequestMethod.GET)
    public String getBusinessPartners() {
        final HttpDestination destination = DefaultDestination.builder()
                                                .property("Name", "mydestination")
                                                .property("URL", "http://localhost:8081")
                                                .property("Type", "HTTP")
                                                .property("Authentication", "NoAuthentication")
                                                .build().asHttp();

        // TODO: uncomment the line below, if you are using the sandbox service
        // final HttpDestination destination = DefaultDestination.builder()
        //                                         .property("Name", "mydestination")
        //                                         .property("URL", "https://sandbox.api.sap.com/s4hanacloud")
        //                                         .property("Type", "HTTP")
        //                                         .property("Authentication", "NoAuthentication")
        //                                         .build().asHttp();

        final List<BusinessPartner> businessPartners = new GetBusinessPartnersCommand(destination).execute();

        logger.info(String.format("Found %d business partner(s).", businessPartners.size()));

        return new Gson().toJson(businessPartners);
    }
    
}
