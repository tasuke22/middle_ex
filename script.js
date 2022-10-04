// AOS.init({
//   offset: 100,
//   delay: 0,
//   duration: 500,
//   easing: "ease-in",
//   once: true,
// });

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

// $(function () {
//   $(".js-drawer-btn").on("click", function () {
//     $(this).toggleClass("open");
//     $(".js-drawer-nav").toggleClass("open");
//   });
// });

// $(".header__list a[href]").on("click", function (event) {
//   $(".js-drawer-btn").trigger("click");
// });

// タブの切替
$(function () {
  let select = $(".p-news__select > span");
  select.on("click", function () {
    let index = select.index($(this));
    $(".p-cards").removeClass("is-active").eq(index).addClass("is-active");
    select.removeClass("is-active").eq(index).addClass("is-active");
  });
});

// ハンバーガーメニュー
$(function () {
  $(".js-drawer-btn").on("click", function () {
    $(this).toggleClass("open");
    $(".js-drawer-nav").toggleClass("open");
  });
});

$(".header__list a[href]").on("click", function (event) {
  $(".js-drawer-btn").trigger("click");
});

// なにをしたら横からでてくるんだっけ？

$(window).on("scroll", function () {
  if (50 < $(this).scrollTop()) {
    $(".js-drawer-btn").addClass("black");
    $(".p-header__title").addClass("black");
    $(".js-header-logo").addClass("none");
    $(".js-header-logo--sub").addClass("black");
    $(".p-header").addClass("black");
    $(".p-gnav__list").addClass("black");
  } else {
    $(".js-drawer-btn").removeClass("black");
    $(".p-header__title").removeClass("black");
    $(".js-header-logo").removeClass("none");
    $(".js-header-logo--sub").removeClass("black");
    $(".p-header").removeClass("black");
    $(".p-gnav__list").removeClass("black");
  }
});

$(window).on("scroll", function () {
  if (
    50 < $(window).scrollTop() &&
    $(".p-gnav__list").hasClass("black") &&
    $(".js-drawer-btn").hasClass("black") &&
    $(".js-drawer-btn").hasClass("open")
  ) {
    $(".p-gnav__list").removeClass("black");
    $(".js-drawer-btn").removeClass("black");
  }
});

$(".js-drawer-btn").on("click", function () {
  {
    $(".p-gnav__list").removeClass("black");
    $(".js-drawer-btn").removeClass("black");
  }
});
