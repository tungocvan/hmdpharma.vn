$(document).ready(function(){
	$("#vnt-slide-home").slick({
		fade:true,
		autoplay:true,
		speed:1200,
		autoplaySpeed:6000,
		responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows:false,
                    dots:true,
                }
            }
        ]
	});
	$("#slideProduct").slick({
		slidesToShow : 4,
        slidesToScroll:2,
		autoplay:true,
		speed:600,
		autoplaySpeed:3000,
		responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
	});
});
