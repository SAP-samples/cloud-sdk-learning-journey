import { Injectable } from '@nestjs/common';
import { BusinessPartnerAddress, businessPartnerService } from '@sap/cloud-sdk-vdm-business-partner-service';
import { BackendConnector } from './backend-connector'

const { businessPartnerAddressApi } = businessPartnerService();

@Injectable()
export class BusinessPartnerAddressService {

    public static async create(address: BusinessPartnerAddress) : Promise<BusinessPartnerAddress> {
        return businessPartnerAddressApi.requestBuilder()
            .create(address)
            .addCustomHeaders({
                APIKey: BackendConnector.getApikey()
                })
            .execute( BackendConnector.getDestination() );
    }

    public static update(address: BusinessPartnerAddress) : Promise<BusinessPartnerAddress> {
        return businessPartnerAddressApi.requestBuilder()
            .update(address)
            .ignoreVersionIdentifier()
            .addCustomHeaders({
                APIKey: BackendConnector.getApikey()
                })
            .execute( BackendConnector.getDestination() );
    }

    public static delete(businessPartner: string, addressId: string) 
        : Promise<void> {
        return businessPartnerAddressApi.requestBuilder()
            .delete(businessPartner, addressId)
            .addCustomHeaders({
                APIKey: BackendConnector.getApikey()
                })
            .execute( BackendConnector.getDestination() );
    }

}
