import{r as t,h as i,H as a}from"./p-d0418cc2.js";const e=":host{--csc-border-radius:4px;--csc-dark-grey:rgb(89, 89, 89);--csc-error:#e71d32;--csc-font-family:'museo-sans', sans-serif;--csc-light-grey:rgb(223, 225, 227);--csc-light-grey-blue:rgb(204, 244, 240);--csc-lightest-grey:rgba(223, 225, 227, 0.5);--csc-link:#025B97;--csc-mid-grey:rgb(140, 140, 140);--csc-primary:rgb(0, 103, 120);--csc-primary-ghost:rgba(0, 103, 120, 0.15);--csc-primary-ghost-hover:rgba(0, 103, 120, 0.25);--csc-primary-hover:rgb(80, 151, 141);--csc-primary-text-hover:rgba(0, 103, 120, 0.15);--csc-success:#51a808;--csc-warning:#ff5800}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}.md-ripple{display:block;position:absolute;pointer-events:none;border-radius:50%;transform:scale(0);background:currentColor;opacity:0.3}.md-ripple.animate{animation:mdRipple 0.7s backwards linear}:host{font-family:var(--csc-font-family)}@keyframes mdRipple{100%{opacity:0;transform:scale(2.5)}}::-ms-reveal{display:none}:host{display:block;bottom:8px;left:0;width:100%;z-index:10000}:host(.absolute){position:absolute}:host(.fixed){position:fixed}.notification{margin-left:auto;margin-bottom:4px;display:flex;align-items:center;margin-right:auto;width:80%;height:auto;opacity:1;border:2px #ff5800 solid;border-radius:8px;position:relative;z-index:1000000;background:#fff;padding:20px;transition:all 0.4s ease;box-shadow:rgba(0, 0, 0, 0.15) 0px 10px 20px, rgba(0, 0, 0, 0.2) 0px 5px 5px}.notification.warning{border:2px #ff5800 solid}.notification.error{border:2px #b90729 solid}.notification.info{border:2px var(--csc-primary) solid}.notification.success{border:2px #469107 solid}.notification svg.icon{margin-left:4px;margin-right:10px}.closewrapper{margin-right:-12px;display:flex;width:28px;height:28px;transition:all 0.3s ease;align-items:center;justify-content:center;border-radius:50%;cursor:pointer}.closewrapper:hover{background:#eee}.notification svg.close path{fill:#ff5800}.notification.error svg.close path{fill:#b90729}.notification.info svg.close path{fill:var(--csc-primary)}.notification.success svg.close path{fill:#469107}.notification p{flex:1;margin-bottom:0;margin-top:0;line-height:14px;font-size:16px;margin-top:1px;margin-left:8px}.hide{animation-name:hide;animation-delay:0.1s;animation-duration:0.3s;animation-fill-mode:forwards}.hidden{display:none}.appear{animation:appear 0.3s ease;transition:all 0.3s ease}@keyframes hide{0%{height:auto;opacity:1;display:flex;border-width:2px}80%{height:auto;opacity:0;display:flex;border-width:1px}99%{height:0;opacity:0;display:none;border-width:0}100%{height:0;opacity:0;display:none;font-size:0px;padding:0;margin-bottom:0;border-width:0}}@keyframes appear{0%{opacity:0;transform:translateY(20px)}100%{opacity:1;transform:translateY(0)}}";const s=class{constructor(a){t(this,a);this._getListItem=t=>{const a=["notification"];if(!t.requiresClosing&&t.hide){a.push("hide")}else{a.push("appear")}a.push(t.type);return i("div",{class:a.join(" "),id:"item_"+t.timeStamp,ref:i=>t.ref=i},this[t.type],i("p",null,t.name),i("div",{class:"closewrapper",onClick:()=>this._hide(t)},this.close))};this.warning=i("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon",height:"18",viewBox:"0 0 16 16"},i("path",{id:"Path_595","data-name":"Path 595",d:"M2906,909l-8,14h16Zm-.8,5h1.5v1.4l-.4,3.6h-.8l-.4-3.6V914Zm-.2,7a1,1,0,1,0,1-1A.945.945,0,0,0,2905,921Z",transform:"translate(-2898 -909)",fill:"#ff5800","fill-rule":"evenodd"}));this.info=i("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon",height:"18",viewBox:"0 0 16 16"},i("path",{id:"Path_620","data-name":"Path 620",d:"M2905,1403a8,8,0,1,0,8,8A8.024,8.024,0,0,0,2905,1403Zm0,4a1,1,0,1,1-1,1A.945.945,0,0,1,2905,1407Zm2,8h-4v-1h1v-3h-1v-1h3v4h1Z",transform:"translate(-2897 -1403)",fill:"var(--csc-primary)","fill-rule":"evenodd"}));this.close=i("svg",{xmlns:"http://www.w3.org/2000/svg",class:"close",width:"8.81",height:"8.81",viewBox:"0 0 8.81 8.81"},i("path",{id:"Path_615","data-name":"Path 615",d:"M3418.718,1318l-3.313,3.313-3.312-3.313-1.093,1.092,3.313,3.313-3.313,3.313,1.093,1.093,3.313-3.313,3.313,3.313,1.092-1.093-3.312-3.312,3.313-3.313Z",transform:"translate(-3411 -1318)","fill-rule":"evenodd"}));this.error=i("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon",height:"18",viewBox:"0 0 16 16"},i("path",{id:"Path_624","data-name":"Path 624",d:"M2905,1491a8,8,0,1,0,8,8A8.024,8.024,0,0,0,2905,1491Z",transform:"translate(-2897 -1491)",fill:"#b90729"}),i("path",{id:"Path_625","data-name":"Path 625",d:"M2900.07,1495.38l1.5-1.42,8.35,8.66-1.39,1.33Z",transform:"translate(-2897 -1491)",fill:"#fff"}),i("path",{id:"Path_626","data-name":"Path 626",d:"M2901.64,1504.02l-1.48-1.43,8.3-8.7,1.39,1.33Z",transform:"translate(-2897 -1491)",fill:"#fff"}));this.success=i("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon",height:"18",viewBox:"0 0 16 16"},i("path",{id:"Path_609","data-name":"Path 609",d:"M2906,1124a8,8,0,1,0,8,8A8.024,8.024,0,0,0,2906,1124Zm-1.3,11.5-3.3-3.4,1.4-1.4,1.9,1.9,4.1-4.1,1.4,1.4Z",transform:"translate(-2898 -1124)",fill:"#51a808","fill-rule":"evenodd"}));this.notification=null;this.position=undefined;this.items=[]}itemChange(t){if(!t.name)return;const i=Date.now();const a=Object.assign(Object.assign({},t),{timeStamp:i});const e=this.items.map((t=>Object.assign(Object.assign({},t),{old:true})));this.items=[...e,a];setTimeout((()=>{const t=this.items.find((t=>t.timeStamp===i));this._hideItem(t,i)}),a.delay?parseInt(a.delay,10)*1e3:2e3)}_hideItem(t,i){const a=t;a.hide=true;const e=[];this.items.forEach((t=>{if(t.timeStamp===i){t.hide=true}e.push(t)}));this.items=e;setTimeout((()=>{this.items=this.items.filter((t=>t.timeStamp!==i||t.requiresClosing))}),1e3)}_hide(t){const i=[];this.items.forEach((a=>{if(t===a){a.hide=true;a.requiresClosing=false}i.push(a)}));this.items=i}render(){return i(a,{class:this.position==="absolute"?"absolute":"fixed"},this.items.map((t=>this._getListItem(t))))}static get watchers(){return{notification:["itemChange"]}}};s.style=e;export{s as c_notification};
//# sourceMappingURL=p-74ba0e3d.entry.js.map