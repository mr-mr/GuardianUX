var showy = document.querySelector('.ears-nav');
var origOffsetY = 2000;
var endY = 3300;
var navscrollend = 3900;

function onScroll() {
	currentPosition = window.scrollY;
 	currentPosition >= origOffsetY && currentPosition <= endY ? showy.classList.add('ears-nav-open') :
                                  								showy.classList.remove('ears-nav-open');

}
// var stickyAD = document.querySelector('aside.right');
// var origOffsetY = 390;

// function onScroll() {
//   window.scrollY >= origOffsetY ? stickyAD.classList.add('fixed.advert') :
//                                   stickyAD.classList.remove('fixed.advert');
// }

//$("#nav-global-scroll").css("margin-top","-50px");
$("#nav-global-scroll").hide();


$(document).scroll(function () {
    var y = $(this).scrollTop();

    if (y >= 1300 && currentPosition <= navscrollend && window.innerWidth > 360) {
        $('#nav-global-scroll').show();
       // $("#nav-global-scroll").css("margin-top","0");
    } else  {
        $('#nav-global-scroll').hide();
    }
});

document.addEventListener('scroll', onScroll);