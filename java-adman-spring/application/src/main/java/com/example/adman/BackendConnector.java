package com.example.adman;

import com.sap.cloud.sdk.cloudplatform.connectivity.DefaultDestination;
import com.sap.cloud.sdk.cloudplatform.connectivity.DestinationAccessor;
import com.sap.cloud.sdk.cloudplatform.connectivity.HttpDestination;

public class BackendConnector {
    private static String destinationName;
    private static String url;
    private static String username;
    private static String password;
    private static String authentication;
    private static String apikey;
    private static HttpDestination destination;

    static {
        // Get the environment variables
        destinationName = System.getenv("S4_DESTINATION");
        url = System.getenv("S4_URL");
        username = System.getenv("S4_USERNAME");
        password = System.getenv("S4_PASSWORD");
        authentication = (username != null && password != null) ?
                "BasicAuthentication" : "NoAuthentication";
        apikey = System.getenv("S4_APIKEY");
        if (apikey==null) apikey="";

        if (destinationName != null){
            // Get the destination via the Destination service
            // of Cloud Foundry, in the SCP.
            destination = DestinationAccessor
                    .getDestination(destinationName).asHttp();
        }
        else {
            // Create the destination at run time,
            // using the URL and credentials
            // provided in the environment variables.
            destination = DefaultDestination.builder()
                    .property("Name", "DESTINATION")
                    .property("URL", url)
                    .property("Type", "HTTP")
                    .property("Authentication", authentication)
                    .property("User", username)
                    .property("Password", password)
                    .build().asHttp();
        }
    }

    public static HttpDestination getDestination() {
        return destination;
    }
    public static String getApikey() {
        return apikey;
    }
}
