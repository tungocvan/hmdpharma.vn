$(document).ready(function(){
    if($(window).innerWidth()>1025){
        $("html").niceScroll({
            cursorborder        : 0,
            cursorborderradius  : 5,
            cursorcolor         : 'rgba(0, 138, 128, 0.9)',
            cursorwidth         : 10,
            horizrailenabled    : false,
            mousescrollstep     : 40,
            scrollspeed         : 88,
            background          : 'rgba(222, 222, 222, .75)',
        });
    }
    vnTRUST.goTopStart();
    // SELECT J
    $(".select-j .title").click(function(){
        if(!$(this).parents(".select-j").hasClass("active")){
            $(this).parents(".select-j").addClass("active");
            $(this).parents(".select-j").find(".content").stop().slideDown();
        }
        else{
            $(this).parents(".select-j").removeClass("active");
            $(this).parents(".select-j").find(".content").stop().slideUp();
        }
    });
    // DATE CLOCK
    $(".datepicker").datepicker();
    // MENU TOP
    $(".menuTop ul li a").hover(function(){
        $("#vnt-header").addClass("hover-menu");
    });
    $("#vnt-header").on("mouseleave",function(){
        if(!$(".searchTop").hasClass("active")){
            $("#vnt-header").removeClass("hover-menu");
        }
    });
    // MENU MEGA
    $(".megaMenu .menuNav li a").hover(function(){
        $(this).parent("li").addClass("active");
        let target = $(this).data("target");
        $(this).parents(".megaMenu").find(".menuFor[data-target="+target+"]").siblings().removeClass("active");
        $(this).parents(".megaMenu").find(".menuFor[data-target="+target+"]").addClass("active");
    },function(){
        $(this).parent("li").removeClass("active");
    });
    $(".megaMenu .menuFor").hover(function(){
        $(this).parent("li").addClass("active");
        let target = $(this).data("target");
        $(this).parents(".megaMenu").find(".menuNav ul li a[data-target="+target+"]").parent("li").siblings().removeClass("active");
        $(this).parents(".megaMenu").find(".menuNav ul li a[data-target="+target+"]").parent("li").addClass("active");
    });
    $(".megaMenu").on("mouseleave",function(){
        $(this).find(".menuNav ul li").removeClass("active");
        $(this).find(".menuFor").removeClass("active");
        $(this).find(".menuNav ul li:first").addClass("active");
        $(this).find(".menuFor:first").addClass("active");
    });
    // SEARCH TOP
    $(".searchTop .icon").click(function(){
        if(!$(".mainHead").find(".searchTop").hasClass("active")){
            $(".mainHead").find(".searchTop").addClass("active");
            $("#vnt-header").addClass("hover-menu");
        }
        else{
            $(".mainHead").find(".searchTop").removeClass("active");
            $("#vnt-header").removeClass("hover-menu");
        }
    });
    $(".searchTop input").focus(function(){
        $(this).parents("form").addClass("fd-active");
    });
    $(".searchTop input").blur(function(){
        var _ = $(this);
        setTimeout(function(){
            if(_.val() == ""){
                _.parents("form").removeClass("fd-active");
            }
        },100);
    });
    $(".searchTop .closez").click(function(){
        $(this).parents(".searchTop").removeClass("active");
        $("html").removeClass("openmenu");
    });
    // LANGUAGE TOP
    $(".languageTop .icon").click(function(){
        if(!$(this).parents(".languageTop").hasClass("active")){
            $(this).parents(".languageTop").addClass("active");
        }
        else{
            $(this).parents(".languageTop").removeClass("active");
        }
    });
    // BIND
    $(window).bind("click",function(e){
        var target=e.target;
        if(!$(target).parents(".languageTop").hasClass("active")){
            $(".languageTop").removeClass("active");
        }
    });
    // FIXED HEADER
    var lastScrollTop = 0;
    $(window).on("scroll",function(){
        var st = $(this).scrollTop();
        if (st > 0){
            $("#vnt-header:not(.notfixed)").addClass("fixed");
        }
        else {
            $("#vnt-header").removeClass("fixed");
        }
    });
    $("#vnt-slide").slick({
        fade:true,
        // autoplay:true,
        speed:1000,
        arrows:false,
    });
    // COMMENT
    $("#contentComment").focus(function(){
        $(this).parents(".w_content").find(".content-info").stop().slideDown(700,function(){
            $("html").getNiceScroll().resize();
        });
    });
    $("#btn-close").click(function(){
        $(this).parents(".w_content").find(".content-info").stop().slideUp(700,function(){
            $("html").getNiceScroll().resize();
        });
    });
    // ORDER POPUP
    $(".menuFixed .popup a").fancybox({
        type:'ajax',
        toolbar:false,
        smallBtn:true,
        baseClass:'designPopupOrder'
    });
    // OPEN POPUP
    $(".openPopup").fancybox({
        type:'iframe',
        baseClass:'designPopup',
        smallBtn:true,
        toolbar:false,
    });
    // CART POPUP
    $(".cart-popup .icon").click(function(){
        if(!$(this).parents(".cart-popup").hasClass("active")){
            $(this).parents(".cart-popup").addClass("active");
            $(this).parents(".cart-popup").find(".vnt-bg-over").addClass("active");
        }
        else{
            $(this).parents(".cart-popup").removeClass("active");
            $(this).parents(".cart-popup").find(".vnt-bg-over").removeClass("active");
        }
    });
    $(".cart-popup .title .closez").click(function(){
        if($(".cart-popup").hasClass("active")){
            $(".cart-popup").removeClass("active");
            $(".cart-popup").find(".vnt-bg-over").removeClass("active");
        }``
    });
    $(window).bind("click",function(e){
        var target=e.target;
        if(!$(target).parents(".cart-popup").hasClass("active")){
            $(".cart-popup").removeClass("active");
        }
    });
    // $(".animsition").on('animsition.inEnd', function(){
    //     setTimeout(function(){
    //         $.fancybox.open({
    //             src:"index-popup-yte.html",
    //             type:"iframe",
    //             baseClass:'designPopupYte',
    //             toolbar:false,
    //         });
    //     },3000);
    // });
});






















