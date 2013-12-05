var stickyOJ = document.querySelector('.c-nav');
var origOffsetY1 = 1400;
var endnavY = 3900;

function onScroll() {
  window.scrollY >= origOffsetY1  && currentPosition <= endnavY ? stickyOJ.classList.add('fixed') :
                                  								  stickyOJ.classList.remove('fixed');
}

// var stickyAD = document.querySelector('aside.right');
// var origOffsetY = 390;

// function onScroll() {
//   window.scrollY >= origOffsetY ? stickyAD.classList.add('fixed.advert') :
//                                   stickyAD.classList.remove('fixed.advert');
// }

document.addEventListener('scroll', onScroll);