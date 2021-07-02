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

    // let exImages = document.getElementsByClassName('examples__card')
    // for (let i = 0; i < exImages.length; i++) {
    //     exImages[i].onclick = function () {
    //         console.log(i)
    //         document.getElementById('image-' + (i + 1)).classList.add('zoom')
    //     }
    // }

    $(function () {
        $('.examples__image').click(function (event) {
            console.log($(this).find("img"))
            var i_path = $(this).find('img').attr('src');
            $('body').append('<div id="overlay"></div><div id="magnify"><img src="' + i_path + '"><div id="close-popup"><i></i></div></div>');
            $('#magnify').css({
                // left: ($(document).width() - $('#magnify').outerWidth()) / 2,
                // top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.10.2016
                // top: ($(window).height() - $('#magnify').outerHeight()) / 2
                left: 0,
                top: 0,
                display: 'grid',
                placeSelf: 'center',
                gridTemplateColumns: '100%',
                gridTemplateAreas: '100%',
            });
            $('#overlay, #magnify').fadeIn('fast');
        });

        $('body').on('click', '#close-popup, #magnify', function (event) {
            event.preventDefault();
            $('#overlay, #magnify').fadeOut('fast', function () {
                $('#close-popup, #magnify, #overlay').remove();
            });
        });
    });
});