import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js';

const heroSwiper = new Swiper('.hero__swiper', {
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".hero__pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
  },
  speed: 1000,
});

const recommendSwiper = new Swiper('.recommend__swiper', {
  grabCursor: true,
  slidesPerView: 4,
  spaceBetween: 21,
  pagination: {
    el: ".recommend__swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".recommend__swiper-btn_next",
    prevEl: ".recommend__swiper-btn_back",
  },
});

const newsSwiper = new Swiper('.news__swiper', {
  grabCursor: true,
  slidesPerView: 4,
  spaceBetween: 20,
  pagination: {
    el: ".news__pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".news__swiper-btn_next",
    prevEl: ".news__swiper-btn_back",
  },
});
