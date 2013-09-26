$(function () {
	var comps = $('#filters-too ul a');

	var url;
	var moreStats;
	var compOne;

	var type = $('body').attr('id');
	type = type.substring(0, type.indexOf('-')) + 's';
	var title;
	
	var loadMore = $('.load-more');
	var loadMoreUrl;
	var loadMoreLink;
	
	$('#filters-too ul:last-of-type a span').text(type);
	
	function loadStatsChangeTitle (url,moreStats,type,title) {
		$.get(url, function (data) {
			var section = '#' + type;
			
			$(section).empty().html(data);
		}).done(function () {
			loadMore = $('.load-more');
			// update for post ajax
			
			loadMore.click(function () {
				
				loadMoreUrl = $(this).attr('href');
				loadMoreLink = $(this);
				
				loadMoreData(loadMoreUrl,loadMoreLink);
				
				return false;
			});
		});
		
		$.get(moreStats, function (data) {
			$('#more-statistics').empty().html(data);
		});
		
		$('h1').text(title).toTitleCase();
		
		$('#filters-form').delay(1000).slideUp().next('p').find('span').text('Show');
	}
	
	function loadMoreData(loadMoreUrl,loadMoreLink) {
		$.get(loadMoreUrl, function (data) {
			loadMoreLink.parent('p').before(data);
		}).done(function () {
			if ($('body').attr('id') === 'score-lists' || $('body').attr('id') === 'table-lists') {
				loadMore.parent('p').remove();
			}
		});
	}
	
	comps.click(function () {
		url = '/inc/' + $('body').attr('id') + '/' + $(this).attr('href') + '.inc';
		
		moreStats = '/inc/' + $('body').attr('id') + '/' + $(this).attr('href') + '-more-stats.inc';
		
		compOne = $(this).attr('href').replace(/-/g, " ");
		
		title = compOne + ' ' + type;
		
		loadStatsChangeTitle(url,moreStats,type,title);
		
		return false;
	});
		
	loadMore.click(function () {
		loadMoreUrl = $(this).attr('href');
		loadMoreLink = $(this);
		
		loadMoreData(loadMoreUrl,loadMoreLink);
		
		return false;
	});
});

