import { menuBtn, menuBottom, allPopupBtns, popup, closePopup } from '../utils/constants.js';
import { heroSwiper, recommendSwiper, newsSwiper } from '../components/swipers.js';

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('header__menu-btn_opened');
  menuBottom.classList.toggle('header__bottom_closed');
});

allPopupBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    popup.classList.add('popup_opened');
  })
});

closePopup.addEventListener('click', () => {
  popup.classList.remove('popup_opened');
});

popup.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('popup_opened')) {
    popup.classList.remove('popup_opened');
  }
});
