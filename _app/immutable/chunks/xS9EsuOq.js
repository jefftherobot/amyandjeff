var mt=Object.defineProperty;var wt=(e,t,n)=>t in e?mt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var x=(e,t,n)=>wt(e,typeof t!="symbol"?t+"":t,n);import{o as Ne,p as yt}from"./kDI71Ujt.js";import{w as ve}from"./KYxWYijC.js";new URL("sveltekit-internal://");function _t(e,t){return e==="/"||t==="ignore"?e:t==="never"?e.endsWith("/")?e.slice(0,-1):e:t==="always"&&!e.endsWith("/")?e+"/":e}function vt(e){return e.split("%25").map(decodeURI).join("%25")}function bt(e){for(const t in e)e[t]=decodeURIComponent(e[t]);return e}function he({href:e}){return e.split("#")[0]}function At(e,t,n,r=!1){const a=new URL(e);Object.defineProperty(a,"searchParams",{value:new Proxy(a.searchParams,{get(i,o){if(o==="get"||o==="getAll"||o==="has")return l=>(n(l),i[o](l));t();const c=Reflect.get(i,o);return typeof c=="function"?c.bind(i):c}}),enumerable:!0,configurable:!0});const s=["href","pathname","search","toString","toJSON"];r&&s.push("hash");for(const i of s)Object.defineProperty(a,i,{get(){return t(),e[i]},enumerable:!0,configurable:!0});return a}function kt(...e){let t=5381;for(const n of e)if(typeof n=="string"){let r=n.length;for(;r;)t=t*33^n.charCodeAt(--r)}else if(ArrayBuffer.isView(n)){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let a=r.length;for(;a;)t=t*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(t>>>0).toString(36)}function St(e){const t=atob(e),n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n.buffer}const Et=window.fetch;window.fetch=(e,t)=>((e instanceof Request?e.method:(t==null?void 0:t.method)||"GET")!=="GET"&&q.delete(be(e)),Et(e,t));const q=new Map;function Rt(e,t){const n=be(e,t),r=document.querySelector(n);if(r!=null&&r.textContent){let{body:a,...s}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&q.set(n,{body:a,init:s,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=St(a)),Promise.resolve(new Response(a,s))}return window.fetch(e,t)}function It(e,t,n){if(q.size>0){const r=be(e,n),a=q.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(a.body,a.init);q.delete(r)}}return window.fetch(t,n)}function be(e,t){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(t!=null&&t.headers||t!=null&&t.body){const a=[];t.headers&&a.push([...new Headers(t.headers)].join(",")),t.body&&(typeof t.body=="string"||ArrayBuffer.isView(t.body))&&a.push(t.body),r+=`[data-hash="${kt(...a)}"]`}return r}const Ut=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Lt(e){const t=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${xt(e).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return t.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const s=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(s)return t.push({name:s[1],matcher:s[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return pe(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return pe(String.fromCharCode(...c.slice(2).split("-").map(p=>parseInt(p,16))));const h=Ut.exec(c),[,u,w,f,m]=h;return t.push({name:f,matcher:m,optional:!!u,rest:!!w,chained:w?l===1&&i[0]==="":!1}),w?"(.*?)":u?"([^/]*)?":"([^/]+?)"}return pe(c)}).join("")}).join("")}/?$`),params:t}}function Tt(e){return!/^\([^)]+\)$/.test(e)}function xt(e){return e.slice(1).split("/").filter(Tt)}function Pt(e,t,n){const r={},a=e.slice(1),s=a.filter(o=>o!==void 0);let i=0;for(let o=0;o<t.length;o+=1){const c=t[o];let l=a[o-i];if(c.chained&&c.rest&&i&&(l=a.slice(o-i,o+1).filter(h=>h).join("/"),i=0),l===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||n[c.matcher](l)){r[c.name]=l;const h=t[o+1],u=a[o+1];h&&!h.rest&&h.optional&&u&&c.chained&&(i=0),!h&&!u&&Object.keys(r).length===s.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function pe(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Ct({nodes:e,server_loads:t,dictionary:n,matchers:r}){const a=new Set(t);return Object.entries(n).map(([o,[c,l,h]])=>{const{pattern:u,params:w}=Lt(o),f={id:o,exec:m=>{const p=u.exec(m);if(p)return Pt(p,w,r)},errors:[1,...h||[]].map(m=>e[m]),layouts:[0,...l||[]].map(i),leaf:s(c)};return f.errors.length=f.layouts.length=Math.max(f.errors.length,f.layouts.length),f});function s(o){const c=o<0;return c&&(o=~o),[c,e[o]]}function i(o){return o===void 0?o:[a.has(o),e[o]]}}function We(e,t=JSON.parse){try{return t(sessionStorage[e])}catch{}}function $e(e,t,n=JSON.stringify){const r=n(t);try{sessionStorage[e]=r}catch{}}var He;const T=((He=globalThis.__sveltekit_1p7hwe1)==null?void 0:He.base)??"";var Ke;const Ot=((Ke=globalThis.__sveltekit_1p7hwe1)==null?void 0:Ke.assets)??T,Nt="1744812486694",Ye="sveltekit:snapshot",Je="sveltekit:scroll",ze="sveltekit:states",$t="sveltekit:pageurl",F="sveltekit:history",K="sveltekit:navigation",N={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},z=location.origin;function Xe(e){if(e instanceof URL)return e;let t=document.baseURI;if(!t){const n=document.getElementsByTagName("base");t=n.length?n[0].href:document.URL}return new URL(e,t)}function Ae(){return{x:pageXOffset,y:pageYOffset}}function D(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const je={...N,"":N.hover};function Ze(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function Qe(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=Ze(e)}}function we(e,t,n){let r;try{if(r=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI),n&&r.hash.match(/^#[^/]/)){const o=location.hash.split("#")[1]||"/";r.hash=`#${o}${r.hash}`}}catch{}const a=e instanceof SVGAElement?e.target.baseVal:e.target,s=!r||!!a||ie(r,t,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),i=(r==null?void 0:r.origin)===z&&e.hasAttribute("download");return{url:r,external:s,target:a,download:i}}function Q(e){let t=null,n=null,r=null,a=null,s=null,i=null,o=e;for(;o&&o!==document.documentElement;)r===null&&(r=D(o,"preload-code")),a===null&&(a=D(o,"preload-data")),t===null&&(t=D(o,"keepfocus")),n===null&&(n=D(o,"noscroll")),s===null&&(s=D(o,"reload")),i===null&&(i=D(o,"replacestate")),o=Ze(o);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:je[r??"off"],preload_data:je[a??"off"],keepfocus:c(t),noscroll:c(n),reload:c(s),replace_state:c(i)}}function De(e){const t=ve(e);let n=!0;function r(){n=!0,t.update(i=>i)}function a(i){n=!1,t.set(i)}function s(i){let o;return t.subscribe(c=>{(o===void 0||n&&c!==o)&&i(o=c)})}return{notify:r,set:a,subscribe:s}}const et={v:()=>{}};function jt(){const{set:e,subscribe:t}=ve(!1);let n;async function r(){clearTimeout(n);try{const a=await fetch(`${Ot}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==Nt;return i&&(e(!0),et.v(),clearTimeout(n)),i}catch{return!1}}return{subscribe:t,check:r}}function ie(e,t,n){return e.origin!==z||!e.pathname.startsWith(t)?!0:n?!(e.pathname===t+"/"||e.pathname===t+"/index.html"||e.protocol==="file:"&&e.pathname.replace(/\/[^/]+\.html?$/,"")===t):!1}function kn(e){}function Fe(e){const t=Ft(e),n=new ArrayBuffer(t.length),r=new DataView(n);for(let a=0;a<n.byteLength;a++)r.setUint8(a,t.charCodeAt(a));return n}const Dt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function Ft(e){e.length%4===0&&(e=e.replace(/==?$/,""));let t="",n=0,r=0;for(let a=0;a<e.length;a++)n<<=6,n|=Dt.indexOf(e[a]),r+=6,r===24&&(t+=String.fromCharCode((n&16711680)>>16),t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,t+=String.fromCharCode(n)):r===18&&(n>>=2,t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255)),t}const Vt=-1,Bt=-2,Mt=-3,qt=-4,Gt=-5,Ht=-6;function Kt(e,t){if(typeof e=="number")return a(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const n=e,r=Array(n.length);function a(s,i=!1){if(s===Vt)return;if(s===Mt)return NaN;if(s===qt)return 1/0;if(s===Gt)return-1/0;if(s===Ht)return-0;if(i)throw new Error("Invalid input");if(s in r)return r[s];const o=n[s];if(!o||typeof o!="object")r[s]=o;else if(Array.isArray(o))if(typeof o[0]=="string"){const c=o[0],l=t==null?void 0:t[c];if(l)return r[s]=l(a(o[1]));switch(c){case"Date":r[s]=new Date(o[1]);break;case"Set":const h=new Set;r[s]=h;for(let f=1;f<o.length;f+=1)h.add(a(o[f]));break;case"Map":const u=new Map;r[s]=u;for(let f=1;f<o.length;f+=2)u.set(a(o[f]),a(o[f+1]));break;case"RegExp":r[s]=new RegExp(o[1],o[2]);break;case"Object":r[s]=Object(o[1]);break;case"BigInt":r[s]=BigInt(o[1]);break;case"null":const w=Object.create(null);r[s]=w;for(let f=1;f<o.length;f+=2)w[o[f]]=a(o[f+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const f=globalThis[c],m=o[1],p=Fe(m),d=new f(p);r[s]=d;break}case"ArrayBuffer":{const f=o[1],m=Fe(f);r[s]=m;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(o.length);r[s]=c;for(let l=0;l<o.length;l+=1){const h=o[l];h!==Bt&&(c[l]=a(h))}}else{const c={};r[s]=c;for(const l in o){const h=o[l];c[l]=a(h)}}return r[s]}return a(0)}const tt=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...tt];const Wt=new Set([...tt]);[...Wt];function Yt(e){return e.filter(t=>t!=null)}class ce{constructor(t,n){this.status=t,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${t}`}}toString(){return JSON.stringify(this.body)}}class ke{constructor(t,n){this.status=t,this.location=n}}class Se extends Error{constructor(t,n,r){super(r),this.status=t,this.text=n}}const Jt="x-sveltekit-invalidated",zt="x-sveltekit-trailing-slash";function ee(e){return e instanceof ce||e instanceof Se?e.status:500}function Xt(e){return e instanceof Se?e.text:"Internal Error"}let I,W,ge;const Zt=Ne.toString().includes("$$")||/function \w+\(\) \{\}/.test(Ne.toString());Zt?(I={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},W={current:null},ge={current:!1}):(I=new class{constructor(){x(this,"data",$state.raw({}));x(this,"form",$state.raw(null));x(this,"error",$state.raw(null));x(this,"params",$state.raw({}));x(this,"route",$state.raw({id:null}));x(this,"state",$state.raw({}));x(this,"status",$state.raw(-1));x(this,"url",$state.raw(new URL("https://example.com")))}},W=new class{constructor(){x(this,"current",$state.raw(null))}},ge=new class{constructor(){x(this,"current",$state.raw(!1))}},et.v=()=>ge.current=!0);function Qt(e){Object.assign(I,e)}const en="/__data.json",tn=".html__data.json";function nn(e){return e.endsWith(".html")?e.replace(/\.html$/,tn):e.replace(/\/$/,"")+en}const an=new Set(["icon","shortcut icon","apple-touch-icon"]),j=We(Je)??{},Y=We(Ye)??{},C={url:De({}),page:De({}),navigating:ve(null),updated:jt()};function Ee(e){j[e]=Ae()}function rn(e,t){let n=e+1;for(;j[n];)delete j[n],n+=1;for(n=t+1;Y[n];)delete Y[n],n+=1}function B(e){return location.href=e.href,new Promise(()=>{})}async function nt(){if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistration(T||"/");e&&await e.update()}}function Ve(){}let Re,ye,te,P,_e,A;const ne=[],ae=[];let U=null;const X=new Map,at=new Set,on=new Set,G=new Set;let v={branch:[],error:null,url:null},Ie=!1,re=!1,Be=!0,J=!1,M=!1,rt=!1,Ue=!1,ot,S,L,$;const H=new Set;async function In(e,t,n){var a,s,i,o;document.URL!==location.href&&(location.href=location.href),A=e,await((s=(a=e.hooks).init)==null?void 0:s.call(a)),Re=Ct(e),P=document.documentElement,_e=t,ye=e.nodes[0],te=e.nodes[1],ye(),te(),S=(i=history.state)==null?void 0:i[F],L=(o=history.state)==null?void 0:o[K],S||(S=L=Date.now(),history.replaceState({...history.state,[F]:S,[K]:L},""));const r=j[S];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),n?await wn(_e,n):await pn(A.hash?_n(new URL(location.href)):location.href,{replaceState:!0}),mn()}function sn(){ne.length=0,Ue=!1}function st(e){ae.some(t=>t==null?void 0:t.snapshot)&&(Y[e]=ae.map(t=>{var n;return(n=t==null?void 0:t.snapshot)==null?void 0:n.capture()}))}function it(e){var t;(t=Y[e])==null||t.forEach((n,r)=>{var a,s;(s=(a=ae[r])==null?void 0:a.snapshot)==null||s.restore(n)})}function Me(){Ee(S),$e(Je,j),st(L),$e(Ye,Y)}async function Le(e,t,n,r){return Z({type:"goto",url:Xe(e),keepfocus:t.keepFocus,noscroll:t.noScroll,replace_state:t.replaceState,state:t.state,redirect_count:n,nav_token:r,accept:()=>{t.invalidateAll&&(Ue=!0),t.invalidate&&t.invalidate.forEach(gn)}})}async function cn(e){if(e.id!==(U==null?void 0:U.id)){const t={};H.add(t),U={id:e.id,token:t,promise:ft({...e,preload:t}).then(n=>(H.delete(t),n.type==="loaded"&&n.state.error&&(U=null),n))}}return U.promise}async function me(e){var n;const t=(n=await fe(e,!1))==null?void 0:n.route;t&&await Promise.all([...t.layouts,t.leaf].map(r=>r==null?void 0:r[1]()))}function ct(e,t,n){var s;v=e.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),Object.assign(I,e.props.page),ot=new A.root({target:t,props:{...e.props,stores:C,components:ae},hydrate:n,sync:!1}),it(L);const a={from:null,to:{params:v.params,route:{id:((s=v.route)==null?void 0:s.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};G.forEach(i=>i(a)),re=!0}function oe({url:e,params:t,branch:n,status:r,error:a,route:s,form:i}){let o="never";if(T&&(e.pathname===T||e.pathname===T+"/"))o="always";else for(const f of n)(f==null?void 0:f.slash)!==void 0&&(o=f.slash);e.pathname=_t(e.pathname,o),e.search=e.search;const c={type:"loaded",state:{url:e,params:t,branch:n,error:a,route:s},props:{constructors:Yt(n).map(f=>f.node.component),page:Pe(I)}};i!==void 0&&(c.props.form=i);let l={},h=!I,u=0;for(let f=0;f<Math.max(n.length,v.branch.length);f+=1){const m=n[f],p=v.branch[f];(m==null?void 0:m.data)!==(p==null?void 0:p.data)&&(h=!0),m&&(l={...l,...m.data},h&&(c.props[`data_${u}`]=l),u+=1)}return(!v.url||e.href!==v.url.href||v.error!==a||i!==void 0&&i!==I.form||h)&&(c.props.page={error:a,params:t,route:{id:(s==null?void 0:s.id)??null},state:{},status:r,url:new URL(e),form:i??null,data:h?l:I.data}),c}async function Te({loader:e,parent:t,url:n,params:r,route:a,server_data_node:s}){var h,u,w;let i=null,o=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await e();if((h=l.universal)!=null&&h.load){let f=function(...p){for(const d of p){const{href:_}=new URL(d,n);c.dependencies.add(_)}};const m={route:new Proxy(a,{get:(p,d)=>(o&&(c.route=!0),p[d])}),params:new Proxy(r,{get:(p,d)=>(o&&c.params.add(d),p[d])}),data:(s==null?void 0:s.data)??null,url:At(n,()=>{o&&(c.url=!0)},p=>{o&&c.search_params.add(p)},A.hash),async fetch(p,d){p instanceof Request&&(d={body:p.method==="GET"||p.method==="HEAD"?void 0:await p.blob(),cache:p.cache,credentials:p.credentials,headers:[...p.headers].length?p.headers:void 0,integrity:p.integrity,keepalive:p.keepalive,method:p.method,mode:p.mode,redirect:p.redirect,referrer:p.referrer,referrerPolicy:p.referrerPolicy,signal:p.signal,...d});const{resolved:_,promise:E}=lt(p,d,n);return o&&f(_.href),E},setHeaders:()=>{},depends:f,parent(){return o&&(c.parent=!0),t()},untrack(p){o=!1;try{return p()}finally{o=!0}}};i=await l.universal.load.call(null,m)??null}return{node:l,loader:e,server:s,universal:(u=l.universal)!=null&&u.load?{type:"data",data:i,uses:c}:null,data:i??(s==null?void 0:s.data)??null,slash:((w=l.universal)==null?void 0:w.trailingSlash)??(s==null?void 0:s.slash)}}function lt(e,t,n){let r=e instanceof Request?e.url:e;const a=new URL(r,n);a.origin===n.origin&&(r=a.href.slice(n.origin.length));const s=re?It(r,a.href,t):Rt(r,t);return{resolved:a,promise:s}}function qe(e,t,n,r,a,s){if(Ue)return!0;if(!a)return!1;if(a.parent&&e||a.route&&t||a.url&&n)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(s[i]!==v.params[i])return!0;for(const i of a.dependencies)if(ne.some(o=>o(new URL(i))))return!0;return!1}function xe(e,t){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?t??null:null}function ln(e,t){if(!e)return new Set(t.searchParams.keys());const n=new Set([...e.searchParams.keys(),...t.searchParams.keys()]);for(const r of n){const a=e.searchParams.getAll(r),s=t.searchParams.getAll(r);a.every(i=>s.includes(i))&&s.every(i=>a.includes(i))&&n.delete(r)}return n}function Ge({error:e,url:t,route:n,params:r}){return{type:"loaded",state:{error:e,url:t,route:n,params:r,branch:[]},props:{page:Pe(I),constructors:[]}}}async function ft({id:e,invalidating:t,url:n,params:r,route:a,preload:s}){if((U==null?void 0:U.id)===e)return H.delete(U.token),U.promise;const{errors:i,layouts:o,leaf:c}=a,l=[...o,c];i.forEach(g=>g==null?void 0:g().catch(()=>{})),l.forEach(g=>g==null?void 0:g[1]().catch(()=>{}));let h=null;const u=v.url?e!==se(v.url):!1,w=v.route?a.id!==v.route.id:!1,f=ln(v.url,n);let m=!1;const p=l.map((g,y)=>{var O;const b=v.branch[y],k=!!(g!=null&&g[0])&&((b==null?void 0:b.loader)!==g[1]||qe(m,w,u,f,(O=b.server)==null?void 0:O.uses,r));return k&&(m=!0),k});if(p.some(Boolean)){try{h=await ht(n,p)}catch(g){const y=await V(g,{url:n,params:r,route:{id:e}});return H.has(s)?Ge({error:y,url:n,params:r,route:a}):le({status:ee(g),error:y,url:n,route:a})}if(h.type==="redirect")return h}const d=h==null?void 0:h.nodes;let _=!1;const E=l.map(async(g,y)=>{var ue;if(!g)return;const b=v.branch[y],k=d==null?void 0:d[y];if((!k||k.type==="skip")&&g[1]===(b==null?void 0:b.loader)&&!qe(_,w,u,f,(ue=b.universal)==null?void 0:ue.uses,r))return b;if(_=!0,(k==null?void 0:k.type)==="error")throw k;return Te({loader:g[1],url:n,params:r,route:a,parent:async()=>{var Oe;const Ce={};for(let de=0;de<y;de+=1)Object.assign(Ce,(Oe=await E[de])==null?void 0:Oe.data);return Ce},server_data_node:xe(k===void 0&&g[0]?{type:"skip"}:k??null,g[0]?b==null?void 0:b.server:void 0)})});for(const g of E)g.catch(()=>{});const R=[];for(let g=0;g<l.length;g+=1)if(l[g])try{R.push(await E[g])}catch(y){if(y instanceof ke)return{type:"redirect",location:y.location};if(H.has(s))return Ge({error:await V(y,{params:r,url:n,route:{id:a.id}}),url:n,params:r,route:a});let b=ee(y),k;if(d!=null&&d.includes(y))b=y.status??b,k=y.error;else if(y instanceof ce)k=y.body;else{if(await C.updated.check())return await nt(),await B(n);k=await V(y,{params:r,url:n,route:{id:a.id}})}const O=await fn(g,R,i);return O?oe({url:n,params:r,branch:R.slice(0,O.idx).concat(O.node),status:b,error:k,route:a}):await dt(n,{id:a.id},k,b)}else R.push(void 0);return oe({url:n,params:r,branch:R,status:200,error:null,route:a,form:t?void 0:null})}async function fn(e,t,n){for(;e--;)if(n[e]){let r=e;for(;!t[r];)r-=1;try{return{idx:r+1,node:{node:await n[e](),loader:n[e],data:{},server:null,universal:null}}}catch{continue}}}async function le({status:e,error:t,url:n,route:r}){const a={};let s=null;if(A.server_loads[0]===0)try{const o=await ht(n,[!0]);if(o.type!=="data"||o.nodes[0]&&o.nodes[0].type!=="data")throw 0;s=o.nodes[0]??null}catch{(n.origin!==z||n.pathname!==location.pathname||Ie)&&await B(n)}try{const o=await Te({loader:ye,url:n,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:xe(s)}),c={node:await te(),loader:te,universal:null,server:null,data:null};return oe({url:n,params:a,branch:[o,c],status:e,error:t,route:null})}catch(o){if(o instanceof ke)return Le(new URL(o.location,location.href),{},0);throw o}}async function un(e){const t=e.href;if(X.has(t))return X.get(t);let n;try{const r=(async()=>{let a=await A.hooks.reroute({url:new URL(e),fetch:async(s,i)=>lt(s,i,e).promise})??e;if(typeof a=="string"){const s=new URL(e);A.hash?s.hash=a:s.pathname=a,a=s}return a})();X.set(t,r),n=await r}catch{X.delete(t);return}return n}async function fe(e,t){if(e&&!ie(e,T,A.hash)){const n=await un(e);if(!n)return;const r=dn(n);for(const a of Re){const s=a.exec(r);if(s)return{id:se(e),invalidating:t,route:a,params:bt(s),url:e}}}}function dn(e){return vt(A.hash?e.hash.replace(/^#/,"").replace(/[?#].+/,""):e.pathname.slice(T.length))||"/"}function se(e){return(A.hash?e.hash.replace(/^#/,""):e.pathname)+e.search}function ut({url:e,type:t,intent:n,delta:r}){let a=!1;const s=gt(v,n,e,t);r!==void 0&&(s.navigation.delta=r);const i={...s.navigation,cancel:()=>{a=!0,s.reject(new Error("navigation cancelled"))}};return J||at.forEach(o=>o(i)),a?null:s}async function Z({type:e,url:t,popped:n,keepfocus:r,noscroll:a,replace_state:s,state:i={},redirect_count:o=0,nav_token:c={},accept:l=Ve,block:h=Ve}){const u=$;$=c;const w=await fe(t,!1),f=ut({url:t,type:e,delta:n==null?void 0:n.delta,intent:w});if(!f){h(),$===c&&($=u);return}const m=S,p=L;l(),J=!0,re&&C.navigating.set(W.current=f.navigation);let d=w&&await ft(w);if(!d){if(ie(t,T,A.hash))return await B(t);d=await dt(t,{id:null},await V(new Se(404,"Not Found",`Not found: ${t.pathname}`),{url:t,params:{},route:{id:null}}),404)}if(t=(w==null?void 0:w.url)||t,$!==c)return f.reject(new Error("navigation aborted")),!1;if(d.type==="redirect")if(o>=20)d=await le({status:500,error:await V(new Error("Redirect loop"),{url:t,params:{},route:{id:null}}),url:t,route:{id:null}});else return await Le(new URL(d.location,t).href,{},o+1,c),!1;else d.props.page.status>=400&&await C.updated.check()&&(await nt(),await B(t));if(sn(),Ee(m),st(p),d.props.page.url.pathname!==t.pathname&&(t.pathname=d.props.page.url.pathname),i=n?n.state:i,!n){const g=s?0:1,y={[F]:S+=g,[K]:L+=g,[ze]:i};(s?history.replaceState:history.pushState).call(history,y,"",t),s||rn(S,L)}if(U=null,d.props.page.state=i,re){v=d.state,d.props.page&&(d.props.page.url=t);const g=(await Promise.all(Array.from(on,y=>y(f.navigation)))).filter(y=>typeof y=="function");if(g.length>0){let y=function(){g.forEach(b=>{G.delete(b)})};g.push(y),g.forEach(b=>{G.add(b)})}ot.$set(d.props),Qt(d.props.page),rt=!0}else ct(d,_e,!1);const{activeElement:_}=document;await yt();const E=n?n.scroll:a?Ae():null;if(Be){const g=t.hash&&document.getElementById(decodeURIComponent(A.hash?t.hash.split("#")[2]??"":t.hash.slice(1)));E?scrollTo(E.x,E.y):g?g.scrollIntoView():scrollTo(0,0)}const R=document.activeElement!==_&&document.activeElement!==document.body;!r&&!R&&yn(),Be=!0,d.props.page&&Object.assign(I,d.props.page),J=!1,e==="popstate"&&it(L),f.fulfil(void 0),G.forEach(g=>g(f.navigation)),C.navigating.set(W.current=null)}async function dt(e,t,n,r){return e.origin===z&&e.pathname===location.pathname&&!Ie?await le({status:r,error:n,url:e,route:t}):await B(e)}function hn(){let e,t,n;P.addEventListener("mousemove",o=>{const c=o.target;clearTimeout(e),e=setTimeout(()=>{s(c,N.hover)},20)});function r(o){o.defaultPrevented||s(o.composedPath()[0],N.tap)}P.addEventListener("mousedown",r),P.addEventListener("touchstart",r,{passive:!0});const a=new IntersectionObserver(o=>{for(const c of o)c.isIntersecting&&(me(new URL(c.target.href)),a.unobserve(c.target))},{threshold:0});async function s(o,c){const l=Qe(o,P),h=l===t&&c>=n;if(!l||h)return;const{url:u,external:w,download:f}=we(l,T,A.hash);if(w||f)return;const m=Q(l),p=u&&se(v.url)===se(u);if(!(m.reload||p))if(c<=m.preload_data){t=l,n=N.tap;const d=await fe(u,!1);if(!d)return;cn(d)}else c<=m.preload_code&&(t=l,n=c,me(u))}function i(){a.disconnect();for(const o of P.querySelectorAll("a")){const{url:c,external:l,download:h}=we(o,T,A.hash);if(l||h)continue;const u=Q(o);u.reload||(u.preload_code===N.viewport&&a.observe(o),u.preload_code===N.eager&&me(c))}}G.add(i),i()}function V(e,t){if(e instanceof ce)return e.body;const n=ee(e),r=Xt(e);return A.hooks.handleError({error:e,event:t,status:n,message:r})??{message:r}}function pn(e,t={}){return e=new URL(Xe(e)),e.origin!==z?Promise.reject(new Error("goto: invalid URL")):Le(e,t,0)}function gn(e){if(typeof e=="function")ne.push(e);else{const{href:t}=new URL(e,location.href);ne.push(n=>n.href===t)}}function mn(){var t;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{let r=!1;if(Me(),!J){const a=gt(v,void 0,null,"leave"),s={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};at.forEach(i=>i(s))}r?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Me()}),(t=navigator.connection)!=null&&t.saveData||hn(),P.addEventListener("click",async n=>{if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const r=Qe(n.composedPath()[0],P);if(!r)return;const{url:a,external:s,target:i,download:o}=we(r,T,A.hash);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=Q(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||o)return;const[h,u]=(A.hash?a.hash.replace(/^#/,""):a.href).split("#"),w=h===he(location);if(s||c.reload&&(!w||!u)){ut({url:a,type:"link"})?J=!0:n.preventDefault();return}if(u!==void 0&&w){const[,f]=v.url.href.split("#");if(f===u){if(n.preventDefault(),u===""||u==="top"&&r.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const m=r.ownerDocument.getElementById(decodeURIComponent(u));m&&(m.scrollIntoView(),m.focus())}return}if(M=!0,Ee(S),e(a),!c.replace_state)return;M=!1}n.preventDefault(),await new Promise(f=>{requestAnimationFrame(()=>{setTimeout(f,0)}),setTimeout(f,100)}),await Z({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),P.addEventListener("submit",n=>{if(n.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(n.target),a=n.submitter;if(((a==null?void 0:a.formTarget)||r.target)==="_blank"||((a==null?void 0:a.formMethod)||r.method)!=="get")return;const o=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(ie(o,T,!1))return;const c=n.target,l=Q(c);if(l.reload)return;n.preventDefault(),n.stopPropagation();const h=new FormData(c),u=a==null?void 0:a.getAttribute("name");u&&h.append(u,(a==null?void 0:a.getAttribute("value"))??""),o.search=new URLSearchParams(h).toString(),Z({type:"form",url:o,keepfocus:l.keepfocus,noscroll:l.noscroll,replace_state:l.replace_state??o.href===location.href})}),addEventListener("popstate",async n=>{var r;if((r=n.state)!=null&&r[F]){const a=n.state[F];if($={},a===S)return;const s=j[a],i=n.state[ze]??{},o=new URL(n.state[$t]??location.href),c=n.state[K],l=v.url?he(location)===he(v.url):!1;if(c===L&&(rt||l)){i!==I.state&&(I.state=i),e(o),j[S]=Ae(),s&&scrollTo(s.x,s.y),S=a;return}const u=a-S;await Z({type:"popstate",url:o,popped:{state:i,scroll:s,delta:u},accept:()=>{S=a,L=c},block:()=>{history.go(-u)},nav_token:$})}else if(!M){const a=new URL(location.href);e(a),A.hash&&location.reload()}}),addEventListener("hashchange",()=>{M&&(M=!1,history.replaceState({...history.state,[F]:++S,[K]:L},"",location.href))});for(const n of document.querySelectorAll("link"))an.has(n.rel)&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&C.navigating.set(W.current=null)});function e(n){v.url=I.url=n,C.page.set(Pe(I)),C.page.notify()}}async function wn(e,{status:t=200,error:n,node_ids:r,params:a,route:s,server_route:i,data:o,form:c}){Ie=!0;const l=new URL(location.href);let h;({params:a={},route:s={id:null}}=await fe(l,!1)||{}),h=Re.find(({id:f})=>f===s.id);let u,w=!0;try{const f=r.map(async(p,d)=>{const _=o[d];return _!=null&&_.uses&&(_.uses=pt(_.uses)),Te({loader:A.nodes[p],url:l,params:a,route:s,parent:async()=>{const E={};for(let R=0;R<d;R+=1)Object.assign(E,(await f[R]).data);return E},server_data_node:xe(_)})}),m=await Promise.all(f);if(h){const p=h.layouts;for(let d=0;d<p.length;d++)p[d]||m.splice(d,0,void 0)}u=oe({url:l,params:a,branch:m,status:t,error:n,form:c,route:h??null})}catch(f){if(f instanceof ke){await B(new URL(f.location,location.href));return}u=await le({status:ee(f),error:await V(f,{url:l,params:a,route:s}),url:l,route:s}),e.textContent="",w=!1}u.props.page&&(u.props.page.state={}),ct(u,e,w)}async function ht(e,t){var s;const n=new URL(e);n.pathname=nn(e.pathname),e.pathname.endsWith("/")&&n.searchParams.append(zt,"1"),n.searchParams.append(Jt,t.map(i=>i?"1":"0").join(""));const r=window.fetch,a=await r(n.href,{});if(!a.ok){let i;throw(s=a.headers.get("content-type"))!=null&&s.includes("application/json")?i=await a.json():a.status===404?i="Not Found":a.status===500&&(i="Internal Error"),new ce(a.status,i)}return new Promise(async i=>{var w;const o=new Map,c=a.body.getReader(),l=new TextDecoder;function h(f){return Kt(f,{...A.decoders,Promise:m=>new Promise((p,d)=>{o.set(m,{fulfil:p,reject:d})})})}let u="";for(;;){const{done:f,value:m}=await c.read();if(f&&!u)break;for(u+=!m&&u?`
`:l.decode(m,{stream:!0});;){const p=u.indexOf(`
`);if(p===-1)break;const d=JSON.parse(u.slice(0,p));if(u=u.slice(p+1),d.type==="redirect")return i(d);if(d.type==="data")(w=d.nodes)==null||w.forEach(_=>{(_==null?void 0:_.type)==="data"&&(_.uses=pt(_.uses),_.data=h(_.data))}),i(d);else if(d.type==="chunk"){const{id:_,data:E,error:R}=d,g=o.get(_);o.delete(_),R?g.reject(h(R)):g.fulfil(h(E))}}}})}function pt(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url),search_params:new Set((e==null?void 0:e.search_params)??[])}}function yn(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const t=document.body,n=t.getAttribute("tabindex");t.tabIndex=-1,t.focus({preventScroll:!0,focusVisible:!1}),n!==null?t.setAttribute("tabindex",n):t.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let s=0;s<r.rangeCount;s+=1)a.push(r.getRangeAt(s));setTimeout(()=>{if(r.rangeCount===a.length){for(let s=0;s<r.rangeCount;s+=1){const i=a[s],o=r.getRangeAt(s);if(i.commonAncestorContainer!==o.commonAncestorContainer||i.startContainer!==o.startContainer||i.endContainer!==o.endContainer||i.startOffset!==o.startOffset||i.endOffset!==o.endOffset)return}r.removeAllRanges()}})}}}function gt(e,t,n,r){var c,l;let a,s;const i=new Promise((h,u)=>{a=h,s=u});return i.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((c=e.route)==null?void 0:c.id)??null},url:e.url},to:n&&{params:(t==null?void 0:t.params)??null,route:{id:((l=t==null?void 0:t.route)==null?void 0:l.id)??null},url:n},willUnload:!t,type:r,complete:i},fulfil:a,reject:s}}function Pe(e){return{data:e.data,error:e.error,form:e.form,params:e.params,route:e.route,state:e.state,status:e.status,url:e.url}}function _n(e){const t=new URL(e);return t.hash=decodeURIComponent(e.hash),t}export{In as a,kn as l,C as s};
