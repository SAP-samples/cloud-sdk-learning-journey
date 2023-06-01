'use strict';

sap.ui.define([], function () {
  return {
    create: function (oAddressData, sBusinessPartnerId) {
      if (oAddressData) {
        oAddressData.isNew = false;
        return oAddressData;
      }
      return {
        businessPartner: sBusinessPartnerId,
        cityName: '',
        country: '',
        houseNumber: '',
        postalCode: '',
        streetName: '',
        isNew: true,
      };
    },
  };
});
