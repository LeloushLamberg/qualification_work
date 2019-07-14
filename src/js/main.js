$(document).ready(function () {

  $('.hero-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    adaptiveHeight: true,
    dotsClass: 'hero-dots',
    focusOnSelect: true
  });

  $('.feedback-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
  });

});
