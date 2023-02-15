package com.example.adman;

import com.google.gson.Gson;
import com.sap.cloud.sdk.s4hana.datamodel.odata.namespaces.businesspartner.BusinessPartner;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
public class BusinessPartnerController {

    private static final Logger logger =
            LoggerFactory.getLogger(BusinessPartnerController.class);

    @GetMapping( "/api/business-partners" )
    ResponseEntity<String> doGet(
            @RequestParam(required = false) String id)  {

        String jsonResult;
        if (id == null) {
            // Get all Business Partners
            List<BusinessPartner> list;
            try {
                list = BusinessPartnerRepository.findAll();
            }
            catch (BusinessPartnerRepository_InternalErrorException e)
            {
                final String message = "Internal error " +
                        "retrieving business partners.";
                logger.error(message, e);
                throw new ResponseStatusException(
                        HttpStatus.INTERNAL_SERVER_ERROR, message, e);
            }

            // Convert to JSon and remove null values
            jsonResult = new Gson().toJson(list);
        }
        else {
            // Get Business Partner based on id
            BusinessPartner bp;
            try {
                bp = BusinessPartnerRepository.findById(id);
            }
            catch (BusinessPartnerRepository_InternalErrorException e)
            {
                final String message
                        = "Internal error retrieving " +
                        "business partner " + id;
                logger.error(message, e);
                throw new ResponseStatusException(
                        HttpStatus.INTERNAL_SERVER_ERROR, message, e);
            }

            // Convert to JSon and remove null values
            jsonResult = new Gson().toJson(bp);
        }

        // Prepare response headers (optional)
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        return new ResponseEntity<>(
                jsonResult, headers, HttpStatus.OK);
    }
}