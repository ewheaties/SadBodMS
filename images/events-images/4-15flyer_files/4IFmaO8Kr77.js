;/*FB_PKG_DELIM*/

__d("ProfileCometAboutInfoDetails_subtitle.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometAboutInfoDetails_subtitle",selections:[{args:null,kind:"FragmentSpread",name:"ProfileCometTextWithEntities_textWithEntities"}],type:"TextWithEntities",abstractKey:null};e.exports=a}),null);
__d("ProfileCometAboutInfoDetails_title.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometAboutInfoDetails_title",selections:[{args:null,kind:"FragmentSpread",name:"ProfileCometTextWithEntities_textWithEntities"}],type:"TextWithEntities",abstractKey:null};e.exports=a}),null);
__d("ProfileCometTextWithEntities_textWithEntities.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometTextWithEntities_textWithEntities",selections:[{args:null,kind:"FragmentSpread",name:"CometTextWithEntitiesRelay_textWithEntities"}],type:"TextWithEntities",abstractKey:null};e.exports=a}),null);
__d("ProfileCometBioTextEditorPrivacyIconQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5009284572488938"}),null);
__d("ProfileCometBioTextEditorPrivacyIconQuery$Parameters",["ProfileCometBioTextEditorPrivacyIconQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("ProfileCometBioTextEditorPrivacyIconQuery_facebookRelayOperation"),metadata:{},name:"ProfileCometBioTextEditorPrivacyIconQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometContextuallyStyledAggregatedEntitiesTooltipRenderer_entities.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:{mask:!1},name:"CometContextuallyStyledAggregatedEntitiesTooltipRenderer_entities",selections:[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"sample_entities",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null}],type:"User",abstractKey:null}],storageKey:null}],type:"AggregatedEntitiesAtRange",abstractKey:null};e.exports=a}),null);
__d("CometMetaLinkedEntityRenderer_entity.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:{mask:!1},name:"CometMetaLinkedEntityRenderer_entity",selections:[{alias:null,args:[{kind:"Literal",name:"site",value:"www"}],kind:"ScalarField",name:"url",storageKey:'url(site:"www")'}],type:"Entity",abstractKey:"__isEntity"};e.exports=a}),null);
__d("ProfileCometAppSectionSearchContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext({isSearchEnabled:!1,refetch:null,searchQuery:null,setGlimmerComponent:function(){},setRefetch:function(){},setSearchQuery:function(){}});g["default"]=b}),98);
__d("CometContextuallyStyledAggregatedEntitiesTooltipRenderer",["fbt","CometContextuallyStyledAggregatedEntitiesTooltipRenderer_entities.graphql","CometTooltip.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react");i!==void 0?i:i=b("CometContextuallyStyledAggregatedEntitiesTooltipRenderer_entities.graphql");a=function(a,b){var d;d=(d=b.count)!=null?d:0;b=(b=b.sample_entities)!=null?b:[];d=d-b.length;var e=d>0;return j.jsx(c("CometTooltip.react"),{tooltip:j.jsxs(j.Fragment,{children:[b.map(function(a){if(a.__typename!=="User")return null;var b=a.id;a=a.name;return b!=null&&a!=null?j.jsx("div",{children:a},b):null}),e?j.jsx("div",{children:h._("__JHASH__ba-d3dXGaKh__JHASH__",[h._param("count",d)])}):null]}),children:a})};g["default"]=a}),98);
__d("CometInlineEntityRenderer",["ComposedInlineStyle","TetraText.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");a=function(a,b){switch(b.inline_style){case"BOLD":case c("ComposedInlineStyle").BOLD:return h.jsx("b",{children:a});case"ITALIC":case c("ComposedInlineStyle").ITALIC:return h.jsx("i",{children:a});case"UNDERLINE":case c("ComposedInlineStyle").UNDERLINE:return h.jsx("u",{children:a});case"CODE":case c("ComposedInlineStyle").CODE:return h.jsx("code",{className:"xmjcpbm x1hjwid2 xnzlfwo xwjfhlt x4p5aij x1j85h84 x6mezaz",children:a});case"LIGHTSTRIKETHROUGH":case c("ComposedInlineStyle").LIGHTSTRIKETHROUGH:return h.jsx("s",{className:"x1ks1olk",children:a});case"STRIKETHROUGH":case c("ComposedInlineStyle").STRIKETHROUGH:return h.jsx("s",{children:a});case"SUBSCRIPT":case c("ComposedInlineStyle").SUBSCRIPT:return h.jsx("sub",{children:a});case"SUPERSCRIPT":case c("ComposedInlineStyle").SUPERSCRIPT:return h.jsx("sup",{children:a});case"QUOTE":case c("ComposedInlineStyle").QUOTE:return h.jsx("blockquote",{children:a});case"UNORDEREDLIST":case c("ComposedInlineStyle").UNORDEREDLIST:return h.jsx("ul",{className:"xtaz4m5 x1d52u69",children:a});case"ORDEREDLIST":case c("ComposedInlineStyle").ORDEREDLIST:return h.jsx("ol",{className:"x3yw8vx x1d52u69",children:a});case"LISTITEM":case c("ComposedInlineStyle").LISTITEM:return h.jsx("li",{children:a});case"HEADLINE1":case c("ComposedInlineStyle").HEADLINE1:return h.jsx(c("TetraText.react"),{isSemanticHeading:!0,type:"headlineEmphasized1",children:a});case"HEADLINE2":case c("ComposedInlineStyle").HEADLINE2:return h.jsx(c("TetraText.react"),{isSemanticHeading:!0,type:"headlineEmphasized2",children:a});case"HEADLINE3":case c("ComposedInlineStyle").HEADLINE3:return h.jsx(c("TetraText.react"),{isSemanticHeading:!0,type:"headlineEmphasized3",children:a});case"HORIZONTALRULER":case c("ComposedInlineStyle").HORIZONTALRULER:return h.jsx("hr",{});case"LINEBREAK":case c("ComposedInlineStyle").LINEBREAK:return h.jsx("br",{});case"SPOILER":case c("ComposedInlineStyle").SPOILER:return a;default:return a}};g["default"]=a}),98);
__d("CometMetaLinkedEntityRenderer",["CometLink.react","CometMetaLinkedEntityRenderer_entity.graphql","CometTextContext","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react"),j=d("react").useContext;h!==void 0?h:h=b("CometMetaLinkedEntityRenderer_entity.graphql");function k(a){var b,d=a.entity;a=a.node;b=(b=j(c("CometTextContext")))==null?void 0:b.type;if(d.url==null)return a;return b==null||!b.startsWith("meta")?i.jsx(c("CometLink.react"),{href:d.url,children:a}):i.jsx(c("CometLink.react"),{color:"secondary",href:d.url,weight:b==="meta3"||b==="meta4"?"normal":"semibold",children:a})}k.displayName=k.name+" [from "+f.id+"]";a=function(a,b){return i.jsx(k,{entity:b,node:a})};g["default"]=a}),98);
__d("ProfileCometTextWithEntities.react",["CometAggregatedEntitiesTooltipRenderer","CometContextuallyStyledAggregatedEntitiesTooltipRenderer","CometExternalLinkedEntityRenderer","CometHovercardEntityRenderer","CometImageEntityRenderer","CometInlineEntityRenderer","CometLinkedEntityRenderer","CometMetaLinkedEntityRenderer","CometRelay","CometTextWithEntitiesRelay.react","ProfileCometTextWithEntities_textWithEntities.graphql","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){var e=a.textWithEntities,f=a.useExternalLink;f=f===void 0?!1:f;var g=a.useMetaTextContext;a=babelHelpers.objectWithoutPropertiesLoose(a,["textWithEntities","useExternalLink","useMetaTextContext"]);e=d("CometRelay").useFragment(h!==void 0?h:h=b("ProfileCometTextWithEntities_textWithEntities.graphql"),e);g=g!=null&&g;return i.jsx(c("CometTextWithEntitiesRelay.react"),babelHelpers["extends"]({},a,{renderers:{"*":[g?c("CometMetaLinkedEntityRenderer"):f?c("CometExternalLinkedEntityRenderer"):c("CometLinkedEntityRenderer")],Aggregate:[g?c("CometContextuallyStyledAggregatedEntitiesTooltipRenderer"):c("CometAggregatedEntitiesTooltipRenderer")],Event:[c("CometHovercardEntityRenderer")],Group:[c("CometHovercardEntityRenderer")],Image:[c("CometImageEntityRenderer")()],Inline:[c("CometInlineEntityRenderer")],Page:[c("CometHovercardEntityRenderer")],User:[c("CometHovercardEntityRenderer")],XFBWorkroomsUser:[c("CometHovercardEntityRenderer")]},textWithEntities:e}))}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometAboutInfoDetails.react",["CometRelay","ProfileCometAboutInfoDetails_subtitle.graphql","ProfileCometAboutInfoDetails_title.graphql","ProfileCometTextWithEntities.react","TetraTextPairing.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=d("react");function a(a){var e=a.color,f=a.subtitle,g=a.subtitleColor,k=a.subtitleTruncationProps,l=a.title;a=a.titleAddon;f=d("CometRelay").useFragment(h!==void 0?h:h=b("ProfileCometAboutInfoDetails_subtitle.graphql"),f);l=d("CometRelay").useFragment(i!==void 0?i:i=b("ProfileCometAboutInfoDetails_title.graphql"),l);return j.jsx(c("TetraTextPairing.react"),{body:j.jsxs(j.Fragment,{children:[j.jsx(c("ProfileCometTextWithEntities.react"),{textWithEntities:l}),a]}),bodyColor:e,level:3,meta:f?g?j.jsx(c("TetraTextPairing.react"),{body:j.jsx(c("ProfileCometTextWithEntities.react"),babelHelpers["extends"]({textWithEntities:f},k)),bodyColor:g,level:4}):j.jsx(c("ProfileCometTextWithEntities.react"),babelHelpers["extends"]({textWithEntities:f},k)):null})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometLoadingOverlay.react",["CometProgressIndicator.react","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={partialOpacity:{opacity:"x1us6l5c",$$css:!0},root:{alignItems:"x6s0dn4",backgroundColor:"x2bj2ny",bottom:"x1ey2m1c",boxSizing:"x9f619",display:"x78zum5",end:"xds687c",justifyContent:"xl56j7k",position:"x10l6tqk",start:"x17qophe",top:"x13vifvy",$$css:!0}};function a(a){a=a.solidBackground;return h.jsx("div",{className:c("stylex")(i.root,(a==null||a===!1)&&i.partialOpacity),children:h.jsx(c("CometProgressIndicator.react"),{})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometBioTextEditor.entrypoint",["JSResourceForInteraction","ProfileCometBioTextEditorPrivacyIconQuery$Parameters"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){a=a.profileID;return{queries:{queryReference:{options:{fetchPolicy:"network-only"},parameters:c("ProfileCometBioTextEditorPrivacyIconQuery$Parameters"),variables:{id:a}}}}},root:c("JSResourceForInteraction")("ProfileCometBioTextEditor.react").__setRef("ProfileCometBioTextEditor.entrypoint")};g["default"]=a}),98);
__d("ProfileCometFeaturedHighlightsEditDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5734486029922153"}),null);