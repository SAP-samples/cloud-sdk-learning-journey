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
import type { BpRelationshipApi } from './BpRelationshipApi';

/**
 * This class represents the entity "A_BPRelationship" of service "API_BUSINESS_PARTNER".
 */
export class BpRelationship<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BpRelationshipType<T>
{
  /**
   * Technical entity name for BpRelationship.
   */
  static _entityName = 'A_BPRelationship';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
  /**
   * All key fields of the BpRelationship entity
   */
  static _keys = [
    'RelationshipNumber',
    'BusinessPartner1',
    'BusinessPartner2',
    'ValidityEndDate'
  ];
  /**
   * BP Relationship Number.
   * Maximum length: 12.
   */
  relationshipNumber!: DeserializedType<T, 'Edm.String'>;
  /**
   * Business Partner Number.
   * Maximum length: 10.
   */
  businessPartner1!: DeserializedType<T, 'Edm.String'>;
  /**
   * Business Partner Number.
   * Maximum length: 10.
   */
  businessPartner2!: DeserializedType<T, 'Edm.String'>;
  /**
   * Validity Date (Valid To).
   */
  validityEndDate!: DeserializedType<T, 'Edm.DateTime'>;
  /**
   * Validity Date (Valid From).
   * @nullable
   */
  validityStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Standard Relationship.
   * @nullable
   */
  isStandardRelationship?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Business Partner Relationship Category.
   * Maximum length: 6.
   * @nullable
   */
  relationshipCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Business partner relationship type.
   * Maximum length: 4.
   * @nullable
   */
  bpRelationshipType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * User who created the object.
   * Maximum length: 12.
   * @nullable
   */
  createdByUser?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date on which the object was created.
   * @nullable
   */
  creationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Time at which the object was created.
   * @nullable
   */
  creationTime?: DeserializedType<T, 'Edm.Time'> | null;
  /**
   * Last user to change object.
   * Maximum length: 12.
   * @nullable
   */
  lastChangedByUser?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date when object was last changed.
   * @nullable
   */
  lastChangeDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Time at which object was last changed.
   * @nullable
   */
  lastChangeTime?: DeserializedType<T, 'Edm.Time'> | null;

  constructor(readonly _entityApi: BpRelationshipApi<T>) {
    super(_entityApi);
  }
}

export interface BpRelationshipType<
  T extends DeSerializers = DefaultDeSerializers
> {
  relationshipNumber: DeserializedType<T, 'Edm.String'>;
  businessPartner1: DeserializedType<T, 'Edm.String'>;
  businessPartner2: DeserializedType<T, 'Edm.String'>;
  validityEndDate: DeserializedType<T, 'Edm.DateTime'>;
  validityStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  isStandardRelationship?: DeserializedType<T, 'Edm.Boolean'> | null;
  relationshipCategory?: DeserializedType<T, 'Edm.String'> | null;
  bpRelationshipType?: DeserializedType<T, 'Edm.String'> | null;
  createdByUser?: DeserializedType<T, 'Edm.String'> | null;
  creationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  creationTime?: DeserializedType<T, 'Edm.Time'> | null;
  lastChangedByUser?: DeserializedType<T, 'Edm.String'> | null;
  lastChangeDate?: DeserializedType<T, 'Edm.DateTime'> | null;
  lastChangeTime?: DeserializedType<T, 'Edm.Time'> | null;
}
