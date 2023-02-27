import { Body, Controller, Delete, Get, HttpCode, HttpException, Param, Post, Put, Req } from '@nestjs/common';
import { BusinessPartner, BusinessPartnerAddress } from '../../services/business-partner-service';
import { BusinessPartnerService } from './business-partner.service';
import { Request } from 'express';
import { retrieveJwt } from '@sap-cloud-sdk/connectivity';
import jwt_decode from "jwt-decode";

@Controller('/business-partner')
export class BusinessPartnerController {
    constructor(private businessPartnerService: BusinessPartnerService) { }

    @Get()
    async getBusinessPartners(@Req() request: Request): Promise<BusinessPartner[]> {

        const myJWT = retrieveJwt(request);
        console.log("JWT Token: ", myJWT);

        if (!myJWT) {
            throw new HttpException(
                `Missing JWT token.  Authentication failed...`,
                401
            );
        }

        let decodedJWT = jwt_decode(myJWT);
        console.log("Decoded JWT token: ", decodedJWT);

        return await this.businessPartnerService
            .getAllBusinessPartners()
            .catch(error => {

                console.log("Error: ", error.message);
                console.log("Error: ", error);

                throw new HttpException(
                    `Failed to get business partners - ${error.message}`,
                    500
                );
            });
    }

    @Get('/:id')
    async getBusinessPartnerById(@Req() request: Request, @Param('id') id: string): Promise<BusinessPartner> {

        const myJWT = retrieveJwt(request);
        console.log("JWT Token: ", myJWT);

        if (!myJWT) {
            throw new HttpException(
                `Missing JWT token.  Authentication failed...`,
                401
            );
        }

        return await this.businessPartnerService.getBusinessPartnerById(id);
    }

    @Post("/:businessPartnerId/address")
    @HttpCode(201)
    async createAddress(
        @Req() request: Request,
        @Body() requestBody: Record<string, any>,
        @Param("businessPartnerId") businessPartnerId: string): Promise<BusinessPartnerAddress> {

        const myJWT = retrieveJwt(request);
        console.log("JWT Token: ", myJWT);

        if (!myJWT) {
            throw new HttpException(
                `Missing JWT token.  Authentication failed...`,
                401
            );
        }

        let decodedJWT = jwt_decode(myJWT);
        console.log("Decoded JWT token: ", decodedJWT);

        if (!decodedJWT["xs.system.attributes"]["xs.rolecollections"].includes("TypeScript NestJS SDK Tutorial Admin")) {
            throw new HttpException(
                `Admin role is needed for CREATE, UPDATE, DELETE operation.  Authorization failed...`,
                401
            );
        }

        return await this.businessPartnerService.createAddress(requestBody, businessPartnerId);
    }

    @Put('/:businessPartnerId/address/:addressId')
    async updateBusinessPartnerAddress(
        @Req() request: Request,
        @Body() requestBody: Record<string, any>,
        @Param('businessPartnerId') businessPartnerId: string,
        @Param('addressId') addressId: string): Promise<BusinessPartnerAddress> {

        const myJWT = retrieveJwt(request);
        console.log("JWT Token: ", myJWT);

        if (!myJWT) {
            throw new HttpException(
                `Missing JWT token.  Authentication failed...`,
                401
            );
        }

        let decodedJWT = jwt_decode(myJWT);
        console.log("Decoded JWT token: ", decodedJWT);

        if (!decodedJWT["xs.system.attributes"]["xs.rolecollections"].includes("TypeScript NestJS SDK Tutorial Admin")) {
            throw new HttpException(
                `Admin role is needed for CREATE, UPDATE, DELETE operation.  Authorization failed...`,
                401
            );
        }

        return await this.businessPartnerService.updateAddress(requestBody, businessPartnerId, addressId);
    }

    @Delete("/:businessPartnerId/address/:addressId")
    @HttpCode(204)
    async deleteBusinessPartnerAddress(
        @Req() request: Request,
        @Param("businessPartnerId") businessPartnerId: string,
        @Param("addressId") addressId: string): Promise<void> {

        const myJWT = retrieveJwt(request);
        console.log("JWT Token: ", myJWT);

        if (!myJWT) {
            throw new HttpException(
                `Missing JWT token.  Authentication failed...`,
                401
            );
        }

        let decodedJWT = jwt_decode(myJWT);
        console.log("Decoded JWT token: ", decodedJWT);

        if (!decodedJWT["xs.system.attributes"]["xs.rolecollections"].includes("TypeScript NestJS SDK Tutorial Admin")) {
            throw new HttpException(
                `Admin role is needed for CREATE, UPDATE, DELETE operation.  Authorization failed...`,
                401
            );
        }

        return await this.businessPartnerService.deleteAddress(
            businessPartnerId,
            addressId
        );
    }
}