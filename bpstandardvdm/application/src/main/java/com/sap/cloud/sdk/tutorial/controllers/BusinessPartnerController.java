package com.sap.cloud.sdk.tutorial.controllers;

import java.util.List;

import com.google.gson.Gson;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sap.cloud.sdk.cloudplatform.connectivity.DefaultDestination;
import com.sap.cloud.sdk.cloudplatform.connectivity.HttpDestination;
import com.sap.cloud.sdk.datamodel.odata.helper.ModificationResponse;
import com.sap.cloud.sdk.tutorial.utils.GetBusinessPartnerCommand;
import com.sap.cloud.sdk.tutorial.utils.GetBusinessPartnersCommand;
import com.sap.cloud.sdk.tutorial.utils.CreateBusinessPartnerCommand;
import com.sap.cloud.sdk.tutorial.utils.UpdateBusinessPartnerCommand;
import com.sap.cloud.sdk.tutorial.utils.DeleteBusinessPartnerCommand;
import com.sap.vdm.namespaces.businesspartner.BusinessPartner;

@RestController
@RequestMapping("/businessPartners")
public class BusinessPartnerController {

    private static final long serialVersionUID = 1L;
    private static final Logger logger = LoggerFactory.getLogger(BusinessPartnerController.class);

    // DESTINATION 1:  Destination to the local Mock Server
    // Uncomment this section to test with mock server
    private final HttpDestination destination = DefaultDestination.builder()
                                                .property("Name", "mydestination")
                                                .property("URL", "http://localhost:8081")
                                                .property("Type", "HTTP")
                                                .property("Authentication", "NoAuthentication")
                                                .build().asHttp();

    // DESTINATION 2:  Destination to the api.sap.com Sandbox
    // Uncomment this section to test with sandbox in api.sap.com                                               
    // private final HttpDestination destination = DefaultDestination.builder()
    //                                             .property("Name", "mydestination")
    //                                             .property("URL", "https://sandbox.api.sap.com/s4hanacloud/")
    //                                             .property("Type", "HTTP")
    //                                             .property("Authentication", "NoAuthentication")
    //                                             .build().asHttp();

    // DESTINATION 3:  Destination to a SAP S/4HANA Cloud (public edition) tenant
    // Uncomment this section to test with actual SAP S/4HANA Cloud
    // private final HttpDestination destination = DefaultDestination.builder()
    //                                             .property("Name", "mydestination")
    //                                             .property("URL", "https://my######.s4hana.ondemand.com")
    //                                             .property("Type", "HTTP")
    //                                             .property("Authentication", "BasicAuthentication")
    //                                             .property("User", "ADDRESS_MANAGER_###")
    //                                             .property("Password", "WelcomeToTheClouds1!")
    //                                             .build().asHttp();

    @GetMapping
    public ResponseEntity<String> getBusinessPartners() {
        
        final List<BusinessPartner> businessPartners = new GetBusinessPartnersCommand(destination).execute();

        logger.info(String.format("Found %d business partner(s).", businessPartners.size()));
        return new ResponseEntity<String>(new Gson().toJson(businessPartners), HttpStatus.OK);
    }

    @GetMapping(path="/{id}")
    public ResponseEntity<String> getBusinessPartner(@PathVariable String id) {
        
        final BusinessPartner businessPartner = new GetBusinessPartnerCommand(destination, id).execute();  
        return new ResponseEntity<String>(new Gson().toJson(businessPartner), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<String> createBusinessPartner(@RequestBody BusinessPartner businessPartner) {

        final ModificationResponse<BusinessPartner> bp = new CreateBusinessPartnerCommand(destination, businessPartner).execute();  
        return new ResponseEntity<String>(new Gson().toJson(bp), HttpStatus.OK);
    }

    @PutMapping(path="/{id}")
    public ResponseEntity<String> updateBusinessPartner(@PathVariable String id, @RequestBody BusinessPartner businessPartner) {

        final String result = new UpdateBusinessPartnerCommand(destination, id, businessPartner).execute();
        return new ResponseEntity<String>(result, HttpStatus.OK);
    }

    @DeleteMapping(path="/{id}")
    public ResponseEntity<Void> deleteBusinessPartner(@PathVariable String id) {

        new DeleteBusinessPartnerCommand(destination, id).execute();
        logger.info("Delete method not available...");

        return ResponseEntity.noContent().build();
    }
}