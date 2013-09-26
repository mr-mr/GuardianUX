$(function () {
	var controls = $('a.show-hide-control');
	var parent = $('.show-hide-parent');

	controls.click(function () {
		if ($(this.hash).is(":visible")) {
			$(this.hash).slideUp().removeClass('is-expanded');
			$(this).removeClass('is-current').children('span').html('Show').closest(parent).removeClass('is-expanded');
		} else {
			$(this.hash).slideDown().addClass('is-expanded');
			$(this).addClass('is-current').children('span').html('Hide').closest(parent).addClass('is-expanded');
		}

		event.preventDefault();
	});
});