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

    let cards = document.getElementsByClassName('options__card')
    let wall = document.getElementsByClassName('pop-up__wall')
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