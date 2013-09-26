$(function () {
	var controls = $('a.show-hide-control');
	var parent = $('.show-hide-parent');

	controls.click(function () {
		if ($(this.hash).is(":visible")) {
			$(this.hash).slideUp().removeClass('is-expanded');
			$(this).removeClass('is-current').closest(parent).removeClass('is-expanded');
		} else {
			$(this.hash).slideDown().addClass('is-expanded');
			$(this).addClass('is-current').closest(parent).addClass('is-expanded');
		}

		event.preventDefault();
	});
});