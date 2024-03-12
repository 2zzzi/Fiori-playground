sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox) {
        "use strict";

        return Controller.extend("sync4.zfc1711.controller.View1", {
            onInit: function () {

            },
            onSearch: function() {
                let carrid = this.getView().byId("pCarrid").getValue();
                let connid = this.getView().byId("pConnid").getValue();
                MessageBox.show(
                    "'" + carrid + "'" + " Airline " + "'" + connid + "'" + " Connection Number",
                    {
                        title: "Airline Info"
                    }
                );
                
            }
        });
    });
