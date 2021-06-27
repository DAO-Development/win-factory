$(document).ready(function () {
    if ($(window).width() <= '320') {
        $('.options-slider').slick({
            variableWidth: false,
            arrows: false,
            infinite: false,
            slidesToShow: 1.1,
        });
    } else if ($(window).width() <= '360') {
        $('.options-slider').slick({
            variableWidth: false,
            arrows: false,
            infinite: false,
            slidesToShow: 1.3,
        });
    } else if ($(window).width() <= '414') {
        $('.options-slider').slick({
            variableWidth: false,
            arrows: false,
            infinite: false,
            slidesToShow: 1.5,
        });
    } else if ($(window).width() <= '568') {
        $('.options-slider').slick({
            variableWidth: false,
            arrows: false,
            infinite: false,
            slidesToShow: 2.1,
        });
    } else if ($(window).width() <= '768') {
        $('.options-slider').slick({
            variableWidth: false,
            arrows: false,
            infinite: false,
            slidesToShow: 2.3,
        });
    } else if ($(window).width() <= '1024') {
        $('.options-slider').slick({
            variableWidth: false,
            arrows: false,
            infinite: false,
            slidesToShow: 3.1,
        });
    }
})