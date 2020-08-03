import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

function SwiperSlide() {
    let mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        // slidesPerView: 1,
        // spaceBetween: 10,
        slidesPerView: 'auto',
        spaceBetween: -10,
        loop:true,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            0: {
                // slidesPerView: 1,
                spaceBetween: -20
            },
            620: {
                // slidesPerView: 2,
                spaceBetween: -10
            },
            1000: {
              // slidesPerView: 3,
              spaceBetween: 0
            },
            1400: {
              // slidesPerView: 4,
              spaceBetween: 10
            }
          }
    })
} 

export default SwiperSlide;