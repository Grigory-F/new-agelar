let scrollButton = document.querySelector(".upbtn");
let mainWrap = document.querySelector(".main");
/* window.addEventListener("scroll", () => {
  console.log(window.scrollY);
}); */

let tarrifsContentMoreButton = document.querySelectorAll(
  ".tarrifs-content__more-button"
);
let tarrifsTableHidden = document.querySelectorAll(".tarrifs-table--hidden");

tarrifsContentMoreButton.forEach((tarrifsContentMoreButtonThis, index) => {
  tarrifsContentMoreButtonThis.addEventListener("click", () => {
    tarrifsTableHidden.forEach((elem, index) => {
      elem.classList.remove("tarrifs-table--hidden");
      /* tarrifsContentMoreButtonThis[index].classList.add("d-none"); */
    });
    delButtons();
  });
});

function delButtons(params) {
  tarrifsContentMoreButton.forEach((elem, index) => {
    elem.classList.add("d-none");
  });
}

mainWrap.addEventListener("scroll", function (e) {
  if (mainWrap.scrollTop >= 500) {
    scrollButton.classList.add("upbtn--active");
  } else {
    scrollButton.classList.remove("upbtn--active");
  }
});

scrollButton.addEventListener("click", () => {
  mainWrap.scrollTo({ top: 0, behavior: "smooth" });
});

/* $(window).scroll(function () {
  if ($(this).scrollTop() > 500) {
      $('#upbtn').fadeIn();
  } else {
      $('#upbtn').fadeOut();
  }
});
$('#upbtn').click(function(){
  //window.scrollTo(0, 0);
  $("html, body").animate({ scrollTop: 0 }, "slow");
}); */

document.querySelectorAll(".btn-expand").forEach((elem, index) => {
  elem.addEventListener("click", (e) => {
    elem.classList.toggle("btn-expand--active");
  });
});

var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
let overflowNew = document.querySelector(".over-new");
let burgerButton = document.querySelector(".burger-button");
let sidebarClose = document.querySelector(".sidebar-close");
burgerButton.addEventListener("click", taggleButton);
let sidebar = document.querySelector(".sidebar");
function taggleButton() {
  this.classList.toggle("change");
  sidebar.classList.toggle("show");
  overflowNew.classList.add("active");
}

overflowNew.addEventListener("click", () => {
  burgerButton.classList.remove("change");
  sidebar.classList.remove("show");
  overflowNew.classList.remove("active");
});

sidebarClose.addEventListener("click", () => {
  burgerButton.classList.remove("change");
  sidebar.classList.remove("show");
  overflowNew.classList.remove("active");
});

new SimpleBar(document.getElementById("menu"));
new SimpleBar(document.getElementById("sidebar-scroll"));

const PartnersSlider = new Swiper(".partners-slider", {
  navigation: {
    nextEl: ".slider-partners-next",
    prevEl: ".slider-partners-prev",
  },
  slidesPerView: "auto",
  breakpoints: {
    320: {
      spaceBetween: 10,
    },
    575: {},

    992: {
      spaceBetween: 25,
    },
  },
});

const CertificatesSlider = new Swiper(".certificates-slider", {
  /* pagination: {
    el: ".swiper-slider-pag",
    clickable: true,
    renderBullet: function (index, className) {
      return `<a href="#" class="${className}">${index + 1}</a>`;
    },
  }, */

  navigation: {
    nextEl: ".slider-certificates-next",
    prevEl: ".slider-certificates-prev",
  },
  slidesPerView: "auto",
  breakpoints: {
    320: {
      spaceBetween: 15,
    },
    575: {},

    992: {
      spaceBetween: 30,
    },
  },
});

const StuffSlider = new Swiper(".slider-stuff", {
  slidesPerView: "auto",
  navigation: {
    nextEl: ".slider-stuff-next",
    prevEl: ".slider-stuff-prev",
  },
  breakpoints: {
    320: {
      spaceBetween: 0,
    },

    992: {
      spaceBetween: 15,
    },
  },
});

const SliderTech = new Swiper(".slider-tech", {
  slidesPerView: "auto",
  breakpoints: {
    320: {
      spaceBetween: 0,
    },

    992: {
      spaceBetween: 15,
    },
  },
});

