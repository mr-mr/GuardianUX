$(function () {
	var bn = $('.breaking-news');
	var updateControl = $('.update-control a');
	var numberUpdates = $('.number-updates');
	
	bn.delay(3000).slideDown('slow', function () {
		$('.updated').hide().html('<td>Arsenal</td><td><a href="#"><a href="#">0-1</a></a></td><td>Southampton</td><td>76&#x27;</td>').fadeIn('slow');
	}).delay(5000).slideUp('slow');
	
	updateControl.click(function () {
		updateControl.removeClass('selected');
		$(this).addClass('selected');
		
		if (this.hash === '#on') {
			numberUpdates.hide();
		} else {
			numberUpdates.delay(3000).show();
		}
		return false;
	});
});
