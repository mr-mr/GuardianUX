$(function () {
	var contact = $('#filters ul a');
	
	contact.click(function () {
		$('#filters-form').hide().next('p').find('span').text('Show');
	});	
});