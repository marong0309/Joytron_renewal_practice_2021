$(function () {
    $('#Top_wrap .gnb > li').mouseenter(function () {
        $(this).find('.submenu').slideDown(350);

    }).mouseleave(function () {
        $(this).find('.submenu').hide();
    });



    // swiper ===============    

    var swiper = new Swiper('.swiper-container.main02', {
        slidesPerView: 1, //보여지는 슬라이드 개수
        spaceBetween: 20, //슬라이드 사이 공간
        loop: true, // 반복 슬라이드
        keyboard: {
            enabled: true, //키보드 제어
        },
        autoplay: {
            delay: 4000, // 4초마다 슬라이드
            disableOnInteraction: true, //버튼 제어시 멈춤
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true, //블릿버튼 제어
            /*
            renderBullet:function(index, className){
                return '<span class="'+className+'">'+(index+1)+'</span>'
            }*/
        },
        navigation: { //이전다음버튼 제어
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });




    var swiper2 = new Swiper('.swiper-container.main03', {
        slidesPerView: 3,
        spaceBetween: 50,
        /* slidesPerGroup: 3,*/
        loop: true,
        /*loopFillGroupWithBlank: false,*/
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: '.swiper-pagination.main03_4',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next.main03_5',
            prevEl: '.swiper-button-prev.main03_6',
        },

        //반응형 웹 해상도에 따른 슬라이드 개수 제어
        breakpoints: {
            1500: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
            1040: {
                slidesPerView: 2,
                spaceBetween: 50,
            },
            900: {
                slidesPerView: 2,
                spaceBetween: 50,
            },
            550: {
                slidesPerView: 1,
                spaceBetween: 50,                
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
        },


    });


    var swiper3 = new Swiper('.swiper-container.main05', {
        slidesPerView: 3,
        spaceBetween: 50,
        /* slidesPerGroup: 3,*/
        loop: true,
        /*loopFillGroupWithBlank: false,*/
        /* autoplay: {
             delay: 4000,
         },*/
        pagination: {
            el: '.swiper-pagination.main05_5',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next.main05_5',
            prevEl: '.swiper-button-prev.main05_6',
        },

        //반응형 웹 해상도에 따른 슬라이드 개수 제어
        breakpoints: {
            1500: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
            1300: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1040: {
                slidesPerView: 2,
                spaceBetween: 50,
            },

            900: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            540: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
        },

    });

    $('#main04_allwrap .btn_allwrap > div').mouseover(function () {

        $('#main04_allwrap .main04_wrap > p >span').text($(this).attr('data-text'));
        if ($(this).index() == 0) {
            $('.main04_wrap > p>span').css({
                borderBottom: '8px solid #00e46e'
            });
        } else if ($(this).index() == 1) {
            $('#main04_allwrap .main04_wrap > p> span').css({
                borderBottom: '8px solid #07baea'
            });
        } else if ($(this).index() == 2) {
            $('#main04_allwrap .main04_wrap > p> span').css({
                borderBottom: '8px solid #ff69b1'
            });
        } else if ($(this).index() == 3) {
            $('#main04_allwrap .main04_wrap > p> span').css({
                borderBottom: '8px solid #ff974a'
            });

        }

    }).mouseout(function () {

        $('#main04_allwrap .main04_wrap > p > span').text("마우스를 올려주세요!");
        $('#main04_allwrap .main04_wrap > p > span').css({
            borderBottom: '0'
        });
    });

    $('#extra_full_wrap .extra_all_wrap').hide();
    $('#extra_full_wrap .extra_all_wrap').eq(0).show();

    $('#main04_allwrap .btn_allwrap > div').click(function () {
        $('#notice_all_wrap').slideDown('slow');
        $('#main04').hide();

        $('#extra_full_wrap .extra_all_wrap').hide();
        $('#extra_full_wrap .extra_all_wrap').eq($(this).index()).show();

        $('#another_btn_wrap .btn_allwrap > div').removeClass('on');
        $('#another_btn_wrap .btn_allwrap > div').eq($(this).index()).addClass('on');

    });


    $('#another_btn_wrap .btn_allwrap > div').eq(0).addClass('on');

    $('#another_btn_wrap .btn_allwrap > div').click(function () {

        $('#another_btn_wrap .btn_allwrap > div').removeClass('on');
        $(this).addClass('on');

        $('#extra_full_wrap .extra_all_wrap').hide();
        $('#extra_full_wrap .extra_all_wrap').eq($(this).index()).show();

    });


    $('.new_return').click(function () {
        $('#notice_all_wrap').hide();
        $('#main04').slideDown('slow');
    });

    $('#main05 .youtube_main').hide();
    $('#main05 .youtube_main').eq(0).show();

    $('.swiper-slide.main05_3').click(function () {
        $('#main05 .youtube_main').hide();
        if ($(this).hasClass('mv1')) {
            $('#main05 .youtube_main').eq(0).show();
        } else if ($(this).hasClass('mv2')) {
            $('#main05 .youtube_main').eq(1).show();
        } else if ($(this).hasClass('mv3')) {
            $('#main05 .youtube_main').eq(2).show();
        } else if ($(this).hasClass('mv4')) {
            $('#main05 .youtube_main').eq(3).show();
        } else if ($(this).hasClass('mv5')) {
            $('#main05 .youtube_main').eq(4).show();
        } else if ($(this).hasClass('mv6')) {
            $('#main05 .youtube_main').eq(5).show();
        } else if ($(this).hasClass('mv7')) {
            $('#main05 .youtube_main').eq(6).show();
        }
    });
    
  

    $('#main05_extra .swiper-slide.main05_3 > figure').click(function () {

        for (var k = 1; k <= 7; k++) {
            $('#myVideo' + k).get(0).pause();
            $('.play_pause_btn' + k).css('backgroundPosition', '0 0');
        }

        $('#main05_extra .swiper-slide').removeClass('on');
        $(this).parent().addClass('on');
    });


    function play_pause_vd(vNo) {
        var mv;

        for (var k = 1; k <= 7; k++) {
            if (vNo != k) {
                $('#myVideo' + k).get(0).pause();
                $('.play_pause_btn' + k).css('backgroundPosition', '0 0');
                console.log($('#myVideo' + k).get(0))
            } else {
                mv = $('#myVideo' + k).get(0);
            }
        }


        if (mv.paused) {
            mv.play();
            $('.play_pause_btn' + vNo).css('backgroundPosition', '0 -80px');

            //document.querySelector('.play_pause_btn1').style.backgroundPosition = '0 -80px';
            $('.video_box').addClass('play');
        } else {
            mv.pause();
            $('.play_pause_btn' + vNo).css('backgroundPosition', '0 0');
            //document.querySelector('.play_pause_btn1').style.backgroundPosition = '0 0px';
            $('.video_box').removeClass('play');
        };

    }

    $('.play_pause_btn1').click(function () {
        play_pause_vd(1);
        return false;
    });



    $('.play_pause_btn2').click(function () {
        play_pause_vd(2);
        return false;
    });



    $('.play_pause_btn3').click(function () {
        play_pause_vd(3);
        return false;
    });


    $('.play_pause_btn4').click(function () {
        play_pause_vd(4);
        return false;
    });


    $('.play_pause_btn5').click(function () {
        play_pause_vd(5);
        return false;
    });


    $('.play_pause_btn6').click(function () {
        play_pause_vd(6);
        return false;
    });



    $('.play_pause_btn7').click(function () {
        play_pause_vd(7);
        return false;
    });

    /* end : video */



    $('#search_wrap > .search').click(function () {
        $('#search_wrap > .search').hide();
        $('#search_wrap > .search_close').show();
        $('#seach_all_full_wrap').fadeIn('fast');
    });

    $('#search_wrap > .search_close').click(function () {
        $('#search_wrap > .search_close').hide();
        $('#search_wrap > .search').show();
        $('#seach_all_full_wrap').fadeOut('fast');


    });

    $('#seach_all_full_wrap .search_extra_wrap > figure > img').click(function () {
        alert("검색결과가 없습니다.");
    });



});
