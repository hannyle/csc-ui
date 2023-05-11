import { proxyCustomElement, HTMLElement, createEvent, h, Fragment, Host } from '@stencil/core/internal/client';
import { d as mdiChevronDown, k as mdiChevronLeft, l as mdiChevronRight, n as mdiSwapVertical, o as mdiArrowUpThin, p as mdiArrowDownThin } from './mdi.js';
import { d as defineCustomElement$8 } from './c-checkbox2.js';
import { d as defineCustomElement$7 } from './c-icon2.js';
import { d as defineCustomElement$6 } from './c-icon-button2.js';
import { d as defineCustomElement$5 } from './c-menu2.js';
import { d as defineCustomElement$4 } from './c-menu-items2.js';
import { d as defineCustomElement$3 } from './c-pagination2.js';
import { d as defineCustomElement$2 } from './c-spacer2.js';

const cDataTableCss = ":host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(140, 140, 140);--csc-primary:rgb(0, 103, 120);--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}:host{display:block;position:relative;width:100%}:host([horizontal-scrolling]){overflow-x:scroll}table,caption,tbody,tfoot,thead,tr,th,td{border:0;font-size:100%;font:inherit;margin:0;padding:0}table{border-collapse:collapse;border-spacing:0}.c-data-table{box-shadow:inset 0 0 0 1px var(--csc-light-grey);width:100%}.c-data-table .children{display:flex;flex-wrap:wrap;gap:4px;width:100%}.c-data-table .children pre{font-family:inherit;white-space:pre-wrap}.c-data-table [data-justify=end],.c-data-table [data-align=end] .children{align-items:flex-end}.c-data-table [data-justify=start],.c-data-table [data-align=start] .children{align-items:flex-start}.c-data-table [data-justify=center],.c-data-table [data-align=center] .children{align-items:center}.c-data-table [data-align=end],.c-data-table [data-justify=end] .children{justify-content:flex-end}.c-data-table [data-align=start],.c-data-table [data-justify=start] .children{justify-content:flex-start}.c-data-table [data-align=center],.c-data-table [data-justify=center] .children{justify-content:center}.c-data-table th,.c-data-table td{font-weight:400}.c-data-table th>div,.c-data-table td>div{align-items:center;box-sizing:border-box;display:flex;line-height:1;padding:12px;width:100%}.c-data-table th{font-size:14px;padding:4px}.c-data-table th.selection{width:56px}.c-data-table th.indicator{width:46px}.c-data-table th>div{border-radius:4px;flex-wrap:nowrap;gap:8px;height:48px;white-space:nowrap}.c-data-table th>div.sortable:hover{background-color:var(--csc-primary-text-hover);color:var(--csc-primary);cursor:pointer}.c-data-table th>div.sortable:hover svg{fill:var(--csc-primary)}.c-data-table th>div.selection--heading{padding-left:8px;padding-right:0;margin-right:-8px}.c-data-table td{font-size:16px}.c-data-table td>div{align-items:flex-start;flex-direction:column;gap:8px;justify-content:center;min-height:56px;padding:12px}.c-data-table td>div.selection{margin-right:-4px;padding:7px 0 7px 12px}.c-data-table td>div c-tag{--c-tag-margin:0px}.c-data-table td.loader{background-color:var(--csc-light-grey);height:2px;position:relative}.c-data-table td.loader>div{height:2px;min-height:auto;padding:0}.c-data-table td.info>div{height:108px;justify-content:center}.c-data-table td svg{transition:transform 0.3s cubic-bezier(0.25, 0.8, 0.5, 1)}.c-data-table thead{background-color:#fff;position:relative}.c-data-table thead.sticky{box-shadow:0 2px 0 0 var(--csc-light-grey);position:sticky;top:0;z-index:3}.c-data-table thead .c-data-table__header-indicators{pointer-events:none}.c-data-table thead .c-data-table__header-indicators th>div{margin-top:-56px;display:flex;justify-items:space-between}.c-data-table thead .c-data-table__header-indicators c-icon-button{background-color:rgba(255, 255, 255, 0.75);border-radius:50%;pointer-events:all}.c-data-table tfoot{background-color:#fff}.c-data-table tfoot tr{box-shadow:inset 0 1px 0 0 var(--csc-light-grey)}.c-data-table tfoot td>div{align-items:center;flex-direction:row;justify-content:flex-start;min-height:48px}.c-data-table tfoot td c-pagination{flex:1}.c-data-table tbody{}@supports (-webkit-hyphens: none){.c-data-table tbody tr{border-bottom:1px solid var(--csc-light-grey)}}.c-data-table tbody tr{box-shadow:inset 0 1px 0 0 var(--csc-light-grey)}.c-data-table tbody tr.actions{box-shadow:none}.c-data-table tbody tr.actions td>div{background-color:rgba(0, 0, 0, 0.015);height:auto}.c-data-table tbody tr.active{box-shadow:inset 2px 0 0 var(--csc-primary), inset -2px 0 0 var(--csc-primary), inset 0 2px 0 var(--csc-primary);border-radius:6px 6px 0 0}.c-data-table tbody tr.active svg{transform:rotate(180deg)}.c-data-table tbody tr.active+.additional-data{border-radius:0 0 6px 6px;box-shadow:inset 2px 0 0 var(--csc-primary), inset -2px 0 0 var(--csc-primary), inset 0 -2px 0 var(--csc-primary)}.c-data-table tbody tr.active.selected{box-shadow:inset 4px 0 0 var(--csc-primary), inset -2px 0 0 var(--csc-primary), inset 0 2px 0 var(--csc-primary)}.c-data-table tbody tr.selected{background-color:rgba(0, 103, 120, 0.05);box-shadow:inset 4px 0 0 var(--csc-primary), inset 0 1px 0 0 var(--csc-light-grey)}.c-data-table tbody tr.selected+.additional-data{box-shadow:inset 4px 0 0 var(--csc-primary), inset -2px 0 0 var(--csc-primary), inset 0 -2px 0 var(--csc-primary)}.c-data-table__loader{background-color:var(--csc-light-grey);height:2px;overflow:hidden;position:absolute;width:100%}.c-data-table .loading-bar{animation:loading 1s ease-in 0.5s infinite;background-color:var(--csc-primary);height:100%;left:-50%;position:absolute;width:50%}@keyframes loading{0%{transform:translateX(0)}to{transform:translateX(400%)}}.c-data-table .additional-data{display:none}.c-data-table .additional-data.active{display:table-row}.c-data-table .additional-data ul{list-style:none;margin:0;padding:0;width:100%}.c-data-table .additional-data ul li{padding:12px}.c-data-table .additional-data ul li:not(:last-child){box-shadow:inset 0 -1px 0 0 var(--csc-light-grey)}.c-data-table .additional-data ul li span{color:var(--csc-primary);font-weight:600}.c-data-table .additional-data ul li .title{display:flex;gap:8px}.c-data-table .additional-data ul li .title+.children{margin-top:8px}.c-data-table--scrollable{position:relative}.c-data-table--hoverable tbody tr:not(.additional-data){cursor:pointer}.c-data-table--hoverable tbody tr:not(.additional-data):hover{background-color:var(--csc-primary-text-hover);border-radius:6px;box-shadow:inset 0 0 0 2px var(--csc-primary);overflow:hidden}.c-data-table--hoverable tbody tr:not(.additional-data).active:hover{border-radius:6px 6px 0 0;box-shadow:inset 2px 0 0 var(--csc-primary), inset -2px 0 0 var(--csc-primary), inset 0 2px 0 var(--csc-primary)}.c-data-table--hoverable tbody tr:not(.additional-data).selected.active:hover{border-radius:6px 6px 0 0;box-shadow:inset 4px 0 0 var(--csc-primary), inset -2px 0 0 var(--csc-primary), inset 0 2px 0 var(--csc-primary)}.c-data-table--hoverable tbody tr:not(.additional-data).selected:hover{border-radius:6px;box-shadow:inset 4px 0 0 var(--csc-primary), inset 0 0 0 2px var(--csc-primary)}.sorted-column{background-color:rgba(0, 103, 120, 0.05)}";

