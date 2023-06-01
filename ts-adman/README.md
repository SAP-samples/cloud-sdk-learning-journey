# Develop Advanced Extensions with SAP Cloud SDK

Welcome to this repository for the learning journey _Develop Advanced Extensions with SAP Cloud SDK_. We provide here code examples used in the learning journey exercises.

## Start the journey

As a starting point for your learning experience, we recommend you go to the full learning journey, published on [SAP Learning](https://learning.sap.com) at the following link: [Develop Advanced Extensions with SAP Cloud SDK](https://learning.sap.com/learning-journey/develop-advanced-extensions-with-sap-cloud-sdk).

## Current branch

This branch is part of [Exercice:Building a BP address manager extension using TypeScript](https://learning.sap.com/learning-journey/develop-advanced-extensions-with-sap-cloud-sdk/exercise-building-a-bp-address-manager-extension-using-typescript_a3b13216-a20d-407c-9469-157628546623)

Current branch **tsadman_v2.0_services** covers the second step of the exercise: setup the back-end services.

**Hint**: You can compare current branch with previous one by opening a new Pull Request in GitHub (**tsadman_v2.0_services** changes to **tsadman_v1.0_hello**), or directly from accessing [this link](https://github.com/SAP-samples/cloud-sdk-learning-journey/compare/tsadman_v1.0_hello...tsadman_v2.0_services?expand=1).

## Requirements

Make sure you have latest node and npm installed, along with @nestjs/cli installed globally. If you don't, please go to [previous branch](https://github.com/SAP-samples/cloud-sdk-learning-journey/tree/tsadman_v1.0_hello) and follow the steps from requirements section.
Make sure you are in the root of ts-adman project. Follow these steps:

1. From terminal run: `npm install -D @sap-cloud-sdk/generator`
2. In the root project, create new folder with name **service-specifications** . Download the [EDMX file](https://api.sap.com/api/API_BUSINESS_PARTNER/overview) for business partner service. Copy the **API_BUSINESS_PARTNER.edmx** file into **service-specifications** folder.
3. In same folder **service-specifications** create a new file **options-per-service.json** . Fill this file with the following content:

```
{
  "service-specifications/API_BUSINESS_PARTNER.edmx": {
    "directoryName": "business-partner-service",
    "basePath": "/sap/opu/odata/sap/API_BUSINESS_PARTNER",
    "packageName": "business-partner-service"
  }
}
```

4. From terminal, generate the **BusinessPartner** service using **@sap-cloud-sdk/generator** . Run the command:

```sh
npx generate-odata-client --input service-specifications --outputDir services --optionsPerService service-specifications/options-per-service.json
```

Check the services were generated under **service-specifications** folder.

## Running the app

From terminal, in the root folder of project ts-adman please run:

```sh
npm install
npm run build
npm run start:dev
```

## Contributing

If you have suggestions on how to improve the tutorial, you're welcome to provide your input [here](https://github.com/SAP-samples/cloud-sdk-learning-journey/issues).

If you wish to contribute code, offer fixes or improvements, please send a pull request. Due to legal reasons, contributors will be asked to accept a DCO when they create the first pull request to this project. This happens in an automated fashion during the submission process. SAP uses [the standard DCO text of the Linux Foundation](https://developercertificate.org/).

## License

Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved. This project is licensed under the Apache Software License, version 2.0 except as noted otherwise in the [LICENSE](LICENSE) file.

[![REUSE status](https://api.reuse.software/badge/github.com/SAP-samples/cloud-sdk-learning-journey)](https://api.reuse.software/info/github.com/SAP-samples/cloud-sdk-learning-journey)
