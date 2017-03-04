$(document).ready(function(){
	console.log("----- index.html run! -----");
	//-----------
	//变量&DOM
	//-----------
	var oDocument = $("document"),
	    oBody = $("body");
	var oLoading = $(".loading");

	    oBody.click(function(event) {
	    	/* Act on the event */
	    	var event = window.event || event;
	    	event.preventDefault();
	    	console.log("Body clicked!");
	    });


	  oLoading.fadeOut(600);
});