$(document).ready(function () {
    $('.products-slider').slick({
        slidesToShow: 2,
        variableWidth: false,
        arrows: false,
        dots: true,
        infinite: false,
        responsive: [
            {
                breakpoint: 569,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 415,
                settings: {
                    slidesToShow: 1.5,
                }
            },
            {
                breakpoint: 361,
                settings: {
                    slidesToShow: 1.4,
                }
            }

        ]
    });
})