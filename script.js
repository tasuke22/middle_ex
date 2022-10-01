AOS.init({
  offset: 100,
  delay: 0,
  duration: 500,
  easing: "ease-in",
  once: true,
});

// $(function () {
//   $('a[href^="#"]').click(function () {
//     let speed = 400;
//     let adjust = -100;
//     let href = $(this).attr("href");
//     let target = $(href == "#" || href == "" ? "html" : href);
//     let position = target.offset().top + adjust;
//     $("body,html").animate({ scrollTop: position }, speed, "swing");
//     return false;
//   });
// });

$(function () {
  $(".js-drawer-btn").on("click", function () {
    $(this).toggleClass("open");
    $(".js-drawer-nav").toggleClass("open");
  });
});

$(".header__list a[href]").on("click", function (event) {
  $(".js-drawer-btn").trigger("click");
});

// スクロールするとロゴの色変更
$(function () {
  $(window).on("scroll", function () {
    if (0 < $(this).scrollTop()) {
      $(".js-header").addClass("black-text");
      $(".js-header-logo").addClass("js-header-none");
      $(".js-header-logo").addClass("white-logo");
      $(".js-header-logo-ul").addClass("black-logo");
    } else {
      $(".js-header").removeClass("black-text");
      $(".js-header-logo").removeClass("js-header-none");
      $(".js-header-logo").removeClass("white-logo");
      $(".js-header-logo-ul").removeClass("black-logo");
    }
  });
});
