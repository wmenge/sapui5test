sap.ui.define([
	"sap/ui/core/mvc/XMLView"
], function (XMLView) {
	"use strict";

	XMLView.create({viewName: "Ui5Test.App"}).then(function (oView) {
		oView.placeAt("content");
	});

});