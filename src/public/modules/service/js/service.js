$(document).ready(function(){
	$("#slideCompany").slick({
		slidesToShow : 2,
		autoplay:true,
		speed:1200,
		autoplaySpeed:6000,
		arrows:false,
		responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
	});
	var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        spaceBetween: 80,
        slideToClickedSlide: true,
        speed: 1000,
        loop : true,
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : false
        },
        breakpoints: {
            1024: {
                slidesPerView: 1,
                spaceBetween: 0
            }
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        autoplay: {
            delay: 4000
        }
    });
});
