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
import type { SupplierPurchasingOrgApi } from './SupplierPurchasingOrgApi';
import {
  SupplierPartnerFunc,
  SupplierPartnerFuncType
} from './SupplierPartnerFunc';
import {
  SupplierPurchasingOrgText,
  SupplierPurchasingOrgTextType
} from './SupplierPurchasingOrgText';

/**
 * This class represents the entity "A_SupplierPurchasingOrg" of service "API_BUSINESS_PARTNER".
 */
export class SupplierPurchasingOrg<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SupplierPurchasingOrgType<T>
{
  /**
   * Technical entity name for SupplierPurchasingOrg.
   */
  static _entityName = 'A_SupplierPurchasingOrg';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
  /**
   * All key fields of the SupplierPurchasingOrg entity
   */
  static _keys = ['Supplier', 'PurchasingOrganization'];
  /**
   * Supplier's Account Number.
   * Maximum length: 10.
   */
  supplier!: DeserializedType<T, 'Edm.String'>;
  /**
   * Purchasing Organization.
   * Maximum length: 4.
   */
  purchasingOrganization!: DeserializedType<T, 'Edm.String'>;
  /**
   * Automatic evaluated receipt settlement for return items.
   * @nullable
   */
  automaticEvaluatedRcptSettlmt?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Group for Calculation Schema (Supplier).
   * Maximum length: 2.
   * @nullable
   */
  calculationSchemaGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deletion Indicator for Supplier at Purchasing Level.
   * @nullable
   */
  deletionIndicator?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Evaluated Receipt Settlement (ERS).
   * @nullable
   */
  evaldReceiptSettlementIsActive?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Incoterms (Part 1).
   * Maximum length: 3.
   * @nullable
   */
  incotermsClassification?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Incoterms (Part 2).
   * Maximum length: 28.
   * @nullable
   */
  incotermsTransferLocation?: DeserializedType<T, 'Edm.String'> | null;
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
   * Incoterms Location 2.
   * Maximum length: 70.
   * @nullable
   */
  incotermsLocation2?: DeserializedType<T, 'Edm.String'> | null;
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
   * Mode of Transport at the Border (Intrastat).
   * Maximum length: 1.
   * @nullable
   */
  intrastatCrsBorderTrMode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Indicator: GR-Based Invoice Verification.
   * @nullable
   */
  invoiceIsGoodsReceiptBased?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Indicator for Service-Based Invoice Verification.
   * @nullable
   */
  invoiceIsMmServiceEntryBased?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Planned Delivery Time in Days.
   * @nullable
   */
  materialPlannedDeliveryDurn?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Minimum order value.
   * @nullable
   */
  minimumOrderAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Terms of Payment Key.
   * Maximum length: 4.
   * @nullable
   */
  paymentTerms?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Planning Cycle.
   * Maximum length: 3.
   * @nullable
   */
  planningCycle?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Price Determination (Pricing) Date Control.
   * Maximum length: 1.
   * @nullable
   */
  pricingDateControl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Profile for transferring material data via IDoc PROACT.
   * Maximum length: 4.
   * @nullable
   */
  prodStockAndSlsDataTransfPrfl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Unit of Measure Group.
   * Maximum length: 4.
   * @nullable
   */
  productUnitGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Automatic Generation of Purchase Order Allowed.
   * @nullable
   */
  purOrdAutoGenerationIsAllowed?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Purchase order currency.
   * Maximum length: 5.
   * @nullable
   */
  purchaseOrderCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchasing Group.
   * Maximum length: 3.
   * @nullable
   */
  purchasingGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchasing block at purchasing organization level.
   * @nullable
   */
  purchasingIsBlockedForSupplier?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Rounding Profile.
   * Maximum length: 4.
   * @nullable
   */
  roundingProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Conditions.
   * Maximum length: 2.
   * @nullable
   */
  shippingCondition?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Checkbox.
   * @nullable
   */
  suplrDiscountInKindIsGranted?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Revaluation allowed.
   * @nullable
   */
  suplrInvcRevalIsAllowed?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Indicator: Relevant for Settlement Management.
   * @nullable
   */
  suplrIsRlvtForSettlmtMgmt?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Indicator: "relev. to price determination (vend. hierarchy).
   * @nullable
   */
  suplrPurgOrgIsRlvtForPriceDetn?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * ABC indicator.
   * Maximum length: 1.
   * @nullable
   */
  supplierAbcClassificationCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Our account number with the supplier.
   * Maximum length: 12.
   * @nullable
   */
  supplierAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Supplier's Telephone Number.
   * Maximum length: 16.
   * @nullable
   */
  supplierPhoneNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Responsible Salesperson at Supplier's Office.
   * Maximum length: 30.
   * @nullable
   */
  supplierRespSalesPersonName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Confirmation Control Key.
   * Maximum length: 4.
   * @nullable
   */
  supplierConfirmationControlKey?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Order Acknowledgment Requirement.
   * @nullable
   */
  isOrderAcknRqd?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Authorization Group.
   * Maximum length: 4.
   * @nullable
   */
  authorizationGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Supplier Account Group.
   * Maximum length: 4.
   * @nullable
   */
  supplierAccountGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link SupplierPartnerFunc} entity.
   */
  toPartnerFunction!: SupplierPartnerFunc<T>[];
  /**
   * One-to-many navigation property to the {@link SupplierPurchasingOrgText} entity.
   */
  toPurchasingOrgText!: SupplierPurchasingOrgText<T>[];

  constructor(readonly _entityApi: SupplierPurchasingOrgApi<T>) {
    super(_entityApi);
  }
}

