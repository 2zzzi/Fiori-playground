sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller , JSONModel) {
        "use strict";

        return Controller.extend("sync4.zfc1742.controller.View1", {
            onInit: function () {
                let oData = {
                    classList: [
                        { 
                            class : "400001", 
                            cName: "Sync 1",
                            stdList:[ //classList/0/stdList
                                {stdNo: "24040001", sName: "Kang1"},//classList/0/stdList/0
                                {stdNo: "24040002", sName: "Han1"}//classList/0/stdList/1
                            ]
                        },
                        { 
                            class : "400004", cName: "Sync 4",
                            stdList:[
                                {stdNo: "24040041", sName: "Kang4"},//classList/1/stdList/0
                                {stdNo: "24040042", sName: "Han4"}
                        ]}
                    ]
                };

                let oModel = new JSONModel();
                oModel.setData(oData);
                this.getView().setModel(oModel);
            },
            onListPress: function(oEvent){
                alert(oEvent.getParameters().listItem.getBindingContext().getPath());
                let sPath = oEvent.getParameters().listItem.getBindingContext().getPath();
                let oComboBox = this.getView().byId("comboStd");
                // alert(oComboBox);
                oComboBox.bindElement(sPath);
            }
        });
    });
