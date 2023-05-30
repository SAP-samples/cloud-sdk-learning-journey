import { Controller, Get } from '@nestjs/common';

@Controller('business-partner')
export class BusinessPartnerController {
  @Get()
  getBusinessPartners() {
    return 'You will implement this in a minute.';
  }
}
