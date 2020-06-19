$(document).ready(function () {
  const mMenuBtn = $(".m-menu-button");
  const mMenu = $(".m-menu");
  mMenuBtn.on("click", function () {
    mMenu.toggle("active");
    $("body").toggleClass("no-scroll");
  });
  var mySwiper = new Swiper(".swiper-container", {
    slidesPerView: 4,
    spaceBetween: 25,
    loop: true,
    breakpoints: {
      992: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 2,
      },
    },
  });
});
