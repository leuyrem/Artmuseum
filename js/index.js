//햄버거버튼
$(document).ready(function(){ 
$('#allmenu').click(function(){
    $(this).toggleClass('open');
    $('.depth1').toggle();
})
});


// $(document).ready(function(){
//     $(window).scroll(function(){
//         i($(window).scrollTop()> 0) 
//     });
// });















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

// 섹션
    var first = $('.first').offset().top;
    if(ws > first - 700) {
        $('.first').css("transform", "translateY(0px)").css("opacity", "1");
    }

    var second = $('.second p').offset().top;
    if(ws > second - 700) {
        $('.second p').css("transform", "translateY(0px)").css("opacity", "1");
    }

    var third = $('.third').offset().top;
    if(ws > third - 700) {
        $('.third').css("transform", "translateY(0px)").css("opacity", "1");
    }

});


//전시 정보
$(function(){
    $('button').click(function(){
        let idx = $(this).index();  
        $('.art').hide();
        $(".art").eq(idx).fadeIn().css("display","flex");
    });

});











