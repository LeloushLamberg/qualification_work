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
    autoplay: true,
    autoplaySpeed: 1000,
    dots: true,
    arrows: false,
    infinite: true,
    fade: true,
    dotsClass: 'feedback-dots',
    focusOnSelect: true,
    adaptiveHeight: true
  });
    
  });
    