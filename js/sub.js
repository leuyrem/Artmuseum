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
