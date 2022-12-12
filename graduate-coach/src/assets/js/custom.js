jQuery(document).ready(function () {
    jQuery('#testimonials').owlCarousel({
        center: true,
        items: 1,
        loop: true,
        // margin: 36,
        pagination: false,
        navigation: true,
        nav: true,
        dotsEach: true,
        dots: true,
        responsive: {
            768: {
                autoWidth: true,
            },
        }
    });

    jQuery('#about-testimonial').owlCarousel({
        center: true,
        items: 1,
        loop: false,
        // margin: 36,
        pagination: false,
        navigation: true,
        nav: true,
        dotsEach: true,
        dots: true,
        responsive: {
            768: {
                // autoWidth: true,
                items: 2,
                center: false,
            },
            992: {
                items: 3,
                center: false,
            }
        }
    });

    jQuery('#pricing').owlCarousel({
        center: true,
        items: 1,
        loop: false,
        // margin: 36,
        pagination: false,
        navigation: false,
        nav: false,
        dotsEach: false,
        dots: false,
        responsive: {
            768: {
                // autoWidth: true,
                items: 2,
                center: false,
            }
        }
    });

    jQuery('#programme-overview').owlCarousel({
        center: false,
        items: 1,
        loop: false,
        // autoWidth: true,
        margin: 36,
        pagination: true,
        navigation: true,
        nav: false,
        dotsEach: true,
        dots: true,
        responsive: {
            768: {
                // autoWidth: true,
                items: 2,
                center: false,
                pagination: false,
                navigation: false,
                nav: false,
                dotsEach: false,
                dots: false,
            }
        }
    });

    jQuery('#our-services').owlCarousel({
        items: 1,
        center: true,
        // loop: true,
        margin: 36,
        autoWidth: true,
        // pagination: false,
        navigation: true,
        nav: true,
        dotsEach: false,
        dots: false,
        responsive: {
            768: {
                items: 4,
                center: false,
                nav: false,
                loop: false,
                touchDrag: false,
                mouseDrag: false,
            },
        }
    });

    jQuery('#post-slider').owlCarousel({
        items: 1,
        center: true,
        loop: false,
        margin: 36,
        // autoWidth: true,
        navigation: true,
        nav: true,
        dotsEach: false,
        dots: true,
        responsive: {
            768: {
                items: 4,
                center: false,
                nav: false,
                autoWidth: true,
                loop: false,
                touchDrag: false,
                mouseDrag: false,
            },
        }
    });

    jQuery('#resources-slider').owlCarousel({
        items: 1,
        center: true,
        loop: false,
        margin: 36,
        // autoWidth: true,
        navigation: true,
        nav: true,
        dotsEach: false,
        dots: true,
        responsive: {
            576: {
                items: 1,
                center: false,
            },
            768: {
                items: 2,
                center: false,
                autoWidth: false,
            },
            992: {
                items: 3,
                center: false,
                autoWidth: false,
            },
        }
    });

    jQuery('#menu-icon').on('click', function () {
        jQuery('#sticky-header nav').toggleClass('hidden');
        jQuery('#sticky-header .rsd-hidden').toggleClass('hidden');
        jQuery('#sticky-header > div').toggleClass('bg-blue');
        jQuery('#menu-icon').toggleClass('bg-white').find('svg').toggleClass('text-white');
        jQuery('#sticky-header').toggleClass('fixed-width')
        // jQuery('#sticky-header #menu-icon').toggleClass('bg-white');
        // jQuery('#sticky-header .rsd-hidden').toggleClass('hidden');
    });

    setTimeout(function () {
        equalheightRow('#resources-slider .owl-item');
        equalheightRow('#pricing .owl-item .item');
        equalheightRow('#equalheight .group');

        if (jQuery('.iso-container').length) {
            $('.iso-container').isotope({
                itemSelector: '.iso-item',
                layoutMode: 'masonry',
            });
        }

    }, 1000);
});

if (document.body.clientWidth >= 984) {
    var sticky_header = document.getElementById("sticky-header")
    window.onscroll = function () {
        if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
            sticky_header.classList.add('scrolled')
        } else {
            sticky_header.classList.remove('scrolled')
        }
    }
}

equalheightRow = function (container) {
    if (jQuery(window).width() > 300) {
        var currentTallest = 0,
            currentRowStart = 0,
            rowDivs = new Array(),
            jQueryel
        jQuery(container).each(function () {
            jQueryel = jQuery(this);
            jQuery(jQueryel).innerHeight('auto')
            rowDivs.push(jQueryel);
            currentTallest = (currentTallest < jQueryel.innerHeight()) ? (jQueryel.innerHeight()) : (currentTallest);
            for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                rowDivs[currentDiv].innerHeight(currentTallest)
            }
        })
    } else {
        jQuery(container).height('auto')
    }
}