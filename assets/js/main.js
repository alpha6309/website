$(function() {
    
    "use strict";
    
    //===== Prealoder
    
    $(window).on('load', function(event) {
        $('#preloader').delay(500).fadeOut(500);
    });
    
    
    //===== Sticky
    
    $(window).on('scroll', function(event) {    
        var scroll = $(window).scrollTop();
        if (scroll < 250) {
            $(".header-nav").removeClass("sticky");
        } else{
            $(".header-nav").addClass("sticky");
        }
    });

    //===== Mobile Menu 

    $(".navbar-toggler").on('click', function () {
        $(this).toggleClass('active');
    });

    $(".navbar-nav a").on('click', function () {
        $(".navbar-toggler").removeClass('active');
    });
    var subMenu = $(".sub-menu-bar .navbar-nav .sub-menu");

    if (subMenu.length) {
        subMenu.parent('li').children('a').append(function () {
            return '<button class="sub-nav-toggler"> <i class="fal fa-angle-down"></i> </button>';
        });

        var subMenuToggler = $(".sub-menu-bar .navbar-nav .sub-nav-toggler");

        subMenuToggler.on('click', function () {
            $(this).parent().parent().children(".sub-menu").slideToggle();
            return false
        });

    }

    
    





        //===== seller Active slick slider
    $('.team-active').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow: '<span class="prev"><i class="fal fa-long-arrow-alt-left"></i></span>',
        nextArrow: '<span class="next"><i class="fal fa-long-arrow-alt-right"></i></span>',
        speed: 1500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 2,
                }
        },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
        },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
        }
      ]
    });
    
    
        //===== seller Active slick slider
    $('.testinonials-active').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 3,
                }
        },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
        },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
        },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
        }
      ]
    });

    
    
    
        //===== seller Active slick slider
    $('.testinonials-2-active').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        speed: 1500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 2,
                }
        },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
        },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
        },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
        }
      ]
    });

    
    
        //===== seller Active slick slider
    $('.testinonials-3-active').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    
    
        //===== seller Active slick slider
    $('.services-active').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 3,
                }
        },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
        },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
        },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
        }
      ]
    });


    
    
    //===== seller Active slick slider
    $('.brand-active').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        speed: 1500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 6,
                }
        },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                }
        },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
        },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
        }
      ]
    });

    //===== shop slide slick slider
    $('.product-item-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,    
        fade: true,
        asNavFor: '.product-details-slide-item ul'
    });
    $('.product-details-slide-item ul').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.product-item-slide',
        dots: false,
        centerMode: true,
        arrows: false,
        centerPadding: "0",
        focusOnSelect: true,
        vertical: true
    });




    
    
    //====== Magnific Popup
    
    $('.video-popup').magnificPopup({
        type: 'iframe'
        // other options
    });
    
    
    //===== Magnific Popup
    
    $('.image-popup').magnificPopup({
      type: 'image',
      gallery:{
        enabled:true
      }
    });
    
    //===== counter up
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
    


    //===== niceSelect js
    $('select').niceSelect();



    //===== WOW js
    new WOW().init();

    
    //===== project Active
    
    $('.project-2-area').on('mouseover', '.project-item', function() {
        $('.project-item.active').removeClass('active');
        $(this).addClass('active');
    });
    
    
    


    //===== product quantity
    $('.add').click(function () {
        if ($(this).prev().val()) {
            $(this).prev().val(+$(this).prev().val() + 1);
        }
    });
    $('.sub').click(function () {
        if ($(this).next().val() > 1) {
            if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
        }
    });




    
    //===== Back to top
    
    // Show or hide the sticky footer button
    $(window).on('scroll', function(event) {
        if($(this).scrollTop() > 600){
            $('.back-to-top').fadeIn(200)
        } else{
            $('.back-to-top').fadeOut(200)
        }
    });
    
    
    //Animate the scroll to yop
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();
        
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });



    
    //===== 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});