Learning.sap.com exercise
# Querying SAP APIs in a Java program
[see the full exercise](https://learning.sap.com/learning-journey/develop-advanced-extensions-with-sap-cloud-sdk/exercise-querying-sap-apis-in-a-java-program_c97a89ce-9ca9-4ad9-8037-3a155bcaca51)

## Step 3
Create a simple Java Program that uses SAP Cloud SDK to read the [Business Partner (A2X)](https://api.sap.com/api/API_BUSINESS_PARTNER/overview) API from your SAP S/4HANA Cloud tenant. 

## Running this application 
In *Visual Studio Code* or *SAP Business Application Studio* ...
1. Clone this git repository and select current branch
2. In the **App.java** file, replace values for properties **URL**, **User** and **Password** with the backend SAP API ones, created in the prerequisite exercise.
```java
    .property("URL", "https://my000000.s4hana.ondemand.com")
    .property("User", "ADDRESS_MANAGER_###")
    .property("Password", "WelcomeToTheClouds1!")
```
3. Open a **Terminal** and run:
```console
mvn clean install
```
4. Choose **F5** (Run &rarr; Start Debugging)