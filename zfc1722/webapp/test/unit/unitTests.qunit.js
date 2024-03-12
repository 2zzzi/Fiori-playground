/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sync4/zfc1722/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});