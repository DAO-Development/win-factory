$(document).ready(function () {
    console.log($(window).width());
    if ($(window).width() <= '768') {

        $('.colors__show').slick({
            slidesToShow: 2.1,
            variableWidth: false,
            arrows: false,
            dots: true,
            infinite: false,
            responsive: [
                {
                  breakpoint: 569,
                  settings: {
                    slidesToShow: 2.07,
                  }
                },
                {
                    breakpoint: 415,
                    settings: {
                      slidesToShow: 1.5,
                    }
                },
                {
                    breakpoint: 361,
                    settings: {
                      slidesToShow: 1.4,
                    }
                }
                
            ]
        });
    }


    
})