import{w as x,r as F}from"./KYxWYijC.js";import{w as M,x as w,y as C}from"./kDI71Ujt.js";const _={};function b(t){return t==="local"?localStorage:sessionStorage}function h(t,r,s){const n=JSON,i="local";function o(p,d){b(i).setItem(p,n.stringify(d))}if(!_[t]){const p=x(r,e=>{const a=b(i).getItem(t);a&&e(n.parse(a));{const m=l=>{l.key===t&&e(l.newValue?n.parse(l.newValue):null)};return window.addEventListener("storage",m),()=>window.removeEventListener("storage",m)}}),{subscribe:d,set:u}=p;_[t]={set(e){o(t,e),u(e)},update(e){const a=e(M(p));o(t,a),u(a)},subscribe:d}}return _[t]}h("modeOsPrefers",!1);h("modeUserPrefers",void 0);h("modeCurrent",!1);const v="(prefers-reduced-motion: reduce)";function L(){return window.matchMedia(v).matches}const V=F(L(),t=>{{const r=n=>{t(n.matches)},s=window.matchMedia(v);return s.addEventListener("change",r),()=>{s.removeEventListener("change",r)}}});function I(t){return t*t*t}function S(t){const r=t-1;return r*r*r+1}function O(t,{delay:r=0,duration:s=400,easing:n=C}={}){const i=+getComputedStyle(t).opacity;return{delay:r,duration:s,easing:n,css:o=>`opacity: ${o*i}`}}function R(t,{delay:r=0,duration:s=400,easing:n=S,x:i=0,y:o=0,opacity:p=0}={}){const d=getComputedStyle(t),u=+d.opacity,e=d.transform==="none"?"":d.transform,a=u*(1-p),[m,l]=w(i),[g,$]=w(o);return{delay:r,duration:s,easing:n,css:(f,y)=>`
			transform: ${e} translate(${(1-f)*m}${l}, ${(1-f)*g}${$});
			opacity: ${u-a*y}`}}function z(t,{delay:r=0,duration:s=400,easing:n=S,axis:i="y"}={}){const o=getComputedStyle(t),p=+o.opacity,d=i==="y"?"height":"width",u=parseFloat(o[d]),e=i==="y"?["top","bottom"]:["left","right"],a=e.map(c=>`${c[0].toUpperCase()}${c.slice(1)}`),m=parseFloat(o[`padding${a[0]}`]),l=parseFloat(o[`padding${a[1]}`]),g=parseFloat(o[`margin${a[0]}`]),$=parseFloat(o[`margin${a[1]}`]),f=parseFloat(o[`border${a[0]}Width`]),y=parseFloat(o[`border${a[1]}Width`]);return{delay:r,duration:s,easing:n,css:c=>`overflow: hidden;opacity: ${Math.min(c*20,1)*p};${d}: ${c*u}px;padding-${e[0]}: ${c*m}px;padding-${e[1]}: ${c*l}px;margin-${e[0]}: ${c*g}px;margin-${e[1]}: ${c*$}px;border-${e[0]}-width: ${c*f}px;border-${e[1]}-width: ${c*y}px;`}}function P(t,r){const{transition:s,params:n,enabled:i}=r;return i?s(t,n):"duration"in n?s(t,{duration:0}):{duration:0}}export{O as a,I as c,P as d,R as f,V as p,z as s};
