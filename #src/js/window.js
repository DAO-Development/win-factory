$(document).ready(function () {
    $('.services-slider').slick({
        variableWidth: false,
        arrows: true,
        prevArrow: '<div class="arrow-prev arrow"></div>',
        nextArrow: '<div class="arrow-next arrow"></div>',
        infinite: false,
        slidesToShow: 1,
    });

    let tabs = document.getElementsByClassName('tab')

    $('.services-slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        console.log("current " + currentSlide)
        console.log("next " + nextSlide)
        if (nextSlide > currentSlide) {
            for (let i = 0; i < tabs.length; i++) {
                if (i <= nextSlide && i !== 0) {
                    console.log(i < nextSlide)
                    document.getElementById("service-tab-" + (i + 1)).classList.add("tab-active");
                    document.getElementById("tab-line-" + (i + 1)).classList.add("tabs-line-active");
                }
            }
        }
        if (nextSlide < currentSlide) {
            for (let i = 0; i < tabs.length; i++) {
                if (i > nextSlide && i !== 0) {
                    document.getElementById("service-tab-" + (i + 1)).classList.remove("tab-active");
                    document.getElementById("tab-line-" + (i + 1)).classList.remove("tabs-line-active");
                }
            }
        }
    });

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].onclick = function () {
            $('.services-slider').slick('slickGoTo', i)
        }
    }

});