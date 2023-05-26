import { Injectable } from '@nestjs/common';
import { BusinessPartner, businessPartnerService } from '@sap/cloud-sdk-vdm-business-partner-service';
import { BackendConnector } from './backend-connector'
import { asc } from '@sap-cloud-sdk/odata-v2';

const { businessPartnerApi, businessPartnerAddressApi } = businessPartnerService();

@Injectable()
export class BusinessPartnerService {

    static findAll(): Promise<BusinessPartner[]> {
        return businessPartnerApi.requestBuilder()
            .getAll()
            .select(
                businessPartnerApi.schema.BUSINESS_PARTNER,
                businessPartnerApi.schema.LAST_NAME,
                businessPartnerApi.schema.FIRST_NAME
            )
            .filter(
                businessPartnerApi.schema.BUSINESS_PARTNER_CATEGORY
                    .equals("1")
            )
            .orderBy(asc(businessPartnerApi.schema.LAST_NAME))
            .addCustomHeaders({
                APIKey: BackendConnector.getApikey()
            })
            .execute( BackendConnector.getDestination() );
    }

    static findById(id: string): Promise<BusinessPartner> {
        return businessPartnerApi.requestBuilder()
        .getByKey(id)
        .select(businessPartnerApi.schema.BUSINESS_PARTNER,
            businessPartnerApi.schema.LAST_NAME,
            businessPartnerApi.schema.FIRST_NAME,
            businessPartnerApi.schema.IS_MALE,
            businessPartnerApi.schema.IS_FEMALE,
            businessPartnerApi.schema.CREATION_DATE,
            businessPartnerApi.schema.TO_BUSINESS_PARTNER_ADDRESS
                    .select(
                businessPartnerAddressApi.schema.BUSINESS_PARTNER,
                businessPartnerAddressApi.schema.ADDRESS_ID,
                businessPartnerAddressApi.schema.COUNTRY,
                businessPartnerAddressApi.schema.POSTAL_CODE,
                businessPartnerAddressApi.schema.CITY_NAME,
                businessPartnerAddressApi.schema.STREET_NAME,
                businessPartnerAddressApi.schema.HOUSE_NUMBER))
        .addCustomHeaders({
            APIKey: BackendConnector.getApikey()
        })
        .execute( BackendConnector.getDestination() );
    }

}
