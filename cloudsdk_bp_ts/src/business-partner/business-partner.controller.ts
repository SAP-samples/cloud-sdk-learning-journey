import { Body, Controller, Delete, Get, HttpCode, HttpException, Param, Post, Put } from '@nestjs/common';
import { BusinessPartner, BusinessPartnerAddress } from '../../services/business-partner-service';
import { BusinessPartnerService } from './business-partner.service';

@Controller('business-partner')
export class BusinessPartnerController {
    constructor(private businessPartnerService: BusinessPartnerService) { }

    @Get()
    async getBusinessPartners(): Promise<BusinessPartner[]> {
        return await this.businessPartnerService
            .getAllBusinessPartners()
            .catch(error => {
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