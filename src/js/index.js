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

  // header 悬浮置顶
  var headerTop = $('.header2').offset().top;
  var headerSite = '<div class="header-site"></div>';
  $('.wrap').prepend(headerSite);

  $(window).scroll(function () {
    if (headerTop < $(this).scrollTop()) {
      $('.header2').css(
        {
          "width": "10rem",
          "backgroundColor": "#ffffff",
          "zIndex": "20",
          "position": "fixed",
          'top': '0',
          "boxShadow": "0 0 3px rgba(0, 0, 0, 0.2)"
        }
      );
      $('.header-site').css('height', '1.17333rem').show();
    } else {
      $('.header2').css('position', 'relative');
      $('.header-site').hide();
    }
  });
});