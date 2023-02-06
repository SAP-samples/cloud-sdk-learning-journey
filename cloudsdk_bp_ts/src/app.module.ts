import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BusinessPartnerController } from './business-partner/business-partner.controller';
import { BusinessPartnerService } from './business-partner/business-partner.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, BusinessPartnerController],
  providers: [AppService, BusinessPartnerService],
})
export class AppModule {}
