$(function () {
	var element = $('.scroll-load-destination');
	var time = 0;

	$(window).scroll(function () {
		if ($(window).scrollTop() + $(window).height() >= element.offset().top + element.height()) {
			time = time + 1;
			
			var url = '../ajax/article/_article-loading-related-article-' + time + '.inc';
			
			if (time <= 3) {
				$.get(url, function (data) {
					$(data).appendTo(element);
				});
			}
			// } else if (time == 4) {
			// 	$.get('../inc/most-read/_most-read-politics.kit', function (data) {
			// 		$(data).appendTo(element);
			// 	});
			// 	$.get('../inc/page/_page-footer.kit', function (data) {
			// 		$(data).appendTo(element);
			// 	});
			// }
		}
	});
});

// @codekit-append 'lozstrap.tabs.js';