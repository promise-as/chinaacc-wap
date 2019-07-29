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

  // 头部固定
  var headerTop = $('.header2').offset().top; // 头部距离顶部距离
  window.addEventListener("scroll", function (e) {
    // 滚动的距离
    var rollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var distance = headerTop - rollTop; // 距离差
    if (distance < 0) {
      $('.header2').css(
        {
          "width": "100%",
          "backgroundColor": "#ffffff",
          "zIndex": "20",
          "position": "fixed",
          "boxShadow": "0 1px 3px rgba(0, 0, 0, 0.2)"
        }
      );
    } else {
      $('.header2').css(
        {
          "position": "relative",
          "boxShadow": "none"
        }
      );
    }
  });
});