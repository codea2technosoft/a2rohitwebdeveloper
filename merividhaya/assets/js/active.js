
(function ($) {
    'use strict';


    var $window = $(window);
    var zero = 0;
    var viewportWidth = $(window).width();


    // :: 1.0 PRELOADER ACTIVE CODE
    
            $("#status").fadeOut();
            $("#preloader").delay(350).fadeOut("slow"); 
            $("body").delay(350).css({ "overflow": "visible" });

   




    // NAVIGATION MENU ACTIVE CODE
    // dropdown for mobile
    $(document).ready(function () {
        checkWidth(true);
        $(window).resize(function () {
            checkWidth(false);
        });
    });

    function checkWidth(init) {
        // If browser resized, check width again 
        if ($(window).width() <= 991) {
            $('.dropdown-submenu a').on("click", function (e) {
                $(this).next('ul').toggle();
                e.stopPropagation();
                e.preventDefault();
            });
        }
    }



    function navMenu() {
        // MAIN MENU TOGGLER ICON (MOBILE SITE ONLY)
        $('[data-toggle="navbarToggler"]').click(function () {
            $('.navbar').toggleClass('active');
            $('body').toggleClass('canvas-open');
        });
        // MAIN MENU TOGGLER ICON
        $('.navbar-toggler').click(function () {
            $('.navbar-toggler-icon').toggleClass('active');
        });

        // NAVBAR STICKY
        var $stickyNav = $(".navbar-sticky");

        $(window).on("scroll load", function () {
            var scroll = $(window).scrollTop();
            if (scroll >= 120) {
                $stickyNav.addClass("navbar-sticky-moved-up");
            } else {
                $stickyNav.removeClass("navbar-sticky-moved-up");
            }
            // apply transition
            if (scroll >= 250) {
                $stickyNav.addClass("navbar-sticky-transitioned");
            } else {
                $stickyNav.removeClass("navbar-sticky-transitioned");
            }
            // sticky on
            if (scroll >= 500) {
                $stickyNav.addClass("navbar-sticky-on");
            } else {
                $stickyNav.removeClass("navbar-sticky-on");
            }

        });
    }
    navMenu();



    // SCROLL TO TOP ACTIVE CODE
    var offset = 300;
    var duration = 500;

    $window.on('scroll', function () {
        if ($(this).scrollTop() > offset) {
            $("#scrollUp").fadeIn(duration);
        } else {
            $("#scrollUp").fadeOut(duration);
        }
    });

    $("#scrollUp").on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, duration);
    });



    // NEWSLETTER SUBSCRIPTION
    $('#mc-form').ajaxChimp({
        url: 'https://xyz.us15.list-manage.com/subscribe/post?u=a26d8d38db8b11ffd3352f889&amp;id=d60b8b0444'
            /* Replace Your AjaxChimp Subscription Link */
    });



    // SCROLL LINK ACTIVE CODE
    var scrollLink = $('.scroll');



    // SMOOTH SCROLLING ACTIVE CODE
    scrollLink.on('click', function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });



    // AOS ACTIVE CODE
    AOS.init();



    // WOW ACTIVE CODE
    new WOW().init();



    // APP-TESTIMONIAL
    var swiper = new Swiper( '.swiper-container.app-testimonials', {
        loop: true,
        autoplaySpeed: 3000,
        // slidesPerView: 2,
        spaceBetween: 30,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
        667: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      }
    });



    // APP-SCREEN
    var swiper = new Swiper( '.swiper-container.app-screen', {
        effect: 'coverflow',
        loop: true,
        autoplaySpeed: 3000,
        centeredSlides: true,
        slidesPerView: 'auto',
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        paginationClickable: true,
        coverflow: {
            rotate: 0,
            stretch: 100,
            depth: 150,
            modifier: 1.5,
            slideShadows : false,
        }
    });




    // FAX CARD HEADER
    $('.card-header').click(function() {
        $('.card-header').removeClass("hide-s card-header-1");
        $(this).addClass("hide-s");
    });




    // PREVENT DEFAULT ACTIVE CODE
    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });



    // COUNTERUP ACTIVE CODE
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });



    // FANCYBOX VIDEO POPUP ACTIVE CODE
    $(".fancyVideo").fancybox({
        animationEffect : "zoom-in-out",
        transitionEffect : "circular",
        maxWidth    : 800,
        maxHeight   : 600
    });





}(jQuery));