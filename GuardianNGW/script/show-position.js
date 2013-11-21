var showy = document.querySelector('.ears-nav');
var origOffsetY = 1400;
var endY = 2800;

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

document.addEventListener('scroll', onScroll);