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
    }

    let cards = document.getElementsByClassName('options__card')
    let wall = document.getElementsByClassName('pop-up__wall')
    let body = document.getElementsByTagName('body')
    for (let i = 0; i < cards.length; i++) {
        cards[i].onclick = function () {
            console.log(cards[i].id)
            let popup = document.getElementById('pop-up-' + (i + 1))
            popup.classList.add('active')
            wall[0].classList.add('active')
        }
    }

    $('.pop-up__close-btn').on("click", function () {
        $('.options__pop-up').removeClass('active')
        $('.pop-up__wall').removeClass('active')
    })
})