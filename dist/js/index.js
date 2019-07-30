'use strict';

$(function () {

  // 头部菜单
  $('.header2 span.menu').click(function () {
    var $this = $(this);
    $this.toggleClass('closemenu');
    $('.hidemenu').toggle();
  });

  // 问答切换
  $('.questop span').click(function () {
    var $this = $(this);
    $this.addClass('cur').siblings().removeClass('cur');
    $this.parent().parent().find('.qlist').removeClass('qlistshow');
    $this.parent().parent().find('.qlist').eq($this.index()).addClass('qlistshow');
  });

  //头部悬浮
  $(window).scroll(function () {
    if ($('.quesw').size() > 0) {
      if ($(this).scrollTop() > $('.quesw').height() + $('.header2').height()) {
        $('.quesw').addClass('hf');
      } else {
        $('.quesw').removeClass('hf');
      }
    }
  });
});