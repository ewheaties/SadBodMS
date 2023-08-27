;/*FB_PKG_DELIM*/

__d("FocusTableUtils",["FocusManager","filterNulls","focusKeyboardEventPropagation","focusScopeQueries","setElementCanTab"],(function(a,b,c,d,e,f,g){function a(a){return a.length===1}function h(a){return a instanceof HTMLElement||a instanceof SVGElement}function i(a,b){var d,e=b instanceof HTMLElement&&b.id!==""?b.id:null,f=new Set(b instanceof HTMLElement?c("filterNulls")([].concat(((d=b.getAttribute("aria-labelledby"))!=null?d:"").split(" "),((d=b.getAttribute("aria-describedby"))!=null?d:"").split(" "),((d=b.getAttribute("aria-owns"))!=null?d:"").split(" "),[b.getAttribute("aria-errormessage")])).filter(function(a){return a!==""}):[]);d=document.createTreeWalker(a,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_TEXT,{acceptNode:function(a){if(a===b)return NodeFilter.FILTER_REJECT;if(a.nodeType===Node.TEXT_NODE&&a.textContent.trim()==="")return NodeFilter.FILTER_REJECT;if(h(a)&&f.has(a.id))return NodeFilter.FILTER_REJECT;if(h(a)&&a.getAttribute("aria-hidden")==="true")return NodeFilter.FILTER_REJECT;if(a instanceof HTMLLabelElement&&(a.htmlFor===e||a.contains(b)))return NodeFilter.FILTER_REJECT;if(a.hasChildNodes())return NodeFilter.FILTER_SKIP;return h(a)&&a.getAttribute("aria-label")==null&&a.getAttribute("aria-labelledby")==null&&a.getAttribute("aria-describedby")==null&&a.getAttribute("alt")==null&&a.getAttribute("title")==null?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}});var g=d.currentNode;while(g===a)g=d.nextNode();return g!=null}var j=new Set(["button","checkbox","radio","reset","submit"]),k=new Set(["checkbox","link","switch","radio","button"]),l=new Set(["a","button"]);function m(a){var b=a.getAttribute("role"),c=a.tagName.toLowerCase(),d=a instanceof HTMLInputElement?a.type:null;if(a instanceof HTMLInputElement&&j.has(d))return!0;return k.has(b)||l.has(c)?!0:!1}function n(a){var b=[];a=document.createTreeWalker(a,NodeFilter.SHOW_ELEMENT,{acceptNode:function(a){return a instanceof HTMLElement&&m(a)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});var c=a.nextNode();while(c)b.push(c),c=a.nextNode();return b}function o(a,b){if(!b)return null;b=a.DO_NOT_USE_queryFirstNode(d("focusScopeQueries").tableCellScopeQuery);if(b==null)return null;a=n(b);a=(a=a)!=null?a:[];var c=a[0];a=a.slice(1);if(c!=null&&a.length===0&&!i(b,c))return c}function p(a,b,c){if(b){var e=b.scopeRef.current;if(e!==null){var f;f=o(e,(f=b.allowWithinCellNavigation)!=null?f:!1);a=(f=(f=f)!=null?f:e.DO_NOT_USE_queryFirstNode(a))!=null?f:b.focusStaticCells===!0?e.DO_NOT_USE_queryFirstNode(d("focusScopeQueries").tableCellScopeQuery):null;a!==null&&(document.activeElement!=null&&d("setElementCanTab").setElementCanTab(document.activeElement,!1,b.focusStaticCells),d("setElementCanTab").setElementCanTab(a,!0,b.focusStaticCells),d("FocusManager").focusElement(a),c!=null&&(c.preventDefault(),d("focusKeyboardEventPropagation").stopFocusKeyboardEventPropagation(c)))}}}function b(a,b,c){if(b!=null){b=b.DO_NOT_USE_queryFirstNode(a);b!==null&&(d("setElementCanTab").setElementCanTab(b,!0),d("FocusManager").focusElement(b),c.preventDefault(),d("focusKeyboardEventPropagation").stopFocusKeyboardEventPropagation(c))}}function q(a,b,c,d,e){d=d[c];c=s(d,e);var f=0,g,h,i;do{g=b-f;if(g>=0){i=r(d,g,e,a);if(i)return i}h=b+f;if(h<=c){i=r(d,h,e,a);if(i)return i}f++}while(g>=0&&h<=c);return null}function e(a,b,c,d,e,f,g,h){var i=b.onNavigate;if(i){var j=!1;e=v(e,d,h);var k=e[1];e=x(b,d,g);var l=e[0],m=e[1];if(l===null)return!1;b={currentCellIndex:k,currentRowIndex:m,event:c,focusCell:function(a,b){p(b||f,a,c)},getCell:function(a,b){a=l[a];return a!=null?r(a,b,h):null},getCellByTag:function(a){var b=q(a,k,m,l,h);if(b)return b;var c=l.length,d=m+1;while(!0){if(d===m)return null;if(d>c-1){d=0;continue}b=q(a,k,d,l,h);if(b)return b;d++}return null},preventDefault:function(){j=!0},type:a};i(b);if(j)return!0}return!1}function r(a,b,c,d){a=a.getChildContextValues(c).filter(function(a){return a!=null&&(d===void 0||a.tag===d)});c=0;for(var e=0;e<a.length;e++){var f=a[e];if(f){c+=f&&f.colSpan||1;if(c>b)return f}}return null}function f(a,b,c,d,e){c=r(b,c,d);if(c!==null){p(a,c,e);return}c=b.getChildContextValues(d).filter(Boolean);c.length>0&&p(a,c[c.length-1],e)}function s(a,b){b=(a=a.getChildContextValues(b).filter(Boolean))!=null?a:[];a=0;for(var c=0;c<b.length;c++){var d=b[c];d=d&&((d=d.colSpan)!=null?d:1);a+=d}return a}function t(a,b){var c=0;for(var d=0;d<a.length;d++){var e=a[d];if(e===null)continue;if(e.scopeRef.current===b)return[d,d+c];e=e.colSpan;typeof e==="number"&&(c+=e-1)}return[-1,-1]}function u(a,b){return a.getChildContextValues(b).filter(Boolean)}function v(a,b,c){b=u(b,c);if(b.length>0){c=t(b,a);a=c[0];c=c[1];return[b,a,c]}return[null,-1,-1]}function w(a,b,c){if(a){a=a.scopeRef.current;if(a!==null){a=a.getChildContextValues(b);b=[];for(var d=0;d<a.length;d++){var e=a[d];if(e){var f;f=(f=e.scopeRef)==null?void 0:f.current;e=(e=c==null?void 0:c(e))!=null?e:!0;f&&e&&b.push(f)}}return b}}return null}function x(a,b,c,d){a=w(a,c,d);if(b&&a&&a.length>0){c=a.indexOf(b);return[a,c]}return[null,-1]}function y(a){var b=a.altKey,c=a.ctrlKey,d=a.metaKey;a=a.shiftKey;return b===!0||c===!0||d===!0||a===!0}g.isPrintableCharacter=a;g.hasUnassociatedLeafNodes=i;g.isArrowKeyLessOperationElement=m;g.getCellSingleInteractiveContentNode=o;g.focusCell=p;g.focusRow=b;g.checkRowForMatch=q;g.handleOnNavigateBehavior=e;g.getCellByColumnIndex=r;g.focusCellByColumnIndex=f;g.getLength=s;g.getCellIndexes=t;g.getRowCells=u;g.getRowCellsWithIndexes=v;g.getRows=w;g.getRowsWithIndex=x;g.hasModifierKey=y}),98);
__d("FocusTable.react",["FocusManager","FocusTableUtils","Locale","ReactFocusEvent.react","ReactKeyboardEvent.react","focusKeyboardEventPropagation","react","setElementCanTab"],(function(a,b,c,d,e,f,g){var h=d("react");b=d("react");var i=b.useContext,j=b.useMemo,k=b.useRef,l=5;function a(a){var b=h.unstable_Scope,c=h.createContext(null),e=h.createContext(null),g=h.createContext(null);function n(e){var f=e.children,g=e.wrapX,i=e.wrapY,m=e.wrapXToNextLine,n=e.tabScopeQuery,o=e.allowModifiers,q=e.pageJumpSize,r=q===void 0?l:q,s=e.onNavigate,t=e.disabled,u=e.withinCellTabScopeQuery;q=e.focusStaticCells;var v=q===void 0?!1:q,w=k(null);e=j(function(){return{scopeRef:w,wrapXToNextLine:m,wrapX:g,wrapY:i,tabScopeQuery:n,allowModifiers:o,pageJumpSize:r,onNavigate:s,disabled:t,withinCellTabScopeQuery:u,focusStaticCells:v}},[m,g,i,n,o,r,s,t,u,v]);var x=k(!1);q=d("ReactFocusEvent.react").useFocusWithin(w,j(function(){return{onFocusWithin:function(b){x.current||(x.current=!0,w.current&&a&&(p(w.current,a,!1),d("setElementCanTab").setElementCanTab(b.target,!0,v)))}}},[x,v]));return h.jsx(c.Provider,{value:e,children:h.jsx(b,{ref:q,children:f})})}n.displayName=n.name+" [from "+f.id+"]";function o(a){a=a.children;var c=k(null),d=j(function(){return{scopeRef:c}},[]);return h.jsx(e.Provider,{value:d,children:h.jsx(b,{ref:c,children:a})})}o.displayName=o.name+" [from "+f.id+"]";function p(a,b,c){a=a.DO_NOT_USE_queryAllNodes(b);if(a!=null)for(b=0;b<a.length;b++){var e=a[b];d("setElementCanTab").setElementCanTab(e,c)}}function q(f){var l=f.children,n=f.colSpan,o=f.tag,q=i(c),r=(f=i(e))==null?void 0:f.scopeRef,s=k(null),t=k(!1),u=(q==null?void 0:q.withinCellTabScopeQuery)!=null,v=q==null?void 0:q.focusStaticCells;d("ReactKeyboardEvent.react").useKeyboard(s,j(function(){return{onKeyDown:function(b){if(q&&q.disabled===!0)return;if(d("focusKeyboardEventPropagation").hasFocusKeyboardEventPropagationStopped(b))return;var c=s.current;if(c===null||q===null)return;if(r==null)return;var f=r.current;if(f===null)return;var h=b.key,i=u&&d("FocusTableUtils").getCellSingleInteractiveContentNode(c,u)==null,j=t.current;if(h==="Tab"&&q){var k=q.tabScopeQuery,l=q.scopeRef.current;if(k&&l){if(d("FocusTableUtils").handleOnNavigateBehavior("TAB",q,b,f,c,k,e,g))return;var n=q.withinCellTabScopeQuery;j&&n!=null?b.shiftKey?d("FocusManager").focusPreviousContained(n,c,b,!0):d("FocusManager").focusNextContained(n,c,b,!0):(p(l,k,!1),document.activeElement!=null&&d("setElementCanTab").setElementCanTab(document.activeElement,!0,v))}return}n=b.ctrlKey||b.metaKey;l=h;d("Locale").isRTL()&&(h==="ArrowRight"?l="ArrowLeft":h==="ArrowLeft"&&(l="ArrowRight"));switch(l){case"Home":if(d("FocusTableUtils").handleOnNavigateBehavior("HOME",q,b,f,c,a,e,g))return;if(j)return;k=d("FocusTableUtils").getRowCellsWithIndexes(c,f,g);l=k[0];k=k[1];var o=d("FocusTableUtils").getRowsWithIndex(q,f,e),w=o[0];o=o[1];if(l!==null&&w!==null)if(n){if(o!==0||k!==0){l=w[0];d("FocusTableUtils").focusCellByColumnIndex(a,l,0,g,b)}}else if(k!==0){l=w[o];d("FocusTableUtils").focusCellByColumnIndex(a,l,0,g,b)}return;case"End":if(d("FocusTableUtils").handleOnNavigateBehavior("END",q,b,f,c,a,e,g))return;if(j)return;k=d("FocusTableUtils").getRowCellsWithIndexes(c,f,g);w=k[0];o=k[1];l=d("FocusTableUtils").getRowsWithIndex(q,f,e);k=l[0];l=l[1];if(w!==null&&k!==null)if(n){if(l!==k.length-1||o!==w.length-1){l=k[k.length-1];k=l.getChildContextValues(g).filter(Boolean);k.length>0&&d("FocusTableUtils").focusCell(a,k[k.length-1],b)}}else o!==w[w.length-1]&&d("FocusTableUtils").focusCell(a,w[w.length-1],b);return;case"ArrowUp":if(m(b,q))return;if(d("FocusTableUtils").handleOnNavigateBehavior("PREV_ROW",q,b,f,c,a,e,g))return;if(j)return;l=d("FocusTableUtils").getRowCellsWithIndexes(c,f,g);k=l[0];o=l[2];if(k!==null&&q){w=d("FocusTableUtils").getRowsWithIndex(q,f,e);l=w[0];k=w[1];if(l!==null)if(k===0){w=q.wrapY;if(w===!0&&!n){w=l[l.length-1];d("FocusTableUtils").focusCellByColumnIndex(a,w,o,g,b)}}else if(n){w=l[0];d("FocusTableUtils").focusCellByColumnIndex(a,w,o,g,b)}else{w=l[k-1];d("FocusTableUtils").focusCellByColumnIndex(a,w,o,g,b)}}return;case"PageUp":if(d("FocusTableUtils").handleOnNavigateBehavior("PAGE_UP",q,b,f,c,a,e,g))return;if(j)return;l=d("FocusTableUtils").getRowCellsWithIndexes(c,f,g);k=l[0];w=l[2];o=d("FocusTableUtils").getRowsWithIndex(q,f,e);l=o[0];o=o[1];if(k!==null&&l!==null&&q&&o!==0){k=q.pageJumpSize;l=l[Math.max(0,o-k)];d("FocusTableUtils").focusCellByColumnIndex(a,l,w,g,b)}return;case"ArrowDown":if(m(b,q))return;if(d("FocusTableUtils").handleOnNavigateBehavior("NEXT_ROW",q,b,f,c,a,e,g))return;if(j)return;o=d("FocusTableUtils").getRowCellsWithIndexes(c,f,g);k=o[0];l=o[2];w=d("FocusTableUtils").getRowsWithIndex(q,f,e);o=w[0];w=w[1];if(k!==null&&o!==null&&q&&w!==-1)if(w===o.length-1){k=q.wrapY;if(k===!0&&!n){k=o[0];d("FocusTableUtils").focusCellByColumnIndex(a,k,l,g,b)}}else if(n){k=o[o.length-1];d("FocusTableUtils").focusCellByColumnIndex(a,k,l,g,b)}else{n=o[w+1];d("FocusTableUtils").focusCellByColumnIndex(a,n,l,g,b)}return;case"PageDown":if(d("FocusTableUtils").handleOnNavigateBehavior("PAGE_DOWN",q,b,f,c,a,e,g))return;if(j)return;k=d("FocusTableUtils").getRowCellsWithIndexes(c,f,g);o=k[0];w=k[2];n=d("FocusTableUtils").getRowsWithIndex(q,f,e);l=n[0];k=n[1];if(o!==null&&l!==null&&q&&k!==l.length-1){n=q.pageJumpSize;o=l[Math.min(l.length-1,k+n)];d("FocusTableUtils").focusCellByColumnIndex(a,o,w,g,b)}return;case"ArrowLeft":if(m(b,q))return;if(d("FocusTableUtils").handleOnNavigateBehavior("PREV_CELL",q,b,f,c,a,e,g))return;if(j)return;l=d("FocusTableUtils").getRowCellsWithIndexes(c,f,g);k=l[0];n=l[1];o=d("FocusTableUtils").getRowsWithIndex(q,f,e);w=o[0];l=o[1];if(k!==null&&w!==null&&q)if(n>0)d("FocusTableUtils").focusCell(a,k[n-1],b);else if(n===0){o=q.wrapX;n=q.wrapXToNextLine;o===!0?d("FocusTableUtils").focusCell(a,k[k.length-1],b):n===!0&&w[l-1]&&d("FocusTableUtils").focusCellByColumnIndex(a,w[l-1],d("FocusTableUtils").getLength(w[l-1],g),g,b)}return;case"ArrowRight":if(m(b,q))return;if(d("FocusTableUtils").handleOnNavigateBehavior("NEXT_CELL",q,b,f,c,a,e,g))return;if(j)return;o=d("FocusTableUtils").getRowCellsWithIndexes(c,f,g);k=o[0];n=o[1];w=d("FocusTableUtils").getRowsWithIndex(q,f,e);l=w[0];o=w[1];if(k!==null&&l!==null&&q&&n!==-1)if(n===k.length-1){w=q.wrapX;var x=q.wrapXToNextLine;w===!0?d("FocusTableUtils").focusCell(a,k[0],b):x===!0&&l[o+1]&&d("FocusTableUtils").focusCellByColumnIndex(a,l[o+1],0,g,b)}else d("FocusTableUtils").focusCell(a,k[n+1],b);return;case"Enter":if(!i||j)return;if(d("FocusTableUtils").handleOnNavigateBehavior("ENTER",q,b,f,c,a,e,g))return;w=q==null?void 0:q.withinCellTabScopeQuery;if(w){x=c.DO_NOT_USE_queryFirstNode(w);x!=null&&(t.current=!0,p(c,w,!0),d("FocusManager").focusElement(x))}return;case"Escape":if(!i||!j)return;if(d("FocusTableUtils").handleOnNavigateBehavior("ESC",q,b,f,c,a,e,g))return;l=q==null?void 0:q.tabScopeQuery;if(l){t.current=!1;o=c.DO_NOT_USE_queryAllNodes(l);if(o!==null)for(k=0;k<o.length;k++){n=o[k];d("setElementCanTab").setElementCanTab(n,!1,v)}d("FocusTableUtils").focusCell(l,{scopeRef:s},b)}return;default:d("FocusTableUtils").isPrintableCharacter(h)&&d("FocusTableUtils").handleOnNavigateBehavior("PRINT_CHAR",q,b,f,c,a,e,g)}}}},[r,q,u]));var w=j(function(){return{scopeRef:s,colSpan:n,tag:o,allowWithinCellNavigation:u,focusStaticCells:v}},[n,u,o,v]),x=q==null?void 0:q.tabScopeQuery;f=d("ReactFocusEvent.react").useFocusWithin(s,j(function(){return{onFocusWithin:function(b){if(a!=null){var c;c=(c=s.current)==null?void 0:c.DO_NOT_USE_queryFirstNode(a);var e=b.target===c;if(e&&(c&&!d("setElementCanTab").canElementTab(c))){e=q==null?void 0:q.scopeRef.current;e&&p(e,a,!1);d("setElementCanTab").setElementCanTab(c,!0,v)}}if(x!=null){c=(e=s.current)==null?void 0:e.DO_NOT_USE_queryFirstNode(x);e=b.target===c;var f=w.allowWithinCellNavigation===!0;e&&f&&d("FocusTableUtils").focusCell(x,w);c!=null&&!e&&f&&b.target instanceof HTMLElement&&!d("FocusTableUtils").isArrowKeyLessOperationElement(b.target)&&(t.current=!0)}},onBlurWithin:function(){t.current=!1}}},[x,w,q==null?void 0:q.scopeRef]));return h.jsx(g.Provider,{value:w,children:h.jsx(b,{ref:f,children:l})})}q.displayName=q.name+" [from "+f.id+"]";return[n,o,q]}function m(a,b){if(d("FocusTableUtils").hasModifierKey(a)&&b){a=b.allowModifiers;if(a!==!0)return!0}}g.createFocusTable=a}),98);
__d("CometFocusTable.react",["CometCompositeFocusIndicator.react","CometFocusTableContext","FocusTable.react","focusScopeQueries","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useMemo;b=d("FocusTable.react").createFocusTable(d("focusScopeQueries").focusableScopeQuery);var j=b[0],k=b[1],l=b[2];function m(a){var b=a.children;a=babelHelpers.objectWithoutPropertiesLoose(a,["children"]);return h.jsx(l,babelHelpers["extends"]({},a,{children:h.jsx("div",{role:"gridcell",children:b})}))}m.displayName=m.name+" [from "+f.id+"]";var n={horizontal:!0,role:"grid",vertical:!0};function a(a){var b=a.elementType,d=a.label,e=babelHelpers.objectWithoutPropertiesLoose(a,["elementType","label"]),f=i(function(){return{FocusCell:m,FocusRow:k,FocusTable:j}},[]),g=(a=a.elementType)!=null?a:"div";return h.jsx(c("CometFocusTableContext").Provider,{value:f,children:h.jsx(c("CometCompositeFocusIndicator.react"),{compositeInfo:n,elementType:b,children:function(a){return h.jsx(g,{"aria-label":d,className:c("stylex")(a),role:"grid",children:h.jsx(j,babelHelpers["extends"]({},e))})}})})}a.displayName=a.name+" [from "+f.id+"]";g.CometFocusTable=a;g.CometFocusCell=l;g.CometFocusRow=k}),98);
__d("MWXCircleButton.react",["cr:6680","cr:6681","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a,c){var d=a.size;a=babelHelpers.objectWithoutPropertiesLoose(a,["size"]);if(b("cr:6680")!=null)return h.jsx(b("cr:6680"),babelHelpers["extends"]({size:d},a,{ref:c}));return b("cr:6681")!=null?h.jsx(b("cr:6681"),babelHelpers["extends"]({size:d===48?40:d},a,{ref:c})):null}a.displayName=a.name+" [from "+f.id+"]";c=h.forwardRef(a);g["default"]=c}),98);
__d("KeyCommandHandler.react",["ReactKeyboardEvent.react","react"],(function(a,b,c,d,e,f,g){var h=d("react"),i=d("react").useRef,j=h.unstable_Scope;function a(a){var b=a.children,c=a.onKeyDown;a=a.onKeyUp;var e=i(null);d("ReactKeyboardEvent.react").useKeyboard(e,{onKeyDown:c,onKeyUp:a});return h.jsx(j,{ref:e,children:b})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);/*FB_PKG_DELIM*/
__d("CometNotificationsRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6956568987743177"}),null);
__d("CometNotificationsRootQuery$Parameters",["CometNotificationsRootQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometNotificationsRootQuery_facebookRelayOperation"),metadata:{},name:"CometNotificationsRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometListCellHoverActions.react",["react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={action:{marginStart:"x1i64zmx",$$css:!0},menuButtonContainer:{display:"x78zum5",pointerEvents:"x67bb7w",position:"x10l6tqk",top:"xwa60dl",transform:"x1cb1t30",$$css:!0},menuButtonContainerFar:{end:"x84fkku",$$css:!0},menuButtonContainerNear:{end:"x1923su1",$$css:!0},visuallyHidden:{WebkitClipPath:"xqvhz8l",clip:"x1qvwoe0",clipPath:"xd0x92v",height:"xjm9jq1",overflowX:"x6ikm8r",overflowY:"x10wlt62",width:"x1i1rx1s",$$css:!0}};function a(a){var b=a.children,d=a.hidden;a=a.showNear;return h.jsx("div",{className:c("stylex")(i.menuButtonContainer,a===!0?i.menuButtonContainerNear:i.menuButtonContainerFar,d&&i.visuallyHidden),children:Array.isArray(b)?b.filter(function(a){return a!=null}).map(function(a,b){return h.jsx("div",{className:"x1i64zmx",children:a},b)}):b})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometListCellHoverButton.react",["fbt","ix","CometCircleButton.react","CometDeferredPopoverTrigger.react","CometEntryPointPopoverTrigger.react","CometLazyPopoverTrigger.react","FocusWithinHandler.react","fbicon","react","stylex"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react"),k=d("react").useCallback,l={buttonShadow:{borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",boxShadow:"x10xjkym",$$css:!0}};function a(a){var b=a.label,e=a.onFocusChange,f=a.onHoverChange,g=a.onMenuStateChange,m=a.onPress,n=a.size,o=a.testid,p=k(function(a){g!=null&&g(a)},[g]),q=k(function(a,g,k,o,p){return j.jsx("div",{ref:a,children:j.jsx(c("FocusWithinHandler.react"),{onFocusChange:e,children:function(a){return j.jsx("div",{className:c("stylex")(!a&&l.buttonShadow),children:j.jsx(c("CometCircleButton.react"),{color:"secondary",icon:d("fbicon")._(i("484387"),20),label:b!=null?b:h._("__JHASH__oYmrdmuxyrt__JHASH__"),onHoverIn:function(a){k&&k(a),f&&f(!0)},onHoverOut:function(){o&&o(),f&&f(!1)},onPress:function(){m&&m(),g()},onPressIn:p,size:(a=n)!=null?a:36,testid:void 0,type:"overlay"})})}})})},[e,b,f,m,o,n]);o={align:"middle",fallback:a.popoverFallback,onVisibilityChange:p,popoverProps:a.popoverProps,position:"below"};if(a.popoverTriggerType==="lazy")return j.jsx(c("CometLazyPopoverTrigger.react"),babelHelpers["extends"]({},o,{popoverResource:a.popoverResource,children:function(a,b){return q(a,b)}}));else if(a.popoverTriggerType==="entryPoint"){p=o.popoverProps;var r=babelHelpers.objectWithoutPropertiesLoose(o,["popoverProps"]);return j.jsx(c("CometEntryPointPopoverTrigger.react"),babelHelpers["extends"]({},r,{entryPointParams:a.entryPointParams,otherProps:p,popoverEntryPoint:a.popoverEntryPoint,preloadTrigger:"button_aggressive",children:function(a,b,c,d,e,f){return q(a,b,d,e,f)}}))}else return j.jsx(c("CometDeferredPopoverTrigger.react"),babelHelpers["extends"]({},o,{popoverResource:a.popoverResource,children:function(a,b){return q(a,b)}}))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometNotificationsMutationLogger",["QuickPerformanceLogger","qpl"],(function(a,b,c,d,e,f,g){"use strict";var h=c("qpl")._(3473469,"7351"),i="client_action",j="status",k="seen_state",l=0;function m(a,b){var d;b===void 0&&(b=null);var e=l++;c("QuickPerformanceLogger").markerStart(h,e);c("QuickPerformanceLogger").markerAnnotate(h,{string:(d={},d[i]=a,d)},{instanceKey:e});c("QuickPerformanceLogger").markerAnnotate(h,{string:(a={},a[j]="started",a)},{instanceKey:e});c("QuickPerformanceLogger").markerAnnotate(h,{string:{environment:"MAIN_SURFACE"}},{instanceKey:e});if(b){c("QuickPerformanceLogger").markerAnnotate(h,{string:(d={},d[k]=b,d)},{instanceKey:e})}return p(e)}function n(a){var b;c("QuickPerformanceLogger").markerAnnotate(h,{string:(b={},b[j]="success",b)},{instanceKey:a});c("QuickPerformanceLogger").markerEnd(h,2,a)}function o(a,b){c("QuickPerformanceLogger").markerAnnotate(h,{string:{status:"error"}},{instanceKey:a}),c("QuickPerformanceLogger").markerAnnotate(h,{string:{error_localized_description:b==null?void 0:b.message}},{instanceKey:a}),c("QuickPerformanceLogger").markerAnnotate(h,{string:{error_domain:b==null?void 0:b.name}},{instanceKey:a}),c("QuickPerformanceLogger").markerEnd(h,87,a)}function p(a){return{logOnError:function(b){return o(a,b)},logOnSuccess:function(){return n(a)}}}function a(){return m("HIDE")}function b(){return m("MARK_ALL_AS_READ")}function d(){return m("MARK_ALL_AS_SEEN")}function e(a){return m("MARK_AS_READ",a)}function f(){return m("MARK_AS_SEEN")}function q(a){return m("MARK_AS_UNREAD",a)}function r(){return m("UNHIDE")}g.notificationHideStart=a;g.notificationMarkAllAsReadStart=b;g.notificationMarkAllAsSeenStart=d;g.notificationMarkAsReadStart=e;g.notificationMarkAsSeenStart=f;g.notificationMarkAsUnreadStart=q;g.notificationUnhideStart=r}),98);
__d("NotificationsStoriesEnvironmentConstants",[],(function(a,b,c,d,e,f){a=Object.freeze({MAIN_SURFACE:"MAIN_SURFACE",COMET_DESKTOP:"COMET_DESKTOP",MOBILE:"MOBILE",MOBILE_WIDGET:"MOBILE_WIDGET",LOCKSCREEN_WIDGET:"LOCKSCREEN_WIDGET",PUSH:"PUSH",EMAIL:"EMAIL",BEEPER:"BEEPER",NOTIF_HEAD:"NOTIF_HEAD",CONVERSATION_HUB:"CONVERSATION_HUB",SERVER:"SERVER",TEST:"TEST",INTERN_NOTIFS:"INTERN_NOTIFS",UNKNOWN:"UNKNOWN",ADS_UNIFIED_NAV:"ADS_UNIFIED_NAV",ADS_MANAGER_APP:"ADS_MANAGER_APP",PAGES:"PAGES",IPHONE_IMMERSIVE:"IPHONE_IMMERSIVE",GROUPS:"GROUPS",GROUPS_SOCIAL:"GROUPS_SOCIAL",GROUPS_TAB:"GROUPS_TAB",GROUP_ADDS:"GROUP_ADDS",FACEBOOK_ANALYTICS:"FACEBOOK_ANALYTICS",FACEBOOK_MENTIONS:"FACEBOOK_MENTIONS",EVENTS:"EVENTS",MARKETPLACE:"MARKETPLACE",GAMES_DESKTOP:"GAMES_DESKTOP",VIDEO_HOME:"VIDEO_HOME",VIDEO_APP:"VIDEO_APP",WATCH_QUEUE:"WATCH_QUEUE",MESSENGER_ACTIVITY_TAB:"MESSENGER_ACTIVITY_TAB",MESSENGER_PEOPLE_TAB:"MESSENGER_PEOPLE_TAB",PAGE_ADMIN_FILTER:"PAGE_ADMIN_FILTER",PAGE_ADMIN_RICH_UPDATES:"PAGE_ADMIN_RICH_UPDATES",MENTION_FILTER:"MENTION_FILTER",WATCH:"WATCH",GAMING_APP:"GAMING_APP",GAMES_APP_TOP_UNIT:"GAMES_APP_TOP_UNIT",GAMES_TAB:"GAMES_TAB",KOTOTORO_APP:"KOTOTORO_APP",CARDIEM_SURFACE:"CARDIEM_SURFACE",JOBS:"JOBS",INTL_LOCPLAT:"INTL_LOCPLAT",DEVSITE:"devsite",CREATOR_STUDIO:"CREATOR_STUDIO",CREATOR_STUDIO_MOBILE:"CREATOR_STUDIO_MOBILE",CPX_INSIGHTS_RECOMMENDATIONS:"CPX_INSIGHTS_RECOMMENDATIONS",BUSINESS_HOME:"BUSINESS_HOME",BIZAPP_ALERT:"BIZAPP_ALERT",BIZAPP:"BIZAPP",BIZ_NOTIFICATION:"BIZ_NOTIFICATION",DATING_INACTIVE_USER_WATERFALL:"DATING_INACTIVE_USER_WATERFALL",NEWS_TAB:"NEWS_TAB",NEWS_TAB_NOTIF_SHEET:"NEWS_TAB_NOTIF_SHEET",DATING_TAB:"DATING_TAB",TODAY_IN:"TODAY_IN",MEMORIES:"MEMORIES",FRIENDS_TAB:"FRIENDS_TAB",IG_TOURNAMENT_MENU:"IG_TOURNAMENT_MENU",CORONAVIRUS_HUB_TAB:"CORONAVIRUS_HUB_TAB",PAGE_TAB_BADGING:"PAGE_TAB_BADGING",NEIGHBORHOODS_TAB:"NEIGHBORHOODS_TAB",CAMPUS_TAB:"CAMPUS_TAB",SHOP_TAB:"SHOP_TAB",DIRECT_SUPPORT_ADMIN_PANEL:"DIRECT_SUPPORT_ADMIN_PANEL",PRODASH_TAB:"PRODASH_TAB",BUSINESS_CONSOLE:"BUSINESS_CONSOLE",WORKSTREAM:"WORKSTREAM",PREVIEW:"PREVIEW",MOBILE_CENTER_TAB:"MOBILE_CENTER_TAB",FB_SHORTS_TAB:"FB_SHORTS_TAB",FEEDS:"FEEDS",WEARABLE_APP:"WEARABLE_APP",HORIZON:"HORIZON",COURIER:"COURIER",FEEDBACK_TILES:"FEEDBACK_TILES",WEB_DESKTOP:"WEB_DESKTOP",MESSENGER_FAMILY_CENTER:"MESSENGER_FAMILY_CENTER"});f["default"]=a}),66);
__d("CometNotificationsRoot.entrypoint",["CometNotificationsRootQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){a={count:15,environment:"MAIN_SURFACE",filter_tokens:(a=a==null?void 0:(a=a.passthroughProps)==null?void 0:a.filterTokens)!=null?a:[],scale:d("WebPixelRatio").get()};return{queries:{notificationsRootQueryReference:{parameters:b("CometNotificationsRootQuery$Parameters"),variables:a}}}},root:c("JSResourceForInteraction")("CometNotificationsRoot.react").__setRef("CometNotificationsRoot.entrypoint")};g["default"]=a}),98);
__d("CometNotificationsTimestamp.react",["CometRelativeTimestamp.react","TetraText.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.date,d=a.format;a=a.seenAndRead;return a?h.jsx(c("TetraText.react"),{color:"secondary",testid:void 0,type:"body4",children:h.jsx(c("CometRelativeTimestamp.react"),{date:b,format:(a=d)!=null?a:"normal"})}):h.jsx(c("TetraText.react"),{color:"highlight",testid:void 0,type:"bodyLink4",children:h.jsx(c("CometRelativeTimestamp.react"),{date:b,format:(a=d)!=null?a:"normal"})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useNotificationsEnvironmentFromContext",["CometNotificationsRootContext","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useContext;function a(){var a=h(c("CometNotificationsRootContext"));a=a.source;a=(a=a)!=null?a:"MAIN_SURFACE";return a}g["default"]=a}),98);
__d("isBusinessURI",["isFacebookURI"],(function(a,b,c,d,e,f,g){"use strict";function a(a){return c("isFacebookURI")(a)&&a.getSubdomain()==="business"}g["default"]=a}),98);/*FB_PKG_DELIM*/
__d("CometUFIReactionsDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6617636104926366"}),null);
__d("CometUFIReactionsDialogQuery$Parameters",["CometUFIReactionsDialogQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometUFIReactionsDialogQuery_facebookRelayOperation"),metadata:{},name:"CometUFIReactionsDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("isNotOutlierReactionComet_feedback.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"useDefaultActor"}],kind:"Fragment",metadata:{mask:!1},name:"isNotOutlierReactionComet_feedback",selections:[{alias:null,args:null,concreteType:"ReactorsOfContentConnection",kind:"LinkedField",name:"reactors",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null}],storageKey:null},{alias:null,args:[{kind:"Variable",name:"use_default_actor",variableName:"useDefaultActor"}],concreteType:"FeedbackReactionInfo",kind:"LinkedField",name:"viewer_feedback_reaction_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}],type:"Feedback",abstractKey:null};e.exports=a}),null);
__d("isNotOutlierReactionComet_topReactionsEdge.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:{mask:!1},name:"isNotOutlierReactionComet_topReactionsEdge",selections:[{alias:null,args:null,kind:"ScalarField",name:"reaction_count",storageKey:null},{alias:null,args:null,concreteType:"FeedbackReactionInfo",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}],type:"TopReactionsEdge",abstractKey:null};e.exports=a}),null);
__d("getReactionSVGSource",["cr:1976","cr:2326","cr:2327","cr:2335","cr:2336","cr:2341","cr:2342","cr:2470","cr:2585","cr:2674","cr:274","cr:2895","cr:2896","cr:2949"],(function(a,b,c,d,e,f,g){"use strict";d=1;e=2;f=3;var h=4,i=7,j=8,k=11,l=12,m=16,n={ANGER:{detailed:b("cr:1976"),regular:b("cr:274")},DOROTHY:{detailed:"/images/ufi/reactions/svg/thankful.svg",regular:"/images/ufi/reactions/svg/thankful.svg"},HAHA:{detailed:b("cr:2327"),regular:b("cr:2326")},LIKE:{detailed:b("cr:2336"),regular:b("cr:2335")},LOVE:{detailed:b("cr:2342"),regular:b("cr:2341")},SORRY:{detailed:b("cr:2585"),regular:b("cr:2470")},SUPPORT:{detailed:b("cr:2895"),regular:b("cr:2674")},TOTO:{detailed:"/images/ufi/reactions/svg/pride.svg",regular:"/images/ufi/reactions/svg/pride.svg"},WOW:{detailed:b("cr:2949"),regular:b("cr:2896")}},o=(b={},b[j]=n.ANGER,b[k]=n.DOROTHY,b[h]=n.HAHA,b[d]=n.LIKE,b[e]=n.LOVE,b[i]=n.SORRY,b[m]=n.SUPPORT,b[l]=n.TOTO,b[f]=n.WOW,b),p=(j={},j["444813342392137"]=n.ANGER,j["1663186627268800"]=n.DOROTHY,j["115940658764963"]=n.HAHA,j["1635855486666999"]=n.LIKE,j["1678524932434102"]=n.LOVE,j["908563459236466"]=n.SORRY,j["613557422527858"]=n.SUPPORT,j["899779720071651"]=n.TOTO,j["478547315650144"]=n.WOW,j);function a(a,b){b===void 0&&(b=!1);var c;typeof a==="string"&&(c=n[a]);typeof a==="number"&&(c=o[a.toString()]);return b?(a=c)==null?void 0:a.detailed:(b=c)==null?void 0:b.regular}function c(a,b){b===void 0&&(b=!1);a=p[a];return b?a==null?void 0:a.detailed:a==null?void 0:a.regular}g.getReactionSVGSource=a;g.getReactionSVGSourceByID=c}),98);
__d("CometReactionIcon.react",["getReactionSVGSource","react","recoverableViolation","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a,b){var e=a.alt,f=a.reactionID,g=a.role,i=d("getReactionSVGSource").getReactionSVGSourceByID(f,a.size!=null&&a.size>=24);if(i==null){c("recoverableViolation")("Could not render unsupported reaction id "+f+".","comet_ui");return null}return h.jsx("img",{alt:e,className:c("stylex")(a.xstyle),"data-testid":void 0,height:a.size,ref:b,role:g,src:i,width:a.size})}a.displayName=a.name+" [from "+f.id+"]";b=h.memo(h.forwardRef(a));g["default"]=b}),98);
__d("CometLazyTooltip.react",["BaseTooltip.react","CometTooltipImpl.react","lazyLoadComponent","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useCallback,j=b.useMemo;function a(a){var b=a.delayContentMs;b=b===void 0?0:b;var d=a.delayTooltipMs;d=d===void 0?300:d;var e=a.onVisibilityChange,f=a.tooltipProps,g=a.tooltipResource;a=babelHelpers.objectWithoutPropertiesLoose(a,["delayContentMs","delayTooltipMs","onVisibilityChange","tooltipProps","tooltipResource"]);var k=i(function(a){a&&g.preload(),e&&e(a)},[e,g]),l=j(function(){return c("lazyLoadComponent")(g)},[g]);return h.jsx(c("BaseTooltip.react"),babelHelpers["extends"]({delayContentMs:b,delayTooltipMs:d,onVisibilityChange:k,tooltip:h.jsx(l,babelHelpers["extends"]({},f)),tooltipImpl:c("CometTooltipImpl.react")},a))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometLoggedOutCTAStrings",["fbt","CometLink.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");a=Object.freeze({createNewAccountText:h._("__JHASH__o-Xd7MMTxJE__JHASH__"),emailText:h._("__JHASH__5CF6ihB7q1G__JHASH__"),footerTitle:h._("__JHASH__NbzY3velFEE__JHASH__"),forgotPasswordText:h._("__JHASH__pwGVF1qBy_c__JHASH__"),getCPATextWithUrl:function(a){return h._("__JHASH__gRxMGuAaUcu__JHASH__",[h._implicitParam("=m1",i.jsx(c("CometLink.react"),{color:"highlight",href:a,target:"_blank",children:h._("__JHASH__U0F8td9ffpE__JHASH__")}))])},getDSATextWithUrl:function(a){return h._("__JHASH___zdx-D9WC3X__JHASH__",[h._implicitParam("=m1",i.jsx(c("CometLink.react"),{color:"highlight",href:a,target:"_blank",testid:void 0,children:h._("__JHASH__2hADRYVzjEZ__JHASH__")}))])},getFooterSeeMoreOfText:function(a){return h._("__JHASH__CKf13Q0abbP__JHASH__",[h._param("name-of-owner",a)])},getFrenchLawTextWithUrl:function(a){return h._("__JHASH__SQ2qRCMoLPP__JHASH__",[h._implicitParam("=m1",i.jsx(c("CometLink.react"),{color:"highlight",href:a,target:"_blank",children:h._("__JHASH__oMQmVbRSOps__JHASH__")}))])},getNetzdgTextWithUrl:function(a){return h._("__JHASH__VnMB11bfe3G__JHASH__",[h._implicitParam("=m1",i.jsx(c("CometLink.react"),{color:"highlight",href:a,target:"_blank",children:h._("__JHASH__RyxydFql_HO__JHASH__")}))])},passwordText:h._("__JHASH__Ngl2DQ6axho__JHASH__"),popupTitle:h._("__JHASH__DrbC1e1yF8x__JHASH__")});g["default"]=a}),98);
__d("CometUFIReactionsDialog.entrypoint",["CometUFIReactionsDialogQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var c=a.feedbackTargetID;a=a.reactionID;return{queries:{cometUFIReactionsQueryReference:{options:{fetchPolicy:"store-and-network"},parameters:b("CometUFIReactionsDialogQuery$Parameters"),variables:{feedbackTargetID:c,reactionID:a,scale:d("WebPixelRatio").get()}}}}},root:c("JSResourceForInteraction")("CometUFIReactionsDialog.react").__setRef("CometUFIReactionsDialog.entrypoint")};g["default"]=a}),98);
__d("CometUFITooltip.react",["CometErrorBoundary.react","CometLazyTooltip.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useCallback,j=b.useState;function a(a){var b=a.align;b=b===void 0?"middle":b;var d=a.children,e=a.delayContentMs;e=e===void 0?0:e;var f=a.delayTooltipMs;f=f===void 0?75:f;var g=a.headline,k=a.tooltipContentComponent;a=a.tooltipContentProps;var l=j(0),m=l[0],n=l[1];l=i(function(a){a&&n(m+1)},[m,n]);b=h.jsx(c("CometLazyTooltip.react"),{align:b,delayContentMs:e,delayTooltipMs:f,headline:g,onVisibilityChange:l,tooltipProps:babelHelpers["extends"]({},a,{shownCount:m}),tooltipResource:k,children:d});return h.jsx(c("CometErrorBoundary.react"),{fallback:function(){return d},children:b})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("isNotOutlierReactionComet",["isNotOutlierReactionComet_feedback.graphql","isNotOutlierReactionComet_topReactionsEdge.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=.05;h!==void 0?h:h=b("isNotOutlierReactionComet_feedback.graphql");i!==void 0?i:i=b("isNotOutlierReactionComet_topReactionsEdge.graphql");function a(a){var b;b=(b=a==null?void 0:(b=a.reactors)==null?void 0:b.count)!=null?b:0;var c=Math.ceil(b*j);return function(b){var d;if(((d=a.viewer_feedback_reaction_info)==null?void 0:d.id)!==((d=b.node)==null?void 0:d.id)){return((d=b.reaction_count)!=null?d:0)>=c}else return!0}}g["default"]=a}),98);