var sticky = document.querySelector('.column-left');
var origOffsetY = sticky.offsetTop;
var navHeight = $('.framework-top').outerHeight(true) + 10;
//var y = $('body').scrollTop();

//$('.column-left').animate({scrollTop: ($(window).offsetTop() + 50) + 'px'}, 300);

function onScroll() {
  window.scrollY >= origOffsetY ? sticky.classList.add('fixed') :
                                  sticky.classList.remove('fixed');
}

document.addEventListener('scroll', onScroll);