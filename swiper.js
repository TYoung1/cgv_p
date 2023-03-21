var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    slidesPerGroup : 5,
    centeredSlides: false,
   
    slidesPerView:5,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper(".mySwiper2", {
    spaceBetween: 0,
    slidesPerGroup : 1,
    centeredSlides: false,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    slidesPerView:3,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  