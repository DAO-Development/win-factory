$(document).ready(function () {
    if ($(window).width() >= '1000') {
        $('.examples-slider').slick({
            variableWidth: false,
            arrows: true,
            prevArrow: '<div class="arrow-prev arrow"></div>',
            nextArrow: '<div class="arrow-next arrow"></div>',
            infinite: false,
            slidesToShow: 2,
        });
    } else {
        $('.examples-slider').slick({
            variableWidth: false,
            arrows: true,
            prevArrow: '<div class="arrow-prev arrow"></div>',
            nextArrow: '<div class="arrow-next arrow"></div>',
            infinite: false,
            slidesToShow: 1,
        });
    }
});