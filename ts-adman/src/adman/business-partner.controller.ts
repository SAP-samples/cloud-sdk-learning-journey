import { Controller, Get, Query } from '@nestjs/common';
import { BusinessPartnerService } from './business-partner.service';
import { BusinessPartner } from '@sap/cloud-sdk-vdm-business-partner-service';

@Controller('api/business-partners')
export class BusinessPartnerController {

  @Get()
  async getBusinessPartners(@Query('id') id: string)
    : Promise<BusinessPartner[] | BusinessPartner> {
    if (id == null) {
      return BusinessPartnerService.findAll()
        .catch(error => {
          console.log(`Failed to get business partners - ${error.message}`);
          return null;
        });
    }
    else {
      return BusinessPartnerService.findById(id)
      .catch(error => {
        console.log(`Failed to get business partner ${id} - ${error.message}`);
        return null;
      });
    }
  }
}
