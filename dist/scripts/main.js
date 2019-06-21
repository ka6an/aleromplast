document.addEventListener('DOMContentLoaded', ready);

function ready() {
    /*==========
    variables
    ==========*/

    const TABLET_WIDTH = 980;

    var body = document.body;
    var windowWidth = window.innerWidth || document.documentElement.clientWidth;
    var header = $('header').eq(0);
    var cards = $('.js_cards');
    var slider = $('.js_slider');
    var formFields = $('.js_form__field');
    var headerNav = $('.js_header-nav').eq(0);
    var menuBtn = $('.js_menu-btn').eq(0);
    var sidebar = $('.js_sidebar').eq(0);
    var sidebarTitle = $('.js_sidebar-item-title').eq(0);
    var sidebarBtnClose = $('.js_sidebarClose').eq(0);

    /*==========
    events
    ==========*/
    if (menuBtn) {
        menuBtn.on('click', onMenuBtnClick);
    }

    if (slider.length > 0) {
        initSwiper();
    }

    if (cards.length > 0) {
        onCardClick();
    }

    if (formFields.length > 0) {
        onFormFieldFocus();
    }

    if (sidebarTitle && sidebarBtnClose) {
        sidebarTitle.on('click', openSidebar);
        sidebarBtnClose.on('click', closeSidebar);
    }

    $(window).resize(function() {
        windowWidth = window.innerWidth || document.documentElement.clientWidth;
    });

    $(document).scroll(function() {
        if (location.pathname === '/') {
            var scrollOffset = $(window).scrollTop();

            if (windowWidth <= TABLET_WIDTH && scrollOffset >= header.height()) {
                header.addClass('bg-blue');
            } else {
                header.removeClass('bg-blue');
            }
        }
    });

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
        var fraction = windowWidth <= TABLET_WIDTH ? 'fraction' : '';
        var swiper = new Swiper(slider, {
            pagination: {
                el: '.slider-pagination',
                clickable: true,
                type: fraction
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

    function onMenuBtnClick() {
        menuBtn.toggleClass('menu-btn--open');
        headerNav.toggleClass('header-nav--open');
    }

    function openSidebar() {
        sidebar.addClass('sidebar--open');
    }

    function closeSidebar() {
        sidebar.removeClass('sidebar--open');
    }
}