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
import type { BusinessPartnerRatingApi } from './BusinessPartnerRatingApi';

/**
 * This class represents the entity "A_BusinessPartnerRating" of service "API_BUSINESS_PARTNER".
 */
export class BusinessPartnerRating<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BusinessPartnerRatingType<T>
{
  /**
   * Technical entity name for BusinessPartnerRating.
   */
  static _entityName = 'A_BusinessPartnerRating';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
  /**
   * All key fields of the BusinessPartnerRating entity
   */
  static _keys = [
    'BusinessPartner',
    'BusinessPartnerRatingProcedure',
    'BPRatingValidityEndDate'
  ];
  /**
   * Business Partner Number.
   * Maximum length: 10.
   */
  businessPartner!: DeserializedType<T, 'Edm.String'>;
  /**
   * Rating Procedure.
   * Maximum length: 10.
   */
  businessPartnerRatingProcedure!: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid-to Date for Rating.
   */
  bpRatingValidityEndDate!: DeserializedType<T, 'Edm.DateTime'>;
  /**
   * Rating.
   * Maximum length: 10.
   * @nullable
   */
  businessPartnerRatingGrade?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trend.
   * Maximum length: 2.
   * @nullable
   */
  businessPartnerRatingTrend?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Valid-from Date for Rating.
   * @nullable
   */
  bpRatingValidityStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Entered-on Date for Rating.
   * @nullable
   */
  bpRatingCreationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Text for Ratings.
   * Maximum length: 60.
   * @nullable
   */
  businessPartnerRatingComment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rating Allowed.
   * @nullable
   */
  businessPartnerRatingIsAllowed?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Business Partner Rating is valid on Key Date.
   * @nullable
   */
  bpRatingIsValidOnKeyDate?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Key Date of Accessing Business Partner Rating Data.
   * @nullable
   */
  businessPartnerRatingKeyDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Rating Validity is Expired according to Permitted Period.
   * @nullable
   */
  businessPartnerRatingIsExpired?: DeserializedType<T, 'Edm.Boolean'> | null;

  constructor(readonly _entityApi: BusinessPartnerRatingApi<T>) {
    super(_entityApi);
  }
}

export interface BusinessPartnerRatingType<
  T extends DeSerializers = DefaultDeSerializers
> {
  businessPartner: DeserializedType<T, 'Edm.String'>;
  businessPartnerRatingProcedure: DeserializedType<T, 'Edm.String'>;
  bpRatingValidityEndDate: DeserializedType<T, 'Edm.DateTime'>;
  businessPartnerRatingGrade?: DeserializedType<T, 'Edm.String'> | null;
  businessPartnerRatingTrend?: DeserializedType<T, 'Edm.String'> | null;
  bpRatingValidityStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  bpRatingCreationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  businessPartnerRatingComment?: DeserializedType<T, 'Edm.String'> | null;
  businessPartnerRatingIsAllowed?: DeserializedType<T, 'Edm.Boolean'> | null;
  bpRatingIsValidOnKeyDate?: DeserializedType<T, 'Edm.Boolean'> | null;
  businessPartnerRatingKeyDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  businessPartnerRatingIsExpired?: DeserializedType<T, 'Edm.Boolean'> | null;
}
