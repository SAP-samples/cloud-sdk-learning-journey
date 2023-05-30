/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v2';
import type { CustomerSalesAreaApi } from './CustomerSalesAreaApi';
import {
  CustSalesPartnerFunc,
  CustSalesPartnerFuncType
} from './CustSalesPartnerFunc';
import {
  CustomerSalesAreaTax,
  CustomerSalesAreaTaxType
} from './CustomerSalesAreaTax';
import {
  CustomerSalesAreaText,
  CustomerSalesAreaTextType
} from './CustomerSalesAreaText';
import {
  CustSlsAreaAddrDepdntInfo,
  CustSlsAreaAddrDepdntInfoType
} from './CustSlsAreaAddrDepdntInfo';

/**
 * This class represents the entity "A_CustomerSalesArea" of service "API_BUSINESS_PARTNER".
 */
export class CustomerSalesArea<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CustomerSalesAreaType<T>
{
  /**
   * Technical entity name for CustomerSalesArea.
   */
  static _entityName = 'A_CustomerSalesArea';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
  /**
   * All key fields of the CustomerSalesArea entity
   */
  static _keys = [
    'Customer',
    'SalesOrganization',
    'DistributionChannel',
    'Division'
  ];
  /**
   * Customer Number.
   * Maximum length: 10.
   */
  customer!: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Organization.
   * Maximum length: 4.
   */
  salesOrganization!: DeserializedType<T, 'Edm.String'>;
  /**
   * Distribution Channel.
   * Maximum length: 2.
   */
  distributionChannel!: DeserializedType<T, 'Edm.String'>;
  /**
   * Division.
   * Maximum length: 2.
   */
  division!: DeserializedType<T, 'Edm.String'>;
  /**
   * Shipper's (Our) Account Number at the Customer or Vendor.
   * Maximum length: 12.
   * @nullable
   */
  accountByCustomer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Authorization Group.
   * Maximum length: 4.
   * @nullable
   */
  authorizationGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Billing block for customer (sales and distribution).
   * Maximum length: 2.
   * @nullable
   */
  billingIsBlockedForCustomer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Complete Delivery Defined for Each Sales Order?.
   * @nullable
   */
  completeDeliveryIsDefined?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Credit Control Area.
   * Maximum length: 4.
   * @nullable
   */
  creditControlArea?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency.
   * Maximum length: 5.
   * @nullable
   */
  currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Indicator: Relevant for Settlement Management.
   * @nullable
   */
  custIsRlvtForSettlmtMgmt?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Customer classification (ABC analysis).
   * Maximum length: 2.
   * @nullable
   */
  customerAbcClassification?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Assignment Group for Customer.
   * Maximum length: 2.
   * @nullable
   */
  customerAccountAssignmentGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Group.
   * Maximum length: 2.
   * @nullable
   */
  customerGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Indicator: Customer Is Rebate-Relevant.
   * @nullable
   */
  customerIsRebateRelevant?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Terms of Payment Key.
   * Maximum length: 4.
   * @nullable
   */
  customerPaymentTerms?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Price Group.
   * Maximum length: 2.
   * @nullable
   */
  customerPriceGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Classification for Pricing Procedure Determination.
   * Maximum length: 2.
   * @nullable
   */
  customerPricingProcedure?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer procedure for product proposal.
   * Maximum length: 2.
   * @nullable
   */
  custProdProposalProcedure?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer delivery block (sales area).
   * Maximum length: 2.
   * @nullable
   */
  deliveryIsBlockedForCustomer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Priority.
   * Maximum length: 2.
   * @nullable
   */
  deliveryPriority?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Incoterms (Part 1).
   * Maximum length: 3.
   * @nullable
   */
  incotermsClassification?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Incoterms Location 2.
   * Maximum length: 70.
   * @nullable
   */
  incotermsLocation2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Incoterms Version.
   * Maximum length: 4.
   * @nullable
   */
  incotermsVersion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Incoterms Location 1.
   * Maximum length: 70.
   * @nullable
   */
  incotermsLocation1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Location UUID.
   * @nullable
   */
  incotermsSupChnLoc1AddlUuid?: DeserializedType<T, 'Edm.Guid'> | null;
  /**
   * Location UUID.
   * @nullable
   */
  incotermsSupChnLoc2AddlUuid?: DeserializedType<T, 'Edm.Guid'> | null;
  /**
   * Location UUID.
   * @nullable
   */
  incotermsSupChnDvtgLocAddlUuid?: DeserializedType<T, 'Edm.Guid'> | null;
  /**
   * Deletion flag for customer (sales level).
   * @nullable
   */
  deletionIndicator?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Incoterms (Part 2).
   * Maximum length: 28.
   * @nullable
   */
  incotermsTransferLocation?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Relevant for price determination ID.
   * @nullable
   */
  inspSbstHasNoTimeOrQuantity?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Invoice Dates (Calendar Identification).
   * Maximum length: 2.
   * @nullable
   */
  invoiceDate?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Order Probability of the Item.
   * Maximum length: 3.
   * @nullable
   */
  itemOrderProbabilityInPercent?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Manual Invoice Maintenance.
   * @nullable
   */
  manualInvoiceMaintIsRelevant?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Maximum Number of Partial Deliveries Allowed Per Item.
   * @nullable
   */
  maxNmbrOfPartialDelivery?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Order Combination Indicator.
   * @nullable
   */
  orderCombinationIsAllowed?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Customer order block (sales area).
   * Maximum length: 2.
   * @nullable
   */
  orderIsBlockedForCustomer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Overdelivery Tolerance.
   * @nullable
   */
  overdelivTolrtdLmtRatioInPct?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Partial Delivery at Item Level.
   * Maximum length: 1.
   * @nullable
   */
  partialDeliveryIsAllowed?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price List Type.
   * Maximum length: 2.
   * @nullable
   */
  priceListType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit of Measure Group.
   * Maximum length: 4.
   * @nullable
   */
  productUnitGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Timeframe for Confirmation of POD.
   * @nullable
   */
  proofOfDeliveryTimeValue?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Sales Group.
   * Maximum length: 3.
   * @nullable
   */
  salesGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item proposal.
   * Maximum length: 10.
   * @nullable
   */
  salesItemProposal?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales Office.
   * Maximum length: 4.
   * @nullable
   */
  salesOffice?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Conditions.
   * Maximum length: 2.
   * @nullable
   */
  shippingCondition?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Relevant for POD processing.
   * @nullable
   */
  slsDocIsRlvtForProofOfDeliv?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Unlimited Overdelivery Allowed.
   * @nullable
   */
  slsUnlmtdOvrdelivIsAllwd?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Delivering Plant (Own or External).
   * Maximum length: 4.
   * @nullable
   */
  supplyingPlant?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sales District.
   * Maximum length: 6.
   * @nullable
   */
  salesDistrict?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Underdelivery Tolerance.
   * @nullable
   */
  underdelivTolrtdLmtRatioInPct?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Invoice List Schedule (calendar identification).
   * Maximum length: 2.
   * @nullable
   */
  invoiceListSchedule?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exchange Rate Type.
   * Maximum length: 4.
   * @nullable
   */
  exchangeRateType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Group 1.
   * Maximum length: 3.
   * @nullable
   */
  additionalCustomerGroup1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Group 2.
   * Maximum length: 3.
   * @nullable
   */
  additionalCustomerGroup2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Group 3.
   * Maximum length: 3.
   * @nullable
   */
  additionalCustomerGroup3?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Group 4.
   * Maximum length: 3.
   * @nullable
   */
  additionalCustomerGroup4?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Group 5.
   * Maximum length: 3.
   * @nullable
   */
  additionalCustomerGroup5?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer payment guarantee procedure.
   * Maximum length: 4.
   * @nullable
   */
  paymentGuaranteeProcedure?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Account Group.
   * Maximum length: 4.
   * @nullable
   */
  customerAccountGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link CustSalesPartnerFunc} entity.
   */
  toPartnerFunction!: CustSalesPartnerFunc<T>[];
  /**
   * One-to-many navigation property to the {@link CustomerSalesAreaTax} entity.
   */
  toSalesAreaTax!: CustomerSalesAreaTax<T>[];
  /**
   * One-to-many navigation property to the {@link CustomerSalesAreaText} entity.
   */
  toSalesAreaText!: CustomerSalesAreaText<T>[];
  /**
   * One-to-many navigation property to the {@link CustSlsAreaAddrDepdntInfo} entity.
   */
  toSlsAreaAddrDepdntInfo!: CustSlsAreaAddrDepdntInfo<T>[];

  constructor(readonly _entityApi: CustomerSalesAreaApi<T>) {
    super(_entityApi);
  }
}

