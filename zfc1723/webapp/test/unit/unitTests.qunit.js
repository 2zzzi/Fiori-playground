/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sync4/zfc1723/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
