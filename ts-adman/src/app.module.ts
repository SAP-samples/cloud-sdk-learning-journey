import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BusinessPartnerController } from './business-partner/business-partner.controller';

@Module({
  imports: [],
  controllers: [AppController, BusinessPartnerController],
  providers: [AppService],
})
export class AppModule {}
