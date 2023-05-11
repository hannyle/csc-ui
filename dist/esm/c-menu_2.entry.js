import { r as registerInstance, h, H as Host, g as getElement, c as createEvent } from './index-aa797944.js';
import { l as mdiChevronDown } from './mdi-2e92fd6e.js';
import { v as v4 } from './v4-929670b7.js';

const cMenuCss = ":host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(140, 140, 140);--csc-primary:rgb(0, 103, 120);--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}:host{--c-menu-header-height:38px;--c-menu-padding:0 14px;--c-menu-bg-hover:var(--csc-primary-text-hover);border-radius:4px;color:#595959;display:block;font-size:14px;position:relative;user-select:none}button{border-radius:4px;color:#595959;cursor:pointer;display:block;font-family:\"museo-sans\", sans-serif;position:relative;user-select:none;background:none;border:none;padding:0;margin:0;position:relative;padding:var(--c-menu-padding);border-radius:4px}button:focus{outline:2px var(--csc-primary) solid;outline-offset:2px}@supports selector(:focus-visible){button:focus{outline:none}}button:focus-visible{outline:2px var(--csc-primary) solid;outline-offset:2px}button:hover{background-color:var(--c-menu-bg-hover)}svg{box-sizing:content-box}svg fill{fill:#595959}.c-menu__icon{line-height:20px;transition:transform 0.25s}.c-menu__icon--rotated{transform:rotate(180deg)}.c-menu__header{display:flex;flex:1 1 auto;margin-left:0;align-items:center;gap:8px;height:var(--c-menu-header-height)}:host(.c-menu--simple){--c-menu-padding:0;--c-menu-bg-hover:transparent;background:transparent !important}:host(.c-menu--small){--c-menu-header-height:32px}:host(.c-menu--active) svg,:host(:hover) svg{fill:var(--csc-primary)}:host(.c-menu--no-hover){--c-menu-bg-hover:transparent}.c-menu-overlay{position:fixed;top:0;left:0;bottom:0;right:0;pointer-events:none}.c-menu-overlay__content{position:relative;height:100%;width:100%}";

