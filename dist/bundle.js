!function(t){var e={};function l(o){if(e[o])return e[o].exports;var c=e[o]={i:o,l:!1,exports:{}};return t[o].call(c.exports,c,c.exports,l),c.l=!0,c.exports}l.m=t,l.c=e,l.d=function(t,e,o){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},l.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)l.d(o,c,function(e){return t[e]}.bind(null,c));return o},l.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="",l(l.s=0)}([function(t,e,l){"use strict";l.r(e);l(2),l(1),l(6),l(7),l(8);console.log("codejam-palette")},function(t,e){let l=document.getElementById("canvas4").getContext("2d");l.fillStyle="#00BCD4",l.fillRect(0,0,128,128),l.fillStyle="#FFEB3B",l.fillRect(128,0,256,128),l.fillStyle="#00BCD4",l.fillRect(384,0,128,128),l.fillStyle="#FFEB3B",l.fillRect(0,128,128,256),l.fillStyle="#FFC107",l.fillRect(128,128,256,256),l.fillStyle="#FFEB3B",l.fillRect(384,128,128,256),l.fillStyle="#00BCD4",l.fillRect(0,384,128,128),l.fillStyle="#FFEB3B",l.fillRect(128,384,256,128),l.fillStyle="#00BCD4",l.fillRect(384,384,128,128)},function(t,e){},,,,function(t,e){let l;if(localStorage.getItem("activeButton")){let t=localStorage.getItem("activeButton");(l=document.querySelector("."+t)).classList.toggle("isActive__button")}else(l=document.querySelector(".button__pencil")).classList.toggle("isActive__button"),localStorage.setItem("activeButton","button__pencil");document.addEventListener("click",(function(t){"button__palette"==t.target.id&&(l.classList.remove("isActive__button"),(l=t.target).classList.toggle("isActive__button"),l.classList.contains("button__choose-color")&&localStorage.setItem("activeButton","button__choose-color"),l.classList.contains("button__pencil")&&localStorage.setItem("activeButton","button__pencil"),l.classList.contains("button__transform")&&localStorage.setItem("activeButton","button__transform"),l.classList.contains("button__paint-bucket")&&localStorage.setItem("activeButton","button__paint-bucket"))}))},function(t,e){let l=document.querySelector(".canvas").getContext("2d");"button__paint-bucket"==localStorage.getItem("activeButton")&&document.addEventListener("click",(function(t){let e=localStorage.getItem("activeColor");"canvas"==t.target.className&&(t.clientY<=240&&(t.clientX<=623&&(l.fillStyle=e,l.fillRect(0,0,128,128)),t.clientX>=876&&(l.fillStyle=e,l.fillRect(384,0,128,128)),t.clientX<=876&&t.clientX>=623&&(l.fillStyle=e,l.fillRect(128,0,256,128))),t.clientY>=240&&t.clientY<=496&&(t.clientX<=623&&(l.fillStyle=e,l.fillRect(0,128,128,256)),t.clientX>=876&&(l.fillStyle=e,l.fillRect(384,128,128,256)),t.clientX<=876&&t.clientX>=623&&(l.fillStyle=e,l.fillRect(128,128,256,256))),t.clientY>=496&&(t.clientX<=623&&(l.fillStyle=e,l.fillRect(0,384,128,128)),t.clientX>=876&&(l.fillStyle=e,l.fillRect(384,384,128,128)),t.clientX<=876&&t.clientX>=623&&(l.fillStyle=e,l.fillRect(128,384,256,128))))}))},function(t,e){let l,o,c=document.querySelector(".circle-color"),n=document.querySelector(".circle-prev-color");localStorage.getItem("activeColor")?(l=localStorage.getItem("activeColor"),c.style.background=l,o=localStorage.getItem("prevColor"),n.style.background=o):(l=getComputedStyle(c).backgroundColor,localStorage.setItem("activeColor",l),o=getComputedStyle(n).backgroundColor,localStorage.setItem("prevColor",o)),document.addEventListener("click",(function(t){if("button__color"==t.target.id&&!t.target.classList.contains("button__current-color")){let e=t.target.firstChild;l=getComputedStyle(e).backgroundColor,c.style.background=l,o=localStorage.getItem("activeColor"),n.style.background=o,localStorage.setItem("activeColor",l),localStorage.setItem("prevColor",o)}}))}]);