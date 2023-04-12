import { menuBtn, menuBottom } from '../utils/constants.js';
import { heroSwiper, recommendSwiper, newsSwiper } from '../components/swipers.js';

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('header__menu-btn_opened');
  menuBottom.classList.toggle('header__bottom_closed');
});
