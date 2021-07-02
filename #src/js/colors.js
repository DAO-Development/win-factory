$(document).ready(function () {
    console.log($(window).width());
    if ($(window).width() <= '360') {
        $('.colors__show').slick({
            variableWidth: false,
            arrows: false,
            dots: true,
            infinite: false,
            slidesToShow: 1.4,
        })
    } else if ($(window).width() <= '414') {
        $('.colors__show').slick({
            variableWidth: false,
            arrows: false,
            dots: true,
            infinite: false,
            slidesToShow: 1.5,
        })
    } else if ($(window).width() <= '568') {
        $('.colors__show').slick({
            variableWidth: false,
            arrows: false,
            dots: true,
            infinite: false,
            slidesToShow: 2.07
        })
    } else if ($(window).width() <= '768') {

        $('.colors__show').slick({
            variableWidth: false,
            arrows: false,
            dots: true,
            infinite: false,
            slidesToShow: 2.1,
        });
    } else {
        let colors = document.getElementsByClassName('colors__color');
        let items = document.getElementsByClassName('colors__item')
        let last_item = 0

        for (let i = 0; i < colors.length; i++) {
            colors[i].addEventListener("click", function () {
                colors[last_item].classList.remove("active")
                colors[i].classList.add("active")
                items[i].classList.remove("invis")
                items[last_item].classList.add("invis")
                last_item = i

            })
        }
    }


})