$(document).ready(function() {
	// Globals //
	var x = 1
	var currentTab = document.getElementById("current-Tab");
	var intro = document.getElementById("intro-Text");
	var hello = document.getElementById('hello');


	$(currentTab).html("design");
	$(".design").css("display", "block");

	
	// Skills Section Animations & Functions //
	$("#skills").children().click(function (){
		$(".content").css("display", "none");
		var tabType = $(this).attr("data-tab-type");
		console.log("MadeIt");
		$(currentTab).html(tabType);
		$("."+tabType).css("display", "block");
	});

});