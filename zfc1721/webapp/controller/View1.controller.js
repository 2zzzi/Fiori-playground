sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox, Fragment) {
        "use strict";

        return Controller.extend("sync4.zfc1721.controller.View1", {
            onInit: function () {

            },
            onMain: function(){
                let oView = this.getView();
                let oInput = oView.byId(
                    Fragment.createId("idFrag", "inFrag")
                );
                let inpValue = oInput.getValue();

                alert(inpValue);

                // alert(this.getView().byId(
                //     sap.ui.core.Fragment.createId("idFrag", "inFrag")
                // ).getValue());
            },
            onFrag: function() {    
                alert(this.getView().byId("inpCarrid").getValue());
            }
        });
    });
