$(function () {
	var navigation = $('ul.navigation-controls a');
	
	var left = $('.wrapper > nav:only-of-type');
	var content = $('.wrapper > section:nth-child(2)');
	var right = $('.wrapper > section:last-child');

	var height = $(window).height();
	var margin;
	
	left.hide();
	right.hide();
	// hide both off canvas elements incase they are longer than content

	function sizeBoxes () {
		margin = $(document).scrollTop();
						
		if (margin > 1) {
			left.height(height).css('margin-top',margin);
			right.height(height).css('margin-top',margin);
		} else {
			left.height(height).css('margin-top',0);
			right.height(height).css('margin-top',0);
		}
	}
	
	navigation.click(function () {
		if (this.hash === '#primary-navigation') {
			sizeBoxes();
			
			left.show();
			
			$('body').toggleClass('active-left').removeClass('active-right');

			if ($('body').hasClass('active-left') && margin <= 1) {
				content.height(height);
			} else {
				content.height('auto');
			}
		} else {
			sizeBoxes();
			
			right.show();
						
			$('body').toggleClass('active-right').removeClass('active-left');

			if ($('body').hasClass('active-right') && margin <= 1) {
				content.height(height);
			} else {
				content.height('auto');
			}
		}
		
		return false;
	});
	
	left.on('movestart', function (e) {
		// sizeBoxes();
				
		if ((e.distX > e.distY && e.distX < -e.distY) || (e.distX < e.distY && e.distX > -e.distY)) {
			e.preventDefault();
		}
	}).on('swipeleft', function (e) {
		left.hide();
		
		$('body').removeClass('active-left');
	});
	
	right.on('movestart', function (e) {
		// sizeBoxes();
		
		if ((e.distX > e.distY && e.distX < -e.distY) || (e.distX < e.distY && e.distX > -e.distY)) {
			e.preventDefault();
		}
	}).on('swiperight', function (e) {
		right.hide();
		
		$('body').removeClass('active-right');
	});
});