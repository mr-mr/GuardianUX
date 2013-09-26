$(function () {
	$('.subsection-one a').addClass('is-current');
	
	var myPhotoSwipe = $("#gallery a").photoSwipe({
		captionAndToolbarFlipPosition: true
	});

	// article summary show hide
	var summaryControls = $('.article-summary a.show-hide-control');
	var summaryParent = $('.article-summary .show-hide-parent');

	summaryControls.click(function () {
		if ($(this.hash).is(":visible")) {
			$(this.hash).slideUp().removeClass('is-expanded');
			$(this).removeClass('is-current').children('span').html('Show').closest(summaryParent).removeClass('is-expanded');
		} else {
			$(this.hash).slideDown().addClass('is-expanded');
			$(this).addClass('is-current').children('span').html('Hide').closest(summaryParent).addClass('is-expanded');
		}

		event.preventDefault();
	});

	// most read show and hide
	var controls = $('.articles-most-popular a.show-hide-control');
	var parent = $('.articles-most-popular .show-hide-parent');
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
	
	// article vs comment tabs	
	var articleCommentTabControls = $('.container-article-comments .tab-control');
	var articleCommentTabContainers = $('.container-article-comments .tab-pane');

	articleCommentTabContainers.hide().filter(':first').show();

	articleCommentTabControls.click(function (e) {
		articleCommentTabContainers.hide().filter(this.hash).show();

		articleCommentTabControls.removeClass('is-current');
		$(this).addClass('is-current');
		
		if (this.hash == '#article-comments') {
			$('.comments-quick-pick').hide();
		} else {
			$('.comments-quick-pick').show();
		}
		
		e.preventDefault();
	}).filter(':first').click();
	
	// most read tabs 
	var ow = $(window).width();

	var mostPopularTabControls = $('.articles-most-popular .tab-control');
	var mostPopularTabContainers = $('.articles-most-popular .tab-pane');
	var mostPopularTabContainerArticles = $('.articles-most-popular .tab-pane article');

	function mostPopularTabs() {
		ow = $(window).width();
		
		if (ow < 960) {
			mostPopularTabContainers.hide().filter(':first').show();

			mostPopularTabControls.click(function (e) {
				mostPopularTabContainers.hide().filter(this.hash).show();

				mostPopularTabControls.removeClass('is-current');
				$(this).addClass('is-current');

				e.preventDefault();
			}).filter(':first').click();
		} else {
			mostPopularTabContainers.show();
			
			mostPopularTabContainerArticles.hover(function () {
				mostPopularTabContainerArticles.removeClass('is-focused').addClass('isnt-focused');
				$(this).addClass('is-focused').removeClass('isnt-focused');
			});
		}
	}
	
	mostPopularTabs();
	
	$(window).resize(function () {
		if (ow !== $(window).width()) {
			mostPopularTabs();
		}
	});
});

// @codekit-append 'lozstrap.load-more.js'