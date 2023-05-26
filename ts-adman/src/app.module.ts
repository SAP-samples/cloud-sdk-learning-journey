import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BusinessPartnerController } from './adman/business-partner.controller';
import { BusinessPartnerService } from './adman/business-partner.service';
import { BusinessPartnerAddressController } from './adman/business-partner-address.controller';
import { BusinessPartnerAddressService } from './adman/business-partner-address.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    BusinessPartnerController,
    BusinessPartnerAddressController,
  ],
  providers: [
    AppService,
    BusinessPartnerService,
    BusinessPartnerAddressService,
  ],
})
export class AppModule {}
