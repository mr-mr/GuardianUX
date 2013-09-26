$(function () {
	var loadMore = $('.load-more-control');

	loadMore.click(function (e) {
		var url = $(this).attr('href');
		var element = $(this).parent().prev('.load-more-destination');

		$.get(url, function (data) {
			$(data).appendTo(element);
		});

		e.preventDefault();
	});
});