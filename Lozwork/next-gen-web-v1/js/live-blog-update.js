$(function () {
	var updateControl = $('.update-control a');
	
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
	
	updateControl.click(function () {
		updateControl.removeClass('selected');
		$(this).addClass('selected');
		
		if (this.hash == '#on') {
			$('#live .number-updates').hide();
			startLive();
		} else {
			setTimeout("$('#live .number-updates').show();", 3600);
			stopLive();
		}
		return false;
	});
});