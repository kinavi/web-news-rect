require("source-map-support").install(),function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("react-router-config")},function(e,t){e.exports=require("express")},function(e){e.exports=JSON.parse('{"a":{"main":["public/style.11150d903cbf9bda7b5e.css","public/client.11150d903cbf9bda7b5e.js"]}}')},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("path")},function(e,t){},function(e,t,n){"use strict";n.r(t);var r=n(3),o=n.n(r),a=(n(6),n(0)),c=n.n(a),u=n(5),i=n(2),l=function(e){var t=e.route;return c.a.createElement("div",{className:"1"},Object(i.renderRoutes)(t.routes))};l.defaultProps={route:null};var s={component:l},p=n(1),f=function(){return c.a.createElement("nav",{className:"nav container"},c.a.createElement(p.Link,{className:"nav-link ",to:"/cms"},"Добавить новость"),c.a.createElement(p.Link,{className:"nav-link ",to:"/"},"Показать все новости"))},m=function(e){var t=e.children;return c.a.createElement("div",{className:"page "},c.a.createElement(f,null),c.a.createElement("div",{className:"container"},t))},d={component:function(){return c.a.createElement(m,null,c.a.createElement("div",null,"Hello"),c.a.createElement("div",null," Тут выводится список новостей "))}},b=(n(7),{component:function(){return c.a.createElement(m,null,c.a.createElement("div",null,"Тут Редоктируются новости"))}});function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=[O({},s,{routes:[O({},d,{path:"/",exact:!0}),O({},b,{path:"/cms"})]})],j=n(4);var g=o()();g.use(o.a.static("dist")),g.get("*",(function(e,t){console.log(e.params);var n=e.params[0].split("/")[2],r=Object(i.matchRoutes)(h,e.path).map((function(e){var t=e.route;return t.loadData?t.loadData(store,n):null})).map((function(e){return e?new Promise((function(t,n){e.then(t).catch(t)})):null}));Promise.all(r).then((function(){var n=function(e,t,n){var r=Object(u.renderToString)(c.a.createElement(p.StaticRouter,{location:e.path},c.a.createElement("div",null,Object(i.renderRoutes)(h))));return'<!DOCTYPE html>\n    <html>\n        <head>\n            <title>Universal React server bundle</title>\n            <link rel="stylesheet" href="'.concat(j.a.main[0],'">\n        </head>\n        <body>\n            <div id="root">').concat(r,'</div>\n            <script src="').concat(j.a.main[1],'"><\/script>\n        </body>\n    </html>')}(e);({}).notFound&&t.status(404),t.send(n)}))})),g.listen(3e3),console.log("App is running on http://localhost:3000")}]);
//# sourceMappingURL=server.bundle.js.map