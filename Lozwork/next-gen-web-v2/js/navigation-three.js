$(function () {
	var link = $('a.dropdown-control');
	var subsectionLink = $('.subsection-navigation a');
	
	var ow = $(window).width();
	
	function showHide(theHash,theLink) {
		if ($(theHash).is(':visible')) {
			$(theHash).slideUp();
			$(theLink).removeClass('selected');
		} else {
			$(theHash).slideDown();
			$(theLink).addClass('selected');
		}
	}
	
	link.click(function () {
		link.removeClass('selected');
		
		ow = $(window).width();
		
		if (ow >= 700) {
			$('#global-search-dropdown').show();
			showHide(this.hash,this);
		} else if (ow < 700) {
			if (this.hash == '#global-search-dropdown') {
				$('#navigation-dropdown').slideUp();
				showHide(this.hash,this);
			} else if (this.hash == '#navigation-dropdown') {
				$('#global-search-dropdown').slideUp();
				showHide(this.hash,this);
			}
		}

		event.preventDefault();
	});
	
	subsectionLink.click(function () {
		subsectionLink.removeClass('selected');
		
		$(this).addClass('selected');
		
		event.preventDefault();
	});
	
	$(window).resize(function() {
		if (ow !== $(window).width()) {
			ow = $(window).width();
			
			if (ow >= 824) {
				$('#global-search-dropdown').show();
			} else if (ow < 824) {
				$('#global-search-dropdown').hide();
			}
		}
	});
});