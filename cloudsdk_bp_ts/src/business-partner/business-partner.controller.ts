import { Body, Controller, Delete, Get, HttpCode, HttpException, Param, Post, Put, Req } from '@nestjs/common';
import { BusinessPartner, BusinessPartnerAddress } from '../../services/business-partner-service';
import { BusinessPartnerService } from './business-partner.service';
import { Request } from 'express';
import { retrieveJwt } from '@sap-cloud-sdk/connectivity';

@Controller('/business-partner')
export class BusinessPartnerController {
    constructor(private businessPartnerService: BusinessPartnerService) { }

    @Get()
    async getBusinessPartners(@Req() request: Request): Promise<BusinessPartner[]> {

        const myJwt = retrieveJwt(request);
        console.log("JWT Token: ", myJwt);

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
    async getBusinessPartnerById(@Param('id') id: string): Promise<BusinessPartner> {
        return await this.businessPartnerService.getBusinessPartnerById(id);
    }

    @Post("/:businessPartnerId/address")
    @HttpCode(201)
    async createAddress(
        @Body() requestBody: Record<string, any>,
        @Param("businessPartnerId") businessPartnerId: string): Promise<BusinessPartnerAddress> {

        return await this.businessPartnerService.createAddress(requestBody, businessPartnerId);
    }

    @Put('/:businessPartnerId/address/:addressId')
    async updateBusinessPartnerAddress(
        @Body() requestBody: Record<string, any>,
        @Param('businessPartnerId') businessPartnerId: string,
        @Param('addressId') addressId: string): Promise<BusinessPartnerAddress> {

        return await this.businessPartnerService.updateAddress(requestBody, businessPartnerId, addressId);
    }

    @Delete("/:businessPartnerId/address/:addressId")
    @HttpCode(204)
    async deleteBusinessPartnerAddress(
        @Param("businessPartnerId") businessPartnerId: string,
        @Param("addressId") addressId: string): Promise<void> {

        return await this.businessPartnerService.deleteAddress(
            businessPartnerId,
            addressId
        );
    }
}