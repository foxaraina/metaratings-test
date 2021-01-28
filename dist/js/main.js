/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lazysizes */ "./node_modules/lazysizes/lazysizes.js");
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lazysizes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lazysizes_plugins_parent_fit_ls_parent_fit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lazysizes/plugins/parent-fit/ls.parent-fit */ "./node_modules/lazysizes/plugins/parent-fit/ls.parent-fit.js");
/* harmony import */ var lazysizes_plugins_parent_fit_ls_parent_fit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lazysizes_plugins_parent_fit_ls_parent_fit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");




swiper__WEBPACK_IMPORTED_MODULE_3__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_3__["Navigation"], swiper__WEBPACK_IMPORTED_MODULE_3__["Pagination"], swiper__WEBPACK_IMPORTED_MODULE_3__["Lazy"], swiper__WEBPACK_IMPORTED_MODULE_3__["Autoplay"], swiper__WEBPACK_IMPORTED_MODULE_3__["Controller"]]);
jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  var additionalMenu = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".js-additional-menu");
  var additionalMenuLink = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".js-additional-menu > a");
  additionalMenuLink.on("click", function (e) {
    e.preventDefault();
  });
  additionalMenu.on("mouseenter", function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass("is-active");
  });
  additionalMenu.on("mouseleave", function () {
    additionalMenu.removeClass("is-active");
  }); // Mobile menu

  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() < 940) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".js-additional-menu .top-menu__submenu-item").each(function () {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(".top-menu").append(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
    });
  }

  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".mobile-menu-toggle").on("click", function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".header__menu").addClass("is-open");
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".top-menu").append("<button type='button' class='top-menu__close'><span class='icon-close'></span></button>");
    jquery__WEBPACK_IMPORTED_MODULE_0___default()("body").append("<div class='menu-overlay'></div>");
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).on("click", ".menu-overlay, .top-menu__close", function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".header__menu").removeClass("is-open");
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".menu-overlay").remove();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".top-menu__close").remove();
  });

  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(".js-products-slider").length) {
    var slider = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".js-products-slider");

    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() > 480) {
      new swiper__WEBPACK_IMPORTED_MODULE_3__["default"](".js-products-slider", {
        slidesPerView: "auto",
        spaceBetween: 20,
        navigation: {
          nextEl: slider.siblings(".swiper-button-next")[0],
          prevEl: slider.siblings(".swiper-button-prev")[0]
        }
      });
    }
  }

  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(".js-vacancies-slider").length) {
    var _slider = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".js-vacancies-slider");

    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).width() > 480) {
      new swiper__WEBPACK_IMPORTED_MODULE_3__["default"](".js-vacancies-slider", {
        slidesPerView: "auto",
        spaceBetween: 20,
        navigation: {
          nextEl: _slider.siblings(".swiper-button-next")[0],
          prevEl: _slider.siblings(".swiper-button-prev")[0]
        }
      });
    }
  }

  var ourTeamItems = document.querySelectorAll(".our-team__item");
  var collapseTeamBtn = document.querySelector(".js-collapse-team");
  ourTeamItems.forEach(function (item, index) {
    if (index > 10) {
      item.classList.add("hidden");
    }
  });
  collapseTeamBtn.addEventListener("click", function () {
    if (!collapseTeamBtn.classList.contains("hidden")) {
      ourTeamItems.forEach(function (item) {
        item.classList.remove("hidden");
      });
      collapseTeamBtn.classList.add("hidden");
    }
  }); //Ymap start

  var mapEl = document.querySelector("#map-yandex");
  var spinner = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".ymap-container").children(".loader");
  var check_if_load = 0;
  var myMapTemp, myPlacemarkTemp;

  var scrollListener = function scrollListener() {
    delayLoadMap(mapEl);
  };

  var delayLoadMap = function delayLoadMap(item) {
    var checkMapVisible = visible(item);

    if (checkMapVisible) {
      checkLoadMap();
    }
  };

  var checkLoadMap = function checkLoadMap() {
    if (!check_if_load) {
      check_if_load = true;
      spinner.addClass("is-active");
      loadScript("https://api-maps.yandex.ru/2.1/?apikey=85ef82b5-3d31-4212-926d-608292f1143a&lang=ru_RU", function () {
        ymaps.load(init);
      });
    }
  };

  function init() {
    var myMapTemp = new ymaps.Map("map-yandex", {
      center: [55.650146, 37.539620],
      zoom: 15,
      controls: []
    });
    myMapTemp.behaviors.disable("scrollZoom");
    var myPlacemarkTemp = new ymaps.Placemark([55.650146, 37.539620], {
      balloonContent: ""
    }, {
      iconLayout: "default#imageWithContent",
      iconImageHref: "img/map-marker.svg",
      iconImageSize: [38, 54],
      iconImageOffset: [-19, -50]
    });
    myMapTemp.geoObjects.add(myPlacemarkTemp);
    var layer = myMapTemp.layers.get(0).get(0);
    waitForTilesLoad(layer).then(function () {
      spinner.removeClass("is-active");
    });
    window.removeEventListener("scroll", scrollListener, false);
  }

  var visible = function visible(target) {
    // Все позиции элемента
    var targetPosition = {
      top: window.pageYOffset + target.getBoundingClientRect().top,
      left: window.pageXOffset + target.getBoundingClientRect().left,
      right: window.pageXOffset + target.getBoundingClientRect().right,
      bottom: window.pageYOffset + target.getBoundingClientRect().bottom
    },
        // Получаем позиции окна
    windowPosition = {
      top: window.pageYOffset,
      left: window.pageXOffset,
      right: window.pageXOffset + document.documentElement.clientWidth,
      bottom: window.pageYOffset + document.documentElement.clientHeight
    };
    var checkVisability = false;

    if (targetPosition.bottom - 200 > windowPosition.top && targetPosition.top - 200 < windowPosition.bottom && targetPosition.right - 200 > windowPosition.left && targetPosition.left - 200 < windowPosition.right) {
      checkVisability = true;
      return checkVisability;
    } else {
      return checkVisability;
    }
  };

  function waitForTilesLoad(layer) {
    return new ymaps.vow.Promise(function (resolve, reject) {
      var tc = getTileContainer(layer),
          readyAll = true;
      tc.tiles.each(function (tile, number) {
        if (!tile.isReady()) {
          readyAll = false;
        }
      });

      if (readyAll) {
        resolve();
      } else {
        tc.events.once("ready", function () {
          resolve();
        });
      }
    });
  }

  function getTileContainer(layer) {
    for (var k in layer) {
      if (layer.hasOwnProperty(k)) {
        if (layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer || layer[k] instanceof ymaps.layer.tileContainer.DomContainer) {
          return layer[k];
        }
      }
    }

    return null;
  }

  function loadScript(url, callback) {
    var script = document.createElement("script");

    if (script.readyState) {
      //IE
      script.onreadystatechange = function () {
        if (script.readyState == "loaded" || script.readyState == "complete") {
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {
      script.onload = function () {
        callback();
      };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  }

  window.addEventListener("scroll", scrollListener, false);
});

/***/ })

/******/ });
//# sourceMappingURL=main.js.map