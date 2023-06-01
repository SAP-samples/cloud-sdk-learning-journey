import { Injectable } from '@nestjs/common';
import {
  BusinessPartner,
  BusinessPartnerAddress,
  businessPartnerService,
} from '../../services/business-partner-service';

const { businessPartnerApi, businessPartnerAddressApi } =
  businessPartnerService();
const API_KEY = '<API_KEY>';

@Injectable()
export class BusinessPartnerService {
  async getAllBusinessPartners(): Promise<BusinessPartner[]> {
    return await businessPartnerApi
      .requestBuilder()
      .getAll()
      .select(
        businessPartnerApi.schema.BUSINESS_PARTNER,
        businessPartnerApi.schema.FIRST_NAME,
        businessPartnerApi.schema.LAST_NAME,
      )
      .top(50)
      .addCustomHeaders({ APIKey: API_KEY })
      .execute({
        url: 'https://sandbox.api.sap.com/s4hanacloud',
      });
  }

  async getBusinessPartnerById(id: string) {
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
      .addCustomHeaders({ APIKey: API_KEY })
      .execute({
        url: 'https://sandbox.api.sap.com/s4hanacloud',
      });
  }

  createAddress(
    address: Record<string, any>,
    businessPartnerId: string,
  ): Promise<BusinessPartnerAddress> {
    const businessPartnerAddress = businessPartnerAddressApi
      .entityBuilder()
      .fromJson({ businessPartner: businessPartnerId, ...address });
    return businessPartnerAddressApi
      .requestBuilder()
      .create(businessPartnerAddress)
      .addCustomHeaders({ APIKey: API_KEY })
      .execute({
        url: 'https://sandbox.api.sap.com/s4hanacloud',
      });
  }

  updateAddress(
    address: Record<string, any>,
    businessPartnerId: string,
    addressId: string,
  ): Promise<BusinessPartnerAddress> {
    const businessPartnerAddress = businessPartnerAddressApi
      .entityBuilder()
      .fromJson({ businessPartner: businessPartnerId, addressId, ...address });
    return businessPartnerAddressApi
      .requestBuilder()
      .update(businessPartnerAddress)
      .addCustomHeaders({ APIKey: API_KEY })
      .execute({
        url: 'https://sandbox.api.sap.com/s4hanacloud',
      });
  }

  deleteAddress(businessPartnerId: string, addressId: string): Promise<void> {
    return businessPartnerAddressApi
      .requestBuilder()
      .delete(businessPartnerId, addressId)
      .addCustomHeaders({ APIKey: API_KEY })
      .execute({
        url: 'https://sandbox.api.sap.com/s4hanacloud',
      });
  }
}
