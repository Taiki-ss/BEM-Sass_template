$(function(){
  //ハンバーガーメニュー
  $('#menu-btn').click(function () {
    $(this).toggleClass('is-active');
    $('.global-nav').toggleClass('is-active');
  });
  $('.hamburger__list').click(function () {
    $('.hamburger,.hamburger-btn').removeClass('active');
  });

});