export interface SupplierPurchasingOrgType<
  T extends DeSerializers = DefaultDeSerializers
> {
  supplier: DeserializedType<T, 'Edm.String'>;
  purchasingOrganization: DeserializedType<T, 'Edm.String'>;
  automaticEvaluatedRcptSettlmt?: DeserializedType<T, 'Edm.Boolean'> | null;
  calculationSchemaGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  deletionIndicator?: DeserializedType<T, 'Edm.Boolean'> | null;
  evaldReceiptSettlementIsActive?: DeserializedType<T, 'Edm.Boolean'> | null;
  incotermsClassification?: DeserializedType<T, 'Edm.String'> | null;
  incotermsTransferLocation?: DeserializedType<T, 'Edm.String'> | null;
  incotermsVersion?: DeserializedType<T, 'Edm.String'> | null;
  incotermsLocation1?: DeserializedType<T, 'Edm.String'> | null;
  incotermsLocation2?: DeserializedType<T, 'Edm.String'> | null;
  incotermsSupChnLoc1AddlUuid?: DeserializedType<T, 'Edm.Guid'> | null;
  incotermsSupChnLoc2AddlUuid?: DeserializedType<T, 'Edm.Guid'> | null;
  incotermsSupChnDvtgLocAddlUuid?: DeserializedType<T, 'Edm.Guid'> | null;
  intrastatCrsBorderTrMode?: DeserializedType<T, 'Edm.String'> | null;
  invoiceIsGoodsReceiptBased?: DeserializedType<T, 'Edm.Boolean'> | null;
  invoiceIsMmServiceEntryBased?: DeserializedType<T, 'Edm.Boolean'> | null;
  materialPlannedDeliveryDurn?: DeserializedType<T, 'Edm.Decimal'> | null;
  minimumOrderAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  paymentTerms?: DeserializedType<T, 'Edm.String'> | null;
  planningCycle?: DeserializedType<T, 'Edm.String'> | null;
  pricingDateControl?: DeserializedType<T, 'Edm.String'> | null;
  prodStockAndSlsDataTransfPrfl?: DeserializedType<T, 'Edm.String'> | null;
  productUnitGroup?: DeserializedType<T, 'Edm.String'> | null;
  purOrdAutoGenerationIsAllowed?: DeserializedType<T, 'Edm.Boolean'> | null;
  purchaseOrderCurrency?: DeserializedType<T, 'Edm.String'> | null;
  purchasingGroup?: DeserializedType<T, 'Edm.String'> | null;
  purchasingIsBlockedForSupplier?: DeserializedType<T, 'Edm.Boolean'> | null;
  roundingProfile?: DeserializedType<T, 'Edm.String'> | null;
  shippingCondition?: DeserializedType<T, 'Edm.String'> | null;
  suplrDiscountInKindIsGranted?: DeserializedType<T, 'Edm.Boolean'> | null;
  suplrInvcRevalIsAllowed?: DeserializedType<T, 'Edm.Boolean'> | null;
  suplrIsRlvtForSettlmtMgmt?: DeserializedType<T, 'Edm.Boolean'> | null;
  suplrPurgOrgIsRlvtForPriceDetn?: DeserializedType<T, 'Edm.Boolean'> | null;
  supplierAbcClassificationCode?: DeserializedType<T, 'Edm.String'> | null;
  supplierAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  supplierPhoneNumber?: DeserializedType<T, 'Edm.String'> | null;
  supplierRespSalesPersonName?: DeserializedType<T, 'Edm.String'> | null;
  supplierConfirmationControlKey?: DeserializedType<T, 'Edm.String'> | null;
  isOrderAcknRqd?: DeserializedType<T, 'Edm.Boolean'> | null;
  authorizationGroup?: DeserializedType<T, 'Edm.String'> | null;
  supplierAccountGroup?: DeserializedType<T, 'Edm.String'> | null;
  toPartnerFunction: SupplierPartnerFuncType<T>[];
  toPurchasingOrgText: SupplierPurchasingOrgTextType<T>[];
}
