(function(e){function t(t){for(var r,a,c=t[0],i=t[1],s=t[2],p=0,f=[];p<c.length;p++)a=c[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(f.length)f.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},u=[];function c(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"10c0c977","chunk-1ee3b0e7":"d3881638"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={about:1,"chunk-1ee3b0e7":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"d5e9c72d","chunk-1ee3b0e7":"b41b1100"}[e]+".css",o=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var s=u[c],p=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(p===r||p===o))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){s=f[c],p=s.getAttribute("data-href");if(p===r||p===o)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],l.parentNode.removeChild(l),n(u)},l.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(l)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=u);var s,p=document.createElement("script");p.charset="utf-8",p.timeout=120,i.nc&&p.setAttribute("nonce",i.nc),p.src=c(e);var f=new Error;s=function(t){p.onerror=p.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:p})}),12e4);p.onerror=p.onload=s,document.head.appendChild(p)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/Tank/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],p=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var l=p;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("router-view")],1)},o=[],u={created:function(){var e=this;this.$workbox&&this.$workbox.addEventListener("waiting",(function(){e.showUpdateUI=!0}))}},c=u,i=(n("034f"),n("2877")),s=n("6544"),p=n.n(s),f=n("7496"),l=Object(i["a"])(c,a,o,!1,null,null,null),d=l.exports;p()(l,{VApp:f["a"]});n("d3b7");var m=n("8c4f"),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{id:"menucontainer"}},[n("Header"),n("v-row",[n("button",{staticClass:"menubutton",on:{click:function(t){e.getGame(),e.getMapCoordinates()}}},[e._v("Start")])]),n("v-row",[n("button",{staticClass:"menubutton",on:{click:function(t){return e.$router.push("about")}}},[e._v("About")])]),n("Footer")],1)},v=[],b=n("5530"),g=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},w=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"Tank-header"}},[n("h1",[e._v(" Tank ")])])}],k={name:"Header"},j=k,y=(n("e0f2"),Object(i["a"])(j,g,w,!1,null,"0b3e8254",null)),x=y.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-footer",{attrs:{dark:"",absolute:"",padless:""}},[n("v-card",{staticClass:"flex",attrs:{height:"50"}},[n("v-card-text",{staticClass:"text-center"},[n("span",[e._v(" More information about "),n("a",{attrs:{href:"https://github.com/saschaivan/Tank",target:"_blank"}},[e._v(" Tank Game ")])]),n("span",[e._v(" More information about "),n("a",{attrs:{href:"https://github.com/saschaivan/Tank_Web",target:"_blank"}},[e._v(" Tank Server ")])])])],1)],1)},_=[],M={name:"Footer"},G=M,T=(n("755d"),n("b0af")),E=n("99d9"),C=n("553a"),R=Object(i["a"])(G,O,_,!1,null,"ad4c04da",null),S=R.exports;p()(R,{VCard:T["a"],VCardText:E["a"],VFooter:C["a"]});var $=n("2f62"),P={name:"TankMenu",components:{Footer:S,Header:x},computed:Object(b["a"])(Object(b["a"])({},Object($["c"])({Game:"Game"})),Object($["c"])({Map:"Map"})),methods:Object(b["a"])(Object(b["a"])({},Object($["b"])({getGame:"getGame"})),Object($["b"])({getMapCoordinates:"getMapCoordinates"})),watch:{Game:function(){this.$router.push("game")},Map:function(){this.$router.push("game")}}},A=P,L=n("a523"),U=n("0fd9"),V=Object(i["a"])(A,h,v,!1,null,null,null),F=V.exports;p()(V,{VContainer:L["a"],VRow:U["a"]}),r["a"].use(m["a"]);var N=[{path:"/",name:"MainMenu",component:F},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/game",name:"Game",component:function(){return n.e("chunk-1ee3b0e7").then(n.bind(null,"86a9"))}}],H=new m["a"]({routes:N}),B=H,q=(n("25f0"),n("96cf"),n("1da1"));r["a"].use($["a"]);var D={Game:{},Map:{},Update:{}},I={Game:function(e){return e.Game},Map:function(e){return e.Map},Update:function(e){return e.Update}},J={loadGame:function(e,t){e.Game=t},loadMap:function(e,t){e.Map=t},updateGame:function(e,t){e.Update=t}},W={getGame:function(e){return Object(q["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,fetch("https://tank-web.herokuapp.com/game/json",{method:"GET",credentials:"same-origin"}).then(function(){var e=Object(q["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:r=e.sent,n("loadGame",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return t.stop()}}),t)})))()},getMapCoordinates:function(e){return Object(q["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,fetch("https://tank-web.herokuapp.com/game/mapcoordinates",{method:"GET",credentials:"same-origin"}).then(function(){var e=Object(q["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:r=e.sent,n("loadMap",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return t.stop()}}),t)})))()},updateGame:function(e,t){return Object(q["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,a=t.direction,n.next=4,fetch("https://tank-web.herokuapp.com/game/"+a.toString(),{method:"GET",credentials:"same-origin"}).then(function(){var e=Object(q["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:n=e.sent,r("updateGame",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 4:case"end":return n.stop()}}),n)})))()}},K=new $["a"].Store({state:D,getters:I,actions:W,mutations:J}),z=n("f309");r["a"].use(z["a"]);var Q,X=new z["a"]({}),Y=n("acfa");"serviceWorker"in navigator?(Q=new Y["a"]("".concat("/Tank/","service-worker.js")),Q.addEventListener("controlling",(function(){window.location.reload()})),Q.register()):Q=null;var Z=Q;r["a"].prototype.$workbox=Z,r["a"].config.productionTip=!1,new r["a"]({router:B,store:K,vuetify:X,render:function(e){return e(d)}}).$mount("#app")},"63ee":function(e,t,n){},"755d":function(e,t,n){"use strict";n("63ee")},"85ec":function(e,t,n){},e0f2:function(e,t,n){"use strict";n("e5fc")},e5fc:function(e,t,n){}});
//# sourceMappingURL=app.ac33e94c.js.map