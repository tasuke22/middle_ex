AOS.init({
  offset: 100,
  delay: 0,
  duration: 500,
  easing: "ease-in",
  once: true,
});

$(function () {
  $(".js-question")
    .on("click", function () {
      $(this).next().slideToggle();
    })
    .eq(0)
    .trigger("click");
});

$(function () {
  $('a[href^="#"]').click(function () {
    let speed = 400;
    let adjust = -100;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top + adjust;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});

const swiper = new Swiper(".swiper", {
  loop: true,
  centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  speed: 2000,
  effect: "slide",
  touchStartForcePreventDefault: false,
  passiveListeners: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    375: {
      // 375 ~ 780
      slidesPerView: 2,
      spaceBetween: 20,
    },
    780: {
      // 780 ~ 960
      slidesPerView: 3,
      spaceBetween: 20,
    },
    960: {
      // 960 ~
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});

$(document).ready(function () {
  const $submitBtn = $(".js-submit");
  $("#form input,#form textarea").on("change", function () {
    if (
      $('#form input[type="name"]').val() !== "" &&
      $('#form input[type="email"]').val() !== "" &&
      $('#form input[type="checkbox"]').val() !== "" &&
      $("#form #privacy-check").prop("checked") === true
    ) {
      $submitBtn.prop("disabled", false);
    } else {
      $submitBtn.prop("disabled", true);
    }
  });
});

$(function () {
  $(".js-drawer-btn").on("click", function () {
    $(this).toggleClass("open");
    $(".js-drawer-nav").toggleClass("open");
  });
});

$(".header__list a[href]").on("click", function (event) {
  $(".js-drawer-btn").trigger("click");
});
