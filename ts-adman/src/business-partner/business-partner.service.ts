import { Injectable } from '@nestjs/common';

import { asc } from '@sap-cloud-sdk/odata-v2';
import {
  BusinessPartner,
  businessPartnerService,
} from 'services/business-partner-service';
import { API_KEY } from './constants';

const { businessPartnerApi, businessPartnerAddressApi } =
  businessPartnerService();

@Injectable()
export class BusinessPartnerService {
  static findAll(): Promise<BusinessPartner[]> {
    return businessPartnerApi
      .requestBuilder()
      .getAll()
      .select(
        businessPartnerApi.schema.BUSINESS_PARTNER_ID_BY_EXT_SYSTEM,
        businessPartnerApi.schema.BUSINESS_PARTNER,
        businessPartnerApi.schema.LAST_NAME,
        businessPartnerApi.schema.FIRST_NAME,
      )
      .filter(businessPartnerApi.schema.BUSINESS_PARTNER_CATEGORY.equals('1'))
      .orderBy(asc(businessPartnerApi.schema.LAST_NAME))
      .addCustomHeaders({
        APIKey: API_KEY,
      })
      .execute({
        url: 'https://sandbox.api.sap.com/s4hanacloud',
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });
  }

  static findById(id: string): Promise<BusinessPartner> {
    return businessPartnerApi
      .requestBuilder()
      .getByKey(id)
      .select(
        businessPartnerApi.schema.BUSINESS_PARTNER,
        businessPartnerApi.schema.LAST_NAME,
        businessPartnerApi.schema.FIRST_NAME,
        businessPartnerApi.schema.IS_MALE,
        businessPartnerApi.schema.IS_FEMALE,
        businessPartnerApi.schema.CREATION_DATE,
        businessPartnerApi.schema.TO_BUSINESS_PARTNER_ADDRESS.select(
          businessPartnerAddressApi.schema.BUSINESS_PARTNER,
          businessPartnerAddressApi.schema.ADDRESS_ID,
          businessPartnerAddressApi.schema.COUNTRY,
          businessPartnerAddressApi.schema.POSTAL_CODE,
          businessPartnerAddressApi.schema.CITY_NAME,
          businessPartnerAddressApi.schema.STREET_NAME,
          businessPartnerAddressApi.schema.HOUSE_NUMBER,
        ),
      )
      .addCustomHeaders({
        APIKey: API_KEY,
      })
      .execute({
        url: 'https://sandbox.api.sap.com/s4hanacloud',
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });
  }
}
