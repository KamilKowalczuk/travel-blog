$(document).ready(function () {
    $('.hero__boxes').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4500,
		pauseOnHover: true,
        arrows: true,
		prevArrow: '.hero__prev-btn',
		nextArrow: '.hero__next-btn',
        mobileFirst: true,
        responsive: [{
            breakpoint: 700,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }],

    });
})