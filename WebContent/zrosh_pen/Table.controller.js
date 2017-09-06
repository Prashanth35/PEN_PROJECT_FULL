sap.ui.controller("zrosh_pen.Table", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zrosh_pen.Table
*/
	onInit: function() {
		var oModel=new sap.ui.model.json.JSONModel();
		oModel.loadData("model/tile.json");
		this.getView().setModel(oModel);
		//Aggregation Binding
		var oTable=this.getView().byId("idTable");

		var oColumn1=new sap.m.Text({text:"{month}"})
		var oColumn2=new sap.m.Text({text:"{amountPaid}"})
		var oColumn3=new sap.m.Text({text:"{date}"})
		var oColumn4=new sap.m.Text({text:"{finalStatus}"})
		var oColumn5=new sap.m.Text({text:"{totalIntrest}"})
		var oColumn6=new sap.m.Text({text:"{loanEligibilty}"})
		
		oTable.bindAggregation("items",
				               "/tableDataSet",
				          new sap.m.ColumnListItem({cells : [oColumn1,
				                                             oColumn2,
				                                             oColumn3,
				                                             oColumn4,
				                                             oColumn5,
				                                             oColumn6
				                                             ]
				          })
		)
	},
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zrosh_pen.Table
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zrosh_pen.Table
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zrosh_pen.Table
*/
//	onExit: function() {
//
//	}

});