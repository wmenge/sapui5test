sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel) {
	"use strict";

	return Controller.extend("Quickstart.controller.App", {
		onPress : function () {
			MessageToast.show("Hello UI5!");
			this.byId("app").to(this.byId("intro"));
		},

		onChange: function (oEvent) {
			var bState = oEvent.getParameter("state");
			this.byId("ready").setVisible(bState);
		}
	});

});