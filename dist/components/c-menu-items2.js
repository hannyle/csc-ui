import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const cMenuItemsCss = ":host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(140, 140, 140);--csc-primary:rgb(0, 103, 120);--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}:host{--c-menu-item-font-size:14px;position:absolute;border-radius:inherit;display:flex;left:0;pointer-events:none;top:0;bottom:0;right:0;inset:inherit}ul.c-menu-items{margin:0;padding:0;background-color:#fff;list-style:none;animation:0.1s 1 fadeIn cubic-bezier(0.25, 0.8, 0.5, 1);box-shadow:2px 4px 10px rgba(0, 0, 0, 0.1607843137);width:100%;overflow-y:scroll;pointer-events:auto;border-radius:4px;visibility:hidden}ul.c-menu-items--small{--c-menu-item-font-size:12px}ul.c-menu-items--active{visibility:visible}li{align-items:center;background:#fff;column-gap:12px;cursor:pointer;display:flex;flex-wrap:nowrap;font-size:var(--c-menu-item-font-size);height:var(--c-menu-item-height);padding-left:10px;padding-right:10px;outline:none;white-space:nowrap;pointer-events:auto}li:not(.disabled):hover,li.active{background:#d8e8ea;color:var(--csc-primary)}li.icon-start{flex-direction:row-reverse;justify-content:flex-end}li.icon-end{justify-content:space-between}li.disabled{cursor:default;color:rgba(0, 0, 0, 0.4)}@keyframes fadeIn{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:translateY(0)}}";

