"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./static/js/orbitEffect.js");
// import Swiper JS
var swiper_1 = require("swiper");
// import Swiper styles
require("swiper/css");
function SwiperInit() {
    var swiperEl = document.querySelector("swiper-container");
    var swiper = new swiper_1.default(swiperEl, {
        direction: "horizontal",
        loop: true,
        pagination: {
            el: ".swiper-pagination",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        scrollbar: {
            el: ".swiper-scrollbar",
        },
    });
    console.log(swiper);
}
SwiperInit();
