sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel) {
        "use strict";

        return Controller.extend("sync4.zfc1750.controller.View1", {
            onInit: function () {

                let oData={
                    classList: [
                        {
                            class: "400001",
                            cName: "Sync 1",
                            stdList: [
                                {stdNo: "24040001", sName:"Kang1", gesch:"1", geschText:"Male" },
                                {stdNo: "24040002", sName:"Han1", gesch:"2", geschText:"Female"}
                            ]
                        },{
                            class: "400004",
                            cName: "Sync 4",
                            stdList: [
                                {stdNo: "24040041", sName:"Kang4", gesch:"1", geschText:"Male"},
                                {stdNo: "24040042", sName:"Han4", gesch:"2", geschText:"Female"}
                            ]
                        }
                    ]
                };
                
                let oModel = new JSONModel( oData );
                this.getView().setModel( oModel );

                //Default Selected Key
                this.getView().byId("comboClass").setSelectedKey(oData.classList[0].class);

            },
            onSearch:function(){
                let sSelectedKey = this.getView().byId("comboClass").getSelectedKey();
                let aClassList = this.getView().getModel().getData("classList").classList;
                let sPath = this.getView().byId("comboClass").mBindingInfos.items.path + "/";

                for (let i = 0; i < aClassList.length; i++) {
                    if(aClassList[i].class == sSelectedKey){
                        sPath = sPath + String(i) + "/";
                    }
                }

                this.getView().byId("listStd").bindElement(sPath);

            },
            onItemPress: function(oEvent){

                let oData = oEvent.getParameter("listItem").getBindingContext().getObject();

                this.getView().byId("inpStdNo").setValue(oData.stdNo);
                this.getView().byId("inpStdNo").setDescription(oData.sName);

                this.getView().byId("inpGesch").setValue(oData.gesch);
                this.getView().byId("inpGesch").setDescription(oData.geschText);

                this.getView().byId("pan").setExpanded(true)
                this.getView().byId("pan").setHeaderText(oData.sName + " Student Info");

                

            }
        });
    });
