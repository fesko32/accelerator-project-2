import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";


const swiper = new Swiper('.hero__swiper.swiper', {
  modules: [Pagination, Navigation],
  pagination: {

    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return `<button class="${className} custom-bullet" type="button"></button>`;
    },
  },
});

const swiper2 = new Swiper('.tours__swiper.swiper', {
  modules: [Navigation],
  loop: false,
  initialSlide: 0,
  preloadImages: false,
  lazy: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  navigation: {
    nextEl: '.arrow-button--next',
    prevEl: '.arrow-button--prev',
  },
  breakpoints: {
    336: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 18,
    },
    1440: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 30,
    },
  },
});


