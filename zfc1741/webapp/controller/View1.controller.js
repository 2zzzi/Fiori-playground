sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("sync4.zfc1741.controller.View1", {
            onInit: function () {
                let oData ={
                    classList: [
                        { class: "400001", cName: "SYNC 1" },
                        { class: "400004", cName: "SYNC 4" }
                    ],
                    stdList: [
                        { stdNo: "24040001", sName: "Kang" }, 
                        { stdNo: "24040002", sName: "Han" },
                        { stdNo: "24040003", sName: "Lee" }
                    ]
                };
                let oModel = new JSONModel(oData);
                this.getView().setModel(oModel);

                //2nd Model
                let oData2 ={
                    classList: [
                        { key: "400001", text: "SYNC 1" },
                        { key: "400004", text: "SYNC 4" }
                    ],
                    stdList: [
                        { key: "24040001", text: "Kang" }, 
                        { key: "24040002", text: "Han" },
                        { key: "24040003", text: "Lee" }
                    ]
                };
                let oModel2 = new JSONModel( oData2);
                this.getView().setModel(oModel2 , "2nd" );

            },
            onSearch: function(){
                let oComboBox = this.getView().byId("comboClass");
                let selectedKey = oComboBox.getSelectedKey();
                alert(selectedKey);
            },
            onSelectionChange: function(oEvent){

                let oBindingContext = oEvent.getParameter("selectedItem").getBindingContext();
                alert(oBindingContext);
                let sPath = oBindingContext.getPath();
                alert(sPath);

                // alert(oEvent.oSource.mProperties.selectedKey);

                // let oComboBox = this.getView().byId("comboClass");
                // let selectedKey = oComboBox.getSelectedKey();
                // alert(selectedKey);
            },
            onItemPress: function(oEvent){
                // alert(oEvent.mParameters.listItem.mProperties.title);
                alert(oEvent.getParameter("listItem").getDescription());
            },
            onStd: function(){
                let oList = this.getView().byId("list2nd");
                oList.bindElement("/stdList"); //path
                
            },
            onClass: function(){
                let oList = this.getView().byId("list2nd");
                oList.bindElement("/classList"); //path
                
            }
        });
    });
