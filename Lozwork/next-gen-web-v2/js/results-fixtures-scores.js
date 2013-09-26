$(function () {
	var english = $('<option value="all">All English</option><option value="premier-league">Premier league</option><option value="championship">Championship</option><option value="league-one">League one</option><option value="league-two">League two</option><option value="fa-cup">FA Cup</option><option value="league-one">League Cup</option>');
	var scottish = $('<option value="all">All Scottish</option><option value="premier-league">Scottish Premier League</option><option value="division-one">Scottish division one</option><option value="division-two">Scottish division two</option><option value="division-three">Scottish division three</option><option value="fa-cup">Scottish FA Cup</option><option value="league-cup">Scottish League Cup</option>');
	var european = $('<option value="all">All European</option><option value="champions-league">Champions League</option><option value="europa-league">Europa League</option><option value="la-liga">La Liga</option><option value="bundeslige">Bundeslige</option><option value="ligue-1">Ligue 1</option><option value="seria-a">Serie A</option>');
	var international = $('<option value="all">All International</option><option value="friendlies">Friendlies</option><option value="wc-qualifying">World Cup Qualifying</option><option value="euro-qualifying">Euro Qualifying</option>');
	
	var popComps = $('.popular-competitions a');
							
	var filterOne = $('.filter-one');
	var filterTwo = $('.filter-two');
	
	var submit = $('#filters input[type="submit"]');

	var filter;
	var dropdown;

	var url;
		
	var compOne;
	var compTwo;

	var type = $('body').attr('id');
	type = type.substring(0, type.indexOf('-'));
	var title;
	
	function loadStatsChangeTitle (url,type,title) {
		$.get(url, function (data) {
			var section = '#' + type + 's';
			
			$(section).empty().html(data);
		});
		
		$('h1').text(title).toTitleCase();
		
		$('#filters-form').delay(1500).slideUp().next('p').find('span').text('Show');
	}
	
	popComps.click(function () {
		url = '/inc/' + $('body').attr('id') + '/' + $(this).attr('href') + '.inc';
		
		compOne = $(this).attr('href').replace(/-/g, " ");
		
		title = compOne + ' ' + type + 's';
		
		loadStatsChangeTitle(url,type,title);
		
		return false;
	});
	
	filterOne.change(function () {
		filter = filterOne.val();
		dropdown = {english: english, scottish: scottish, european: european, international: international};
		
		if (filter === 'all')  {
			filterTwo.hide().empty();
		} else {
			filterTwo.show().empty().html(dropdown[filter]).children('option').first().attr('selected','selected');
		}
	});
	
	submit.click(function () {
		if (filterOne.val() === 'all') {
			url = '/inc/' + $('body').attr('id') + '/' + filterOne.val() + '.inc';
			
			compOne = filterOne.val();
			
			title = compOne + ' ' + type + 's';
		} else {
			url = '/inc/' + $('body').attr('id') + '/' + filterOne.val() + '-' + filterTwo.val() + '.inc';
		
			compOne = filterOne.val().replace(/-/g, " ");
			compTwo = filterTwo.val().replace(/-/g, " ");
		
			if (filterTwo.val().indexOf("all") >= 0) {
				title = compTwo + ' ' + compOne + ' ' + type + 's';
			} else {
				title = compOne + ' ' + compTwo + ' ' + type + 's';
			}
		}
		
		loadStatsChangeTitle(url,type,title);

		return false;
	});
});

