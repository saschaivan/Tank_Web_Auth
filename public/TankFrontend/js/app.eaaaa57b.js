(function(e){function t(t){for(var r,a,c=t[0],i=t[1],s=t[2],f=0,l=[];f<c.length;f++)a=c[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&l.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(l.length)l.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},u=[];function c(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"bdda108c","chunk-2feb2de5":"0a711fe6"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={about:1,"chunk-2feb2de5":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"d5e9c72d","chunk-2feb2de5":"b41b1100"}[e]+".css",o=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var s=u[c],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===o))return t()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){s=l[c],f=s.getAttribute("data-href");if(f===r||f===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete a[e],p.parentNode.removeChild(p),n(u)},p.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=u);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=c(e);var l=new Error;s=function(t){f.onerror=f.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}o[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var p=f;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("router-view")],1)},o=[],u=(n("96cf"),n("1da1")),c={created:function(){var e=this;this.$workbox&&this.$workbox.addEventListener("waiting",(function(){e.showUpgradeUI=!0}))},methods:{accept:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.showUpgradeUI=!1,t.next=3,e.$workbox.messageSW({type:"SKIP_WAITING"});case 3:case"end":return t.stop()}}),t)})))()}}},i=c,s=(n("034f"),n("2877")),f=n("6544"),l=n.n(f),p=n("7496"),d=Object(s["a"])(i,a,o,!1,null,null,null),m=d.exports;l()(d,{VApp:p["a"]});n("d3b7");var h=n("8c4f"),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{id:"menucontainer"}},[n("Header"),n("v-row",[n("button",{staticClass:"menubutton",on:{click:function(t){e.getGame(),e.getMapCoordinates()}}},[e._v("Start")])]),n("v-row",[n("button",{staticClass:"menubutton",on:{click:function(t){return e.$router.push("about")}}},[e._v("About")])]),n("Footer")],1)},b=[],g=n("5530"),w=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},k=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"Tank-header"}},[n("h1",[e._v(" Tank ")])])}],j={name:"Header"},y=j,x=(n("e0f2"),Object(s["a"])(y,w,k,!1,null,"0b3e8254",null)),O=x.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-footer",{attrs:{dark:"",absolute:"",padless:""}},[n("v-card",{staticClass:"flex",attrs:{height:"50"}},[n("v-card-text",{staticClass:"text-center"},[n("span",[e._v(" More information about "),n("a",{attrs:{href:"https://github.com/saschaivan/Tank",target:"_blank"}},[e._v(" Tank Game ")])]),n("span",[e._v(" More information about "),n("a",{attrs:{href:"https://github.com/saschaivan/Tank_Web",target:"_blank"}},[e._v(" Tank Server ")])])])],1)],1)},G=[],M={name:"Footer"},T=M,E=(n("755d"),n("b0af")),C=n("99d9"),R=n("553a"),S=Object(s["a"])(T,_,G,!1,null,"ad4c04da",null),$=S.exports;l()(S,{VCard:E["a"],VCardText:C["a"],VFooter:R["a"]});var P=n("2f62"),A={name:"TankMenu",components:{Footer:$,Header:O},computed:Object(g["a"])(Object(g["a"])({},Object(P["c"])({Game:"Game"})),Object(P["c"])({Map:"Map"})),methods:Object(g["a"])(Object(g["a"])({},Object(P["b"])({getGame:"getGame"})),Object(P["b"])({getMapCoordinates:"getMapCoordinates"})),watch:{Game:function(){this.$router.push("game")},Map:function(){this.$router.push("game")}}},U=A,L=n("a523"),I=n("0fd9"),N=Object(s["a"])(U,v,b,!1,null,null,null),V=N.exports;l()(N,{VContainer:L["a"],VRow:I["a"]}),r["a"].use(h["a"]);var F=[{path:"/",name:"MainMenu",component:V},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/game",name:"Game",component:function(){return n.e("chunk-2feb2de5").then(n.bind(null,"86a9"))}}],H=new h["a"]({routes:F}),W=H;n("25f0");r["a"].use(P["a"]);var B={Game:{},Map:{},Update:{}},q={Game:function(e){return e.Game},Map:function(e){return e.Map},Update:function(e){return e.Update}},D={loadGame:function(e,t){e.Game=t},loadMap:function(e,t){e.Map=t},updateGame:function(e,t){e.Update=t}},J={getGame:function(e){return Object(u["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,fetch("http://localhost:9000/game/json",{method:"GET",credentials:"same-origin"}).then(function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:r=e.sent,n("loadGame",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return t.stop()}}),t)})))()},getMapCoordinates:function(e){return Object(u["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,fetch("http://localhost:9000/game/mapcoordinates",{method:"GET",credentials:"same-origin"}).then(function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:r=e.sent,n("loadMap",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return t.stop()}}),t)})))()},updateGame:function(e,t){return Object(u["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,a=t.direction,n.next=4,fetch("http://localhost:9000/game/"+a.toString(),{method:"GET",credentials:"same-origin"}).then(function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:n=e.sent,r("updateGame",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 4:case"end":return n.stop()}}),n)})))()}},K=new P["a"].Store({state:B,getters:q,actions:J,mutations:D}),z=n("f309");r["a"].use(z["a"]);var Q,X=new z["a"]({}),Y=n("acfa");"serviceWorker"in navigator?(Q=new Y["a"]("".concat("","service-worker.js")),Q.addEventListener("controlling",(function(){window.location.reload()})),Q.register()):Q=null;var Z=Q;r["a"].prototype.$workbox=Z,r["a"].config.productionTip=!1,new r["a"]({router:W,store:K,vuetify:X,render:function(e){return e(m)}}).$mount("#app")},"63ee":function(e,t,n){},"755d":function(e,t,n){"use strict";n("63ee")},"85ec":function(e,t,n){},e0f2:function(e,t,n){"use strict";n("e5fc")},e5fc:function(e,t,n){}});
//# sourceMappingURL=app.eaaaa57b.js.map