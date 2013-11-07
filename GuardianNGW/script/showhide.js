$(".hidden").hide();

$(".showhide").click(function(e){

	e.preventDefault();

	//$alert("Hello", "Good Evening", "How do you do?", "Goodbye");
	$( ".hidden" ).slideToggle("slow");
	//alert('This button works');
	
 });