import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { k as mdiChevronLeft, l as mdiChevronRight, q as mdiDotsHorizontal } from './mdi.js';
import { d as defineCustomElement$3 } from './c-icon-button2.js';
import { d as defineCustomElement$2 } from './c-menu2.js';
import { d as defineCustomElement$1 } from './c-menu-items2.js';

const cPaginationCss = ":host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(140, 140, 140);--csc-primary:rgb(0, 103, 120);--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}:host{display:block}span{font-size:14px;text-align:right;white-space:nowrap}.range{min-width:132px}.visuallyhidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.c-pagination{align-items:center;display:flex;flex-wrap:wrap;gap:0 24px;justify-content:center}.c-pagination ul{align-items:center;display:flex;gap:4px;justify-content:center;list-style:none;margin:0;padding:0}.c-pagination--simple ul{flex:1;justify-content:flex-end}.c-pagination--small ul{gap:2px}.c-pagination__details{align-items:center;display:flex;flex-wrap:wrap;flex:auto;justify-content:space-between}";

const CPagination = proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.changeValue = createEvent(this, "changeValue", 3);
    this._textContent = {
      itemsPerPageText: 'Items per page:',
      nextPage: 'Next page',
      prevPage: 'Previous page',
    };
    this._buttons = [];
    this._increasePageNumber = () => {
      if (this._currentPage < this._getTotalPages()) {
        this._currentPage += 1;
        this._valueChangeHandler();
      }
    };
    this._decreasePageNumber = () => {
      if (this._currentPage > 1) {
        this._currentPage -= 1;
        this._valueChangeHandler();
      }
    };
    this.value = undefined;
    this.hideDetails = false;
    this.simple = false;
    this.size = 'default';
    this._currentPage = undefined;
    this._itemsPerPage = undefined;
    this._totalVisible = undefined;
    this.hideRange = false;
    this.itemsPerPageOptions = [5, 25, 50, 100];
    this.tick = '';
  }
  valueHandler(value, oldValue) {
    if (this._isEqual(value, oldValue))
      return;
    this._setRange();
  }
  _isEqual(options1, options2) {
    const keys1 = Object.keys(options1 || {});
    const keys2 = Object.keys(options2 || {});
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (const key of keys1) {
      if (options1[key] !== options2[key]) {
        return false;
      }
    }
    return true;
  }
  componentDidLoad() {
    this._setRange();
  }
  _getText(key) {
    var _a;
    const source = ((_a = this.value.textOverrides) === null || _a === void 0 ? void 0 : _a[key])
      ? this.value.textOverrides
      : this._textContent;
    return source[key];
  }
  _setRange() {
    this._currentPage = this.value.currentPage || 1;
    this._itemsPerPage = this.value.itemsPerPage || 25;
    this._totalVisible = this.value.totalVisible || 7;
    this.value.startFrom =
      this._currentPage * this._itemsPerPage - this._itemsPerPage;
    this.value.endTo = this._currentPage * this._itemsPerPage - 1;
    this.changeValue.emit(this.value);
  }
  _valueChangeHandler() {
    this.value.currentPage = this._currentPage;
    this.value.itemsPerPage = this._itemsPerPage;
    this._setRange();
  }
  _getItemsPerPage() {
    const itemsPerPageOptions = this.itemsPerPageOptions.map((i) => ({
      name: i.toString(),
      action: () => {
        this._itemsPerPage = i;
        this._currentPage = 1;
        this._valueChangeHandler();
      },
    }));
    const onMenuClick = (event) => {
      event.stopPropagation();
    };
    return (h("c-menu", { items: itemsPerPageOptions, nohover: true, onClick: onMenuClick }, h("div", null, h("span", { class: "items-per-page" }, this._getText('itemsPerPageText'), " ", this._itemsPerPage))));
  }
  _getTotalPages() {
    return Math.ceil(this.value.itemCount / this._itemsPerPage);
  }
  _setPage(number) {
    this._currentPage = number;
    this._valueChangeHandler();
  }
  _getRange() {
    var _a;
    if (this.hideRange)
      return;
    const end = Math.min(this._currentPage * this._itemsPerPage, this.value.itemCount);
    const start = this.value.startFrom + 1;
    const pageTextOverride = (_a = this.value.textOverrides) === null || _a === void 0 ? void 0 : _a.pageText;
    let parsedPageTextOverride;
    if (pageTextOverride) {
      parsedPageTextOverride = pageTextOverride({
        start: start,
        end: end,
        count: this.value.itemCount,
      });
    }
    return pageTextOverride
      ? parsedPageTextOverride
      : `${start} - ${end} of ${this.value.itemCount} items`;
  }
  _getArrowLeft(size) {
    return (h("li", null, h("c-icon-button", { "aria-disabled": this.value.currentPage <= 1 ? 'true' : 'false', "aria-label": `${this._getText('prevPage')}`, disabled: this.value.currentPage <= 1, size: size, text: true, onClick: this._decreasePageNumber }, h("span", { class: "visuallyhidden" }, this._getText('prevPage')), h("svg", { width: "24", height: "24", viewBox: "0 0 24 24" }, h("path", { d: mdiChevronLeft })))));
  }
  _getArrowRight(size) {
    return (h("li", null, h("c-icon-button", { "aria-disabled": this.value.currentPage >= this._getTotalPages() ? 'true' : 'false', "aria-label": `${this._getText('nextPage')}`, disabled: this.value.currentPage >= this._getTotalPages(), size: size, text: true, onClick: this._increasePageNumber }, h("span", { class: "visuallyhidden" }, this._getText('nextPage')), h("svg", { width: "24", height: "24", viewBox: "0 0 24 24" }, h("path", { d: mdiChevronRight })))));
  }
  _button(number, size) {
    var _a;
    const params = {
      text: this._currentPage !== number,
      onClick: () => this._setPage(number),
      size,
    };
    if (this._currentPage === number) {
      params['aria-current'] = 'page';
    }
    const pageOfTextOverride = (_a = this.value.textOverrides) === null || _a === void 0 ? void 0 : _a.pageOfText;
    let parsedPageOfTextOverride;
    if (pageOfTextOverride) {
      parsedPageOfTextOverride = pageOfTextOverride({
        pageNumber: number,
        count: this._getTotalPages(),
      });
    }
    return (h("li", null, h("c-icon-button", Object.assign({}, params), h("span", { "aria-label": pageOfTextOverride
        ? parsedPageOfTextOverride
        : `page ${number} of ${this._getTotalPages()}` }, number))));
  }
  _addButton(number, size) {
    this._buttons.push(this._button(number, size));
  }
  _addSeparator(size) {
    this._buttons.push(h("li", null, h("c-icon-button", { "aria-disabled": "true", size: size, tabindex: "-1", role: "separator", disabled: true, text: true }, h("svg", { width: "16", height: "16", viewBox: "0 0 24 24" }, h("path", { d: mdiDotsHorizontal })))));
  }
  _addButtons(buttonStart, buttonCount, size) {
    if (buttonStart > 1) {
      this._addButton(1, size);
      this._addSeparator(size);
    }
    for (let index = 1; index < buttonCount; index++) {
      this._addButton(buttonStart + index, size);
    }
    const allPagesVisible = this._getTotalPages() <= this._totalVisible;
    if ((this._currentPage < this._totalVisible - 1 ||
      this._currentPage < this._getTotalPages() - this._totalVisible + 4) &&
      !allPagesVisible) {
      this._addSeparator(size);
    }
  }
  _getPageButtons(size) {
    this._buttons = [];
    let buttonStart = 0;
    let buttonCount = this._getTotalPages() + 1;
    const morePagesThanVisible = this._getTotalPages() > this._totalVisible;
    if (morePagesThanVisible) {
      if (this._currentPage < this._totalVisible - 2) {
        buttonCount = this._totalVisible - 1;
      }
      else if (this._currentPage <
        this._getTotalPages() - this._totalVisible + 4) {
        buttonStart = Math.ceil(this._currentPage - this._totalVisible / 2) + 1;
        buttonCount = this._totalVisible - 3;
      }
      else {
        buttonStart = this._getTotalPages() - this._totalVisible + 2;
        buttonCount = this._totalVisible - 2;
      }
    }
    this._addButtons(buttonStart, buttonCount, size);
    if (morePagesThanVisible) {
      this._buttons.push(this._button(this._getTotalPages(), size));
    }
    return this._buttons;
  }
  render() {
    const classes = {
      'c-pagination': true,
      'c-pagination--small': this.size === 'small',
      'c-pagination--simple': this.simple,
    };
    const buttonsize = this.size === 'small' ? 'x-small' : 'small';
    return (h("nav", { class: classes, role: "navigation", "aria-label": "pagination" }, !this.hideDetails && (h("div", { class: "c-pagination__details" }, this._getItemsPerPage(), h("span", { class: { range: !this.simple } }, this._getRange()))), h("ul", null, this._getArrowLeft(buttonsize), !this.simple && this._getPageButtons(buttonsize), this._getArrowRight(buttonsize))));
  }
  static get watchers() { return {
    "value": ["valueHandler"]
  }; }
  static get style() { return cPaginationCss; }
}, [1, "c-pagination", {
    "value": [16],
    "hideDetails": [4, "hide-details"],
    "simple": [4],
    "size": [1],
    "hideRange": [4, "hide-range"],
    "itemsPerPageOptions": [16],
    "_currentPage": [32],
    "_itemsPerPage": [32],
    "_totalVisible": [32],
    "tick": [32]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["c-pagination", "c-icon-button", "c-menu", "c-menu-items"];
  components.forEach(tagName => { switch (tagName) {
    case "c-pagination":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CPagination);
      }
      break;
    case "c-icon-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "c-menu":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "c-menu-items":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { CPagination as C, defineCustomElement as d };

//# sourceMappingURL=c-pagination2.js.map