var __rest = (undefined && undefined.__rest) || function (s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
const CDataTable$1 = proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.paginate = createEvent(this, "paginate", 7);
    this.expand = createEvent(this, "expand", 7);
    this.sort = createEvent(this, "sort", 7);
    this.selection = createEvent(this, "selection", 7);
    this._debounce = null;
    this._extraHeaders = [];
    this._isValidated = false;
    this._isVisible = false;
    this.data = [];
    this.externalData = false;
    this.headers = [];
    this.hideFooter = false;
    this.footerOptions = {
      itemsPerPageOptions: [5, 25, 50, 100],
      hideDetails: false,
      simple: false,
      hideRange: false,
      size: 'default',
    };
    this.loading = false;
    this.loadingText = 'Loading data';
    this.noDataText = 'No data';
    this.pagination = undefined;
    this.selectable = false;
    this.singleSelection = false;
    this.selectionProperty = null;
    this.singleExpansion = false;
    this.sortBy = null;
    this.sortDirection = null;
    this.stickyHeader = false;
    this.horizontalScrolling = false;
    this._activeRows = [];
    this._data = [];
    this._isIntermediate = false;
    this._isPaginationSimple = false;
    this._selections = [];
    this.hasOverflow = false;
    this.hiddenHeaders = [];
    this.initiallyHiddenHeaders = [];
    this.forceRender = false;
    this.breakpoints = [];
    this.markedFooterWidth = 0;
    this.parentWidth = 0;
    this.firstCellHidden = false;
    this.lastCellHidden = false;
  }
  onHeaderChange() {
    this._getData();
  }
  onDataChange() {
    this._getData();
  }
  onSingleSelectionChange() {
    this.clearSelections();
  }
  onLoadingChange(loading) {
    if (!loading) {
      this._setIntermediateStatus();
    }
  }
  async clearSelections() {
    this._selections = [];
    this._emitChange();
  }
  componentWillLoad() {
    var _a, _b;
    this.sortBy = (_a = this.sortBy) !== null && _a !== void 0 ? _a : this.headers[0].key;
    this.sortDirection = (_b = this.sortDirection) !== null && _b !== void 0 ? _b : 'asc';
    this._getData();
    this.initiallyHiddenHeaders = this.headers
      .filter((header) => !!header.hidden)
      .map((header) => header.key);
    this.hiddenHeaders = [
      ...new Set([...this.hiddenHeaders, ...this.initiallyHiddenHeaders]),
    ];
  }
  componentDidLoad() {
    if (!this.horizontalScrolling) {
      this._rootIntersectionObserver = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          this._handleResponsiveHeaders();
          this._isVisible = true;
        }
      });
      this._resizeObserver = new ResizeObserver(() => {
        this._handleResize();
      });
      this._rootIntersectionObserver.observe(this.element);
    }
    else {
      const [firstCell] = this._headerKeys;
      const lastCell = this._headerKeys[this._headerKeys.length - 1];
      this._firstCellIntersectionObserver = new IntersectionObserver(([entry]) => {
        this.firstCellHidden = !entry.isIntersecting;
      }, { threshold: 1, rootMargin: '16px', root: this.element });
      this._lastCellIntersectionObserver = new IntersectionObserver(([entry]) => {
        this.lastCellHidden = !entry.isIntersecting;
      }, { threshold: 1, rootMargin: '16px', root: this.element });
      this._resizeObserver = new ResizeObserver(() => {
        this._handleScrollWidth();
      });
      this._firstCellIntersectionObserver.observe(this._tableElement.querySelector(`[data-id="${firstCell}"]`));
      this._lastCellIntersectionObserver.observe(this._tableElement.querySelector(`[data-id="${lastCell}"]`));
    }
    this._resizeObserver.observe(this.element);
  }
  disconnectedCallback() {
    var _a, _b, _c, _d;
    (_a = this._resizeObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
    (_b = this._rootIntersectionObserver) === null || _b === void 0 ? void 0 : _b.disconnect();
    (_c = this._firstCellIntersectionObserver) === null || _c === void 0 ? void 0 : _c.disconnect();
    (_d = this._lastCellIntersectionObserver) === null || _d === void 0 ? void 0 : _d.disconnect();
  }
  _handleHeaderVisibility(header, rootWidth, x) {
    var _a;
    const index = this._headers.findIndex((h) => h.key === header.dataset.id);
    const position = header.getBoundingClientRect();
    const isFullyVisible = position.right - x <= rootWidth;
    const isLastVisibleHeader = header.dataset.id === Array.from(this._headerRefs.keys()).at(0);
    const isPinned = (_a = this._headers[index]) === null || _a === void 0 ? void 0 : _a.pinned;
    if (!isFullyVisible && isPinned && index >= 1) {
      const nextUnpinnedHeader = Array.from(this._headerRefs.values())
        .reverse()
        .find((hdr) => {
        var _a;
        if (!hdr)
          return false;
        return !((_a = this._headers.find((h) => h.key === hdr.dataset.id)) === null || _a === void 0 ? void 0 : _a.pinned);
      });
      this.hiddenHeaders = [
        ...new Set([
          ...this.initiallyHiddenHeaders,
          ...this.hiddenHeaders,
          (nextUnpinnedHeader || header).dataset.id,
        ]),
      ];
      return;
    }
    if (!isFullyVisible && !isLastVisibleHeader) {
      this.hiddenHeaders = [
        ...new Set([
          ...this.initiallyHiddenHeaders,
          ...this.hiddenHeaders,
          header.dataset.id,
        ]),
      ];
    }
  }
  _handleResponsiveHeaders() {
    var _a, _b;
    const { width: tableWidth } = this._tableElement.getBoundingClientRect();
    const { width: rootWidth, x } = this.element.getBoundingClientRect();
    const footerWidth = ((_b = (_a = this._footerElement) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()) === null || _b === void 0 ? void 0 : _b.width) || 0;
    if (this._debounce !== null) {
      clearTimeout(this._debounce);
      this._debounce = null;
    }
    if (rootWidth < tableWidth) {
      this.breakpoints = [...new Set([...this.breakpoints, tableWidth])];
      setTimeout(() => {
        for (const header of this._headerRefs.values()) {
          if (header) {
            this._handleHeaderVisibility(header, rootWidth, x);
          }
        }
        this._debounce = setTimeout(() => {
          if (rootWidth < footerWidth) {
            this.markedFooterWidth = footerWidth;
            this._isPaginationSimple = true;
          }
        }, 200);
      }, 0);
    }
    else if (this.breakpoints.length > 0 &&
      tableWidth >= this.breakpoints[this.breakpoints.length - 1]) {
      this.breakpoints.pop();
      const displayHeader = this.headers.find((header) => this.hiddenHeaders.includes(header.key));
      if (!!displayHeader) {
        const headerIndex = this.hiddenHeaders.indexOf(displayHeader.key);
        this.hiddenHeaders.splice(headerIndex, 1);
        this.hiddenHeaders = [
          ...new Set([...this.hiddenHeaders, ...this.initiallyHiddenHeaders]),
        ];
      }
    }
    this._debounce = setTimeout(() => {
      if (rootWidth >= this.markedFooterWidth && this.markedFooterWidth > 0) {
        this._isPaginationSimple = false;
      }
    }, 200);
  }
  _addHeaderRef(key, el) {
    if (!this._headerRefs) {
      this._headerRefs = new Map([[key, el]]);
      return;
    }
    this._headerRefs.set(key, el);
  }
  _getData() {
    this._extraHeaders = this.headers.filter((header) => { var _a; return !Object.keys(((_a = this.data) === null || _a === void 0 ? void 0 : _a[0]) || {}).includes(header.key); });
    const extraCells = this._extraHeaders.reduce((cells, header) => (Object.assign(Object.assign({}, cells), { [header.key]: {
        value: null,
      } })), {});
    const items = this.data
      .map((row) => (Object.assign(Object.assign({}, row), extraCells)))
      .reduce((data, cell) => {
      const item = {
        _hiddenData: [],
      };
      Object.keys(cell).forEach((key) => {
        item[key] = cell[key];
      });
      this.hiddenHeaders.forEach((header) => {
        const cellData = this.headers.find((h) => h.key === header);
        item._hiddenData.push({
          id: cellData === null || cellData === void 0 ? void 0 : cellData.key,
          key: cellData === null || cellData === void 0 ? void 0 : cellData.value,
          value: cell[header],
        });
      });
      data.push(item);
      return data;
    }, []);
    this._data = this._sortData(items);
    this.pagination = Object.assign(Object.assign({}, this.pagination), { itemCount: this.data.length });
    this._validateProps(this._data[0]);
    this._handleScrollWidth();
    requestAnimationFrame(() => {
      this._handleResize();
    });
  }
  _getSelectionValue(row, index) {
    var _a;
    return !!this.selectionProperty
      ? ((_a = row[this.selectionProperty]) === null || _a === void 0 ? void 0 : _a.value) || index
      : index;
  }
  get _headers() {
    return this.headers
      .map((header) => (Object.assign(Object.assign({}, header), { pinned: !!header.pinned })))
      .filter((header) => !this.hiddenHeaders.includes(header.key) && !header.hidden);
  }
  get _headerKeys() {
    return this._headers.map((header) => header.key);
  }
  get _hasHiddenData() {
    return !!this.hiddenHeaders.length;
  }
  _emitChange() {
    this.selection.emit(this._selections);
  }
  _setIntermediateStatus() {
    requestAnimationFrame(() => {
      this._isIntermediate = this._isPageIntermediate();
      this._refresh();
    });
  }
  _sortData(data) {
    if (!this.sortBy || this.externalData)
      return data;
    const sorted = data.sort((a, b) => {
      const valueA = a[this.sortBy].value;
      const valueB = b[this.sortBy].value;
      if (typeof valueA === 'string') {
        if (this.sortDirection === 'asc') {
          return valueA.toLowerCase().localeCompare(valueB.toLowerCase());
        }
        return valueB.toLowerCase().localeCompare(valueA.toLowerCase());
      }
      if (typeof valueA === 'number') {
        if (this.sortDirection === 'asc') {
          return valueA - valueB;
        }
        return valueB - valueA;
      }
    });
    return !!this.pagination && !this.hideFooter
      ? sorted.slice(this.pagination.startFrom, this.pagination.endTo + 1)
      : sorted;
  }
  _handleScrollWidth() {
    this.parentWidth = this.element.getBoundingClientRect().width;
  }
  _handleResize() {
    if (this._isVisible) {
      this._handleResponsiveHeaders();
    }
  }
  _getIndex(index) {
    let realIndex = index;
    if (!this.selectionProperty &&
      !!this.pagination &&
      typeof realIndex === 'number') {
      realIndex += this.pagination.startFrom;
      if (this.sortDirection === 'desc') {
        realIndex = this.pagination.itemCount - 1 - realIndex;
      }
    }
    return realIndex;
  }
  _getSelectionsForPage() {
    return this._selections.filter((selection) => this._data
      .map((row, index) => this._getSelectionValue(row, this._getIndex(index)))
      .includes(selection));
  }
  _hasSelectionsOnPage() {
    return this._getSelectionsForPage().length > 0;
  }
  _isPageIntermediate() {
    const selectionsInPage = this._getSelectionsForPage();
    return (this._hasSelectionsOnPage() && selectionsInPage.length < this._data.length);
  }
  _onHeadingSelection(event) {
    event === null || event === void 0 ? void 0 : event.stopPropagation();
    event === null || event === void 0 ? void 0 : event.preventDefault();
    if (event instanceof KeyboardEvent &&
      event.type === 'keyup' &&
      event.key !== ' ') {
      return;
    }
    if (this._debounce !== null) {
      clearTimeout(this._debounce);
      this._debounce = null;
    }
    this._debounce = setTimeout(() => {
      if (this._data.length === this._getSelectionsForPage().length) {
        this._selections = [
          ...this._selections.filter((selection) => !this._data
            .map((row, index) => this._getSelectionValue(row, this._getIndex(index)))
            .includes(selection)),
        ];
        this._setIntermediateStatus();
        this._emitChange();
        return;
      }
      this._selections = [
        ...new Set([
          ...this._selections,
          ...this._data.map((row, index) => this._getSelectionValue(row, this._getIndex(index))),
        ]),
      ];
      this._setIntermediateStatus();
      this._emitChange();
    }, 200);
  }
  _onPaginationChange(event) {
    if (this.externalData) {
      this.paginate.emit(event.detail);
      return;
    }
    this.pagination = Object.assign(Object.assign({}, this.pagination), event.detail);
    this._setIntermediateStatus();
    this._getData();
  }
  _onSelection(value) {
    if (this.singleSelection) {
      this._selections = [value];
      this._emitChange();
      this._refresh();
      return;
    }
    if (this._selections.includes(value)) {
      this._selections = this._selections.filter((selection) => selection !== value);
    }
    else {
      this._selections = [...this._selections, value];
    }
    this._emitChange();
    this._setIntermediateStatus();
  }
  _onSort(key) {
    if (this.sortBy === key) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    }
    else {
      this.sortDirection = 'asc';
    }
    this.sortBy = key;
    this.sort.emit({ sortBy: this.sortBy, direction: this.sortDirection });
    this._getData();
    this._setIntermediateStatus();
    this._refresh();
  }
  _onToggleAdditionalData(event, value, row) {
    if (!this._hasHiddenData ||
      event.target.tagName === 'C-CHECKBOX')
      return;
    const isActive = this.singleExpansion
      ? this._activeRows[0] === value
      : this._activeRows.includes(value);
    const { _hiddenData } = row, data = __rest(row, ["_hiddenData"]);
    Object.keys(data).forEach((key) => {
      data[key] = data[key].value;
    });
    _hiddenData.forEach((hiddenRow) => {
      data[hiddenRow.id] = hiddenRow.value.value;
    });
    this.expand.emit({
      active: !isActive,
      row: data,
    });
    if (this.singleExpansion) {
      this._activeRows = isActive ? [] : [value];
      return;
    }
    if (isActive) {
      this._activeRows = this._activeRows.filter((i) => i !== value);
      return;
    }
    this._activeRows = [...this._activeRows, value];
  }
  _handleKeyUp(event, value, row) {
    event.preventDefault();
    if (event.key === 'Enter') {
      this._onToggleAdditionalData(event, value, row);
    }
  }
  _refresh() {
    this.forceRender = !this.forceRender;
  }
  _renderAdditioanlDataRow(rowIndex, rowData = {}) {
    return (this._hasHiddenData && (h("tr", { class: {
        'additional-data': true,
        active: this._activeRows.includes(rowIndex),
      } }, h("td", { colSpan: 100 }, h("div", null, h("ul", null, this._renderHiddenCells(rowIndex), this._renderHiddenHeaderChildren(rowIndex, rowData)))))));
  }
  _renderCellData(key, options, colIndex, rowIndex) {
    var _a;
    const component = options.component || ((_a = this._headers[colIndex]) === null || _a === void 0 ? void 0 : _a.component);
    const Tag = (component === null || component === void 0 ? void 0 : component.tag) || null;
    const injectValue = !!(component === null || component === void 0 ? void 0 : component.injectValue);
    const params = (component === null || component === void 0 ? void 0 : component.params) || {};
    if (injectValue) {
      params.value = options.value;
    }
    return !!Tag ? (h(Tag, Object.assign({}, params, { onClick: (event) => {
        var _a;
        (_a = params === null || params === void 0 ? void 0 : params.onClick) === null || _a === void 0 ? void 0 : _a.call(params, {
          index: rowIndex,
          value: options.value,
          data: this.data[rowIndex],
          event,
          key,
        });
      } }), options.formattedValue || options.value)) : (options.formattedValue || options.value);
  }
  _renderCellChildren(options, index, key, data) {
    return options.children.map((child) => {
      var _a, _b;
      const Tag = (_a = child.component) === null || _a === void 0 ? void 0 : _a.tag;
      const params = ((_b = child.component) === null || _b === void 0 ? void 0 : _b.params) || {};
      const { _hiddenData = [] } = data, rest = __rest(data, ["_hiddenData"]);
      const flatData = Object.assign(Object.assign({}, rest), _hiddenData.reduce((obj, row) => {
        obj[row.id] = row.value;
        return obj;
      }, {}));
      return !!Tag ? (h(Tag, Object.assign({}, params, { onClick: (event) => {
          var _a;
          (_a = params === null || params === void 0 ? void 0 : params.onClick) === null || _a === void 0 ? void 0 : _a.call(params, {
            value: options.value,
            index,
            event,
            key,
            data: flatData,
          });
        } }), child.value)) : (child.value);
    });
  }
  _renderExpansionIndicator(rowIndex, rowData = {}) {
    return (this._hasHiddenData && (h("td", null, h("div", { tabindex: "0", onKeyUp: (event) => this._handleKeyUp(event, rowIndex, rowData) }, h("svg", { width: "22", height: "22", viewBox: "0 0 24 24" }, h("path", { d: mdiChevronDown }))))));
  }
  _renderHiddenCells(index) {
    return this._data[index]._hiddenData
      .filter((d) => !this._extraHeaders.find((h) => h.key === d.id))
      .map(({ id, key, value: options }) => {
      const index = this._headers.findIndex((h) => h.key === id);
      return (h("li", null, !!key && (h("div", { class: "title" }, h("span", null, key, ":"), this._renderCellData(id, options, index, index))), !!options.children && (h("div", { class: "children" }, this._renderCellChildren(options, index, id, {})))));
    });
  }
  _renderHiddenHeaderChildren(index, rowData) {
    return this._data[index]._hiddenData.map(({ id, key }) => {
      var _a;
      const headerIndex = this.headers.findIndex((h) => h.key === id);
      return (!!((_a = this.headers[headerIndex]) === null || _a === void 0 ? void 0 : _a.children) && (h("li", null, h("div", { class: "children" }, this._renderCellChildren(this.headers[headerIndex], index, key, rowData)))));
    });
  }
  _renderLoaderRow() {
    return (h("tr", null, h("td", { class: "loader", colSpan: 100 }, this.loading && (h("div", { class: "c-data-table__loader" }, h("div", { class: "loading-bar" }))))));
  }
  _renderRows() {
    return (!!this._data.length &&
      Object.values(this._data).map((rowData, rowIndex) => {
        let selectionValue = this._getSelectionValue(rowData, rowIndex);
        if (!this.selectionProperty && typeof selectionValue === 'number') {
          selectionValue = this._getIndex(selectionValue);
        }
        const isSelected = !!this._selections.includes(selectionValue);
        return (h(Fragment, null, h("tr", { class: {
            active: this._activeRows.includes(rowIndex),
            parent: this._hasHiddenData,
            selected: isSelected,
          }, onClick: (event) => this._onToggleAdditionalData(event, rowIndex, rowData) }, this._renderSelectionCell(isSelected, selectionValue), this._renderExpansionIndicator(rowIndex, rowData), this._renderTableCells(rowIndex, rowData)), this._renderAdditioanlDataRow(rowIndex, rowData)));
      }));
  }
  _renderSelectionCell(isSelected, selectionValue) {
    return (this.selectable && (h("td", null, h("div", { class: "selection" }, h("c-checkbox", { value: isSelected, "hide-details": true, onChangeValue: () => this._onSelection(selectionValue) })))));
  }
  _renderSortIndicator(key) {
    let iconPath = mdiSwapVertical;
    if (key === this.sortBy && this.sortDirection === 'asc') {
      iconPath = mdiArrowUpThin;
    }
    if (key === this.sortBy && this.sortDirection === 'desc') {
      iconPath = mdiArrowDownThin;
    }
    return (h("svg", { width: "24", height: "24", viewBox: "0 0 24 24", tabindex: 0 }, h("path", { d: iconPath })));
  }
  _renderStatusTextRow() {
    return (!this._data.length && (h("tr", null, h("td", { class: "info", colSpan: 100 }, h("div", null, this.loading ? this.loadingText : this.noDataText)))));
  }
  _renderTableBody() {
    return (h("tbody", null, this._renderLoaderRow(), this._renderStatusTextRow(), this._renderRows()));
  }
  _renderTableCell(key, options, colIndex, rowIndex, rowData = {}) {
    var _a;
    const header = this.headers.find((header) => header.key === key);
    const isHidden = this.hiddenHeaders.includes(key);
    return (!!header &&
      !isHidden && (h("td", null, h("div", { "data-align": header === null || header === void 0 ? void 0 : header.align, "data-justify": header === null || header === void 0 ? void 0 : header.justify }, this._renderCellData(key, options, colIndex, rowIndex), !!options.children && (h("div", { class: "children" }, this._renderCellChildren(options, rowIndex, key, rowData))), !!((_a = this.headers.find((header) => header.key === key)) === null || _a === void 0 ? void 0 : _a.children) && (h("div", { class: "children" }, this._renderCellChildren(this.headers.find((header) => header.key === key), rowIndex, key, rowData)))))));
  }
  _renderTableCells(rowIndex, rowData = {}) {
    return this._sortCellProperties(rowData).map(([key, options], index) => this._renderTableCell(key, options, index, rowIndex, rowData));
  }
  _renderTableFooter() {
    const footerStyles = this.horizontalScrolling
      ? {
        maxWidth: `${this.parentWidth}px`,
        position: 'sticky',
        left: '0',
      }
      : {};
    return (!!this.pagination && (h("tfoot", null, h("tr", { ref: (el) => (this._footerElement = el) }, h("td", { colSpan: 100 }, h("div", { class: "c-data-table__footer", style: footerStyles }, h("c-pagination", Object.assign({}, this.footerOptions, { value: this.pagination, simple: this._isPaginationSimple, onChangeValue: (e) => this._onPaginationChange(e) }))))))));
  }
  _renderTableHeader() {
    const indicatorRowStyles = this.horizontalScrolling
      ? {
        width: `${this.parentWidth - 8}px`,
        position: 'sticky',
        left: '4px',
      }
      : {};
    return (h("thead", { class: { sticky: this.stickyHeader } }, h("tr", null, this.selectable && (h("th", { class: "selection" }, !this.singleSelection && (h("div", { class: "selection--heading" }, h("c-checkbox", { value: this._hasSelectionsOnPage(), intermediate: this._isIntermediate, "hide-details": true, onClick: (event) => this._onHeadingSelection(event), onKeyUp: (event) => this._onHeadingSelection(event) }))))), this._hasHiddenData && h("th", { class: "indicator" }), !!this._headers.length &&
      this._headers.map((header) => {
        const isSortable = !!header.sortable || typeof header.sortable === 'undefined';
        const params = Object.assign(Object.assign({ 'data-id': header.key, ref: (el) => this._addHeaderRef(header.key, el) }, (!!header && {
          style: Object.assign({}, (header.width && { minWidth: header.width })),
        })), (isSortable && {
          onClick: () => this._onSort(header.key),
          onKeyUp: () => this._onSort(header.key),
        }));
        return (h("th", Object.assign({}, params), h("div", { class: { sortable: isSortable } }, header.value, isSortable && this._renderSortIndicator(header.key))));
      })), this.horizontalScrolling && (h("tr", { class: "c-data-table__header-indicators" }, h("th", { colSpan: 100 }, h("div", { style: indicatorRowStyles }, this.firstCellHidden && (h("c-icon-button", { class: "first", size: "small", outlined: true, onClick: () => this._scrollLeft() }, h("c-icon", { path: mdiChevronLeft }))), h("c-spacer", null), this.lastCellHidden && (h("c-icon-button", { class: "last", size: "small", outlined: true, onClick: () => this._scrollRight() }, h("c-icon", { path: mdiChevronRight })))))))));
  }
  _scrollLeft() {
    const leftBorder = this.element.getBoundingClientRect().left;
    const hiddenHeaderKeys = this._headerKeys.filter((key) => {
      var _a;
      const headerCellLeftBorder = (_a = this._tableElement
        .querySelector(`[data-id="${key}"]`)) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect().left;
      return headerCellLeftBorder < leftBorder - 2;
    });
    if (hiddenHeaderKeys.length) {
      if (hiddenHeaderKeys.length === 1) {
        this._tableElement.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'start',
        });
        return;
      }
      this._tableElement
        .querySelector(`[data-id="${hiddenHeaderKeys[hiddenHeaderKeys.length - 1]}"]`)
        .scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }
  _scrollRight() {
    const rightBorder = this.element.getBoundingClientRect().right;
    const hiddenHeaderKeys = this._headerKeys.filter((key) => {
      var _a;
      const headerCellRightBorder = (_a = this._tableElement
        .querySelector(`[data-id="${key}"]`)) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect().right;
      return headerCellRightBorder > rightBorder + 2;
    });
    if (hiddenHeaderKeys.length) {
      this._tableElement
        .querySelector(`[data-id="${hiddenHeaderKeys[0]}"]`)
        .scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }
  _sortCellProperties(row) {
    const sorted = Object.entries(row)
      .filter(([key]) => ![...this.hiddenHeaders, '_hiddenData'].includes(key))
      .sort(([keyA], [keyB]) => this._headerKeys.indexOf(keyA) - this._headerKeys.indexOf(keyB));
    return sorted;
  }
  _validateProps(data) {
    if (!!data &&
      !this._isValidated &&
      this.selectionProperty !== null &&
      !data[this.selectionProperty]) {
      console.warn(`[C-DATA-TABLE] Invalid selection property '${this.selectionProperty}'. Using row index as a fallback. This may lead to unexpected behavior.`);
      this._isValidated = true;
    }
  }
  render() {
    const tableClasses = {
      'c-data-table': true,
      'c-data-table--hoverable': this.selectable || this._hasHiddenData,
      'c-data-table--scrollable': this.horizontalScrolling,
    };
    return (h(Host, null, h("table", { class: tableClasses, ref: (el) => (this._tableElement = el) }, h("colgroup", null, [
      ...(this.selectable ? ['_selection'] : []),
      ...(this.hiddenHeaders.length ? ['_hidden'] : []),
      ...this._headerKeys,
    ].map((key) => (h("col", { class: this.sortBy === key && 'sorted-column' })))), this._renderTableHeader(), this._renderTableBody(), !this.hideFooter && this._renderTableFooter())));
  }
  get element() { return this; }
  static get watchers() { return {
    "hiddenHeaders": ["onHeaderChange"],
    "data": ["onDataChange"],
    "singleSelection": ["onSingleSelectionChange"],
    "loading": ["onLoadingChange"]
  }; }
  static get style() { return cDataTableCss; }
}, [1, "c-data-table", {
    "data": [16],
    "externalData": [4, "external-data"],
    "headers": [16],
    "hideFooter": [4, "hide-footer"],
    "footerOptions": [16],
    "loading": [4],
    "loadingText": [1, "loading-text"],
    "noDataText": [1, "no-data-text"],
    "pagination": [1040],
    "selectable": [4],
    "singleSelection": [4, "single-selection"],
    "selectionProperty": [1, "selection-property"],
    "singleExpansion": [4, "single-expansion"],
    "sortBy": [8, "sort-by"],
    "sortDirection": [1, "sort-direction"],
    "stickyHeader": [4, "sticky-header"],
    "horizontalScrolling": [4, "horizontal-scrolling"],
    "_activeRows": [32],
    "_data": [32],
    "_isIntermediate": [32],
    "_isPaginationSimple": [32],
    "_selections": [32],
    "hasOverflow": [32],
    "hiddenHeaders": [32],
    "initiallyHiddenHeaders": [32],
    "forceRender": [32],
    "breakpoints": [32],
    "markedFooterWidth": [32],
    "parentWidth": [32],
    "firstCellHidden": [32],
    "lastCellHidden": [32],
    "clearSelections": [64]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["c-data-table", "c-checkbox", "c-icon", "c-icon-button", "c-menu", "c-menu-items", "c-pagination", "c-spacer"];
  components.forEach(tagName => { switch (tagName) {
    case "c-data-table":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CDataTable$1);
      }
      break;
    case "c-checkbox":
      if (!customElements.get(tagName)) {
        defineCustomElement$8();
      }
      break;
    case "c-icon":
      if (!customElements.get(tagName)) {
        defineCustomElement$7();
      }
      break;
    case "c-icon-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$6();
      }
      break;
    case "c-menu":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "c-menu-items":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "c-pagination":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "c-spacer":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const CDataTable = CDataTable$1;
const defineCustomElement = defineCustomElement$1;

export { CDataTable, defineCustomElement };

//# sourceMappingURL=c-data-table.js.map