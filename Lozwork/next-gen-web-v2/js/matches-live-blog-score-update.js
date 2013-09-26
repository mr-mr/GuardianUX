$(function () {
	var bn = $('.breaking-news');
	var i = 1;
	
	bn.delay(7200).slideDown('slow', function () {
		if ($('body').hasClass('single')) {
			$('h1 .score').html('1-1');
			$('.match-details .away').html('Suarez 77&#x27;');
			
			$('#table .updatedLose').hide(function () {
				$(this).children('td:last-child').html(1).prev('td').html('0');
			}).fadeIn('slow');
			
			$('#table .updatedWin').hide(function () {
				$(this).children('td:last-child').html(1).prev('td').html(0);
			}).prependTo('#table tbody').fadeIn('slow');
	
			$('#table tbody td:first-child').each(function () {
				$(this).html(i);
				
				i++;

				if (i === 21) {
					return false;
				}
			});
			$('#scores .updated').hide(function () {
				$(this).children('td:last-child').prev('td').prev('td').html('1-1');
			}).fadeIn('slow');
		} else {
			$('#scores .updated').hide().html('<td>Arsenal</td><td><a href="#"><a href="#">0-1</a></a></td><td>Southampton</td><td>76&#x27;</td>').fadeIn('slow');
			
			$('#table .updatedLose').hide(function () {
				$(this).children('td:last-child').prev('td').html('-1');
			}).appendTo('#table tbody').fadeIn('slow');
			
			$('#table .updatedWin').hide(function () {
				$(this).children('td:last-child').html(3).prev('td').html(1);
			}).prependTo('#table tbody').fadeIn('slow');
	
			$('#table tbody td:first-child').each(function () {
				$(this).html(i);
				
				i++;
				
				if (i === 21) {
					return false;
				}
			});
		}
	}).delay(5000).slideUp('slow');
});