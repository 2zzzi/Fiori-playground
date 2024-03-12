sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Fragment) {
        "use strict";

        return Controller.extend("sync4.zfc1722.controller.View1", {
            onInit: function () {

            },
            onPopup: function(){
                let oView = this.getView();
                if(!this.getView().byId("diaInfo")){
                    
                    Fragment.load({
                        id: oView.getId(),
                        name: "sync4.zfc1722.view.Popup",
                        type: "XML",
                        controller: this
                    }).then(function(oPopup){
                        oView.addDependent( oPopup );
                        oPopup.open();
                    });

                } else{
                    oView.byId("diaInfo").open();
                }
            },
            onClose: function(){
                let oView = this.getView();
                oView.byId("diaInfo").close();
            }
        });
    });
