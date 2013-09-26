$(function () {
	var originalWidth = $(window).width();
	
	var titles = [$('title'), $('.crumbtrail a.selected'), $('.subsection-navigation h2'), $('h1')];
	
	var sectionName = $('.primary-navigation a.selected').text();
	
	var currentSubsection;
	var prevSubsection;
	var selected;
	var last;
	
	var primaryNavigation = $('#navigation-horizontal .primary-navigation li');
	var currentSubsectionNavigation;
	
	var subsectionNavs = $('#navigation-horizontal .subsection-navigation');

	var primaryLinks = $('.primary-navigation a');
	var subsectionLinks = $('.subsection-navigation a');
	var crumbtrailLinks = $('.crumbtrail a');
	
	var primaryHorizontal = $('#navigation-horizontal .primary-navigation ul');
	var subsectionHorizontal = $('#navigation-horizontal .subsection-navigation ul');
	
	var primaryDropdown = $('#navigation-dropdown .primary-navigation ul');
	var subsectionDropdown = $('#navigation-dropdown .subsection-navigation ul');

	var primaryHidden;
	var subsectionHidden;
	
	var dropdownControl = $('a.dropdown-control');
	
	// change all titles and id of body
	function changeTitles(titles, sectionName) {
		$.each(titles, function () {
			$(this).text(sectionName);
		});
		
		sectionName = sectionName.replace(' & ','-');
		
		$('body').attr('id',sectionName.toLowerCase());
	}

	// get hidden items from primary navigation
	function getHiddenPrimary() {
		primaryHidden = $('#navigation-horizontal .primary-navigation li:hidden');
		
		return primaryHidden;
	}

	// get hidden items from subsection navigation
	function getHiddenSubsection(id) {
		subsectionHidden = $(id).find('li:hidden');
		
		return subsectionHidden;
	}
	
	function primaryNavSelection(item, itemHash) {
		// figure out what the previous nav was and put it back in where it belongs
		prevSubsection = $('.primary-navigation a.selected').attr('href');
		if (currentSubsectionNavigation !== null) {
			$(prevSubsection).children('ul').append(currentSubsectionNavigation);
		}

		// empty subnav dropdown
		subsectionDropdown.empty();
		
		// remove selected classes and add selected class to clicked item
		primaryLinks.removeClass('selected').filter(item).addClass('selected');
		subsectionLinks.removeClass('selected');
		
		currentSubsectionNavigation = $(itemHash).find('li');

		sectionName = $('.primary-navigation a.selected').text();

		changeTitles(titles, sectionName);
		getHiddenSubsection($(itemHash));
		
		if (originalWidth < 500) {			
			subsectionNavs.hide();
			subsectionHidden.appendTo(subsectionDropdown);
			console.log($(prevSubsection));
			if (prevSubsection === '#home-subsections') {
				$('.crumbtrail').show();
				
				primaryDropdown.hide().find('li').appendTo(primaryHorizontal).children('a').bind().click(function () {
					primaryNavSelection(this, this.hash);
				});
			}
			if (itemHash === '#home-subsections') {
				$('.crumbtrail').hide();
				
				primaryNavigation.appendTo(primaryDropdown).children('a').bind().click(function (){
					primaryNavSelection(this, this.hash);	
				});
				primaryDropdown.show().find($('a'.attr('href',itemHash))).addClass('selected');
			}
		} else if (originalWidth >= 500) {
			subsectionNavs.hide().filter(itemHash).show();
			subsectionHidden.appendTo(subsectionDropdown);
		}
		
		event.preventDefault();
	}
	
	function showHide(theHash,theLink) {
		if ($(theHash).is(':visible')) {
			$(theHash).slideUp();
			$(theLink).removeClass('selected');
		} else {
			$(theHash).slideDown();
			$(theLink).addClass('selected');
		}
	}
	
	function resize() {
		if (originalWidth !== $(window).width()) {
			originalWidth = $(window).width();
			
			primaryHorizontal.empty().append(primaryNavigation);
			primaryNavigation.children('a').bind().click(function () {
				primaryNavSelection(this, this.hash);
			});
			
			currentSubsection = $('#navigation-horizontal .primary-navigation a.selected').attr('href');
			if (currentSubsectionNavigation !== null) {
				$(currentSubsection).children('ul').append(currentSubsectionNavigation);
			}
					
			dropdown(originalWidth);
									
			if (originalWidth >= 500) {
				getHiddenPrimary();
				primaryHidden.appendTo(primaryDropdown);

				if ($(primaryDropdown).find('a.selected').length === 1) {
					selected = primaryDropdown.find('a.selected').parent('li');
					last = primaryHorizontal.children('li').filter(':last');
					
					console.log(selected,last);
					
					selected.appendTo(primaryHorizontal);
					last.prependTo(primaryDropdown);
				}

				getHiddenSubsection($(currentSubsection));
				subsectionHidden.appendTo(subsectionDropdown);

				if ($(subsectionDropdown).find('a.selected').length === 1) {
					selected = subsectionDropdown.find('a.selected').parent('li');
					last = subsectionHorizontal.children('li').filter(':last');
					
					console.log(selected,last);
					
					selected.appendTo(subsectionHorizontal);
					last.prependTo(subsectionDropdown);
				}
				
				if (currentSubsectionNavigation !== null) {
					$(currentSubsection).show();
				}
			} else {
				subsectionNavs.hide();
				$(currentSubsectionNavigation).appendTo(subsectionDropdown);
			}
		}
	}
	
	function dropdown(width) {
		var bodyId = $('body').attr('id');
		
		if (width < 500 && bodyId === 'home') {
			console.log('smaller than 500');
		} else if (width >= 500 && bodyId === 'home') {
			console.log('bigger than 500');
		} else if (width < 500 && bodyId !== 'home') {
			console.log(bodyId);	
		}
	}
	
	// hide all subsection navs on load
	subsectionNavs.hide();
	
	// initial title/body id change and nav move
	changeTitles(titles, sectionName);
	getHiddenPrimary();
	primaryHidden.appendTo(primaryDropdown);
	
	dropdown(originalWidth);
	
	// primary nav links
	primaryLinks.click(function () {
		primaryNavSelection(this, this.hash);
	});
	
	// subsection nav links
	subsectionLinks.click(function () {
		subsectionLinks.removeClass('selected').filter(this).addClass('selected');

		event.preventDefault();
	});
	
	// crumbtrail nav links
	crumbtrailLinks.click(function () {
		primaryNavSelection(this,this.hash);
	});
	
	// dropdown show hide
	dropdownControl.click(function () {
		dropdownControl.removeClass('selected');
		
		originalWidth = $(window).width();
		
		if (originalWidth >= 700) {
			$('#global-search-dropdown').show();
			showHide(this.hash,this);
		} else if (originalWidth < 700) {
			if (this.hash === '#global-search-dropdown') {
				$('#navigation-dropdown').slideUp();
				showHide(this.hash,this);
			} else if (this.hash === '#navigation-dropdown') {
				$('#global-search-dropdown').slideUp();
				showHide(this.hash,this);
			}
		}

		event.preventDefault();
	});
	
	// resize event
	$(window).resize(function () {
		resize();
	});
});