const CMenuItems = proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.close = createEvent(this, "close", 7);
    this.open = createEvent(this, "open", 7);
    this._parentTop = 0;
    this._itemHeight = 42;
    this._itemHeightSmall = 36;
    this._renderItem = (item) => {
      const classes = {
        disabled: item.disabled,
        'icon-start': item.iconPosition === 'start',
        'icon-end': item.iconPosition === 'end',
      };
      const onItemClick = (event, item) => {
        event.stopPropagation();
        if (!item.disabled) {
          item.action();
          this.close.emit();
        }
      };
      return (h("li", { "aria-disabled": (!!item.disabled).toString(), class: classes, tabindex: "-1", role: "menuitem", onClick: (event) => onItemClick(event, item) }, item.name, item.icon && (h("svg", { class: "icon", width: "20", height: "20", viewBox: "0 0 24 24" }, h("path", { d: item.icon })))));
    };
    this.items = [];
    this.small = false;
    this.active = false;
    this.parentType = 'menu';
    this.parent = undefined;
    this.top = 0;
    this.index = null;
    this.itemsPerPage = 6;
    this.scrollingParent = undefined;
    this.isInView = true;
    this.currentIndex = null;
  }
  onIndexChange(index) {
    this.listItems.forEach((item, i) => {
      item.classList.toggle('active', i === index);
      if (i === index) {
        item.focus();
      }
    });
  }
  handleKeyDown(event) {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (this.currentIndex === null) {
        this.currentIndex = 0;
      }
      else if (this.currentIndex + 1 < this.items.length) {
        this.currentIndex += 1;
      }
    }
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (this.currentIndex === null) {
        this.currentIndex = this.items.length - 1;
      }
      else if (this.currentIndex > 0) {
        this.currentIndex -= 1;
      }
    }
    if (event.key === 'Escape') {
      this.close.emit();
      this.currentIndex = null;
    }
    if (event.key === 'Enter') {
      event.preventDefault();
      if (this.currentIndex !== null) {
        const item = this.items[this.currentIndex];
        if (!item.disabled) {
          item.action();
          this.close.emit();
        }
        return;
      }
      this.currentIndex = 0;
    }
    if (event.key === ' ') {
      event.preventDefault();
      if (this.currentIndex !== null) {
        const item = this.items[this.currentIndex];
        if (item === null || item === void 0 ? void 0 : item.disabled)
          return;
        item === null || item === void 0 ? void 0 : item.action();
      }
      this.close.emit();
    }
    if (event.key === 'Tab') {
      if (this.parentType !== 'menu' && this.currentIndex !== null) {
        const item = this.items[this.currentIndex];
        if (!(item === null || item === void 0 ? void 0 : item.disabled)) {
          item === null || item === void 0 ? void 0 : item.action();
        }
      }
      this.close.emit();
    }
    if (event.key === 'PageUp') {
      this.currentIndex = Math.max(0, this.currentIndex - this.itemsPerPage);
    }
    if (event.key === 'PageDown') {
      this.currentIndex = Math.min(this.items.length - 1, this.currentIndex + this.itemsPerPage);
    }
  }
  get listItems() {
    var _a, _b;
    return Array.from(((_b = (_a = this.host) === null || _a === void 0 ? void 0 : _a.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelectorAll('li')) || []);
  }
  _handleItemsPerPage() {
    const itemHeight = this.small ? this._itemHeightSmall : this._itemHeight;
    const containerHeight = this.itemsPerPage * itemHeight + itemHeight / 2;
    this._listElement.style.maxHeight = `${containerHeight}px`;
    this._listElement.style.setProperty('--c-menu-item-height', `${itemHeight}px`);
  }
  _onOpen() {
    this._handleItemsPerPage();
    window.requestAnimationFrame(async () => {
      const viewportHeight = window.innerHeight;
      const viewportWidth = window.innerWidth;
      const { bottom, right, height, width } = this._listElement.getBoundingClientRect();
      const { top: parentTop } = this.parent.getBoundingClientRect();
      this._parentTop = parentTop;
      this.scrollingParent = await this._getScrollParent(this.parent);
      this._boundFn = this._onScroll.bind(this);
      this.scrollingParent.addEventListener('scroll', this._boundFn);
      this.open.emit({
        height,
        isInView: {
          x: right < viewportWidth,
          y: bottom < viewportHeight,
        },
        width,
      });
    });
  }
  async _getScrollParent(element) {
    return new Promise((resolve) => {
      if (!element) {
        resolve(undefined);
      }
      let parent = element.parentNode;
      while (parent) {
        if (parent.shadowRoot === undefined) {
          parent = parent.host;
        }
        else {
          const { overflow, overflowX } = window.getComputedStyle(parent);
          if (overflowX !== 'scroll' &&
            overflow.split(' ').every((o) => o === 'auto' || o === 'scroll')) {
            resolve(parent);
          }
          parent = parent.parentNode;
        }
      }
      resolve(document.documentElement);
    });
  }
  _onScroll() {
    const { top: parentTop } = this.parent.getBoundingClientRect();
    const differenceY = this._parentTop - parentTop;
    this.host.style.top = `${this.top - differenceY}px`;
  }
  _handleClick(event) {
    if (!event.composedPath().includes(this.host)) {
      this.close.emit();
    }
  }
  _handleZIndex() {
    const styles = window.getComputedStyle((this.parent.assignedSlot || this.parent).parentElement);
    const zIndex = styles.getPropertyValue('z-index');
    this.host.style.zIndex = zIndex === 'auto' ? '1' : zIndex;
  }
  componentDidLoad() {
    this._boundClickFn = this._handleClick.bind(this);
    window.addEventListener('click', this._boundClickFn, {
      once: true,
    });
    this._handleZIndex();
    this._onOpen();
    this.currentIndex = this.index;
  }
  disconnectedCallback() {
    this.scrollingParent.removeEventListener('scroll', this._boundFn);
    window.removeEventListener('click', this._boundClickFn);
  }
  render() {
    const listClasses = {
      'c-menu-items': true,
      'c-menu-items--small': this.small,
      'c-menu-items--active': this.active,
    };
    return (h(Host, null, h("ul", { class: listClasses, ref: (el) => (this._listElement = el) }, this.items.map((item) => this._renderItem(item)))));
  }
  get host() { return this; }
  static get watchers() { return {
    "currentIndex": ["onIndexChange"]
  }; }
  static get style() { return cMenuItemsCss; }
}, [1, "c-menu-items", {
    "items": [16],
    "small": [4],
    "active": [4],
    "parentType": [1, "parent-type"],
    "parent": [16],
    "top": [2],
    "index": [2],
    "itemsPerPage": [2, "items-per-page"],
    "scrollingParent": [32],
    "isInView": [32],
    "currentIndex": [32]
  }, [[2, "keydown", "handleKeyDown"]]]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["c-menu-items"];
  components.forEach(tagName => { switch (tagName) {
    case "c-menu-items":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CMenuItems);
      }
      break;
  } });
}

export { CMenuItems as C, defineCustomElement as d };

//# sourceMappingURL=c-menu-items2.js.map