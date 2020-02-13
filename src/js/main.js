import "./helpers/postDate";
import "./modules/areas__slider";

import scrollSmooth from "./helpers/smooth-scroll.js";
import youtubeShowVideo from "./modules/youtube";
import headerBurger from "./modules/header";

function main() {
    scrollSmooth();
    youtubeShowVideo();
    headerBurger();

    // slider
    var $slick_slider = $(".slider");
    var settings_slider = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 2,

        responsive: [{
                breakpoint: 500,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 300,
                settings: "unslick" // destroys slick
            }
        ]

        // more settings
    };
    slick_on_mobile($slick_slider, settings_slider);

    // slick on mobile
    function slick_on_mobile(slider, settings) {
        $(window).on("load resize", function() {
            if ($(window).width() > 767) {
                if (slider.hasClass("slick-initialized")) {
                    slider.slick("unslick");
                }
                return;
            }
            if (!slider.hasClass("slick-initialized")) {
                return slider.slick(settings);
            }
        });
    }



    $('.statistics__slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 636,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });




    // slider GIFTS
    var $slick_slider2 = $(".gifts__slider");
    var settings_slider2 = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 4,

        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 636,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 300,
                settings: "unslick" // destroys slick
            }
        ]

        // more settings
    };
    slick_on_mobile($slick_slider2, settings_slider2);

    // slick on mobile
    function slick_on_mobile(slider, settings) {
        $(window).on("load resize", function() {
            if ($(window).width() > 1024) {
                if (slider.hasClass("slick-initialized")) {
                    slider.slick("unslick");
                }
                return;
            }
            if (!slider.hasClass("slick-initialized")) {
                return slider.slick(settings);
            }
        });
    }


}

main();