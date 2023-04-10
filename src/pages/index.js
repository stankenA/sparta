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
