import {
  Controller,
  Post,
  Body,
  Patch,
  Delete,
  Query,
  BadRequestException,
} from '@nestjs/common';
import { BusinessPartnerAddressService } from './business-partner-address.service';
import { businessPartnerService } from 'services/business-partner-service';

const { businessPartnerAddressApi } = businessPartnerService();

@Controller('api/addresses')
export class BusinessPartnerAddressController {
  @Post()
  async postBusinessPartnerAddress(@Body() body) {
    const bpa = businessPartnerAddressApi.entityBuilder().fromJson(body); //BusinessPartnerAddress.builder().fromJson(body);
    return BusinessPartnerAddressService.create(bpa).catch((error) => {
      console.log(
        `Failed to create business partner address - ${error.message}`,
      );
      throw new BadRequestException(error.message);
    });
  }

  @Patch()
  async patchBusinessPartnerAddress(@Body() body) {
    const bpa = businessPartnerAddressApi.entityBuilder().fromJson(body); //BusinessPartnerAddress.builder().fromJson(body);
    return BusinessPartnerAddressService.update(bpa).catch((error) => {
      console.log(
        `Failed to update business partner address ` +
          `${bpa.addressId} of business partner ${bpa.businessPartner} ` +
          ` - ${error.message}`,
      );
      throw new BadRequestException(error.message);
    });
  }

  @Delete()
  async deleteBusinessPartnerAddress(
    @Query('businessPartnerId') businessPartnerId: string,
    @Query('addressId') addressId: string,
  ) {
    return BusinessPartnerAddressService.delete(
      businessPartnerId,
      addressId,
    ).catch((error) => {
      console.log(
        `Failed to update business partner address ${addressId} of business partner ${businessPartnerId}:   ${error.message}`,
      );
      throw new BadRequestException(error.message);
    });
  }
}
