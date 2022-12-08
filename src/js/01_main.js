document.querySelectorAll(".btn-expand").forEach((elem, index) => {
  elem.addEventListener("click", (e) => {
    e.target.classList.toggle("btn-expand--active");
  });
});

var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

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
  /* pagination: {
    el: ".swiper-slider-pag",
    clickable: true,
    renderBullet: function (index, className) {
      return `<a href="#" class="${className}">${index + 1}</a>`;
    },
  }, */

  navigation: {
    nextEl: ".slider-stuff-next",
    prevEl: ".slider-stuff-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1.2,
      spaceBetween: 15,
    },
    575: {
      slidesPerView: 2.2,
    },

    992: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

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
  spaceBetween: 20,
  breakpoints: {
    320: {
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
    },
  },
});

const BudgeSlider = new Swiper(".simple-budge-slider", {
  spaceBetween: 20,
  slidesPerView: 4,
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
