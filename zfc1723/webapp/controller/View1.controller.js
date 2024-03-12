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

        return Controller.extend("sync4.zfc1723.controller.View1", {
            onInit: function () {

            },
            onSearch: function(){
                let carrid = this.getView().byId("condCarrid").getValue();
                let connid = this.getView().byId("condConnid").getValue();

                MessageBox.show(
                    carrid+" Airline " + connid + " Connection Number",{
                        title: "Title"
                    }
                );
            },
            onPopup: function(){
                let oView = this.getView();
                if(!oView.byId("dlgApt")){

                    Fragment.load({
                        id: oView.getId(),
                        name: "sync4.zfc1723.view.PopupFrag",
                        type: "XML",
                        controller: this
                    }).then(function(oPopup){
                        oView.addDependent(oPopup);
                        oPopup.open();
                    });

                }else{
                    oView.byId("dlgApt").open();
                }
            },
            onClose: function(){
                let oView = this.getView();
                oView.byId("dlgApt").close();
            }
        });
    });
