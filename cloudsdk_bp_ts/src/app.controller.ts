import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
import { retrieveJwt } from '@sap-cloud-sdk/connectivity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() request: Request): string {

    const myJwt = retrieveJwt(request);
    console.log("JWT: ", myJwt);
    
    return this.appService.getHello();
  }
}
