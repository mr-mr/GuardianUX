$(window).scroll(function() {
    var position = $(window).scrollTop();
    $("dd").html(position);
});