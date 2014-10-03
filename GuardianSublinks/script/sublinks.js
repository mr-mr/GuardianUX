//$(".rasiak-expand-circle").hide();
//alert("I'm loading!");

$(".rasiak-expand-circle").click( function(event){
	event.preventDefault();
	if ($(this).hasClass("isDown") ) {
		$(".rasiak-sublinks-scroll").animate({"marginTop":"-5px"}, 400);			
		$(this).removeClass("isDown");
		$(".rasiak-expand-arrow").toggleClass("sublinks-arrow-rotate");
	} else {
		$(".rasiak-sublinks-scroll").animate({"marginTop":"-105px"}, 400);	
		$(this).addClass("isDown");
		$(".rasiak-expand-arrow").toggleClass("sublinks-arrow-rotate");
	}
	return false;
});


$(".rasiak-meta").click( function(event){
	event.preventDefault();
	if ($(this).hasClass("isDown") ) {
		$(".rasiak-sublinks-scroll-2").animate({"marginTop":"-5px"}, 400);			
		$(this).removeClass("isDown");
		$("i").switchClass("icon-caret-down", "icon-caret-up");
	} else {
		$(".rasiak-sublinks-scroll-2").animate({"marginTop":"-105px"}, 400);	
		$(this).addClass("isDown");
		$("i").switchClass("icon-caret-up", "icon-caret-down");
	}
	return false;
});