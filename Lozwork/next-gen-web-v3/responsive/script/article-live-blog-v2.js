$(function () {
	var ow =$(window).width();
	var mediumLarge = 960;
	
	// highlight politics section for news live blog
	if ($('body').is('#uk-edition-uk')) {
		$('.subsection-one a').addClass('is-current');
	}
	
	// live blog controls
	var liveBlogControls = $('.live-blog-controls a');
	
	liveBlogControls.click(function (e) {
		var liveBlogStreamItems = $('.live-blog-stream-item');
		
		$(this).removeClass('is-selected').closest('li').siblings('li').find('a').addClass('is-selected');
		
		if (this.hash === '#live-blog-controls-show-all') {
			liveBlogStreamItems.not('.is-key-event').slideUp();
		} else if (this.hash === '#live-blog-controls-show-key-only') {
			liveBlogStreamItems.not('.is-key-event').slideDown();
		}
		
		e.preventDefault();
	});
	
	// tab controls
	var controls = $('.article-body .tab-control');
	var containers = $('.article-body .tab-pane');
	var tabToShowAtMediumLarge = $('#live-blog-tab-3');
	
	controls.click(function (e) {
		ow = $(window).width();
		
		if (ow >= mediumLarge) {
			containers.hide().filter(this.hash).show();
			if ($('body').is('#uk-edition-football') && this.hash === '#live-blog-tab-1') {
				tabToShowAtMediumLarge.show();
			} else if ($('body').is('#uk-edition-football') && this.hash === '#live-blog-tab-2') {
				tabToShowAtMediumLarge.hide();
			}
		} else {
			containers.hide().filter(this.hash).show();
		}

		controls.removeClass('is-current');
		$(this).addClass('is-current');

		e.preventDefault();
	}).filter(':first').click();
	
	// intial tab setup and window resize tab control
	function tabsInit () {
		ow = $(window).width();
		
		if (ow >= mediumLarge){
			tabToShowAtMediumLarge.show();
		} else {
			tabToShowAtMediumLarge.hide();
		}
	}
	
	tabsInit();
	
	$(window).resize(function() {
		if (ow !== $(window).width) {
			tabsInit();
		}
	});
});