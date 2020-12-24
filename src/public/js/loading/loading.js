$(document).ready(function(){
    // ANIMATION LOADING PAGE
    $(".animsition").animsition({
        inClass: 'fade-in',
        outClass: 'fade-out',
        inDuration: 400,
        outDuration: 400,
        linkElement: 'a:not([dnot])',
        timeout: true,
        timeoutCountdown: 5000,
        onLoadEvent: true,
        browser: [ 'animation-duration', '-webkit-animation-duration'],
        overlay : false,
        overlayClass : 'animsition-overlay-slide',
        overlayParentElement : 'body',
    });
    $(".animsition").on('animsition.inEnd', function(){
        __ = $(this);
        __.addClass("show-load");
        setTimeout(function(){
            __.addClass("show-loading");
        },2500);
    });
    $(".animsition").on('animsition.outStart', function(){
        $(this).removeClass("show-load");
    });
});





















