package com.example.adman;

import com.sap.cloud.sdk.datamodel.odata.client.exception.ODataResponseException;
import com.sap.cloud.sdk.datamodel.odata.helper.Order;
import com.sap.cloud.sdk.s4hana.datamodel.odata.namespaces.businesspartner.BusinessPartner;
import com.sap.cloud.sdk.s4hana.datamodel.odata.namespaces.businesspartner.BusinessPartnerAddress;
import com.sap.cloud.sdk.s4hana.datamodel.odata.services.DefaultBusinessPartnerService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;

public class BusinessPartnerRepository {

    private static final String CATEGORY_PERSON = "1";
    private static final Logger logger =
            LoggerFactory.getLogger(BusinessPartnerRepository.class);

    public static BusinessPartner findById(String id) {

        BusinessPartner result;
        try {
            result = new DefaultBusinessPartnerService()
                    .getBusinessPartnerByKey(id)
                    .select(BusinessPartner.BUSINESS_PARTNER,
                        BusinessPartner.LAST_NAME,
                        BusinessPartner.FIRST_NAME,
                        BusinessPartner.IS_MALE,
                        BusinessPartner.IS_FEMALE,
                        BusinessPartner.CREATION_DATE,
                        BusinessPartner.TO_BUSINESS_PARTNER_ADDRESS
                                .select(
                            BusinessPartnerAddress.BUSINESS_PARTNER,
                            BusinessPartnerAddress.ADDRESS_ID,
                            BusinessPartnerAddress.COUNTRY,
                            BusinessPartnerAddress.POSTAL_CODE,
                            BusinessPartnerAddress.CITY_NAME,
                            BusinessPartnerAddress.STREET_NAME,
                            BusinessPartnerAddress.HOUSE_NUMBER))
                .withHeader("apikey", BackendConnector.getApikey())
                    .executeRequest(BackendConnector.getDestination());
        } catch (ODataResponseException e) {
            final String message = "OData error retrieving " +
                    "business partner " + id;
            logger.error(message, e);
            throw new BusinessPartnerRepository_InternalErrorException(
                    message, e);
        }
        return result;
    }

    public static List<BusinessPartner> findAll() {

        List<BusinessPartner> result;
        try {
            result = new DefaultBusinessPartnerService()
                    .getAllBusinessPartner()
                    .select(BusinessPartner.BUSINESS_PARTNER,
                            BusinessPartner.LAST_NAME,
                            BusinessPartner.FIRST_NAME)
                    .filter(BusinessPartner.BUSINESS_PARTNER_CATEGORY
                            .eq(CATEGORY_PERSON))
                    .orderBy(BusinessPartner.LAST_NAME, Order.ASC)
                    .withHeader("apikey", BackendConnector.getApikey())
                    .executeRequest(BackendConnector.getDestination());
        }
        catch (ODataResponseException e) {
            final String message = "OData error " +
                    "retrieving business partners.";
            logger.error(message, e);
            throw new BusinessPartnerRepository_InternalErrorException(
                    message, e);
        }
        return result;
    }
}
