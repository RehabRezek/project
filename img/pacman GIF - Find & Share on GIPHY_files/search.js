webpackJsonp(["search"],{"+ZfR":function(e,t,a){var r=a("IzUc");"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0};i.transform=void 0,a("MTIv")(r,i),r.locals&&(e.exports=r.locals)},"1jop":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){var t=a("GiK3"),r=a.n(t),i=a("O27J"),n=a.n(i),s=a("rGbO"),o=(a.n(s),a("F3vE"));e.Giphy.renderSearch=function(e,t){n.a.render(r.a.createElement(s.AppContainer,null,r.a.createElement(o.a,t)),e)}}.call(t,a("DuR2"))},"3iSM":function(e,t,a){"use strict";var r=(a("KSGD"),a("Dd8w")),i=a.n(r),n=a("Zrlr"),s=a.n(n),o=a("zwoO"),l=a.n(o),c=a("Pf15"),p=a.n(c),u=a("GiK3"),m=a.n(u),f=a("xYBU"),d=a("sxE/"),g=a("oDJa"),h=a("Ule5"),y=a("Xapw"),b=a("bnwa"),k=a.n(b),v=function(e){function t(){return s()(this,t),l()(this,e.apply(this,arguments))}return p()(t,e),t.prototype.render=function(){var e=this.props,t=e.searchType,a=void 0===t?"gif":t,r=e.toggleSearchType,n=e.width,s=void 0===n?206:n,o=e.height,l=void 0===o?26:o,c=e.term,p=void 0===c?"":c,u=e.navigate,b=void 0===u?null:u,v=e.data,x=e.className,w="sticker"===a?"gif":"sticker",E="sticker"===w,_=""+p.replace(/stickers|sticker|transparent/gi,"").trim().replace(/\s+/g,"-"),T="/search/"+_+(E?"-stickers":"")+document.location.search,I=i()({},v,{is_sticker_search:!!E}),S=m.a.createElement(f.a,{toggle:function(e){b&&b(T,I),Object(g.b)({category:"Search Page",action:w+" Toggle",label:p}),Object(g.e)(T),setTimeout(function(){b&&r(e)},50)},isOn:E,height:l,width:s,offColor:h.giphyGreen,onElement:m.a.createElement("span",{className:k.a.toggleItem,style:{height:l}},"GIFs"),offElement:m.a.createElement("span",{className:k.a.toggleItem,style:{height:l}},"Stickers")});return b?m.a.createElement("div",null,S):m.a.createElement("div",{className:[k.a.container,x].join(" ")},m.a.createElement(d.a,{onClick:function(){r(a)},href:T},S),m.a.createElement(y.a,null))},t}(u.PureComponent),x=a("RH2O"),w=a("fNdZ"),E=a("p9xB"),_=a("CU0B"),T=a("Gso4");t.a=Object(x.b)(function(e){return{searchType:E.B(e)}},function(e,t){return{toggleSearchType:function(){var a="gif";try{a=sessionStorage.getItem("giphyStickerMode")}catch(e){console.error("Issue getting session storage")}var r=Object(T.c)(document.location.pathname,["-sticker","-stickers","-transparent"]);if("sticker"===a){var i=Object(T.c)(t.term,["sticker","stickers","transparent"]).trim(),n="SEARCH - "+i;try{sessionStorage.setItem("giphyStickerMode","gif")}catch(e){console.error("Issue setting session storage")}e(Object(_.c)("gif")),e(Object(w.d)(""+r+document.location.search,n))}else{var s="SEARCH - "+t.term+" stickers";try{sessionStorage.setItem("giphyStickerMode","sticker")}catch(e){console.error("Issue setting session storage")}e(Object(_.c)("sticker")),e(Object(w.d)(r+"-stickers"+document.location.search,s))}}}})(v)},"4Q1c":function(e,t,a){"use strict";function r(e){return e.displayName||e.name||("string"==typeof e&&e.length>0?e:"Unknown")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},ApAJ:function(e,t,a){t=e.exports=a("FZ+f")(!1),t.i(a("zojF"),void 0),t.push([e.i,"",""]),t.locals={typography:'"shared/css/typography.css"',searchType:""+a("zojF").locals.searchType,toggleItem:"kbuWTb9UqW_GU2ldY-NxV "+a("zojF").locals.searchType}},CkGE:function(e,t,a){var r=a("UEZ2");"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0};i.transform=void 0,a("MTIv")(r,i),r.locals&&(e.exports=r.locals)},E4Ds:function(e,t,a){"use strict";a.d(t,"d",function(){return v}),a.d(t,"a",function(){return j}),a.d(t,"c",function(){return R}),a.d(t,"b",function(){return O});var r=a("Dd8w"),i=a.n(r),n=a("lHK6"),s=a.n(n),o=a("GiK3"),l=a.n(o),c=a("RH2O"),p=a("KSGD"),u=a.n(p),m=a("xYBU"),f=a("wTCX"),d=a.n(f),g=a("UtPJ"),h=a("3iSM"),y=a("By+e"),b=a("AguY"),k=a("p9xB"),v=function(e){var t=e.css,a=e.term,r=e.displayTerm,i=e.gifCount,n=e.isSticker,s=e.user.username;return l.a.createElement("div",{className:t.results},l.a.createElement("h1",{className:t.searchTerm},function(e,t){return e||(t?"All the "+t+" GIFs":a)}(r,s),"number"==typeof i&&l.a.createElement("span",{"data-gif-count":i.toLocaleString(),className:t.number}," "+(n?"Sticker":"GIF")+(1===i?"":"s"))))},x=function(e){var t=e.sorting;return l.a.createElement("div",{className:d.a.sort},l.a.createElement("span",null,"Sort:",l.a.createElement("a",{href:"?sort=relevant",className:"recent"!==t?d.a.activeSortLink:d.a.sortLink},"Relevant"),l.a.createElement("a",{href:"?sort=recent",className:"recent"===t?d.a.activeSortLink:d.a.sortLink},"Newest")))},w=function(){return l.a.createElement("span",{className:d.a.autoplayLabel},"Auto Play")},E=function(e){var t=e.autoPlay,a=e.onToggleAutoPlay;return l.a.createElement(m.a,{isOn:t,onElement:l.a.createElement("i",{className:"ss-play"}),offElement:l.a.createElement("i",{className:"ss-pause"}),toggle:a})},_=function(e){var t=e.autoPlay,a=e.sorting,r=e.onToggleAutoPlay,i=e.canSort,n=void 0===i||i;return l.a.createElement("div",{className:d.a.header},l.a.createElement("div",null,n&&l.a.createElement(x,{sorting:a}),l.a.createElement("div",{className:d.a.autoplay},l.a.createElement(E,{autoPlay:t,onToggleAutoPlay:r}))))},T=function(e){var t=e.suggestion,a=e.suggestionUrl,r=e.isSticker,i=e.displayTerm,n=!s()(t),o=n?"Did you mean":"Try searching for",c=n?a:"/search/"+i+(r?"":"-stickers"),p=n?t:r?"GIFs ":"Stickers ",u=n?"?":"instead?";return l.a.createElement("div",{className:d.a.noResults},l.a.createElement("span",null,"No "+(r?"Stickers":"GIFs")+" found for "+i),l.a.createElement("span",null,o," ",l.a.createElement("a",{href:c},p),u))},I=function(e){var t=e.user.username;return l.a.createElement("div",{className:d.a.noResults},l.a.createElement("span",null,"Oops sorry! @"+t+" does not have a Verified Channel."),l.a.createElement("span",null,prompt," ",l.a.createElement("a",{href:"/faq"},"Learn more about verification on GIPHY.")))},S=function(e){var t=e.term;return l.a.createElement("div",{className:d.a.noResults},l.a.createElement("span",null,"Oops sorry! "+t+" is not a GIPHY Channel."),l.a.createElement("span",null,prompt," ",l.a.createElement("a",{href:"/faq"},"Learn more about Social Search on GIPHY.")))},j=function(e){var t=e.autoPlay,a=e.onToggleAutoPlay;return l.a.createElement("div",{className:d.a.autoPlayHeader},l.a.createElement(w,null),l.a.createElement(E,{autoPlay:t,onToggleAutoPlay:a}))},R=Object(c.b)(function(e){return{autoPlay:Object(k.b)(e)}},{onToggleAutoPlay:b.d})(function(e){var t=e.autoPlay,a=e.onToggleAutoPlay,r=e.searchInfo,i=r.displayTerm,n=r.term,s=r.sorting,o=e.css,c=void 0===o?{}:o,p=e.canSort,u=void 0===p||p,m=e.isSticker,f=c.exploreUpperHeader,g=void 0===f?d.a.exploreUpperHeader:f,h=c.exploreSearchTerm,y=void 0===h?d.a.exploreSearchTerm:h;return l.a.createElement("div",{className:g},l.a.createElement("div",{className:d.a.exploreResults},l.a.createElement("h1",{className:y},"Explore ",l.a.createElement("span",{className:d.a.highlight},i||n)," ",m?"Stickers":"GIFs")),l.a.createElement("div",{className:d.a.exploreHeader},l.a.createElement("div",null,u&&l.a.createElement(x,{sorting:s}),l.a.createElement("div",{className:d.a.autoplay},l.a.createElement(E,{autoPlay:t,onToggleAutoPlay:a})))))}),O=function(e){var t=e.isSticker,a=e.searchInfo,r=a.term,n=a.displayTerm;switch(a.error.type){case"no_results_suggestion":return l.a.createElement(T,i()({},a,{isSticker:t,term:r,displayTerm:n}));case"user_not_verified":return l.a.createElement(I,a);case"invalid_user":return l.a.createElement(S,a);default:return null}},P=function(e){var t=e.searchResponseId,a=e.isSticker,r=e.autoPlay,n=e.searchInfo,s=e.onToggleAutoPlay,o=e.gifCount,c=e.channels,p=n.sorting,u=n.term,m=n.error,f=n.user;return l.a.createElement("div",null,l.a.createElement("div",{className:d.a.upperHeader},l.a.createElement(v,i()({css:d.a},n,{gifCount:o,isSticker:a})),l.a.createElement(g.a,i()({isMobile:!1,searchResponseId:t,css:d.a},n,{isSticker:a}))),!f.username&&l.a.createElement(y.b,{searchResponseId:t,items:c,css:d.a,paginates:!0,user:f}),l.a.createElement(h.a,{className:d.a.searchTypeToggle,term:u+(a?" sticker":"")}),m?l.a.createElement(O,{isSticker:a,searchInfo:n}):l.a.createElement(_,{autoPlay:r,sorting:p,onToggleAutoPlay:s,term:u,isSticker:a}))};P.propTypes={autoPlay:u.a.bool.isRequired,searchInfo:u.a.shape({term:u.a.string.isRequired,gifCount:u.a.number.isRequired,sorting:u.a.string,searchResponseId:u.a.string,suggestion:u.a.string,suggestionUrl:u.a.string,isSticker:u.a.bool.isRequired}),onToggleAutoPlay:u.a.func.isRequired,channels:u.a.array},t.e=P},F3vE:function(e,t,a){"use strict";function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments[2],r=Object(X.a)();return function(i,n){var s={event_type:"EXPLORE"===a?"GIF_EXPLORE":"GIF_SEARCH",response_id:t,prior_response_id:r,referrer:document&&document.referrer?document.referrer:null,actions:e};return Object(L.a)(s)(i,n)}}var i,n,s,o,l,c,p,u,m,f,d,g,h=a("Dd8w"),y=a.n(h),b=a("mvHQ"),k=a.n(b),v=a("Zrlr"),x=a.n(v),w=a("zwoO"),E=a.n(w),_=a("Pf15"),T=a.n(_),I=a("lHK6"),S=a.n(I),j=a("m4tL"),R=a.n(j),O=a("KSGD"),P=a.n(O),F=a("GiK3"),C=a.n(F),A=a("rpcy"),q=a.n(A),z=a("o9Hm"),G=a("RH2O"),H=a("Xoyd"),J=a("dPA+"),N=a("Jjtz"),D=a("VtlJ"),W=a("AwrF"),Z=a("pzcx"),Q=a("1XD+"),M=a("lGpV"),B=a.n(M),K=a("CIox"),L=a("vZH+"),X=a("mBB3"),Y=a("fNdZ"),V=a("p9xB"),U=a("AguY"),$=a("9irO"),ee=a("CU0B"),te=a("Gso4"),ae=a("xzzG"),re=a("Xxa5"),ie=a.n(re),ne=a("exGp"),se=a.n(ne),oe=a("Dc7M"),le=a.n(oe),ce=a("Ykzy"),pe=a.n(ce),ue=a("E4Ds"),me=a("agUm"),fe=a("rgeD"),de=a("jgid"),ge=a("3jQh"),he=a("rarg"),ye=a("feyy"),be=a("O1wm"),ke=P.a.arrayOf,ve=P.a.object,xe=P.a.shape,we=P.a.string,Ee=P.a.bool,_e=P.a.element,Te=P.a.func,Ie=P.a.number,Se=P.a.any,je=(i=pe()(["gifs","autoPlay","appWidth","isOffscreen","isFetching","sessionFavorites","editMode","searchType"]))((o=s=function(e){function t(){var a,r,i;x()(this,t);for(var n=arguments.length,s=Array(n),o=0;o<n;o++)s[o]=arguments[o];return a=r=E()(this,e.call.apply(e,[this].concat(s))),r.state={channels:void 0},i=a,E()(r,i)}return T()(t,e),t.prototype.componentWillMount=function(){function e(){return t.apply(this,arguments)}var t=se()(ie.a.mark(function e(){var t,a,r,i;return ie.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,a=t.setSearchType,r=t.search,!(i=t.isFavorite)){e.next=3;break}return e.abrupt("return");case 3:if(r&&r.isSticker){try{sessionStorage.setItem("giphyStickerMode","sticker")}catch(e){console.error("Issue setting sesstion storage")}a("sticker")}else{try{sessionStorage.setItem("giphyStickerMode","gif")}catch(e){console.error("Issue setting sesstion storage")}a("gif")}case 4:case"end":return e.stop()}},e,this)}));return e}(),t.prototype.componentDidMount=function(){function e(){return t.apply(this,arguments)}var t=se()(ie.a.mark(function e(){var t,a;return ie.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=this.props.search)){e.next=12;break}return e.prev=2,e.next=5,Object(be.d)(t.term);case 5:a=e.sent,this.setState({channels:a}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.error("Issue getting channels in search",e.t0);case 12:case"end":return e.stop()}},e,this,[[2,9]])}));return e}(),t.prototype.render=function(){var e=this.props,t=e.autoPlay,a=e.search,r=e.toggleAutoPlay,i=e.showTV,n=e.user,s=e.aspectRatio,o=e.isOwner,l=e.searchType,c=e.isExplore,p=e.gifCount,u=e.searchResponseId,m=e.isFavorite,f=e.error,d=le()(this.props,["children","search","toggleAutoPlay"]),g=this.state.channels,h=a&&a.term&&Object(fe.b)(a.term),b=y()({},a,{error:f});return C.a.createElement("div",null,a?C.a.createElement(ue.e,{isExplore:c,autoPlay:t,searchInfo:b,searchResponseId:u,onToggleAutoPlay:r,gifCount:p,channels:g,isSticker:!("sticker"!==l||m)}):C.a.createElement(ue.a,{onToggleAutoPlay:r,autoPlay:t}),C.a.createElement(me.a,y()({gridTemplate:"search",searchResponseId:u},d,{tvConfig:i?{term:a?a.term:"",user:n,aspectRatio:s}:null}),o&&C.a.createElement(ye.a,null)),h&&C.a.createElement(fe.a,{term:a.term}))},t}(F.Component),s.propTypes={gifs:ke(de.a).isRequired,search:xe({term:we.isRequired,total:Ie.isRequired,sorting:we,suggestion:we,suggestionUrl:we,isSticker:Ee.isRequired}),children:_e,afterGif:Se,autoPlay:Ee.isRequired,appWidth:Ie.isRequired,sessionFavorites:ve,isFetching:Ee,fetchGifs:Te.isRequired,toggleAutoPlay:Te.isRequired,pingbackId:we,aspectRatio:Ie,user:ge.a,searchResponseId:we,setSearchType:Te.isRequired,searchType:we,isExplore:Ee},s.defaultProps={appWidth:parseInt(he.grid12,10),autoPlay:!0,sessionFavorites:{}},n=o))||n,Re=(l=Object(G.b)(function(e,t){var a=t.isFavorite,r=t.groupId;return r=Object(te.c)(r,["sticker","stickers","transparent"]).trim(),"sticker"!==e.searchType||a||(r+=" stickers"),{isFetching:V.m(e,r),gifs:V.u(e,r),searchResponseId:V.A(e),sessionFavorites:V.C(e),autoPlay:V.b(e),editMode:V.j(e),searchType:V.B(e),gifCount:V.p(e,y()({},t,{groupId:r})),hasEnoughGifsForTV:V.G(e,y()({},t,{groupId:r})),isSticker:"sticker"===e.searchType,error:V.r(e,y()({},t,{groupId:r}))}},function(e){return{fetchGifs:function(t){e(Object(Y.c)(t))},toggleAutoPlay:function(){e(Object(U.d)())},pingback:function(t,a,i){e(r(t,a,i))},toggleEditMode:function(){e(Object($.i)())},updateEditMode:function(){e(Object($.j)())},setSearchType:function(t){e(Object(ee.c)(t))}}},function(e,t,a){return y()({},a,e,t,{fetchGifs:function(){var r=Object(te.c)(a.groupId,["sticker","stickers","transparent"]).trim();"sticker"!==e.searchType||a.isFavorite||(r+=" stickers"),t.fetchGifs(r)}})}))(c=Object(ae.a)(c=function(e){function t(){return x()(this,t),E()(this,e.apply(this,arguments))}return T()(t,e),t}(je))||c)||c,Oe=P.a.arrayOf,Pe=P.a.object,Fe=P.a.shape,Ce=P.a.string,Ae=P.a.bool,qe=P.a.element,ze=P.a.func,Ge=P.a.number,He=P.a.any,Je=(p=pe()(["gifs","autoPlay","appWidth","isOffscreen","isFetching","sessionFavorites","editMode"]))((f=m=function(e){function t(){return x()(this,t),E()(this,e.apply(this,arguments))}return T()(t,e),t.prototype.render=function(){var e=this.props,t=e.search,a=e.showTV,r=e.aspectRatio,i=e.searchResponseId,n=e.error,s=le()(this.props,["children","search"]),o=y()({},t,{error:n});return C.a.createElement("div",null,C.a.createElement(ue.c,{searchInfo:o,searchResponseId:i,isSticker:o.isSticker,term:t.displayTerm}),C.a.createElement(me.a,y()({},s,{gridTemplate:"explore",searchResponseId:i,tvConfig:a?{term:t?t.term:"",user:null,aspectRatio:r}:null})))},t}(F.Component),m.propTypes={gifs:Oe(de.a).isRequired,search:Fe({term:Ce.isRequired,total:Ge.isRequired,sorting:Ce,suggestion:Ce,suggestionUrl:Ce,isSticker:Ae.isRequired}),children:qe,afterGif:He,appWidth:Ge.isRequired,sessionFavorites:Pe,isFetching:Ae,fetchGifs:ze.isRequired,pingbackId:Ce,aspectRatio:Ge,searchResponseId:Ce},m.defaultProps={appWidth:parseInt(he.grid12,10),autoPlay:!0,sessionFavorites:{}},u=f))||u,Ne=(d=Object(G.b)(function(e,t){var a=t.groupId;return{isFetching:V.m(e,a),gifs:V.u(e,a),searchResponseId:V.A(e),sessionFavorites:V.C(e),editMode:V.j(e),hasEnoughGifsForTV:V.G(e,y()({},t,{groupId:a})),isSticker:"sticker"===e.searchType,error:V.r(e,y()({},t,{groupId:a}))}},function(e,t){return{fetchGifs:function(){e(Object(Y.c)(t.groupId))},pingback:function(t,a,i){e(r(t,a,i))},toggleEditMode:function(){e(Object($.i)())},updateEditMode:function(){e(Object($.j)())}}}))(g=Object(ae.a)(g=function(e){function t(){return x()(this,t),E()(this,e.apply(this,arguments))}return T()(t,e),t}(Je))||g)||g,De=a("PIAa"),We=function(e){var t=["gif","gifs","sticker","stickers"],a=e.groupId,r=e.search,i=void 0;return"favorites"===a?i="Search, Discover, Share, and Create Animated GIFs | GIPHY":r&&(i="EXPLORE"===e.pageType?B()(Object(te.c)(r.term,t))+" GIFs - Get the best GIF on GIPHY":B()(Object(te.c)(r.term,t))+" "+(r.isSticker?"Stickers":"GIFs")+" - Find & Share on GIPHY"),C.a.createElement("div",null,C.a.createElement(De.Helmet,null,C.a.createElement("title",null,i)),C.a.createElement(K.c,null,C.a.createElement(K.b,{path:"/(search|favorites)",render:function(){return C.a.createElement(Re,e)}}),C.a.createElement(K.b,{path:"/explore",render:function(){return C.a.createElement(Ne,e)}})))},Ze=a("HXDF"),Qe=a("eNk5");a.d(t,"a",function(){return Be});var Me=Object(H.b)({channelSelectorItems:Q.a},void 0),Be=function(e){function t(){return x()(this,t),E()(this,e.apply(this,arguments))}return T()(t,e),t.prototype.getGroupId=function(){var e=this.props,t=e.search;if(e.isFavorite)return"favorites";var a=t.term,r=t.isSticker;return t?"SEARCH - "+a+(r?" stickers":""):location.href.replace(/.*\//,"")},t.prototype.componentWillMount=function(){var e=this.props,t=e.gifs,a=e.nextUrl,r=e.searchResponseId,i=e.loggedIn,n=e.isStaff,s=e.search;try{if(window.sessionStorage.getItem("responseIds")){var o=JSON.parse(window.sessionStorage.getItem("responseIds"));o.push(r),window.sessionStorage.setItem("responseIds",k()(o))}else{var l=[];l.push(r),window.sessionStorage.setItem("responseIds",k()(l))}}catch(e){Qe.a.error(e)}Me.dispatch(Object(N.receivedGifs)({gifs:t,url:location.pathname,groupId:this.getGroupId(),nextUrl:a,hasMore:!0,responseId:r,count:s?s.total:0,error:s?s.error:null})),Me.dispatch(Object(W.c)({loggedIn:i,isStaff:n})),n&&Me.dispatch(Object(Z.a)())},t.prototype.render=function(){var e=this.props,t=e.showTV,a=e.gifs,r=t&&!S()(a)?Object(D.a)(R()(a,10)):16/9,i=this.getGroupId(),n=y()({},this.props,{aspectRatio:r,groupId:i});return C.a.createElement(G.a,{store:Me},C.a.createElement(q.a,null,C.a.createElement("div",null,C.a.createElement(z.a,null),C.a.createElement(Ze.a,{pageElements:this.props.pageElements}),C.a.createElement(We,n),C.a.createElement(J.b,y()({},this.props,{relatedGroupId:this.props.groupId})))))},t}(C.a.Component)},IzUc:function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,'._121K_0Z5h5jwEmrvmquJ2C{position:relative;z-index:10}._121K_0Z5h5jwEmrvmquJ2C:after,._121K_0Z5h5jwEmrvmquJ2C:before{left:-9999px;opacity:0;position:absolute;top:-9999px}._121K_0Z5h5jwEmrvmquJ2C:before{background-image:url("/static/img/animations/wizard-poof.png");content:""}._121K_0Z5h5jwEmrvmquJ2C:after{background-image:url("/static/img/animations/poof.png");content:""}._2zDvAZm6PkI6T0J4iQeVro{background:no-repeat url("/static/img/animations/poof.png") 100% 0;background-size:1000% 100%;height:100%;left:0;pointer-events:none;top:0;width:100%;z-index:9999999;-webkit-animation:_2zDvAZm6PkI6T0J4iQeVro 1s steps(9) .5s;animation:_2zDvAZm6PkI6T0J4iQeVro 1s steps(9) .5s}._2RLvRmmaaIxQFuOZieXqVj,._2zDvAZm6PkI6T0J4iQeVro{position:fixed;-webkit-transform:translateZ(0);transform:translateZ(0)}._2RLvRmmaaIxQFuOZieXqVj{background:no-repeat url("/static/img/animations/wizard.gif") 50%;background-size:contain;bottom:0;cursor:pointer;height:150px;right:0;width:150px}._2RLvRmmaaIxQFuOZieXqVj:before{background-image:url("/static/img/animations/wizard-stoned.gif");content:"";left:-9999px;opacity:0;position:absolute;top:-9999px}@media (max-width:1000px){._2RLvRmmaaIxQFuOZieXqVj{-webkit-transform-origin:100% 100%;transform-origin:100% 100%;-webkit-transform:translateZ(0) scale(.7);transform:translateZ(0) scale(.7)}}._2YbXjbyApRM70Nk6IO-hg7{background:no-repeat url("/static/img/animations/wizard-poof.png") 0 0;background-size:1500px 150px;-webkit-animation:_2zDvAZm6PkI6T0J4iQeVro .7s steps(9);animation:_2zDvAZm6PkI6T0J4iQeVro .7s steps(9);-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}._2XRPlaVdKzRP5Fs6HoRRwe{background-image:url("/static/img/animations/wizard-stoned.gif")}@-webkit-keyframes _2zDvAZm6PkI6T0J4iQeVro{0%{background-position:0 0}to{background-position:100% 0}}@keyframes _2zDvAZm6PkI6T0J4iQeVro{0%{background-position:0 0}to{background-position:100% 0}}',""]),t.locals={container:"_121K_0Z5h5jwEmrvmquJ2C",puff:"_2zDvAZm6PkI6T0J4iQeVro",wiz:"_2RLvRmmaaIxQFuOZieXqVj",wizPuff:"_2YbXjbyApRM70Nk6IO-hg7 _2RLvRmmaaIxQFuOZieXqVj",wizStoned:"_2XRPlaVdKzRP5Fs6HoRRwe _2RLvRmmaaIxQFuOZieXqVj"}},Rjtu:function(e,t,a){t=e.exports=a("FZ+f")(!1),t.i(a("tqgT"),void 0),t.push([e.i,"._1JAsIG4SJYSNo5b9EWIibb._1JAsIG4SJYSNo5b9EWIibb{width:14.714em;font-size:14px;opacity:0;-webkit-animation:_1DPFhF88vJYBK7_lKmeCzs .3s 1.25s cubic-bezier(.23,1,.32,1) forwards;animation:_1DPFhF88vJYBK7_lKmeCzs .3s 1.25s cubic-bezier(.23,1,.32,1) forwards;box-shadow:0 0 1em #000}._1JAsIG4SJYSNo5b9EWIibb._1JAsIG4SJYSNo5b9EWIibb:after{left:24%}@media only screen and (max-width:24em){._1JAsIG4SJYSNo5b9EWIibb._1JAsIG4SJYSNo5b9EWIibb:after{left:23%}}@media only screen and (max-width:30em){._1JAsIG4SJYSNo5b9EWIibb._1JAsIG4SJYSNo5b9EWIibb{top:100%;width:11.786em;text-align:left}}._2D2-LHIdO9ffibfwvL_EPe{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;padding:1em;padding-right:2em;margin:0}._2AsOhREmNsMnRHWscnjFgl{-webkit-box-flex:100%;-webkit-flex:100%;-ms-flex:100%;flex:100%;padding:.5em 0;margin:0;height:auto;outline:none;color:"+a("tqgT").locals.giphyWhite+";font-weight:700;background:"+a("tqgT").locals.giphyIndigo+";line-height:inherit;border:none}@-webkit-keyframes _1DPFhF88vJYBK7_lKmeCzs{0%{-webkit-transform:translate3d(0,-2.5%,0);transform:translate3d(0,-2.5%,0);opacity:0}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes _1DPFhF88vJYBK7_lKmeCzs{0%{-webkit-transform:translate3d(0,-2.5%,0);transform:translate3d(0,-2.5%,0);opacity:0}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}",""]),t.locals={colors:"'shared/css/colors.css'",giphyMediumLightGrey:""+a("tqgT").locals.giphyMediumLightGrey,giphyWhite:""+a("tqgT").locals.giphyWhite,giphyIndigo:""+a("tqgT").locals.giphyIndigo,toolTip:"_1JAsIG4SJYSNo5b9EWIibb",fadeIn:"_1DPFhF88vJYBK7_lKmeCzs",content:"_2D2-LHIdO9ffibfwvL_EPe",confirmation:"_2AsOhREmNsMnRHWscnjFgl"}},UEZ2:function(e,t,a){t=e.exports=a("FZ+f")(!1),t.i(a("tqgT"),void 0),t.push([e.i,"body[data-trippin=true] #gif-results{-webkit-filter:hue-rotate(180deg) saturate(10);filter:hue-rotate(180deg) saturate(10)}body[data-trippin=true] li#_giphy_tv,body[data-trippin=true] li[data-gif=true]{-webkit-transform:rotate(-3deg);transform:rotate(-3deg)}body[data-trippin=true] li#_giphy_tv:nth-child(3n),body[data-trippin=true] li[data-gif=true]:nth-child(3n){-webkit-transform:rotate(2deg);transform:rotate(2deg)}body[data-trippin=true] li#_giphy_tv:nth-child(5n),body[data-trippin=true] li[data-gif=true]:nth-child(5n){-webkit-transform:rotate(3deg);transform:rotate(3deg)}",""]),t.locals={colors:'"shared/css/colors.css"',giphyNewBlack:""+a("tqgT").locals.giphyNewBlack,giphyPink:""+a("tqgT").locals.giphyPink,giphyYellow:""+a("tqgT").locals.giphyYellow,giphyGreen:""+a("tqgT").locals.giphyGreen}},UnGz:function(e,t,a){t=e.exports=a("FZ+f")(!1),t.i(a("tqgT"),void 0),t.i(a("i5rD"),void 0),t.i(a("zojF"),void 0),t.i(a("D4+e"),void 0),t.push([e.i,"._3dLOB3rLbGEEo5h8-PwvwQ{font-weight:700;text-transform:none;display:block;color:"+a("tqgT").locals.giphyWhite+"}._1c28EcNje6C468vi0jO0Uk{display:inline}._3RQeLpXgzHp_6Bo2oOVY3O{width:50%;text-align:left;-webkit-align-self:center;-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}._3nBtKjCQJGwV5q-PVpsTsz{overflow:hidden}._3Pso07QCmjZWmt4UMB0H1k{clear:both;padding:20px;text-align:center}._3Pso07QCmjZWmt4UMB0H1k span{display:block}.VeCbBh4fXHfCHfzFs5sEq{width:50%}._2SJKKTR1aMK3kUasjbiVwE{margin:10px 0 15px;position:relative}._2KW2EZ0x9ETjF10-OOlEen,._2SJKKTR1aMK3kUasjbiVwE{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}._2KW2EZ0x9ETjF10-OOlEen{padding-bottom:32px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}._1SJi8Dg53PK_QXhegdrab4{clear:none;float:right;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}._1lWXeFze5mAi0tX3MEHDwZ{margin-bottom:16px}.AQ_792pSYn88mX0IpskqI{text-align:right;margin-top:15px}._3Y1rHoZDYmvxc4OJeep7Q{color:"+a("tqgT").locals.giphyGrey+";float:left;line-height:25px;font-size:14px}._1OjiPPKU8lQXHH4B25Q1wA{color:inherit;display:inline-block;margin-left:10px}._1OjiPPKU8lQXHH4B25Q1wA:hover,._2rO4v1KuRJjfee1giAZGJE{color:"+a("tqgT").locals.giphyWhite+"}._2rO4v1KuRJjfee1giAZGJE{font-weight:700}._2wFcxUUCXjkuyyVIRaMxxp{float:right;margin-left:30px}._3ba1JLDT0x0TvwdXhbd31J{margin-right:-11px;width:50%;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;height:40px}._3ba1JLDT0x0TvwdXhbd31J,._3F_SuAN5p2_KeieRfHavBJ{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:hidden}._3F_SuAN5p2_KeieRfHavBJ{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%}._3F_SuAN5p2_KeieRfHavBJ span{height:100%}._3qJTmxst64LW0ppYgaaTBx{color:"+a("tqgT").locals.giphyGrey+";padding-left:.4em;text-transform:none;font-size:14px;white-space:pre;font-family:interface;font-weight:700}._3qJTmxst64LW0ppYgaaTBx:before{content:attr(data-gif-count)}._1tC4x8EVRYexJOIk8Qk0Ee{font-family:"+a("i5rD").locals.bodyFont+";height:36px;font-size:14px;font-weight:900;letter-spacing:.01em;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}._1oun7lB_e5Bb3IrBzxSSDI{width:100%}._1joCyQyFZDllCQ7TBLupjn{font-weight:300;padding-bottom:12px}._3fFmgf5gRB5kJlTOOAsZsQ{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;width:100%}._2l1sQndCg2176y3qc8tjOE,._3fFmgf5gRB5kJlTOOAsZsQ{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal}._2l1sQndCg2176y3qc8tjOE{-webkit-animation:_2WPHjQmOoqM3muqfNg0LeC .3s ease-in-out 0s 1 normal backwards;animation:_2WPHjQmOoqM3muqfNg0LeC .3s ease-in-out 0s 1 normal backwards;font-size:16px;-webkit-box-align:stretch;-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch;max-width:210px;margin-right:60px;height:55px;float:left;position:relative;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;overflow:hidden}._2l1sQndCg2176y3qc8tjOE:nth-child(2n){-webkit-animation-delay:.05s;animation-delay:.05s}._2l1sQndCg2176y3qc8tjOE:nth-child(3n){-webkit-animation-delay:.1s;animation-delay:.1s}._2l1sQndCg2176y3qc8tjOE:nth-child(4n){-webkit-animation-delay:.15s;animation-delay:.15s}._2l1sQndCg2176y3qc8tjOE:last-of-type{margin:0}._1SkEvS1Wyz6ssWu1gFza1v{color:"+a("tqgT").locals.giphyWhite+";font-size:16px;line-height:16px;max-height:33px;position:relative;overflow:hidden}@supports (-webkit-line-clamp:2){._1SkEvS1Wyz6ssWu1gFza1v{text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}}._45SEXdhbFXDc__pvWoH88{float:left;top:-7px}._2X1DMd0VRYT8rCj5-oWv-a{color:"+a("tqgT").locals.giphyAqua+"}._3glAvgobuq9AWmeVdsM6kR{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;margin-top:10px}._3kJRuxZOyBBK2T_RZ2Vwvc{display:block;margin-bottom:-6px}.AxLCMHQpN30nKiMWTtaLB{position:relative;padding-right:20px;height:16px}@-webkit-keyframes _2WPHjQmOoqM3muqfNg0LeC{0%{opacity:0;-webkit-transform:translateY(60px);transform:translateY(60px)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes _2WPHjQmOoqM3muqfNg0LeC{0%{opacity:0;-webkit-transform:translateY(60px);transform:translateY(60px)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}",""]),t.locals={colors:"'shared/css/colors.css'",giphyWhite:""+a("tqgT").locals.giphyWhite,giphyDarkGrey:""+a("tqgT").locals.giphyDarkGrey,giphyGrey:""+a("tqgT").locals.giphyGrey,giphyAqua:""+a("tqgT").locals.giphyAqua,fonts:"'shared/css/fonts.css'",bodyFont:""+a("i5rD").locals.bodyFont,typography:"'shared/css/typography.css'",bodyBold:""+a("zojF").locals.bodyBold,autoPlayLabel:""+a("zojF").locals.autoPlayLabel,sectionHeading:""+a("zojF").locals.sectionHeading,mainTitle:""+a("zojF").locals.mainTitle,gifTitleMobile:""+a("zojF").locals.gifTitleMobile,carousel:"'shared/components/carousel/carousel.css'",carouselItemWrapper:""+a("D4+e").locals.carouselItemWrapper,username:"_3dLOB3rLbGEEo5h8-PwvwQ",searchTerm:"_1c28EcNje6C468vi0jO0Uk "+a("zojF").locals.mainTitle,exploreResults:"_3RQeLpXgzHp_6Bo2oOVY3O",results:"_3nBtKjCQJGwV5q-PVpsTsz _3RQeLpXgzHp_6Bo2oOVY3O",noResults:"_3Pso07QCmjZWmt4UMB0H1k",sparseTermState:"VeCbBh4fXHfCHfzFs5sEq",upperHeader:"_2SJKKTR1aMK3kUasjbiVwE",middleHeader:"_2KW2EZ0x9ETjF10-OOlEen",exploreHeader:"_1SJi8Dg53PK_QXhegdrab4",header:"_1lWXeFze5mAi0tX3MEHDwZ _1SJi8Dg53PK_QXhegdrab4",autoPlayHeader:"AQ_792pSYn88mX0IpskqI _1lWXeFze5mAi0tX3MEHDwZ _1SJi8Dg53PK_QXhegdrab4",sort:"_3Y1rHoZDYmvxc4OJeep7Q",sortLink:"_1OjiPPKU8lQXHH4B25Q1wA",activeSortLink:"_2rO4v1KuRJjfee1giAZGJE _1OjiPPKU8lQXHH4B25Q1wA",autoplay:"_2wFcxUUCXjkuyyVIRaMxxp",autoplayLabel:"hEGATzrt7MWMXRBpD6gbW "+a("zojF").locals.autoPlayLabel,listTitle:"LHoxLypLqn7OiSy_eecgR "+a("zojF").locals.autoPlayLabel,termSuggestionContainer:"_3ba1JLDT0x0TvwdXhbd31J",suggestions:"_3F_SuAN5p2_KeieRfHavBJ",number:"_3qJTmxst64LW0ppYgaaTBx",searchType:"_1tC4x8EVRYexJOIk8Qk0Ee",fullWidth:"_1oun7lB_e5Bb3IrBzxSSDI",channelsCountTitle:"_1joCyQyFZDllCQ7TBLupjn "+a("zojF").locals.sectionHeading,channelsResults:"_3fFmgf5gRB5kJlTOOAsZsQ",channelContainer:"_2l1sQndCg2176y3qc8tjOE",channelIn:"_2WPHjQmOoqM3muqfNg0LeC",channelsTitle:"_1SkEvS1Wyz6ssWu1gFza1v "+a("zojF").locals.bodyBold,searchTypeToggle:"_45SEXdhbFXDc__pvWoH88",highlight:"_2X1DMd0VRYT8rCj5-oWv-a",exploreUpperHeader:"_3glAvgobuq9AWmeVdsM6kR",exploreSearchTerm:"_3kJRuxZOyBBK2T_RZ2Vwvc "+a("zojF").locals.mainTitle,usernameWrapper:"AxLCMHQpN30nKiMWTtaLB"}},UtPJ:function(e,t,a){"use strict";var r,i,n,s,o=a("Xxa5"),l=a.n(o),c=a("exGp"),p=a.n(c),u=a("Zrlr"),m=a.n(u),f=a("zwoO"),d=a.n(f),g=a("Pf15"),h=a.n(g),y=a("2247"),b=a.n(y),k=a("KSGD"),v=a.n(k),x=a("GiK3"),w=a.n(x),E=a("oDJa"),_=a("WPko"),T=a.n(_),I=a("askH"),S=a("F5L9"),j=(r=Object(S.a)())((s=n=function(e){function t(){return m()(this,t),d()(this,e.apply(this,arguments))}return h()(t,e),t.prototype.click=function(){var e=this.props,t=e.name,a=e.analytics,r=a.action,i=a.category;Object(E.b)({category:i,action:r,label:t}),this.props.pingBackFunctions.onClick(this.props)},t.prototype.onHover=function(){this.props.pingBackFunctions.onHover(this.props)},t.prototype.render=function(){var e=this,t=this.props,a=t.name,r=t.isSticker,i=-1===a.indexOf("sticker");return w.a.createElement("a",{ref:function(t){e.el=t},className:T.a.pill,href:r&&i?Object(I.c)(a,!0):Object(I.c)(a),onClick:function(t){return e.click(t)},onMouseEnter:function(){return e.onHover()}},w.a.createElement("h3",{className:T.a.tag},"#"+a))},t}(w.a.PureComponent),n.propTypes={name:v.a.string.isRequired,analytics:v.a.object.isRequired},i=s))||i,R=a("O1wm"),O=a("eNk5"),P=a("vZH+");a.d(t,"a",function(){return A});var F,C,A=(C=F=function(e){function t(){var a,r,i;m()(this,t);for(var n=arguments.length,s=Array(n),o=0;o<n;o++)s[o]=arguments[o];return a=r=d()(this,e.call.apply(e,[this].concat(s))),r.state={suggestedTerms:[]},i=a,d()(r,i)}return h()(t,e),t.prototype.getTerms=function(){function e(){return t.apply(this,arguments)}var t=p()(l.a.mark(function e(){var t,a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(R.z)(this.props.term);case 3:t=e.sent,a=t.data,this.setState({suggestedTerms:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),O.a.error(e.t0);case 11:case"end":return e.stop()}},e,this,[[0,8]])}));return e}(),t.prototype.componentDidUpdate=function(e){e.term!==this.props.term&&this.getTerms()},t.prototype.componentDidMount=function(){this.getTerms()},t.prototype.render=function(){var e=this.props,t=e.css,a=e.isSticker,r=e.searchResponseId,i=this.state.suggestedTerms,n={category:"Search Page",action:"Related Searches Click"};return i.length?w.a.createElement("div",{className:t.termSuggestionContainer},w.a.createElement("div",{className:t.suggestions},b()(i,function(e,t){return w.a.createElement(j,{index:t,name:e.name,isSticker:a,key:t,analytics:n,pingbackAnalytics:{component:"SUGGESTED_SEARCH",data:[{key:"suggest_term",value:e.name}],pingbackRequest:P.c,searchResponseId:r,needToCheckForOverflow:!0}})}))):w.a.createElement("div",{className:t.sparseTermState})},t}(w.a.PureComponent),F.propTypes={term:v.a.string.isRequired,css:v.a.object,isSticker:v.a.bool,isMobile:v.a.bool,searchResponseId:v.a.string},C)},Xapw:function(e,t,a){"use strict";var r=a("Zrlr"),i=a.n(r),n=a("zwoO"),s=a.n(n),o=a("Pf15"),l=a.n(o),c=a("GiK3"),p=a.n(c),u=a("3QWa"),m=a("4Q1c"),f=a.n(m),d=function(e){return function(t){var a=function(a){function r(){var e,t,n;i()(this,r);for(var o=arguments.length,l=Array(o),c=0;c<o;c++)l[c]=arguments[c];return e=t=s()(this,a.call.apply(a,[this].concat(l))),t.chromeLocalStorageIsFull=22,t.fireFoxLocalStorageIsFull=1014,t.localStorageIsFullErrorCodes=[t.chromeLocalStorageIsFull,t.fireFoxLocalStorageIsFull],t.state={valueExists:!1},n=e,s()(t,n)}return l()(r,a),r.prototype.componentWillMount=function(){try{var t=localStorage.getItem(e);this.setState({valueExists:t}),t||localStorage.setItem(e,!0)}catch(e){var a=e.code;return this.localStorageIsFullErrorCodes.includes(a)?console.error("localStorage is full. Element will be renderd by default.",e):console.error(e)}},r.prototype.render=function(){return this.state.valueExists?null:p.a.createElement(t,this.props)},r}(c.Component);return a.displayName="HideAfterFirstTimeShown ("+f()(t)+")",a}},g=d,h=a("rEMR"),y=a.n(h);a.d(t,"a",function(){return v});var b,k,v=(b=g("giphy:search:tooltip"))(k=function(e){function t(){var a,r,n;i()(this,t);for(var o=arguments.length,l=Array(o),c=0;c<o;c++)l[c]=arguments[c];return a=r=s()(this,e.call.apply(e,[this].concat(l))),r.state={hasSeen:!1},n=a,s()(r,n)}return l()(t,e),t.prototype.render=function(){var e=this;return this.state.hasSeen?null:p.a.createElement(u.a,{className:y.a.toolTip,position:"top"},p.a.createElement("p",{className:y.a.content},"New stuff! Switch between searching for GIFs and stickers."),p.a.createElement("button",{className:y.a.confirmation,onClick:function(){return e.setState({hasSeen:!0})}},"Got it"))},t}(c.Component))||k},bnwa:function(e,t,a){var r=a("ApAJ");"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0};i.transform=void 0,a("MTIv")(r,i),r.locals&&(e.exports=r.locals)},rEMR:function(e,t,a){var r=a("Rjtu");"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0};i.transform=void 0,a("MTIv")(r,i),r.locals&&(e.exports=r.locals)},rgeD:function(e,t,a){"use strict";a.d(t,"b",function(){return g}),a.d(t,"a",function(){return h});var r=a("Zrlr"),i=a.n(r),n=a("zwoO"),s=a.n(n),o=a("Pf15"),l=a.n(o),c=a("GiK3"),p=a.n(c),u=a("KSGD"),m=(a.n(u),a("+ZfR")),f=a.n(m),d=a("CkGE"),g=(a.n(d),function(e){for(var t=e.toLowerCase().split(" "),a=["weed","pot","420","smoke","blunt","joint","trippy","giphynambot","munchies","bong","marijuana","snoop","spliff","high","stoned","stoner","loud","tripping","acid","lsd","psychedelic","doobie","drugs","dank","edibles","cannabis","maryjane","ganja"],r=!1,i=0;i<a.length;i++)!r&&t.indexOf(a[i])>-1&&(r=!0);return r}),h=function(e){function t(){var a,r,n;i()(this,t);for(var o=arguments.length,l=Array(o),c=0;c<o;c++)l[c]=arguments[c];return a=r=s()(this,e.call.apply(e,[this].concat(l))),r.state={isPuffin:!1,isDoobin:!1,isHoppin:!1},r.puffinTimeout=null,n=a,s()(r,n)}return l()(t,e),t.prototype.componentWillUnmount=function(){document.body.dataset.trippin=!1,clearTimeout(this.puffinTimeout)},t.prototype.componentDidUpdate=function(e,t){var a=this,r=this.state.isDoobin;t.isDoobin!==r&&(clearTimeout(this.puffinTimeout),this.setState({isHoppin:!0,isPuffin:!0}),this.puffinTimeout=setTimeout(function(){return a.resetHop()},600))},t.prototype.toggleWizard=function(){var e=this.state.isDoobin;this.setState({isDoobin:!e})},t.prototype.resetHop=function(){var e=this,t=this.state.isDoobin;this.setState({isHoppin:!1}),clearTimeout(this.puffinTimeout),this.puffinTimeout=setTimeout(function(){return e.resetPuff()},800),document.body.dataset.trippin=t},t.prototype.resetPuff=function(){this.setState({isPuffin:!1,isHoppin:!1})},t.prototype.render=function(){var e=this,t=this.state,a=t.isDoobin,r=t.isPuffin,i=t.isHoppin,n=a?f.a.wizStoned:f.a.wiz;return n=i?f.a.wizPuff:n,p.a.createElement("div",{className:f.a.container},r&&p.a.createElement("div",{className:f.a.puff}),p.a.createElement("div",{className:n,onClick:function(){return e.toggleWizard()}}))},t}(c.PureComponent)},wTCX:function(e,t,a){var r=a("UnGz");"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0};i.transform=void 0,a("MTIv")(r,i),r.locals&&(e.exports=r.locals)}},["1jop"]);
//# sourceMappingURL=search.654b5b98.bundle.js.map