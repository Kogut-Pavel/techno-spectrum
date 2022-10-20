'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    // const scrollLinks = document.querySelectorAll('li>a');
    
    //  for (const scrollLink of scrollLinks) {
    //    scrollLink.addEventListener('click', event => {
    //      event.preventDefault();
    //      const id = scrollLink.getAttribute('href');
    //      document.querySelector(id).scrollIntoView({
    //        behavior: 'smooth',
    //        block: 'start',
    //        });
    //    });
    //   }
  
    let arrowUp = document.querySelector('.up');

    arrowUp.addEventListener('click', () => {
      document.querySelector('body').scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });


    // Инициализация и настройка slick slider в блоке "Наши объекты"
    $('.slick-slider').slick({
        autoplay: true,
        dots: true,
        pauseOnHover: true,
        arrows: false,
        dotsClass: 'our-objects__dots',
    });

    // Инициализация и настройка slick slider на странице "Наши объекты"
    $('.objects-slider').slick({
      centerMode: true,
      centerPadding: "0px",
      slidesToShow: 3,
      infinite: true,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev slick-arrow"><img src="assets/images/icons/arrow-left.svg"></button>',
      nextArrow: '<button type="button" class="slick-next slick-arrow"><img src="assets/images/icons/arrow-right.svg"></button>',
      appendArrows: $('.objects-slider'),
      speed: 700,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
          }
        }],
    });
    
    // Инициализация и настройка lightgallery в блоке "Лицензия"
    lightGallery(document.getElementById('lightgallery'), {
      licenseKey: 'your_license_key',
      speed: 500,
      hideScrollbar: true,
    });
  });


  