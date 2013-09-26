$(function () {
	var nav = $('#primary-navigation');
	var search = $('#search');
	var control = $('#navigation-controls a');
	
	control.click(function () {			
		$(this).toggleClass('selected').parent('li').siblings('li').children('a').removeClass(function () {
			$(this.hash).hide();
		});
		
		$(this.hash).slideToggle();
		
		return false;
	})
});