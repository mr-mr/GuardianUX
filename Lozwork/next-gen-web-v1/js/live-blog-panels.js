$(function () {
	var control = $('.panel-controls a');
	
	var left = $('#statistics, #scores');
	var right = $('#table');
	var content = $('#live');
	
	control.click(function () {
		console.log(this.hash);
		if (this.hash == '#statistics' || this.hash == '#scores') {
			$('body').removeClass('active-right').toggleClass('active-left');
		} else if (this.hash == '#table') {
			$('body').removeClass('active-left').toggleClass('active-right');
		}
		
		return false;
	});
	
	content.on('movestart', function (e) {
		if ((e.distX > e.distY && e.distX < -e.distY) || (e.distX < e.distY && e.distX > -e.distY)) {
			e.preventDefault();
		}
	}).on('swipeleft', function (e) {
		$('body').toggleClass('active-right');
	}).on('swiperight', function (e) {
		$('body').toggleClass('active-left');
	});
	
	left.on('movestart', function (e) {
		if ((e.distX > e.distY && e.distX < -e.distY) || (e.distX < e.distY && e.distX > -e.distY)) {
			e.preventDefault();
		}
	}).on('swipeleft', function (e) {
		$('body').removeClass('active-left');
	});
	
	right.on('movestart', function (e) {
		if ((e.distX > e.distY && e.distX < -e.distY) || (e.distX < e.distY && e.distX > -e.distY)) {
			e.preventDefault();
		}
	}).on('swiperight', function (e) {
		$('body').removeClass('active-right');
	});
	
});