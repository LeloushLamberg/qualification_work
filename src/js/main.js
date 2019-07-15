$(document).ready(function () {

  $('.hero-slider').slick({
    
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    adaptiveHeight: true,
    dotsClass: 'hero-dots',
    focusOnSelect: true,
      responsive: [
         {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1, 
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
          }
        },
      ]

  });

  $('.feedback-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    accessibility: false,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2500, 
    arrows: false,
    dotsClass: 'slick-dots',
    focusOnSelect: true,
    infinite: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1220,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  });
  
});
