$(function () {
	$('.show-more a').toggle(function (){
			$(this.hash).slideDown();
			$(this).html('Hide more on this story');
			
			return false;
		}, function () {
			$(this.hash).slideUp();
			$(this).html('Show more on this story');
			
			return false;
	// $('.show-more a').click(function () {
	// 	var block = $(this.hash);
	// 	var link = $(this);
	// 	
	// 	$(this.hash).toggle(function () {
	// 			console.log(block,link);
	// 			$(block).slideDown();
	// 			$(link).html('Hide more on this story','Show more on this story');				
	// 		}, function() {
	// 			consol.log(block,link);
	// 		});
	// 	// }, function() {
	// 	// 	console.log(block,link);
	// 	// });
	// 	// }, function () {
	// 	// 	$(block).slideUp();
	// 	// 	$(link).html('Show more on this story');
	// 	// });	
	});
});