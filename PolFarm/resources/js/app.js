

require('./bootstrap');

window.Vue = require('vue');

Vue.component('products', require('./components/Products.vue').default);

import SwiperSlide from './moduls/swiper.js';

import Inputmask from "inputmask";

import AOS from "aos";

// import Nprogress from "nprogress";

const app = new Vue({
    el: '#wrapper',
    data: {
    },
    methods: {
        // Method scroll down
        handleScroll: () => {
            window.scrollY != 0?
                $('.header__nav').addClass('scroll-down'):
                $('.header__nav').removeClass('scroll-down');
            window.scrollY >= 3460?
                $('#clients').animate({ num: 1200 }, {
                    duration: 2000,
                    step: function (num){
                        this.innerHTML = (num).toFixed(0)
                    }
                }):
                $('#clients').text('1200');
        },
        // Mehod scrolle to block "call"
        scrollToCall: (e) => {
            $('html, body').animate({
            scrollTop: $(`${e}`).offset().top - 200
            }, 1100);
        },
        // Method active animation burger
        activeBurger: () => {
            $('.menu__burger').toggleClass('active');
            $('.menu__sidebar').toggleClass('active');
        },
        // Method active language buttons
        checkLanguage: (e) => {
            $('.menu__language span').removeClass('active');
            $('.sidebar__language span').removeClass('active');
            $(`.${e.target.className}`).addClass('active');
        }
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    mounted() {
        window.scrollY != 0?
            $('.header__nav').addClass('scroll-down'):
            $('.header__nav').removeClass('scroll-down');
        $('.sidebar__footer').append($('.list').html());
        $('.sidebar__language').append($('.menu__language').html());
        $('.sidebar__tel').append($('.menu__tel').html());
    }
});

$(() => {
    // NProgress ---  don't work properly
    // NProgress.start();
    // $(window).on('load', function(){ NProgress.done()});
    // Animation page
    AOS.init();
    // InputMask
    Inputmask("+38 (999) 999-99-99").mask($('#tel'));
    // Swiper
    SwiperSlide();

})