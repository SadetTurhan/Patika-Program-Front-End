(function() {
 'use strict';

 var camera = new Swiper('#camera .swiper',{
    speed: 600,
    spaceBetween: 12,
    navigation: {
        enabled: true,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
 })
})();