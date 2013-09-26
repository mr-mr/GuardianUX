$(function () {
	var type = $('body').attr('class'); // body class defines filename
	var element = $('.scroll-load-destination');

	$(window).scroll(function () {
		if ($(window).scrollTop() + $(window).height() >= element.offset().top + element.height()) {
			var url = '/inc/' + type + '.inc';
			
			$.get(url, function (data) {
				$(data).appendTo(element);
			});
		}
	});
});