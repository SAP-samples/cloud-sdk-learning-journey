import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BusinessPartnerController } from './business-partner/business-partner.controller';
import { BusinessPartnerService } from './business-partner/business-partner.service';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'client'),
    }),
  ],
  controllers: [AppController, BusinessPartnerController],
  providers: [AppService, BusinessPartnerService],
})
export class AppModule {}
