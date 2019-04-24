    $(document).ready(function () {
        "use strict";
        $('.main_col_05').slick({
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [{
                breakpoint: 1599,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }, ]
        });
    });
    $(document).ready(function () {
        "use strict";
        $('.box_07_slider').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: true,
            arrows: false,
        });
    });
    $(document).ready(function () {
        "use strict";
        $('.main_col_07').slick({
            infinite: true,
            slidesToShow: 7,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            dots: false,
            arrows: true,
            responsive: [{
                breakpoint: 1599,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }, ]
        });
    });

    //totop
    $(document).ready(function () {
        "use strict";
        $("#btn_top").hide();
        $(window).scroll(function () {
            if ($(this).scrollTop() > 600) {
                $("#btn_top").fadeIn();
            } else {
                $("#btn_top").fadeOut();
            }
        });
    });

    //click
    $(document).ready(function () {
        "use strict";
        $(".display_col").click(function () {
            $(".list_product_box_main").addClass("show_col");
            $(".list_product_box_main").removeClass("show_list");
            $(".display_col").css("color", "#c8d4d9");
            $(".display_list").css("color", "#0192d1");
        });
        $(".display_list").click(function () {
            $(".list_product_box_main").addClass("show_list");
            $(".list_product_box_main").removeClass("show_col");
            $(".display_col").css("color", "#0192d1");
            $(".display_list").css("color", "#c8d4d9");
        });
        $(".btn_menu").click(function () {
            $(".main_menu").toggleClass("show_menu");
        });
    });
    //accordion
    $(document).ready(function () {
        "use strict";
        $('#accordion').find('.content').hide();
        $('#accordion').find('.active').hide();
        // Accordion
        $('#accordion').find('.accordion-header').click(function () {
            var next = $(this).next();
            next.slideToggle('fast');
            $('.content').not(next).slideUp('fast');
            return false;
        });
    });
    $(document).ready(function () {
        "use strict";
        $(".accordion-header").click(function () {
            $(this).toggleClass('active');
            $('.accordion-header').not(this).removeClass('active');
        });
    });
    //accordion qa
    $(document).ready(function () {
        "use strict";
        $('#accordion_qa').find('.content').hide();
        $('#accordion_qa').find('.active').hide();
        // Accordion
        $('#accordion_qa').find('.accordion-header').click(function () {
            var next = $(this).next();
            next.slideToggle('fast');
            $('.content').not(next).slideUp('fast');
            return false;
        });
    });

    // slide product detail
    $(document).ready(function () {
        "use strict";
        $('.slickslide').slick({

            dots: true,
            infinite: true,
            arrows: false,
            speed: 500,
            fade: false,
            slide: 'li',
            cssEase: 'linear',
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            responsive: [{
                breakpoint: 800,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '40px',
                    variableWidth: false,
                    slidesToShow: 1,
                    dots: true
                }
            }, {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '40px',
                    variableWidth: false,
                    slidesToShow: 1,
                    dots: true

                }
            }],
            customPaging: function (slider, i) {
                return '<button class="tab">' + $('.slick-thumbs li:nth-child(' + (i + 1) + ')').html() + '</button>';
            }
        });
    });
    //click box
    $(document).ready(function () {
        "use strict";
        $(".box").click(function () {
            window.location = $(this).find("a").attr("href");
            return false;
        });
    });
