$(function () {
	var bn = $('.breaking-news');
	var i = 1;
	
	bn.delay(7200).slideDown('slow', function () {
		if ($('body').hasClass('single')) {
			$('h1').html('Arsenal 0 - 1 Southampton <strong class="live-latest">Live</strong>');
			
			$('#table .updatedLose').hide(function () {
				$(this).children('td:last-child').prev('td').html('-1');
			}).appendTo('#table tbody').fadeIn('slow');
			
			$('#table .updatedWin').hide(function () {
				$(this).children('td:last-child').html(3).prev('td').html(1);
			}).prependTo('#table tbody').fadeIn('slow');
	
			$('#table tbody td:first-child').each(function () {
				$(this).html(i);
				
				i++;
				
				console.log(i);
				if (i === 21) {
					return false;
				}
			});
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
				
				console.log(i);
				if (i === 21) {
					return false;
				}
			});
		}
	}).delay(5000).slideUp('slow');
});