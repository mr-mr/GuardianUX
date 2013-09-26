$(function () {
	var loadMore = $('#live .load-more a');
	
	loadMore.click(function () {
		$.get('/inc/live-blog-more.inc', function (data) {
			$('#live dl').append(data);
		});
		return false;
	});	
});