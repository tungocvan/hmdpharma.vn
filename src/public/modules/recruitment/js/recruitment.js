$(document).ready(function(){
    $("#slideOther").slick({
		slidesToShow : 3,
		autoplay:true,
    	speed:1200,
		autoplaySpeed:6000,
		responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            },
        ]
	});
    $(".boxRecruit .title .toggle").click(function(){
        if(!$(this).parents(".boxRecruit").hasClass("closez")){
            $(this).parents(".boxRecruit").addClass("closez");
            $(this).parents(".boxRecruit").find(".content").stop().slideUp(300,function(){
            $("html").getNiceScroll().resize();
        });
        }
        else{
            $(this).parents(".boxRecruit").removeClass("closez");
            $(this).parents(".boxRecruit").find(".content").stop().slideDown(300,function(){
            $("html").getNiceScroll().resize();
        });
        }
        return false;
    });
});

