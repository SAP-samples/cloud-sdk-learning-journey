import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BusinessPartnerController } from './business-partner/business-partner.controller';
import { BusinessPartnerService } from './business-partner/business-partner.service';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { BusinessPartnerAddressController } from './business-partner/business-partner-address.controller';
import { BusinessPartnerAddressService } from './business-partner/business-partner-address.service';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'client'),
    }),
  ],
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
