import { Injectable } from '@nestjs/common';
import {
  BusinessPartner,
  businessPartnerService,
} from 'services/business-partner-service';

@Injectable()
export class BusinessPartnerService {
  async getAllBusinessPartners(): Promise<BusinessPartner[]> {
    const { businessPartnerApi } = businessPartnerService();
    return await businessPartnerApi
      .requestBuilder()
      .getAll()
      .select(
        businessPartnerApi.schema.BUSINESS_PARTNER,
        businessPartnerApi.schema.FIRST_NAME,
        businessPartnerApi.schema.LAST_NAME,
      )
      .top(50)
      .addCustomHeaders({ APIKey: 'H6aeNlgso5S5f2sSJbFFoRZXqQembSEW' })
      .execute({
        url: 'https://sandbox.api.sap.com/s4hanacloud',
      });
  }

  async getBusinessPartnerById(id: string) {
    const { businessPartnerApi } = businessPartnerService();
    const { businessPartnerAddressApi } = businessPartnerService();

    return businessPartnerApi
      .requestBuilder()
      .getByKey(id)
      .addCustomHeaders({ apikey: process.env.APIKey })
      .select(
        businessPartnerApi.schema.BUSINESS_PARTNER,
        businessPartnerApi.schema.FIRST_NAME,
        businessPartnerApi.schema.LAST_NAME,
        businessPartnerApi.schema.TO_BUSINESS_PARTNER_ADDRESS.select(
          businessPartnerAddressApi.schema.BUSINESS_PARTNER,
          businessPartnerAddressApi.schema.ADDRESS_ID,
          businessPartnerAddressApi.schema.POSTAL_CODE,
          businessPartnerAddressApi.schema.CITY_NAME,
          businessPartnerAddressApi.schema.STREET_NAME,
          businessPartnerAddressApi.schema.HOUSE_NUMBER,
        ),
      )
      .addCustomHeaders({ APIKey: 'H6aeNlgso5S5f2sSJbFFoRZXqQembSEW' })
      .execute({
        url: 'https://sandbox.api.sap.com/s4hanacloud',
      });
  }
}
