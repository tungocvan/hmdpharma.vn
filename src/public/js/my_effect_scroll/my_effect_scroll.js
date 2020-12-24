﻿(function($) {
    $.fn.my_effect_scroll = function(options){
        var settings = $.extend({
            itemSelector : null,
            classItemVisible : null,
            height_per: 30,
            height_px: 200
        }, options );
        var $container = this;
        var container = $container[0];
        var isRoot = isRootContainer(container);
        itemVisible_true();
        $(window).scroll(function (e) {
            itemVisible_true();
        });
        $(window).resize(function (e){
            itemVisible_true();
        });
        $($container).scroll(function (e) {
            itemVisible_true();
        });
        $($container).resize(function (e){
            itemVisible_true();
        });
        function itemVisible_true(){
            if (settings.itemSelector != null){
                $container.find(settings.itemSelector).each(function (e) {
                    var offset_top = $(this).offset().top;
                    var height_item = $(this).innerHeight();
                    var main_scroll = $container.scrollTop();
                    var main_height = $container.innerHeight();
                    if(! isRoot){
                        offset_top = $(this).offset().top + main_scroll - $container.offset().top;
                    }
                    if(isRoot){
                        main_scroll = $(window).scrollTop();
                    }
                    if(isRoot){
                        main_height = $(window).innerHeight();
                    }
                    if( main_scroll >= offset_top && main_scroll <=  (offset_top + height_item)){
                        var tam = (height_item + offset_top - main_scroll);
                        if((tam*100/height_item) >= settings.height_per || (tam*100/main_height) >= settings.height_per || tam >= settings.height_px){
                            $(this).addClass(settings.classItemVisible);
                        }
                    }else{
                        if(main_scroll <= offset_top && (main_scroll + main_height) >= (offset_top + height_item)){
                            $(this).addClass(settings.classItemVisible);
                        }else{
                            if((main_scroll + main_height) >= offset_top && (main_scroll + main_height) <= (offset_top + height_item)){
                                var tam = main_height + main_scroll - offset_top;
                                if((tam*100/height_item) >= settings.height_per || (tam*100/main_height) >= settings.height_per || tam >= settings.height_px){
                                    $(this).addClass(settings.classItemVisible);
                                }
                            }
                        }
                    }
                });
            }
            return false;
        }
        function isRootContainer(container) {
            return (container == window || container == document || container == document.body);
        }
    };
})(jQuery);
$(document).ready(function() {
    // SELECTOR LAZYLOADING
    function setlazy(el,eff,delay){
        el.addClass("lazyloading");
        el.attr("data-eff",eff);
        el.attr("data-delay",delay);
    }
    $(".div_img img").each(function(){
        setlazy($(this),'fadeInLeft','0.3');
    });
    // HOME
    setlazy($(".inventHome .title"),'fadeInUp','0.3');
    setlazy($(".inventHome .des"),'fadeInUp','0.4');
    setlazy($(".inventHome .img"),'fadeInUp','0.5');
    setlazy($(".inventHome .link"),'fadeInUp','0.6');
    setlazy($(".designHome"),'fadeIn','0.3');
    // ===================
    setlazy($(".designHome .box .item.v1"),'zoomIn','0.4');
    setlazy($(".designHome .box .line_data .line.v1 span"),'widthIn','0.6');
    setlazy($(".designHome .box .item.v2"),'zoomIn','1');
    setlazy($(".designHome .box .line_data .line.v2 span"),'widthIn','1.2');
    setlazy($(".designHome .box .item.v3"),'zoomIn','1.4');
    setlazy($(".designHome .box .line_data .line.v3 span"),'widthIn','1.8');
    setlazy($(".designHome .box .item.v4"),'zoomIn','2.2');
    // ===================
    setlazy($(".category .img"),'fadeIn','0.3');
    setlazy($(".category .caption"),'fadeInUp','0.4');
    setlazy($(".adsHome .title"),'fadeInLeft','0.3');
    setlazy($(".adsHome .des"),'fadeInLeft','0.4');
    setlazy($(".adsHome .link"),'fadeInLeft','0.5');
    setlazy($(".adsHome .item"),'fadeInUp','0.4');
    setlazy($(".videoHome"),'fadeIn','0.3');
    setlazy($(".newsHome .title"),'fadeInUp','0.4');
    setlazy($(".newsHome .linkAll"),'fadeInUp','0.4');
    setlazy($(".newsS"),'fadeInUp','0.3');
    setlazy($(".news"),'fadeInUp','0.4');
    setlazy($(".linkAll"),'fadeLeft','0.3');
    setlazy($(".productHome .title"),'fadeInUp','0.4');
    setlazy($("#slideProduct"),'fadeIn','0.3');

    // ABOUT
    setlazy($(".menuAbout"),'fadeInUp','0.3');
    setlazy($(".boxAbout .title"),'fadeInUp','0.3');
    setlazy($(".the-content .content"),'fadeIn','0.3');
    setlazy($(".templateCircle"),'fadeIn','0.3');
    setlazy($(".templateCircle .item:first"),'fadeInLeft','0.4');
    setlazy($(".templateCircle .item:last"),'fadeInRight','0.5');
    setlazy($(".the-content .img"),'fadeInUp','0.3');
    setlazy($("#slideHistory"),'fadeIn','0.3');
    setlazy($(".design-giamdoc .info"),'fadeInLeft','0.3');
    setlazy($(".design-giamdoc .caption"),'fadeInRight','0.4');
    setlazy($(".design-giamdoc .avatar"),'fadeIn','0.5');
    setlazy($(".human"),'fadeInUp','0.3');
    setlazy($("#slideCur"),'fadeInUp','0.3');
    setlazy($(".inventAbout .title"),'fadeInUp','0.3');
    setlazy($(".inventAbout .des"),'fadeInUp','0.4');
    setlazy($(".inventAbout .img"),'fadeInUp','0.5');
    setlazy($(".inventAbout .link"),'fadeInUp','0.6');

    // COMPANY
    setlazy($(".designAds .circle"),'fadeInUp','0.3');
    setlazy($(".designAds .item"),'fadeInUp','0.4');
    setlazy($("#slideCompany"),'fadeInUp','0.3');
    setlazy($(".desCompany"),'fadeInUp','0.3');
    setlazy($("#slideGallery"),'fadeIn','0.3');
    setlazy($(".inventAbout .link"),'fadeInUp','0.6');
    // BIGIN LAZYLOADING
    var isMobile = false;
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;
    if((isMobile == false) && ($(window).innerWidth() > 991)){
        $("body").my_effect_scroll({
            itemSelector : ".lazyloading",
            height_per: 30,
            height_px: 300,
            classItemVisible : function(){
                var duration = $(this).attr("data-delay");
                var effect = $(this).attr("data-eff");
                $(this).css({
                    "-webkit-animation-delay": duration+"s",
                    "-o-animation-delay": duration+"s",
                    "animation-delay": duration+"s",
                });
                $(this).removeClass("lazyloading");
                $(this).addClass("lazy-start");
                $(this).on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function(){
                    $(this).removeClass("lazy-start");
                    $(this).removeClass(effect);
                    $(this).removeAttr("data-delay");
                    $(this).removeAttr("data-eff");
                });
                var effect = $(this).attr("data-eff");
                return effect;
            }
        });
    }else{
        $(".lazyloading").each(function(){
            var duration = $(this).attr("data-delay");
            var effect = $(this).attr("data-eff");
            $(this).css({
                "-webkit-animation-delay": duration+"s",
                "-o-animation-delay": duration+"s",
                "animation-delay": duration+"s",
            });
            $(this).removeClass("lazyloading");
            $(this).addClass("lazy-start");
            $(this).on("webkitAnimationEnd oanimationend msAnimationEnd animationend",function(){
                $(this).removeClass("lazy-start");
                $(this).removeClass(effect);
                $(this).removeAttr("data-delay");
                $(this).removeAttr("data-eff");
            });
            var effect = $(this).attr("data-eff");
            return effect;
        });
    }
});





















