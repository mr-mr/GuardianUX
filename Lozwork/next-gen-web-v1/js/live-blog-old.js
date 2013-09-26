$(function () {
	var scoreTop = $('.score').offset().top;
	var score = $('.score');
	
	var tabs = $('ul.tabs li a');
	var tabContainers = $('article > section');
	
	var loadMore = $('#live .load-more a');

	$(document).scroll(function (){
		var scrollTop = $(document).scrollTop();

		if (scoreTop < scrollTop) {
			$(score).addClass('fixed');
		} else {
			$(score).removeClass('fixed');
		}
	});
	
	tabContainers.hide().filter(':first').show();
	
	tabs.click(function () {
		tabContainers.hide().filter(this.hash).show();
		
		tabs.removeClass('selected');
		$(this).addClass('selected');
		
		return false;
	}).filter(':first').click();
	
	loadMore.click(function () {
		$.get('/inc/live-blog-more.inc', function (data) {
			$('#live dl').append(data);
		});
		return false;
	});
	
	function pullRefresh() {
		console.log('refreshing now');
		$.get('/inc/live-blog-refresh.inc', function (data) {
			$('#live dl').prepend(data).pullToRefresh('hide');			
		});
	};
	
	$('#live dl').pullToRefresh({
		'callback': pullRefresh,
		'height': 25
	});
});