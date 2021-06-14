$(document).ready(function () {
    $('.services-slider').slick({
        variableWidth: false,
        arrows: true,
        // prevArrow: '<div class="arrow-prev arrow"><img src="../img/window/prev-arrow-active.svg"></div>',
        prevArrow: '<div class="arrow-prev arrow"></div>',
        // nextArrow: '<div class="arrow-next arrow"><img src="../img/window/next-arrow-active.svg"></div>',
        nextArrow: '<div class="arrow-next arrow"></div>',
        infinite: false,
        slidesToShow: 1,
    });

    $('.services-slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        if (nextSlide > currentSlide) {
            document.getElementById("service-tab-" + (nextSlide + 1)).classList.add("tab-active");
            document.getElementById("tab-line-" + (nextSlide + 1)).classList.add("tabs-line-active");
        }
        if (nextSlide < currentSlide) {
            document.getElementById("service-tab-" + (currentSlide + 1)).classList.remove("tab-active");
            document.getElementById("tab-line-" + (currentSlide + 1)).classList.remove("tabs-line-active");
        }
    });
});