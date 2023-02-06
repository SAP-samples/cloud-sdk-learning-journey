import { Injectable } from '@nestjs/common';
import {
    businessPartnerService,
    BusinessPartner
} from '../../services/business-partner-service';
import { resilience } from '@sap-cloud-sdk/resilience';

@Injectable()
export class BusinessPartnerService {
    async getAllBusinessPartners(): Promise<BusinessPartner[]> {

        const { businessPartnerApi } = businessPartnerService();
        return await businessPartnerApi
                        .requestBuilder()
                        .getAll()
                        .middleware(resilience({ timeout: 10000, circuitBreaker: true, retry: true }))
                        .select(
                            businessPartnerApi.schema.BUSINESS_PARTNER,
                            businessPartnerApi.schema.FIRST_NAME,
                            businessPartnerApi.schema.LAST_NAME
                        )
                        .top(10)
                        .addCustomHeaders({apiKey: process.env.APIKEY})
                        .execute({
                            url: process.env.URL
                        });
    }
}