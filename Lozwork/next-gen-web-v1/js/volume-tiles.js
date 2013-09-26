$(function () {
	var oh = $(window).height();
	
	var tsLinks = $('.top-stories a, .top-stories .related-stories');
	var eLinks = $('.event a, .event .related-stories');
	var aLargeLinks = $('.armageddon > h3 a, .armageddon .related-stories');
	var aLinks = $('.armageddon .related-stories li a');
	var teLinks = $('.two-events a, .two-events .related-stories');
	
	function sizeSections() {
		var oh = $(window).height();
		console.log(oh);		
		
		if (oh > 480) {
			var quarterHeight = ((oh - (oh *.1)) - $('header').outerHeight({includeMargin:true})) / 4;
			var thirdHeight = ((oh - (oh *.1)) - $('header').outerHeight({includeMargin:true})) / 3;
			
			console.log(thirdHeight,quarterHeight);
			console.log(teLinks);
			
			tsLinks.css('height',quarterHeight);
			eLinks.css('height',thirdHeight);
			aLargeLinks.css('height',quarterHeight * 2);
			aLinks.css('height',quarterHeight);
			teLinks.css('height',thirdHeight);
			console.log($('.two-events .related-stories').outerHeight());
		}
	}
	
	sizeSections();
	
	$(window).resize(function () {
		sizeSections();
	});
});