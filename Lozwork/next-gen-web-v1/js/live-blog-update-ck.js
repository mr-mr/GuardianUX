$(function(){function r(){t=setInterval(function(){n+=1;n<=90?$("#live dl").prepend($("<dt>"+n+" min</dt><dt><dd>This is an update to the live blog. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper nulla non metus auctor fringilla.</dd>").fadeIn()):e.removeClass("selected")},6e3)}function i(){clearInterval(t)}var e=$(".update-control a"),t=null,n=75;r();e.click(function(){e.removeClass("selected");$(this).addClass("selected");if(this.hash=="#on"){$("#live .number-updates").hide();r()}else{setTimeout("$('#live .number-updates').show();",3600);i()}return!1})});