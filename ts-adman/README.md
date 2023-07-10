# Develop Advanced Extensions with SAP Cloud SDK

Welcome to this repository for the learning journey _Develop Advanced Extensions with SAP Cloud SDK_. We provide here code examples used in the learning journey exercises.

## Start the journey

As a starting point for your learning experience, we recommend you go to the full learning journey, published on [SAP Learning](https://learning.sap.com) at the following link: [Develop Advanced Extensions with SAP Cloud SDK](https://learning.sap.com/learning-journey/develop-advanced-extensions-with-sap-cloud-sdk).

## Current branch

This branch is part of [Exercise:Building a BP address manager extension using TypeScript](https://learning.sap.com/learning-journey/develop-advanced-extensions-with-sap-cloud-sdk/exercise-building-a-bp-address-manager-extension-using-typescript_a3b13216-a20d-407c-9469-157628546623)
Current branch **tsadman_v3.0_ui** covers the final step of the exercise where we add the UI elements for the application.

**Hint**: You can compare current branch with previous one by opening a new Pull Request in GitHub (**tsadman_v3.0_ui** changes to **tsadman_v2.0_services**), or directly from accessing [this link](https://github.com/SAP-samples/cloud-sdk-learning-journey/compare/tsadman_v2.0_services...tsadman_v3.0_ui?expand=1).

## Requirements

Make sure you have latest versions of node and npm installed.

1. **Install node and npm** (skip this test if you have already installed node and npm)

###### How to check if node is installed on your system:

From terminal, run:

```
node -v
npm -v
```

If no version is retrieved, please install node and npm following the steps from [official documentation](https://nodejs.org/en/download) .

2. Make sure you are in the root of **ts-adman** project: **open the terminal**

3. **Install all dependencies defined in the project**: run `npm install`
4. **Install Nest.js client for node** by running command: `npm install -g @nestjs/cli`
5. **Generate the OData services** by running command: `npm run generate:client`

Check the services were generated under **service-specifications** folder.

6. **Retrieve your API Key**: Sign into [api.sap.com](https://api.sap.com/api/API_BUSINESS_PARTNER/overview), click on **Show API Key** and copy the value.
   Open the environment file **.env** from **ts-adman** root folder. At the beginning of the file, we define a variable for the API KEY. Set the value to be your API Key. Example:

```
API_KEY="G6aeNlgsbSEW"
```

**Hint**: In Visual Studio Code you can navigate to a file using shortcut: Ctrl + P.

## Running the app

From terminal, in the root folder of project ts-adman please run:

```sh
npm run build
npm run start:dev
```

## Contributing

If you have suggestions on how to improve the tutorial, you're welcome to provide your input [here](https://github.com/SAP-samples/cloud-sdk-learning-journey/issues).

If you wish to contribute code, offer fixes or improvements, please send a pull request. Due to legal reasons, contributors will be asked to accept a DCO when they create the first pull request to this project. This happens in an automated fashion during the submission process. SAP uses [the standard DCO text of the Linux Foundation](https://developercertificate.org/).

## License

Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved. This project is licensed under the Apache Software License, version 2.0 except as noted otherwise in the [LICENSE](LICENSE) file.

[![REUSE status](https://api.reuse.software/badge/github.com/SAP-samples/cloud-sdk-learning-journey)](https://api.reuse.software/info/github.com/SAP-samples/cloud-sdk-learning-journey)
