sap.ui.controller("zrosh_pen.Registration", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zrosh_pen.Registration
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zrosh_pen.Registration
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zrosh_pen.Registration
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zrosh_pen.Registration
*/
//	onExit: function() {
//
//	}
	
	getClose1 :  function(oEvent){
		if(oEvent.getParameters().expand==true){
			this.getView().byId("idPanel2").setExpanded(false);
			 this.getView().byId("idPanel3").setExpanded(false);	
		}
		else{this.getView().byId("idPanel2").setExpanded(true);}

	},
	getClose2 : function(oEvent){
		if (oEvent.getParameters().expand==true){
			this.getView().byId("idPanel1").setExpanded(false);
			this.getView().byId("idPanel3").setExpanded(false);
		}
		else{this.getView().byId("idPanel3").setExpanded(true)}
	},
	getClose3 :function(oEvent){
		if (oEvent.getParameters().expand==true){
			this.getView().byId("idPanel2").setExpanded(false);
			 this.getView().byId("idPanel1").setExpanded(false);
			 
		}
		/*else {this.getView().byId("idPanel2").setExpanded(true);}*/
	},
	getlogin : function(){
		
		var oPage = this.getView().getParent();
		oPage.to("idPage1");
	},
	
	getContact : function(){
		
		var oPage = this.getView().getParent();
		oPage.to("idContact");
	},
	
	
	
});