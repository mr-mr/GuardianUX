$(function () {
	var tabControls = $('.tab-control');
	var tabContainers = $('.tab-pane');

	tabContainers.hide().filter(':first').show();

	tabControls.click(function (e) {
		tabContainers.hide().filter(this.hash).show();

		tabControls.removeClass('is-current');
		$(this).addClass('is-current');

		e.preventDefault();
	}).filter(':first').click();
});