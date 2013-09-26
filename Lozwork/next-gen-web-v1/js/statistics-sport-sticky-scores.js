$(function () {
	var top = $('article.first').offset().top;
	var table = $('.score');
	var scores = $('.score tr');
	var hiddenScores = $('.score .hide');
	
	var length = scores.length;
	
	var update = null;
	
	table.find('tr').filter(':first').addClass('show');
	
	function showScores() {
		var current = table.find('.show');
		var next = current.next().length ? current.next() : current.parent().children(':first');
		
		current.addClass('hide').removeClass('show');
		next.addClass('show').removeClass('hide');
	
		setTimeout(update,6000);
	}
	
	$(document).scroll(function () {
		var scrollTop = $(document).scrollTop();
	
		
		if (top < scrollTop) {
			table.addClass('fixed').find('tr').addClass('hide').filter(':first').addClass('show').removeClass('hide');
		} else {
			table.removeClass('fixed').find('tr').removeClass();
			hiddenScores.addClass('hide');
			
			clearInterval(update);
		}
	});
	
	// check to see if scores is fixed every second, but only if table contains more than one tr
	if (length > 1) {
		setInterval(function () {
			if (table.hasClass('fixed')) {
				update = showScores();
			} else {
				clearInterval(update);
			}
		},3000);
	}
});