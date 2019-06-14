document.addEventListener('DOMContentLoaded', ready);

function ready() {
    /*==========
    variables
    ==========*/

    var body = document.body;
    var windowWidth = window.innerWidth || document.documentElement.clientWidth;
    var cards = $('.js_cards');
    var slider = $('.js_slider');

    /*==========
    events
    ==========*/

    if (slider.length > 0) {
        initSwiper();
    }

    cards.each(function(idx, card) {
        let down;
        let up;
        let link = $(card).find('a')[0];

        $(card).on('mousedown', function(event) {
            down = +new Date();
        });

        $(card).on('mouseup', function(event) {
            up = +new Date();
            if ((up - down) < 200) {
                link.click();

            }
        });
    });

    /*==========
    functions
    ==========*/

    function initSwiper() {
        var swiper = new Swiper(slider, {
            pagination: {
                el: '.slider-pagination',
                clickable: true
            },
            navigation: {
                nextEl: '.slider-button-next',
                prevEl: '.slider-button-prev',
            },
            loop: true
        });
    }
}