$(function () {

    var naviClon =
        $('#Top_wrap #gnb_wrap').contents().clone();

    naviClon.appendTo('.mb_menu_list');

    $('.submenu').hide();
   

    $('.mb_menu_list > .gnb > li > a').click(function () {
        $(this).toggleClass('mbclick');
        $('.mb_menu_list > .gnb > li > a').not(this).removeClass('mbclick');
        
        $(this).find('+.submenu').slideToggle('300');
        
        $('.mb_menu_list > .gnb > li > a').not(this).find('+.submenu').slideUp('300');       

    });
    
    $(window).resize(function () {
        if ($(this).outerWidth() <= 970) {
            $('#notice_all_wrap').show();
        }       
    });

    $(window).resize(function () {
        if ($(this).outerWidth() > 900) {
            $('#mb_menu .mb_all_wrap').css('left', '-100%');
        }
               
        $('.submenu').hide();
        $('.mb_menu_list > .gnb > li > a').removeClass('mbclick');
    });

    var time = 400;

    $('.mb_menu').click(function () {
        $('#mb_menu .mb_all_wrap').stop().animate({
            left: 0
        },time);
        
        
        $("body").css('overflow', 'hidden');

    });

    $('.close_btn_mb').click(function () {
        $('#mb_menu .mb_all_wrap').stop().animate({
            left: '-100%'
        },time);
        
        $('.submenu').hide();
        $('.mb_menu_list > .gnb > li > a').removeClass('mbclick');
        
        
        $("body").css('overflow', 'auto');


    });



});
