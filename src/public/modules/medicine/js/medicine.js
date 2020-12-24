$(document).ready(function(){
	$("#slideThumbnail").on("init",function(){
		let __ = $(this);
		__.append("<div class='slick-wrap'></div>");
		__.find(".slick-dots").appendTo(__.find(".slick-wrap"));
		$("<div class='zoom'><span>Xem hình lớn</span></div>").appendTo(__.find(".slick-wrap"));
	});
    $("#slideThumbnail").slick({
    	autoplay:true,
    	speed:1200,
		autoplaySpeed:6000,
		arrows:false,
		dots:true,
    });
    $('.medicineContent .tab-list ul li a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
	  	$("html").getNiceScroll().resize();
	});
	$(".slideOther1").slick({
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
	$(".slideOther2").slick({
		slidesToShow : 5,
		autoplay:true,
    	speed:1200,
		autoplaySpeed:6000,
		responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
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