const ServiceContentSlider = new Swiper(".service-content-slider", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".service-content-slider-next",
    prevEl: ".service-content-slider-prev",
  },
  pagination: {
    el: ".service-content-slider-pag",
    dynamicBullets: true,
    clickable: true,
    dynamicMainBullets: 5,
    renderBullet: function (index, className) {
      return `<a href="#" class="${className}">${index + 1}</a>`;
    },
  },
});

const SliderTop = new Swiper(".slider-top", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-slider-top",
    clickable: true,
    renderBullet: function (index, className) {
      return `<a href="#" class="${className}"></a>`;
    },
  },
});

/* tarrifs-slider */

const TarrifsSlider = new Swiper(".tarrifs-slider", {
  slidesPerView: "auto",

  breakpoints: {
    320: {
      spaceBetween: 15,
    },
    575: {},

    992: {
      spaceBetween: 30,
    },
  },
});

const QuizSlider = new Swiper(".quiz-slider", {
  slidesPerView: 1,
  autoHeight: true,
  allowTouchMove: false,
  pagination: {
    el: ".quiz-pag",
    clickable: true,
    renderBullet: function (index, className) {
      return `<div class="quiz-pag__box ${className}">
      <span>${index + 1}</span>
    </div><div class="quiz-pag__line"></div>`;
    },
  },
  breakpoints: {
    320: {
      spaceBetween: 15,
    },
    575: {},

    992: {
      spaceBetween: 30,
    },
  },
});

/* let quizPag = document.querySelector('.') */

QuizSlider.on("slideChange", handlerSlider);
function handlerSlider(slider) {
  elPag = slider.pagination.$el[0];
  widthSetPag = slider.pagination.$el[0].offsetWidth;
  widthContainerPag = document.querySelector(".quiz__cont-pag").offsetWidth;
  console.log(widthSetPag, widthContainerPag);
  elPag.style.transform = `translateX(${
    widthContainerPag / 2 - widthSetPag
  }px)`;
  console.log(widthSetPag / 5);
}

