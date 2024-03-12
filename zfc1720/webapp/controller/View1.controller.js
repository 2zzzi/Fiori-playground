sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox) {
        "use strict";

        return Controller.extend("sync4.zfc1720.controller.View1", {
            onInit: function () {

            },
            onSearch: function() {
                // alert("test");
                let condCarrid = this.getView().byId("inpCarrid").getValue();
                let condConnid = this.getView().byId("inpConnid").getValue();
                let sMesg = condCarrid + " Airline " + condConnid + " Connection Number ";
                
                MessageBox.show(
                    sMesg,{
                        title: "Title"
                    }
                );
            }
        });
    });
