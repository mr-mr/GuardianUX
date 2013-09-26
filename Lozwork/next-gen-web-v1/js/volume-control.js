$(function () {
	var slider = $('#volume-control');
	var radio = $('input[name="picture-control"]');
	
	var article = $('article');
	
	slider.change(function () {
		console.log(this.value);
		if (this.value == 1) {
			article.removeClass().addClass('small');
		} else if (this.value == 2) {
			article.removeClass().addClass('small-medium');
		} else if (this.value == 3) {
			article.removeClass().addClass('medium');
		} else if (this.value == 4) {
			article.removeClass().addClass('medium-large');
		} else if (this.value == 5) {
			article.removeClass().addClass('large');
		} else if (this.value == 6) {
			article.removeClass().addClass('nuclear');
		}
	});
	
	radio.click(function () {
		var radioSelected = $('input[type="radio"]:checked').val();
		
		if (radioSelected == 'yes') {
			article.attr('data-has-pictures','yes');
		} else {
			article.attr('data-has-pictures','no');
		}
	});
});