$(function () {
	var links = $('a.show-hide');
	
	links.click(function () {
		if ($(this.hash).is(":visible")) {
			$(this.hash).slideUp();
			$(this).children('span').html('Show');
		} else {
			$(this.hash).slideDown();
			$(this).children('span').html('Hide');
		}

		event.preventDefault();
	});
});