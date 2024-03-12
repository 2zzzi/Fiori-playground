sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, Fragment) {
        "use strict";

        return Controller.extend("sync4.zfc1731.controller.View1", {
            onInit: function () {
                let oData = {
                    inpStdno:"20180319"
                };
                let oModel = new JSONModel(oData);
                let oView = this.getView();

                oView.setModel(oModel);
            },
            onSearch: function () {
                let oView = this.getView();
                let oModel = oView.getModel();
                let oData = oModel.getData();
                let oStdData ={};
                let oStdModel = new JSONModel();

                oStdData.stdNo = oData.inpStdno;
                oStdData.stdName = "Lee Jihun";
                oStdData.stdGender="1";
                oStdData.stdGenderText="Male";

                oStdModel.setData(oStdData);
                this.getView().setModel(oStdModel ,"stdInfo");
            },
            onClass: function() {
                let oView = this.getView();
                if(!this.getView().byId("dlgClass")){
                    
                    Fragment.load({
                        id: oView.getId(),
                        name: "sync4.zfc1731.view.Class",
                        type: "XML",
                        controller: this
                    }).then(function(oPopup){
                        oView.addDependent(oPopup);
                        oPopup.open();
                    });
                    

                }else {
                    oView.byId("dlgClass").open();
                                }
            }
        });
    });