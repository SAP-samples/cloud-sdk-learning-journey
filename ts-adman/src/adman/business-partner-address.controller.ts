import { Controller, Post, Body, Patch, Delete, Query } from '@nestjs/common';
import { BusinessPartnerAddressService } from './business-partner-address.service';
import { businessPartnerService } from '@sap/cloud-sdk-vdm-business-partner-service';

const { businessPartnerAddressApi } = businessPartnerService();

@Controller('api/addresses')
export class BusinessPartnerAddressController {

  @Post()
  async postBusinessPartnerAddress( @Body() body ) {
    let bpa = businessPartnerAddressApi.entityBuilder().fromJson(body); //BusinessPartnerAddress.builder().fromJson(body);
    await BusinessPartnerAddressService.create(bpa)
      .catch(error => {
        console.log(`Failed to create business partner address - ${error.message}`);
      });
  }

  @Patch()
  async patchBusinessPartnerAddress( @Body() body ) {
    let bpa = businessPartnerAddressApi.entityBuilder().fromJson(body); //BusinessPartnerAddress.builder().fromJson(body);
    await BusinessPartnerAddressService.update(bpa)
      .catch(error => {
        console.log(`Failed to update business partner address ` 
            + `${bpa.addressId} of business partner ${bpa.businessPartner} ` 
            + ` - ${error.message}`);
      });
    }

    @Delete()
    async deleteBusinessPartnerAddress(
      @Query('businessPartnerId') businessPartnerId: string,
      @Query('addressId') addressId: string) {
      
        await BusinessPartnerAddressService.delete(businessPartnerId, addressId)
          .catch(error => {
            console.log(`Failed to update business partner address ` 
                + `${addressId} of business partner ${businessPartnerId} ` 
                + ` - ${error.message}`);
      });

    }

}
