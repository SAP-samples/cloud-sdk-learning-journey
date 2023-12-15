package com.example;

import com.google.gson.GsonBuilder;
import com.sap.cloud.sdk.cloudplatform.connectivity.DefaultDestination;
import com.sap.cloud.sdk.cloudplatform.connectivity.HttpDestination;
import com.sap.cloud.sdk.s4hana.datamodel.odata.namespaces.businesspartner.BusinessPartner;
import com.sap.cloud.sdk.s4hana.datamodel.odata.namespaces.businesspartner.BusinessPartnerFluentHelper;
import com.sap.cloud.sdk.s4hana.datamodel.odata.services.BusinessPartnerService;
import com.sap.cloud.sdk.s4hana.datamodel.odata.services.DefaultBusinessPartnerService;

import java.util.List;

public class App {
    public static void main(String[] args) {

        // Create the destination class
HttpDestination destination = DefaultDestination.builder()
    .name("S4CLOUD")
    .property("URL", "https://my000000.s4hana.ondemand.com")
    .property("Type", "HTTP")
    .property("Authentication", "BasicAuthentication")
    .property("User", "ADDRESS_MANAGER_###")
    .property("Password", "WelcomeToTheClouds1!")
    .build().asHttp();

        // Preparing the query to the Business Partner service
        final BusinessPartnerService service =
                new DefaultBusinessPartnerService();
        BusinessPartnerFluentHelper helper =
            service.getAllBusinessPartner()
                .select(
                    BusinessPartner.BUSINESS_PARTNER,
                    BusinessPartner.LAST_NAME,
                    BusinessPartner.FIRST_NAME)
                .filter(
                    BusinessPartner.FIRST_NAME.ge("E")
                        .and(BusinessPartner.FIRST_NAME.lt("F")));

        // Running the query
        List<BusinessPartner> list = helper.executeRequest(destination);

        // Print out the result in a pretty JSON format.
        System.out.println(new GsonBuilder().disableHtmlEscaping()
                .setPrettyPrinting().create().toJson(list));
    }
}
