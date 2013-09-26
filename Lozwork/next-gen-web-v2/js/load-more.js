$(function () {
	var loadMore = $('.load-more');
	
	loadMore.click(function () {
		
		var url = $(this).attr('href');
		var link = $(this);
		
		$.get(url, function (data) {
			if ($('body').attr('id') === 'live-blog' || $('body').hasClass('live')) {
				link.parent('p').prev('dl').append(data);
			} else {
				link.parent('p').before(data);
			}
		});
		
		return false;
	});
});