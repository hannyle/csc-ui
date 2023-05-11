import { h, } from '@stencil/core';
import { mdiChevronLeft, mdiChevronRight, mdiDotsHorizontal } from '@mdi/js';
export class CPagination {
  constructor() {
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
  static get is() { return "c-pagination"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["c-pagination.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["c-pagination.css"]
    };
  }
  static get properties() {
    return {
      "value": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "CPaginationOptions",
          "resolved": "CPaginationOptions",
          "references": {
            "CPaginationOptions": {
              "location": "import",
              "path": "../../types"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Object containing values that are needed for pagination.\n\nNote! startFrom and endTo are assigned automatically to the object based on other values"
        }
      },
      "hideDetails": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Hide details (per page dropdown and the 'x - y of n pages' text)"
        },
        "attribute": "hide-details",
        "reflect": false,
        "defaultValue": "false"
      },
      "simple": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Hide page number buttons"
        },
        "attribute": "simple",
        "reflect": false,
        "defaultValue": "false"
      },
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'default' | 'small'",
          "resolved": "\"default\" | \"small\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Hide details (per page dropdown and the 'x - y of n pages' text)"
        },
        "attribute": "size",
        "reflect": false,
        "defaultValue": "'default'"
      },
      "hideRange": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Hide range indicator"
        },
        "attribute": "hide-range",
        "reflect": false,
        "defaultValue": "false"
      },
      "itemsPerPageOptions": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "number[]",
          "resolved": "number[]",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Items per page options"
        },
        "defaultValue": "[5, 25, 50, 100]"
      }
    };
  }
  static get states() {
    return {
      "_currentPage": {},
      "_itemsPerPage": {},
      "_totalVisible": {},
      "tick": {}
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
          "text": "Triggered when values are changed"
        },
        "complexType": {
          "original": "CPaginationOptions",
          "resolved": "CPaginationOptions",
          "references": {
            "CPaginationOptions": {
              "location": "import",
              "path": "../../types"
            }
          }
        }
      }];
  }
  static get watchers() {
    return [{
        "propName": "value",
        "methodName": "valueHandler"
      }];
  }
}
//# sourceMappingURL=c-pagination.js.map
