;/*FB_PKG_DELIM*/

__d("CometLayout.react",["react","stylex","testID"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={container:{display:"x78zum5",flexDirection:"xdt5ytf",minHeight:"x1t2pt76",$$css:!0},contentArea:{display:"x78zum5",flexDirection:"xdt5ytf",flexGrow:"x1iyjqo2",minHeight:"x1t2pt76",minWidth:"xeuugli",$$css:!0}};function a(a){var b=a.children,d=a.containerXStyle,e=a.contentXStyle;a=a.testid;return h.jsx("div",babelHelpers["extends"]({className:c("stylex")(i.container,d)},c("testID")(a),{children:h.jsx("div",{className:c("stylex")(i.contentArea,e),children:b})}))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometHeaderContentArea.react",["CometEntityHeaderScrollToContext","CometGlobalPanelExpandedContext","CometGlobalPanelExpandedState","CometRouteRenderType","CometRouterFocusRegion.react","CometSection.react","cr:683059","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react"),j=i.useCallback,k=i.useContext,l=i.useMemo,m=i.useRef,n={content:{display:"x78zum5",flexDirection:"xdt5ytf",flexGrow:"x1iyjqo2",$$css:!0},content_DEPRECATED:{alignItems:"x6s0dn4",display:"x78zum5",flexDirection:"xdt5ytf",maxWidth:"x193iq5w",$$css:!0},contentArea:{display:"x78zum5",flexDirection:"xdt5ytf",minHeight:"x1t2pt76",position:"x1n2onr6",$$css:!0}};function e(e){var f=e.children,g=e.header,i=e.scrollKey;e=e.useDeprecatedStyles;e=e===void 0?!1:e;var o=d("CometRouteRenderType").useIsPushView(),p=k(c("CometGlobalPanelExpandedContext")),q=m(null),r=m(null),s=j(function(c,e){if(p!==d("CometGlobalPanelExpandedState").ExpandedState.Collapsed)return;var f=r.current;r.current=i;if(i!=null&&i===f)return;if(q.current==null)return;if(q.current.offsetWidth<940)return;if(c.current!=null&&((f=q.current)==null?void 0:f.contains(c.current))){f=o?-60:0;c=c.current;while(c!=null&&q.current.contains(c))f+=c.offsetTop,c=c.offsetParent;f+=(c=e)!=null?c:0;try{a.scrollTo({behavior:"auto",left:a.pageXOffset,top:f})}catch(b){a.scrollTo(a.pageXOffset,f)}b("cr:683059")&&b("cr:683059").setInitialScrollY(f)}},[o,p,i]),t=l(function(){return{scrollToTop:s}},[s]);return h.jsxs(c("CometSection.react"),{className:"x78zum5 xdt5ytf x1t2pt76 x1n2onr6",ref:q,role:"main",testid:void 0,children:[h.jsx(c("CometEntityHeaderScrollToContext").Provider,{value:t,children:g}),h.jsx("div",{className:c("stylex")(e?n.content_DEPRECATED:n.content),"data-testid":void 0,children:h.jsx(c("CometRouterFocusRegion.react"),{children:f})})]})}e.displayName=e.name+" [from "+f.id+"]";g["default"]=e}),98);
__d("CometStickyHeaderContentArea.react",["BaseStickyHeader.react","BaseViewportMarginsAddonContextProvider.react","CometAppNavigationConstants","CometAppNavigationTabBarContainer.react","CometHeaderContentArea.react","CometRouteRenderType","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={tabBar:{zIndex:"xhtitgo",$$css:!0}};function a(a){var b=a.headerHeight;b=b===void 0?60:b;var e=a.showTabContainerOnPushView;e=e===void 0?!1:e;a=babelHelpers.objectWithoutPropertiesLoose(a,["headerHeight","showTabContainerOnPushView"]);var f=d("CometRouteRenderType").useIsPushView();b=h.jsx(c("CometHeaderContentArea.react"),babelHelpers["extends"]({},a,{children:h.jsx(c("BaseViewportMarginsAddonContextProvider.react"),{addon:b,children:a.children})}));return e&&f?h.jsxs(h.Fragment,{children:[h.jsx(c("BaseStickyHeader.react"),{xstyle:i.tabBar,children:h.jsx(c("CometAppNavigationTabBarContainer.react"),{})}),h.jsx(c("BaseViewportMarginsAddonContextProvider.react"),{addon:d("CometAppNavigationConstants").HEADER_HEIGHT,children:b})]}):b}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("BaseFixedGrid.react",["Locale","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.children,c=a.columns,e=a.gap;a=h.Children.toArray(b).filter(Boolean);b=h.Children.count(a);if(b===0)return null;var f=d("Locale").isRTL()?"marginRight":"marginLeft";return h.jsx("div",{className:"x78zum5 x1q0g3np x1a02dak xh8yej3",children:h.Children.map(a,function(a,b){var d,g=b%c;b=b<c;g=g===0;g=(d={},d[f]=g?0:e,d.marginTop=b?0:e,d.width="calc( (100% - "+(c-1)*e+"px) / "+c+")",d);return h.jsx("div",{style:g,children:a})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometFixedGrid.react",["BaseFixedGrid.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){return h.jsx(c("BaseFixedGrid.react"),babelHelpers["extends"]({},a))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometDirectionalDockingView.react",["cr:1619204"],(function(a,b,c,d,e,f,g){"use strict";g["default"]=b("cr:1619204")}),98);
__d("CometDirectionalDockingView.sticky.react",["$InternalEnum","BaseScrollableAreaContext","BaseViewportMarginsContext","ReactDOMComet","react","stylex","useMergeRefs","useResizeObserver"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");e=d("react");var i=e.useCallback,j=e.useContext,k=e.useEffect,l=e.useRef,m=e.useState,n={main:{position:"x7wzq59",$$css:!0}},o=b("$InternalEnum")({Down:0,Up:1}),p=Object.freeze({});function a(a){var b=a.bottomStickyAdjustment_DO_NOT_USE,e=b===void 0?0:b;b=a.top;b=b===void 0?16:b;var f=a.bottom;f=f===void 0?b:f;var g=a.children,q=a.tagName;q=q===void 0?"div":q;a=a.xstyle;var r=j(c("BaseScrollableAreaContext")),s=j(c("BaseViewportMarginsContext")),t=b+s.top,u=f+s.bottom;b=m(0);f=b[0];var v=b[1];s=m(p);b=s[0];var w=s[1],x=i(function(){return r.length>0?r[r.length-1].getDOMNode():window},[r]),y=i(function(){var a=x();if(a==null)return null;if(window.HTMLElement!=null){return a instanceof HTMLElement?a.getBoundingClientRect().height:(a=a.innerHeight)!=null?a:null}return null},[x]),z=l(null),A=l(y());s=i(function(a){a=a.height;z.current=a},[]);s=c("useResizeObserver")(s);var B=l(0),C=l(null),D=l(null),E=l(null);s=c("useMergeRefs")(s,D);var F=i(function(a){a=a.top;var b=B.current,c=C.current;b=a>b?o.Down:o.Up;var f=D.current,g=E.current;if(f==null||g==null)return;B.current=a;C.current=b;if(b===c)return;c=(a=A.current)!=null?a:y();if(c==null)return;a=f.getBoundingClientRect();f=g.getBoundingClientRect();g=a.height;var h=a.top-f.top,i;if(g<c-t-u)h=0,i={top:t};else switch(b){case o.Down:a=Math.round(Math.min(t,c-u-g));i={top:a};break;case o.Up:f=Math.round(Math.min(u,c-t-g));i={bottom:f+e}}d("ReactDOMComet").flushSync(function(){w(function(a){if(i.top!=null&&a.top!=null&&i.top===a.top)return a;return i.bottom!=null&&a.bottom!=null&&i.bottom===a.bottom?a:(a=i)!=null?a:p}),v(h)})},[u,t,y]),G=i(function(){var a=x();return a==null?{left:0,top:0}:a instanceof HTMLElement?{left:a.scrollLeft,top:a.scrollTop}:{left:a.scrollY,top:a.scrollY}},[x]);k(function(){var a=x();if(a!=null){var b=function(){F(G())};a.addEventListener("scroll",b);return function(){a.removeEventListener("scroll",b)}}},[x,G,F]);k(function(){var a=function(){A.current=y();var a=C.current;C.current=null;var b=G();F({left:b.left,top:b.top+(a===o.Up?-1:1)})};window.addEventListener("resize",a);return function(){window.removeEventListener("resize",a)}},[G,F,y]);return h.jsxs(h.Fragment,{children:[h.jsx("div",{ref:E,style:{height:f}}),h.jsx(q,{className:c("stylex")(a,n.main),ref:s,style:b,children:g})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PagesCometAdminLeftNavGlimmer.react",["fbt","CometLeftRailComponent.react","CometLeftRailHeader.react","CometLeftRailListItemSeparator.react","CometListCellGlimmer.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(){return i.jsx(c("CometLeftRailComponent.react"),{header:i.jsx(c("CometLeftRailHeader.react"),{title:h._("__JHASH__57PAnxu96WS__JHASH__")}),primaryNav:i.jsxs(i.Fragment,{children:[i.jsx(c("CometListCellGlimmer.react"),{imageSize:48,imageStyle:"circle",numberOfItems:1}),i.jsx(c("CometLeftRailListItemSeparator.react"),{marginHorizontal:16,marginVertical:8}),i.jsx(c("CometListCellGlimmer.react"),{imageSize:36,imageStyle:"circle",numberOfItems:3})]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometTimelineTwoColumnLayout.react",["CometResponsiveColumns.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={overflowAnchor:{overflowAnchor:"x1xzczws",$$css:!0},timelineContainer:{marginTop:"xw7yly9",$$css:!0}};function a(a){var b=a.aboveContent,c=a.auxColumn,e=a.contentColumn;a=a.reversed;a=a===void 0?!1:a;c=h.jsx(d("CometResponsiveColumns.react").Column,{columnType:"SECONDARY",xstyle:i.overflowAnchor,children:c});e=h.jsx(d("CometResponsiveColumns.react").Column,{columnType:"FEED",children:e});return h.jsxs(h.Fragment,{children:[h.jsx(d("CometResponsiveColumns.react").Container,{containerWidth:"DEFAULT",children:h.jsx(d("CometResponsiveColumns.react").Column,{columnType:"FULL",children:b})}),h.jsxs(d("CometResponsiveColumns.react").Container,{containerWidth:"DEFAULT",xstyle:i.timelineContainer,children:[a?e:c,a?c:e]})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometEntityConvergenceHeaderGlimmer.react",["CometAspectRatioContainer.react","CometEntityHeaderBottomRow.react","CometEntityHeaderCoverPhotoRow.react","CometEntityPageHeader.react","CometFeedWidthStyles","CometGlimmer.react","ProfileCometEntityConvergenceHeaderTopRow.react","ProfileCometProfilePictureGlimmer.react","ProfileCometTabsGlimmer.react","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={coverPhoto:{borderBottomEndRadius:"xtf3nb5",borderBottomStartRadius:"x1pc53ja",marginTop:"xdj266r",marginEnd:"xkrivgy",marginBottom:"xat24cr",marginStart:"x1gryazu",overflowX:"x6ikm8r",overflowY:"x10wlt62",width:"xh8yej3",$$css:!0},coverPhotoGlimmer:{height:"x5yr21d",width:"xh8yej3",$$css:!0},name:{borderTopStartRadius:"x1lq5wgf",borderTopEndRadius:"xgqcy7u",borderBottomEndRadius:"x30kzoy",borderBottomStartRadius:"x9jhf4c",height:"xxk0z11",marginBottom:"x1yztbdb",width:"xfp4ol3",$$css:!0}},j=d("CometFeedWidthStyles").getEntityHeaderWidthStyles();function a(){var a=h.jsx(c("CometGlimmer.react"),{index:3,xstyle:i.name});a=h.jsx(c("ProfileCometEntityConvergenceHeaderTopRow.react"),{actor:h.jsx(c("ProfileCometProfilePictureGlimmer.react"),{size:168}),actorPicSize:"large",titleBlock:a});var b=h.jsx(c("CometEntityHeaderBottomRow.react"),{buttonGroup:null,tabs:h.jsx(c("ProfileCometTabsGlimmer.react"),{})});return h.jsx(c("CometEntityPageHeader.react"),{bottomRow:b,coverPhotoRow:h.jsx(c("CometEntityHeaderCoverPhotoRow.react"),{coverPhoto:h.jsx("div",{className:c("stylex")(i.coverPhoto,j.coverMediaContainer),children:h.jsx(c("CometAspectRatioContainer.react"),{aspectRatio:940/348,children:h.jsx(c("CometGlimmer.react"),{index:1,xstyle:i.coverPhotoGlimmer})})})}),testid:void 0,topRow:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometTileSectionGlimmer.react",["BaseLoadingStateElement.react","CometAspectRatioContainer.react","CometCard.react","CometFixedGrid.react","CometGlimmer.react","getRoundedCorners","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={borderBottomEndRadius:{borderBottomEndRadius:"x30kzoy",$$css:!0},borderBottomStartRadius:{borderBottomStartRadius:"x9jhf4c",$$css:!0},borderTopEndRadius:{borderTopEndRadius:"xgqcy7u",$$css:!0},borderTopStartRadius:{borderTopStartRadius:"x1lq5wgf",$$css:!0},content:{paddingTop:"xyamay9",paddingEnd:"x1pi30zi",paddingBottom:"x1l90r2v",paddingStart:"x1swvt13",$$css:!0},grid:{paddingEnd:"x19um543",paddingStart:"x1m6msm",$$css:!0},item:{height:"x5yr21d",$$css:!0},root:{marginBottom:"x1yztbdb",$$css:!0},title:{borderTopStartRadius:"xyi19xy",borderTopEndRadius:"x1ccrb07",borderBottomEndRadius:"xtf3nb5",borderBottomStartRadius:"x1pc53ja",height:"xmix8c7",marginBottom:"x1yztbdb",width:"x2pejg6",$$css:!0}},j=9,k=3;function a(a,b){var d=c("getRoundedCorners")(j,k);return h.jsx(c("BaseLoadingStateElement.react"),{ref:b,children:h.jsx("div",{className:"x1yztbdb","data-testid":void 0,children:h.jsx(c("CometCard.react"),{background:"white",dropShadow:1,children:h.jsxs("div",{className:"xyamay9 x1pi30zi x1l90r2v x1swvt13",children:[h.jsx(c("CometGlimmer.react"),{index:0,xstyle:i.title}),h.jsx("div",{className:"x19um543 x1m6msm",children:h.jsx(c("CometFixedGrid.react"),{columns:3,gap:4,children:Array.from(new Array(j),function(a,b){return h.jsx(c("CometAspectRatioContainer.react"),{aspectRatio:1,children:h.jsx(c("CometGlimmer.react"),{index:b%k,xstyle:[i.item,c("getRoundedCorners").hasCorner((a=d[b])!=null?a:0,c("getRoundedCorners").CORNERS.TOP_START)&&i.borderTopStartRadius,c("getRoundedCorners").hasCorner((a=d[b])!=null?a:0,c("getRoundedCorners").CORNERS.TOP_END)&&i.borderTopEndRadius,c("getRoundedCorners").hasCorner((a=d[b])!=null?a:0,c("getRoundedCorners").CORNERS.BOTTOM_START)&&i.borderBottomStartRadius,c("getRoundedCorners").hasCorner((a=d[b])!=null?a:0,c("getRoundedCorners").CORNERS.BOTTOM_END)&&i.borderBottomEndRadius]},b)},b)})})})]})})})})}a.displayName=a.name+" [from "+f.id+"]";b=h.forwardRef(a);g["default"]=b}),98);