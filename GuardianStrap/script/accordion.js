/*
$(document).ready(function() {
            $('.accordion').accordion({defaultOpen: 'some_id'}); //some_id section1 in demo
        });
*/
/*
$('#nav-section1').hide();

$(document).ready(function() {

        //custom animation for open/close
        $.fn.slideFadeToggle = function(speed, easing, callback) {
            return this.animate({opacity: 'toggle', height: 'toggle'}, speed, easing, callback);
        };

        $('.accordion').accordion({
            defaultOpen: '#nav-section1',
            cookieName: 'nav',
            speed: 'slow',
            animateOpen: function (elem, opts) { //replace the standard slideUp with custom function
                elem.next().stop(true, true).slideFadeToggle(opts.speed);
            },
            animateClose: function (elem, opts) { //replace the standard slideDown with custom function
                elem.next().stop(true, true).slideFadeToggle(opts.speed);
            }
        });
    });
*/

$(function () {
	var controls = $('.accordion-control');
	var containers = $('.accordion-pane');

	containers.hide().filter(':first').show();
	
	controls.click(function (e) {
		containers.slideUp().filter(this.hash).slideDown();

		controls.removeClass('is-current');
		$(this).addClass('is-current');

		e.preventDefault();
	}).filter(':first').click();
});
