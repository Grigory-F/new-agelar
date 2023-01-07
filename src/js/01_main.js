console.log(
  "░█▀▀▄░█▀▀▀░█▀▀░█░░█▀▀▄░█▀▀▄\n▒█▄▄█░█░▀▄░█▀▀░█░░█▄▄█░█▄▄▀\n▒█░▒█░▀▀▀▀░▀▀▀░▀▀░▀░░▀░▀░▀▀\n Development"
);
let scrollButton = document.querySelector(".upbtn");
let mainWrap = document.querySelector(".main");

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

if (document.querySelector(".btn-toggler")) {
  let btnToggler = document.querySelector(".btn-toggler");
  btnToggler.addEventListener("click", () => {
    document
      .querySelector(".line-buttons")
      .classList.toggle("line-buttons--show");
  });
}

if (sidebarClose) {
  sidebarClose.addEventListener("click", () => {
    burgerButton.classList.remove("change");
    sidebar.classList.remove("show");
    overflowNew.classList.remove("active");
  });
}

(function (document) {
  let menu = document.getElementById("menu");
  if (menu) {
    new SimpleBar(document.getElementById("menu"));
  }
})(document);

(function (document) {
  let sliderScroll = document.getElementById("sidebar-scroll");
  if (sliderScroll) {
    new SimpleBar(sliderScroll);
  }
})(document);

(function (document) {
  let spec = document.querySelector(".spec-cont");
  if (spec) new SimpleBar(spec);
})(document);

new SimpleBar(document.getElementById("menu"));
new SimpleBar(document.getElementById("sidebar-scroll"));

if (document.querySelector(".spec-cont")) {
  new SimpleBar(document.querySelector(".spec-cont"));
}

if (document.querySelector(".partners-slider")) {
  const PartnersSlider = new Swiper(".partners-slider", {
    grabCursor: true,
    navigation: {
      nextEl: ".slider-partners-next",
      prevEl: ".slider-partners-prev",
    },
    slidesPerView: "auto",
  });
}
if (document.querySelector(".certificates-slider")) {
  lightGallery(document.querySelector(".certificates-slider"), {
    selector: ".js_gal",
    thumbnail: true,
    animateThumb: true,
    showThumbByDefault: true,
  });
}
if (document.querySelector(".case-gallery")) {
  lightGallery(document.querySelector(".case-gallery"), {
    selector: ".js_gal",
    thumbnail: true,
    animateThumb: true,
    showThumbByDefault: true,
  });
}

new AgelarPhoneValidator({
  inputSelector: ".input-phone",
  submitSelector: ".validator-submit",
});
if (document.querySelector(".certificates-slider")) {
  const CertificatesSlider = new Swiper(".certificates-slider", {
    grabCursor: true,
    navigation: {
      nextEl: ".slider-certificates-next",
      prevEl: ".slider-certificates-prev",
    },
    slidesPerView: "auto",
    breakpoints: {
      320: {
        spaceBetween: 15,
      },
      992: {
        spaceBetween: 30,
      },
    },
  });
}
if (document.querySelector(".slider-stock")) {
  const sliderStock = new Swiper(".slider-stock", {
    grabCursor: true,
    slidesPerView: "auto",
    spaceBetween: 0,
  });
}

