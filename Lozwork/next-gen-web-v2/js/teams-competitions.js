$(function () {
	var comps = $('#filters-too ul a');
	
	comps.click(function () {
		$('#filters-form').slideUp().next('p').find('span').text('Show');
	});
});

