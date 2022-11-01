/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\n  document.addEventListener('DOMContentLoaded', () => {\r\n    // const scrollLinks = document.querySelectorAll('li>a');\r\n    \r\n    //  for (const scrollLink of scrollLinks) {\r\n    //    scrollLink.addEventListener('click', event => {\r\n    //      event.preventDefault();\r\n    //      const id = scrollLink.getAttribute('href');\r\n    //      document.querySelector(id).scrollIntoView({\r\n    //        behavior: 'smooth',\r\n    //        block: 'start',\r\n    //        });\r\n    //    });\r\n    //   }\r\n  \r\n    let arrowUp = document.querySelector('.up');\r\n\r\n    arrowUp.addEventListener('click', () => {\r\n      document.querySelector('body').scrollIntoView({\r\n        behavior: 'smooth',\r\n        block: 'start',\r\n      });\r\n    });\r\n\r\n\r\n    // Инициализация и настройка slick slider в блоке \"Наши объекты\"\r\n    $('.slick-slider').slick({\r\n        autoplay: true,\r\n        dots: true,\r\n        pauseOnHover: true,\r\n        arrows: false,\r\n        dotsClass: 'our-objects__dots',\r\n    });\r\n\r\n    // Инициализация и настройка slick slider на странице \"Наши объекты\"\r\n    $('.objects-slider').slick({\r\n      centerMode: true,\r\n      centerPadding: \"0px\",\r\n      slidesToShow: 3,\r\n      infinite: true,\r\n      arrows: true,\r\n      prevArrow: '<button type=\"button\" class=\"slick-prev slick-arrow\"><img src=\"assets/images/icons/arrow-left.svg\"></button>',\r\n      nextArrow: '<button type=\"button\" class=\"slick-next slick-arrow\"><img src=\"assets/images/icons/arrow-right.svg\"></button>',\r\n      appendArrows: $('.objects-slider'),\r\n      speed: 700,\r\n      responsive: [\r\n        {\r\n          breakpoint: 769,\r\n          settings: {\r\n            slidesToShow: 1,\r\n            centerMode: false,\r\n          }\r\n        }],\r\n    });\r\n    \r\n  // Инициализация и настройка lightgallery в блоке \"Лицензия\"\r\n    lightGallery(document.getElementById('lightgallery'), {\r\n      licenseKey: 'your_license_key',\r\n      speed: 500,\r\n      hideScrollbar: true,\r\n      \r\n    });\r\n\r\n    if (screen.width < 768) {\r\n      $('.licence__images').slick({\r\n        arrows: false,\r\n        slidesToShow: 1,\r\n        autoplay: true,\r\n      });\r\n    }\r\n  });\r\n\r\n \r\n\r\n  \n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ })

/******/ });