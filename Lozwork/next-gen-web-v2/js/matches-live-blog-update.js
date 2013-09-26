$(function () {
	var updateControl = $('.update-control a');
	
	var update = null;
	
	var time = 75;
	
	function startLive() {
		update = setInterval(function() {
			time = time + 1;
			if (time <= 90) {
				$('#live .live-text dl').prepend($('<dt>' + time + ' min</dt><dt><dd>This is an update to the live blog. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non metus auctor fringilla.</dd>').fadeIn());
				$('h1 .time').html(time + '&#x27;');
				$('#scores .updated').children('td:last-child').html(time + '&#x27');
			} else {
				updateControl.removeClass('selected');
				$('.update-control').slideUp();
				$('h1 .time').html('FT');
				$('#scores .updated').children('td:last-child').html('FT');
			}
		}, 6000);
	}
	
	function stopLive() {
		clearInterval(update);
	}
	
	startLive();
	
	updateControl.click(function () {
		updateControl.removeClass('selected');
		$(this).addClass('selected');
		
		if (this.hash === '#on') {
			$('#live .number-updates').hide();
			startLive();
		} else {
			stopLive();
		}
		return false;
	});
});