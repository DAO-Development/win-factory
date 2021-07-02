$(document).ready(function () {
    if ($(window).width() <= '360') {
        $('.products__content').slick({
            variableWidth: false,
            arrows: false,
            dots: true,
            infinite: false,
            slidesToShow: 1.4,
        })
    } else if ($(window).width() <= '414') {
        $('.products__content').slick({
            variableWidth: false,
            arrows: false,
            dots: true,
            infinite: false,
            slidesToShow: 1.5,
        })
    } else if ($(window).width() <= '568') {
        $('.products__content').slick({
            variableWidth: false,
            arrows: false,
            dots: true,
            infinite: false,
            slidesToShow: 2.07,
        })
    } else if ($(window).width() <= '768') {
        $('.products__content').slick({
            variableWidth: false,
            arrows: false,
            dots: true,
            infinite: false,
            slidesToShow: 2.3,
        });
    }
})