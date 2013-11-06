var sticky = document.querySelector('.framework-column-left');
var origOffsetY = 280;

function onScroll() {
  window.scrollY >= origOffsetY ? sticky.classList.add('fixed') :
                                  sticky.classList.remove('fixed');
}

var stickyAD = document.querySelector('aside.right');
var origOffsetY = 390;

function onScroll() {
  window.scrollY >= origOffsetY ? stickyAD.classList.add('fixed.advert') :
                                  stickyAD.classList.remove('fixed.advert');
}

document.addEventListener('scroll', onScroll);