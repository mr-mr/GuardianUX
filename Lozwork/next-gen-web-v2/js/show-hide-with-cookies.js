$(function () {
	var links = $('a.show-hide');
	var divs = $('section > div.show-hide');
	
	divs.each(function () {
		if ($.cookie($(this).attr('id')) === 'hide') {
			$(this).hide().prev('h2').find('span').html('Show');
		} else if ($.cookie($(this).attr('id')) === 'show') {
			$(this).show().prev('h2').find('span').html('Hide');
		}
	});
	
	links.click(function () {
		if ($(this.hash).is(":visible")) {
			$(this.hash).slideUp();
			$(this).children('span').html('Show');
			
			$.cookie($(this.hash).attr('id'),'hide',{expires:1});
		} else {
			$(this.hash).slideDown();
			$(this).children('span').html('Hide');
			
			$.cookie($(this.hash).attr("id"),'show',{expires:1});
		}

		return false;
	});
});