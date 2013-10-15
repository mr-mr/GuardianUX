

$(function () {
	var controls = $('.accordion-control');
	var containers = $('.accordion-pane');

	containers.hide().filter(':first').show();
	
	controls.click(function (e) {
		containers.slideUp().filter(this.hash).slideDown();

		controls.removeClass('is-current');
		$(this).addClass('is-current');

		e.preventDefault();
	}).filter(':first').click();
});
