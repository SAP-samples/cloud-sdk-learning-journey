import { Injectable } from '@nestjs/common';
import {
  BusinessPartnerAddress,
  businessPartnerService,
} from 'services/business-partner-service';
import { getAPIKey } from 'src/config/config-service';

const API_KEY = getAPIKey();
const { businessPartnerAddressApi } = businessPartnerService();

@Injectable()
export class BusinessPartnerAddressService {
  public static async create(
    address: BusinessPartnerAddress,
  ): Promise<BusinessPartnerAddress> {
    return businessPartnerAddressApi
      .requestBuilder()
      .create(address)
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

  public static update(
    address: BusinessPartnerAddress,
  ): Promise<BusinessPartnerAddress> {
    return businessPartnerAddressApi
      .requestBuilder()
      .update(address)
      .ignoreVersionIdentifier()
      .addCustomHeaders({
        APIKey: API_KEY,
      })
      .execute({
        url: 'https://sandbox.api.sap.com/s4hanacloud',
      });
  }

  public static delete(
    businessPartner: string,
    addressId: string,
  ): Promise<void> {
    return businessPartnerAddressApi
      .requestBuilder()
      .delete(businessPartner, addressId)
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
