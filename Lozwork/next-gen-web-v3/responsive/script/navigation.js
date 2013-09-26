$(function () {
	var link = $('.dropdown-control');
	var subsectionLink = $('.navigation-subsections a');

	var ow = $(window).width();
	var smallMedium = 506;

	function showHide(theHash,theLink) {
		if ($(theHash).is(':visible')) {
			$(theHash).slideUp();
			$(theLink).removeClass('is-current');
		} else {
			$(theHash).slideDown();
			$(theLink).addClass('is-current');
		}
	}

	link.click(function () {
		link.removeClass('is-current');

		ow = $(window).width();

		if (ow >= smallMedium) {
			$('#navigation-search-dropdown').show();
			showHide(this.hash,this);
		} else if (ow < smallMedium) {
			if (this.hash === '#navigation-search-dropdown') {
				$('#navigation-dropdown').slideUp();
				showHide(this.hash,this);
			} else if (this.hash === '#navigation-dropdown') {
				$('#navigation-search-dropdown').slideUp();
				showHide(this.hash,this);
			}
		}

		event.preventDefault();
	});

	subsectionLink.click(function () {
		subsectionLink.removeClass('is-current').filter(this).addClass('is-current');

		event.preventDefault();
	});

	$(window).resize(function() {
		if (ow !== $(window).width()) {
			ow = $(window).width();

			if (ow >= smallMedium) {
				$('#navigation-search-dropdown').show();
			} else if (ow < smallMedium) {
				$('#navigation-search-dropdown').hide();
			}
		}
	});
});