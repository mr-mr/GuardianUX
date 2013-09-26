$(function() {
	$('.subsection-one a').addClass('is-current');
	
	var ow = $(window).width();
	
	var tabControls = $('.tab-control');
	var showMedium = $('#live-blog-scores-table');
	var showLarge = $('.articles-most-popular .tab-pane');
	
	// set up tabs
	function tabsInit() {
		var tabSets = $('.tab-set');
		
		tabSets.each(function() {
			var thisTabControls = $(this).find('.tab-control');
			var thisTabContainers = $(this).find('.tab-pane');
			
			thisTabContainers.hide().filter(':first').show();
		
			thisTabControls.filter(':first').addClass('is-current');
		});
		
		ow = $(window).width();
		
		tabsInitMediumLarge();
	}

	// extra tab setup for medium and larger screen sizes
	function tabsInitMediumLarge() {
		if ($('body').attr('id') === 'live-blog-sport-v2') {
			if (ow >= 640) {
				showMedium.show();
			}
		}
		
		if (ow >= 960) {
			showLarge.show();
		}
	}

	// tabs
	tabControls.click(function(e){
		var thisTabContext = $(this).closest('.tab-set');
		var thisTabControls = thisTabContext.find('.tab-control');
		var thisTabContainers = thisTabContext.find('.tab-pane');

		thisTabContainers.hide().filter(this.hash).show();
		
		tabsInitMediumLarge();
		
		thisTabControls.removeClass('is-current');
		$(this).addClass('is-current');
		
		e.preventDefault();
	});
	
	tabsInit();
	
	$(window).resize(function() {
		if (ow !== $(window).width) {
			tabsInit();
		}
	});
	
	// blog controls 
	var blogControls = $('.live-blog-controls a');
	
	blogControls.click(function () {
		var blogStreamItems = $('.live-blog-stream-item');
		
		$(this).removeClass('is-selected').closest('li').siblings('li').find('a').addClass('is-selected');
	
		if (this.hash === '#live-blog-controls-show-all') {
			blogStreamItems.not('.is-key-event').slideUp();
		} else if (this.hash === '#live-blog-controls-show-key-only') {
			blogStreamItems.not('.is-key-event').slideDown();
		} else if (this.hash === '#live-blog-controls-update-on') {
			
		} else if (this.hash === '#live-blog-controls-update-off') {
			
		}
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
	
	// summary  show hide
	var summaryControls = $('#live-blog-summary a.show-hide-control');
	var summaryParent = $('#live-blog-summary .show-hide-parent');

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
});

// @codekit-append 'lozstrap.load-more.js'