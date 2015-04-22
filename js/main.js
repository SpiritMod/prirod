$(document).ready(function() {

    $('#main-menu li .nolink').click(function() {
        if ( $(this).hasClass("active") ) {
            //alert("У элемента задан класс active!");
        } else {
            $(this).parent().parent().find('.nolink').removeClass('active');
            $(this).addClass('active');
            $('#main-menu li .box-sub-menu.show').removeClass('show').fadeOut();
            $(this).parent().find('.box-sub-menu').addClass('show').fadeIn(400);

            $('#main-menu li .box-sub-menu.show .close').click(function() {
                //alert('1');
                $('#main-menu li').find('.nolink.active').removeClass('active');
                $('#main-menu li').find('.box-sub-menu.show').removeClass('show').fadeOut();
            });
        }
    });

    $('.menu-resources .show-resourses').click(function() {
        $('.menu-resources .small-block-resourses').fadeIn(400);
    });
    $('.menu-resources .close-small-resourses').click(function() {
        $('.menu-resources .small-block-resourses').fadeOut(400);
    });


    $("#baners").owlCarousel({
        items : 6, //10 items above 1000px browser width
        itemsDesktop: [1000,6],
        itemsDesktopSmall: [900,6],
        itemsTablet: [600,6],
        itemsMobile : false,
        autoPlay: 5000,
        navigation: true,
        pagination: false
    });

    $(".news-slider").owlCarousel({
        items: 4,
        itemsDesktop: [1000,4],
        itemsDesktopSmall: [900,4],
        itemsTablet: [600,4],
        itemsMobile : false,
        navigation: true,
        pagination: false
    });


});

(function($) {
    $.fn.accordionAnimated = function() {

        var
            $accordion = this,
            $items = $accordion.find('> dd'),
            $targets = $items.find('.content'),
            options = {
                active_class : 'active',  // class for items when active
                multi_expand: false,    // whether mutliple items can expand
                speed : 500,        // speed of animation
                toggleable: true      // setting to false only closes accordion panels when another is opened
            }
            ;

        $.extend(options, Foundation.utils.data_options($accordion));

        $items.each(function(i) {
            $(this).find('a:eq(0)').on('click.accordion', function() {
                if(!options.toggleable && $items.eq(0).hasClass(options.active_class)) {
                    return;
                }

                $targets.eq(i)
                    .stop(true, true)
                    .slideToggle(options.speed);

                if(!options.multi_expand) {
                    $targets.not(':eq('+i+')')
                        .stop(true, true)
                        .slideUp(options.speed);
                }
            });
        });
    };
}(jQuery));