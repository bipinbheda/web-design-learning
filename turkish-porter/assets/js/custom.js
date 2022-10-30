$(document).ready(function () {
    window.onscroll = function () {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            $("#sticky-header").addClass("scrolled")
        } else {
            $("#sticky-header").removeClass("scrolled")
        }
    }

    // $('.slider-wraper').bxSlider();
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
});