import $ from "jquery";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
import Swiper, {Lazy, Navigation, Pagination, Autoplay, Controller} from "swiper";
Swiper.use([Navigation, Pagination, Lazy, Autoplay, Controller]);



$(document).ready(function () {
  const additionalMenu = $(".js-additional-menu");
  const additionalMenuLink = $(".js-additional-menu > a");
  additionalMenuLink.on("click", function (e) {
    e.preventDefault();
  });
  additionalMenu.on("mouseenter", function () {
    $(this).addClass("is-active");

  });
  additionalMenu.on("mouseleave", function () {
    additionalMenu.removeClass("is-active");

  });

  // Mobile menu
  if($(window).width() < 940) {
    $(".js-additional-menu .top-menu__submenu-item").each(function () {
      $(".top-menu").append($(this));
    });
  }
  $(".mobile-menu-toggle").on("click", function () {
    $(".header__menu").addClass("is-open");
    $(".top-menu").append("<button type='button' class='top-menu__close'><span class='icon-close'></span></button>");
    $("body").append("<div class='menu-overlay'></div>");
  });
  $(document).on("click", ".menu-overlay, .top-menu__close", function () {
    $(".header__menu").removeClass("is-open");
    $(".menu-overlay").remove();
    $(".top-menu__close").remove();
  });
  if($(".js-products-slider").length) {
    let slider = $(".js-products-slider");
    if ($(window).width() > 480) {
      new Swiper(".js-products-slider", {
        slidesPerView: "auto",
        spaceBetween: 20,
        navigation: {
          nextEl: slider.siblings(".swiper-button-next")[0],
          prevEl: slider.siblings(".swiper-button-prev")[0],
        }
      });
    }
  }

  if($(".js-vacancies-slider").length) {
    let slider = $(".js-vacancies-slider");
    if ($(window).width() > 480) {
      new Swiper(".js-vacancies-slider", {
        slidesPerView: "auto",
        spaceBetween: 20,
        navigation: {
          nextEl: slider.siblings(".swiper-button-next")[0],
          prevEl: slider.siblings(".swiper-button-prev")[0],
        }
      });
    }
  }

  let ourTeamItems = document.querySelectorAll(".our-team__item");
  let collapseTeamBtn = document.querySelector(".js-collapse-team");
  ourTeamItems.forEach((item,index) => {
    if(index > 10) {
      item.classList.add("hidden");
    }
  });
  collapseTeamBtn.addEventListener("click", () => {
    if(!collapseTeamBtn.classList.contains("hidden")) {
      ourTeamItems.forEach(item => {
        item.classList.remove("hidden");
      });
      collapseTeamBtn.classList.add("hidden");
    }

  });



  //Ymap start
  const mapEl = document.querySelector("#map-yandex");
  let spinner = $(".ymap-container").children(".loader");
  let check_if_load = 0;
  let myMapTemp, myPlacemarkTemp;
  const scrollListener = function () {
    delayLoadMap(mapEl);
  };
  const delayLoadMap = (item) => {
    const checkMapVisible = visible (item);

    if(checkMapVisible) {
      checkLoadMap();
    }
  };

  const checkLoadMap = () => {
    if (!check_if_load) {
      check_if_load = true;
      spinner.addClass("is-active");
      loadScript("https://api-maps.yandex.ru/2.1/?apikey=85ef82b5-3d31-4212-926d-608292f1143a&lang=ru_RU", function(){
        ymaps.load(init);
      });
    }
  };
  function init () {
    let myMapTemp = new ymaps.Map("map-yandex", {
      center: [55.650146, 37.539620],
      zoom: 15,
      controls: []
    });
    myMapTemp.behaviors.disable("scrollZoom");

    let myPlacemarkTemp = new ymaps.Placemark([55.650146, 37.539620], {
      balloonContent: "",
    }, {
      iconLayout: "default#imageWithContent",
      iconImageHref: "img/map-marker.svg",
      iconImageSize: [38, 54],
      iconImageOffset: [-19, -50],
    });

    myMapTemp.geoObjects.add(myPlacemarkTemp);

    let layer = myMapTemp.layers.get(0).get(0);

    waitForTilesLoad(layer).then(function() {
      spinner.removeClass("is-active");
    });
    window.removeEventListener("scroll", scrollListener, false);
  }

  const visible = function (target) {
    // Все позиции элемента
    const targetPosition = {
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
    let checkVisability = false;

    if (targetPosition.bottom - 200 > windowPosition.top &&
        targetPosition.top - 200 < windowPosition.bottom &&
        targetPosition.right - 200 > windowPosition.left &&
        targetPosition.left - 200 < windowPosition.right) {
      checkVisability = true;
      return checkVisability;

    } else {
      return checkVisability;
    }
  };

  function waitForTilesLoad(layer) {
    return new ymaps.vow.Promise(function (resolve, reject) {
      let tc = getTileContainer(layer), readyAll = true;
      tc.tiles.each(function (tile, number) {
        if (!tile.isReady()) {
          readyAll = false;
        }
      });
      if (readyAll) {
        resolve();
      } else {
        tc.events.once("ready", function() {
          resolve();
        });
      }
    });
  }

  function getTileContainer(layer) {
    for (let k in layer) {
      if (layer.hasOwnProperty(k)) {
        if (
          layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
            || layer[k] instanceof ymaps.layer.tileContainer.DomContainer
        ) {
          return layer[k];
        }
      }
    }
    return null;
  }

  function loadScript(url, callback){

    let script = document.createElement("script");

    if (script.readyState){  //IE
      script.onreadystatechange = function(){
        if (script.readyState == "loaded" ||
            script.readyState == "complete"){
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {
      script.onload = function(){
        callback();
      };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  }

  window.addEventListener("scroll", scrollListener, false);

});
