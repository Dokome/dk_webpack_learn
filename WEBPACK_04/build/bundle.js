!function(){var e={494:function(e,t,n){"use strict";e.exports=n.p+"img/lady.57d961.jpg"},806:function(e,t,n){n(272),e.exports={createElement:e=>{let t=document.createElement(e);return t.style.width="100px",t.style.height="100px",t.style.backgroundColor="red",t.className="myDiv",t.innerHTML="hello world","img"===e&&(t.src=n(494)),t}}},95:function(e,t,n){"use strict";var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,"body {\r\n  background-color: blue;\r\n}\r\n",""]),t.Z=o},645:function(e){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(o[c]=!0)}for(var u=0;u<e.length;u++){var a=[].concat(e[u]);r&&o[a[0]]||(n&&(a[2]?a[2]="".concat(n," and ").concat(a[2]):a[2]=n),t.push(a))}},t}},272:function(e,t,n){"use strict";n.r(t);var r=n(379),o=n.n(r),i=n(795),c=n.n(i),u=n(569),a=n.n(u),s=n(565),f=n.n(s),l=n(216),d=n.n(l),p=n(589),m=n.n(p),v=n(95),h={};h.styleTagTransform=m(),h.setAttributes=f(),h.insert=a().bind(null,"head"),h.domAPI=c(),h.insertStyleElement=d(),o()(v.Z,h),t.default=v.Z&&v.Z.locals?v.Z.locals:void 0},379:function(e){"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},c=[],u=0;u<e.length;u++){var a=e[u],s=r.base?a[0]+r.base:a[0],f=i[s]||0,l="".concat(s," ").concat(f);i[s]=f+1;var d=n(l),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(t[d].references++,t[d].updater(p)):t.push({identifier:l,updater:o(p,r),references:1}),c.push(l)}return c}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<i.length;c++){var u=n(i[c]);t[u].references--}for(var a=r(e,o),s=0;s<i.length;s++){var f=n(i[s]);0===t[f].references&&(t[f].updater(),t.splice(f,1))}i=a}}},569:function(e){"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:function(e){"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},565:function(e,t,n){"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:function(e){"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:function(e){"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e}(),function(){const{createElement:e}=n(806);document.body.appendChild(e("div")),document.body.appendChild(e("img"))}()}();