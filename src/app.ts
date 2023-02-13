import {
  BusinessPartner,
  businessPartnerService,
} from "@sap/cloud-sdk-vdm-business-partner-service";

async function getAllBusinessPartners(): Promise<BusinessPartner[]> {
  const { businessPartnerApi } = businessPartnerService();
  return await businessPartnerApi
    .requestBuilder()
    .getAll()
    .top(1)
    .addCustomHeaders({
      APIKey: "",
    })
    .execute({
      url: "https://sandbox.api.sap.com/s4hanacloud",
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
