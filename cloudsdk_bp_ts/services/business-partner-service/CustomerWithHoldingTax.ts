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
import type { CustomerWithHoldingTaxApi } from './CustomerWithHoldingTaxApi';

/**
 * This class represents the entity "A_CustomerWithHoldingTax" of service "API_BUSINESS_PARTNER".
 */
export class CustomerWithHoldingTax<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CustomerWithHoldingTaxType<T>
{
  /**
   * Technical entity name for CustomerWithHoldingTax.
   */
  static _entityName = 'A_CustomerWithHoldingTax';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
  /**
   * All key fields of the CustomerWithHoldingTax entity
   */
  static _keys = ['Customer', 'CompanyCode', 'WithholdingTaxType'];
  /**
   * Customer Number.
   * Maximum length: 10.
   */
  customer!: DeserializedType<T, 'Edm.String'>;
  /**
   * Company Code.
   * Maximum length: 4.
   */
  companyCode!: DeserializedType<T, 'Edm.String'>;
  /**
   * Indicator for Withholding Tax Type.
   * Maximum length: 2.
   */
  withholdingTaxType!: DeserializedType<T, 'Edm.String'>;
  /**
   * Withholding tax code.
   * Maximum length: 2.
   * @nullable
   */
  withholdingTaxCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Indicator: Withholding tax agent?.
   * @nullable
   */
  withholdingTaxAgent?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Obligated to withhold tax from.
   * @nullable
   */
  obligationDateBegin?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Obligated to withhold tax until.
   * @nullable
   */
  obligationDateEnd?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Withholding tax identification number.
   * Maximum length: 16.
   * @nullable
   */
  withholdingTaxNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exemption certificate number.
   * Maximum length: 25.
   * @nullable
   */
  withholdingTaxCertificate?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exemption rate.
   * @nullable
   */
  withholdingTaxExmptPercent?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Date on which exemption begins.
   * @nullable
   */
  exemptionDateBegin?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Date on which exemption ends.
   * @nullable
   */
  exemptionDateEnd?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Reason for exemption.
   * Maximum length: 2.
   * @nullable
   */
  exemptionReason?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Authorization Group.
   * Maximum length: 4.
   * @nullable
   */
  authorizationGroup?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: CustomerWithHoldingTaxApi<T>) {
    super(_entityApi);
  }
}

export interface CustomerWithHoldingTaxType<
  T extends DeSerializers = DefaultDeSerializers
> {
  customer: DeserializedType<T, 'Edm.String'>;
  companyCode: DeserializedType<T, 'Edm.String'>;
  withholdingTaxType: DeserializedType<T, 'Edm.String'>;
  withholdingTaxCode?: DeserializedType<T, 'Edm.String'> | null;
  withholdingTaxAgent?: DeserializedType<T, 'Edm.Boolean'> | null;
  obligationDateBegin?: DeserializedType<T, 'Edm.DateTime'> | null;
  obligationDateEnd?: DeserializedType<T, 'Edm.DateTime'> | null;
  withholdingTaxNumber?: DeserializedType<T, 'Edm.String'> | null;
  withholdingTaxCertificate?: DeserializedType<T, 'Edm.String'> | null;
  withholdingTaxExmptPercent?: DeserializedType<T, 'Edm.Decimal'> | null;
  exemptionDateBegin?: DeserializedType<T, 'Edm.DateTime'> | null;
  exemptionDateEnd?: DeserializedType<T, 'Edm.DateTime'> | null;
  exemptionReason?: DeserializedType<T, 'Edm.String'> | null;
  authorizationGroup?: DeserializedType<T, 'Edm.String'> | null;
}
