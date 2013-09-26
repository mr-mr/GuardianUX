$(function() {
	var ow = $(window).width();
	
	function positionMostRead() {
		ow = $(window).width();
		
		if ($(window).width() > 959) {
			$('.advert:first-of-type:not(.mpu) img').attr('src','/img/banner.jpg');
			$('.advert:last-of-type:not(.mpu) img').attr('src','/img/banner.jpg');
		} else if ($(window).width() < 960) {
			$('.advert:first-of-type:not(.mpu) img').attr('src','/img/ad.gif');
			$('.advert:last-of-type:not(.mpu) img').attr('src','/img/ad-too.gif');
		}
	}
	
	positionMostRead();
	
	$(window).resize(function () {
		if (ow != $(window).width()) {
			positionMostRead();
		}
	});
});