import{r as i,h as t,H as s,g as e,c as n}from"./p-d0418cc2.js";import{l as o}from"./p-5b81ca3e.js";import{v as r}from"./p-ad90fe4d.js";const h=":host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(140, 140, 140);--csc-primary:rgb(0, 103, 120);--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}:host{--c-menu-header-height:38px;--c-menu-padding:0 14px;--c-menu-bg-hover:var(--csc-primary-text-hover);border-radius:4px;color:#595959;display:block;font-size:14px;position:relative;user-select:none}button{border-radius:4px;color:#595959;cursor:pointer;display:block;font-family:\"museo-sans\", sans-serif;position:relative;user-select:none;background:none;border:none;padding:0;margin:0;position:relative;padding:var(--c-menu-padding);border-radius:4px}button:focus{outline:2px var(--csc-primary) solid;outline-offset:2px}@supports selector(:focus-visible){button:focus{outline:none}}button:focus-visible{outline:2px var(--csc-primary) solid;outline-offset:2px}button:hover{background-color:var(--c-menu-bg-hover)}svg{box-sizing:content-box}svg fill{fill:#595959}.c-menu__icon{line-height:20px;transition:transform 0.25s}.c-menu__icon--rotated{transform:rotate(180deg)}.c-menu__header{display:flex;flex:1 1 auto;margin-left:0;align-items:center;gap:8px;height:var(--c-menu-header-height)}:host(.c-menu--simple){--c-menu-padding:0;--c-menu-bg-hover:transparent;background:transparent !important}:host(.c-menu--small){--c-menu-header-height:32px}:host(.c-menu--active) svg,:host(:hover) svg{fill:var(--csc-primary)}:host(.c-menu--no-hover){--c-menu-bg-hover:transparent}.c-menu-overlay{position:fixed;top:0;left:0;bottom:0;right:0;pointer-events:none}.c-menu-overlay__content{position:relative;height:100%;width:100%}";const c=class{constructor(t){i(this,t);this._uniqueId=`c-menu-items-${r()}`;this.items=[];this.simple=false;this.small=false;this.nohover=false;this.itemsPerPage=6;this.customTrigger=undefined;this.menuItemsComponent=null;this.menuWrapperComponent=null;this.currentIndex=null;this.active=false}handleKeyDown(i){const t=["ArrowDown","ArrowUp","Enter"," "];if(!this.active&&t.includes(i.key)){i.preventDefault();this.currentIndex=null;if(i.key==="ArrowDown"){this.currentIndex=0}if(i.key==="ArrowUp"){this.currentIndex=this.items.length-1}this._onClick()}if(i.key==="Escape"){this._hideMenu()}}_createWrapperElement(){const i=document.querySelector(".c-menu-overlay__content");if(i)return i;const t=document.createElement("div");t.classList.add("c-menu-overlay");const s=document.createElement("div");s.classList.add("c-menu-overlay__content");t.appendChild(s);document.body.appendChild(t);return s}_getNativeChild(i=this.host){let t=i.shadowRoot.children[0];if(!!t.shadowRoot){t=this._getNativeChild(t)}return t}_addMenuItemsComponentListeners(i,t){this.menuItemsComponent.onclose=()=>{this._hideMenu();const i=this._getNativeChild();i.focus()};this.menuItemsComponent.addEventListener("open",(s=>this._onOpen(s,i,t)),{once:true})}_getHostPosition(){return this.host.getBoundingClientRect()}_hideMenu(){var i;(i=this.menuItemsComponent)===null||i===void 0?void 0:i.remove();this.menuItemsComponent=null;this.active=false}_onOpen(i,t,s){window.requestAnimationFrame((()=>{var e,n,o;const{isInView:r,height:h,width:c}=i.detail;if(!r.y){const i=parseFloat(this.menuItemsComponent.style.top)-h-t;this.menuItemsComponent.style.top=`${i}px`;this.menuItemsComponent.top=i}if(!r.x){this.menuItemsComponent.style.left=`${parseFloat(this.menuItemsComponent.style.left)-c+s}px`}this.active=true;this.menuItemsComponent.active=true;(o=(n=(e=this.menuItemsComponent)===null||e===void 0?void 0:e.shadowRoot)===null||n===void 0?void 0:n.querySelector("ul"))===null||o===void 0?void 0:o.focus()}))}_onClick(){if(this.menuItemsComponent)return;const{bottom:i,left:t,width:s,height:e}=this._getHostPosition();this.menuItemsComponent=document.createElement("c-menu-items");this.menuItemsComponent.style.top=`${i}px`;this.menuItemsComponent.style.left=`${t}px`;this.menuItemsComponent.style.minWidth=`${s}px`;this.menuItemsComponent.parent=this.host;this.menuItemsComponent.items=this.items;this.menuItemsComponent.small=this.small;this.menuItemsComponent.itemsPerPage=this.itemsPerPage;this.menuItemsComponent.top=i;this.menuItemsComponent.id=this._uniqueId;this.menuItemsComponent.index=this.currentIndex;this.menuItemsComponent.setAttribute("tabindex","-1");this.menuItemsComponent.setAttribute("role","listbox");this._addMenuItemsComponentListeners(e,s);this._createWrapperElement().appendChild(this.menuItemsComponent);window.setTimeout((()=>{var i,t,s,e;(e=(s=(t=(i=this.menuItemsComponent)===null||i===void 0?void 0:i.shadowRoot)===null||t===void 0?void 0:t.children[0])===null||s===void 0?void 0:s.children[0])===null||e===void 0?void 0:e.focus()}),200)}disconnectedCallback(){this._hideMenu()}_renderCustomTrigger(){const i=this.customTrigger;const s=i.component.tag;const e=i.component.params;return t(s,Object.assign({},e,{class:"custom-menu-trigger","aria-expanded":this.active.toString(),"aria-haspopup":"listbox","aria-controls":this._uniqueId,onClick:()=>this._onClick()}),i.value)}render(){const i={"c-menu":true,"c-menu--simple":this.simple,"c-menu--active":this.active,"c-menu--no-hover":this.nohover,"c-menu--small":this.small};return t(s,{class:i},this.customTrigger?this._renderCustomTrigger():t("button",{"aria-expanded":this.active.toString(),"aria-haspopup":"listbox","aria-controls":this._uniqueId,class:{"c-menu-wrapper":!this.simple,simple:this.simple},tabindex:"0",type:"button",onClick:()=>this._onClick()},this.simple?t("slot",null):t("div",{class:"c-menu__header"},t("slot",null),t("svg",{width:this.small?"16":"22",height:this.small?"16":"22",viewBox:"0 0 24 24",class:this.active?"c-menu__icon c-menu__icon--rotated":"c-menu__icon"},t("path",{d:o})))))}get host(){return e(this)}};c.style=h;const a=":host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(140, 140, 140);--csc-primary:rgb(0, 103, 120);--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}:host{--c-menu-item-font-size:14px;position:absolute;border-radius:inherit;display:flex;left:0;pointer-events:none;top:0;bottom:0;right:0;inset:inherit}ul.c-menu-items{margin:0;padding:0;background-color:#fff;list-style:none;animation:0.1s 1 fadeIn cubic-bezier(0.25, 0.8, 0.5, 1);box-shadow:2px 4px 10px rgba(0, 0, 0, 0.1607843137);width:100%;overflow-y:scroll;pointer-events:auto;border-radius:4px;visibility:hidden}ul.c-menu-items--small{--c-menu-item-font-size:12px}ul.c-menu-items--active{visibility:visible}li{align-items:center;background:#fff;column-gap:12px;cursor:pointer;display:flex;flex-wrap:nowrap;font-size:var(--c-menu-item-font-size);height:var(--c-menu-item-height);padding-left:10px;padding-right:10px;outline:none;white-space:nowrap;pointer-events:auto}li:not(.disabled):hover,li.active{background:#d8e8ea;color:var(--csc-primary)}li.icon-start{flex-direction:row-reverse;justify-content:flex-end}li.icon-end{justify-content:space-between}li.disabled{cursor:default;color:rgba(0, 0, 0, 0.4)}@keyframes fadeIn{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:translateY(0)}}";const l=class{constructor(s){i(this,s);this.close=n(this,"close",7);this.open=n(this,"open",7);this._parentTop=0;this._itemHeight=42;this._itemHeightSmall=36;this._renderItem=i=>{const s={disabled:i.disabled,"icon-start":i.iconPosition==="start","icon-end":i.iconPosition==="end"};const e=(i,t)=>{i.stopPropagation();if(!t.disabled){t.action();this.close.emit()}};return t("li",{"aria-disabled":(!!i.disabled).toString(),class:s,tabindex:"-1",role:"menuitem",onClick:t=>e(t,i)},i.name,i.icon&&t("svg",{class:"icon",width:"20",height:"20",viewBox:"0 0 24 24"},t("path",{d:i.icon})))};this.items=[];this.small=false;this.active=false;this.parentType="menu";this.parent=undefined;this.top=0;this.index=null;this.itemsPerPage=6;this.scrollingParent=undefined;this.isInView=true;this.currentIndex=null}onIndexChange(i){this.listItems.forEach(((t,s)=>{t.classList.toggle("active",s===i);if(s===i){t.focus()}}))}handleKeyDown(i){if(i.key==="ArrowDown"){i.preventDefault();if(this.currentIndex===null){this.currentIndex=0}else if(this.currentIndex+1<this.items.length){this.currentIndex+=1}}if(i.key==="ArrowUp"){i.preventDefault();if(this.currentIndex===null){this.currentIndex=this.items.length-1}else if(this.currentIndex>0){this.currentIndex-=1}}if(i.key==="Escape"){this.close.emit();this.currentIndex=null}if(i.key==="Enter"){i.preventDefault();if(this.currentIndex!==null){const i=this.items[this.currentIndex];if(!i.disabled){i.action();this.close.emit()}return}this.currentIndex=0}if(i.key===" "){i.preventDefault();if(this.currentIndex!==null){const i=this.items[this.currentIndex];if(i===null||i===void 0?void 0:i.disabled)return;i===null||i===void 0?void 0:i.action()}this.close.emit()}if(i.key==="Tab"){if(this.parentType!=="menu"&&this.currentIndex!==null){const i=this.items[this.currentIndex];if(!(i===null||i===void 0?void 0:i.disabled)){i===null||i===void 0?void 0:i.action()}}this.close.emit()}if(i.key==="PageUp"){this.currentIndex=Math.max(0,this.currentIndex-this.itemsPerPage)}if(i.key==="PageDown"){this.currentIndex=Math.min(this.items.length-1,this.currentIndex+this.itemsPerPage)}}get listItems(){var i,t;return Array.from(((t=(i=this.host)===null||i===void 0?void 0:i.shadowRoot)===null||t===void 0?void 0:t.querySelectorAll("li"))||[])}_handleItemsPerPage(){const i=this.small?this._itemHeightSmall:this._itemHeight;const t=this.itemsPerPage*i+i/2;this._listElement.style.maxHeight=`${t}px`;this._listElement.style.setProperty("--c-menu-item-height",`${i}px`)}_onOpen(){this._handleItemsPerPage();window.requestAnimationFrame((async()=>{const i=window.innerHeight;const t=window.innerWidth;const{bottom:s,right:e,height:n,width:o}=this._listElement.getBoundingClientRect();const{top:r}=this.parent.getBoundingClientRect();this._parentTop=r;this.scrollingParent=await this._getScrollParent(this.parent);this._boundFn=this._onScroll.bind(this);this.scrollingParent.addEventListener("scroll",this._boundFn);this.open.emit({height:n,isInView:{x:e<t,y:s<i},width:o})}))}async _getScrollParent(i){return new Promise((t=>{if(!i){t(undefined)}let s=i.parentNode;while(s){if(s.shadowRoot===undefined){s=s.host}else{const{overflow:i,overflowX:e}=window.getComputedStyle(s);if(e!=="scroll"&&i.split(" ").every((i=>i==="auto"||i==="scroll"))){t(s)}s=s.parentNode}}t(document.documentElement)}))}_onScroll(){const{top:i}=this.parent.getBoundingClientRect();const t=this._parentTop-i;this.host.style.top=`${this.top-t}px`}_handleClick(i){if(!i.composedPath().includes(this.host)){this.close.emit()}}_handleZIndex(){const i=window.getComputedStyle((this.parent.assignedSlot||this.parent).parentElement);const t=i.getPropertyValue("z-index");this.host.style.zIndex=t==="auto"?"1":t}componentDidLoad(){this._boundClickFn=this._handleClick.bind(this);window.addEventListener("click",this._boundClickFn,{once:true});this._handleZIndex();this._onOpen();this.currentIndex=this.index}disconnectedCallback(){this.scrollingParent.removeEventListener("scroll",this._boundFn);window.removeEventListener("click",this._boundClickFn)}render(){const i={"c-menu-items":true,"c-menu-items--small":this.small,"c-menu-items--active":this.active};return t(s,null,t("ul",{class:i,ref:i=>this._listElement=i},this.items.map((i=>this._renderItem(i)))))}get host(){return e(this)}static get watchers(){return{currentIndex:["onIndexChange"]}}};l.style=a;export{c as c_menu,l as c_menu_items};
//# sourceMappingURL=p-9c1299ea.entry.js.map