$(document).ready(function(){
    $(".map-contact .mc-tab").click(function(){
        if(!$(this).parents(".map-contact").hasClass("active")){
            $(this).parents(".map-contact").addClass("active");
        }
        else{
            $(this).parents(".map-contact").removeClass("active");
        }
    });
    $(".list-tab li a").click(function(){
        if($(window).innerWidth()<991){
            $(this).parents(".map-contact").removeClass("active");
            $(this).parents(".map-contact").find(".list-tab").stop().slideUp(500);
        }
    });
    $(".view-map-contact a").click(function(){
        $("html,body").animate({
            scrollTop: $(".map-contact").offset().top - 80
        },1000);
        var target=$(this).attr("href");
        $(".map-contact .list-tab li").removeClass("active");
        $(".map-contact .list-tab li").each(function(){
            if($(this).find("a").attr("href")==target){
                $(this).addClass("active");
                var t = $(this).find("a").text();
                $(".map-contact .mc-tab").text(t);
            }
        });
        $(".map-contact .tab-content .tab-pane").removeClass("active");
        $(".map-contact .tab-content .tab-pane").each(function(){
            if(('#'+$(this).attr("id"))==target){
                $(this).addClass("in active");
            }
        });
        return false;
    });
    $(".map-contact .list-tab li").click(function(){
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        var t = $(this).find("a").text();
        $(".map-contact .mc-tab").text(t);
        $(".map-contact .tab-content .tab-pane").removeClass("active");
        $(".map-contact .tab-content .tab-pane").each(function(){
            if(('#'+$(this).attr("id"))==target){
                $(this).addClass("in active");
            }
        });
        get_hh();
    });
    function get_hh(){
        var t = $(".list-tab li.active a").text();
        $(".map-contact .mc-tab").text(t);
    }
    get_hh();
    $('.mntooltip').tooltipster({
        theme: 'tooltipster-punk',
        'maxWidth': 270, // set max width of tooltip box
        contentAsHTML: true, // set title content to html
        trigger: 'custom', // add custom trigger
        triggerOpen: { // open tooltip when element is clicked, tapped (mobile) or hovered
            click: true,
            tap: true,
            mouseenter: true
        },
        triggerClose: { // close tooltip when element is clicked again, tapped or when the mouse leaves it
            click: true,
            scroll: false, // ensuring that scrolling mobile is not tapping!
            tap: true,
            mouseleave: true
        }
    });
});
