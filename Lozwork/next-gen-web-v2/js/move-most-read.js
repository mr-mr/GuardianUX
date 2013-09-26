$(function() {
	var ow = $(window).width();
	
	function positionMostRead() {
		ow = $(window).width();
		
		if ($(window).width() > 959) {
			$('#most-read').insertAfter($('.comment-is-free'));
			$('.advert:first-of-type img').attr('src','/img/banner.jpg');
			$('.advert:last-of-type img').attr('src','/img/banner.jpg');
		} else if ($(window).width() < 960) {
			$('#most-read').insertAfter($('div.two'));
			$('.advert:first-of-type img').attr('src','/img/ad.gif');
			$('.advert:last-of-type img').attr('src','/img/ad-too.gif');
		}
	}
	
	positionMostRead();
	
	$(window).resize(function () {
		if (ow != $(window).width()) {
			positionMostRead();
		}
	});
});