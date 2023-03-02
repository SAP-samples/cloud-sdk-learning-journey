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
import type { BpFiscalYearInformationApi } from './BpFiscalYearInformationApi';

/**
 * This class represents the entity "A_BPFiscalYearInformation" of service "API_BUSINESS_PARTNER".
 */
export class BpFiscalYearInformation<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BpFiscalYearInformationType<T>
{
  /**
   * Technical entity name for BpFiscalYearInformation.
   */
  static _entityName = 'A_BPFiscalYearInformation';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
  /**
   * All key fields of the BpFiscalYearInformation entity
   */
  static _keys = ['BusinessPartner', 'BusinessPartnerFiscalYear'];
  /**
   * Business Partner Number.
   * Maximum length: 10.
   */
  businessPartner!: DeserializedType<T, 'Edm.String'>;
  /**
   * Fiscal year.
   * Maximum length: 4.
   */
  businessPartnerFiscalYear!: DeserializedType<T, 'Edm.String'>;
  /**
   * Balance Sheet Currency.
   * Maximum length: 5.
   * @nullable
   */
  bpBalanceSheetCurrency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date of Annual Stockholders Meeting.
   * @nullable
   */
  bpAnnualStockholderMeetingDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Fiscal Year Start Date.
   * @nullable
   */
  bpFiscalYearStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Fiscal Year End Date.
   * @nullable
   */
  bpFiscalYearEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Year-End Closing.
   * @nullable
   */
  bpFiscalYearIsClosed?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Year-End Closing Date for Fiscal Year.
   * @nullable
   */
  bpFiscalYearClosingDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Date of Consolidated Financial Statements of Group Company.
   * @nullable
   */
  bpFsclYrCnsldtdFinStatementDte?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Amount of Authorized Capital Stock for Company.
   * @nullable
   */
  bpCapitalStockAmtInBalShtCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Amount of Issued Stock Capital for Company.
   * @nullable
   */
  bpIssdStockCptlAmtInBalShtCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Amount of Participation Certificates Outstanding for Company.
   * @nullable
   */
  bpPartcipnCertAmtInBalShtCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Amount of Equity Capital for Company.
   * @nullable
   */
  bpEquityCapitalAmtInBalShtCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Gross Premium.
   * @nullable
   */
  bpGrossPremiumAmtInBalShtCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Net Premium.
   * @nullable
   */
  bpNetPremiumAmtInBalShtCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Amount of Annual Sales for Company.
   * @nullable
   */
  bpAnnualSalesAmtInBalShtCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Amount of Annual Net Income/Net Loss for Company.
   * @nullable
   */
  bpAnnualNetIncAmtInBalShtCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Dividend/Profit Distribution Amount for Company.
   * @nullable
   */
  bpDividendDistrAmtInBalShtCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Debt Ratio in Years.
   * @nullable
   */
  bpDebtRatioInYears?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Amount of Annual Profit/Loss for Organization.
   * @nullable
   */
  bpAnnualPnLAmtInBalShtCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Amount of Balance Sheet Total for Company.
   * @nullable
   */
  bpBalSheetTotalAmtInBalShtCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Number of Employees in Company.
   * Maximum length: 7.
   * @nullable
   */
  bpNumberOfEmployees?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Amount of Capital Reserve for Company.
   * @nullable
   */
  bpCptlReserveAmtInBalShtCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Amount of Legal Revenue Reserves for Company.
   * @nullable
   */
  bpLglRevnRsrvAmtInBalShtCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Revenue Reserves for Own Stock.
   * @nullable
   */
  revnRsrvOwnStkAmtInBalShtCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Amount of Statutory Revenue Reserve for Company.
   * @nullable
   */
  bpStatryReserveAmtInBalShtCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Amount of Other Revenue Reserves for Company.
   * @nullable
   */
  bpOthRevnRsrvAmtInBalShtCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Amount of Profit/Loss Carried Forward for Company.
   * @nullable
   */
  bpPnLCarryfwdAmtInBalShtCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Amount of Subordinated Liabilities for Company.
   * @nullable
   */
  bpSuborddLbltyAmtInBalShtCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Return on Total Capital Employed for Company in Percent.
   * @nullable
   */
  bpRetOnTotalCptlEmpldInPercent?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Debt Clearance Period in Years.
   * @nullable
   */
  bpDebtClearancePeriodInYears?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Financing Coefficient for Company in Percent.
   * @nullable
   */
  bpFinancingCoeffInPercent?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Equity Ratio of Company in Percent.
   * @nullable
   */
  bpEquityRatioInPercent?: DeserializedType<T, 'Edm.Decimal'> | null;

  constructor(readonly _entityApi: BpFiscalYearInformationApi<T>) {
    super(_entityApi);
  }
}

export interface BpFiscalYearInformationType<
  T extends DeSerializers = DefaultDeSerializers
> {
  businessPartner: DeserializedType<T, 'Edm.String'>;
  businessPartnerFiscalYear: DeserializedType<T, 'Edm.String'>;
  bpBalanceSheetCurrency?: DeserializedType<T, 'Edm.String'> | null;
  bpAnnualStockholderMeetingDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  bpFiscalYearStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  bpFiscalYearEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  bpFiscalYearIsClosed?: DeserializedType<T, 'Edm.Boolean'> | null;
  bpFiscalYearClosingDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  bpFsclYrCnsldtdFinStatementDte?: DeserializedType<T, 'Edm.DateTime'> | null;
  bpCapitalStockAmtInBalShtCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  bpIssdStockCptlAmtInBalShtCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  bpPartcipnCertAmtInBalShtCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  bpEquityCapitalAmtInBalShtCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  bpGrossPremiumAmtInBalShtCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  bpNetPremiumAmtInBalShtCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  bpAnnualSalesAmtInBalShtCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  bpAnnualNetIncAmtInBalShtCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  bpDividendDistrAmtInBalShtCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  bpDebtRatioInYears?: DeserializedType<T, 'Edm.Decimal'> | null;
  bpAnnualPnLAmtInBalShtCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  bpBalSheetTotalAmtInBalShtCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  bpNumberOfEmployees?: DeserializedType<T, 'Edm.String'> | null;
  bpCptlReserveAmtInBalShtCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  bpLglRevnRsrvAmtInBalShtCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  revnRsrvOwnStkAmtInBalShtCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  bpStatryReserveAmtInBalShtCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  bpOthRevnRsrvAmtInBalShtCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  bpPnLCarryfwdAmtInBalShtCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  bpSuborddLbltyAmtInBalShtCrcy?: DeserializedType<T, 'Edm.Decimal'> | null;
  bpRetOnTotalCptlEmpldInPercent?: DeserializedType<T, 'Edm.Decimal'> | null;
  bpDebtClearancePeriodInYears?: DeserializedType<T, 'Edm.Decimal'> | null;
  bpFinancingCoeffInPercent?: DeserializedType<T, 'Edm.Decimal'> | null;
  bpEquityRatioInPercent?: DeserializedType<T, 'Edm.Decimal'> | null;
}
