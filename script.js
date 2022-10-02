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

$(function () {
  $(window).on("scroll", function () {
    if (0 < $(this).scrollTop()) {
      $(".js-header").addClass("none");
      $(".js-underlayer-header").removeClass("none");
      $(".js-underlayer-header").load("room.html .l-underlayer-header");
    } else {
      $(".js-header").removeClass("none");
      $(".js-underlayer-header").addClass("none");
    }
  });
});

// $(function () {
//   let select = $(".p-news__select > span");
//   select.on("click", function () {
//     let index = select.index($(this));
//     $(".p-cards").removeClass("is-active").eq(index).addClass("is-active");
//   });
// });

$(function () {
  let select = $(".p-news__select > span");
  select.on("click", function () {
    let index = select.index($(this));
    $(".p-cards").removeClass("is-active").eq(index).addClass("is-active");
    select.removeClass("is-active").eq(index).addClass("is-active");
  });
});
