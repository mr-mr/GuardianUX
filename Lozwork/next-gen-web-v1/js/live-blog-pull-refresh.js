$(function () {
	function pullRefresh() {
		console.log('refreshing now');
		$.get('/inc/live-blog-item.inc', function (data) {
			$('#live dl').prepend(data).pullToRefresh('hide');			
		});
	};
	
	$('#live dl').pullToRefresh({
		'callback': pullRefresh,
		'height': 25
	});
});