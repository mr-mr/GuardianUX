$(function() {
	$('.subsection-one a').addClass('is-current');
	
	var ow = $(window).width();
	
	var tabControls = $('.tab-control');
	var showMedium = $('#live-blog-summary');
	var showLarge = $('.articles-most-popular .tab-pane');
	
	// set up tabs
	function tabsInit() {
		var tabSets = $('.tab-set');
		
		console.log(tabSets);
		
		tabSets.each(function() {
			var thisTabControls = $(this).find('.tab-control');
			var thisTabContainers = $(this).find('.tab-pane');
		
			console.log(thisTabContainers);
			
			thisTabContainers.hide().filter(':first').show();
		
			thisTabControls.filter(':first').addClass('is-current');
		});
		
		ow = $(window).width();
		
		tabsInitMediumLarge();
	}

	// extra tab setup for medium and larger screen sizes
	function tabsInitMediumLarge() {
		if (ow >= 640) {
			showMedium.show();
		} else if (ow >= 960) {
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
});

// @codekit-append 'lozstrap.load-more.js'