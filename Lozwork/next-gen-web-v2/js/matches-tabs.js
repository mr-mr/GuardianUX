$(function () {
	var tabsLB = $('.live-blog ul.tabs li a');
	var tabsMR = $('.article-related ul.tabs li a');
	
	var tabLBContainers = $('section.live-blog > section');
	var tabMRContainers = $('.article-related section.tabs section');
	
	tabLBContainers.hide().filter(':first').show();
	tabMRContainers.hide().filter(':first').show();
	
	tabsLB.click(function () {
		tabLBContainers.hide().filter(this.hash).show();
		
		tabsLB.removeClass('selected');
		$(this).addClass('selected');
		
		return false;
	}).filter(':first').click();
	
	tabsMR.click(function () {
		tabMRContainers.hide().filter(this.hash).show();
		
		tabsMR.removeClass('selected');
		$(this).addClass('selected');
		
		return false;
	}).filter(':first').click();
});