$(function(){function t(){e=$(window).width();if($(window).width()>639){$(".advert:first-of-type:not(.mpu) img").attr("src","/img/banner.jpg");$(".advert:last-of-type:not(.mpu) img").attr("src","/img/banner.jpg");$(".features").insertBefore(".sport-stories")}else if($(window).width()<640){$(".advert:first-of-type:not(.mpu) img").attr("src","/img/ad.gif");$(".advert:last-of-type:not(.mpu) img").attr("src","/img/ad-too.gif");$(".features").insertAfter(".sport-stories")}}var e=$(window).width();t();$(window).resize(function(){e!=$(window).width()&&t()})});