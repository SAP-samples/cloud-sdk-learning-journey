## Learning.sap.com exercise
# Querying SAP APIs in a Java program
[see the full exercise](https://learning.sap.com/learning-journey/develop-advanced-extensions-with-sap-cloud-sdk/exercise-querying-sap-apis-in-a-java-program_c97a89ce-9ca9-4ad9-8037-3a155bcaca51)

## Step 2
Create a simple Java Program that uses SAP Cloud SDK to read the [Business Partner (A2X)](https://api.sap.com/api/API_BUSINESS_PARTNER/overview) API from the sandbox environment of [SAP API Business Hub](https://api.sap.com). 
The result is then printed to the console.

## Running this application 
In *Visual Studio Code* or *SAP Business Application Studio* ...

1. Clone this git repository and select current branch.
2. In the **App.java** file, replace **>>>YOUR APIKEY<<<** with your API Key. To know your API Key, go to https://api.sap.com/api/API_BUSINESS_PARTNER/overview, then login and choose **Show API Key**. 
```java
        helper.withHeader("apikey", ">>>YOUR APIKEY<<<");
```
3. Choose F5 (Run &rarr; Start Debugging)