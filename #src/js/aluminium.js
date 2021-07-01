$(document).ready(function () {
    if ($(window).width() <= '360') {
        $('.products__content').slick({
            slidesToShow: 1.2,
            variableWidth: false,
            arrows: false,
            dots: true,
            infinite: false
        });
    } else if ($(window).width() <= '414') {
        $('.products__content').slick({
            slidesToShow: 1.5,
            variableWidth: false,
            arrows: false,
            dots: true,
            infinite: false
        });
    } else if ($(window).width() <= '768' || $(window).width() > '1024') {
        $('.products__content').slick({
            slidesToShow: 2,
            variableWidth: false,
            arrows: false,
            dots: true,
            infinite: false
        });
    } else if ($(window).width() <= '1024') {
        $('.products__content').slick({
            slidesToShow: 1.5,
            variableWidth: false,
            arrows: false,
            dots: true,
            infinite: false
        });
    }
})