if (document.querySelector(".slider-stuff")) {
  const StuffSlider = new Swiper(".slider-stuff", {
    slidesPerView: "auto",
    grabCursor: true,
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
}
if (document.querySelector(".slider-tech")) {
  const SliderTech = new Swiper(".slider-tech", {
    slidesPerView: "auto",
    grabCursor: true,
    breakpoints: {
      320: {
        spaceBetween: 0,
      },
      992: {
        spaceBetween: 15,
      },
    },
  });
}

if (document.querySelector(".service-content-slider")) {
  const ServiceContentSlider = new Swiper(".service-content-slider", {
    slidesPerView: 1,
    grabCursor: true,
    navigation: {
      nextEl: ".service-content-slider-next",
      prevEl: ".service-content-slider-prev",
    },
    pagination: {
      el: ".service-content-slider-pag",
      dynamicBullets: true,
      clickable: true,
      renderBullet: function (index, className) {
        return `<a href="#" class="${className}">${index + 1}</a>`;
      },
    },
  });
}
if (document.querySelector(".slider-top")) {
  const SliderTop = new Swiper(".slider-top", {
    slidesPerView: 1,
    grabCursor: true,
    pagination: {
      el: ".swiper-slider-top",
      clickable: true,
      renderBullet: function (index, className) {
        return `<a href="#" class="${className}"></a>`;
      },
    },
  });
}
/* tarrifs-slider */
if (document.querySelector(".tarrifs-slider")) {
  const TarrifsSlider = new Swiper(".tarrifs-slider", {
    slidesPerView: "auto",
    grabCursor: true,
    breakpoints: {
      320: {
        spaceBetween: 5,
      },
    },
  });
}
if (document.querySelector(".slider-cases-box")) {
  const TarrifsSlider = new Swiper(".slider-cases-box", {
    slidesPerView: "auto",
    grabCursor: true,
    navigation: {
      nextEl: ".slider-cases-next",
      prevEl: ".slider-cases-prev",
      disabledClass: "disabled-swiper-button",
    },
  });
}

if (document.querySelector(".quiz-slider")) {
  const QuizSlider = new Swiper(".quiz-slider", {
    slidesPerView: 1,
    autoHeight: true,
    allowTouchMove: false,
    grabCursor: true,
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
}

/* let quizPag = document.querySelector('.') */

/* QuizSlider.on("slideChange", handlerSlider);
function handlerSlider(slider) {
  elPag = slider.pagination.$el[0];
  widthSetPag = slider.pagination.$el[0].offsetWidth;
  widthContainerPag = document.querySelector(".quiz__cont-pag").offsetWidth;
  console.log(widthSetPag, widthContainerPag);
  elPag.style.transform = `translateX(${
    widthContainerPag / 2 - widthSetPag
  }px)`;
  console.log(widthSetPag / 5);
} */
if (document.querySelector(".articles-slider")) {
  const ArticlesSlider = new Swiper(".articles-slider", {
    pagination: {
      el: ".swiper-slider-pag",
      grabCursor: true,
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
}

if (document.querySelector(".budges-slider-min")) {
  const BudgeSliderMin = new Swiper(".budges-slider-min", {
    slidesPerView: "auto",
    grabCursor: true,
    breakpoints: {
      320: {
        spaceBetween: 0,
      },
      992: {
        spaceBetween: 15,
      },
    },
  });
}

if (document.querySelector(".simple-budge-slider")) {
  const BudgeSlider = new Swiper(".simple-budge-slider", {
    spaceBetween: 20,
    slidesPerView: "auto",
    grabCursor: true,
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
}
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

if (document.querySelector(".reviews-text-slider")) {
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
}
if (document.querySelector(".slider-case")) {
  const reviewsTextSlider = new Swiper(".slider-case", {
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
}

if (document.querySelector(".solutions-slider")) {
  const ReviewsVideoSliderNew = new Swiper(".solutions-slider", {
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
}
if (document.querySelector(".reviews-video-slider")) {
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
}
document.querySelectorAll(".tariff-btn").forEach((elem, index) => {
  elem.addEventListener("click", () => {
    let textButton = elem.querySelector("span");
    if (textButton.textContent == "Что входит") {
      textButton.textContent = "Свернуть";
    } else {
      textButton.textContent = "Что входит";
    }
  });
});

("Эффект наведения на кейс и акции");

function setEffect(elems) {
  elems.forEach((elem, index) => {
    const height = elem.clientHeight;
    const width = elem.clientWidth;
    elem.addEventListener("mousemove", (e) => {
      const xVal = e.layerX;

      const yVal = e.layerY;

      const yRotation = 10 * ((xVal - width / 2) / width);

      const xRotation = -20 * ((yVal - height / 2) / height);

      const string =
        "transform: perspective(500px) scale(1.1) rotateX(" +
        xRotation +
        "deg) rotateY(" +
        yRotation +
        "deg); transition: .1s ease";

      elem.style.cssText = string;
    });
    elem.addEventListener("mouseout", function () {
      elem.style.cssText =
        "transform: perspective(500px) scale(1) rotateX(0) rotateY(0); transition: .1s ease";
    });

    elem.addEventListener("mousedown", function () {
      elem.style.cssText =
        "transform :perspective(500px) scale(0.9) rotateX(0) rotateY(0); transition: .1s ease";
    });

    elem.addEventListener("mouseup", function () {
      elem.style.transform =
        "transform :perspective(500px) scale(1.1) rotateX(0) rotateY(0)";
    });
  });
}

let elemEffect = document.querySelectorAll(".cases-page .box-case");
if (elemEffect) {
  setEffect(elemEffect);
}

//Определения размера ячеек блока "тарифы"
(function (document) {
  function setHeightCell(cellTarifs) {
    if (!cellTarifs) return;

    let maxHeightCell = 0;
    if (cellTarifs) {
      cellTarifs.forEach(function (item) {
        if (item.offsetHeight > maxHeightCell)
          maxHeightCell = item.offsetHeight;
      });

      cellTarifs.forEach(function (item) {
        item.style.height = maxHeightCell + "px";
      });
    }

    return maxHeightCell;
  }

  setHeightCell(
    document.querySelectorAll(".tarrifs-container .tarrifs-table > div")
  );
})(document);

/**
 * Функция для установки заголовка формы.
 * Нужна для одинкаовых модальных форм с разными заголовками.
 * На ссылку ставим data-open-form и data-form-title="Заголовок" и dataa-bs-target="#idModal"
 * На место для заголовка в форме ставим data-form-place-title
 */
(function (document) {
  let btnsForOpenForm = document.querySelectorAll("[data-open-form]");
  btnsForOpenForm.forEach(function (elem) {
    elem.addEventListener("click", function () {
      let modal = document.querySelector(this.dataset.bsTarget);
      if (modal) {
        let placeTitle = modal.querySelector("[data-form-place-title]");
        if (placeTitle) {
          placeTitle.innerHTML = this.dataset.formTitle;
        }

        let form = modal.querySelector("form");
        if (form) {
          if (placeTitle) {
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

(function (document) {
  let reviewsGall = document.getElementById("n-reviews-gall");
  if (reviewsGall) {
    lightGallery(reviewsGall, {
      selector: ".js_gal_reviews",
      thumbnail: true,
      animateThumb: true,

      showThumbByDefault: true,
    });
  }
})(document);

//Код для подгрузки кейсов в категории кейсов
(function (document) {
  function getCases(resource, shift = 0) {
    return $.post("/assets/templates/agelar/getCases.php", {
      id: resource,
      shift: shift,
    });
  }
  //Проверка на существования своих тегов у категории
  let tags = document.querySelectorAll("[data-tags]");
  tags.forEach(function (item) {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      let id = this.dataset.id;
      generalPreloader.classList.add("spin-overlap--active");
      $.post(
        "/assets/templates/agelar/isTagsCases.php",
        {
          id: id,
        },
        function (data) {
          if (Number(data)) window.location.href = this.href;
          else {
            getCases(id).then(function (data) {
              data = JSON.parse(data);
              let casesBlock = document.querySelector(".casesList");
              casesBlock.innerHTML = data.data;
              console.log("add content");

              let showMoreBtn = document.querySelector(".show_more_cases");

              if (showMoreBtn) {
                showMoreBtn.setAttribute("data-id", id);
                //Скрываем или отображаем кнопку "показать ещё"
                if (!data.nextData) {
                  showMoreBtn.style.display = "none";
                } else {
                  showMoreBtn.style.display = "";
                }
              }
              generalPreloader.classList.remove("spin-overlap--active");
              loadImages();
            });
          }
        }
      );
    });
  });
  /*
      Загрузка кейсов
      resource - id ресурса
      shift - сдвиг получаемых данных
  */
  let generalPreloader;

  if (document.querySelector(".spin-overlap")) {
    generalPreloader = document.querySelector(".spin-overlap");
  }

  //Загрузка данных по нажатию "показать ещё"
  /*Обязательные параметры у кнопки
    data-id - id ресурса
    data-shift - текущий сдвиг
    data-default-shift - сдвиг по умолчанию
  */
  let showMoreCaseBtn = document.querySelector(".show_more_cases");
  if (showMoreCaseBtn) {
    showMoreCaseBtn.addEventListener("click", function () {
      let id = this.getAttribute("data-id");
      let shift = this.getAttribute("data-shift");
      let defaultShift = this.dataset.defaultShift;
      generalPreloader.classList.add("spin-overlap--active");
      getCases(id, shift)
        .then((data) => {
          data = JSON.parse(data);

          if (data.data != "") {
            let casesBlock = document.querySelector(".casesList");
            casesBlock.innerHTML += data.data;
            this.setAttribute(
              "data-shift",
              Number(shift) + Number(defaultShift)
            );

            //Скрываем кнопку если нет более даннных
            if (!data.nextData) {
              this.style.display = "none";
            }
          }

          return data;
        })
        .then((data) => {
          generalPreloader.classList.remove("spin-overlap--active");
          loadImages();
        });
    });
  }

  //Загрузка изображений
  async function loadImages() {
    let images = document.querySelectorAll(".box-case__bg-image");
    images.forEach((item) => {
      let image = document.createElement("img");
      image.src = item.dataset.src;
      image.setAttribute("class", item.getAttribute("class"));
      image.addEventListener("load", function () {
        item.parentNode.insertBefore(image, item);
        let spin = item.parentNode.querySelector(".spin-overlap");
        if (spin) spin.remove();
        item.remove();
      });
    });
  }

  loadImages();
})(document);

let partnersDeg = document.querySelectorAll(".partners-slider__slide-cont img");

if (partnersDeg) {
  partnersDeg.forEach((elem, index) => {
    if (index > 9) {
      elem.style.cssText = "width: 100% !important; height: auto !important;";
    }
  });
}
