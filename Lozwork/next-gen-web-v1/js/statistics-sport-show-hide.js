$(function () {
	var showHide = $('#show-hide');
	var showHideStrong = $('#show-hide span');
	var tableRows = $('table .hide');
		
	showHide.toggle(function () {
		tableRows.removeClass('hide').addClass('show');
		showHideStrong.html('Show less');
	}, function () {
		tableRows.removeClass('show').addClass('hide');
		showHideStrong.html('Show more');
	});

	var sectionControl = $('.section-control a');
	
	sectionControl.toggle(function () {
		$(this).html('Show games');
		$(this.hash).slideUp();
	}, function () {
		$(this).html('Hide games');
		$(this.hash).SlideDown();
	});
	
	var filterControl = $('#filter a');
	var filterGames = $('#filter-games');
	
	filterControl.toggle(function () {
		$(this).html('Hide competition filters');
		$(this.hash).slideDown();
	}, function () {
		$(this).html('Filter by competition');
		$(this.hash).slideUp();
	});
});