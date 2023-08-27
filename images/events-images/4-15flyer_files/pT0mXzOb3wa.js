;/*FB_PKG_DELIM*/

__d("CometLayoutSidePaneAndMainContentResponsiveContainer.react",["BaseContainerQueryElement.react","BaseHeadingContext","BaseStickyHeader.react","BaseView.react","CometLeftRailLayoutContext","CometLeftRailPrimaryContext","CometRouterFocusRegion.react","react","stylex","useMatchViewport"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useContext,j=360,k={containerResponsive:{display:"x78zum5",flexDirection:"x1q0g3np",flexGrow:"x1iyjqo2",minHeight:"x1t2pt76",position:"x1n2onr6","@media (max-width: 899px)_flexDirection":"xvrxa7q","@media (max-width: 899px)_zIndex":"x1nhjfyr",$$css:!0},contentArea:{display:"x78zum5",flexDirection:"xdt5ytf",flexGrow:"x1iyjqo2",minHeight:"x1t2pt76",minWidth:"xeuugli",position:"x1n2onr6",zIndex:"x1ja2u2z",$$css:!0},contentAreaWithLeftRailPrimary:{"@media (max-width: 899px)_display":"x1daaz14",$$css:!0},leftRailResponsive:{display:"x78zum5",flexShrink:"x2lah0s",minHeight:"x1t2pt76",overflowAnchor:"x1xzczws",width:"x1cvmir6",zIndex:"x1vjfegm",$$css:!0},mainContent:{display:"x78zum5",flexGrow:"x1iyjqo2",minHeight:"x1t2pt76","@media (min-width: 900px)_width":"x1lspesw",$$css:!0},responsiveHeader:{display:"x1lliihq",zIndex:"x1vjfegm",$$css:!0}};function a(a){var b=a.hideLeftRail;b=b===void 0?!1:b;var d=a.leftRailContent,e=a.leftRailHeading,f=a.leftRailPrimary;f=f===void 0?!1:f;var g=a.mainContent,l=a.mainContentHeading,m=a.responsiveContainerStyles;a=a.testid;a=i(c("BaseHeadingContext"));a=h.jsx("div",{className:c("stylex")(k.contentArea,f===!0&&k.contentAreaWithLeftRailPrimary),children:h.jsx(c("CometRouterFocusRegion.react"),{children:h.jsx(c("CometLeftRailLayoutContext").Provider,{value:!0,children:h.jsx(c("BaseHeadingContext").Provider,{value:a+1,children:g})})})});g=h.jsx(c("BaseContainerQueryElement.react"),{"aria-label":e,breakpoint:900,"data-testid":void 0,inverseToContainer:!0,maxWidth:j,minWidth:j,role:"navigation",xstyle:k.leftRailResponsive,children:d});var n=c("useMatchViewport")("max","width",899);l=h.jsx(c("BaseContainerQueryElement.react"),{"aria-label":l,breakpoint:900,inverseToContainer:!0,maxWidth:"100%",minWidth:"calc(100% - "+j+"px)",role:"main",xstyle:k.mainContent,children:a});return h.jsx(c("BaseView.react"),{testid:void 0,xstyle:[k.containerResponsive,m],children:h.jsxs(c("CometLeftRailPrimaryContext").Provider,{value:f,children:[n?h.jsx(c("BaseStickyHeader.react"),{xstyle:k.responsiveHeader,children:h.jsx(c("BaseContainerQueryElement.react"),{"aria-label":e,breakpoint:900,"data-testid":void 0,inverseToContainer:!0,maxWidth:"100%",minWidth:j,role:"navigation",children:d})}):!b&&g,l]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometLayoutSidePaneResponsive.react",["CometGlimmer.react","CometLeftRailComponent.react","CometPivotLinkTabs.react","CometResponsiveTopNav.react","react","useMatchViewport"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={glimmerContainer:{paddingEnd:"x1pi30zi",paddingStart:"x1swvt13",$$css:!0},left:{display:"x78zum5",minWidth:"x7ja8zs",$$css:!0},top:{backgroundColor:"x1ve1bff",borderBottom:"xua58t2",display:"x78zum5",paddingTop:"x889kno",paddingBottom:"x1a8lsjc",zIndex:"x1vjfegm",$$css:!0},ufiGlimmer:{borderTopStartRadius:"x8u2fvd",borderTopEndRadius:"x1ht7hnu",borderBottomEndRadius:"x1quq95r",borderBottomStartRadius:"x5yzy4c",height:"x170jfvy",marginTop:"xw7yly9",marginEnd:"xktsk01",marginBottom:"x1yztbdb",marginStart:"x1d52u69",width:"xygnafs",$$css:!0}};function a(a){var b=a.footer,d=a.header,e=a.primaryNav,f=a.search,g=a.secondaryNav,j=a.stickyNav,k=a.topNav;a=a.topTabs;var l=c("useMatchViewport")("max","width",899);if(l){l=(f==null?void 0:f.topSearch)!=null||a!=null?h.jsx(c("CometResponsiveTopNav.react"),{action:f!=null?f.topSearch:void 0,tabs:a!=null?h.jsx(c("CometPivotLinkTabs.react"),{tabs:a}):void 0,xstyle:i.top}):null;return(a=k)!=null?a:l}return h.jsx(c("CometLeftRailComponent.react"),{footer:b,header:d,primaryNav:e,search:f!=null?f.leftSearch:null,secondaryNav:g,stickyNav:j,xstyle:i.left})}a.displayName=a.name+" [from "+f.id+"]";function b(a){var b=a.header;a=a.primaryNavPlaceholder;return h.jsxs(h.Fragment,{children:[h.jsx(c("CometLeftRailComponent.react"),{header:b,primaryNav:a,xstyle:i.left}),h.jsxs("div",{className:["x1ve1bff xua58t2 x78zum5 x889kno x1a8lsjc x1vjfegm","x1pi30zi x1swvt13"],children:[h.jsx(c("CometGlimmer.react"),{index:1,xstyle:i.ufiGlimmer}),h.jsx(c("CometGlimmer.react"),{index:2,xstyle:i.ufiGlimmer}),h.jsx(c("CometGlimmer.react"),{index:3,xstyle:i.ufiGlimmer})]})]})}b.displayName=b.name+" [from "+f.id+"]";g.CometLayoutSidePaneResponsive=a;g.CometLayoutSidePaneResponsiveLoading=b}),98);
__d("useIsCreationPreview",["CometCreationContext","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useContext;function a(){var a=h(c("CometCreationContext"));return a.isDraft}g["default"]=a}),98);
__d("CometCreationPreviewPlaceholder.react",["react","useIsCreationPreview"],(function(a,b,c,d,e,f,g){"use strict";d("react");function a(a){var b=a.children,d=a.placeholder,e=a.shouldShowPlaceholder;e=e===void 0?!1:e;var f=c("useIsCreationPreview")();a=Object.prototype.hasOwnProperty.call(a,"stringValueToCheck")&&(a.stringValueToCheck==null||a.stringValueToCheck==="");return f&&(a||e)?d:b}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometEntityHeaderTitleRow.react",["react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={actorWrapper:{alignItems:"xuk3077",display:"x78zum5",height:"xqtp20y",marginBottom:"xh3wvx0",marginEnd:"xktsk01",$$css:!0},actorWrapperFullHeight:{height:"x5yr21d",$$css:!0},root:{alignItems:"xuk3077",display:"x78zum5",$$css:!0},title:{marginTop:"xw7yly9",$$css:!0}};function a(a){var b=a.actorBlock,d=a.hasExtraSpace;d=d===void 0?!1:d;a=a.titleBlock;return b!=null?h.jsxs("div",{className:"xuk3077 x78zum5",children:[h.jsx("div",{className:c("stylex")(i.actorWrapper,d&&i.actorWrapperFullHeight),children:h.jsx("div",{children:b})}),h.jsx("div",{className:"xw7yly9",children:a})]}):h.jsx("div",{className:"xw7yly9",children:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometEntityHeaderTopRow.react",["CometEntityHeaderTitleRow.react","CometRow.react","CometRowItem.react","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={auxiliaryColumn:{justifyContent:"x13a6bvl",$$css:!0},column:{flexBasis:"x1r8uery",flexGrow:"x1dh0t33",minWidth:"x17upfok",$$css:!0},columnBottomSpacing:{paddingBottom:"x1l90r2v",$$css:!0},columnNoExpanding:{flexBasis:"xdl72j9",flexGrow:"x1iyjqo2",$$css:!0},root:{width:"xh8yej3",$$css:!0},rootWithExtraSpace:{marginTop:"xw7yly9",$$css:!0}};function a(a){var b=a.actionsPosition;b=b===void 0?"bottom":b;var d=a.actor,e=a.auxiliary,f=a.columnExpanding;f=f===void 0?!0:f;var g=a.hasExtraSpace;g=g===void 0?!1:g;var j=a.skipBottomSpacing;j=j===void 0?!1:j;a=a.titleBlock;return h.jsx("div",{className:c("stylex")(i.root,g&&i.rootWithExtraSpace),children:h.jsxs(c("CometRow.react"),{paddingHorizontal:0,verticalAlign:b,wrap:"forward",children:[h.jsx(c("CometRowItem.react"),{expanding:!0,xstyle:[i.column,!j&&i.columnBottomSpacing],children:h.jsx(c("CometEntityHeaderTitleRow.react"),{actorBlock:d,titleBlock:a})}),h.jsx(c("CometRowItem.react"),{expanding:f,xstyle:[i.column,!f&&i.columnNoExpanding,!j&&i.columnBottomSpacing,i.auxiliaryColumn],children:e})]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometMoreMenuEntryPointButton.react",["fbt","ix","CometEntryPointPopoverTrigger.react","CometNumberedBadge.react","TetraButton.react","fbicon","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react");function a(a){var b=a.align;b=b===void 0?"middle":b;var e=a.badgeCount,f=e===void 0?0:e;e=a.entryPointParams;var g=a.onMenuPress,k=a.otherProps,l=a.popoverEntryPoint,m=a.preloadTrigger,n=a.testid;n=a.type;var o=n===void 0?"secondary":n;return j.jsx(c("CometEntryPointPopoverTrigger.react"),{align:b,entryPointParams:e,otherProps:k,popoverEntryPoint:l,preloadTrigger:m,children:function(a,b,e,k,l,m){return j.jsxs("div",{className:"x1n2onr6",children:[f>0&&j.jsx("div",{className:"xds687c x47corl x10l6tqk x13vifvy x147yg2k x1vjfegm",children:j.jsx(c("CometNumberedBadge.react"),{color:"red",value:f})}),j.jsx(c("TetraButton.react"),{icon:d("fbicon")._(i("484386"),16),label:h._("__JHASH__vsPR1PMxOLr__JHASH__"),labelIsHidden:!0,onHoverIn:k,onHoverOut:l,onPress:function(){b(),g&&g.apply(void 0,arguments)},onPressIn:m,ref:a,testid:void 0,type:o})]})}})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("GroupsCometCannotRequestButton.react",["fbt","GroupsCometJoinButtonWithMenu.react","TetraButton.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){var b=a.groupID;a=a.withMenu;var d={disabled:!0,label:h._("__JHASH__G9aZ0LrCHT6__JHASH__"),type:"secondary"};return a?i.jsx(c("GroupsCometJoinButtonWithMenu.react"),{groupID:b,primaryButtonConfig:d}):i.jsx(c("TetraButton.react"),babelHelpers["extends"]({},d))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("GroupsCometInviteLinkConstants",["fbt","ix","CometMenuItemIcon.react","TetraIcon.react","fbicon","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";a=d("react");b=new Map([["NOBODY",h._("__JHASH__lUgy8L7YsCV__JHASH__")],["ADMINS",h._("__JHASH__Wfsja5E4j0v__JHASH__")],["ADMINS_AND_MODERATORS",h._("__JHASH__fd1m_-lJ7ks__JHASH__")],["ANYONE",h._("__JHASH__7_wWVeEP-6w__JHASH__")]]);e={aux:a.jsx(c("TetraIcon.react"),{color:"secondary",icon:d("fbicon")._(i("492536"),20)}),iconNode:a.jsx(c("CometMenuItemIcon.react"),{icon:d("fbicon")._(i("484400"),20)}),menuHeader:h._("__JHASH__knGCRbNTEdU__JHASH__"),primaryText:h._("__JHASH__JiICCMhsdOk__JHASH__"),secondaryText:null};f={aux:null,iconNode:a.jsx(c("CometMenuItemIcon.react"),{icon:d("fbicon")._(i("481767"),20)}),menuHeader:h._("__JHASH__oK4A_DcfI1Y__JHASH__"),primaryText:h._("__JHASH__3k8xxc8ZVG5__JHASH__"),secondaryText:h._("__JHASH__-A_5t9idAdU__JHASH__")};g.PermissionToLabelMap=b;g.InviteViaLinkThreeDotMenuItemProps=e;g.InviteViaLinkInviteButtonMenuItemProps=f}),98);
__d("GroupsCometRecAffordanceTitle.react",["fbt","TetraText.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(){return i.jsx(c("TetraText.react"),{type:"headlineEmphasized3",children:h._("__JHASH__X1K4gnSnp26__JHASH__")})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometSearchEntityScope",["$InternalEnum"],(function(a,b,c,d,e,f){a=b("$InternalEnum")({GROUP:"group",PAGE:"page",USER:"user"});c=a;f["default"]=c}),66);
__d("XCometGroupScopedSearchControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/groups/{idorvanity}/search/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XCometPageScopedSearchControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/page/{idorvanity}/search/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XCometUserScopedSearchControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/profile/{idorvanity}/search/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("useCometEntityScopedSearchRouteUrlBuilder",["XCometGroupScopedSearchControllerRouteBuilder","XCometPageScopedSearchControllerRouteBuilder","XCometUserScopedSearchControllerRouteBuilder","react","useSearchCometResultsCommonRouteParamBuilder"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useCallback;function i(a){switch(a){case"group":return c("XCometGroupScopedSearchControllerRouteBuilder");case"page":return c("XCometPageScopedSearchControllerRouteBuilder");case"user":return c("XCometUserScopedSearchControllerRouteBuilder")}}function a(a){var b=a.entityID,d=a.entityType;a=babelHelpers.objectWithoutPropertiesLoose(a,["entityID","entityType"]);var e=c("useSearchCometResultsCommonRouteParamBuilder")(a);return h(function(a){return i(d).buildURL(babelHelpers["extends"]({idorvanity:b},e.build(a)))},[e,b,d])}g["default"]=a}),98);
__d("GroupsKeyCommandShortcutsFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("2955");b=d("FalcoLoggerInternal").create("groups_key_command_shortcuts",a);e=b;g["default"]=e}),98);
__d("CometEntityScopedTypeaheadDialogTrigger.react",["fbt","ix","CometKeys","GroupsKeyCommandShortcutsFalcoEvent","TetraButton.react","fbicon","react","useLayerKeyCommands","useSearchCometResultsTypeaheadDialogTriggerClickHandler"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react"),k=d("react").useMemo;function a(a){var b=a.buttonProps,e=a.dialogEntryPoint,f=a.entityID;a=a.entityType;e=c("useSearchCometResultsTypeaheadDialogTriggerClickHandler")(e,f,a);var g=e[0];a=e[1];var l=e[2],m=e[3];e=e[4];var n=k(function(){return[{command:{command:!0,key:c("CometKeys").SLASH},description:h._("__JHASH__91WBOQfbx5z__JHASH__"),handler:function(){c("GroupsKeyCommandShortcutsFalcoEvent").log(function(){return{event:"open_group_scoped_search",group_id:f}}),g()}}]},[g,f]);c("useLayerKeyCommands")(n);return j.jsx(c("TetraButton.react"),babelHelpers["extends"]({icon:d("fbicon")._(i("491282"),16),label:h._("__JHASH__1auhn96MH3g__JHASH__"),labelIsHidden:!0,onHoverIn:l,onHoverOut:m,onPress:g,onPressIn:e,ref:a,testid:void 0,type:"secondary"},b))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("GroupsCometEntityMenuInSmallScreenPopoverQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6369210123190386"}),null);
__d("GroupsCometRecAffordanceSectionQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6199020480203684"}),null);
__d("GroupsEntityScopedCometTypeaheadDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4958745114174592"}),null);
__d("coerceRouteParams",["coerceRouteParam"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b){return Object.keys(b).reduce(function(d,e){var f=b[e];if(f!=null){var g=c("coerceRouteParam")(a[e],f.coercibleType,f.enumType),h=g.valid;g=g.value;var i=(g=g)!=null?g:f["default"];h&&(d[e]=i);f.legacyNames.forEach(function(a){d[a]=i})}return d},{})}g["default"]=a}),98);