const ArticlesSlider = new Swiper(".articles-slider", {
  pagination: {
    el: ".swiper-slider-pag",
    clickable: true,
    renderBullet: function (index, className) {
      return `<a href="#" class="${className}">${index + 1}</a>`;
    },
  },

  navigation: {
    nextEl: ".swiper-button-prev",
    prevEl: ".swiper-button-next",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    575: {
      slidesPerView: 2,
    },

    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

const BudgeSliderMin = new Swiper(".budges-slider-min", {
  slidesPerView: "auto",
  breakpoints: {
    320: {
      spaceBetween: 0,
    },

    992: {
      spaceBetween: 15,
    },
  },
});

const BudgeSlider = new Swiper(".simple-budge-slider", {
  spaceBetween: 20,
  slidesPerView: "auto",
  breakpoints: {
    /* 320: {
        slidesPerView: 1.5,
        spaceBetween: 15,
      },
      575: {
        slidesPerView: 3.3,
      },
  
      992: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 5.5,
        spaceBetween: 30,
      }, */
  },
});

class ItcTabs {
  constructor(target, config) {
    const defaultConfig = {};
    this._config = Object.assign(defaultConfig, config);
    this._elTabs =
      typeof target === "string" ? document.querySelector(target) : target;
    this._elButtons = this._elTabs.querySelectorAll(".tabs__btn");
    this._elPanes = this._elTabs.querySelectorAll(".tabs__pane");
    this._eventShow = new Event("tab.itc.change");
    this._init();
    this._events();
  }
  _init() {
    this._elTabs.setAttribute("role", "tablist");
    this._elButtons.forEach((el, index) => {
      el.dataset.index = index;
      el.setAttribute("role", "tab");
      this._elPanes[index].setAttribute("role", "tabpanel");
    });
  }
  show(elLinkTarget) {
    const elPaneTarget = this._elPanes[elLinkTarget.dataset.index];
    const elLinkActive = this._elTabs.querySelector(".tabs__btn--active");
    const elPaneShow = this._elTabs.querySelector(".tabs__pane--show");
    if (elLinkTarget === elLinkActive) {
      return;
    }
    elLinkActive ? elLinkActive.classList.remove("tabs__btn--active") : null;
    elPaneShow ? elPaneShow.classList.remove("tabs__pane--show") : null;
    elLinkTarget.classList.add("tabs__btn--active");
    elPaneTarget.classList.add("tabs__pane--show");
    this._elTabs.dispatchEvent(this._eventShow);
    elLinkTarget.focus();
  }
  showByIndex(index) {
    const elLinkTarget = this._elButtons[index];
    elLinkTarget ? this.show(elLinkTarget) : null;
  }
  _events() {
    this._elTabs.addEventListener("click", (e) => {
      const target = e.target.closest(".tabs__btn");
      if (target) {
        e.preventDefault();
        this.show(target);
      }
    });
  }
}

const tabs = document.querySelectorAll(".tabs");
tabs.forEach((el, index) => {
  new ItcTabs(tabs[index]);
});

const reviewsTextSlider = new Swiper(".reviews-text-slider", {
  slidesPerView: "auto",
  grabCursor: true,
  breakpoints: {
    320: {
      spaceBetween: 15,
    },
    1200: {
      spaceBetween: 30,
    },
  },
});

const ReviewsVideoSlider = new Swiper(".reviews-video-slider", {
  slidesPerView: "auto",
  grabCursor: true,
  breakpoints: {
    320: {
      spaceBetween: 15,
    },
    1200: {
      spaceBetween: 30,
    },
  },
});
document.querySelectorAll(".tariff-btn").forEach((elem, index) => {
  elem.addEventListener("click", () => {
    textButton = elem.querySelector("span");
    if (textButton.textContent == "Что входит") {
      textButton.textContent = "Свернуть";
    } else {
      textButton.textContent = "Что входит";
    }
  });
});
document.querySelectorAll(".box-case").forEach((elem, index) => {
  const height = elem.clientHeight;
  const width = elem.clientWidth;
  elem.addEventListener("mousemove", (e) => {
    const xVal = e.layerX;

    const yVal = e.layerY;

    const yRotation = 10 * ((xVal - width / 2) / width);

    const xRotation = -20 * ((yVal - height / 2) / height);

    const string =
      "perspective(500px) scale(1.1) rotateX(" +
      xRotation +
      "deg) rotateY(" +
      yRotation +
      "deg)";

    elem.style.transform = string;
  });
  elem.addEventListener("mouseout", function () {
    elem.style.transform = "perspective(500px) scale(1) rotateX(0) rotateY(0)";
  });

  elem.addEventListener("mousedown", function () {
    elem.style.transform =
      "perspective(500px) scale(0.9) rotateX(0) rotateY(0)";
  });

  elem.addEventListener("mouseup", function () {
    elem.style.transform =
      "perspective(500px) scale(1.1) rotateX(0) rotateY(0)";
  });
});

//Определения размера ячеек блока "тарифы"
(function(document){
  let cellTarifs = document.querySelectorAll(".tarrifs-table > div");
  let maxHeightCell = 0;
  if(cellTarifs){
    cellTarifs.forEach(function(item){
      if(item.offsetHeight > maxHeightCell)
        maxHeightCell = item.offsetHeight;
    });

    cellTarifs.forEach(function(item){
      item.style.height = maxHeightCell + "px";
    });
  }
})(document);

/**
 * Функция для установки заголовка формы.
 * Нужна для одинкаовых модальных форм с разными заголовками.
 * На ссылку ставим data-open-form и data-form-title="Заголовок" и dataa-bs-target="#idModal"
 * На место для заголовка в форме ставим data-form-place-title
 */
(function(document){
  let btnsForOpenForm = document.querySelectorAll("[data-open-form]");
  btnsForOpenForm.forEach(function(elem){
    elem.addEventListener("click", function() {
      let modal = document.querySelector(this.dataset.bsTarget);
      if(modal){
        let placeTitle = modal.querySelector("[data-form-place-title]");
        if(placeTitle){
          placeTitle.innerHTML = this.dataset.formTitle;
        }

        let form = modal.querySelector("form");
        if(form){
          if(placeTitle){
            let input = document.createElement("input");
            input.setAttribute("type", "hidden");
            input.setAttribute("name", "nameForm");
            input.value = this.dataset.formTitle;
            form.appendChild(input);
          }
        }
      }
    });
  });
})(document);