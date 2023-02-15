package com.example.adman;

import com.sap.cloud.sdk.datamodel.odata.client.exception.ODataResponseException;
import com.sap.cloud.sdk.datamodel.odata.helper.ModificationResponse;
import com.sap.cloud.sdk.s4hana.datamodel.odata.namespaces.businesspartner.BusinessPartnerAddress;
import com.sap.cloud.sdk.s4hana.datamodel.odata.services.DefaultBusinessPartnerService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class BusinessPartnerAddressRepository {

    private static final Logger logger =
            LoggerFactory.getLogger(BusinessPartnerAddressRepository.class);

    public static BusinessPartnerAddress save(
            BusinessPartnerAddress address) {

        ModificationResponse<BusinessPartnerAddress> response;
        if(address.getAddressID()==null) {
            // Create new address
            try {
                response = new DefaultBusinessPartnerService()
                        .createBusinessPartnerAddress(address)
                        .withHeader("apikey",
                                BackendConnector.getApikey())
                        .executeRequest(BackendConnector.getDestination());

            } catch (ODataResponseException e) {
                final String message = "OData error " +
                        "creating new business partner address.";
                logger.error(message, e);
                throw new BusinessPartnerAddressRepository_InternalErrorException(
                        message, e);
            }
        }
        else {
            // Update existing address
            try {
                final BusinessPartnerAddress addressToUpdate =
                        createAddressToUpdate(address);
                response = new DefaultBusinessPartnerService()
                        .updateBusinessPartnerAddress(addressToUpdate)
                        .withHeader("apikey",
                                BackendConnector.getApikey())
                        .executeRequest(BackendConnector.getDestination());

            } catch (ODataResponseException e) {
                final String message = "OData error " +
                        "updating business partner address.";
                logger.error(message, e);
                throw new BusinessPartnerAddressRepository_InternalErrorException(
                        message, e);
            }
        }
        return response.getModifiedEntity();
    }

    private static BusinessPartnerAddress createAddressToUpdate(
            BusinessPartnerAddress addressFromBody) {

        final BusinessPartnerAddress addressToUpdate =
                BusinessPartnerAddress.builder()
                .businessPartner(addressFromBody.getBusinessPartner())
                .addressID(addressFromBody.getAddressID())
                .build();

        addressToUpdate.setStreetName(addressFromBody.getStreetName());
        addressToUpdate.setHouseNumber(addressFromBody.getHouseNumber());
        addressToUpdate.setCityName(addressFromBody.getCityName());
        addressToUpdate.setPostalCode(addressFromBody.getPostalCode());
        addressToUpdate.setCountry(addressFromBody.getCountry());
        return addressToUpdate;
    }

    static void delete(
            String businessPartnerId, String addressId) {

        final BusinessPartnerAddress addressToDelete =
                BusinessPartnerAddress.builder()
                .businessPartner(businessPartnerId)
                .addressID(addressId)
                .build();

        try {
            new DefaultBusinessPartnerService()
                    .deleteBusinessPartnerAddress(addressToDelete)
                    .withHeader("apikey",
                            BackendConnector.getApikey())
                    .executeRequest(BackendConnector.getDestination());

        } catch (ODataResponseException e) {
            final String message = "OData error " +
                    "deleting business partner address.";
            logger.error(message, e);
            throw new BusinessPartnerAddressRepository_InternalErrorException(
                    message, e);
        }
    }
}
