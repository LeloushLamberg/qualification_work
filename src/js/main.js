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
    slidesToScroll: 1,
    accessibility: false,
    adaptiveHeight: false,
    autoplay: true,
    autoplaySpeed: 2500, 
    arrows: false,
    dots: true,
    dotsClass: 'slick-dots',
    focusOnSelect: true,
    infinite: true,
    adaptiveHeight: true
  });

});
