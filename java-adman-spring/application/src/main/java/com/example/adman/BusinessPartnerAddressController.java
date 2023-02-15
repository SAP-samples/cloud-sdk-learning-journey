package com.example.adman;

import com.sap.cloud.sdk.s4hana.datamodel.odata.namespaces.businesspartner.BusinessPartnerAddress;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
public class BusinessPartnerAddressController {

    private static final Logger logger
            = LoggerFactory.getLogger(BusinessPartnerController.class);

    @PostMapping("/api/addresses")
    BusinessPartnerAddress doPost(
            @RequestBody BusinessPartnerAddress newAddress) {

        BusinessPartnerAddress bpa;
        try {
            bpa = BusinessPartnerAddressRepository.save(newAddress);
        }
        catch (
            BusinessPartnerAddressRepository_InternalErrorException e)
        {
            final String message = "Internal error " +
                    "saving the business partner address.";
            logger.error(message, e);
            throw new ResponseStatusException(
                    HttpStatus.INTERNAL_SERVER_ERROR, message, e);
        }
        return bpa;
    }

    @PatchMapping("/api/addresses")
    BusinessPartnerAddress doPatch(
            @RequestBody BusinessPartnerAddress address) {

        BusinessPartnerAddress bpa;
        try {
            bpa = BusinessPartnerAddressRepository.save(address);
        }
        catch (
            BusinessPartnerAddressRepository_InternalErrorException e)
        {
            final String message = "Internal error " +
                    "updating the business partner address.";
            logger.error(message, e);
            throw new ResponseStatusException(
                    HttpStatus.INTERNAL_SERVER_ERROR, message, e);
        }
        return bpa;
    }

    @DeleteMapping("/api/addresses")
    protected void doDelete(
            @RequestParam String businessPartnerId,
            @RequestParam String addressId) {
        try {
            BusinessPartnerAddressRepository
                    .delete(businessPartnerId, addressId);
        }
        catch (
            BusinessPartnerAddressRepository_InternalErrorException e)
        {
            final String message = "Internal error " +
                    "deleting the business partner address.";
            logger.error(message, e);
            throw new ResponseStatusException(
                    HttpStatus.INTERNAL_SERVER_ERROR, message, e);
        }
    }
}
