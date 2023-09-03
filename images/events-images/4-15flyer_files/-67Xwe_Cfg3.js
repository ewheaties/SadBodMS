;/*FB_PKG_DELIM*/

__d("CometFeedStoryMinimizedTimestampStrategy_timestamp$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"Variable",name:"location",variableName:"renderLocation"}],b=[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"val",storageKey:null}],c={alias:null,args:null,concreteType:"GHLScramblingProperty",kind:"LinkedField",name:"attributes",plural:!0,selections:b,storageKey:null};b={alias:null,args:null,concreteType:"GHLScramblingProperty",kind:"LinkedField",name:"styles",plural:!0,selections:b,storageKey:null};var d={alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null},e={alias:null,args:null,kind:"ScalarField",name:"tag",storageKey:null};return{kind:"SplitOperation",metadata:{},name:"CometFeedStoryMinimizedTimestampStrategy_timestamp$normalization",selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_prod_eligible",storageKey:null}],type:"ICometStorySection",abstractKey:"__isICometStorySection"},{alias:null,args:a,kind:"ScalarField",name:"override_url",storageKey:null},{alias:null,args:a,kind:"ScalarField",name:"video_override_url",storageKey:null},{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"story",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"creation_time",storageKey:null},{alias:null,args:[{kind:"Literal",name:"site",value:"comet"}],kind:"ScalarField",name:"url",storageKey:'url(site:"comet")'},{alias:null,args:null,concreteType:"GHLScramblingNode",kind:"LinkedField",name:"ghl_label",plural:!1,selections:[c,b,d,e,{alias:null,args:null,concreteType:"GHLScramblingNode",kind:"LinkedField",name:"children",plural:!0,selections:[c,b,d,e,{alias:null,args:null,concreteType:"GHLScramblingNode",kind:"LinkedField",name:"children",plural:!0,selections:[c,b,d,e],storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}]}}();e.exports=a}),null);
__d("CometFeedStoryMinimizedTimestampStrategy_timestamp.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"Variable",name:"location",variableName:"renderLocation"}];return{argumentDefinitions:[{kind:"RootArgument",name:"renderLocation"}],kind:"Fragment",metadata:null,name:"CometFeedStoryMinimizedTimestampStrategy_timestamp",selections:[{args:null,kind:"FragmentSpread",name:"useCometFeedStoryMatchDebugger_iCometStorySection"},{alias:null,args:a,kind:"ScalarField",name:"override_url",storageKey:null},{alias:null,args:a,kind:"ScalarField",name:"video_override_url",storageKey:null},{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"story",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"creation_time",storageKey:null},{alias:null,args:[{kind:"Literal",name:"site",value:"comet"}],kind:"ScalarField",name:"url",storageKey:'url(site:"comet")'},{alias:null,args:null,concreteType:"GHLScramblingNode",kind:"LinkedField",name:"ghl_label",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometGHLScrambledLabel_label"}],storageKey:null}],storageKey:null}],type:"CometFeedStoryMinimizedTimestampStrategy",abstractKey:null}}();e.exports=a}),null);
__d("PreviousCIXScreenContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext(function(){});g["default"]=b}),98);
__d("EventCometLiveVideoCardContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext({showClassRecording:!1});g["default"]=b}),98);
__d("CometFeedStoryMinimizedTimestampStrategy.react",["CometFeedStoryMetaSectionMiddot.react","CometFeedStoryMinimizedTimestampStrategy_timestamp.graphql","CometFeedUnitLoggingContext","CometFutureOfFeedStoryContext","CometLoggedOutVideoUnitSEOContext.react","CometRelativeTimestamp.react","CometRelay","CometTimestamp.react","CometTooltip.react","CometTrackingNodeProvider.react","GHLLink.react","GHLLinkMitigations","cr:1008801","react","unrecoverableViolation","useCometFeedStoryMatchDebugger","useServerTime"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");e=d("react");var j=e.useContext,k=e.useMemo,l=e.useState,m=h!==void 0?h:h=b("CometFeedStoryMinimizedTimestampStrategy_timestamp.graphql");e=1e3*60*60*24;var n=e*7;function a(a){var e,f=d("CometRelay").useFragment(m,a.timestamp);c("useCometFeedStoryMatchDebugger")(f);var g=c("useServerTime")(),h=(e=f.story)==null?void 0:e.creation_time;e=(e=f.video_override_url)!=null?e:f.override_url;e=(e=e)!=null?e:(e=f.story)==null?void 0:e.url;f=(f=f.story)==null?void 0:f.ghl_label;var n=l(o(g,h==null?0:h).toString()),p=n[0];n[1];n=j(c("CometFeedUnitLoggingContext"));n=n.position;var q=k(function(){return h!=null?c("CometTimestamp.react").getAbsoluteTimestamp(new Date(h*1e3)):""},[h]);if(h==null)throw c("unrecoverableViolation")("time cannot be null in CometFeedStoryMinimizedTimestampStrategy","comet_feed");g=o(g,h).toString();var r=j(c("CometFutureOfFeedStoryContext"));r=r.shouldOverlayHeaderOverAttachment;var s=j(d("CometLoggedOutVideoUnitSEOContext.react").CometLoggedOutVideoUnitSEOContext);s=s.cometLoggedOutVideoUnitSEOContext;(s==null?void 0:s.enableFeedVideoAnchorText)===!0&&(e=null);s=i.jsx("span",{suppressHydrationWarning:!0,children:f!=null&&b("cr:1008801")&&p===g?i.jsx(b("cr:1008801"),{label:f,shouldBeWhiteText:r,text:g}):g});p=i.jsx(c("GHLLink.react"),{href:e,label:g,onClick:a.onClick,style:r?{color:"white"}:void 0,children:s});f=n!=null&&n!==0?d("GHLLinkMitigations").createGHLLinkContent(p):p;return i.jsxs(c("CometTrackingNodeProvider.react"),{trackingNode:229,children:[i.jsx(c("CometFeedStoryMetaSectionMiddot.react"),{}),i.jsx("span",{"data-testid":void 0,children:e!=null?i.jsx(c("CometTooltip.react"),{tooltip:q,children:f}):s})]})}a.displayName=a.name+" [from "+f.id+"]";function o(a,b){b=new Date(b*1e3);var d=a.valueOf()-b.valueOf(),e=b.valueOf()>a.valueOf();d=d<n;e=!e&&d;return e?c("CometRelativeTimestamp.react").getRelativeTimestamp(a,b,"minimized"):c("CometTimestamp.react").getTimestamp(a,b)}g["default"]=a}),98);