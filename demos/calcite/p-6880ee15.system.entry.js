var __awaiter=this&&this.__awaiter||function(e,t,i,a){function s(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function o(e){try{n(a.next(e))}catch(t){r(t)}}function l(e){try{n(a["throw"](e))}catch(t){r(t)}}function n(e){e.done?i(e.value):s(e.value).then(o,l)}n((a=a.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var i={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},a,s,r,o;return o={next:l(0),throw:l(1),return:l(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function l(e){return function(t){return n([e,t])}}function n(o){if(a)throw new TypeError("Generator is already executing.");while(i)try{if(a=1,s&&(r=o[0]&2?s["return"]:o[0]?s["throw"]||((r=s["return"])&&r.call(s),0):s.next)&&!(r=r.call(s,o[1])).done)return r;if(s=0,r)o=[o[0]&2,r.value];switch(o[0]){case 0:case 1:r=o;break;case 4:i.label++;return{value:o[1],done:false};case 5:i.label++;s=o[1];o=[0];continue;case 7:o=i.ops.pop();i.trys.pop();continue;default:if(!(r=i.trys,r=r.length>0&&r[r.length-1])&&(o[0]===6||o[0]===2)){i=0;continue}if(o[0]===3&&(!r||o[1]>r[0]&&o[1]<r[3])){i.label=o[1];break}if(o[0]===6&&i.label<r[1]){i.label=r[1];r=o;break}if(r&&i.label<r[2]){i.label=r[2];i.ops.push(o);break}if(r[2])i.ops.pop();i.trys.pop();continue}o=t.call(e,i)}catch(l){o=[6,l];s=0}finally{a=r=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-4105a996.system.js","./p-bf60ef30.system.js","./p-3426e87b.system.js"],(function(e){"use strict";var t,i,a,s,r,o,l,n;return{setters:[function(e){t=e.r;i=e.c;a=e.h;s=e.H;r=e.g},function(e){o=e.s;l=e.g},function(e){n=e.S}],execute:function(){var c={intlClose:"close"};var u={slow:14e3,medium:1e4,fast:6e3};var d='@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{--calcite-alert-dismiss-progress-background:rgba(255, 255, 255, 0.8)}:host([theme=dark]){--calcite-alert-dismiss-progress-background:rgba(43, 43, 43, 0.8)}:host([scale=s]){--calcite-alert-width:40em;--calcite-alert-spacing-token-small:0.75rem;--calcite-alert-spacing-token-large:1rem}:host([scale=s]) slot[name=alert-title]::slotted(*),:host([scale=s]) *::slotted([slot=alert-title]){font-size:0.875rem;line-height:1.5}:host([scale=s]) slot[name=alert-message]::slotted(*),:host([scale=s]) *::slotted([slot=alert-message]){font-size:0.8125rem;line-height:1.5}:host([scale=s]) ::slotted(calcite-link){font-size:0.8125rem;line-height:1.5}:host([scale=m]){--calcite-alert-width:50em;--calcite-alert-spacing-token-small:1rem;--calcite-alert-spacing-token-large:1.5rem}:host([scale=m]) slot[name=alert-title]::slotted(*),:host([scale=m]) *::slotted([slot=alert-title]){font-size:0.9375rem;line-height:1.5}:host([scale=m]) slot[name=alert-message]::slotted(*),:host([scale=m]) *::slotted([slot=alert-message]){font-size:0.875rem;line-height:1.5}:host([scale=m]) ::slotted(calcite-link){font-size:0.875rem;line-height:1.5}:host([scale=l]){--calcite-alert-width:60em;--calcite-alert-spacing-token-small:1.2rem;--calcite-alert-spacing-token-large:1.875rem}:host([scale=l]) slot[name=alert-title]::slotted(*),:host([scale=l]) *::slotted([slot=alert-title]){font-size:1rem;line-height:1.5}:host([scale=l]) slot[name=alert-message]::slotted(*),:host([scale=l]) *::slotted([slot=alert-message]){font-size:0.9375rem;line-height:1.5}:host([scale=l]) ::slotted(calcite-link){font-size:0.9375rem;line-height:1.5}:host{-webkit-box-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);box-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);display:-ms-flexbox;display:flex;position:fixed;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;pointer-events:none;margin:0 auto;width:var(--calcite-alert-width);max-width:90%;max-height:0;background-color:var(--calcite-ui-foreground-1);border-radius:var(--calcite-border-radius);opacity:0;left:0;right:0;bottom:0;pointer-events:none;z-index:101;-webkit-transform:translate3d(0, 1.5rem, 0);transform:translate3d(0, 1.5rem, 0);-webkit-transition:300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), all 0.15s ease-in-out;transition:300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), opacity 300ms cubic-bezier(0.215, 0.44, 0.42, 0.88), all 0.15s ease-in-out;border-top:0px solid transparent}@media only screen and (max-width: 860px){:host{width:100%;max-width:100%;border-radius:var(--calcite-border-radius) var(--calcite-border-radius) 0 0}}.alert-close{outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.alert-close:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}:host([active]:not([queued])){opacity:1;max-height:100%;-webkit-transform:translate3d(0, -1.5rem, 0);transform:translate3d(0, -1.5rem, 0);pointer-events:initial;border-top-width:3px}@media only screen and (max-width: 860px){:host([active]:not([queued])){-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}slot[name=alert-title]::slotted(*),*::slotted([slot=alert-title]){font-size:1rem;line-height:1.5;color:var(--calcite-ui-text-1);margin:0;font-weight:500}slot[name=alert-message]::slotted(*),*::slotted([slot=alert-message]){display:inline;margin:0;margin-right:0.75rem;font-weight:400;font-size:0.9375rem;line-height:1.5;color:var(--calcite-ui-text-2)}:host([dir=rtl]) slot[name=alert-message]::slotted(*),:host([dir=rtl]) *::slotted([slot=alert-message]){margin-right:unset;margin-left:0.75rem}.alert-content{padding:var(--calcite-alert-spacing-token-small) var(--calcite-alert-spacing-token-large);-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out;-ms-flex:1 1 auto;flex:1 1 auto;min-width:0;word-wrap:break-word;padding:var(--calcite-alert-spacing-token-small) var(--calcite-alert-spacing-token-small) var(--calcite-alert-spacing-token-small) 0}@media only screen and (max-width: 860px){.alert-content{padding:1.5rem}}.alert-content:first-of-type:not(:only-child){padding-left:var(--calcite-alert-spacing-token-large)}.alert-content:only-child{padding:var(--calcite-alert-spacing-token-small)}@media only screen and (max-width: 860px){.alert-content{padding:var(--calcite-alert-spacing-token-large) var(--calcite-alert-spacing-token-small) var(--calcite-alert-spacing-token-large) 0}}:host([dir=rtl]) .alert-content{padding:var(--calcite-alert-spacing-token-small) 0 var(--calcite-alert-spacing-token-small) var(--calcite-alert-spacing-token-small)}:host([dir=rtl]) .alert-content:first-of-type:not(:only-child){padding-right:var(--calcite-alert-spacing-token-large)}@media only screen and (max-width: 860px){:host([dir=rtl]) .alert-content{padding:var(--calcite-alert-spacing-token-large) 0 var(--calcite-alert-spacing-token-large) var(--calcite-alert-spacing-token-small)}}.alert-icon{padding:var(--calcite-alert-spacing-token-small) var(--calcite-alert-spacing-token-large);-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out;padding-top:0;padding-bottom:0;display:-ms-flexbox;display:flex;-ms-flex-item-align:stretch;align-self:stretch;-ms-flex-align:center;align-items:center}@media only screen and (max-width: 860px){.alert-icon{padding:1.5rem}}.alert-close{padding:var(--calcite-alert-spacing-token-small) var(--calcite-alert-spacing-token-large);-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out;padding-top:0;padding-bottom:0;-ms-flex-item-align:stretch;align-self:stretch;background-color:transparent;-webkit-appearance:none;border:none;outline:none;cursor:pointer;color:var(--calcite-ui-text-3);overflow:hidden;border-radius:0 0 var(--calcite-border-radius) 0}@media only screen and (max-width: 860px){.alert-close{padding:1.5rem}}.alert-close:hover,.alert-close:focus{background-color:var(--calcite-ui-foreground-2)}.alert-close:active{background-color:var(--calcite-ui-foreground-3)}@media only screen and (max-width: 860px){.alert-close{border-radius:0}}:host([dir=rtl]) .alert-close{border-radius:0 0 0 var(--calcite-border-radius)}.alert-queue-count{font-size:0.875rem;line-height:1.5;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around;-ms-flex-item-align:stretch;align-self:stretch;overflow:hidden;width:0;visibility:hidden;font-weight:500;text-align:center;color:var(--calcite-ui-text-2);opacity:0;border-left:0px solid transparent;border-right:0px solid transparent;cursor:default;-webkit-transition:all 0.15s ease-in-out;transition:all 0.15s ease-in-out;overflow:hidden}.alert-queue-count.active{visibility:visible;opacity:1;padding:0 0.375rem;width:3rem;border-left:1px solid var(--calcite-ui-border-3);border-right:1px solid var(--calcite-ui-border-3)}@media only screen and (max-width: 860px){.alert-queue-count{border-radius:0}}:host([auto-dismiss])>.alert-queue-count{border-right:0px solid transparent}:host([auto-dismiss][dir=rtl])>.alert-queue-count{border-left:0px solid transparent}.alert-dismiss-progress{display:block;position:absolute;left:0;right:0;top:-3px;width:100%;height:3px;z-index:103;overflow:hidden;border-radius:var(--calcite-border-radius) var(--calcite-border-radius) 0 0}.alert-dismiss-progress:after{height:3px;top:0;right:0;display:block;position:absolute;content:"";background-color:var(--calcite-alert-dismiss-progress-background);z-index:104}:host([dir=rtl]) .alert-dismiss-progress:after{left:0;right:initial}:host([color=blue]){border-top-color:var(--calcite-ui-brand)}:host([color=blue]) .alert-icon{color:var(--calcite-ui-brand)}:host([color=red]){border-top-color:var(--calcite-ui-danger)}:host([color=red]) .alert-icon{color:var(--calcite-ui-danger)}:host([color=yellow]){border-top-color:var(--calcite-ui-warning)}:host([color=yellow]) .alert-icon{color:var(--calcite-ui-warning)}:host([color=green]){border-top-color:var(--calcite-ui-success)}:host([color=green]) .alert-icon{color:var(--calcite-ui-success)}:host([auto-dismiss-duration=fast]) .alert-dismiss-progress:after{-webkit-animation:dismissProgress 6000ms ease-out;animation:dismissProgress 6000ms ease-out}:host([auto-dismiss-duration=medium]) .alert-dismiss-progress:after{-webkit-animation:dismissProgress 10000ms ease-out;animation:dismissProgress 10000ms ease-out}:host([auto-dismiss-duration=slow]) .alert-dismiss-progress:after{-webkit-animation:dismissProgress 14000ms ease-out;animation:dismissProgress 14000ms ease-out}@-webkit-keyframes dismissProgress{0%{width:0;opacity:0.8}100%{width:100%;opacity:1}}@keyframes dismissProgress{0%{width:0;opacity:0.8}100%{width:100%;opacity:1}}';var h=e("calcite_alert",function(){function e(e){var a=this;t(this,e);this.calciteAlertClose=i(this,"calciteAlertClose",7);this.calciteAlertOpen=i(this,"calciteAlertOpen",7);this.calciteAlertSync=i(this,"calciteAlertSync",7);this.calciteAlertRegister=i(this,"calciteAlertRegister",7);this.active=false;this.autoDismiss=false;this.autoDismissDuration=this.autoDismiss?"medium":null;this.color="blue";this.intlClose=c.intlClose;this.scale="m";this.queue=[];this.queueLength=0;this.queued=false;this.closeAlert=function(){a.queued=false;a.active=false;a.queue=a.queue.filter((function(e){return e!==a.el}));a.determineActiveAlert();a.calciteAlertSync.emit({queue:a.queue});a.calciteAlertClose.emit({el:a.el,queue:a.queue})}}e.prototype.watchActive=function(){var e=this;if(this.active&&!this.queued)this.calciteAlertRegister.emit();if(!this.active){this.queue=this.queue.filter((function(t){return t!==e.el}));this.calciteAlertSync.emit({queue:this.queue})}};e.prototype.updateRequestedIcon=function(){this.requestedIcon=o(n,this.icon,this.color)};e.prototype.connectedCallback=function(){if(this.active&&!this.queued)this.calciteAlertRegister.emit()};e.prototype.componentWillLoad=function(){this.requestedIcon=o(n,this.icon,this.color)};e.prototype.componentDidLoad=function(){this.alertLinkEl=this.el.querySelectorAll("calcite-link")[0]};e.prototype.render=function(){var e=this;var t=l(this.el);var i=a("button",{"aria-label":this.intlClose,class:"alert-close",onClick:this.closeAlert,ref:function(t){return e.closeButton=t},type:"button"},a("calcite-icon",{icon:"x",scale:"m"}));var r=a("div",{class:(this.queueLength>1?"active ":"")+"alert-queue-count"},"+",this.queueLength>2?this.queueLength-1:1);var o=this.active;var n=a("div",{class:"alert-dismiss-progress"});var c=this.autoDismiss?"alert":"alertdialog";var u=!o;return a(s,{active:o,"aria-hidden":u.toString(),"aria-label":this.label,"calcite-hydrated-hidden":u,dir:t,queued:this.queued,role:c},this.requestedIcon?a("div",{class:"alert-icon"},a("calcite-icon",{icon:this.requestedIcon,scale:"m"})):null,a("div",{class:"alert-content"},a("slot",{name:"alert-title"}),a("slot",{name:"alert-message"}),a("slot",{name:"alert-link"})),r,!this.autoDismiss?i:null,this.active&&!this.queued&&this.autoDismiss?n:null)};e.prototype.alertSync=function(e){if(this.queue!==e.detail.queue){this.queue=e.detail.queue}this.queueLength=this.queue.length;this.determineActiveAlert()};e.prototype.alertRegister=function(){if(this.active&&!this.queue.includes(this.el)){this.queued=true;this.queue.push(this.el)}this.calciteAlertSync.emit({queue:this.queue});this.determineActiveAlert()};e.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){if(!this.closeButton&&!this.alertLinkEl)return[2];else if(this.alertLinkEl)this.alertLinkEl.setFocus();else if(this.closeButton)this.closeButton.focus();return[2]}))}))};e.prototype.determineActiveAlert=function(){var e=this;var t;if(((t=this.queue)===null||t===void 0?void 0:t[0])===this.el){this.openAlert();clearTimeout(this.autoDismissTimeout);if(this.autoDismiss){this.autoDismissTimeout=window.setTimeout((function(){return e.closeAlert()}),u[this.autoDismissDuration])}}else return};e.prototype.openAlert=function(){var e=this;clearTimeout(this.queueTimeout);this.queueTimeout=window.setTimeout((function(){return e.queued=false}),300);this.calciteAlertOpen.emit({el:this.el,queue:this.queue})};Object.defineProperty(e.prototype,"el",{get:function(){return r(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{active:["watchActive"],icon:["updateRequestedIcon"],color:["updateRequestedIcon"]}},enumerable:false,configurable:true});return e}());h.style=d}}}));