$(function () {
	var controls = $('.accordion-control');
	var containers = $('.accordion-pane');

	containers.hide().filter(':first').show();
	
	controls.click(function (e) {
		containers.hide().filter(this.hash).show();

		controls.removeClass('is-current');
		$(this).addClass('is-current');

		e.preventDefault();
	}).filter(':first').click();
});
