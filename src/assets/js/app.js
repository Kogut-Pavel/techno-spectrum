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
    
    // Инициализация и настройка lightgallery в блоке "Лицензия"
    lightGallery(document.getElementById('lightgallery'), {
      licenseKey: 'your_license_key',
      speed: 500,
      hideScrollbar: true,
    });
  });

    