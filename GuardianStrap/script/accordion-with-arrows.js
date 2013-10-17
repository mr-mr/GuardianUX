$(function () {
	var controls = $('.accordion-control');
	var containers = $('.accordion-pane');

	containers.hide().filter(':first').show();

	controls.click(function (e) {
		containers.slideUp().filter(this.hash).slideDown();

		controls.removeClass('is-current').children('i').removeClass('icon-angle-up').addClass('icon-angle-down');
		$(this).addClass('is-current').children('i').removeClass('icon-angle-down').addClass('icon-angle-up');

		e.preventDefault();
	}).filter(':first').click();
});
