;/*FB_PKG_DELIM*/

__d("CometPrivacySelectorEntryPointIcon_renderer$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"CometPrivacySelectorEntryPointIcon_renderer$localPrivacyRow"},{defaultValue:null,kind:"LocalArgument",name:"CometPrivacySelectorEntryPointIcon_renderer$renderLocation"},{defaultValue:null,kind:"LocalArgument",name:"CometPrivacySelectorEntryPointIcon_renderer$tags"}],kind:"SplitOperation",metadata:{},name:"CometPrivacySelectorEntryPointIcon_renderer$normalization",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"source",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:"scope",args:[{kind:"Variable",name:"render_location",variableName:"CometPrivacySelectorEntryPointIcon_renderer$renderLocation"},{kind:"Variable",name:"selected_override",variableName:"CometPrivacySelectorEntryPointIcon_renderer$localPrivacyRow"},{kind:"Variable",name:"tags",variableName:"CometPrivacySelectorEntryPointIcon_renderer$tags"}],concreteType:"PrivacyScope",kind:"LinkedField",name:"privacy_scope_for_location",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"label",storageKey:null},{alias:null,args:[{kind:"Variable",name:"scale",variableName:"scale"}],concreteType:"Image",kind:"LinkedField",name:"icon_image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"can_viewer_edit",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"extended_description",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}]};e.exports=a}),null);
__d("CometPrivacySelectorEntryPointIcon_renderer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"localPrivacyRow"},{defaultValue:null,kind:"LocalArgument",name:"renderLocation"},{defaultValue:null,kind:"LocalArgument",name:"tags"}],kind:"Fragment",metadata:null,name:"CometPrivacySelectorEntryPointIcon_renderer",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"source",plural:!1,selections:[{alias:"scope",args:[{kind:"Variable",name:"render_location",variableName:"renderLocation"},{kind:"Variable",name:"selected_override",variableName:"localPrivacyRow"},{kind:"Variable",name:"tags",variableName:"tags"}],concreteType:"PrivacyScope",kind:"LinkedField",name:"privacy_scope_for_location",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometPrivacyIcon_scope"},{args:null,kind:"FragmentSpread",name:"CometPrivacySelectorTooltip_scope"},{alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null}],storageKey:null}],storageKey:null}],type:"PrivacyScopeCometIconEntryPointRenderer",abstractKey:null};e.exports=a}),null);
__d("CometPrivacySelectorUneditable_renderer$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"CometPrivacySelectorUneditable_renderer$renderLocation"},{defaultValue:null,kind:"LocalArgument",name:"CometPrivacySelectorUneditable_renderer$tags"}],kind:"SplitOperation",metadata:{},name:"CometPrivacySelectorUneditable_renderer$normalization",selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"PrivacyRowInput",kind:"LinkedField",name:"privacy_row_input",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"allow",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"base_state",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"deny",storageKey:null},{alias:null,args:null,concreteType:"PrivacyRowInputTargetingFields",kind:"LinkedField",name:"privacy_targeting",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"targeted_publishing_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"targeted_publishing_fields",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"tag_expansion_state",storageKey:null}],storageKey:null},{alias:null,args:[{kind:"Variable",name:"render_location",variableName:"CometPrivacySelectorUneditable_renderer$renderLocation"},{kind:"Literal",name:"supported",value:"2NC68H"}],concreteType:null,kind:"LinkedField",name:"entry_point_renderer",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[{args:[{kind:"Variable",name:"CometPrivacySelectorEntryPointButton_renderer$renderLocation",variableName:"CometPrivacySelectorUneditable_renderer$renderLocation"},{kind:"Variable",name:"CometPrivacySelectorEntryPointButton_renderer$tags",variableName:"CometPrivacySelectorUneditable_renderer$tags"}],documentName:"CometPrivacySelectorEntryPointMatchContainer_renderer",fragmentName:"CometPrivacySelectorEntryPointButton_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"PrivacyScopeCometButtonEntryPointRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:[{kind:"Variable",name:"CometComposerPrivacySelectorEntryPointButton_renderer$renderLocation",variableName:"CometPrivacySelectorUneditable_renderer$renderLocation"},{kind:"Variable",name:"CometComposerPrivacySelectorEntryPointButton_renderer$tags",variableName:"CometPrivacySelectorUneditable_renderer$tags"}],documentName:"CometPrivacySelectorEntryPointMatchContainer_renderer",fragmentName:"CometComposerPrivacySelectorEntryPointButton_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"PrivacyScopeCometComposerButtonEntryPointRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:[{kind:"Variable",name:"CometPrivacySelectorEntryPointIcon_renderer$renderLocation",variableName:"CometPrivacySelectorUneditable_renderer$renderLocation"},{kind:"Variable",name:"CometPrivacySelectorEntryPointIcon_renderer$tags",variableName:"CometPrivacySelectorUneditable_renderer$tags"}],documentName:"CometPrivacySelectorEntryPointMatchContainer_renderer",fragmentName:"CometPrivacySelectorEntryPointIcon_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"PrivacyScopeCometIconEntryPointRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:[{kind:"Variable",name:"CometPrivacySelectorEntryPointLabel_renderer$renderLocation",variableName:"CometPrivacySelectorUneditable_renderer$renderLocation"},{kind:"Variable",name:"CometPrivacySelectorEntryPointLabel_renderer$tags",variableName:"CometPrivacySelectorUneditable_renderer$tags"}],documentName:"CometPrivacySelectorEntryPointMatchContainer_renderer",fragmentName:"CometPrivacySelectorEntryPointLabel_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"PrivacyScopeCometLabelEntryPointRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:[{kind:"Variable",name:"CometPrivacySelectorEntryPointToggle_renderer$renderLocation",variableName:"CometPrivacySelectorUneditable_renderer$renderLocation"},{kind:"Variable",name:"CometPrivacySelectorEntryPointToggle_renderer$tags",variableName:"CometPrivacySelectorUneditable_renderer$tags"}],documentName:"CometPrivacySelectorEntryPointMatchContainer_renderer",fragmentName:"CometPrivacySelectorEntryPointToggle_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"PrivacyScopeCometToggleEntryPointRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:[{kind:"Variable",name:"CometPrivacySelectorEntryPointLeftRailButton_renderer$renderLocation",variableName:"CometPrivacySelectorUneditable_renderer$renderLocation"},{kind:"Variable",name:"CometPrivacySelectorEntryPointLeftRailButton_renderer$tags",variableName:"CometPrivacySelectorUneditable_renderer$tags"}],documentName:"CometPrivacySelectorEntryPointMatchContainer_renderer",fragmentName:"CometPrivacySelectorEntryPointLeftRailButton_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"PrivacyScopeCometLeftRailButtonEntryPointRenderer",abstractKey:null}],storageKey:null}],type:"PrivacySelectorRenderer",abstractKey:"__isPrivacySelectorRenderer"}]};e.exports=a}),null);
__d("CometPrivacySelectorUneditable_renderer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"renderLocation"},{defaultValue:null,kind:"LocalArgument",name:"tags"}],kind:"Fragment",metadata:null,name:"CometPrivacySelectorUneditable_renderer",selections:[{args:null,kind:"FragmentSpread",name:"useCometPrivacySelectorNotifyPrivacyOnInitEffect_renderer"},{args:[{kind:"Variable",name:"renderLocation",variableName:"renderLocation"},{kind:"Variable",name:"tags",variableName:"tags"}],kind:"FragmentSpread",name:"CometPrivacySelectorEntryPointMatchContainer_renderer"}],type:"PrivacyScopeUneditableRenderer",abstractKey:null};e.exports=a}),null);
__d("CometUFIDefaultRepliesListRenderer_renderer$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null};return{kind:"SplitOperation",metadata:{},name:"CometUFIDefaultRepliesListRenderer_renderer$normalization",selections:[a,{alias:null,args:null,concreteType:"Feedback",kind:"LinkedField",name:"feedback",plural:!1,selections:[{alias:null,args:null,concreteType:"ConstituentBadgeBannerRenderer",kind:"LinkedField",name:"constituent_badge_banner_renderer",plural:!1,selections:[{args:null,documentName:"CometUFIComposerWrapper_feedback_constituentBadgeBanner",fragmentName:"CometUFICommentingAsConstituentHeader_constituentBadgeBannerRenderer",fragmentPropName:"constituentBadgeBannerRenderer",kind:"ModuleImport"}],storageKey:null},{alias:"composer_renderer",args:null,concreteType:null,kind:"LinkedField",name:"content_based_comment_list_renderer",plural:!1,selections:[a,{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFIComposerWrapper_feedback_commentList",fragmentName:"CometDefaultCommentListComposer_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"DefaultContentBasedCommentListRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFIComposerWrapper_feedback_commentList",fragmentName:"CometLiveCommentListComposer_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"LiveContentBasedCommentListRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFIComposerWrapper_feedback_commentList",fragmentName:"CometLiveVODCommentListComposer_renderer",fragmentPropName:"renderer",kind:"ModuleImport"}],type:"LiveVODContentBasedCommentListRenderer",abstractKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"have_comments_been_disabled",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"are_live_video_comments_disabled",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_viewer_muted",storageKey:null},{alias:"display_comments_count",args:null,concreteType:"DisplayCommentsConnection",kind:"LinkedField",name:"display_comments",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"comments_disabled_notice_renderer",plural:!1,selections:[a,{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFICommentDisabledNotice_feedback",fragmentName:"CometGenericCommentDisableNotice_commentDisableNotice",fragmentPropName:"commentDisableNotice",kind:"ModuleImport"}],type:"GeneralCommentDisableNotice",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFICommentDisabledNotice_feedback",fragmentName:"CometGroupForumCommentDisableNotice_commentDisableNotice",fragmentPropName:"commentDisableNotice",kind:"ModuleImport"}],type:"GroupForumParticipantDisableNotice",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFICommentDisabledNotice_feedback",fragmentName:"CometLiveVideoCommentDisableNotice_commentDisableNotice",fragmentPropName:"commentDisableNotice",kind:"ModuleImport"}],type:"LiveVideoCommentDisableNotice",abstractKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}]}}();e.exports=a}),null);
__d("CometUFIDefaultRepliesListRenderer_renderer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometUFIDefaultRepliesListRenderer_renderer",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,concreteType:"Feedback",kind:"LinkedField",name:"feedback",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometUFIComposerWrapper_feedback"}],storageKey:null}],type:"DefaultRepliesListRenderer",abstractKey:null};e.exports=a}),null);
__d("CometMediaViewerLinkToContainerStory_link$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},b=[a];return{kind:"SplitOperation",metadata:{},name:"CometMediaViewerLinkToContainerStory_link$normalization",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:b,type:"Node",abstractKey:"__isNode"},{kind:"InlineFragment",selections:b,type:"DynamicFeedAdAttachmentMedia",abstractKey:null},{kind:"InlineFragment",selections:b,type:"GenericAttachmentMedia",abstractKey:null},{kind:"InlineFragment",selections:b,type:"MontageImage",abstractKey:null},{kind:"InlineFragment",selections:b,type:"MontageVideo",abstractKey:null}],storageKey:null},{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"container_story",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},a],storageKey:null}]}}();e.exports=a}),null);
__d("CometMediaViewerLinkToContainerStory_link.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometMediaViewerLinkToContainerStory_link",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null},{kind:"RequiredField",field:{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"container_story",plural:!1,selections:[{kind:"RequiredField",field:{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},action:"THROW",path:"container_story.url"}],storageKey:null},action:"THROW",path:"container_story"}],type:"XFBLinkToContainerStory",abstractKey:null};e.exports=a}),null);
__d("CometPrivacySelectorEntryPointIcon.react",["fbt","CometFutureOfFeedStoryContext","CometPressable.react","CometPrivacyIcon.react","CometPrivacySelectorButtonSavingOverlay.react","CometPrivacySelectorEntryPointIcon_renderer.graphql","CometPrivacySelectorTooltip.react","CometRelay","CometTrackingNodeProvider.react","react","stylex","unrecoverableViolation"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react"),k=d("react").useContext,l={centerContent:{alignItems:"x6s0dn4",display:"x78zum5",justifyContent:"xl56j7k",$$css:!0},hiddenLabel:{clip:"xzpqnlu",clipPath:"x179tack",position:"x10l6tqk",$$css:!0},invisible:{visibility:"xlshs6z",$$css:!0},marginFixer:{marginStart:"x139jcc6",$$css:!0},pressableOverlayPressed:{backgroundColor:"x1lxk4cn",$$css:!0},pressablePosition:{position:"x1uhb9sk",$$css:!0},savingOverlayContainer:{position:"x1n2onr6",$$css:!0}};function a(a){var e=a.isEnabled,f=a.isSaving,g=a.onPress,m=a.renderer;a=a.triggerRef;m=d("CometRelay").useFragment(i!==void 0?i:i=b("CometPrivacySelectorEntryPointIcon_renderer.graphql"),m);var n=k(c("CometFutureOfFeedStoryContext"));n=n.shouldOverlayHeaderOverAttachment;m=(m=m.source)==null?void 0:m.scope;if(m==null)throw c("unrecoverableViolation")("Failed to render privacy selector icon entry point. Either source or source.scope were not available.","comet_privacy_selector");var o=h._("__JHASH__QSweaIvtpVn__JHASH__");e=f||!e;n=j.jsxs("div",{className:c("stylex")(l.centerContent,f&&l.invisible),children:[j.jsx(c("CometPrivacyIcon.react"),{color:n?"white":void 0,disabled:e,marginEnd:4,scope:m}),j.jsx("div",{className:"x139jcc6"})]});var p=m.description;p=p!=null?j.jsx("span",{className:"xzpqnlu x179tack x10l6tqk",children:h._("__JHASH__tXZ5JCHXK7E__JHASH__",[h._param("audience",p)])}):null;o=j.jsxs(c("CometPressable.react"),{"aria-label":o,disabled:e,display:"inline",onPress:g,overlayOffset:4,overlayPressedStyle:l.pressableOverlayPressed,overlayRadius:"50%",ref:a,xstyle:l.pressablePosition,children:[j.jsx(c("CometPrivacySelectorButtonSavingOverlay.react"),{isSaving:f}),n]});return j.jsx(c("CometPrivacySelectorTooltip.react"),{entryPointHasLabel:!1,isLoading:f,scope:m,children:j.jsx(c("CometTrackingNodeProvider.react"),{trackingNode:29,children:j.jsxs("span",{className:"x1n2onr6",children:[p,o]})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometPrivacySelectorUneditable.react",["CometPrivacySelectorEntryPointMatchContainer.react","CometPrivacySelectorUneditable_renderer.graphql","CometRelay","emptyFunction","react","useCometPrivacySelectorNotifyPrivacyOnInitEffect"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){var e=a.onPrivacyChange,f=a.renderer;a=a.renderLocation;f=d("CometRelay").useFragment(h!==void 0?h:h=b("CometPrivacySelectorUneditable_renderer.graphql"),f);c("useCometPrivacySelectorNotifyPrivacyOnInitEffect")(f,e);return i.jsx(c("CometPrivacySelectorEntryPointMatchContainer.react"),{props:{isEnabled:!1,isSaving:!1,onPress:c("emptyFunction"),renderLocation:a},renderer:f})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometUFIDefaultRepliesListRenderer.react",["CometRelay","CometUFICommentGroup.react","CometUFICommentsFilterFallbackWarning.react","CometUFICommentsPager.react","CometUFIComposer.react","CometUFIComposerWrapper.react","CometUFIDefaultRepliesListRenderer_renderer.graphql","CometUFIRepliesCollapser.react","CometUFIRepliesExpander.react","UFI2ViewOption","cr:2857","gkx","qpl","react","unrecoverableViolation","useCometInteractionTracing"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react"),j=d("react").useRef,k=c("gkx")("1341692"),l={commentRowNested:{paddingTop:"x1iorvi4",paddingEnd:"x1pi30zi",paddingBottom:"xjkvuk6",paddingStart:"xurb0ha",$$css:!0},composerNested:{paddingTop:"x1iorvi4",paddingEnd:"x1pi30zi",paddingBottom:"xwib8y2",paddingStart:"xurb0ha",$$css:!0},pagerWrapper:{position:"x1n2onr6",$$css:!0},root:{marginTop:"xdj266r",paddingTop:"xexx8yu",paddingEnd:"x4uap5",paddingBottom:"x18d9i69",paddingStart:"x46jau6",$$css:!0}};function a(a){var e=a.actor,f=a.editingCommentID,g=a.feedbackSource,m=a.feedLocation,n=a.focusCommentID,o=a.initialLexicalPlugins,p=a.locallyComposedCommentIds,q=a.onCommitCommentCreate,r=a.onEditCommentError,s=a.onTranslateAllClick,t=a.realtimeCommentIds,u=a.renderedTranslationCommentID,v=a.renderer,w=a.repliesListRenderProps,x=a.setEditingCommentID,y=a.setRenderedTranslationCommentID,z=a.shouldRequestTranslationForAllComments,A=a.storyRenderLocation,B=a.topLevelViewOption,C=a.viewOption;if(w.depth!==1)throw c("unrecoverableViolation")("CometUFIDefaultRepliesListRenderer: Must be rendered at depth 1","ufi2");a=d("CometRelay").useFragment(h!==void 0?h:h=b("CometUFIDefaultRepliesListRenderer_renderer.graphql"),v);v=a.feedback;a=w.Selectors;var D=w.depth,E=w.getComposerProps,F=w.getFilterWarningPropsForNewerComments,G=w.getFilterWarningPropsForOlderComments,H=w.getPagerPropsForNewerComments,I=w.getPagerPropsForOlderComments,J=w.getRepliesCollapserProps,K=w.getRepliesExpanderProps,L=w.listState,M=d("UFI2ViewOption").shouldDisplayInReverse(w.viewOption),N=a.getVisibleCommentsWithHiddenCommentsCollapsed({depth:D,reverse:M,state:L}),O=a.isComposerVisible({depth:D,state:L})&&B!=="ADMIN_HIDDEN",P=a.isListExpanded({depth:D,state:L}),Q=a.isRepliesExpanderLoading({depth:D,state:L});a=a.getVisibleCommentsCount({depth:D,state:L});var R=c("useCometInteractionTracing")(c("qpl")._(30605393,"1077"),"fluid","INTERACTION","comet.ufi.load_more_comments"),S=I(),T=H(),U=j(null);L=babelHelpers["extends"]({},M?S:T,{loadMoreComments:function(){for(var a=arguments.length,b=new Array(a),c=0;c<a;c++)b[c]=arguments[c];R(function(a){var c=U.current;c&&a.observeMutation(c);(M?S.loadMoreComments:T.loadMoreComments).apply(void 0,b)})}});I=babelHelpers["extends"]({},M?T:S,{loadMoreComments:function(){for(var a=arguments.length,b=new Array(a),c=0;c<a;c++)b[c]=arguments[c];R(function(a){var c=U.current;c&&a.observeMutation(c);(M?T.loadMoreComments:S.loadMoreComments).apply(void 0,b)})}});var V=B==="RANKED_THREADED";H=function(a){return M?a.reverse():a}([F(),G()].map(function(a){return V&&i.jsx(c("CometUFICommentsFilterFallbackWarning.react"),babelHelpers["extends"]({},a,{viewOption:B,xstyle:l.commentRowNested}))}));F=H[0];G=H[1];if(!P||Q)return i.jsx("div",{className:"xdj266r xexx8yu x4uap5 x18d9i69 x46jau6",children:i.jsx(c("CometUFIRepliesExpander.react"),babelHelpers["extends"]({},K()))});H=null;O&&e!=null&&(H=v!=null&&k?i.jsx(d("CometUFIComposerWrapper.react").CometUFIComposerWrapper,{commentsListRenderProps:w,feedback:v,initialLexicalPlugins:o,onCommitCommentCreate:q,xstyle:l.composerNested}):i.jsx(c("CometUFIComposer.react"),babelHelpers["extends"]({initialLexicalPlugins:o},E(),{actor:e,commentAction:"ADD",commentID:null,depth:D,onCommit:q,xstyle:l.composerNested})));return i.jsxs("div",{className:"xdj266r xexx8yu x4uap5 x18d9i69 x46jau6",ref:U,children:[i.jsx(c("CometUFIRepliesCollapser.react"),babelHelpers["extends"]({},J())),i.jsx(c("CometUFICommentsPager.react"),babelHelpers["extends"]({},L)),F,a>0?i.jsx("ul",{children:N.map(function(a,b){return i.jsx(c("CometUFICommentGroup.react"),{actor:e,commentsListRenderProps:w,editingCommentID:f,feedLocation:m,feedbackSource:g,focusCommentID:n,groupedComments:a,initialLexicalPlugins:o,locallyComposedCommentIds:p,onCommitCommentCreate:q,onEditCommentError:r,onTranslateAllClick:s,realtimeCommentIds:t,renderedTranslationCommentID:u,setEditingCommentID:x,setRenderedTranslationCommentID:y,shouldRequestTranslationForAllComments:z,storyRenderLocation:A,viewOption:C},b)})}):null,G,i.jsx("div",{className:"x1n2onr6",children:i.jsx(c("CometUFICommentsPager.react"),babelHelpers["extends"]({},I))}),H==null||b("cr:2857")==null?H:i.jsx(b("cr:2857"),{focusRingPosition:"default",children:H})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometMediaViewerLinkStoryTypes$FbtEnum",[],(function(a,b,c,d,e,f){"use strict";a={_other:"media",photo:"photo",video:"video"};b=a;f["default"]=b}),66);
__d("CometMediaViewerLinkToContainerStory.react",["fbt","ix","CometDivider.react","CometLink.react","CometMediaViewerLinkStoryTypes$FbtEnum","CometMediaViewerLinkToContainerStory_link.graphql","CometRelay","CometRow.react","CometRowItem.react","TetraIcon.react","TetraText.react","fbicon","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=d("react"),l={divider:{marginStart:"x1d52u69",marginEnd:"xktsk01",$$css:!0}};function a(a){var e;a=a.link;a=d("CometRelay").useFragment(j!==void 0?j:j=b("CometMediaViewerLinkToContainerStory_link.graphql"),a);e=(e=a.media)==null?void 0:e.__typename;e=e==="Photo"?"photo":e==="Video"?"video":"_other";return k.jsxs(k.Fragment,{children:[k.jsxs(c("CometRow.react"),{paddingHorizontal:16,paddingVertical:12,spacing:8,verticalAlign:"center",children:[k.jsx(c("CometRowItem.react"),{children:k.jsx(c("TetraIcon.react"),{color:"secondary",icon:d("fbicon")._(i("729678"),16)})}),k.jsx(c("CometRowItem.react"),{expanding:!0,children:k.jsx(c("TetraText.react"),{color:"secondary",type:"body4",children:h._("__JHASH__SYSkoIYZBvk__JHASH__",[h._enum(e,c("CometMediaViewerLinkStoryTypes$FbtEnum"))])})}),k.jsx(c("CometRowItem.react"),{children:k.jsx(c("TetraText.react"),{color:"secondary",type:"body4",children:k.jsx(c("CometLink.react"),{href:a.container_story.url,children:h._("__JHASH__2nKNqWPpN5Y__JHASH__")})})})]}),k.jsx(c("CometDivider.react"),{xstyle:l.divider})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);