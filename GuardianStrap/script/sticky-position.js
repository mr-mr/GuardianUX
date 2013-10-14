var sticky = document.querySelector('.column-left');
var origOffsetY = sticky.offsetTop;

function onScroll() {
  window.scrollY >= origOffsetY ? sticky.classList.add('fixed') :
                                  sticky.classList.remove('fixed');
}

document.addEventListener('scroll', onScroll);