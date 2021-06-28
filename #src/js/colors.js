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

    else{
        let colors = document.getElementsByClassName('colors__color');
        let items = document.getElementsByClassName('colors__item')
        let last_item = 0

        for (let i = 0; i<colors.length; i++){
            colors[i].addEventListener("click", function(){
                colors[last_item].classList.remove("active")
                colors[i].classList.add("active")
                items[i].classList.remove("invis")
                items[last_item].classList.add("invis")
                last_item = i

            })
        }
    }


    
})