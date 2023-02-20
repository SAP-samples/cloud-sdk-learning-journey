import { Injectable } from '@nestjs/common';
import {
    businessPartnerService,
    BusinessPartner,
    BusinessPartnerAddress
} from '../../services/business-partner-service';
import { resilience } from '@sap-cloud-sdk/resilience';


const { businessPartnerApi, businessPartnerAddressApi } = businessPartnerService();

@Injectable()
export class BusinessPartnerService {
    async getAllBusinessPartners(): Promise<BusinessPartner[]> {

        console.log("APIKEY: ", process.env.APIKEY);
        console.log("URL: ", process.env.URL);

        return await businessPartnerApi
                        .requestBuilder()
                        .getAll()
                        .middleware(resilience({ timeout: 10000, circuitBreaker: true, retry: true }))
                        .select(
                            businessPartnerApi.schema.BUSINESS_PARTNER,
                            businessPartnerApi.schema.FIRST_NAME,
                            businessPartnerApi.schema.LAST_NAME
                        )
                        .filter(businessPartnerApi.schema.BUSINESS_PARTNER_CATEGORY.equals("1"))
                        .top(10)
                        .addCustomHeaders({apiKey: process.env.APIKEY})
                        // .execute({destinationName: process.env.DESTINATION_NAME});
                        .execute({url: process.env.URL});
    }

    async getBusinessPartnerById(id: string): Promise<BusinessPartner> {
        return await businessPartnerApi
            .requestBuilder()
            .getByKey(id)
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
                    businessPartnerAddressApi.schema.HOUSE_NUMBER
                )
            )
            .middleware(resilience({ timeout: 10000, circuitBreaker: true, retry: true }))
            .addCustomHeaders({ apikey: process.env.APIKEY })
            .execute({
                destinationName: process.env.DESTINATION_NAME
            });
    }

    async createAddress(
        address: Record<string, any>,
        businessPartnerId: string): Promise<BusinessPartnerAddress> {

        const businessPartnerAddress = businessPartnerAddressApi
            .entityBuilder()
            .fromJson({ businessPartner: businessPartnerId, ...address });

        return await businessPartnerAddressApi
            .requestBuilder()
            .create(businessPartnerAddress)
            .middleware(resilience({ timeout: 10000, circuitBreaker: true, retry: true }))
            .addCustomHeaders({ apikey: process.env.APIKEY })
            .execute({
                destinationName: process.env.DESTINATION_NAME
            });
    }

    async updateAddress(
        address: Record<string, any>,
        businessPartnerId: string, addressId: string): Promise<BusinessPartnerAddress> {

        const businessPartnerAddress = businessPartnerAddressApi
            .entityBuilder()
            .fromJson({ businessPartner: businessPartnerId, addressId, ...address });

        return await businessPartnerAddressApi
            .requestBuilder()
            .update(businessPartnerAddress)
            .middleware(resilience({ timeout: 10000, circuitBreaker: true, retry: true }))
            .addCustomHeaders({ apikey: process.env.APIKEY })
            .execute({
                destinationName: process.env.DESTINATION_NAME
            });
    }

    async deleteAddress(
        businessPartnerId: string,
        addressId: string): Promise<void> {

        return await businessPartnerAddressApi
            .requestBuilder()
            .delete(businessPartnerId, addressId)
            .middleware(resilience({ timeout: 10000, circuitBreaker: true, retry: true }))
            .addCustomHeaders({ apikey: process.env.APIKEY })
            .execute({
                destinationName: process.env.DESTINATION_NAME
            });
    }
}