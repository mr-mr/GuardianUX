$(function () {
	var scoresTop = $('article > section').offset().top;
	var scores = $(' article > .score');
	
	var length = scores.find('tr').length;
	
	var update = null;
	
	scores.find('tr').filter(':first').addClass('show');
	
	function showScores() {
		var current = scores.find('.show');
		var next = current.next().length ? current.next() : current.parent().children(':first');
		
		current.hide().removeClass('show');
		next.fadeIn(300).addClass('show');
	
		setTimeout(update,6000);
	}

	$(document).scroll(function () {
		var scrollTop = $(document).scrollTop();
		if ($('.tabs a[href!="#scores"]').hasClass('selected')) {
			if (scoresTop < scrollTop) {
				scores.addClass('fixed').show().find('tr');
			} else {
				scores.removeClass('fixed').hide();
				
				clearInterval(update);
			}
		}
	});
	
	// check to see if scores is fixed every second, but only if table contains more than one tr
	if (length > 1) {
		setInterval(function () {
			if (scores.hasClass('fixed')) {
				update = showScores();
			} else {
				scores.find('tr').removeClass('show').filter(':first').addClass('show');
			}
		},3000);
	}
});
