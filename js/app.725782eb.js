(function(e){function t(t){for(var r,i,c=t[0],l=t[1],s=t[2],d=0,u=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&u.push(a[i][0]),a[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);f&&f(t);while(u.length)u.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var l=n[c];0!==a[l]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("744f"),n("6c7b"),n("7514"),n("20d6"),n("1c4c"),n("6762"),n("cadf"),n("e804"),n("55dd"),n("d04f"),n("c8ce"),n("217b"),n("7f7f"),n("f400"),n("7f25"),n("536b"),n("d9ab"),n("f9ab"),n("32d7"),n("25c9"),n("9f3c"),n("042e"),n("c7c6"),n("f4ff"),n("049f"),n("7872"),n("a69f"),n("0b21"),n("6c1a"),n("c7c62"),n("84b4"),n("c5f6"),n("2e37"),n("fca0"),n("7cdf"),n("ee1d"),n("b1b1"),n("87f3"),n("9278"),n("5df2"),n("04ff"),n("f751"),n("4504"),n("fee7"),n("ffc1"),n("0d6d"),n("9986"),n("8e6e"),n("25db"),n("e4f7"),n("b9a1"),n("64d5"),n("9aea"),n("db97"),n("66c8"),n("57f0"),n("165b"),n("456d"),n("cf6a"),n("fd24"),n("8615"),n("551c"),n("097d"),n("df1b"),n("2397"),n("88ca"),n("ba16"),n("d185"),n("ebde"),n("2d34"),n("f6b3"),n("2251"),n("c698"),n("a19f"),n("9253"),n("9275"),n("3b2b"),n("3846"),n("4917"),n("a481"),n("28a5"),n("386d"),n("6b54"),n("4f7f"),n("8a81"),n("ac4d"),n("8449"),n("9c86"),n("fa83"),n("48c0"),n("a032"),n("aef6"),n("d263"),n("6c37"),n("9ec8"),n("5695"),n("2fdb"),n("d0b0"),n("5df3"),n("b54a"),n("f576"),n("ed50"),n("788d"),n("14b9"),n("f386"),n("f559"),n("1448"),n("673e"),n("242a"),n("c66f"),n("b05c"),n("34ef"),n("6aa2"),n("15ac"),n("af56"),n("b6e4"),n("9c29"),n("63d9"),n("4dda"),n("10ad"),n("c02b"),n("4795"),n("130f"),n("ac6a"),n("96cf"),n("0cdd");var r=n("2b0e"),a=n("5f5b");n("ab8b"),n("2dd8");r["default"].use(a["a"]);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("b-navbar",{attrs:{id:"navbar",type:"dark",variant:"primary"}},[n("b-navbar-brand",[e._v("ListApp")])],1),n("div",{staticClass:"container px-0"},[n("AddElement",{staticClass:"px-2 col-md-10 col-lg-8 mx-auto mt-4",on:{"add-element":e.addElement}}),n("List",{staticClass:"col-md-10 col-lg-8 mx-auto mt-4 px-0",attrs:{list:e.list},on:{"del-element":e.delElement}})],1)],1)},i=[],c=n("a002"),l=n.n(c),s=n("11c1"),f=n.n(s),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-list-group",e._l(e.list,(function(t){return n("ListElement",{key:t.id,attrs:{element:t},on:{"del-element":function(n){return e.$emit("del-element",t.id)}}})})),1)},u=[],p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-list-group-item",{staticClass:"d-flex pl-0"},[n("span",{staticClass:"col text-ellip"},[e._v(e._s(e.element.text))]),n("b-button",{attrs:{size:"sm",variant:"danger"},on:{click:function(t){return e.$emit("del-element")}}},[e._v("Eliminar")])],1)},b=[],m={name:"ListElement",props:{element:Object}},v=m,h=(n("76e9"),n("2877")),g=Object(h["a"])(v,p,b,!1,null,"0581b7d2",null),x=g.exports,y={name:"List",components:{ListElement:x},props:{list:Array}},_=y,E=Object(h["a"])(_,d,u,!1,null,"63ed04af",null),w=E.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-form",{attrs:{inline:""},on:{submit:function(t){return t.preventDefault(),e.sendElement(t)}}},[n("b-input",{staticClass:"col border-primary",attrs:{type:"text",placeholder:"Nuevo elemento"},model:{value:e.text,callback:function(t){e.text="string"===typeof t?t.trim():t},expression:"text"}}),n("b-button",{staticClass:"ml-2",attrs:{variant:"primary",type:"submit"}},[e._v("Agregar")])],1)},j=[],k={name:"AddElement",data:function(){return{text:""}},methods:{sendElement:function(){this.$emit("add-element",this.text),this.text=""}}},A=k,C=Object(h["a"])(A,O,j,!1,null,"3724d312",null),$=C.exports,L={name:"app",data:function(){return{list:[],db:null}},components:{List:w,AddElement:$},methods:{addElement:function(e){var t={id:f.a.v4(),text:e};this.db.setItem(t.id,e).then((function(e){return console.log(e)})),this.list.push(t)},delElement:function(e){this.list=this.list.filter((function(t){return t.id!=e})),this.db.removeItem(e).then((function(){return console.log("Element removed!")}))}},created:function(){var e=l.a.createInstance({name:"list_database"});this.db=e;var t=this;e.length().then((function(n){n>0&&e.iterate((function(e,n,r){var a={id:n,text:e};t.list.push(a)}))}))}},P=L,S=(n("034f"),Object(h["a"])(P,o,i,!1,null,null,null)),M=S.exports,N=n("9483");Object(N["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(M)}}).$mount("#app")},"64a9":function(e,t,n){},"76e9":function(e,t,n){"use strict";var r=n("90d8"),a=n.n(r);a.a},"90d8":function(e,t,n){}});
//# sourceMappingURL=app.725782eb.js.map