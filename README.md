Learning.sap.com exercise

# Querying SAP APIs in a TypeScript program

[see the full exercise](https://learning.sap.com/learning-journey/develop-advanced-extensions-with-sap-cloud-sdk/querying-sap-apis-in-javascript-or-typescript_ee6620e9-28b4-48db-8bab-39441ff27fb6)

## Step 1

Creating a minimal Hello World application, based on Typescript language and compiled with Node.

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

3. Install SAP Cloud SDK dependencies

```sh
npm install -D @sap-cloud-sdk/generator
```

## Setup mock server for Business Partner

1. Setup the OData Mock Service for the business partner API following [these steps](https://github.com/SAP/cloud-s4-sdk-book/tree/mock-server)
2. run the mock server locally
3. In our app service, we will not use anymose the Sanbox URL, and we will change it to the local one

Remove:

`url: "https://sandbox.api.sap.com/s4hanacloud"`

and

`.addCustomHeaders({
      APIKey: "YOUR_API_KEY",
    })`

and add instead

```sh
url: "http://localhost:3000/"
```

Run the app and see the queried results.
Don't forget to build the app on new changes.
Now, we can see the results are coming from our mock server and not anymore from Sandbox API.
