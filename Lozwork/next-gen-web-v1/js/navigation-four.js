$(function () {
	var nav = $('#navigation-controls a');
	
	var left = $('#primary-navigation');
	var content = $('.content');
	var right = $('#top-stories');
	
	function sizeBoxes () {
		var headerHeight = $('header').outerHeight(true);
		var margin = $(document).scrollTop() - headerHeight;
			
		if (margin > 40) {
			var height = $(window).height();

			left.height(height).css('margin-top',margin);
			right.height(height).css('margin-top',margin);
		} else {
			var height = $(window).height() - headerHeight;
			
			left.height(height).css('margin-top','0');
			right.height(height).css('margin-top','0');		
		};					
	};
	
	nav.click(function () {		
		if (this.hash == '#primary-navigation') {
			sizeBoxes();
			
			$('body').toggleClass('active-left').removeClass('active-right');
		} else {
			sizeBoxes();
			
			$('body').toggleClass('active-right').removeClass('active-left');
		};
		
		return false;
	});
	
	content.on('movestart', function (e) {		
		if ((e.distX > e.distY && e.distX < -e.distY) || (e.distX < e.distY && e.distX > -e.distY)) {
			e.preventDefault();
		}
	}).on('swipeleft', function (e) {
		sizeBoxes();
		
		$('body').toggleClass('active-right').removeClass('active-left');
	}).on('swiperight', function (e) {
		sizeBoxes();
		
		$('body').toggleClass('active-left').removeClass('active-right');
	});
	
	left.on('movestart', function (e) {
		sizeBoxes();
				
		if ((e.distX > e.distY && e.distX < -e.distY) || (e.distX < e.distY && e.distX > -e.distY)) {
			e.preventDefault();
		}
	}).on('swipeleft', function (e) {
		$('body').removeClass('active-left');
	});
	
	right.on('movestart', function (e) {
		sizeBoxes();
		
		if ((e.distX > e.distY && e.distX < -e.distY) || (e.distX < e.distY && e.distX > -e.distY)) {
			e.preventDefault();
		}
	}).on('swiperight', function (e) {
		$('body').removeClass('active-right');
	});
	
});
