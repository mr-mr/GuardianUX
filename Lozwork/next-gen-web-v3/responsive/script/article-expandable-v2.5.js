$(function () {
	$('.subsection-one a').addClass('is-current');
	
	var myPhotoSwipe = $("#gallery a").photoSwipe({
		captionAndToolbarFlipPosition: true
	});
	
	var controls = $('a.show-hide-control');
	var parent = $('.show-hide-parent');
	var originalLabel;

	controls.click(function () {
		if ($(this.hash).is(":visible")) {
			$(this.hash).slideUp().removeClass('is-expanded');
			$(this).removeClass('is-current').html(originalLabel).closest(parent).removeClass('is-expanded');
		} else {
			$(this.hash).slideDown().addClass('is-expanded');
			originalLabel = $(this).html();
			
			$(this).addClass('is-current').html('Close').closest(parent).addClass('is-expanded');
		}

		event.preventDefault();
	});
	
	var ow = $(window).width();

	var tabControls = $('.tab-control');
	var tabContainers = $('.tab-pane');
	var tabContainerArticles = $('.tab-pane article');

	function tabs() {
		ow = $(window).width();
		
		if (ow < 960) {
			tabContainers.hide().filter(':first').show();

			tabControls.click(function (e) {
				tabContainers.hide().filter(this.hash).show();

				tabControls.removeClass('is-current');
				$(this).addClass('is-current');

				e.preventDefault();
			}).filter(':first').click();
		} else {
			tabContainers.show();
			
			tabContainerArticles.hover(function () {
				tabContainerArticles.removeClass('is-focused').addClass('isnt-focused');
				$(this).addClass('is-focused').removeClass('isnt-focused');
			});
		}
	}
	
	tabs();
	
	$(window).resize(function () {
		if (ow !== $(window).width()) {
			tabs();
		}
	});
});