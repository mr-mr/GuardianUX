$(function () {
	var loadMore = $('#load-more a');
	
	loadMore.click(function () {
		$.get('/inc/statistics-more-fixtures.inc', function (data) {
			$('#load-more').before(data);
		});
		
		return false;
	});
});