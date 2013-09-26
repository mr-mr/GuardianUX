$(function () {
	var tabs = $('ul.tabs li a');
	var tabContainers = $('article > section');
	
	tabContainers.hide().filter(':first').show();
	
	tabs.click(function () {
		tabContainers.hide().filter(this.hash).show();
		
		tabs.removeClass('selected');
		$(this).addClass('selected');
		
		return false;
	}).filter(':first').click();
});