## Start the journey

As a starting point for your learning experience, we recommend you go to the full learning journey, published on [SAP Learning](https://learning.sap.com) at the following link: [Develop Advanced Extensions with SAP Cloud SDK](https://learning.sap.com/learning-journey/develop-advanced-extensions-with-sap-cloud-sdk).

# Exercise: Developing a Multi-Target Application

Create a simple Node.js project and a simple Java project. Pack them in a unique Multi-Target Application. Include some simple environment variables. Build and deploy the application to Cloud Foundry.

This code archive contains the final status of the java project, after the complete exercise execution.

To build and deploy the application to Cloud Foundry, complete the following steps:

1.  Extract the archive to a folder in your local system, or to a workspace in the SAP Business Application Studio.
2.  Open a command line window and change directory to the project root folder.
3.  Execute the following sequence of commands:

        mbt build
        cf login
        cf deploy mta_archives/mta-intro_0.0.1.mtar

## Origin

The complete exercise description is included in SAP standard course [S4C80](https://training.sap.com/course/s4c80), collection 26 or later.

## Author

Paolo Ricciarelli - Learning Architect at SAP
