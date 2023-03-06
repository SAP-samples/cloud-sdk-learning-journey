import {
  BusinessPartner,
  businessPartnerService,
} from "../services/business-partner-service";

async function getAllBusinessPartners(): Promise<BusinessPartner[]> {
  const { businessPartnerApi, businessPartnerAddressApi } =
    businessPartnerService();
  return await businessPartnerApi
    .requestBuilder()
    .getAll()
    .select(
      businessPartnerApi.schema.BUSINESS_PARTNER,
      businessPartnerApi.schema.FIRST_NAME,
      businessPartnerApi.schema.LAST_NAME,
      businessPartnerApi.schema.TO_BUSINESS_PARTNER_ADDRESS.select(
        businessPartnerAddressApi.schema.ADDRESS_ID,
        businessPartnerAddressApi.schema.COUNTRY,
        businessPartnerAddressApi.schema.CITY_NAME
      )
    )
    .filter(businessPartnerApi.schema.LAST_NAME.equals("Smith"))
    .addCustomHeaders({ Accept: "application/json" })
    .execute({
      url: "https://my000000.s4hana.ondemand.com",
      username: "ADDRESS_MANAGER_###",
      password: "S4HANA_PASSWORD!",
    });
}

// execute request
getAllBusinessPartners().then(
  // success
  (result: BusinessPartner[]) => {
    console.log(JSON.stringify(result, null, "\t"));
  },
  // error
  (error: any) => {
    console.log("Error: " + error.message);
  }
);
