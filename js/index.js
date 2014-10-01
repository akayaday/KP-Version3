$(document).ready(function() {
	// Globals //
	var x = 1
	var currentTab = document.getElementById("current-Tab");
	var intro = document.getElementById("intro-Text");
	var hello = document.getElementById('hello');
	$(".design").css("display", "block");

	
	// Skills Section Animations & Functions //
	$("#skills").children().click(function (){
		var tabType = $(this).attr("data-tab-type");
		var currentColor = $(this).attr("data-tab-color");

		$(".icon").removeClass("active");
		$(".toolset-grid").css("display", "none");
		$("."+tabType).css("display", "none");

		$("."+tabType).css("display", "block");
		$(".content").css("background-color", currentColor);
		$(this).addClass('active');
	});

});