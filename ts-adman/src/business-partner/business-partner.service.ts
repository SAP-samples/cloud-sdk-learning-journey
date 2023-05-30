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
      .addCustomHeaders({ APIKey: '<YOUR-API-KEY>' })
      .execute({
        url: 'https://sandbox.api.sap.com/s4hanacloud',
      });
  }
}
