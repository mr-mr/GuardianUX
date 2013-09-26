$(function () {
	var scoreTop = $('article > section').offset().top;
	var score = $('.score');
	
	var tabs = $('ul.tabs li a');
	var tabContainers = $('article > section');
	
	var updateControl = $('.update-control a');
	
	var loadMore = $('#live .load-more a');
	
	var update = null;
	
	var time = 75;
	
	function startLive() {
		update = setInterval(function() {
			time = time + 1;
			if (time <= 90) {
				$('#live dl').prepend($('<dt>' + time + ' min</dt><dt><dd>This is an update to the live blog. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non metus auctor fringilla.</dd>').fadeIn());								
			} else {
				updateControl.removeClass('selected');
			}
		}, 6000);
	}
	
	function stopLive() {
		clearInterval(update);
	}
	
	startLive();
	
	$(document).scroll(function () {
		var scrollTop = $(document).scrollTop();

		if (scoreTop < scrollTop) {
			$(score).addClass('fixed').show();
		} else {
			$(score).removeClass('fixed').hide();
		}
	});
	
	tabContainers.hide().filter(':first').show();
	
	tabs.click(function () {
		tabContainers.hide().filter(this.hash).show();
		
		tabs.removeClass('selected');
		$(this).addClass('selected');
		
		return false;
	}).filter(':first').click();
	
	updateControl.click(function () {
		updateControl.removeClass('selected');
		$(this).addClass('selected');
		
		if (this.hash == '#on') {
			$('#live p').hide();
			startLive();
		} else {
			setTimeout("$('#live p').show();", 3600);
			stopLive();
		}
		return false;
	});
	
	loadMore.click(function () {
		$.get('/inc/live-blog-more.inc', function (data) {
			$('#live dl').append(data);
		});
		return false;
	});
});