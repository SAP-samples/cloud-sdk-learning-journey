sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "com/sap/bpui/model/formatter",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, MessageToast, formatter) {
        "use strict";

        return Controller.extend("com.sap.bpui.controller.Main", {
            formatter: formatter,

            onInit: async function () {
                this._bpModel = this.getOwnerComponent().getModel("bpModel");

                try {
                    const response = await fetch("https://approuter-proud-sitatunga-uv.cfapps.us10.hana.ondemand.com/service/businessPartners");
                    const businessPartners = await response.json();
                    this._bpModel.setData({ BusinessPartners: businessPartners });
                } catch (error) {
                    MessageToast.show("Something went wrong... " + error);
                    // let businessPartners = [{ "BusinessPartner": "1003767", "CreationDate": "/Date(1683849600000)/", "FirstName": "Carla", "IsFemale": true, "IsMale": false, "LastName": "Coe" }, { "BusinessPartner": "1003764", "CreationDate": "/Date(1683849600000)/", "FirstName": "John", "IsFemale": false, "IsMale": true, "LastName": "Doe" }, { "BusinessPartner": "1003765", "CreationDate": "/Date(1683849600000)/", "FirstName": "Jane", "IsFemale": true, "IsMale": false, "LastName": "Roe" }, { "BusinessPartner": "1003766", "CreationDate": "/Date(1683849600000)/", "FirstName": "John", "IsFemale": false, "IsMale": true, "LastName": "Smith" }];
                    // this._bpModel.setData({ BusinessPartners: businessPartners });
                };
            },

            onLastNameChange: function (oEvent) {
                let src = oEvent.getSource();
                let bindingContext = src.getBindingContext("bpModel");
                let sPath = bindingContext.sPath;

                this._bpModel.setProperty(sPath + "/dirty", true);
            },

            onUpdate: function () {

                let businessPartners = this._bpModel.getData();
                businessPartners.BusinessPartners.forEach(async bp => {
                    if (bp.dirty) {
                        delete bp.dirty;
                        try {
                            const response = await fetch(`https://approuter-proud-sitatunga-uv.cfapps.us10.hana.ondemand.com/service/businessPartners/${bp.BusinessPartner}`, {
                                method: "PUT",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: {
                                    FirstName: bp.FirstName,
                                    LastName: bp.LastName,
                                    IsMale: bp.IsMale,
                                    IsFemale: bp.IsFemale
                                },
                            });

                            const data = await response.json();
                        } catch (error) {
                            console.log("Error: ", error);
                        }
                    }  
                });
            }
        });
    });
