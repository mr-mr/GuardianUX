//$(".hidden").hide();
//$(".hidden").hide();

$(".icon-refresh").click(function(e){
	e.preventDefault();
	$(".icon-refresh").toggleClass("icon-spin");
	$(".updating-text").replaceWith( "Updating..." );
	$( ".football-goal" ).delay( 800 ).fadeIn( 400 );
	$(".goal-text").replaceWith( "1" ).delay( 1000 ).fadeIn( 400 );
	//$(".expandblock-text").replaceWith("GOAL (Rooney '77");
	//$('.football-stat-expandblock-during')
    //.css('background-color', '')
    //.css('background-color', 'red').fadeIn( 400 );
});


$(".showhide").click(function(e){

	e.preventDefault();

	//$alert("Hello", "Good Evening", "How do you do?", "Goodbye");
	$( ".hidden" ).slideToggle("slow");
	$(".icon-plus").toggleClass("icon-minus");
	//alert('This button works');
	
 });


$(".showhide-2").click(function(f){

	f.preventDefault();

	//$alert("Hello", "Good Evening", "How do you do?", "Goodbye");
	$( ".hidden-2" ).slideToggle("slow");
	$(".icon-plus").toggleClass("icon-minus");
	//alert('This button works');
	
 });


$(".menu-hidden").hide();

$(".menu-showhide").click(function(e){

	e.preventDefault();

	//$alert("Hello", "Good Evening", "How do you do?", "Goodbye");
	$( ".menu-hidden" ).toggle();
	//alert('This button works');
	
 });



$('body').on('click', '.comment-view-replies-action', function(e) {
   e.preventDefault();
   var clickedNode = $(this);
  
  clickedNode.parent().next('.comment-replies').show();
});