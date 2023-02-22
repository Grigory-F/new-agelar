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
   
    setHeightCell(
      document.querySelectorAll(".tarrifs-container .tarrifs-table > div")
    );
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

/* if (document.querySelector(".btn-toggler")) {
  let btnToggler = document.querySelector(".btn-toggler");
  btnToggler.addEventListener("click", () => {
    document
      .querySelector(".line-buttons")
      .classList.toggle("line-buttons--show");
  });
} */

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
    
    preloadImages: false,
    // Enable lazy loading
    lazy: true,
    breakpoints: {
      320: {
        slidesPerView: "auto",
      },
      425:{
        slidesPerView: 2,
      },
      768:{
        slidesPerView: 4,
      },
      1024:{
        slidesPerView: 5,
      },
      1440:{
        slidesPerView: 7,
      },
      2560:{
        slidesPerView: 11,
      }
    },
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
    slidesPerView: 8,
    preloadImages: false,
    // Enable lazy loading
    lazy: true,
    watchSlidesVisibility:true,
    breakpoints: {
      320: {
        spaceBetween: 15,
        slidesPerView: "auto",
      },
      425: {
        slidesPerView: 4,
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
    preloadImages: false,
    lazy: true,
    watchSlidesProgress:true,
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
    preloadImages: false,
    lazy: true,
    watchSlidesProgress:true,
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

//Пагинация для swiper с отображением n кол-во кнопок активными а осталные появляются по мере нужности
function PaginatorSwiper(swiper, options = {}) {
  this.swiper = swiper;
  this.defaultStartIndex = options.defaultStartIndex
    ? options.defaultStartIndex
    : 2;
  this.defaultLastIndex = options.defaultLastIndex
    ? options.defaultLastIndex
    : 5;
  this.startIndex = this.defaultStartIndex;
  this.lastIndex = this.defaultLastIndex;
  this.clsNext = "swiper-content-pag-next";
  this.clsPrev = "swiper-content-pag-prev";
  this.clsFirst = "swiper-content-pag-first";
  this.clsLast = "swiper-content-pag-last";
  this.init = function () {
    // let btns = this.swiper.pagination.el.querySelectorAll("[data-index]");
    //this.swiper.pagination.bullets = btns;
  };
  this.renderBullet = function (index, className) {
    cIndex = index + 1;
    if (cIndex == 1)
      return `<a href="#" class="${className}" data-index="${cIndex}">${cIndex}</a>`;
    if (cIndex == this.swiper.imagesLoaded)
      return `<a href="#" class="${className} ${this.clsLast} " data-index="${cIndex}">${cIndex}</a>`;

    let cls = "";
    if (cIndex === this.startIndex) {
      cls = this.clsPrev;
    } else if (cIndex === this.startIndex + 3) cls = this.clsNext;

    if (cIndex >= this.startIndex && cIndex <= this.startIndex + 3)
      return `<a href="#" class="${className} ${cls}" data-index="${cIndex}">${cIndex}</a>`;

    return `<a href="#" class="${className}" style="display:none" data-index="${cIndex}">${cIndex}</a>`;
  };

  this.paginationUpdate = function (swiper, pag) {
    if (swiper.imagesLoaded < this.defaultLastIndex) return;

    let el = pag.querySelector(".swiper-pagination-bullet-active");

    if (el.classList.contains(this.clsPrev)) {
      if (el.previousSibling.innerHTML == 1) {
        this.startIndex = this.defaultStartIndex;
        return;
      }
      el.previousSibling.style.display = "";
      el.previousSibling.classList.add(this.clsPrev);
      el.classList.remove(this.clsPrev);
      this.startIndex--;

      let lastEl = pag.querySelector(
        ".swiper-pagination-bullet[data-index='" + this.lastIndex + "']"
      );
      if (lastEl && lastEl.innerHTML != swiper.imagesLoaded) {
        lastEl.style.display = "none";
        lastEl.classList.remove(this.clsNext);
        lastEl.previousSibling.classList.add(this.clsNext);
        this.lastIndex--;
      }
    }

    if (el.classList.contains(this.clsNext)) {
      if (el.previousSibling.innerHTML == swiper.imagesLoaded) return;
      el.nextSibling.style.display = "";
      el.nextSibling.classList.add(this.clsNext);
      el.classList.remove(this.clsNext);
      let firstEl = pag.querySelector(
        ".swiper-pagination-bullet[data-index='" + this.startIndex + "']"
      );

      if (
        firstEl &&
        firstEl.innerHTML != 1 &&
        el.nextSibling.dataset.index != swiper.imagesLoaded
      ) {
        this.startIndex++;
        firstEl.style.display = "none";
        firstEl.classList.remove(this.clsPrev);
        firstEl.nextSibling.classList.add(this.clsPrev);
        this.lastIndex++;
      }
    }

    if (el.dataset.index == 1 && this.startIndex != this.defaultStartIndex) {
      for (let i = this.startIndex; i <= this.lastIndex; i++) {
        let link = pag.querySelector(
          ".swiper-pagination-bullet[data-index='" + i + "']"
        );
        if (i == this.startIndex) link.classList.remove(this.clsPrev);

        link.style.display = "none";

        if (i == this.lastIndex) link.classList.remove(this.clsNext);
      }

      for (let i = this.defaultStartIndex; i <= this.defaultLastIndex; i++) {
        let link = pag.querySelector(
          ".swiper-pagination-bullet[data-index='" + i + "']"
        );
        if (i == this.defaultStartIndex) link.classList.add(this.clsPrev);

        link.style.display = "";

        if (i == this.defaultLastIndex) link.classList.add(this.clsNext);
      }

      startIndex = this.defaultStartIndex;
      lastIndex = this.defaultLastIndex;
    }

    if (el.dataset.index == swiper.imagesLoaded) {
      let prevLastEl = el.dataset.index - 1;
      if (this.lastIndex != el.dataset.index - 1) {
        let end = this.lastIndex;
        let start = this.startIndex;
        for (let i = start; i <= end; i++) {
          let link = pag.querySelector(
            ".swiper-pagination-bullet[data-index='" + i + "']"
          );
          if (i == start) link.classList.remove(this.clsPrev);

          link.style.display = "none";

          if (i == end) link.classList.remove(this.clsNext);
        }

        end =
          el.dataset.index -
          1 -
          (this.defaultLastIndex - this.defaultStartIndex);
        for (let i = prevLastEl; i >= end; i--) {
          let link = pag.querySelector(
            ".swiper-pagination-bullet[data-index='" + i + "']"
          );
          if (i == prevLastEl) link.classList.add(this.clsNext);
          link.style.display = "";
          if (i == end) link.classList.add(this.clsPrev);
        }

        this.startIndex = end;
        this.lastIndex = prevLastEl;
      }
    }
  };
}

(function (document) {
  if (document.querySelector(".service-content-slider")) {
    let ServiceContentSlider = new Swiper(".service-content-slider", {
      slidesPerView: 1,
      grabCursor: true,
      autoHeight: true,
      navigation: {
        nextEl: ".service-content-slider-next",
        prevEl: ".service-content-slider-prev",
      },
      pagination: {
        el: ".service-content-slider-pag",
        dynamicBullets: true,
        clickable: true,
        renderBullet: function (index, className) {
          return this.paginator.renderBullet(index, className);
        },
      },
      on: {
        beforeInit() {
          this.paginator = new PaginatorSwiper(this);
        },

        init() {
          this.paginator.init();
        },
        paginationUpdate: function (swiper, pag) {
          this.paginator.paginationUpdate(swiper, pag);
        },
      },
    });
  }
})(document);

if (document.querySelector(".slider-top")) {
  const SliderTop = new Swiper(".slider-top", {
    slidesPerView: 1,
    autoplay: {
      delay: 2000,
    },
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
    preloadImages: false,
    watchSlidesProgress:true,
    lazy: {
      enabled:true,
      loadPrevNext: true,
    },
  });
}

// if (document.querySelector(".quiz-slider")) {
//   const QuizSlider = new Swiper(".quiz-slider", {
//     slidesPerView: 1,
//     autoHeight: true,
//     allowTouchMove: false,
//     grabCursor: true,
//     // navigation: {
//     //   nextEl: ".quiz-slider-next",
//     //   prevEl: ".quiz-slider-prev",
//     // },
//     pagination: {
//       el: ".quiz-pag",
//       clickable: true,
//       renderBullet: function (index, className) {
//         return `<div class="quiz-pag__box ${className}">
//           <span>${index + 1}</span>
//         </div><div class="quiz-pag__line"></div>`;
//       },
//     },
//     breakpoints: {
//       320: {
//         spaceBetween: 15,
//       },
//       575: {},

//       992: {
//         spaceBetween: 30,
//       },
//     },
//   });
// }

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
    slidesPerView: "auto",
    grabCursor: true,
    preloadImages: false,
    lazy: true,
    watchSlidesProgress:true,
    navigation: {
      nextEl: ".swiper-button-prev",
      prevEl: ".swiper-button-next",
    },
    breakpoints: {
      320: {
        spaceBetween: 15,
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
    slidesPerView: 1,
    grabCursor: true,
    autoHeight: true,
    preloadImages: false,
    // Enable lazy loading
    lazy: true,
    breakpoints: {
      320: {
        spaceBetween: 15,
      },
      1200: {
        spaceBetween: 30,
      },
    },
    navigation: {
      nextEl: ".slider-case-content-slider-next",
      prevEl: ".slider-case-content-slider-prev",
    },
    pagination: {
      el: ".slider-case-content-slider-pag",
      dynamicBullets: true,
      clickable: true,
      renderBullet: function (index, className) {
        return this.paginator.renderBullet(index, className);
      },
    },
    on: {
      beforeInit() {
        this.paginator = new PaginatorSwiper(this);
      },

      init() {
        this.paginator.init();
      },
      paginationUpdate: function (swiper, pag) {
        this.paginator.paginationUpdate(swiper, pag);
      },
    },
  });
}

if (document.querySelector(".solutions-slider")) {
  const ReviewsVideoSliderNew = new Swiper(".solutions-slider", {
    slidesPerView: "auto",
    grabCursor: true,
    preloadImages: false,
    watchSlidesProgress:true,
    // Enable lazy loading
    lazy: true,
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

      textButton.nextElementSibling.style.display = "none";
    } else {
      textButton.textContent = "Что входит";
      textButton.nextElementSibling.style.display = "";
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

function setHeightCell(cellTarifs) {
  if (!cellTarifs) return;

  let maxHeightCell = 0;
  if (cellTarifs) {
    cellTarifs.forEach(function (item) {
      item.style.height = "auto";
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
      selector: ".js_gal",
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
  // let tags = document.querySelectorAll("[data-tags]");
  // tags.forEach(function (item) {
  //   item.addEventListener("click", function (e) {
  //     e.preventDefault();
  //     let id = this.dataset.id;
  //     generalPreloader.classList.add("spin-overlap--active");
  //     $.post(
  //       "/assets/templates/agelar/isTagsCases.php",
  //       {
  //         id: id,
  //       },
  //        (data) => {
  //         if (Number(data)) window.location.href = this.href;
  //         else {
  //           window.history.pushState(null, null, this.getAttribute("href"));

  //           getCases(id).then(function (data) {
  //             data = JSON.parse(data);
  //             let casesBlock = document.querySelector(".casesList");
  //             casesBlock.innerHTML = data.data;

  //             let showMoreBtn = document.querySelector(".show_more_cases");

  //             if (showMoreBtn) {
  //               showMoreBtn.setAttribute("data-id", id);
  //               showMoreBtn.setAttribute("data-shift", showMoreBtn.dataset.defaultShift);
  //               //Скрываем или отображаем кнопку "показать ещё"
  //               if (!data.nextData) {
  //                 showMoreBtn.style.display = "none";
  //               } else {
  //                 showMoreBtn.style.display = "";
  //               }
  //             }
  //             generalPreloader.classList.remove("spin-overlap--active");
  //             loadImages();
  //           });
  //         }
  //       }
  //     );
  //   });
  // });
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
          console.log(data);
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
  /* async function loadImages() {
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
    }
  } */
  //Загрузка изображений
  function loadImages() {
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

/* [
  {
    status: 200,
    massage: "OK",
    nameInput: "name-elem",
    targetElem: "<DOMContentElem>",
    
  }
] */

$(document).on("af_complete", function (event, response) {
  if (response.success) {
    response.form[0].classList.remove("error");
    onClearErrorForm(form);
  } else {
    response.form[0].classList.add("error");
    onClearErrorForm(response.form[0]);
    for (const key in response.data) {
      let selecError = response.form[0].querySelector(`[name=${key}]`);
      console.log(selecError);
      if (selecError) {
        selecError.insertAdjacentHTML("afterend", `${response.data[key]}`);
      }
    }
  }
});

function onClearErrorForm(form) {
  form.querySelectorAll(".error").forEach((elem, index) => {
    elem.remove();
  });
}

/* nav-sidebar__link-arrow */
/* level2 */

let sidebarLinks = document.querySelectorAll(
  ".nav-sidebar .top_menu ul > .level1"
);

sidebarLinks.forEach((elem, index) => {
  if (!elem.querySelector("ul")) {
    console.log(elem.querySelector("ul"));
    let elemArrow = elem.querySelector(".nav-sidebar__link-arrow");
    if (elemArrow) {
      elemArrow.remove();
    }
  }
});

let tarrifElem = document.querySelectorAll(".tarrifs-table-min");
if (tarrifElem && tarrifElem[2]) {
  tarrifElem[2]
    .querySelectorAll("div:nth-child(odd)")
    .forEach((elem, index) => {
      elem.style.cssText =
        "background-color: #880000;mix-blend-mode: normal;color: white!important;";
    });
}

document.addEventListener("DOMContentLoaded", function () {
  //if (window.localStorage.getItem("statusBtnBack")) {
   // window.localStorage.setItem("statusBtnBack", 0);
    let url = new URL(location.href);
    let position = url.searchParams.get("id");
    let element = document.querySelector("[data-position='" + position + "'");
    if (element) {
      console.log($(element).offset().top);
      $("main").animate({
        scrollTop: $(element).offset().top,
      });
    }
  //}
});

function return_to_initial_page(url, query) {
  window.localStorage.setItem("statusBtnBack", 1);
  url = new URL(url);
  url.searchParams.set("id", query);
  window.location.href = url;
}

let sldeCaseScrollBarForImage = document.querySelectorAll(
  ".site-cases .cont-case-image, .style-cases .cont-case-image, .mobile-cases .cont-case-image, .redesign-cases .cont-case-image"
);
sldeCaseScrollBarForImage &&
  sldeCaseScrollBarForImage.forEach((e) => {
    new SimpleBar(e);
  });

function Calculator(classElement, options){
    let defaultOptions = {
        classSwiper: "",
        swiperOptions: { },
        classBtnSlidePrev: ".quiz-slider-prev",
        classBtnSlideNext: ".quiz-slider-next",
        classAnswersElement: ".quest-answer",
        classBtnPagination: ".quiz-buttons",
        classDiscount: ".discount",
        classPagination: ".quiz-pag"
    }
    

    
    this.init = function(){
        for(optionKey in defaultOptions){
            if(!options[optionKey]){
                options[optionKey] = defaultOptions[optionKey];
            }
        }
        
        if(options.classSwiper == ""){
            console.log("Calculator: Не определён swiper slider");
            return 1;
        }else{
            this.swiper = new Swiper(options.classSwiper, options.swiperOptions);
        }
        
        let calculators = document.querySelectorAll(classElement);
        calculators.forEach((item, i) => {
            item.questId = i;
            let element = new Element(item);
            item.calculator = element;
        });
    }
    
    this.init();
    
    function Element(element){
        this.discount = 1;
        this.classDiscount = options.classDiscount;
        this.element = element;
        this.questsBase = [];
        this.form = this.element.querySelector("form");
        
        this.init = function(){
            this.element.clear = this.clear.bind(this);
            let questAnswers = this.element.querySelectorAll(options.classAnswersElement);
            this.swiper = this.element.querySelector(options.classSwiper).swiper;
            this.setDiscount(this.discount);
            
            if(questAnswers){
                questAnswers.forEach(item => {
                    item.addEventListener("click", e => {
                        if(this.questsBase.indexOf(e.target.getAttribute("name")) == -1){
                            this.questsBase.push(e.target.getAttribute("name"));
                            this.setDiscount(this.discount + 1);
                        }else if(this.questsBase.indexOf(e.target.getAttribute("name")) != -1){
                            if(!this.isValidQuest(e.target.getAttribute("name"))){
                                delete this.questsBase[this.questsBase.indexOf(e.target.getAttribute("name"))];
                                this.setDiscount(this.discount - 1);
                            }
                        }
                    });
                });
            }
            
            this.pagination();
            this.paginationBtn();
           
            
            if(this.form){
                this.form.addEventListener("agelar-form-success", () => {
                    this.clear();
                });
            }
            
            
        }
        
        this.clear = function(){
            this.questsBase = [];
            this.setDiscount(0);
            this.element.querySelector(options.classSwiper).swiper.slideTo(0, 10);
            this.element.querySelector(options.classBtnPagination).style.display = '';
            if(this.form){
                this.form.reset();
            }
        }
        
        this.setDiscount = function(discount){
            this.discount = discount;
            let discounts = this.element.querySelectorAll(this.classDiscount);
            discounts.forEach(item => {
                item.innerHTML = discount;
            });
        }
        
        this.paginationBtn = function(){
            let prevBtn = this.element.querySelector(options.classBtnSlidePrev);
            if(prevBtn){
                prevBtn.addEventListener("click", item => {
                    this.element.querySelector(options.classSwiper).swiper.slideTo(--this.element.questId, 10);
                });
            }
            
            let nextBtn = this.element.querySelector(options.classBtnSlideNext);
            if(nextBtn){
                nextBtn.addEventListener("click", item => {
                    if(!this.isError(this.element.questId)){
                        let questNextId = ++this.element.questId;
                        this.element.querySelector(options.classSwiper).swiper.slideTo(questNextId, 10);
                        if(questNextId == this.element.querySelector(options.classSwiper).swiper.imagesLoaded){
                            this.element.querySelector(options.classBtnPagination).style.display = 'none';
                        }
                    }
                });
            }
        }
        
         this.pagination = function(){
            let sectionPag = this.element.querySelector(options.classPagination);
            let classActive = "swiper-pagination-bullet-active";
            
            if(sectionPag){
                for(let i = 0; i <= this.swiper.imagesLoaded; i++){
                    let cls = "";
                    if(i == this.swiper.activeIndex)
                        cls = classActive;
                    sectionPag.innerHTML += this.renderPagination(i, cls);
                  
                }
            }
            
            this.swiper.on("activeIndexChange", () => {
                let currentPag = sectionPag.querySelector("."+classActive);
                if(currentPag){
                    currentPag.classList.remove(classActive);
                }
                
                let activePag = sectionPag.querySelector("[data-index='"+this.swiper.activeIndex+"']");
                if(activePag){
                    activePag.classList.add(classActive);
                }
            });
            
            sectionPag.querySelectorAll("[data-index]").forEach((item) => {
                item.addEventListener("click", (e) => {
                    let id = e.target.dataset.index;
                    let lastId = id > this.swiper.activeIndex? id-1: this.swiper.activeIndex;
                    if(id > this.swiper.activeIndex && this.isValidSiteName(lastId) && this.isValidQuest("quest_"+lastId)){
                        this.swiper.slideTo(id, 10);
                        showBottomSection(id, this);
                    }else if(id < this.swiper.activeIndex){
                        this.swiper.slideTo(id, 10);
                        showBottomSection(id, this);
                    }
                });
            });
            
            function showBottomSection(id, sef){
                if(id < sef.swiper.imagesLoaded){
                    sef.element.querySelector(options.classBtnPagination).style.display = '';
                }else{
                    sef.element.querySelector(options.classBtnPagination).style.display = 'none';
                }
            }
        }
        
        this.renderPagination = function(index,  className){
            return `<div class="quiz-pag__box ${className}" data-index="${index}" style="cursor:pointer"><span>${ index + 1 }</span></div><div class="quiz-pag__line"></div>`
        }
        
        this.isError = function(id){
            if(!this.isValidSiteName(id)){
                this.errorSiteName();
                return true;
            }
            
            if(!this.isValidQuest("quest_"+id)){
                this.errorNextSlide();
                return true;
            }
            return false;
        }
        
        this.errorNextSlide = function(){
            alert("Проверте заполнения всех полей");
        }
        this.errorSiteName = function() {
            alert("Введите имя сайта");
        }
        
        this.isValidSiteName = function(id){
            let siteName = this.element.querySelector(".site_name_"+id);
            if(siteName) return siteName.value != "";
            return true;
        };
        
        this.isValidQuest = function(name){
            let flag = false;
            this.element.querySelectorAll("[name='"+name+"']").forEach(function(item){ 
                if(item.checked){
                    flag = true;
                    return 1;
                }
            });
            
            return flag;
        }
        
        this.init();
    }
}

/*
Опции по умолчанию и которые можно предать
classSwiper: "", Класс свйпера
swiperOptions: { }, Опции свайпера
classBtnSlidePrev: ".quiz-slider-prev", Кнопка назад
classBtnSlideNext: ".quiz-slider-next", Кннопка далее
classAnswersElement: ".quest-answer", Класс определяющий что это input ответа
classBtnPagination: ".quiz-buttons", Класс блока с кнопками далее и назад
classDiscount: ".discount", Класс блока в котором лежит значение скидки
classPagination: ".quiz-pag" Класс пагинации сверху слайдера
*/

let calculator = new Calculator(".calculator", {
  classSwiper:".quiz-slider",
  swiperOptions: {
      slidesPerView: 1,
      autoHeight: true,
      allowTouchMove: false,
      grabCursor: true,
     
      breakpoints: {
        320: {
          spaceBetween: 15,
        },
        575: {
            
        },
  
        992: {
          spaceBetween: 30,
        },
      },
  }
});

//Функция показа ошибки если не введено имя сайта
//calculator.errorSiteName = function(){
  //alert("Введите имя сайта");
//}

//Функция показа ошибки если не выбран не один из ответов
//this.errorNextSlide = function(){ 
 // alert("Проверте заполнения всех полей");
//}