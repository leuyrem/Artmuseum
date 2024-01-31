

// 헤더 아래에서
$(document).ready(function () {
    $(".small p").css({ transform: "translateY(0px)", opacity: 1 })
    $(".big").css({ transform: "translateY(0px)", opacity: 1 })
});

// 슬라이더
$(window).scroll(function () {
    var ws = $(this).scrollTop();

    var text1 = $('.text1').offset().top;
    if (ws > text1 - 700) {
        $('.text1').css("transform", "translateX(0px)").css("opacity", "1");
    }

    var text2 = $('.text2').offset().top;
    if (ws > text2 - 700) {
        $('.text2').css("transform", "translateX(0px)").css("opacity", "1");
    }

    var text3 = $('.text3').offset().top;
    if (ws > text3 - 700) {
        $('.text3').css("transform", "translateX(0px)").css("opacity", "1");
    }

});

// 섹션
$(window).scroll(function () {
    var ws = $(this).scrollTop();
    
});












