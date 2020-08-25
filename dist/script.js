//Swiper slider initialize

var swiper = new Swiper('.swiper-container', {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        autoHeight: true,
    },
    loop: true,
});