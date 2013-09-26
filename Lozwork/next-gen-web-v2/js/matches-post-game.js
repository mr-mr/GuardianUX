$(function () {
	var i = 1;
			
	$('#table .updatedLose').children('td:last-child').html(1).prev('td').html(0);
	$('#table .updatedWin').hide(function (){
		$(this).children('td:last-child').html(1).prev('td').html(0);
	}).prependTo('#table tbody').show();
	$('#table tbody td:first-child').each(function () {
		$(this).html(i);
				
		i++;

		if (i === 21) {
			return false;
		}
	});
	$('#scores .updated').children('td:last-child').html('FT').prev('td').prev('td').html('1-1');
});