

// Loading

$(window).on ('load', function () {

    $('.loading').hide();

});

//////////////////////////////////////////////////////////////////////////////////////////

$(function () {

    'use strict';

    // Menu Toggle 
    $('nav .navbar-brand').click (function () {

        $('.menu ul').slideToggle (400);

    });

    // Menu Links
    $('.menu ul li').each (function () {

        $(this).click (function () {

            if ( $(this).hasClass ('action') ) {

                window.open ('action.html', '_self', '', '');

            } else if ( $(this).hasClass ('horror') ) {

                window.open ('horror.html', '_self', '', '');

            } else if ( $(this).hasClass ('drama') ) {

                window.open ('drama.html', '_self', '', '');

            } else if ( $(this).hasClass ('history') ) {

                window.open ('history.html', '_self', '', '');

            } else if ( $(this).hasClass ('comedy') ) {

                window.open ('comedy.html', '_self', '', '');

            }

        });
    });

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Main-Header

    $('.main-header').height ( $(window).height() - ( $('.header-up').innerHeight() + $('nav').innerHeight() ) );

    $(window).resize (function () {

        $('.main-header').height ( $(window).height() - ( $('.header-up').innerHeight() + $('nav').innerHeight() ) );

    });

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Thumbnails-img

    $('.thumbnails-img img').on ('click', function () {

        $(this).addClass('active').siblings().removeClass('active');

        $('.cover-img img').hide().attr ( 'src', $(this).attr('src') ).fadeIn(400);

        if ( $(this).hasClass ('img-1') ) {

            $(".cover-img .info").each (function () {

                $(this).animate ({

                    opacity: 0

                }, 200);

                if ( $(this).hasClass ('info-1') ) {

                    $(this).animate ({

                        opacity: 1

                    }, 1000);

                    $('.cover-img .info').each (function () {

                        $(this).addClass('hidden');

                    });

                    $(this).removeClass('hidden');

                }

            });

        } else if ( $(this).hasClass ('img-2') ) {

            $(".cover-img .info").each (function () {

                $(this).animate ({

                    opacity: 0

                }, 200);

                if ( $(this).hasClass ('info-2') ) {

                    $(this).animate ({

                        opacity: 1

                    }, 1000);

                    $('.cover-img .info').each (function () {

                        $(this).addClass('hidden');

                    });

                    $(this).removeClass('hidden');

                }

            });

        } else if ( $(this).hasClass ('img-3') ) {

            $(".cover-img .info").each (function () {

                $(this).animate ({

                    opacity: 0

                }, 200);

                if ( $(this).hasClass ('info-3') ) {
                   
                    $(this).animate ({

                        opacity: 1

                    }, 1000);

                    $('.cover-img .info').each (function () {

                        $(this).addClass('hidden');

                    });

                    $(this).removeClass('hidden');

                }

            });

        } else if ( $(this).hasClass ('img-4') ) {

            $(".cover-img .info").each (function () {

                $(this).animate ({

                    opacity: 0

                }, 200);

                if ( $(this).hasClass ('info-4') ) {

                    $(this).animate ({

                        opacity: 1

                    }, 1000);

                    $('.cover-img .info').each (function () {

                        $(this).addClass('hidden');

                    });

                    $(this).removeClass('hidden');

                }

            });

        }

    });


    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Theater (Arrow)

    $('.theater .top-view .animate .down').click (function () {

        $('.theater .top-view').animate ({

            height: 577

        }, 400);

        $(this).animate ({

            opacity: .4 

        }, 400);

        $('.theater .top-view .animate .up').animate ({

            opacity: 1 

        }, 400);

    });

    $('.theater .top-view .animate .up').click (function () {

        $('.theater .top-view').animate ({

            height: 437

        }, 400);

        $(this).animate ({

            opacity: .4 

        }, 400);

        $('.theater .top-view .animate .down').animate ({

            opacity: 1 

        }, 400);

    });

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Videos (Main) 

    $('.videos .main i').css (

        "top", ( $('.videos .main').height() - $('.videos .main i').height() ) /2

    );

    $('.videos .main i').css (

        "left", ( $('.videos .main').width() - $('.videos .main i').width() ) /2

    );

    $(window).resize (function () {

        $('.videos .main i').css (

            "top", ( $('.videos .main').height() - $('.videos .main i').height() ) /2
    
        );
    
        $('.videos .main i').css (
    
            "left", ( $('.videos .main').width() - $('.videos .main i').width() ) /2
    
        );

    });

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Images (Animation)

    $(".videos .images img").click (function () {

        $(".videos .main img").attr ("src", ( $(this).attr('src') ) );

        $(".videos .images img").removeClass('active');

        $(this).addClass ('active')

    });

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Main-Card

    $(window).resize (function () {

        $('.main-card .row .img-box .cover').css (

            'left', ( $('.main-card .row .img-box').innerWidth() - $('.main-card .row .img-box .cover').width() ) /2
    
        );

        $('.main-card .row .img-box .cover').css (

            'top', ( $('.main-card .row .img-box').innerHeight() - $('.main-card .row .img-box .cover').height() ) /2
    
        );

    });



    $('.main-card .row .img-box .cover').css (

        'left', ( $('.main-card .row .img-box').innerWidth() - $('.main-card .row .img-box .cover').width() ) /2

    );

    $('.main-card .row .img-box .cover').css (

        'top', ( $('.main-card .row .img-box').innerHeight() - $('.main-card .row .img-box .cover').height() ) /2

    );

    ///////////////////////////////////////////////////////////////////////////////////////////////

    // WOW

    new WOW().init();



});

































