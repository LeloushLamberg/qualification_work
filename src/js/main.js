$(document).ready(function () {
  $('.hero-slider').slick({
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    dots: true,
    dotsClass: 'slick-dots',
    adaptiveHeight: true
    
  });
  $('.feedback-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    accessibility: false,
    dots: true,
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
  $("#offer-form").validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      phone: {
        required: true,
        minlength: 10
      }
    },
    messages: {
      name: {
        required: "Введите своё имя",
        minlength: "Введите полное имя"
      },
      phone: {
        required: "Введите свой телефон",
        minlength: "Мало цифр. Добавьте код города"
      }
    }
  });
  //  $("#phone").mask("8 (999) 999-9999");
   
   $('.news-button').click(function (){
    $('.news-page').css('display', 'block'),
    $('.background').css('display', 'block')
  });
   $('.navbar-menu-link').click(function () {
     $(this).toggleClass('navbar-menu-link_active'),
     $('.navbar-links').toggleClass('navbar-links_active'),
     $('navbar-links_active').show(5000)
   });
   $('.navbar-menu-link_active').click(function () {
     $(this).removeClass('navbar-menu-link_active'),
     $('.navbar-links').removeClass('navbar-links_active')
   });
   $('.navbar-links__item').click(function () {
     $('.navbar-menu-link_active').removeClass('navbar-menu-link_active'),
      $('.navbar-links').removeClass('navbar-links_active')
   });
   console.log('ты там долго ещё?');
});
