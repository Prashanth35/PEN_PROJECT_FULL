sap.ui.controller("zrosh_pen.Paymenthistory", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zrosh_pen.Paymenthistory
*/
	onInit: function() {
		var oModel=new sap.ui.model.json.JSONModel();
		oModel.loadData("model/tile.json");
		this.getView().setModel(oModel);
		//Aggregation Binding

		/*var oTemplate=new sap.m.GenericTile({
			header:"{header}",subheader:"{subheader}",
			press:this.onPress,
			
			tileContent:new sap.m.TileContent({
											
												content : new sap.m.ImageContent({src:"{src}"})
											 })
			              
											});
				var oTile=this.getView().byId("idHbox");
		oTile.bindAggregation("items","/yearHistoryData",oTemplate);*/
		
	var oTemplate = new sap.m.StandardTile({
		title : "{header}",
		info : "{subheader}",
		press:this.onPress,
	});
		var oTile=this.getView().byId("idTileContainer2");
	
	oTile.bindAggregation("tiles","/yearHistoryData",oTemplate);
	},
	onPress : function(){
		//debugger;
		var oApp= this.getParent().getParent().getParent().getParent();
		//debugger;
		oApp.to("idTablePage");
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zrosh_pen.Paymenthistory
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zrosh_pen.Paymenthistory
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zrosh_pen.Paymenthistory
*/
//	onExit: function() {
//
//	}

});