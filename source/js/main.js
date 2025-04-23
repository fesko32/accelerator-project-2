import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";


Swiper.use([Pagination, Navigation]);

const swiper = new Swiper('.hero__swiper.swiper', {
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
  grabCursor: true,
  loop: false,
  preloadImages: false,
  initialSlide: 0,
  lazy: true,
  navigation: {
    prevEl: '.tours__button.arrow-button--prev',
    nextEl: '.tours__button.arrow-button--next',
  },

  breakpoints: {
    336: {
      slidesPerView: 1
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 18
    },

    1440: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});
