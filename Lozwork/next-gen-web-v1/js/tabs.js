$(function () {
  var tabNav = 'ul.tabs li a'; 
  var tabContainers = '#most-read-zeitgeist > section';     

  $(tabNav).click(function () {
      $(tabContainers).hide().filter(this.hash).show();

      $(tabNav).removeClass('selected');
      $(this).addClass('selected');

      return false;
  }).filter(':first').click();  
});
