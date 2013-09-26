$(function () {
	var oh = $(window).height();
	console.log(oh)
	
	function sizeSections() {
		var oh = $(window).height();
		
		if (oh > 480) {
			var height = (oh - $('header').outerHeight({includeMargin:true})) / 4;
			console.log(height);
			
			$('section').css('height',height);
		} else {
			$('section').css('height','91px');						
		}	
	}
	
	sizeSections();
	
	$(window).resize(function () {
		sizeSections();
	});
});