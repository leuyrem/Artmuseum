//햄버거버튼
$(document).ready(function () {
    $('#toggle').click(function () {
        $('.menu-side').toggleClass('show', 400)
    });
});

//햄버거버튼sub
$(function(){
    $('.menubody>li').click(function(){
        $('.menusub').stop().slideUp();
        $(this).find('.menusub').stop().slideToggle();
    });
});

//메인페이지
$(document).ready(function () {
    $('.picture').css("transform", "translateY(0px)").css("opacity", "1");
    $('.box').css("transform", "translateY(0px)").css("opacity", "1");
});


//Next Page 버튼
$(function() {
    $('button').click(function() {
        $(".explain").fadeIn();
        $(".explain2").hide();
        $(".buttonmenu2").hide();
    });


    $('button').click(function() {
        $(".explain2").fadeIn();
        $(".buttonmenu2").fadeIn();
        $(".explain").hide();
    });

    $('.buttonmenu2').click(function() {
        $(".explain").fadeIn();
        $(".explain2").hide();
    });
});
