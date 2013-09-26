$(function () {
	var controls = $('.accordian dt a');
	var containers = $('.accordian .pane');
	
	containers.hide().filter(':first').show();
	
	controls.click(function (e) {
		containers.slideUp().filter(this.hash).slideDown();
		
		controls.removeClass('selected');
		$(this).addClass('selected');
		
		e.preventDefault();
	}).filter(':first').click();
});