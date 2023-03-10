Learning.sap.com exercise

# Querying SAP APIs in a TypeScript program

[see the full exercise](https://learning.sap.com/learning-journey/develop-advanced-extensions-with-sap-cloud-sdk/querying-sap-apis-in-javascript-or-typescript_ee6620e9-28b4-48db-8bab-39441ff27fb6)

## Step 1

Create a minimal Hello world project with Typescript and Node.js setup.

## Setup of the environment

1. Install Node.js and npm following the [official documentation](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
2. Install the Cloud Foundry CLI

## Running this application

In _Visual Studio Code_ or _SAP Business Application Studio_ ...

1. Clone this git repository and select current branch.
2. Open a **Terminal** and run:

```sh
npm install
```

```
npm run build
```

```
npm run start
```

3. Install SAP Cloud SDK as dev dependency

```sh
npm install -D @sap-cloud-sdk/generator
```

## Generating services

1. Create a folder service-specifications at the root of the project.
2. Download the EDMX file for the business partner service from [SAP API Business Hub](<https://api.sap.com/odata/1.0/catalog.svc/APIContent.APIs('API_BUSINESS_PARTNER')/$value?type=EDMX&attachment=true>)
3. Copy the API_BUSINESS_PARTNER.edmx file into the service-specifications folder
4. Create a options-per-service.json file in the service-specifications folder with the following content:

```json
{
  "API_BUSINESS_PARTNER": {
    "directoryName": "business-partner-service",
    "servicePath": "/sap/opu/odata/sap/API_BUSINESS_PARTNER",
    "npmPackageName": "business-partner-service"
  }
}
```

4. Generate the BusinessPartner service

```sh
npx generate-odata-client --input service-specifications --outputDir services --optionsPerService service-specifications/options-per-service.json
```

Check the generated OData entities and services under the services directory.
