$(document).ready(function () {
    $('.services-slider').slick({
        variableWidth: false,
        // centerMode: true,
        // centerPadding: '80px',
        arrows: true,
        prevArrow: '<div class="arrow-prev arrow"><img src="../img/window/prev-arrow.svg"></div>',
        nextArrow: '<div class="arrow-next arrow"><img src="../img/window/prev-arrow.svg"></div>',
        infinite: false,
        slidesToShow: 1,
    });
});