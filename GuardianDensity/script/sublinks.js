//$(".rasiak-expand-circle").hide();
//alert("I'm loading!");

$(".rasiak-expand-circle").click(function(e){
	e.preventDefault();
	$(".rasiak-sublinks").animate({ "margin-top": "-100px"}), 3000, ("linear");
});