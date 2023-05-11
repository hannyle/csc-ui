import { h, } from '@stencil/core';
import { Swiper, Navigation } from 'swiper';
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';
export class CSwiper {
  constructor() {
    this.value = undefined;
    this.isBeginning = true;
    this.isEnd = false;
  }
  onTabClick(event) {
    this.value = event.detail;
    this.slotItems.forEach((child) => {
      child.active = child.value === event.detail;
    });
  }
  onTabFocus(event) {
    const index = event.target.dataset.index;
    this._slideToTab(index);
  }
  handleKeyUp(ev) {
    const isArrowLeft = ev.key === 'ArrowLeft';
    const isArrowRight = ev.key === 'ArrowRight';
    const isBeginning = +this.value === 1;
    const isEnd = +this.value === this.slotItems.length;
    if (!isArrowRight && !isArrowLeft)
      return;
    if (isArrowLeft) {
      this.value = (isBeginning ? this.slotItems.length : +this.value - 1).toString();
    }
    if (isArrowRight) {
      this.value = (isEnd ? 1 : +this.value + 1).toString();
    }
    this._slideToTab(+this.value - 1);
    this.slotItems.forEach((child) => {
      const isActive = child.value === this.value;
      child.active = isActive;
      if (isActive) {
        child.focus();
      }
    });
    this.changeValue.emit(this.value);
  }
  get slotItems() {
    return Array.from(this._wrapper.children);
  }
  _slideToTab(index) {
    this._swiper.slideTo(index);
    this._swiper.update();
  }
  componentDidLoad() {
    this._options = {
      modules: [Navigation],
      breakpointsBase: 'container',
      loop: false,
      speed: 300,
      slideToClickedSlide: true,
      slidesPerView: 1,
      spaceBetween: 8,
      threshold: 4,
      breakpoints: {
        480: {
          slidesPerView: 2,
        },
        720: {
          slidesPerView: 3,
        },
        960: {
          slidesPerView: 4,
        },
      },
      navigation: {
        nextEl: '.c-icon-button--next',
        prevEl: '.c-icon-button--prev',
      },
      keyboard: true,
    };
    this._initSwiper();
  }
  _initSwiper() {
    var _a, _b;
    for (const [index, slide] of this.slotItems.entries()) {
      slide.classList.add('swiper-slide');
      slide.setAttribute('data-index', index.toString());
      slide.value = (_a = slide.value) !== null && _a !== void 0 ? _a : index;
      slide.active = this.value === slide.value;
      slide.position = index + 1;
      slide.setsize = this.slotItems.length;
    }
    this._swiper = new Swiper(this._container, Object.assign({}, this._options));
    this._swiper.on('activeIndexChange', ({ isBeginning, isEnd }) => {
      this.isBeginning = isBeginning;
      this.isEnd = isEnd;
    });
    this._slideToTab(((_b = this.slotItems) === null || _b === void 0 ? void 0 : _b.findIndex((item) => item.value === this.value)) || 0);
  }
  render() {
    return (h("div", { class: "c-swiper swiper" }, h("div", { class: "swiper-container", ref: (el) => (this._container = el) }, h("div", { role: "tablist", class: "swiper-wrapper", ref: (el) => (this._wrapper = el) }, h("slot", null)), h("div", { class: "c-swiper__navigation" }, h("c-icon-button", { "aria-disabled": this.isBeginning ? 'true' : 'false', "aria-label": "previous page", class: "c-icon-button--prev", disabled: this.isBeginning, size: "small", ghost: true }, h("span", { class: "visuallyhidden" }, "Previous", h("span", null, "page")), h("svg", { width: "24", height: "24", viewBox: "0 0 24 24" }, h("path", { d: mdiChevronLeft }))), h("c-icon-button", { "aria-disabled": this.isEnd ? 'true' : 'false', "aria-label": "next page", class: "c-icon-button--next", disabled: this.isEnd, size: "small", ghost: true }, h("span", { class: "visuallyhidden" }, "Next", h("span", null, "page")), h("svg", { width: "24", height: "24", viewBox: "0 0 24 24" }, h("path", { d: mdiChevronRight })))))));
  }
  static get is() { return "c-swiper"; }
  static get originalStyleUrls() {
    return {
      "$": ["c-swiper.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["c-swiper.css"]
    };
  }
  static get properties() {
    return {
      "value": {
        "type": "any",
        "mutable": true,
        "complexType": {
          "original": "number | string",
          "resolved": "number | string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Value of the swiper"
        },
        "attribute": "value",
        "reflect": true
      }
    };
  }
  static get states() {
    return {
      "isBeginning": {},
      "isEnd": {}
    };
  }
  static get events() {
    return [{
        "method": "changeValue",
        "name": "changeValue",
        "bubbles": false,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emit value change to the parent"
        },
        "complexType": {
          "original": "number | string",
          "resolved": "number | string",
          "references": {}
        }
      }];
  }
  static get listeners() {
    return [{
        "name": "changeValue",
        "method": "onTabClick",
        "target": undefined,
        "capture": false,
        "passive": false
      }, {
        "name": "focusTab",
        "method": "onTabFocus",
        "target": undefined,
        "capture": false,
        "passive": true
      }, {
        "name": "keyup",
        "method": "handleKeyUp",
        "target": undefined,
        "capture": true,
        "passive": false
      }];
  }
}
//# sourceMappingURL=c-swiper.js.map
