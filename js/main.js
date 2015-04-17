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




    /*$( "span" ).hover(function() {
        $( this ).addClass( "hilite" );
    }, function() {
        $( this ).removeClass( "hilite" );
    });*/

});