import{r as t,f as e,h as a,H as i,g as o,c as r}from"./p-0f61cfe6.js";import{g as n,f as s,c}from"./p-481b0b7a.js";import{g as l}from"./p-a4e6e35b.js";import{C as d}from"./p-28355066.js";import{g as p}from"./p-0ae16e31.js";const m=class{constructor(a){t(this,a),this.appearance="solid",this.active=!1,this.compact=!1,this.disabled=!1,this.indicator=!1,this.intlLoading="Loading",this.loading=!1,this.scale="m",this.textEnabled=!1,this.observer=new MutationObserver((()=>e(this)))}connectedCallback(){this.observer.observe(this.el,{childList:!0,subtree:!0})}disconnectedCallback(){this.observer.disconnect()}async setFocus(){this.buttonEl.focus()}renderTextContainer(){const{text:t,textEnabled:e}=this;return t?a("div",{class:{"text-container":!0,"text-container--visible":e},key:"text-container"},t):null}renderIconContainer(){var t;const{loading:e,icon:i,scale:o,el:r,intlLoading:n}=this,s="l"===o?"m":"s",c=e?a("calcite-loader",{active:!0,inline:!0,label:n,scale:s}):null,l=i?a("calcite-icon",{icon:i,scale:s}):null,d=c||l,p=d||(null===(t=r.children)||void 0===t?void 0:t.length),m=a("div",{class:{"slot-container":!0,"slot-container--hidden":e}},a("slot",null));return p?a("div",{"aria-hidden":"true",class:"icon-container",key:"icon-container"},d,m):null}render(){const{compact:t,disabled:e,loading:o,el:r,textEnabled:s,label:c,text:l}=this,p=c||l,m="rtl"===n(r),b={button:!0,"button--text-visible":s,"button--compact":t,[d.rtl]:m};return a(i,null,a("button",{"aria-busy":o.toString(),"aria-disabled":e.toString(),"aria-label":p,class:b,disabled:e,ref:t=>this.buttonEl=t},this.renderIconContainer(),this.renderTextContainer()))}get el(){return o(this)}};m.style='@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;background-color:transparent}:host([disabled]){pointer-events:none}.button{background-color:var(--calcite-ui-foreground-1);border-style:none;cursor:pointer;fill:var(--calcite-ui-text-3);display:-ms-flexbox;display:flex;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start;margin:0;position:relative;font-size:var(--calcite-font-size--2);line-height:1rem;color:var(--calcite-ui-text-3);font-family:inherit;width:auto;text-align:unset}.button:hover{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1);fill:var(--calcite-ui-text-1)}.button:focus{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1);fill:var(--calcite-ui-text-1);outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.button:active{background-color:var(--calcite-ui-foreground-3)}.button .icon-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin:0;pointer-events:none;min-width:1rem;min-height:1rem}.button .text-container{line-height:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin:0;width:0;opacity:0;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-property:opacity;transition-property:opacity;-webkit-transition-property:margin;transition-property:margin;-webkit-transition-property:width;transition-property:width}.button .text-container--visible{-ms-flex:1 1 auto;flex:1 1 auto;opacity:1;width:auto}:host([scale=s]) .button{padding:0.5rem}:host([scale=m]) .button{padding:1rem}:host([scale=l]) .button{padding:1.25rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=s][compact]) .button,:host([scale=m][compact]) .button,:host([scale=l][compact]) .button{padding-left:0;padding-right:0}.slot-container{display:-ms-flexbox;display:flex}.slot-container--hidden{display:none}.button--text-visible{width:100%}.button--text-visible .icon-container{margin:0;margin-right:0.5rem}.button--text-visible .text-container--visible{margin:0;margin-right:0.5rem}.button--text-visible.calcite--rtl .icon-container{margin:0;margin-left:0.5rem}.button--text-visible.calcite--rtl .text-container--visible{margin:0;margin-left:0.5rem}:host([active]) .button,:host([active]) .button:hover,:host([active]) .button:focus,:host([active][loading]) .button{color:var(--calcite-ui-text-1);fill:var(--calcite-ui-text-1);background-color:var(--calcite-ui-foreground-3)}:host([appearance=clear]) .button{background-color:transparent;-webkit-transition-property:-webkit-box-shadow;transition-property:-webkit-box-shadow;transition-property:box-shadow;transition-property:box-shadow, -webkit-box-shadow;-webkit-transition-duration:150ms;transition-duration:150ms;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host([appearance=clear]) .button:hover,:host([appearance=clear]) .button:focus{background-color:transparent;-webkit-box-shadow:0 0 0 2px var(--calcite-ui-border-1) inset;box-shadow:0 0 0 2px var(--calcite-ui-border-1) inset}:host([active][appearance=clear]) .button,:host([active][appearance=clear]) .button:hover,:host([active][appearance=clear]) .button:focus{color:var(--calcite-ui-text-1);fill:var(--calcite-ui-text-1);background-color:var(--calcite-ui-foreground-3)}:host([appearance=clear][loading]) .button,:host([appearance=clear][disabled]) .button{background-color:transparent}:host([loading]) .button,:host([loading]) .button:hover,:host([loading]) .button:focus{background-color:var(--calcite-ui-foreground-1)}:host([loading]) .button .text-container,:host([loading]) .button:hover .text-container,:host([loading]) .button:focus .text-container{opacity:0.5}:host([loading]) calcite-loader[inline]{margin-right:0;color:var(--calcite-ui-text-3)}:host([disabled]) .button,:host([disabled]) .button:hover,:host([disabled]) .button:focus{cursor:default;opacity:0.5;background-color:var(--calcite-ui-foreground-1)}:host([disabled][active]) .button,:host([disabled][active]) .button:hover,:host([disabled][active]) .button:focus{opacity:0.5;background-color:var(--calcite-ui-foreground-3)}:host([indicator]) .button--text-visible,:host([indicator][scale=s]) .button--text-visible,:host([indicator][scale=l]) .button--text-visible{padding-right:1rem}:host([indicator]) .button::after{content:"";position:absolute;border-width:2px;background-color:var(--calcite-ui-brand);border-radius:9999px;height:0.5rem;width:0.5rem;z-index:10;border-color:var(--calcite-ui-foreground-1);bottom:0.5rem;right:0.5rem}:host([indicator][scale=s]) .button::after{bottom:0.25rem;right:0.25rem}:host([indicator][scale=l]) .button::after{bottom:0.5rem;right:0.5rem}:host([indicator]) .calcite--rtl::after{right:auto;left:0.25rem}:host([indicator]) .button--text-visible.calcite--rtl{padding-right:0.75rem;padding-left:1rem}:host([indicator]) .button:hover::after,:host([indicator]) .button:focus::after{border-color:var(--calcite-ui-foreground-1)}:host([indicator][active]) .button::after{border-color:var(--calcite-ui-foreground-3)}:host([indicator]) .button--text-visible::after,:host([indicator][scale=s]) .button--text-visible::after,:host([indicator][scale=l]) .button--text-visible::after{bottom:auto;right:0.5rem}:host([indicator]) .button--text-visible.calcite--rtl::after,:host([indicator][scale=s]) .button--text-visible.calcite--rtl::after,:host([indicator][scale=l]) .button--text-visible.calcite--rtl::after{right:auto;left:0.5rem}';function b({parent:t,expanded:e}){Array.from(t.querySelectorAll("calcite-action")).filter((t=>"menu-actions"!==t.slot)).forEach((t=>t.textEnabled=e)),t.querySelectorAll("calcite-action-group").forEach((t=>t.expanded=e))}const u=({expanded:t,intlExpand:e,intlCollapse:i,toggle:o,el:r,position:s,tooltip:c,ref:l})=>{const d="rtl"===n(r),p=t?i:e,m=["chevrons-left","chevrons-right"];d&&m.reverse();const b="end"===function(t,e){var a;return t||(null===(a=e.closest("calcite-shell-panel"))||void 0===a?void 0:a.position)||"start"}(s,r),u=a("calcite-action",{dir:d?"rtl":"ltr",icon:t?b?m[1]:m[0]:b?m[0]:m[1],onClick:o,ref:e=>(({tooltip:t,referenceElement:e,expanded:a,ref:i})=>(t&&(t.referenceElement=!a&&e),i&&i(e),e))({tooltip:c,referenceElement:e,expanded:t,ref:l}),text:p,textEnabled:t});return c?a("calcite-tooltip-manager",null,u):u},h=class{constructor(e){t(this,e),this.calciteActionBarToggle=r(this,"calciteActionBarToggle",7),this.expandDisabled=!1,this.expanded=!1,this.observer=new MutationObserver((()=>{const{el:t,expanded:e}=this;b({parent:t,expanded:e})})),this.toggleExpand=()=>{this.expanded=!this.expanded},this.setExpandToggleRef=t=>{this.expandToggleEl=t}}expandHandler(t){t||b({parent:this.el,expanded:this.expanded})}expandedHandler(t){this.expandDisabled||b({parent:this.el,expanded:t}),this.calciteActionBarToggle.emit()}componentWillLoad(){const{el:t,expandDisabled:e,expanded:a}=this;e||b({parent:t,expanded:a}),this.observer.observe(t,{childList:!0})}disconnectedCallback(){this.observer.disconnect()}async setFocus(t){"expand-toggle"!==t?this.el.focus():await s(this.expandToggleEl)}renderBottomActionGroup(){const{expanded:t,expandDisabled:e,intlExpand:i,intlCollapse:o,el:r,position:n,toggleExpand:s,tooltipExpand:l}=this,d=e?null:a(u,{el:r,expanded:t,intlCollapse:o||"Collapse",intlExpand:i||"Expand",position:n,ref:this.setExpandToggleRef,toggle:s,tooltip:l});return c(r,"bottom-actions")||d?a("calcite-action-group",{class:"action-group--bottom"},a("slot",{name:"bottom-actions"}),d):null}render(){return a(i,null,a("slot",null),this.renderBottomActionGroup())}get el(){return o(this)}static get watchers(){return{expandDisabled:["expandHandler"],expanded:["expandedHandler"]}}};h.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--calcite-icon-size:1rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{-ms-flex-item-align:stretch;align-self:stretch;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-direction:column;flex-direction:column;max-width:15vw;overflow-y:auto;pointer-events:auto}:host([expanded]){max-width:20vw}::slotted(calcite-action-group){border-bottom:1px solid var(--calcite-ui-border-2)}::slotted(calcite-action-group:last-child){border-bottom:none}.action-group--bottom{padding-bottom:0;-ms-flex-positive:1;flex-grow:1;-ms-flex-pack:end;justify-content:flex-end}";const f=class{constructor(e){t(this,e),this.expanded=!1,this.menuOpen=!1}expandedHandler(){this.menuOpen=!1}renderMenu(){const{el:t,expanded:e,intlOptions:i,menuOpen:o}=this;return c(t,"menu-actions")?a("calcite-action-menu",{expanded:e,flipPlacements:["left","right"],intlOptions:i,open:o,placement:"leading-start"},a("slot",{name:"menu-actions"})):null}render(){return a(i,null,a("slot",null),this.renderMenu())}get el(){return o(this)}static get watchers(){return{expanded:["expandedHandler"]}}};f.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--calcite-icon-size:1rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding:var(--calcite-spacing-half) 0}:host(:first-child){padding-top:0}::slotted(calcite-action){display:-ms-flexbox;display:flex;width:100%}";const x=["ArrowUp","ArrowDown"],g=["ArrowUp","ArrowDown","End","Home"],w=class{constructor(e){t(this,e),this.expanded=!1,this.offsetDistance=0,this.open=!1,this.placement="auto",this.actionElements=[],this.mutationObserver=new MutationObserver((()=>this.getActions())),this.guid=`calcite-action-menu-${l()}`,this.menuId=`${this.guid}-menu`,this.menuButtonId=`${this.guid}-menu-button`,this.activeMenuItemIndex=-1,this.menuButtonClick=()=>{this.toggleOpen()},this.setMenuButtonRef=t=>{this.menuButtonEl=t},this.updateAction=(t,e)=>{const{guid:a,activeMenuItemIndex:i}=this,o=`${a}-action-${e}`;t.tabIndex=-1,t.setAttribute("role","menuitem"),t.id||(t.id=o),t.active=e===i},this.updateActions=t=>{null==t||t.forEach(this.updateAction)},this.getActions=()=>{var t;const e=(null===(t=this.el.querySelector("slot"))||void 0===t?void 0:t.assignedElements({flatten:!0}).filter((t=>"CALCITE-ACTION"===t.tagName)))||[];this.updateActions(e),this.actionElements=e},this.menuButtonKeyUp=t=>{const{key:e}=t,{actionElements:a}=this;this.isValidKey(e,x)&&(t.preventDefault(),a.length&&(this.toggleOpen(!0),this.handleActionNavigation(e,a)))},this.menuButtonKeyDown=t=>{const{key:e}=t;this.isValidKey(e,x)&&t.preventDefault()},this.menuActionsContainerKeyDown=t=>{const{key:e}=t,{actionElements:a,activeMenuItemIndex:i}=this;if("Tab"!==e)if(" "!==e&&"Enter"!==e)this.isValidKey(e,g)&&t.preventDefault();else{t.preventDefault();const e=a[i];e?e.click():this.toggleOpen(!1)}else this.open=!1},this.menuActionsContainerKeyUp=t=>{const{key:e}=t,{actionElements:a}=this;"Escape"!==e?this.isValidKey(e,g)&&(t.preventDefault(),a.length&&this.handleActionNavigation(e,a)):this.toggleOpen(!1)},this.handleActionNavigation=(t,e)=>{const a=this.activeMenuItemIndex;"Home"===t&&(this.activeMenuItemIndex=0),"End"===t&&(this.activeMenuItemIndex=e.length-1),"ArrowUp"===t&&(this.activeMenuItemIndex=p(Math.max(a-1,-1),e.length)),"ArrowDown"===t&&(this.activeMenuItemIndex=p(a+1,e.length))},this.toggleOpen=(t=!this.open)=>{this.open=t,this.activeMenuItemIndex=-1,clearTimeout(this.menuFocusTimeout),t?this.menuFocusTimeout=window.setTimeout((()=>s(this.menuEl)),50):s(this.menuButtonEl)}}connectedCallback(){this.mutationObserver.observe(this.el,{childList:!0,subtree:!0}),this.getActions()}disconnectedCallback(){this.mutationObserver.disconnect()}expandedHandler(){this.open=!1}activeMenuItemIndexHandler(){this.updateActions(this.actionElements)}renderMenuButton(){const{menuButtonId:t,menuId:e,open:i,intlOptions:o,expanded:r}=this,n=o||"Options";return a("calcite-action",{active:i,"aria-controls":e,"aria-expanded":i.toString(),"aria-haspopup":"true",class:"menu-button",icon:"ellipsis",id:t,label:n,onClick:this.menuButtonClick,onKeyDown:this.menuButtonKeyDown,onKeyUp:this.menuButtonKeyUp,ref:this.setMenuButtonRef,text:n,textEnabled:r})}renderMenuItems(){const{actionElements:t,activeMenuItemIndex:e,open:i,menuButtonId:o,menuId:r,menuButtonEl:n,intlOptions:s,offsetDistance:c,placement:l}=this,d=t[e];return a("calcite-popover",{disablePointer:!0,label:s||"Options",offsetDistance:c,open:i,placement:l,referenceElement:n},a("div",{"aria-activedescendant":(null==d?void 0:d.id)||null,"aria-labelledby":o,class:"menu",id:r,onKeyDown:this.menuActionsContainerKeyDown,onKeyUp:this.menuActionsContainerKeyUp,ref:t=>this.menuEl=t,role:"menu",tabIndex:-1},a("slot",null)))}render(){return a(i,null,this.renderMenuButton(),this.renderMenuItems())}isValidKey(t,e){return!!e.find((e=>e===t))}get el(){return o(this)}static get watchers(){return{expanded:["expandedHandler"],activeMenuItemIndex:["activeMenuItemIndexHandler"]}}};w.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--calcite-icon-size:1rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}::slotted(calcite-action){display:-ms-flexbox;display:flex;width:100%}.menu-button{-ms-flex-item-align:stretch;align-self:stretch;-ms-flex:0 1 auto;flex:0 1 auto;height:100%;position:relative}.menu{min-width:var(--calcite-menu-min-width);-ms-flex-flow:column nowrap;flex-flow:column nowrap}";const y=class{constructor(e){t(this,e),this.calciteActionPadToggle=r(this,"calciteActionPadToggle",7),this.expandDisabled=!1,this.expanded=!1,this.layout="vertical",this.toggleExpand=()=>{this.expanded=!this.expanded},this.setExpandToggleRef=t=>{this.expandToggleEl=t}}expandHandler(t){t||b({parent:this.el,expanded:this.expanded})}expandedHandler(t){this.expandDisabled||b({parent:this.el,expanded:t}),this.calciteActionPadToggle.emit()}componentWillLoad(){const{el:t,expandDisabled:e,expanded:a}=this;e||b({parent:t,expanded:a})}async setFocus(t){"expand-toggle"!==t?this.el.focus():await s(this.expandToggleEl)}renderBottomActionGroup(){const{expanded:t,expandDisabled:e,intlExpand:i,intlCollapse:o,el:r,position:n,toggleExpand:s,tooltipExpand:c}=this,l=e?null:a(u,{el:r,expanded:t,intlCollapse:o||"Collapse",intlExpand:i||"Expand",position:n,ref:this.setExpandToggleRef,toggle:s,tooltip:c});return l?a("calcite-action-group",{class:"action-group--bottom"},l):null}render(){const t="rtl"===n(this.el);return a(i,null,a("div",{class:{container:!0,[d.rtl]:t}},a("slot",null),this.renderBottomActionGroup()))}get el(){return o(this)}static get watchers(){return{expandDisabled:["expandHandler"],expanded:["expandedHandler"]}}};y.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--calcite-icon-size:1rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{-webkit-animation:in 300ms ease-in-out;animation:in 300ms ease-in-out;border-radius:0.125rem}:host([expanded]){max-width:20vw}::slotted(calcite-action-group){border-width:0px;border-bottom-width:1px;border-color:var(--calcite-ui-border-3);border-style:solid;padding-bottom:0;padding-top:0}.container{-ms-flex-direction:column;flex-direction:column;display:-ms-inline-flexbox;display:inline-flex;overflow-y:auto;border-radius:0.25rem;background-color:var(--calcite-ui-background);-webkit-box-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);box-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);max-width:15vw}.action-group--bottom{-ms-flex-positive:1;flex-grow:1;-ms-flex-pack:end;justify-content:flex-end;padding-bottom:0}:host([layout=horizontal]) .container{-ms-flex-direction:row;flex-direction:row;max-width:unset}:host([layout=horizontal]) .container .action-group--bottom{padding:0}:host([layout=horizontal]) .container ::slotted(calcite-action-group){border-width:0px;border-right-width:1px;-ms-flex-direction:row;flex-direction:row;padding:0}:host([layout=horizontal]) .container.calcite--rtl ::slotted(calcite-action-group){border-width:0px;border-left-width:1px}::slotted(calcite-action-group:last-child){border-bottom-width:0px}";export{m as calcite_action,h as calcite_action_bar,f as calcite_action_group,w as calcite_action_menu,y as calcite_action_pad}