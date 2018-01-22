/*! 291-8-RELEASE 2018-01-21 */
!function(win,doc){win.TRC=win.TRC||{},TRC.useStorageDetection=TRC.useStorageDetection||!0,TRC.text=TRC.text||{},TRC.text.lsplit=TRC.text.lsplit||function(a,b,c){var d=a.split(b);return d.slice(0,c-1).concat(d.length>=c?d.slice(c-1).join(b):[])},TRC.util=TRC.util||{},TRC.util.jsonParseWithNative=TRC.util.jsonParseWithNative||function(a){try{return JSON.parse(a)}catch(b){return TRC.util.jsonParseWithEval(a)}},TRC.util.jsonParseWithEval=TRC.util.jsonParseWithEval||function(text){try{return eval("("+String(text)+")")}catch(e){throw new Error("JSON parse error - invalid input!")}},win.TRCImpl=win.TRCImpl||{},TRCImpl.global=TRCImpl.global||{},win.__trcError=win.__trcError||function(){},win.__trcJSONify=win.__trcJSONify||function(a){function b(a){return'"'+a.replace(/[\s\S]/g,function(a){switch(a){case'"':return'\\"';case"\\":return"\\\\";case"\n":return"\\n";case"\r":return"\\r"}return a})+'"'}function c(a){for(var b=[],c=0;c<a.length;c++)b[c]=__trcJSONify(a[c]);return b}function d(a){var c=[];for(var d in a)a.hasOwnProperty(d)&&c.push(b(d)+":"+__trcJSONify(a[d]));return c}return a instanceof Array?"["+c(a).join(",")+"]":a instanceof Object?"{"+d(a).join(",")+"}":null===a?"null":"string"==typeof a?b(a):"undefined"==typeof a?"undefined":a.toString()}}(window,document),function(a,b){function c(){function a(){var a,d,e=new Array;for(var f in c)c.hasOwnProperty(f)&&null!=c[f]&&(e[e.length]=escape(f)+"="+escape(c[f]));a=e.length>0?1:-1,d=new Date((new Date).getTime()+365*a*864e5),document.cookie=b+"="+escape(e.join("|"))+";path=/;expires="+d.toUTCString()}for(var b="trc_cookie_storage",c=new Object,d=document.cookie.split(/;\s+/),e=0;e<d.length;e++){var f=TRC.text.lsplit(d[e],"=",2),g=unescape(f[0]),h=unescape(f[1]);if(g==b){for(var i=h.split("|"),j=0;j<i.length;j++){var f=i[j].split("=");c[unescape(f[0])]=unescape(f[1])}break}}return this.getValue=function(a){return c.hasOwnProperty(a)?c[a]:null},this.setValue=function(b,d){c[b]=d,a()},this.removeKey=function(b){delete c[b],a()},this}function d(a){var b=a||{};return this.getValue=function(a){return b[a]?b[a]:null},this.setValue=function(a,c){b[a]=c},this.removeKey=function(a){delete b[a]},this.getData=function(){return b},this}function e(b){return this.getValue=function(c){return a[b+"Storage"].getItem(c)},this.setValue=function(c,d){try{a[b+"Storage"].setItem(c,d)}catch(e){}},this.removeKey=function(c){try{a[b+"Storage"].removeItem(c)}catch(d){}},this}function f(b){var c=a[b+"Storage"],d=(new Date).getTime()+"",e="_taboolaStorageDetection";try{if(c.setItem(e,d),c.getItem(e)==d)return c.removeItem(e),c}catch(f){}return null}function g(b){try{if(a.localStorage instanceof Storage&&TRC.useStorageDetection&&f(b))return new e(b)}catch(c){return null}}var h="taboola global",i=function(){return this.state={},this.getLocalStorageImplementation=function(b,e){if(null!=this.state.privateStorageImpl&&"strict-w3c-storage"!=b)return this.state.privateStorageImpl;var f=a.TRCImpl?a.TRCImpl.global:{};switch(b=b||(f["local-storage-usage"]?f["local-storage-usage"]:"prefer-w3c-storage")){case"strict-w3c-storage":return g("session"===e?"session":"local");case"prefer-w3c-storage":var h=g("local");if(h)return this.state.privateStorageImpl=h;case"prefer-cookies":try{if(this.canWriteCookies())return this.state.privateStorageImpl=new c}catch(i){}default:return this.state.privateStorageImpl=new d}},this.getFirstPartyCookie=function(){if(this.state.firstPartyCookie)return this.state.firstPartyCookie;var a=this.getLocalStorageImplementation();if(a instanceof c||a instanceof d)return this.state.firstPartyCookie=a;try{if(this.canWriteCookies())return this.state.firstPartyCookie=new c}catch(b){}return this.state.firstPartyCookie=new d},this.canWriteCookies=function(){return document.cookie="trctestcookie=ok",-1!==document.cookie.indexOf("trctestcookie")},this.getDummyStorage=function(a){return new d(a)},this.getValue=function(a){return this.getPublisherValue(h,a)},this.storePublisherValue=function(a,b,c){var d;this.isNotAllowedToWriteValue(b,c)||(d=this.buildKeyWithPublisher(a,b),this.getLocalStorageImplementation().setValue(d,c),this.addKeyToStoredKeysList(d))},this.isNotAllowedToWriteValue=function(a,b){return null==b||void 0==b||TRC.doNotTrack&&!this.isAllowedKeyWhenDoNotTrack(a)},this.buildKeyWithPublisher=function(a,b){return a+":"+b},this.getPublisherValue=function(a,b){return TRC.doNotTrack&&!this.isAllowedKeyWhenDoNotTrack(b)?null:this.getLocalStorageImplementation().getValue(this.buildKeyWithPublisher(a,b))},this.addKeyToStoredKeysList=function(a){var b=this.getStoredKeysList();-1===b.indexOf(a)&&(b.push(a),this.setStoredKeysList(b))},this.getStoredKeysList=function(){var a,b=this.getLocalStorageImplementation().getValue(this.buildKeyWithPublisher(h,"local-storage-keys"));try{a=TRC.util.jsonParseWithNative(b)||[]}catch(c){a=[],__trcError("Could not parse local storage keys",c)}return a},this.setStoredKeysList=function(a){var b;try{b=__trcJSONify(a),this.getLocalStorageImplementation().setValue(this.buildKeyWithPublisher(h,"local-storage-keys"),b)}catch(c){return void __trcError("Could not stringify local storage keys",c)}},this.isAllowedKeyWhenDoNotTrack=function(b){var c,d=a.TRCImpl?a.TRCImpl.global||{}:{},e=d["dnt-allowed-keys"]||["session-id","trc_css-isolation"];return null===b||void 0===b?!1:(c=b.split(":")[1]||b,-1!==e.indexOf(c))},this.storeUserId=function(a,b){this.isNotAllowedToWriteValue("user-id",a)||(this.storePublisherValue(h,"user-id",a),(TRCImpl.global["store-userid-first-party-cookie"]||b)&&this.getFirstPartyCookie()!==this.getLocalStorageImplementation()&&this.getFirstPartyCookie().setValue(this.buildKeyWithPublisher(h,"user-id"),a))},this.getUserIdFirstPartyCookie=function(){return this.getFirstPartyCookie().getValue(this.buildKeyWithPublisher(h,"user-id"))},this.initState=function(){"undefined"==typeof this.state&&(this.state={}),this.state.privateStorageImpl=null},this.initState(),this};TRC.tfaPageManager=TRC.tfaPageManager||new i}(window,document),function(a,b){var c=TRC.pageManager||TRC.tfaPageManager;TRC.tfaUserId={initialized:!1,userId:null,getUserId:function(){return this.userId},readAndStoreUserId:function(){var a=this.extractUserIdFromReferrer(),b=c.getValue("user-id"),d=c.getUserIdFirstPartyCookie(),e=!0;a&&c.storeUserId(a,e),this.userId=a||b||d},extractUserIdFromReferrer:function(){var a=this.getReferrer();return a&&a.indexOf("taboola")>-1?this.getParameterByName("ui",a):void 0},getReferrer:function(){return b.referrer},getParameterByName:function(a,b){if(!b||!a)return null;a=a.replace(/[\[\]]/g,"\\$&");var c=new RegExp("[?&]"+a+"(=([^&#]*)|&|#|$)"),d=c.exec(b);return d?d[2]?decodeURIComponent(d[2].replace(/\+/g," ")):"":null},init:function(){this.initialized||(this.readAndStoreUserId(),this.initialized=!0)}},TRC.tfaUserId.init()}(window,document),function(a,b){function c(a){return"action"===a.notify?void x.push(a):void("mark"===a.notify&&y.push(a))}function d(){return TRC&&TRC.tfaUserId&&TRC.tfaUserId.getUserId()?"&ui="+encodeURIComponent(TRC.tfaUserId.getUserId()):""}function e(){var a,b,c=m();if(c)for(a=0,b=x.length;b>a;a++)h(g(v,{$publishreId:c?c+"/":"",$logType:"action"})+"tim="+escape(j())+"&item-url="+escape(i())+n(t,x.shift())+k()+d())}function f(){var a,b,c=m();if(c)for(a=0,b=y.length;b>a;a++)h(g(v,{$publishreId:c?c+"/":"",$logType:"mark"})+"tim="+escape(j())+"&item-url="+escape(i())+n(u,y.shift())+k()+d())}function g(a,b){return a.replace(/\{([^{}]*)\}/g,function(a,c){var d=b[c];return"string"==typeof d||"number"==typeof d?d:a})}function h(a){var b=new Image;b.src=a}function i(){return a.location.href}function j(){var a=new Date,b=a.getHours(),c=a.getMinutes(),d=a.getSeconds()+a.getMilliseconds()/1e3;return(10>b?"0":"")+b+":"+(10>c?"0":"")+c+":"+(10>d?"0":"")+d.toFixed(3)}function k(){var c=a.location.search,d=b.referrer.match(/(\?\S+)$/g),e="";return e=l(c.replace(/^\?/,"").split(/&/))+(d?l(d[0].replace(/^\?/,"").split(/&/)):"")}function l(a){var b,c,d="",e="trc_";for(b=0,c=a.length;c>b;b++)0==a[b].indexOf(e)&&(d=d+"&"+a[b]);return d}function m(){var a,b,c,d=document.getElementsByTagName("script"),e="";for(a=0,b=d.length;b>a;a++)if(c=d[a].src,e=c.replace(w,"$3"),d[a].src&&e!==d[a].src)return e;return e}function n(a,b){var c,d="";for(c in a)void 0!==b[c]&&(d+="&"+a[c]+"="+b[c]);return d}function o(a){for(var b=0;b<arguments.length;b++)a=arguments[b],a instanceof Object&&c(a);return p(),arguments.length}function p(){e(),f()}function q(){for(;queue.length;)o(queue.shift())}function r(){queue=a[s]=a[s]||[],queue.registered||(queue.push=o,queue.registered=!0,q())}var s="_tfa",t={orderid:"orderid",currency:"currency",revenue:"revenue",quantity:"quantity",name:"name",attributionGroup:"attributionGroup"},u={type:"marking-type"},v=(a.location.protocol.match(/http/)?a.location.protocol:"http:")+"//trc.taboola.com/{$publishreId}log/3/{$logType}?",w=/(\S+)taboola(\S+|)\.com\/libtrc\/(\S+)\/tfa\.js(\S+|)/,x=[],y=[];a._trcIsUTactive?(a.tfaObject={},tfaObject.dispatchMessage=c,tfaObject.pushMessage=o,tfaObject.getMapQueryString=n,tfaObject.getPublisherId=m,tfaObject.getClientTimestamp=j,tfaObject.doActions=e,tfaObject.dispatchMessage=c):r()}(window,document);