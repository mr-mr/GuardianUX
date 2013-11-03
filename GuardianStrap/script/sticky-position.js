var sticky = document.querySelector('.framework-column-left');
var origOffsetY = 280;

function onScroll() {
  window.scrollY >= origOffsetY ? sticky.classList.add('fixed') :
                                  sticky.classList.remove('fixed');
}

document.addEventListener('scroll', onScroll);