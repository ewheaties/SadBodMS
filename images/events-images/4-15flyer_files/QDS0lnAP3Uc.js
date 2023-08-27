;/*FB_PKG_DELIM*/

__d("CometFocusGroupFirstLetterNavigation",["isStringNullOrEmpty","react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");var h=a.useEffect,i=a.useState,j=function(a){return a.slice(0,1).toLowerCase()};b=function(a){var b=i(void 0),d=b[0],e=b[1];h(function(){var b;b=a==null?void 0:(b=a.current)==null?void 0:b.innerText;c("isStringNullOrEmpty")(b)||e(j(b))},[a]);return d};e=function(a){if(a.type==="PRINT_CHAR"){a.event.stopPropagation();var b=a.event.key.toLowerCase();b=a.getItemByTag(b);b!=null&&a.focusItem(b)}};g.getFirstLetterNavigationTag=j;g.useFirstLetterNavigationTag=b;g.handleFirstLetterNavigation=e}),98);
__d("CometMenuFocusGroup",["fbt","CometComponentWithKeyCommands.react","CometKeys","FocusGroup.react","focusScopeQueries","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");b=d("FocusGroup.react").createFocusGroup(d("focusScopeQueries").tabbableScopeQuery);var j=b[0];e=b[1];function a(a){var b=[{command:{key:c("CometKeys").UP},description:h._("__JHASH__1VqMgLPpraa__JHASH__"),handler:function(){}},{command:{key:c("CometKeys").DOWN},description:h._("__JHASH__7zajSsSIBFZ__JHASH__"),handler:function(){}}];return i.jsx(c("CometComponentWithKeyCommands.react"),{commandConfigs:b,children:i.jsx(j,babelHelpers["extends"]({},a))})}a.displayName=a.name+" [from "+f.id+"]";d={FocusGroup:a,FocusItem:e};g["default"]=d}),98);
__d("CometMenuItemBaseRoleContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext(null);g["default"]=b}),98);
__d("CometSeparatorMenuItem.react",["CometMenuItemBaseRoleContext","gkx","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useContext;b={separator:{borderTop:"x1n2xptk",marginTop:"x1gslohp",marginEnd:"xktsk01",marginBottom:"x12nagc",marginStart:"x1d52u69",$$css:!0}};e={separator:{borderTopWidth:"x178xt8z",borderTopStyle:"x13fuv20",borderTopColor:"x8cjs6t",marginTop:"x1gslohp",marginEnd:"xktsk01",marginBottom:"x12nagc",marginStart:"x1d52u69",$$css:!0}};var j=c("gkx")("4855")?babelHelpers["extends"]({},b,e):b;function a(a,b){a=a.xstyle;var d=i(c("CometMenuItemBaseRoleContext"));return h.jsx("div",{className:c("stylex")([j.separator,a]),ref:b,role:d==="menuitem"?"separator":"presentation"})}a.displayName=a.name+" [from "+f.id+"]";d=h.forwardRef(a);g["default"]=d}),98);
__d("CometMenuBase.react",["fbt","ix","BaseScrollableArea.react","CometErrorBoundary.react","CometFocusGroupFirstLetterNavigation","CometListCellStrict.react","CometMenuFocusGroup","CometMenuItemBaseRoleContext","CometSeparatorMenuItem.react","FocusRegion.react","TetraTextPairing.react","fbicon","focusScopeQueries","react","stylex"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react"),k=145,l={listItem:{borderTopStartRadius:"x1lcm9me",borderTopEndRadius:"x1yr5g0i",borderBottomEndRadius:"xrt01vj",borderBottomStartRadius:"x10y3i5r",display:"x78zum5",flexDirection:"x1q0g3np",marginTop:"xdj266r",marginEnd:"x1emribx",marginBottom:"xat24cr",marginStart:"x1i64zmx",paddingTop:"xz9dl7a",paddingEnd:"x1sxyh0",paddingBottom:"xsag5q8",paddingStart:"xurb0ha",$$css:!0},root:{alignItems:"x1qjc9v5",boxSizing:"x9f619",display:"x78zum5",flexDirection:"xdt5ytf",paddingStart:"xkhd6sd",paddingEnd:"x4uap5",paddingTop:"x1ten1a2",paddingBottom:"xz7cn9q",$$css:!0},sizeFull:{marginEnd:"xzy4u6w",width:"xh8yej3",$$css:!0},sizeNormal:{width:"x168biu4",$$css:!0},sizeSmall:{width:"xi55695",$$css:!0}},m="menu",n={listbox:"option",menu:"menuitem"};function a(a){var b=a.children,e=a.footer,f=a.header,g=a.maxHeight,o=a.role;o=o===void 0?m:o;a=a.size;a=a===void 0?"normal":a;var p=0,q=j.Children.toArray(b).map(function(a){if(a==null)return null;var b=p++;return a.type===c("CometSeparatorMenuItem.react")?a:j.jsx(c("CometErrorBoundary.react"),{children:a},b)});o=n[o];return j.Children.count(b)>0?j.jsx(c("BaseScrollableArea.react"),{horizontal:!1,style:g!=null?{maxHeight:Math.max(g,k)}:void 0,vertical:!0,xstyle:[l.root,a==="full"&&l.sizeFull,a==="normal"&&l.sizeNormal,a==="small"&&l.sizeSmall],children:j.jsxs(c("CometMenuItemBaseRoleContext").Provider,{value:o,children:[f!=null?j.jsxs(j.Fragment,{children:[f.onPressBack!=null?j.jsx(c("CometListCellStrict.react"),{addOnStart:{"aria-label":h._("__JHASH__v6nfNn2Wv-y__JHASH__"),icon:d("fbicon")._(i("512665"),24),onPress:f.onPressBack,type:"icon"},addOnStartVerticalAlign:"center",emphasized:!1,headline:f.title,level:3,meta:f.meta,paddingHorizontal:8}):j.jsx("div",{className:c("stylex")([l.listItem]),children:j.jsx(c("TetraTextPairing.react"),{body:f.body,headline:f.title,level:3,meta:f.meta,reduceEmphasis:!0})}),j.jsx(c("CometSeparatorMenuItem.react"),{})]}):null,j.jsx(d("FocusRegion.react").FocusRegion,{autoFocusQuery:(f==null?void 0:f.onPressBack)?d("focusScopeQueries").tabbableScopeQuery:null,children:j.jsx(c("CometMenuFocusGroup").FocusGroup,{onNavigate:d("CometFocusGroupFirstLetterNavigation").handleFirstLetterNavigation,orientation:"vertical",preventScrollOnFocus:!1,tabScopeQuery:d("focusScopeQueries").tabbableScopeQuery,wrap:!0,children:q})}),e!=null?j.jsxs(j.Fragment,{children:[j.jsx(c("CometSeparatorMenuItem.react"),{}),j.jsx("div",{className:"x1lcm9me x1yr5g0i xrt01vj x10y3i5r x78zum5 x1q0g3np xdj266r x1emribx xat24cr x1i64zmx xz9dl7a x1sxyh0 xsag5q8 xurb0ha",children:j.jsx(c("TetraTextPairing.react"),{level:3,meta:e.text})})]}):null]})}):null}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometMenuBaseWithPopover.react",["BaseContextualLayerAvailableHeightContext","BaseMultiPageView.react","CometMenuBase.react","CometPopover.react","CometPopoverLoadingStateContent.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useContext,j=15,k="menu";function a(a,b){var d=a["aria-labelledby"],e=a.children,f=a.fallback,g=a.id,l=a.label,m=a.role;m=m===void 0?k:m;var n=a.arrowAlignment,o=a.withArrow;o=o===void 0?!1:o;var p=a.testid;p=p===void 0?"comet-menu":p;p=a.truncate;p=p===void 0?!1:p;a=babelHelpers.objectWithoutPropertiesLoose(a,["aria-labelledby","children","fallback","id","label","role","arrowAlignment","withArrow","testid","truncate"]);var q=i(c("BaseContextualLayerAvailableHeightContext"));o&&q!=null&&(q-=j);return h.Children.count(e)>0?h.jsx(c("CometPopover.react"),{arrowAlignment:n,id:g,label:l,labelledby:(n=d)!=null?n:void 0,ref:b,role:m,testid:void 0,withArrow:o,children:h.jsx(c("BaseMultiPageView.react"),{disableAutoFocus:!0,disableFocusContainment:!0,fallback:(g=f)!=null?g:h.jsx(c("CometPopoverLoadingStateContent.react"),{}),children:h.jsx(c("CometMenuBase.react"),babelHelpers["extends"]({},a,{children:e,maxHeight:p?(l=q)!=null?l:0:void 0,role:m}))})}):null}a.displayName=a.name+" [from "+f.id+"]";b=h.memo(h.forwardRef(a));g["default"]=b}),98);
__d("CometMenu.react",["CometMenuBaseWithPopover.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a,b){return h.jsx(c("CometMenuBaseWithPopover.react"),babelHelpers["extends"]({},a,{ref:b}))}a.displayName=a.name+" [from "+f.id+"]";b=h.forwardRef(a);g["default"]=b}),98);
__d("CometMenuItemHighlightContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext(!1);g["default"]=b}),98);
__d("CometMenuItemBase.react",["BaseFocusRing.react","CometFocusGroupFirstLetterNavigation","CometMenuContext","CometMenuFocusGroup","CometMenuItemBaseRoleContext","CometMenuItemHighlightContext","CometNonBreakingSpace.react","CometPressable.react","CometPressableOverlay.react","CometTextWithIcon.react","TetraText.react","TetraTextPairing.react","gkx","mergeRefs","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");b=d("react");var i=b.useCallback,j=b.useContext,k=b.useEffect,l=b.useMemo,m=b.useRef,n={aux:{marginStart:"x16n37ib",$$css:!0},content:{alignItems:"x6s0dn4",display:"x78zum5",flexDirection:"x1q0g3np",flexGrow:"x1iyjqo2",justifyContent:"x1qughib",minWidth:"xeuugli",$$css:!0},disabled:{cursor:"x1h6gzvc",$$css:!0},extraHorizontalPadding:{paddingStart:"xurb0ha",paddingEnd:"x1sxyh0",$$css:!0},listItem:{alignItems:"x6s0dn4",appearance:"xjyslct",boxSizing:"x9f619",cursor:"x1ypdohk",display:"x78zum5",flexDirection:"x1q0g3np",flexShrink:"x2lah0s",marginStart:"xnqzcj9",marginEnd:"x1gh759c",marginTop:"xdj266r",marginBottom:"xat24cr",paddingStart:"x1344otq",paddingEnd:"x1de53dj",paddingTop:"xz9dl7a",paddingBottom:"xsag5q8",position:"x1n2onr6",textAlign:"x16tdsg8",zIndex:"x1ja2u2z",$$css:!0},listItemAlignedCenter:{alignItems:"x6s0dn4",$$css:!0},listItemWithIcon:{paddingTop:"x1y1aw1k",paddingBottom:"xwib8y2",$$css:!0}},o=c("gkx")("1721477")||c("gkx")("1459");function a(a,b){var e=a.alignCenter;e=e===void 0?!1:e;var f=a.autoScrollOnLoad;f=f===void 0?!1:f;var g=a.aux,p=a.badge,q=a.bodyColor,r=a.bodyText,s=a.disabled,t=s===void 0?!1:s;s=a.download;var u=a.href,v=a.iconNode,w=a.id,x=a.isIconAnImage,y=a.onClick,z=a.onFocusIn,A=a.onFocusOut,B=a.onHoverIn,C=a.onHoverOut,D=a.onPressIn,E=a.overlayRadius,F=E===void 0?4:E;E=a.passthroughProps;var G=a.prefetchQueriesOnHover,H=a.preventClosingMenuOnSelect;H=H===void 0?!1:H;var I=a.preventLocalNavigation,J=a.primaryColor,K=a.primaryText,L=a.role,M=a.routeTarget,N=a.secondaryColor,O=a.secondaryText,P=a.target,Q=a.testid;Q=a.traceParams;var R=a.visuallyFocused,S=R===void 0?!1:R;R=babelHelpers.objectWithoutPropertiesLoose(a,["alignCenter","autoScrollOnLoad","aux","badge","bodyColor","bodyText","disabled","download","href","iconNode","id","isIconAnImage","onClick","onFocusIn","onFocusOut","onHoverIn","onHoverOut","onPressIn","overlayRadius","passthroughProps","prefetchQueriesOnHover","preventClosingMenuOnSelect","preventLocalNavigation","primaryColor","primaryText","role","routeTarget","secondaryColor","secondaryText","target","testid","traceParams","visuallyFocused"]);var T=m(null);a=j(c("CometMenuContext"));var U=H!==!0&&a?a.onClose:null;H=u!=null||M!=null||P!=null?{download:s,passthroughProps:E,prefetchQueriesOnHover:G,preventLocalNavigation:I,routeTarget:M,target:P,traceParams:Q,url:u}:void 0;a=i(function(a){U!=null&&U(),y&&y(a)},[y,U]);s=j(c("CometMenuItemBaseRoleContext"));I=(G=(E=L)!=null?E:s)!=null?G:void 0;var V=m(f);k(function(){var a=T.current;V.current&&a!=null&&(V.current=!1,a.scrollIntoView({block:"nearest"}))},[]);var W=m(S);k(function(){var a=T.current;!W.current&&S&&a!=null&&a.scrollIntoView({block:"nearest"})},[S]);var X=m(null);M=d("CometFocusGroupFirstLetterNavigation").useFirstLetterNavigationTag(X);P=l(function(){return c("mergeRefs")(b,T)},[b]);var Y=p!=null?typeof p==="number"?h.jsxs(h.Fragment,{children:[K,h.jsx(c("CometNonBreakingSpace.react"),{size:.5}),h.jsx(c("TetraText.react"),{color:t?"disabled":J,type:"body4",children:p})]}):h.jsx(c("CometTextWithIcon.react"),{iconAfter:p,children:K}):K;return h.jsx(c("CometMenuFocusGroup").FocusItem,{disabled:t,tag:M,children:h.jsx(c("CometPressable.react"),babelHelpers["extends"]({},R,{disabled:t,display:"inline",id:w,linkProps:H,onFocusIn:z,onFocusOut:A,onHoverIn:B,onHoverOut:C,onPress:a,onPressIn:D,overlayDisabled:!0,ref:P,role:I,suppressFocusRing:!0,testid:void 0,xstyle:[n.listItem,e&&n.listItemAlignedCenter,v!=null&&n.listItemWithIcon,t&&n.disabled,!o&&S&&c("BaseFocusRing.react").focusRingXStyle],children:function(a){var b=a.focused,d=a.focusVisible,e=a.hovered;a=a.pressed;return h.jsxs(c("CometMenuItemHighlightContext").Provider,{value:b&&d||e,children:[v,h.jsxs("div",{className:c("stylex")(n.content,((b=x)!=null?b:!1)&&n.extraHorizontalPadding),children:[h.jsx(c("TetraTextPairing.react"),{body:r,bodyColor:t?"disabled":q,headline:Y,headlineColor:t?"disabled":J,headlineRef:X,level:4,meta:O,metaColor:t?"disabled":N,reduceEmphasis:!0}),g!=null&&h.jsx("div",{className:"x16n37ib",children:g})]}),h.jsx(c("CometPressableOverlay.react"),{focusVisible:d||S,hovered:e,pressed:a,radius:F,showFocusRing:!0})]})}}))})}a.displayName=a.name+" [from "+f.id+"]";e=h.forwardRef(a);g["default"]=e}),98);
__d("CometMenuItemIcon.react",["CometEmoji.react","CometIcon.react","CometImage.react","IconSource","ImageIconSource","SVGIcon","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useMemo,j={circle:{borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",$$css:!0},contained:{backgroundColor:"x1qhmfi1",borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",height:"xvnh2x",minWidth:"x1g0q3yh",$$css:!0},iconRelativeContainer:{position:"x1n2onr6",$$css:!0},inset:{boxShadow:"xlg9a9y",position:"x10l6tqk",start:"x17qophe",top:"x13vifvy",$$css:!0},root:{alignItems:"x6s0dn4",alignSelf:"xoi2r2e",display:"x78zum5",justifyContent:"xl56j7k",marginEnd:"xq8finb",$$css:!0},roundedRect:{borderTopStartRadius:"x1lq5wgf",borderTopEndRadius:"xgqcy7u",borderBottomEndRadius:"x30kzoy",borderBottomStartRadius:"x9jhf4c",$$css:!0}};function a(a){var b=a.disabled,e=a.emojiSize,f=e===void 0?20:e,g=a.icon,k=a.iconColor;e=a.iconCssSelectorId;var l=a.iconSize,m=l===void 0?20:l;l=a.use;var n=l===void 0?"normal":l;a=i(function(){if(g instanceof c("IconSource")){var a;return h.jsx(c("CometIcon.react"),{color:(a=k)!=null?a:"primary",disabled:b,icon:g})}if(g instanceof c("ImageIconSource"))return h.jsx(c("CometIcon.react"),{disabled:b,icon:g});if(g instanceof d("SVGIcon").SVGIcon){return h.jsx(c("CometIcon.react"),{color:(a=k)!=null?a:"primary",disabled:b,icon:g,size:m})}if(g instanceof d("SVGIcon").LegacySVGIcon){return h.jsx(c("CometIcon.react"),{color:(a=k)!=null?a:"primary",disabled:b,icon:g,size:m})}if(g instanceof d("SVGIcon").EmojiIcon)return h.jsx(c("CometEmoji.react"),{emoji:g.codepoints,size:f});if(typeof g==="object"&&typeof g!=="function"&&!g._isSVG&&g.src!==null){a=n==="contained"?36:20;return h.jsxs("div",{className:"x1n2onr6",children:[h.jsx(c("CometImage.react"),{height:a,src:g.src,width:a,xstyle:[g.style==="circle"&&j.circle,g.style==="roundedRect"&&j.roundedRect]}),g.style!=="square"?h.jsx("div",{className:c("stylex")(g.style==="circle"&&j.circle,j.inset,g.style==="roundedRect"&&j.roundedRect),style:{height:a,width:a}}):null]})}return h.jsx(c("CometIcon.react"),{color:(a=k)!=null?a:"secondary",disabled:b,icon:g})},[b,f,g,k,m,n]);return h.jsx("div",{className:c("stylex")([j.root,(n==="contained"||n==="contained_small_icon")&&j.contained]),id:e,children:a})}a.displayName=a.name+" [from "+f.id+"]";b=h.memo(a);g["default"]=b}),98);
__d("CometMenuItem.react",["CometBadge.react","CometIcon.react","CometMenuItemBase.react","CometMenuItemIcon.react","CometProfilePhoto.react","TetraTextPairing.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a,b){var d=a.auxItem,e=a.emojiSize,f=a.icon,g=a.iconColor,i=a.iconCssSelectorId,j=a.iconSize,k=a.iconStyle;k=k===void 0?"normal":k;var l=a.image,m=a.overlayRadius;m=m===void 0?4:m;a=babelHelpers.objectWithoutPropertiesLoose(a,["auxItem","emojiSize","icon","iconColor","iconCssSelectorId","iconSize","iconStyle","image","overlayRadius"]);var n=null;if(d!=null)switch(d.type){case"text":n=h.jsx(c("TetraTextPairing.react"),{level:3,meta:d.auxText});break;case"badge":n=h.jsx(c("CometBadge.react"),{color:d.color});break;case"icon":n=h.jsx(c("CometIcon.react"),{color:d.color,icon:d.icon});break;case"numberedBadge":n=d.badge;break}return h.jsx(c("CometMenuItemBase.react"),babelHelpers["extends"]({},a,{alignCenter:!0,aux:n,iconNode:f!=null?h.jsx(c("CometMenuItemIcon.react"),{disabled:a.disabled,emojiSize:e,icon:f,iconColor:g,iconCssSelectorId:i,iconSize:j,use:k}):l!=null?h.jsx(c("CometProfilePhoto.react"),{addOn:l.addOn,shape:l.shape,size:l.size,source:l.source}):null,isIconAnImage:f==null&&l!=null,overlayRadius:m,ref:b}))}a.displayName=a.name+" [from "+f.id+"]";b=h.forwardRef(a);g["default"]=b}),98);
__d("CometMenuItemSelectable_DEPRECATED.react",["ix","CometIcon.react","CometMenuItemBase.react","CometMenuItemIcon.react","fbicon","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function j(a){return!a?null:i.jsx(c("CometIcon.react"),{color:"highlight",icon:d("fbicon")._(h("477820"),20)})}j.displayName=j.name+" [from "+f.id+"]";function a(a,b){a.aux;var d=a.disabled,e=a.icon,f=a.iconColor,g=a.iconStyle,h=a.isSelected,k=babelHelpers.objectWithoutPropertiesLoose(a,["aux","disabled","icon","iconColor","iconStyle","isSelected"]);if(e)return i.jsx(c("CometMenuItemBase.react"),babelHelpers["extends"]({},k,{"aria-checked":h,aux:a.aux!=null?a.aux(h,d):j(h),disabled:d,iconNode:i.jsx(c("CometMenuItemIcon.react"),{icon:e,iconColor:f,use:g}),ref:b}));else{e=a.aux!=null?a.aux(h,d):j(h);return i.jsx(c("CometMenuItemBase.react"),babelHelpers["extends"]({},k,{"aria-checked":h,aux:e?i.jsx("div",{className:"xz62fqu x16ldp7u",children:e}):void 0,disabled:d,ref:b}))}}a.displayName=a.name+" [from "+f.id+"]";b=i.forwardRef(a);g["default"]=b}),98);
__d("CometTabMenu.react",["CometMenu.react","CometMenuItemSelectable_DEPRECATED.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.menuItems,d=a.menuSize;a=a.truncate;return h.jsx(c("CometMenu.react"),{size:d,truncate:a,children:b.map(function(a,b){var d=a["aria-label"],e=a.badge,f=a.disabled,g=a.icon,i=a.label,j=a.linkProps,k=a.onHoverIn,l=a.onHoverOut,m=a.onPress,n=a.onPressIn,o=a.selected;a=a.tabRef;return h.jsx(c("CometMenuItemSelectable_DEPRECATED.react"),{"aria-label":d,badge:e,disabled:f,href:(d=j==null?void 0:j.url)!=null?d:void 0,icon:g,isSelected:(e=o)!=null?e:!1,onClick:m,onHoverIn:k,onHoverOut:l,onPressIn:n,primaryText:i,ref:a,role:"menuitemradio",routeTarget:j==null?void 0:j.routeTarget,target:j==null?void 0:j.target,testid:void 0},b)})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);