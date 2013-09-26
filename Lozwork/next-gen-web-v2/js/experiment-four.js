$(function () {
	var ow = $(window).width();
	var frames = $('.frame,iframe');
	var oh = $(window).height();
	var hh = $('header').outerHeight(true);
	var fh = $('footer').outerHeight(true);
	
	var height;
	
	function positionMostRead(fh) {
		ow = $(window).width();
		oh = $(window).height();
		
		if ($(window).width() > 699) {
			height = oh - (105 + hh + fh);
			
			frames.height(height);
			
			$('.advert:first-of-type img').attr('src','/img/banner.jpg');
		} else if ($(window).width() < 700) {
			frames.height('auto');
			
			$('.advert:first-of-type img').attr('src','/img/ad.gif');
		}
		console.log(height);
	}

	function sizeFrames(fh) {
		oh = $(window).height();
		
		if ($(window).width() > 699) {
			height = oh - (105 + hh + fh);
					
			frames.height(height);
		} else if ($(window).width() < 700) {
			frames.height('auto');
		}
	}
	
	positionMostRead(fh);
	sizeFrames(fh);
	
	
	$(window).resize(function () {
		fh = $('footer').outerHeight(true);
		
		if (ow !== $(window).width()) {
			positionMostRead(fh);
		}
		if (oh !== $(window).height()) {
			sizeFrames(fh);
		}
	});
	
	var links = $('.navigation-controls a');
	
	links.click(function () {
		links.removeClass('selected');
		
		if($('#primary-navigation').is(':visible')) {
			$('#primary-navigation').slideUp();
		} else if ($('#top-stories-list').is(':visible')) {
			$('#top-stories-list').slideUp();
		}
			
		if ($(this.hash).is(':visible')) {
			$(this.hash).slideUp();
			$(this).removeClass('selected');
		} else {
			$(this.hash).slideDown();
			$(this).addClass('selected');
		}

		event.preventDefault();
	});
});