const CMenu = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this._uniqueId = `c-menu-items-${v4()}`;
    this.items = [];
    this.simple = false;
    this.small = false;
    this.nohover = false;
    this.itemsPerPage = 6;
    this.customTrigger = undefined;
    this.menuItemsComponent = null;
    this.menuWrapperComponent = null;
    this.currentIndex = null;
    this.active = false;
  }
  handleKeyDown(ev) {
    const openKeys = ['ArrowDown', 'ArrowUp', 'Enter', ' '];
    if (!this.active && openKeys.includes(ev.key)) {
      ev.preventDefault();
      this.currentIndex = null;
      if (ev.key === 'ArrowDown') {
        this.currentIndex = 0;
      }
      if (ev.key === 'ArrowUp') {
        this.currentIndex = this.items.length - 1;
      }
      this._onClick();
    }
    if (ev.key === 'Escape') {
      this._hideMenu();
    }
  }
  _createWrapperElement() {
    const existingOverlay = document.querySelector('.c-menu-overlay__content');
    if (existingOverlay)
      return existingOverlay;
    const overlay = document.createElement('div');
    overlay.classList.add('c-menu-overlay');
    const overlayContent = document.createElement('div');
    overlayContent.classList.add('c-menu-overlay__content');
    overlay.appendChild(overlayContent);
    document.body.appendChild(overlay);
    return overlayContent;
  }
  _getNativeChild(parent = this.host) {
    let element = parent.shadowRoot.children[0];
    if (!!element.shadowRoot) {
      element = this._getNativeChild(element);
    }
    return element;
  }
  _addMenuItemsComponentListeners(height, width) {
    this.menuItemsComponent.onclose = () => {
      this._hideMenu();
      const element = this._getNativeChild();
      element.focus();
    };
    this.menuItemsComponent.addEventListener('open', (event) => this._onOpen(event, height, width), {
      once: true,
    });
  }
  _getHostPosition() {
    return this.host.getBoundingClientRect();
  }
  _hideMenu() {
    var _a;
    (_a = this.menuItemsComponent) === null || _a === void 0 ? void 0 : _a.remove();
    this.menuItemsComponent = null;
    this.active = false;
  }
  _onOpen(event, height, width) {
    window.requestAnimationFrame(() => {
      var _a, _b, _c;
      const { isInView, height: menuHeight, width: menuWidth } = event.detail;
      if (!isInView.y) {
        const posY = parseFloat(this.menuItemsComponent.style.top) - menuHeight - height;
        this.menuItemsComponent.style.top = `${posY}px`;
        this.menuItemsComponent.top = posY;
      }
      if (!isInView.x) {
        this.menuItemsComponent.style.left = `${parseFloat(this.menuItemsComponent.style.left) - menuWidth + width}px`;
      }
      this.active = true;
      this.menuItemsComponent.active = true;
      (_c = (_b = (_a = this.menuItemsComponent) === null || _a === void 0 ? void 0 : _a.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('ul')) === null || _c === void 0 ? void 0 : _c.focus();
    });
  }
  _onClick() {
    if (this.menuItemsComponent)
      return;
    const { bottom, left, width, height } = this._getHostPosition();
    this.menuItemsComponent = document.createElement('c-menu-items');
    this.menuItemsComponent.style.top = `${bottom}px`;
    this.menuItemsComponent.style.left = `${left}px`;
    this.menuItemsComponent.style.minWidth = `${width}px`;
    this.menuItemsComponent.parent = this.host;
    this.menuItemsComponent.items = this.items;
    this.menuItemsComponent.small = this.small;
    this.menuItemsComponent.itemsPerPage = this.itemsPerPage;
    this.menuItemsComponent.top = bottom;
    this.menuItemsComponent.id = this._uniqueId;
    this.menuItemsComponent.index = this.currentIndex;
    this.menuItemsComponent.setAttribute('tabindex', '-1');
    this.menuItemsComponent.setAttribute('role', 'listbox');
    this._addMenuItemsComponentListeners(height, width);
    this._createWrapperElement().appendChild(this.menuItemsComponent);
    window.setTimeout(() => {
      var _a, _b, _c, _d;
      (_d = (_c = (_b = (_a = this.menuItemsComponent) === null || _a === void 0 ? void 0 : _a.shadowRoot) === null || _b === void 0 ? void 0 : _b.children[0]) === null || _c === void 0 ? void 0 : _c.children[0]) === null || _d === void 0 ? void 0 : _d.focus();
    }, 200);
  }
  disconnectedCallback() {
    this._hideMenu();
  }
  _renderCustomTrigger() {
    const props = this.customTrigger;
    const Tag = props.component.tag;
    const params = props.component.params;
    return (h(Tag, Object.assign({}, params, { class: "custom-menu-trigger", "aria-expanded": this.active.toString(), "aria-haspopup": "listbox", "aria-controls": this._uniqueId, onClick: () => this._onClick() }), props.value));
  }
  render() {
    const hostClasses = {
      'c-menu': true,
      'c-menu--simple': this.simple,
      'c-menu--active': this.active,
      'c-menu--no-hover': this.nohover,
      'c-menu--small': this.small,
    };
    return (h(Host, { class: hostClasses }, this.customTrigger ? (this._renderCustomTrigger()) : (h("button", { "aria-expanded": this.active.toString(), "aria-haspopup": "listbox", "aria-controls": this._uniqueId, class: {
        'c-menu-wrapper': !this.simple,
        simple: this.simple,
      }, tabindex: "0", type: "button", onClick: () => this._onClick() }, this.simple ? (h("slot", null)) : (h("div", { class: "c-menu__header" }, h("slot", null), h("svg", { width: this.small ? '16' : '22', height: this.small ? '16' : '22', viewBox: "0 0 24 24", class: this.active
        ? 'c-menu__icon c-menu__icon--rotated'
        : 'c-menu__icon' }, h("path", { d: mdiChevronDown }))))))));
  }
  get host() { return getElement(this); }
};
CMenu.style = cMenuCss;

const cMenuItemsCss = ":host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(140, 140, 140);--csc-primary:rgb(0, 103, 120);--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}:host{--c-menu-item-font-size:14px;position:absolute;border-radius:inherit;display:flex;left:0;pointer-events:none;top:0;bottom:0;right:0;inset:inherit}ul.c-menu-items{margin:0;padding:0;background-color:#fff;list-style:none;animation:0.1s 1 fadeIn cubic-bezier(0.25, 0.8, 0.5, 1);box-shadow:2px 4px 10px rgba(0, 0, 0, 0.1607843137);width:100%;overflow-y:scroll;pointer-events:auto;border-radius:4px;visibility:hidden}ul.c-menu-items--small{--c-menu-item-font-size:12px}ul.c-menu-items--active{visibility:visible}li{align-items:center;background:#fff;column-gap:12px;cursor:pointer;display:flex;flex-wrap:nowrap;font-size:var(--c-menu-item-font-size);height:var(--c-menu-item-height);padding-left:10px;padding-right:10px;outline:none;white-space:nowrap;pointer-events:auto}li:not(.disabled):hover,li.active{background:#d8e8ea;color:var(--csc-primary)}li.icon-start{flex-direction:row-reverse;justify-content:flex-end}li.icon-end{justify-content:space-between}li.disabled{cursor:default;color:rgba(0, 0, 0, 0.4)}@keyframes fadeIn{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:translateY(0)}}";

const CMenuItems = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
  get host() { return getElement(this); }
  static get watchers() { return {
    "currentIndex": ["onIndexChange"]
  }; }
};
CMenuItems.style = cMenuItemsCss;

export { CMenu as c_menu, CMenuItems as c_menu_items };

//# sourceMappingURL=c-menu_2.entry.js.map