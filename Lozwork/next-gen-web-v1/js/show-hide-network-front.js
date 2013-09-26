$(function () {
	$('.show-more a').toggle(function (){
			$(this.hash).slideDown();
			$(this).html('Hide more on this story');
			
			return false;
		}, function () {
			$(this.hash).slideUp();
			$(this).html('Show more on this story');
			
			return false;
	});
	
	$('.section-control a').toggle(function (){
			$(this.hash).slideUp();
			$(this).children('strong').html('Show');
			
			return false;
		}, function () {
			$(this.hash).slideDown();
			$(this).children('strong').html('Hide');
			
			return false;
	});
});
