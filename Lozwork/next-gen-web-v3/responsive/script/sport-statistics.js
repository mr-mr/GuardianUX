$(function () {
	// highlight navigation
	if ($('body').hasClass('football-live-scores-all') || $('body').hasClass('football-live-scores-competition')) {
		$('.subsection-one a').addClass('is-current');
	} else if ($('body').hasClass('football-results-all')) {
		$('.subsection-two a').addClass('is-current');
	} else if ($('body').hasClass('football-fixtures-all')) {
		$('.subsection-three a').addClass('is-current');
	}
	
	// live scores controls
	$('.live-scores-controls a').click(function (e) {
		$(this).removeClass('is-selected').closest('li').siblings('li').find('a').addClass('is-selected');
		
		e.preventDefault();
	});
	
	// breaking news
	var breaking = $('.breaking-news');
	
	if (breaking.length === 1) {
		breaking.delay(5000).slideDown('slow', function () {
			if ($('body').is('#uk-edition-football')) {
				$('h1 .score').hide().text('1 - 1').fadeIn('slow');
				$('.live-scores-match-details .away').hide().html('Suarez 77&#x27;').fadeIn('slow');
				$('.football-scores-update-score').hide().text('1-1').fadeIn('slow');
			}
		}).delay(4000).slideUp('slow');
	}
});

$(function () {
	var controls = $('a.show-hide-control');
	var parent = $('.show-hide-parent');
	var originalLabel;

	controls.click(function () {
		if ($(this.hash).is(":visible")) {
			$(this.hash).slideUp().removeClass('is-expanded');
			
			if (this.hash === '#wrapper-live-blog-summary') {
				$(this).removeClass('is-current').html('Show').closest(parent).removeClass('is-expanded');
			} else {
				$(this).removeClass('is-current').html(originalLabel).closest(parent).removeClass('is-expanded');
			}
		} else {
			$(this.hash).slideDown().addClass('is-expanded');
			originalLabel = $(this).html();
			
			if (this.hash === '#wrapper-live-blog-summary') {
				$(this).addClass('is-current').html('Hide').closest(parent).addClass('is-expanded');
			} else {
				$(this).addClass('is-current').html('Close').closest(parent).addClass('is-expanded');
			}
		}

		event.preventDefault();
	});
});

// @codekit-append 'lozstrap.load-more.js'