export interface CustomerSalesAreaType<
  T extends DeSerializers = DefaultDeSerializers
> {
  customer: DeserializedType<T, 'Edm.String'>;
  salesOrganization: DeserializedType<T, 'Edm.String'>;
  distributionChannel: DeserializedType<T, 'Edm.String'>;
  division: DeserializedType<T, 'Edm.String'>;
  accountByCustomer?: DeserializedType<T, 'Edm.String'> | null;
  authorizationGroup?: DeserializedType<T, 'Edm.String'> | null;
  billingIsBlockedForCustomer?: DeserializedType<T, 'Edm.String'> | null;
  completeDeliveryIsDefined?: DeserializedType<T, 'Edm.Boolean'> | null;
  creditControlArea?: DeserializedType<T, 'Edm.String'> | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  custIsRlvtForSettlmtMgmt?: DeserializedType<T, 'Edm.Boolean'> | null;
  customerAbcClassification?: DeserializedType<T, 'Edm.String'> | null;
  customerAccountAssignmentGroup?: DeserializedType<T, 'Edm.String'> | null;
  customerGroup?: DeserializedType<T, 'Edm.String'> | null;
  customerIsRebateRelevant?: DeserializedType<T, 'Edm.Boolean'> | null;
  customerPaymentTerms?: DeserializedType<T, 'Edm.String'> | null;
  customerPriceGroup?: DeserializedType<T, 'Edm.String'> | null;
  customerPricingProcedure?: DeserializedType<T, 'Edm.String'> | null;
  custProdProposalProcedure?: DeserializedType<T, 'Edm.String'> | null;
  deliveryIsBlockedForCustomer?: DeserializedType<T, 'Edm.String'> | null;
  deliveryPriority?: DeserializedType<T, 'Edm.String'> | null;
  incotermsClassification?: DeserializedType<T, 'Edm.String'> | null;
  incotermsLocation2?: DeserializedType<T, 'Edm.String'> | null;
  incotermsVersion?: DeserializedType<T, 'Edm.String'> | null;
  incotermsLocation1?: DeserializedType<T, 'Edm.String'> | null;
  incotermsSupChnLoc1AddlUuid?: DeserializedType<T, 'Edm.Guid'> | null;
  incotermsSupChnLoc2AddlUuid?: DeserializedType<T, 'Edm.Guid'> | null;
  incotermsSupChnDvtgLocAddlUuid?: DeserializedType<T, 'Edm.Guid'> | null;
  deletionIndicator?: DeserializedType<T, 'Edm.Boolean'> | null;
  incotermsTransferLocation?: DeserializedType<T, 'Edm.String'> | null;
  inspSbstHasNoTimeOrQuantity?: DeserializedType<T, 'Edm.Boolean'> | null;
  invoiceDate?: DeserializedType<T, 'Edm.String'> | null;
  itemOrderProbabilityInPercent?: DeserializedType<T, 'Edm.String'> | null;
  manualInvoiceMaintIsRelevant?: DeserializedType<T, 'Edm.Boolean'> | null;
  maxNmbrOfPartialDelivery?: DeserializedType<T, 'Edm.Decimal'> | null;
  orderCombinationIsAllowed?: DeserializedType<T, 'Edm.Boolean'> | null;
  orderIsBlockedForCustomer?: DeserializedType<T, 'Edm.String'> | null;
  overdelivTolrtdLmtRatioInPct?: DeserializedType<T, 'Edm.Decimal'> | null;
  partialDeliveryIsAllowed?: DeserializedType<T, 'Edm.String'> | null;
  priceListType?: DeserializedType<T, 'Edm.String'> | null;
  productUnitGroup?: DeserializedType<T, 'Edm.String'> | null;
  proofOfDeliveryTimeValue?: DeserializedType<T, 'Edm.Decimal'> | null;
  salesGroup?: DeserializedType<T, 'Edm.String'> | null;
  salesItemProposal?: DeserializedType<T, 'Edm.String'> | null;
  salesOffice?: DeserializedType<T, 'Edm.String'> | null;
  shippingCondition?: DeserializedType<T, 'Edm.String'> | null;
  slsDocIsRlvtForProofOfDeliv?: DeserializedType<T, 'Edm.Boolean'> | null;
  slsUnlmtdOvrdelivIsAllwd?: DeserializedType<T, 'Edm.Boolean'> | null;
  supplyingPlant?: DeserializedType<T, 'Edm.String'> | null;
  salesDistrict?: DeserializedType<T, 'Edm.String'> | null;
  underdelivTolrtdLmtRatioInPct?: DeserializedType<T, 'Edm.Decimal'> | null;
  invoiceListSchedule?: DeserializedType<T, 'Edm.String'> | null;
  exchangeRateType?: DeserializedType<T, 'Edm.String'> | null;
  additionalCustomerGroup1?: DeserializedType<T, 'Edm.String'> | null;
  additionalCustomerGroup2?: DeserializedType<T, 'Edm.String'> | null;
  additionalCustomerGroup3?: DeserializedType<T, 'Edm.String'> | null;
  additionalCustomerGroup4?: DeserializedType<T, 'Edm.String'> | null;
  additionalCustomerGroup5?: DeserializedType<T, 'Edm.String'> | null;
  paymentGuaranteeProcedure?: DeserializedType<T, 'Edm.String'> | null;
  customerAccountGroup?: DeserializedType<T, 'Edm.String'> | null;
  toPartnerFunction: CustSalesPartnerFuncType<T>[];
  toSalesAreaTax: CustomerSalesAreaTaxType<T>[];
  toSalesAreaText: CustomerSalesAreaTextType<T>[];
  toSlsAreaAddrDepdntInfo: CustSlsAreaAddrDepdntInfoType<T>[];
}
