var __rest = (this && this.__rest) || function (s, e) {
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
import { mdiArrowDownThin, mdiArrowUpThin, mdiSwapVertical, mdiChevronDown, mdiChevronLeft, mdiChevronRight, } from '@mdi/js';
import { Host, h, Fragment, } from '@stencil/core';
export class CDataTable {
  constructor() {
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
        this._tableElement;
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
  static get is() { return "c-data-table"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["c-data-table.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["c-data-table.css"]
    };
  }
  static get properties() {
    return {
      "data": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "CDataTableData[]",
          "resolved": "CDataTableData[]",
          "references": {
            "CDataTableData": {
              "location": "import",
              "path": "../../types"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Data of the table"
        },
        "defaultValue": "[]"
      },
      "externalData": {
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
          "text": "Externally sorted and paginated data"
        },
        "attribute": "external-data",
        "reflect": false,
        "defaultValue": "false"
      },
      "headers": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "CDataTableHeader[]",
          "resolved": "CDataTableHeader[]",
          "references": {
            "CDataTableHeader": {
              "location": "import",
              "path": "../../types"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Headers of the table"
        },
        "defaultValue": "[]"
      },
      "hideFooter": {
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
          "text": "Hide the footer"
        },
        "attribute": "hide-footer",
        "reflect": false,
        "defaultValue": "false"
      },
      "footerOptions": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "CDataTableFooterOptions",
          "resolved": "CDataTableFooterOptions",
          "references": {
            "CDataTableFooterOptions": {
              "location": "import",
              "path": "../../types"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Items per page options"
        },
        "defaultValue": "{\n    itemsPerPageOptions: [5, 25, 50, 100],\n    hideDetails: false,\n    simple: false,\n    hideRange: false,\n    size: 'default',\n  }"
      },
      "loading": {
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
          "text": "Show a loader on top of the table"
        },
        "attribute": "loading",
        "reflect": false,
        "defaultValue": "false"
      },
      "loadingText": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Text shown when there is no data and the table is loading"
        },
        "attribute": "loading-text",
        "reflect": false,
        "defaultValue": "'Loading data'"
      },
      "noDataText": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Text shown when there are no data available"
        },
        "attribute": "no-data-text",
        "reflect": false,
        "defaultValue": "'No data'"
      },
      "pagination": {
        "type": "unknown",
        "mutable": true,
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
          "text": "Pagination options"
        }
      },
      "selectable": {
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
          "text": "Make rows selectable"
        },
        "attribute": "selectable",
        "reflect": false,
        "defaultValue": "false"
      },
      "singleSelection": {
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
          "text": "Select only a single row at a time"
        },
        "attribute": "single-selection",
        "reflect": false,
        "defaultValue": "false"
      },
      "selectionProperty": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Property used in selections"
        },
        "attribute": "selection-property",
        "reflect": false,
        "defaultValue": "null"
      },
      "singleExpansion": {
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
          "text": "Allow only a single row expanded at a time"
        },
        "attribute": "single-expansion",
        "reflect": false,
        "defaultValue": "false"
      },
      "sortBy": {
        "type": "any",
        "mutable": false,
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Sort data by"
        },
        "attribute": "sort-by",
        "reflect": false,
        "defaultValue": "null"
      },
      "sortDirection": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'asc' | 'desc' | null",
          "resolved": "\"asc\" | \"desc\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Sorting direction"
        },
        "attribute": "sort-direction",
        "reflect": false,
        "defaultValue": "null"
      },
      "stickyHeader": {
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
          "text": "Use sticky header"
        },
        "attribute": "sticky-header",
        "reflect": false,
        "defaultValue": "false"
      },
      "horizontalScrolling": {
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
          "text": "Use horizontal scrolling"
        },
        "attribute": "horizontal-scrolling",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get states() {
    return {
      "_activeRows": {},
      "_data": {},
      "_isIntermediate": {},
      "_isPaginationSimple": {},
      "_selections": {},
      "hasOverflow": {},
      "hiddenHeaders": {},
      "initiallyHiddenHeaders": {},
      "forceRender": {},
      "breakpoints": {},
      "markedFooterWidth": {},
      "parentWidth": {},
      "firstCellHidden": {},
      "lastCellHidden": {}
    };
  }
  static get events() {
    return [{
        "method": "paginate",
        "name": "paginate",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Triggered on pagination"
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
      }, {
        "method": "expand",
        "name": "expand",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Triggered on row expansion"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "sort",
        "name": "sort",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Triggered on sort"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "selection",
        "name": "selection",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Triggered on selection"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
  static get methods() {
    return {
      "clearSelections": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Clear selections externally",
          "tags": []
        }
      }
    };
  }
  static get elementRef() { return "element"; }
  static get watchers() {
    return [{
        "propName": "hiddenHeaders",
        "methodName": "onHeaderChange"
      }, {
        "propName": "data",
        "methodName": "onDataChange"
      }, {
        "propName": "singleSelection",
        "methodName": "onSingleSelectionChange"
      }, {
        "propName": "loading",
        "methodName": "onLoadingChange"
      }];
  }
}
//# sourceMappingURL=c-data-table.js.map
