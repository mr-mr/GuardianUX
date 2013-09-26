$(function () {
	var ow = $(window).width();
	var mediumLarge = 960;

	var controls = $('.most-read-articles .tab-control');
	var containers = $('.most-read-articles .tab-pane');

	function tabs() {
		ow = $(window).width();

		if (ow < mediumLarge) {
			controls.click(function (e) {
				containers.hide().filter(this.hash).show();

				controls.removeClass('is-current');
				$(this).addClass('is-current');

				e.preventDefault();
			}).filter(':first').click();
		} else {
			controls.removeClass('is-current');
			containers.show();
		}
	}

	tabs();

	$(window).resize(function () {
		if (ow !== $(window).width()) {
			tabs();
		}
	});
});