$(document).ready(function(){
    $(".slideNews").slick({
    	arrows:false,
    	dots:true,
    	autoplay: true,
    	fade:true,
    });
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
                breakpoint: 360,
                settings: {
                    slidesToShow: 1
                }
            },
        ]
	});
});
