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
import type { CustAddrDepdntExtIdentifierApi } from './CustAddrDepdntExtIdentifierApi';

/**
 * This class represents the entity "A_CustAddrDepdntExtIdentifier" of service "API_BUSINESS_PARTNER".
 */
export class CustAddrDepdntExtIdentifier<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CustAddrDepdntExtIdentifierType<T>
{
  /**
   * Technical entity name for CustAddrDepdntExtIdentifier.
   */
  static _entityName = 'A_CustAddrDepdntExtIdentifier';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
  /**
   * All key fields of the CustAddrDepdntExtIdentifier entity
   */
  static _keys = ['Customer', 'AddressID'];
  /**
   * Customer Number.
   * Maximum length: 10.
   */
  customer!: DeserializedType<T, 'Edm.String'>;
  /**
   * Business Partner Address Number (from BUT020).
   * Maximum length: 10.
   */
  addressId!: DeserializedType<T, 'Edm.String'>;
  /**
   * Customer Identifier for External System.
   * Maximum length: 12.
   * @nullable
   */
  customerExternalRefId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(readonly _entityApi: CustAddrDepdntExtIdentifierApi<T>) {
    super(_entityApi);
  }
}

export interface CustAddrDepdntExtIdentifierType<
  T extends DeSerializers = DefaultDeSerializers
> {
  customer: DeserializedType<T, 'Edm.String'>;
  addressId: DeserializedType<T, 'Edm.String'>;
  customerExternalRefId?: DeserializedType<T, 'Edm.String'> | null;
}
