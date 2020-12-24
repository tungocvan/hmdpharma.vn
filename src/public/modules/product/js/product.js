$(document).ready(function(){
	$("#slideThumbnailF").slick({
		autoplay:true,
    	speed:1200,
		autoplaySpeed:6000,
	});
	$("#slideNews").slick({
		slidesToShow : 2,
		autoplay:true,
    	speed:1200,
		autoplaySpeed:6000,
		responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow : 1,
                }
            }
        ]
	});
	$("#slideOpinion").slick({
		autoplay:true,
    	speed:1200,
		autoplaySpeed:6000,
		dots:true,
	});
	// MENU TAB
	$(".menuFF").mnfixed({
		limit:".ffood-content",
	});
    $(window).scroll(function(){
        var $winOffset=$(window).scrollTop();
        $(".ffood-box").each(function(){
            var $ih = $(this).innerHeight();
            var $io = $(this).offset().top;
            var $ihref = $(this).attr("id");
            var $iho = $ih + $io;
            var $ahref = ".menuFF ul li a[href='#"+ $ihref +"']";
            if(($io - 5) < $winOffset  && ($iho - 0) > $winOffset){
                $(".menuFF ul li").removeClass("active");
                $($ahref).parents("li").addClass("active");
            }
        });
    });
    $(".menuFF ul li a").click(function(){
    	if($(this).parents(".menuFF").hasClass("active")){
            $(this).parents(".menuFF").removeClass("active");
        }
        var op=$(this).attr("href");
        var opOffset=$(op).offset().top - 0;
        $('html,body').animate({scrollTop: opOffset},1000);
        return false;
    });
    $(".btn-down").click(function() {
        var $value = parseInt($(this).parents(".quantity").find("input").val());
        if (parseInt($value) > 1) {
            $value = parseInt($value) - 1;
            $(this).parents(".quantity").find("input").val($value);
        }
    });
    $(".btn-up").click(function() {
        var $value = parseInt($(this).parents(".quantity").find("input").val());
        $value = parseInt($value) + 1;
        $(this).parents(".quantity").find("input").val($value);
    });
});


