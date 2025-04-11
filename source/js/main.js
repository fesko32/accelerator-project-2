import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';


Swiper.use([Pagination, Navigation]);

const swiper = new Swiper('.swiper', {
  pagination: {

    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return `<button class="${className} custom-bullet" type="button"></button>`;
    },
  },
});
