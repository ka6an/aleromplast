document.addEventListener('DOMContentLoaded', ready);

function ready() {
    /*==========
    variables
    ==========*/

    var body = document.body;
    var windowWidth = window.innerWidth || document.documentElement.clientWidth;
    var cards = $('.js_category-item');

    /*==========
    events
    ==========*/

    cards.each(function(idx, card) {
        let down;
        let up;
        let link = $(card).find('a');

        $(card).on('mousedown', function(event) {
            down = +new Date();
        });

        $(card).on('mouseup', function(event) {
            up = +new Date();
            if ((up - down) < 200) {
                console.log('click');
                $(link).eq(0).click();

            }
        });
    });

    /*==========
    functions
    ==========*/
}