(function(e){function n(n){for(var c,a,u=n[0],l=n[1],i=n[2],s=0,d=[];s<u.length;s++)a=u[s],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(c in l)Object.prototype.hasOwnProperty.call(l,c)&&(e[c]=l[c]);h&&h(n);while(d.length)d.shift()();return o.push.apply(o,i||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],c=!0,a=1;a<t.length;a++){var u=t[a];0!==r[u]&&(c=!1)}c&&(o.splice(n--,1),e=l(l.s=t[0]))}return e}var c={},a={app:0},r={app:0},o=[];function u(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-10f39a85":"0e644ab9","chunk-1fc14b77":"688ae567","chunk-2a8f1ba9":"6ea2d96f","chunk-2d20fb15":"b5bc1744","chunk-2d21a3d2":"058696d8","chunk-2d222708":"00651247","chunk-42e8be89":"d8592099","chunk-735e7a56":"65fe25cc","chunk-7e16e493":"c6b26379","chunk-88819d3c":"fba59eab","chunk-2d0bd9c1":"dae97570","chunk-2d0de184":"4f4ac0bc","chunk-c7990b84":"1fb5be22"}[e]+".js"}function l(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.e=function(e){var n=[],t={"chunk-2a8f1ba9":1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var c="css/"+({}[e]||e)+"."+{"chunk-10f39a85":"31d6cfe0","chunk-1fc14b77":"31d6cfe0","chunk-2a8f1ba9":"6680f48e","chunk-2d20fb15":"31d6cfe0","chunk-2d21a3d2":"31d6cfe0","chunk-2d222708":"31d6cfe0","chunk-42e8be89":"31d6cfe0","chunk-735e7a56":"31d6cfe0","chunk-7e16e493":"31d6cfe0","chunk-88819d3c":"31d6cfe0","chunk-2d0bd9c1":"31d6cfe0","chunk-2d0de184":"31d6cfe0","chunk-c7990b84":"31d6cfe0"}[e]+".css",r=l.p+c,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var i=o[u],s=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(s===c||s===r))return n()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){i=d[u],s=i.getAttribute("data-href");if(s===c||s===r)return n()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=n,h.onerror=function(n){var c=n&&n.target&&n.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=c,delete a[e],h.parentNode.removeChild(h),t(o)},h.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(h)})).then((function(){a[e]=0})));var c=r[e];if(0!==c)if(c)n.push(c[2]);else{var o=new Promise((function(n,t){c=r[e]=[n,t]}));n.push(c[2]=o);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=u(e);var d=new Error;i=function(n){s.onerror=s.onload=null,clearTimeout(h);var t=r[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+c+": "+a+")",d.name="ChunkLoadError",d.type=c,d.request=a,t[1](d)}r[e]=void 0}};var h=setTimeout((function(){i({type:"timeout",target:s})}),12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(n)},l.m=e,l.c=c,l.d=function(e,n,t){l.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,n){if(1&n&&(e=l(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)l.d(t,c,function(n){return e[n]}.bind(null,c));return t},l.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(n,"a",n),n},l.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},l.p="/ringring/dist/",l.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=n,i=i.slice();for(var d=0;d<i.length;d++)n(i[d]);var h=s;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var c=t("7a23"),a=t("bc3a"),r=t.n(a),o=t("2106"),u=t.n(o),l=t("7bb1"),i=t("3aa8"),s=t("cbdf"),d=t("9457");function h(e,n){var t=Object(c["A"])("router-view");return Object(c["v"])(),Object(c["d"])(t)}t("6a09");const p={};p.render=h;var f=p,b=(t("d3b7"),t("3ca3"),t("ddb0"),t("6c02")),v=Object(c["h"])("div",{class:"bg-overlay"},null,-1);function m(e,n,t,a,r,o){var u=Object(c["A"])("Nabvar"),l=Object(c["A"])("router-view");return Object(c["v"])(),Object(c["d"])(c["a"],null,[Object(c["h"])(u),v,Object(c["h"])(l)],64)}var g=Object(c["g"])("RingRing"),k={class:"navbar-nav"},O=Object(c["h"])("span",{class:"material-icons text-2xl"}," shopping_cart ",-1),j=Object(c["h"])("span",null,null,-1),y=Object(c["h"])("span",null,null,-1),w=Object(c["h"])("span",null,null,-1),P={class:"navbar-collapse",ref:"navbar"},_=Object(c["f"])('<ul><li class="nav-item"><a href="" class="nav-link"><p class="nav-number">01</p><p class="nav-title">Home</p><p class="nav-title-ch">首頁</p></a></li><li class="nav-item"><a href="" class="nav-link"><p class="nav-number">02</p><p class="nav-title">Products</p><p class="nav-title-ch">產品</p></a></li><li class="nav-item"><a href="" class="nav-link"><p class="nav-number">03</p><p class="nav-title">About</p><p class="nav-title-ch">關於<span class="font-design">RingRing</span></p></a></li><li class="nav-item"><a href="" class="nav-link"><p class="nav-number">04</p><p class="nav-title">Contact</p><p class="nav-title-ch">聯絡<span class="font-design">RingRing</span></p></a></li></ul>',1);function A(e,n,t,a,r,o){var u=Object(c["A"])("router-link");return Object(c["v"])(),Object(c["d"])("div",{class:["navbar",{"navbar-bg":r.scrollDown}]},[Object(c["h"])(u,{class:"logo",to:"/RingRing/shop"},{default:Object(c["K"])((function(){return[g]})),_:1}),Object(c["h"])("div",k,[Object(c["h"])(u,{class:"me-5",to:"/RingRing/cart"},{default:Object(c["K"])((function(){return[O]})),_:1}),Object(c["h"])("div",{class:"navbar-toggle",onClick:n[1]||(n[1]=function(){return o.openNav&&o.openNav.apply(o,arguments)}),ref:"toggle"},[j,y,w],512)]),Object(c["h"])("div",P,[_],512)],2)}var E={data:function(){return{scrollDown:!1}},methods:{openNav:function(){this.$refs.toggle.classList.toggle("open"),this.$refs.navbar.classList.toggle("open")},handleScroll:function(){window.scrollY>200?this.scrollDown=!0:this.scrollDown=!1}},created:function(){window.addEventListener("scroll",this.handleScroll)}};E.render=A;var S=E,N={components:{Nabvar:S}};N.render=m;var R=N,x=[{path:"/",name:"frontBoard",component:R,children:[{path:"home",name:"home",component:function(){return t.e("chunk-2d21a3d2").then(t.bind(null,"bb51"))}},{path:"shop",name:"shop",component:function(){return t.e("chunk-735e7a56").then(t.bind(null,"0fa5"))}},{path:"product/:id",name:"product",component:function(){return t.e("chunk-2a8f1ba9").then(t.bind(null,"d2f1"))}},{path:"cart",name:"cart",component:function(){return t.e("chunk-42e8be89").then(t.bind(null,"b789"))}},{path:"checkout",name:"checkout",component:function(){return t.e("chunk-7e16e493").then(t.bind(null,"7cb4"))}},{path:"check/:order",name:"check",component:function(){return Promise.all([t.e("chunk-88819d3c"),t.e("chunk-2d0de184")]).then(t.bind(null,"83d7"))}},{path:"final/:order",name:"final",component:function(){return Promise.all([t.e("chunk-88819d3c"),t.e("chunk-2d0bd9c1")]).then(t.bind(null,"2d70"))}}]},{path:"/login",name:"login",component:function(){return t.e("chunk-10f39a85").then(t.bind(null,"a55b"))}},{path:"/dashboard",name:"dashboard",component:function(){return t.e("chunk-1fc14b77").then(t.bind(null,"7e48"))},children:[{path:"newProduct",name:"newProduct",component:function(){return t.e("chunk-2d20fb15").then(t.bind(null,"b55a"))}},{path:"admin",name:"admin",component:function(){return t.e("chunk-c7990b84").then(t.bind(null,"3530"))}},{path:"order",name:"order",component:function(){return t.e("chunk-2d222708").then(t.bind(null,"cf2a"))}}]}],C=Object(b["a"])({history:Object(b["b"])(),routes:x,scrollBehavior:function(){return{top:0}}}),T=C;t("bbe3");Object(l["e"])("required",i["c"]),Object(l["e"])("email",i["a"]),Object(l["e"])("min",i["b"]),Object(l["d"])({generateMessage:Object(s["a"])({zh_TW:d}),validateOnInput:!0}),Object(s["b"])("zh_TW");var L=Object(c["c"])(f);L.use(T),L.use(u.a,r.a),L.component("Form",l["c"]),L.component("Field",l["b"]),L.component("ErrorMessage",l["a"]),L.mount("#app")},"6a09":function(e,n,t){"use strict";t("d61c")},d61c:function(e,n,t){}});
//# sourceMappingURL=app.256b0e7d.js.map