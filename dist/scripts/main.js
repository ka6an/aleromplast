document.addEventListener('DOMContentLoaded', ready);

function ready() {
    /*==========
    variables
    ==========*/

    var body = document.body;
    var windowWidth = window.innerWidth || document.documentElement.clientWidth;
    var cards = $('.js_cards');
    var slider = $('.js_slider');
    var formFields = $('.js_form__field');

    /*==========
    events
    ==========*/

    if (slider.length > 0) {
        initSwiper();
    }

    if (cards.length > 0) {
        onCardClick();
    }

    if (formFields.length > 0) {
        onFormFieldFocus();
    }

    /*==========
    functions
    ==========*/

    function onCardClick() {
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
    }

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

    function onFormFieldFocus() {
        formFields.each(function(idx, field) {
            $(field).change(function(event) {
                if ($(this).val().length > 0 && $(this).val().trim() != '') {
                    $(this).addClass('form__input-val');
                } else {
                    $(this).removeClass('form__input-val');
                }
            });
        });
    }
}