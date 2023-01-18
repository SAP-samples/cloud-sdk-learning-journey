## [Learning.sap.com exercise](https://learning.sap.com/learning-journey/develop-advanced-extensions-with-sap-cloud-sdk/exercise-querying-sap-apis-in-a-java-program_c97a89ce-9ca9-4ad9-8037-3a155bcaca51) 
# Querying SAP APIs in a Java program

## Step 3
Create a simple Java Program that uses SAP Cloud SDK to read the [Business Partner (A2X)](https://api.sap.com/api/API_BUSINESS_PARTNER/overview) API from your SAP S/4HANA Cloud tenant. 

## Running this application 
In *Visual Studio Code* or *SAP Business Application Studio* ...
1. Clone this git repository and select current branch
2. In the **App.java** file, replace values for properties **URL**, **User** and **Password** with the ones created in the previous exercise.
```java
    .property("URL", "https://my000000.s4hana.ondemand.com")
    .property("User", "ADDRESS_MANAGER_###")
    .property("Password", "WelcomeToTheClouds1!")
```
3. In the left side bar, go to **Run and Debug**.
4. Aside the **Launch App** configuration, choose **Start Debugging**.


