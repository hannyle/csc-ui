import{r,c as i,h as o,g as s}from"./p-d0418cc2.js";import{i as e}from"./p-5b81ca3e.js";import{c as a}from"./p-dcaa9020.js";import{v as t}from"./p-ad90fe4d.js";const c=":host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(140, 140, 140);--csc-primary:rgb(0, 103, 120);--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}:host{display:flex;flex-direction:column;gap:4px}.c-radio-group{--c-radio-flex-direction:column;--c-radio-item-gap:2px;display:flex;flex-direction:column;gap:4px;width:fit-content}.c-radio-group__items{display:flex;flex-direction:var(--c-radio-flex-direction);flex-wrap:wrap;gap:var(--c-radio-item-gap)}.c-radio-group__label span.required{color:var(--csc-error)}.c-radio-group--disabled{--c-radio-color:var(--csc-mid-grey);--csc-error:var(--csc-mid-grey);color:var(--c-radio-color);cursor:default;opacity:0.75}.c-radio-group--error{--c-radio-color:var(--csc-error);color:var(--csc-error)}.c-radio-group--inline{--c-radio-flex-direction:row;--c-radio-item-gap:12px}.c-radio{--c-radio-color:var(--csc-primary);align-items:flex-start;display:flex;position:relative;cursor:pointer;font-size:16px;user-select:none;gap:4px;line-height:1.2}.c-radio input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.c-radio input:checked~.ripple .selection::after{display:block;transform:scale(1)}.c-radio .ripple{position:relative;height:42px;width:42px;min-width:42px;border-radius:50%;overflow:hidden;transition:translateZ(0);color:var(--csc-primary)}.c-radio .selection{position:absolute;top:11px;left:11px;height:20px;width:20px;background-color:transparent;box-shadow:inset 0 0 0 2px var(--c-radio-color);border-radius:50%;transition:box-shadow 0.15s ease-in-out}.c-radio .selection::after{content:\"\";position:absolute;transform:scale(0);transition:transform 0.15s ease-in-out;top:5px;left:5px;width:10px;height:10px;border-radius:50%;background:var(--c-radio-color)}.c-radio__details{line-height:1;padding:0 12px}.c-radio__details.active .c-radio__message{opacity:1;transform:translateY(0px)}.c-radio__message{font-size:12px;opacity:0;transform:translateY(-4px);transition:all 0.2s cubic-bezier(0.25, 0.8, 0.5, 1)}.c-radio__message--hint{color:var(--csc-mid-grey)}.c-radio__message--error{color:var(--csc-error) !important}.c-radio__message span{align-items:flex-start;display:flex;gap:4px;height:16px}.c-radio__message span.error{color:var(--csc-error)}.c-radio__message span.hint{color:var(--csc-mid-grey)}.c-radio__message svg{fill:currentColor;min-height:16px;min-width:16px;position:relative;top:-2px}.c-radio__label{padding-top:12px}.c-radio--disabled{--c-radio-color:var(--csc-mid-grey);color:var(--c-radio-color);cursor:default;opacity:0.75}.c-radio--error{--c-radio-color:var(--csc-error);color:var(--csc-error)}.c-radio--error span,.c-radio--error svg{fill:var(--csc-error);color:var(--csc-error)}.c-radio input:focus{outline:none}.c-radio input:focus+.ripple{outline:2px var(--c-radio-color) solid}@supports selector(:focus-visible){.c-radio input:focus+.ripple{outline:none}}.c-radio input:focus-visible+.ripple{outline:2px var(--c-radio-color) solid}.c-radio:not(.c-radio--disabled) .ripple:hover{background-color:var(--csc-primary-text-hover)}";const l=class{constructor(s){r(this,s);this.changeValue=i(this,"changeValue",3);this._containers=[];this._uniqueId=t();this._getRadioButton=(r,i)=>{var s,e;const a=r.value.toString().replace(/[^a-zA-Z0-9-_]/g,"");const t=this.returnValue?((e=(s=this.items)===null||s===void 0?void 0:s.find((i=>i.value===r.value)))===null||e===void 0?void 0:e.value)===this.value:this.value===r;const c={"c-radio":true,"c-radio--disabled":this.disabled,"c-radio--error":this.messageOptions.type==="error"};return o("label",{class:c,id:a,onKeyDown:o=>this._handleKeyDown(o,r,i)},o("input",{type:"radio","aria-checked":(this.value===r).toString(),"aria-disabled":this.disabled.toString(),"aria-labelledby":a,disabled:this.disabled,checked:t,name:this._uniqueId,onChange:o=>this._select(o,r,i)}),o("span",{class:"ripple",ref:r=>this._containers[i]=r},o("span",{class:"selection"})),o("div",{class:"c-radio__label"},r.label))};this._validationIcon=o("svg",{height:"16px",width:"16px",viewBox:"0 0 24 24"},o("path",{d:e}));this.value=undefined;this.hideDetails=false;this.hint="";this.inline=false;this.label=undefined;this.color="";this.items=[];this.disabled=false;this.returnValue=undefined;this.required=false;this.valid=true;this.validation="Required field";this.messageOptions={show:true,type:"hint",content:""}}onValidationMessageChange(r){this.onValidChange(r.length===0)}onValidChange(r){this._handleValidation(r||this.valid)}componentDidLoad(){this._handleValidation(this.valid,0)}_handleKeyDown(r,i,o){if(["Space","Enter"].includes(r.code)){r.preventDefault();this._select(r,i,o)}}_handleValidation(r,i=200){this.messageOptions=Object.assign(Object.assign({},this.messageOptions),{show:false});setTimeout((()=>{this.messageOptions=Object.assign(Object.assign({},this.messageOptions),{type:r?"hint":"error",show:true,content:r?o("span",null,this.hint):o("span",null,this._validationIcon," ",this.validation)})}),i)}_select(r,i,o){if(this.disabled)return;a(r,this._containers[o],true);this.value=this.returnValue?i===null||i===void 0?void 0:i.value:i;this.changeValue.emit(this.value)}_renderMessages(){if(this.hideDetails)return;const r={"c-radio__details":true,active:this.messageOptions.show};const i={"c-radio__message":true,[`c-radio__message--${this.messageOptions.type}`]:true};return o("div",{class:r},o("div",{class:i},this.messageOptions.content))}render(){const r=!!this.el.childNodes.length;const i={"c-radio-group":true,"c-radio-group--disabled":this.disabled,"c-radio-group--inline":this.inline,"c-radio-group--error":this.messageOptions.type==="error"};return o("div",{class:i,role:"radiogroup","aria-labelledby":"c-radio-group__label"},(!!this.label||r)&&o("label",{class:"c-radio-group__label"},!!this.label?this.label:o("slot",null),this.required&&o("span",{class:"required"}," *")),o("div",{class:"c-radio-group__items"},this.items.map(((r,i)=>this._getRadioButton(r,i)))),this._renderMessages())}get el(){return s(this)}static get watchers(){return{validation:["onValidationMessageChange"],valid:["onValidChange"]}}};l.style=c;export{l as c_radio_group};
//# sourceMappingURL=p-5a91728d.entry.js.map