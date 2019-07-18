$(document).ready(function () {
  $('.news-button').click(function (){
    $('.news-page').css('display', 'block'),
    $('.background').css('display', 'block')
  });
  console.log('Я то работаю!');
  
  $('.hero-slider').slick({
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    dots: false,
    dotsClass: 'hero-dots',
    adaptiveHeight: true
    
  });

});