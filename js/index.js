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
		$(".icon").css("color", "#d9d9d9");
		$(".content").css("display", "none");

		var tabType = $(this).attr("data-tab-type");
		var currentColor = $(this).attr("data-tab-color");

		$(currentTab).html(tabType);
		$("."+tabType).css("display", "block");
		$(".icon-"+tabType).css("color", currentColor);
	});

});