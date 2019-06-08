;(function($) {
    "use strict";
    
    /*----------------------------------------------------*/
    /* WOW js
    /*----------------------------------------------------*/
 
    function bodyScrollAnimation() {
        var scrollAnimate = $('body').data('scroll-animation');
        if (scrollAnimate === true) {
            new WOW({
                mobile: false
            }).init()
        }
    }
    bodyScrollAnimation();
    
    /*---------------navbar js ---------------*/
    $('.demo_btn').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 0
        }, 1500);
        event.preventDefault();
    });
})(jQuery)
