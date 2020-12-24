$(document).ready(function(){
	$("#slideHistory").slick({
		slidesToShow : 3,
		autoplay:true,
		speed:600,
        infinite:false,
		autoplaySpeed:6000,
		asNavFor:"#slideHistoryFor",
		responsive: [
            {
                breakpoint: 991,
                settings: {
                    centerMode:true,
                    centerPadding:"0px",
                }
            }
        ]
	});
	$("#slideHistoryFor").slick({
		speed:600,
		autoplaySpeed:6000,
		arrows:false,
		asNavFor:"#slideHistory",
	});
	$("#slideCur").on("init",function(){
		let __ = $(this);
		__.append("<div class='slick-wrap'><div class='wrapper'></div></div>");
		__.find(".slick-dots").appendTo(__.find(".slick-wrap").find(".wrapper"));
	});
	$("#slideCur").slick({
		autoplay:true,
		speed:1200,
		autoplaySpeed:6000,
		arrows:false,
		dots:true,
		customPaging: function (slider, i) {
			let new_i = i + 1;
			let ii = (new_i.length==1)?"0"+new_i:new_i;
            return '<button type="button" data-role="none">' + ii + '</button>';
        },
	});
	// $(".menuAbout").mnfixed({
	// 	break:991,
	// });
	// MENU TAB
    $(window).scroll(function(){
        var $winOffset=$(window).scrollTop();
        $(".boxAbout").each(function(){
            var $ih = $(this).innerHeight();
            var $io = $(this).offset().top;
            var $ihref = $(this).attr("id");
            var $iho = $ih + $io;
            var $ahref = ".menuAbout ul li a[href='#"+ $ihref +"']";
            if(($io - 55) < $winOffset  && ($iho - 50) > $winOffset){
                $(".menuAbout ul li").removeClass("active");
                $($ahref).parents("li").addClass("active");
            }
        });
    });
    $(".menuAbout ul li a").click(function(){
    	if($(this).parents(".menuAbout").hasClass("active")){
            $(this).parents(".menuAbout").removeClass("active");
        }
        var op=$(this).attr("href");
        var opOffset=$(op).offset().top - 50;
        $('html,body').animate({scrollTop: opOffset},1000);
        return false;
    });
    // SELECT J
    $(".menuAbout .mc-menu").click(function(){
        if(!$(this).parents(".menuAbout").hasClass("active")){
            $(this).parents(".menuAbout").addClass("active");
        }
        else{
            $(this).parents(".menuAbout").removeClass("active");
        }
    });
    // POPUP GIAM DOC
    $(".design-giamdoc a").fancybox({
        type:'iframe',
        baseClass:'designPopupGiamdoc',
        smallBtn:true,
        toolbar:false,
    });
    $(".human a").fancybox({
        type:'iframe',
        baseClass:'designPopupGiamdoc',
        smallBtn:true,
        toolbar:false,
    });
});
