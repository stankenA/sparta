import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js';

const menuBtn = document.querySelector('.header__menu-btn');
const menuBottom = document.querySelector('.header__bottom');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('header__menu-btn_opened');
  menuBottom.classList.toggle('header__bottom_closed');
});

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
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 1025px
    1024: {
      slidesPerView: 3,
      spaceBetween: 21,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 21,
    }
  },
  grabCursor: true,
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
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 1025px
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 20,
    }
  },
  grabCursor: true,
  pagination: {
    el: ".news__pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".news__swiper-btn_next",
    prevEl: ".news__swiper-btn_back",
  },
});
