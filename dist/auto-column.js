!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}(self,(()=>(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};let n;e.r(t),e.d(t,{default:()=>s});let o=!1;function c(e,t,c,i){const s=c.componentInstance,l=s.columns,d=s.data,f=c.oldValue;if(d===f)return;const u=()=>{const t=function(e,t,n){const o=e,c=document.createElement("span");c.setAttribute("class","cell"),o.appendChild(c);const r={};return n.forEach((e=>{const n=e.property;let o=0;t.forEach((e=>{const t=e[n]||"";c.innerText=t;const r=c.offsetWidth;o=r>o?r:o})),r[e.id]=o})),o.removeChild(c),r}(e,d,l),n=function(e){const t=e.$children;for(let e=t.length-1;e>0;e--){const n=t[e];if([...n.$el.classList].includes("el-table__header"))return n}}(s),o=function(e){return e.columns}(n),c=function(e,t){const n=document.createElement("span");n.setAttribute("class","cell"),e.$el.appendChild(n);const o={};return t.forEach((e=>{const t=e.label||"";n.innerText=t;const c=e.id;o[c]=n.offsetWidth})),e.$el.removeChild(n),o}(n,o),i=r(s);!function(e,t,n,o,c){let r=0;const i={};e.$children.forEach((e=>{"columnId"in e&&e.$el.classList.length>0&&(i[e.columnId]=[...e.$el.classList])}));const s={};for(const e in n)s[e]=n[e]>o[e]?n[e]:o[e],s[e]=s[e]+1,r+=s[e];let l=0;r<c&&(l=(c-r)/t.length),t.forEach((t=>{const n=t.id,o=i[t.id];if(o&&o.includes("v-auto-ignore"));else{const o=s[n];e.$set(t,"width",o+l)}})),e.$nextTick((()=>{e.doLayout()}))}(s,l,t,c,i)};u(),o||(o=!0,n=u,window.addEventListener("resize",n))}function r(e){const t=e.$parent,n=t.$el.offsetWidth;return 0===n?r(t):n}const i={bind(){o=!1},update(e,t,n,o){c(e,0,n)},unbind(){window.removeEventListener("resize",n)}};function s(e){e.directive("auto-column",i)}return t})()));