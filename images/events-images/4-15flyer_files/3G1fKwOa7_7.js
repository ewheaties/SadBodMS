;/*FB_PKG_DELIM*/

__d("CometTab.react",["CometFocusGroupContext","CometIcon.react","CometNonBreakingSpace.react","CometPressable.react","CometTextWithIcon.react","ReactDOMComet","TetraText.react","gkx","react","stylex","useIntersectionObserver","useMergeRefs","useUnsafeRef_DEPRECATED"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useCallback,j=b.useContext,k=b.useState,l={icon:{lineHeight:"x14ju556",$$css:!0},iconEnd:{marginStart:"xsgj6o6",$$css:!0},iconEnd8:{marginStart:"x1i64zmx",$$css:!0},iconStart:{marginEnd:"xw3qccf",$$css:!0},iconStart8:{marginEnd:"x1emribx",$$css:!0},pressable:{appearance:"xjyslct",backgroundColor:"xjbqb8w",backgroundImage:"x18o3ruo",borderTopStyle:"x13fuv20",borderEndStyle:"xu3j5b3",borderBottomStyle:"x1q0q8m5",borderStartStyle:"x26u7qi",borderTopWidth:"x972fbf",borderEndWidth:"xcfux6l",borderBottomWidth:"x1qhh985",borderStartWidth:"xm0m39n",boxSizing:"x9f619",color:"x1heor9g",cursor:"x1ypdohk",display:"x78zum5",marginTop:"xdj266r",marginEnd:"x11i5rnm",marginBottom:"xat24cr",marginStart:"x1mh8g0r",paddingTop:"xexx8yu",paddingEnd:"x4uap5",paddingBottom:"x18d9i69",paddingStart:"xkhd6sd",position:"x1n2onr6",textAlign:"x16tdsg8",textDecoration:"x1hl2dhg",zIndex:"x1vjfegm",$$css:!0},selected:{borderTopEndRadius:"x11t77rh",borderTopStartRadius:"x146dn1l",bottom:"x1ey2m1c",end:"xds687c",height:"xuoj239",position:"x10l6tqk",start:"x17qophe",$$css:!0},tab:{alignItems:"x6s0dn4",boxSizing:"x9f619",display:"x78zum5",flexShrink:"x2lah0s",minHeight:"x1hshjfz",position:"x1n2onr6",$$css:!0}};function a(a,b){var e=a.badge,f=a.badgeCap,g=a.containerRef,m=a.highlightColor,n=a.icon,o=a.iconColor;o=o===void 0?"secondary":o;var p=a.iconLocation;p=p===void 0?"right":p;var q=a.iconSize;q=q===void 0?16:q;var r=a.label,s=a.labelIsHidden;s=s===void 0?!1:s;var t=a.onHidden,u=a.pressableXStyle,v=a.preventDisableWhenHidden;v=v===void 0?!1:v;var w=a.reduceEmphasis;w=w===void 0?!1:w;var x=a.selected;x=x===void 0?!1:x;var y=a.tabRef,z=a.underlineColor,A=a.xstyle;a=babelHelpers.objectWithoutPropertiesLoose(a,["badge","badgeCap","containerRef","highlightColor","icon","iconColor","iconLocation","iconSize","label","labelIsHidden","onHidden","pressableXStyle","preventDisableWhenHidden","reduceEmphasis","selected","tabRef","underlineColor","xstyle"]);var B=k(v?!1:!c("gkx")("2333")),C=B[0],D=B[1],E=c("useUnsafeRef_DEPRECATED")(t);E.current=t;B=j(c("CometFocusGroupContext"));t=B.FocusItem;B=i(function(a){a=a.intersectionRatio;var b=a<.5;(!c("gkx")("2333")||b!==C)&&d("ReactDOMComet").flushSync(function(){D(b),E.current&&E.current(b)})},[C,E]);B=c("useIntersectionObserver")(B,{root:g?function(){return g.current}:null,threshold:.5});f=!s&&e!=null?typeof e==="number"?h.jsxs(h.Fragment,{children:[r,h.jsx(c("CometNonBreakingSpace.react"),{size:.75}),h.jsx(c("TetraText.react"),{color:x?"highlight":"secondary",type:"body4",children:f!=null&&e>f?f+"+":e})]}):h.jsx(c("CometTextWithIcon.react"),{iconAfter:e,spacing:.75,children:r}):s?null:r;x&&m!=null&&(f=h.jsx("span",{style:{color:m},children:f}));w?f=h.jsx(c("TetraText.react"),{color:x?"highlight":"secondary",type:"body3",children:f}):f=h.jsx(c("TetraText.react"),{color:x?"highlight":"secondary",type:"bodyLink3",children:f});e=n!=null&&p==="left"?h.jsx("div",{className:c("stylex")(l.icon,!s&&(q===16?l.iconStart:l.iconStart8)),children:h.jsx(c("CometIcon.react"),{color:x?"highlight":o,icon:n,size:q})}):null;m=n!=null&&p==="right"?h.jsx("div",{className:c("stylex")(l.icon,(e!=null||!s)&&(q===16?l.iconEnd:l.iconEnd8)),children:h.jsx(c("CometIcon.react"),{color:x?"highlight":o,icon:n,size:q})}):null;w=c("useMergeRefs")(v?void 0:B,b,y);p=h.jsxs("div",{className:c("stylex")(l.tab,A),ref:w,children:[e,f,m,h.jsx("div",{className:c("stylex")(x&&l.selected),style:{backgroundColor:x?z:void 0}})]});if(a.onPress!=null||a.linkProps!=null){o=h.jsx(c("CometPressable.react"),babelHelpers["extends"]({},a,{"aria-hidden":C,"aria-selected":x,disabled:C,display:"inline",focusable:!C,label:s?r:void 0,overlayDisabled:x,ref:w,role:"tab",xstyle:[l.pressable,u],children:p}));return t&&!C?h.jsx(t,{children:o}):o}return p}a.displayName=a.name+" [from "+f.id+"]";e=h.forwardRef(a);g["default"]=e}),98);
__d("CometTabs.react",["fbt","CometComponentWithKeyCommands.react","CometDeferredPopoverTrigger.react","CometFocusGroup.react","CometKeys","CometTab.react","CometVisualCompletionAttributes","CurrentLocale","SVGIcon","TriangleDownFilled20.svg.react","focusScopeQueries","gkx","mergeRefs","react","requireDeferred","stylex"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");b=d("react");var j=b.useCallback,k=b.useEffect,l=b.useMemo,m=b.useRef,n=b.useState,o=c("requireDeferred")("CometTabMenu.react").__setRef("CometTabs.react"),p={heightGetter:{lineHeight:"x14ju556",position:"x1n2onr6",$$css:!0},heightSetter:{overflowX:"x6ikm8r",overflowY:"x10wlt62",visibility:"xlshs6z",$$css:!0},moreTab:{height:"xng8ra",position:"x10l6tqk",start:"x17qophe",top:"x13vifvy",$$css:!0},moreWrapper:{display:"x1rg5ohu",height:"xng8ra",position:"x1n2onr6",verticalAlign:"x16dsc37",$$css:!0},moreWrapperAdaptive:{height:"x1x4j4od",maxHeight:"x1jquxbb",minHeight:"x2lwn1j",overflowX:"x6ikm8r",overflowY:"x10wlt62",$$css:!0},root:{height:"xng8ra",overflowX:"x6ikm8r",overflowY:"x10wlt62",position:"x1n2onr6",width:"xh8yej3",zIndex:"x1ja2u2z",$$css:!0},tab:{display:"x3nfvp2","float":"xrbpyxo",height:"xng8ra",verticalAlign:"x16dsc37",$$css:!0},tabsContainer:{bottom:"x1ey2m1c",boxSizing:"x9f619",end:"xds687c",position:"x10l6tqk",start:"x17qophe",top:"x13vifvy",$$css:!0}},q={"default":{width:"x1k51ox",$$css:!0},englishOrShorter:{width:"x192njpj",$$css:!0}},r=["en_US","en_GB","nl_NL","vi_VN","af_ZA","fy_NL","kk_KZ","cs_CZ","sw_KE","it_IT","pt_BR","pt_PT","bg_BG","hr_HR","nn_NO","es_ES","es_LA","fr_FR","ca_ES","fr_CA","si_LK","sr_RS","nb_NO","sv_SE","zh_HK","zh_TW","he_IL","ne_NP","eo_EO"];function a(a){var b=a.heightXStyle,e=a.maxHeightXStyle,f=a.tabs,g=a.maxTabs,v=g===void 0?f.length:g,w=a.menuSize,x=a.moreTabRef,y=a.moreTabStyles,z=a.moreTabXStyle,A=a.moreWrapperXStyle,B=a.tabsContainerStyle;g=a.truncateMenu;var C=g===void 0?!1:g,D=a.onMoreTabPress,E=m(null),F=m([]),G=m(null);g=n(u(f.length,v));var H=g[0],I=g[1];k(function(){I(u(f.length,v))},[f.length,v]);var J=v<f.length?f.slice(0,v):f,K=v>=f.length,L=l(function(){return H.some(function(a){return(a=f[a])==null?void 0:a.selected})},[H,f]),M=j(function(a,f){a=c("mergeRefs")(a,G,x);var g=[{command:{key:c("CometKeys").DOWN},description:h._("__JHASH__XKKEZVjEqk8__JHASH__"),handler:f}];return i.jsx(c("CometComponentWithKeyCommands.react"),{commandConfigs:g,xstyle:[p.moreWrapper,q["default"],r.includes(c("CurrentLocale").get())&&q.englishOrShorter,b,K&&p.moreWrapperAdaptive,A,e],children:i.jsx(c("CometTab.react"),babelHelpers["extends"]({},y,{"aria-haspopup":"menu",icon:d("SVGIcon").svgIcon(c("TriangleDownFilled20.svg.react")),iconSize:16,label:h._("__JHASH__aIpSCYSYAKN__JHASH__"),onPress:function(){f(),D&&D()},pressableXStyle:[p.moreTab,b],ref:a,role:"tab",selected:L,testid:void 0,xstyle:z}))})},[K,b,L,e,y,z,A,D]);return i.jsx(c("CometFocusGroup.react"),{hideArrowSignifiers:!0,orientation:"horizontal",preventScrollOnFocus:!0,role:"tablist",tabScopeQuery:d("focusScopeQueries").tabbableScopeQuery,wrap:!0,children:function(a){return i.jsx("div",babelHelpers["extends"]({className:c("stylex")(p.root,a,b),role:"tablist"},c("CometVisualCompletionAttributes").IGNORE_DYNAMIC,{children:i.jsxs("div",{className:"x14ju556 x1n2onr6",children:[K&&i.jsx("div",{className:"x6ikm8r x10wlt62 xlshs6z",children:J.map(function(a,b){a.linkProps;a.onPress;a=babelHelpers.objectWithoutPropertiesLoose(a,["linkProps","onPress"]);return i.createElement(c("CometTab.react"),babelHelpers["extends"]({},a,{key:b+"tab",ref:function(a){return F.current[b]=a},role:"tab",selected:a.selected,xstyle:[p.tab,a.xstyle]}))})}),i.jsxs("div",{className:c("stylex")(p.tabsContainer,B),"data-testid":void 0,children:[i.jsx(c("CometDeferredPopoverTrigger.react"),{popoverProps:{menuItems:H.map(function(a){return f[a]}).filter(Boolean),menuSize:w,truncate:C},popoverResource:o,children:M}),J.map(function(a,b){return i.createElement(c("CometTab.react"),babelHelpers["extends"]({},a,{containerRef:E,key:b+"tab",onHidden:function(a){if(c("gkx")("3806")){var d=a?s(H,b):t(H,b);d!==H&&I(d)}else I(function(c){return a?s(c,b):t(c,b)})},pressableXStyle:p.tab,ref:function(a){return F.current[b]=a},role:"tab",selected:a.selected}))})]})]})}))}})}a.displayName=a.name+" [from "+f.id+"]";function s(a,b){return a.includes(b)?a:[].concat(a,[b]).sort(function(a,b){return a-b})}function t(a,b){return a.includes(b)?a.filter(function(a){return a!==b}):a}function u(a,b){return Array.from({length:a}).map(function(a,b){return b}).filter(function(a){return a>=b})}g["default"]=a}),98);
__d("CometEntityHeaderTabs.react",["CometTabs.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={entityHeaderTab:{height:"xng8ra",paddingEnd:"x1pi30zi",paddingStart:"x1swvt13",$$css:!0}};function a(a){var b=a.maxTabs,d=a.menuSize,e=a.onMoreTabPress;a=a.tabs;return h.jsx(c("CometTabs.react"),{maxTabs:b,menuSize:d,moreTabStyles:{overlayOffset:{bottom:-4,left:0,right:0,top:-4},overlayRadius:6,underlineColor:"var(--accent)"},moreTabXStyle:i.entityHeaderTab,onMoreTabPress:e,tabs:a.map(function(a){return babelHelpers["extends"]({},a,{overlayOffset:{bottom:-4,left:0,right:0,top:-4},overlayRadius:6,underlineColor:"var(--accent)",xstyle:i.entityHeaderTab})}),truncateMenu:!0})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometEntityHeaderTabBar.react",["CometEntityHeaderTabs.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.maxTabs,d=a.menuSize,e=a.tabs;a=a.tabsRouteTarget;var f=a===void 0?"self":a,g=e.findIndex(function(a){return a.isActive()});a=e.map(function(a,b){a.isActive;var c=a.linkProps;a=babelHelpers.objectWithoutPropertiesLoose(a,["isActive","linkProps"]);return c?babelHelpers["extends"]({},a,{linkProps:babelHelpers["extends"]({},c,{routeTarget:f}),selected:b===g}):babelHelpers["extends"]({},a,{selected:b===g})});return h.jsx(c("CometEntityHeaderTabs.react"),{maxTabs:b,menuSize:d,tabs:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometCreateAvatarCoverPhotoStrings",["fbt"],(function(a,b,c,d,e,f,g,h){"use strict";a=h._("__JHASH__os8hAO6fE4X__JHASH__");b=h._("__JHASH__Q4Mv6CxKnWt__JHASH__");c=h._("__JHASH__9lDsMTDMFMc__JHASH__");d=h._("__JHASH__IY7iRYFIve0__JHASH__");e=h._("__JHASH__Z1RI2dFeqNf__JHASH__");f=h._("__JHASH__NPbBpSNkwAq__JHASH__");h=h._("__JHASH__dJ7XJUc03zw__JHASH__");g.TITLE=a;g.PRIVACY_NOTICE=b;g.SHARE_TO_FEED=c;g.BUTTON_CTA=d;g.CREATE_AVATAR_COVER_PHOTO=e;g.PREVIEW=f;g.CREATE_WITH_AVATAR=h}),98);
__d("ColorUtils",[],(function(a,b,c,d,e,f){"use strict";var g=new RegExp("^[#]{0,1}([\\w]{1,2})?([\\w]{1,2})([\\w]{1,2})([\\w]{1,2})$"),h=function(a,b){if(a==null)return null;a=a.match(g);if(a==null)return null;a=a.slice(1).map(function(a){return parseInt(a.length==1?a+a:a,16)});if(a.length==4){b==="ARGB"&&a.push(a.shift());return"rgba("+a[0]+","+a[1]+","+a[2]+","+a[3]/100+")"}return"rgb("+a[0]+","+a[1]+","+a[2]+")"};function a(a){return h(a,"ARGB")}function b(a){return h(a,"RGBA")}f.hexARGBToCSSRGBA=a;f.hexRGBAToCSSRGBA=b}),66);
__d("CreateAvatarCoverPhotoEntryPoint",["$InternalEnum"],(function(a,b,c,d,e,f){a=b("$InternalEnum")({EDITOR:"editor",DIALOG:"dialog"});c=a;f["default"]=c}),66);
__d("ProfileCometCreateAvatarCoverPhotoDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6437296436292595"}),null);