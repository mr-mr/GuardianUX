$(function () {
	var ow = $(window).width();
	var advertBanners = $('.advert-banner');
	
	function changeAdverts() {
		ow = $(window).width();
		
		if (ow < 740) {
			advertBanners.attr('src','../img/advert-banner-small.jpg');
		} else {
			advertBanners.attr('src','../img/advert-banner.jpg');
		}
	}

	changeAdverts();
		
	$(window).resize(function () {
		if (ow !== $(window).width()) {
			changeAdverts();
		}
	});
});