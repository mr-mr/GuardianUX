$(function () {
	var links = $('.navigation-controls a');
	
	links.click(function () {
		links.removeClass('selected');
		
		if($('#primary-navigation').is(':visible')) {
			$('#primary-navigation').slideUp();
		} else if ($('#top-stories-list').is(':visible')) {
			$('#top-stories-list').slideUp();
		} else if ($('#search').is(':visible')) {
			$('#search').slideUp();
		}
			
		if ($(this.hash).is(':visible')) {
			$(this.hash).slideUp();
			$(this).removeClass('selected');
		} else {
			$(this.hash).slideDown();
			$(this).addClass('selected');
		}

		event.preventDefault();
	});
});