$(function() {
	var ow = $(window).width();
	
	function positionMostRead() {
		ow = $(window).width();
		
		if ($(window).width() > 639) {
			$('.advert:first-of-type:not(.mpu) img').attr('src','/img/banner.jpg');
			$('.advert:last-of-type:not(.mpu) img').attr('src','/img/banner.jpg');
			
			$('.features').insertBefore('.sport-stories');
		} else if ($(window).width() < 640) {
			$('.advert:first-of-type:not(.mpu) img').attr('src','/img/ad.gif');
			$('.advert:last-of-type:not(.mpu) img').attr('src','/img/ad-too.gif');
			
			$('.features').insertAfter('.sport-stories');
		}
	}
	
	positionMostRead();
	
	$(window).resize(function () {
		if (ow != $(window).width()) {
			positionMostRead();
		}
	});
});