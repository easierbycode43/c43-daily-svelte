var nt=Object.defineProperty,at=Object.defineProperties;var ot=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var G=(r,t,e)=>t in r?nt(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,R=(r,t)=>{for(var e in t||(t={}))J.call(t,e)&&G(r,e,t[e]);if(C)for(var e of C(t))x.call(t,e)&&G(r,e,t[e]);return r},W=(r,t)=>at(r,ot(t));var X=(r,t)=>{var e={};for(var s in r)J.call(r,s)&&t.indexOf(s)<0&&(e[s]=r[s]);if(r!=null&&C)for(var s of C(r))t.indexOf(s)<0&&x.call(r,s)&&(e[s]=r[s]);return e};import{S as lt,i as ct,s as ut,e as ft,c as ht,a as dt,d as E,b as P,f as $,t as _t,g as pt,h as gt,j as U,k as mt,l as y,m as M,n as wt,o as A,p as H,q as B,r as T,u as v,v as O,w as N,x as m,y as bt,z as yt,A as vt,B as K,C as Y}from"./chunks/vendor-eb8595ac.js";import{_ as V}from"./chunks/preload-helper-44e78077.js";function F(r){let t,e,s;const i=[r[2]||{}];var a=r[0][1];function n(o){let l={$$slots:{default:[Et]},$$scope:{ctx:o}};for(let c=0;c<i.length;c+=1)l=K(l,i[c]);return{props:l}}return a&&(t=new a(n(r))),{c(){t&&U(t.$$.fragment),e=y()},l(o){t&&M(t.$$.fragment,o),e=y()},m(o,l){t&&A(t,o,l),$(o,e,l),s=!0},p(o,l){const c=l&4?H(i,[B(o[2]||{})]):{};if(l&521&&(c.$$scope={dirty:l,ctx:o}),a!==(a=o[0][1])){if(t){T();const u=t;v(u.$$.fragment,1,0,()=>{O(u,1)}),N()}a?(t=new a(n(o)),U(t.$$.fragment),m(t.$$.fragment,1),A(t,e.parentNode,e)):t=null}else a&&t.$set(c)},i(o){s||(t&&m(t.$$.fragment,o),s=!0)},o(o){t&&v(t.$$.fragment,o),s=!1},d(o){o&&E(e),t&&O(t,o)}}}function Q(r){let t,e,s;const i=[r[3]||{}];var a=r[0][2];function n(o){let l={};for(let c=0;c<i.length;c+=1)l=K(l,i[c]);return{props:l}}return a&&(t=new a(n())),{c(){t&&U(t.$$.fragment),e=y()},l(o){t&&M(t.$$.fragment,o),e=y()},m(o,l){t&&A(t,o,l),$(o,e,l),s=!0},p(o,l){const c=l&8?H(i,[B(o[3]||{})]):{};if(a!==(a=o[0][2])){if(t){T();const u=t;v(u.$$.fragment,1,0,()=>{O(u,1)}),N()}a?(t=new a(n()),U(t.$$.fragment),m(t.$$.fragment,1),A(t,e.parentNode,e)):t=null}else a&&t.$set(c)},i(o){s||(t&&m(t.$$.fragment,o),s=!0)},o(o){t&&v(t.$$.fragment,o),s=!1},d(o){o&&E(e),t&&O(t,o)}}}function Et(r){let t,e,s=r[0][2]&&Q(r);return{c(){s&&s.c(),t=y()},l(i){s&&s.l(i),t=y()},m(i,a){s&&s.m(i,a),$(i,t,a),e=!0},p(i,a){i[0][2]?s?(s.p(i,a),a&1&&m(s,1)):(s=Q(i),s.c(),m(s,1),s.m(t.parentNode,t)):s&&(T(),v(s,1,1,()=>{s=null}),N())},i(i){e||(m(s),e=!0)},o(i){v(s),e=!1},d(i){s&&s.d(i),i&&E(t)}}}function kt(r){let t,e,s=r[0][1]&&F(r);return{c(){s&&s.c(),t=y()},l(i){s&&s.l(i),t=y()},m(i,a){s&&s.m(i,a),$(i,t,a),e=!0},p(i,a){i[0][1]?s?(s.p(i,a),a&1&&m(s,1)):(s=F(i),s.c(),m(s,1),s.m(t.parentNode,t)):s&&(T(),v(s,1,1,()=>{s=null}),N())},i(i){e||(m(s),e=!0)},o(i){v(s),e=!1},d(i){s&&s.d(i),i&&E(t)}}}function Z(r){let t,e=r[5]&&tt(r);return{c(){t=ft("div"),e&&e.c(),this.h()},l(s){t=ht(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,class:!0});var i=dt(t);e&&e.l(i),i.forEach(E),this.h()},h(){P(t,"id","svelte-announcer"),P(t,"aria-live","assertive"),P(t,"aria-atomic","true"),P(t,"class","svelte-1j55zn5")},m(s,i){$(s,t,i),e&&e.m(t,null)},p(s,i){s[5]?e?e.p(s,i):(e=tt(s),e.c(),e.m(t,null)):e&&(e.d(1),e=null)},d(s){s&&E(t),e&&e.d()}}}function tt(r){let t;return{c(){t=_t(r[6])},l(e){t=pt(e,r[6])},m(e,s){$(e,t,s)},p(e,s){s&64&&gt(t,e[6])},d(e){e&&E(t)}}}function Rt(r){let t,e,s,i;const a=[r[1]||{}];var n=r[0][0];function o(c){let u={$$slots:{default:[kt]},$$scope:{ctx:c}};for(let h=0;h<a.length;h+=1)u=K(u,a[h]);return{props:u}}n&&(t=new n(o(r)));let l=r[4]&&Z(r);return{c(){t&&U(t.$$.fragment),e=mt(),l&&l.c(),s=y()},l(c){t&&M(t.$$.fragment,c),e=wt(c),l&&l.l(c),s=y()},m(c,u){t&&A(t,c,u),$(c,e,u),l&&l.m(c,u),$(c,s,u),i=!0},p(c,[u]){const h=u&2?H(a,[B(c[1]||{})]):{};if(u&525&&(h.$$scope={dirty:u,ctx:c}),n!==(n=c[0][0])){if(t){T();const f=t;v(f.$$.fragment,1,0,()=>{O(f,1)}),N()}n?(t=new n(o(c)),U(t.$$.fragment),m(t.$$.fragment,1),A(t,e.parentNode,e)):t=null}else n&&t.$set(h);c[4]?l?l.p(c,u):(l=Z(c),l.c(),l.m(s.parentNode,s)):l&&(l.d(1),l=null)},i(c){i||(t&&m(t.$$.fragment,c),i=!0)},o(c){t&&v(t.$$.fragment,c),i=!1},d(c){t&&O(t,c),c&&E(e),l&&l.d(c),c&&E(s)}}}function $t(r,t,e){let{stores:s}=t,{page:i}=t,{components:a}=t,{props_0:n=null}=t,{props_1:o=null}=t,{props_2:l=null}=t;bt("__svelte__",s),yt(s.page.notify);let c=!1,u=!1,h=null;return vt(()=>{const f=s.page.subscribe(()=>{c&&(e(5,u=!0),e(6,h=document.title||"untitled page"))});return e(4,c=!0),f}),r.$$set=f=>{"stores"in f&&e(7,s=f.stores),"page"in f&&e(8,i=f.page),"components"in f&&e(0,a=f.components),"props_0"in f&&e(1,n=f.props_0),"props_1"in f&&e(2,o=f.props_1),"props_2"in f&&e(3,l=f.props_2)},r.$$.update=()=>{r.$$.dirty&384&&s.page.set(i)},[a,n,o,l,c,u,h,s,i]}class St extends lt{constructor(t){super();ct(this,t,$t,Rt,ut,{stores:7,page:8,components:0,props_0:1,props_1:2,props_2:3})}}const S=[()=>V(()=>import("./pages/__layout.svelte-45a1c964.js"),["pages/__layout.svelte-45a1c964.js","assets/pages/__layout.svelte-ffdedffc.css","chunks/vendor-eb8595ac.js"]),()=>V(()=>import("./error.svelte-ba6e3754.js"),["error.svelte-ba6e3754.js","chunks/vendor-eb8595ac.js"]),()=>V(()=>import("./pages/index.svelte-c460ee77.js"),["pages/index.svelte-c460ee77.js","assets/pages/index.svelte-65f2349a.css","chunks/preload-helper-44e78077.js","chunks/vendor-eb8595ac.js","pages/upnext.svelte-1e4a63a0.js","assets/pages/upnext.svelte-8055d014.css"]),()=>V(()=>import("./pages/upnext.svelte-1e4a63a0.js"),["pages/upnext.svelte-1e4a63a0.js","assets/pages/upnext.svelte-8055d014.css","chunks/vendor-eb8595ac.js"])],qt=[,[/^\/$/,[S[0],S[2]],[S[1]]],,,[/^\/upnext\/?$/,[S[0],S[3]],[S[1]]]],Lt=[S[0](),S[1]()];function Ut(r){let t=r.baseURI;if(!t){const e=r.getElementsByTagName("base");t=e.length?e[0].href:r.URL}return t}let et="";function At(r){et=r.base,r.assets}function z(){return{x:pageXOffset,y:pageYOffset}}function st(r){for(;r&&r.nodeName.toUpperCase()!=="A";)r=r.parentNode;return r}function rt(r){return r instanceof SVGAElement?new URL(r.href.baseVal,document.baseURI):new URL(r.href)}class Ot{constructor({base:t,routes:e,trailing_slash:s,renderer:i}){this.base=t,this.routes=e,this.trailing_slash=s,this.navigating=0,this.renderer=i,i.router=this,this.enabled=!0,document.body.setAttribute("tabindex","-1"),history.replaceState(history.state||{},"",location.href)}init_listeners(){"scrollRestoration"in history&&(history.scrollRestoration="manual"),addEventListener("beforeunload",()=>{history.scrollRestoration="auto"}),addEventListener("load",()=>{history.scrollRestoration="manual"});let t;addEventListener("scroll",()=>{clearTimeout(t),t=setTimeout(()=>{const a=W(R({},history.state||{}),{"sveltekit:scroll":z()});history.replaceState(a,document.title,window.location.href)},200)});const e=a=>{const n=st(a.target);n&&n.href&&n.hasAttribute("sveltekit:prefetch")&&this.prefetch(rt(n))};let s;const i=a=>{clearTimeout(s),s=setTimeout(()=>{e(a)},20)};addEventListener("touchstart",e),addEventListener("mousemove",i),addEventListener("click",a=>{if(!this.enabled||a.button||a.which!==1||a.metaKey||a.ctrlKey||a.shiftKey||a.altKey||a.defaultPrevented)return;const n=st(a.target);if(!n||!n.href)return;const o=rt(n),l=o.toString();if(l===location.href){location.hash||a.preventDefault();return}const c=(n.getAttribute("rel")||"").split(/\s+/);if(n.hasAttribute("download")||c&&c.includes("external")||(n instanceof SVGAElement?n.target.baseVal:n.target)||!this.owns(o))return;const u=n.hasAttribute("sveltekit:noscroll"),h=l.indexOf("#"),f=location.href.indexOf("#"),b=h>=0?l.substring(0,h):l,p=f>=0?location.href.substring(0,f):location.href;history.pushState({},"",o.href),b===p&&window.dispatchEvent(new HashChangeEvent("hashchange")),this._navigate(o,u?z():null,!1,[],o.hash),a.preventDefault()}),addEventListener("popstate",a=>{if(a.state&&this.enabled){const n=new URL(location.href);this._navigate(n,a.state["sveltekit:scroll"],!1,[])}})}owns(t){return t.origin===location.origin&&t.pathname.startsWith(this.base)}parse(t){if(this.owns(t)){const e=t.pathname.slice(this.base.length)||"/",s=decodeURI(e),i=this.routes.filter(([o])=>o.test(s)),a=new URLSearchParams(t.search);return{id:`${e}?${a}`,routes:i,path:e,decoded_path:s,query:a}}}async goto(t,{noscroll:e=!1,replaceState:s=!1,keepfocus:i=!1,state:a={}}={},n){const o=new URL(t,Ut(document));return this.enabled&&this.owns(o)?(history[s?"replaceState":"pushState"](a,"",t),this._navigate(o,e?z():null,i,n,o.hash)):(location.href=o.href,new Promise(()=>{}))}enable(){this.enabled=!0}disable(){this.enabled=!1}async prefetch(t){const e=this.parse(t);if(!e)throw new Error("Attempted to prefetch a URL that does not belong to this app");return this.renderer.load(e)}async _navigate(t,e,s,i,a){const n=this.parse(t);if(!n)throw new Error("Attempted to navigate to a URL that does not belong to this app");if(this.navigating||dispatchEvent(new CustomEvent("sveltekit:navigation-start")),this.navigating++,n.path!=="/"){const o=n.path.endsWith("/");(o&&this.trailing_slash==="never"||!o&&this.trailing_slash==="always"&&!(n.path.split("/").pop()||"").includes("."))&&(n.path=o?n.path.slice(0,-1):n.path+"/",history.replaceState({},"",`${this.base}${n.path}${location.search}`))}await this.renderer.handle_navigation(n,i,!1,{hash:a,scroll:e,keepfocus:s}),this.navigating--,this.navigating||dispatchEvent(new CustomEvent("sveltekit:navigation-end"))}}function it(r){return r instanceof Error||r&&r.name&&r.message?r:new Error(JSON.stringify(r))}function jt(r){let t=5381,e=r.length;if(typeof r=="string")for(;e;)t=t*33^r.charCodeAt(--e);else for(;e;)t=t*33^r[--e];return(t>>>0).toString(36)}function Tt(r){const t=r.status&&r.status>=400&&r.status<=599&&!r.redirect;if(r.error||t){const e=r.status;if(!r.error&&t)return{status:e||500,error:new Error};const s=typeof r.error=="string"?new Error(r.error):r.error;return s instanceof Error?!e||e<400||e>599?(console.warn('"error" returned from load() without a valid status code \u2014 defaulting to 500'),{status:500,error:s}):{status:e,error:s}:{status:500,error:new Error(`"error" property returned from load() must be a string or instance of Error, received type "${typeof s}"`)}}if(r.redirect){if(!r.status||Math.floor(r.status/100)!==3)return{status:500,error:new Error('"redirect" property returned from load() must be accompanied by a 3xx status code')};if(typeof r.redirect!="string")return{status:500,error:new Error('"redirect" property returned from load() must be a string')}}if(r.context)throw new Error('You are returning "context" from a load function. "context" was renamed to "stuff", please adjust your code accordingly.');return r}function Nt(r){const t=Y(r);let e=!0;function s(){e=!0,t.update(n=>n)}function i(n){e=!1,t.set(n)}function a(n){let o;return t.subscribe(l=>{(o===void 0||e&&l!==o)&&n(o=l)})}return{notify:s,set:i,subscribe:a}}function It(r,t){const e=typeof r=="string"?r:r.url;let s=`script[data-type="svelte-data"][data-url=${JSON.stringify(e)}]`;t&&typeof t.body=="string"&&(s+=`[data-body="${jt(t.body)}"]`);const i=document.querySelector(s);if(i&&i.textContent){const a=JSON.parse(i.textContent),{body:n}=a,o=X(a,["body"]);return Promise.resolve(new Response(n,o))}return fetch(r,t)}class Ct{constructor({Root:t,fallback:e,target:s,session:i,host:a}){this.Root=t,this.fallback=e,this.host=a,this.router,this.target=s,this.started=!1,this.session_id=1,this.invalid=new Set,this.invalidating=null,this.current={page:null,session_id:0,branch:[]},this.cache=new Map,this.loading={id:null,promise:null},this.stores={page:Nt({}),navigating:Y(null),session:Y(i)},this.$session=null,this.root=null;let n=!1;this.stores.session.subscribe(async o=>{if(this.$session=o,!n||!this.router)return;this.session_id+=1;const l=this.router.parse(new URL(location.href));l&&this.update(l,[],!0)}),n=!0}async start({status:t,error:e,nodes:s,page:i}){const a=[];let n={},o,l;try{for(let c=0;c<s.length;c+=1){const u=c===s.length-1,h=await this._load_node({module:await s[c],page:i,stuff:n,status:u?t:void 0,error:u?e:void 0});if(a.push(h),h&&h.loaded)if(h.loaded.error){if(e)throw h.loaded.error;l={status:h.loaded.status,error:h.loaded.error,path:i.path,query:i.query}}else h.loaded.stuff&&(n=R(R({},n),h.loaded.stuff))}o=l?await this._load_error(l):await this._get_navigation_result_from_branch({page:i,branch:a})}catch(c){if(e)throw c;o=await this._load_error({status:500,error:it(c),path:i.path,query:i.query})}if(o.redirect){location.href=new URL(o.redirect,location.href).href;return}this._init(o)}async handle_navigation(t,e,s,i){this.started&&this.stores.navigating.set({from:{path:this.current.page.path,query:this.current.page.query},to:{path:t.path,query:t.query}}),await this.update(t,e,s,i)}async update(t,e,s,i){var l;const a=this.token={};let n=await this._get_navigation_result(t,s);if(a!==this.token)return;if(this.invalid.clear(),n.redirect)if(e.length>10||e.includes(t.path))n=await this._load_error({status:500,error:new Error("Redirect loop"),path:t.path,query:t.query});else{this.router?this.router.goto(n.redirect,{replaceState:!0},[...e,t.path]):location.href=new URL(n.redirect,location.href).href;return}if(n.reload?location.reload():this.started?(this.current=n.state,this.root.$set(n.props),this.stores.navigating.set(null)):this._init(n),(l=getSelection())==null||l.removeAllRanges(),!i)await 0;else{const{hash:c,scroll:u,keepfocus:h}=i;h||document.body.focus();const f=Math.round(pageYOffset),b=document.documentElement.scrollHeight-innerHeight;await 0;const p=Math.round(pageYOffset),k=document.documentElement.scrollHeight-innerHeight;if(p===Math.min(f,k)||b-f==k-p){const q=c&&document.getElementById(c.slice(1));u?scrollTo(u.x,u.y):q?q.scrollIntoView():scrollTo(0,0)}}if(this.loading.promise=null,this.loading.id=null,!this.router)return;const o=n.state.branch[n.state.branch.length-1];o&&o.module.router===!1?this.router.disable():this.router.enable()}load(t){return this.loading.promise=this._get_navigation_result(t,!1),this.loading.id=t.id,this.loading.promise}invalidate(t){return this.invalid.add(t),this.invalidating||(this.invalidating=Promise.resolve().then(async()=>{const e=this.router&&this.router.parse(new URL(location.href));e&&await this.update(e,[],!0),this.invalidating=null})),this.invalidating}_init(t){this.current=t.state;const e=document.querySelector("style[data-svelte]");e&&e.remove(),this.root=new this.Root({target:this.target,props:R({stores:this.stores},t.props),hydrate:!0}),this.started=!0}async _get_navigation_result(t,e){if(this.loading.id===t.id&&this.loading.promise)return this.loading.promise;for(let s=0;s<t.routes.length;s+=1){const i=t.routes[s];let a=s+1;for(;a<t.routes.length;){const o=t.routes[a];if(o[0].toString()===i[0].toString())o[1].forEach(l=>l()),a+=1;else break}const n=await this._load({route:i,info:t},e);if(n)return n}return await this._load_error({status:404,error:new Error(`Not found: ${t.path}`),path:t.path,query:t.query})}async _get_navigation_result_from_branch({page:t,branch:e}){const s=e.filter(Boolean),i=s.find(l=>l.loaded&&l.loaded.redirect),a={redirect:i&&i.loaded?i.loaded.redirect:void 0,state:{page:t,branch:e,session_id:this.session_id},props:{components:s.map(l=>l.module.default)}};for(let l=0;l<s.length;l+=1){const c=s[l].loaded;a.props[`props_${l}`]=c?await c.props:null}(!this.current.page||t.path!==this.current.page.path||t.query.toString()!==this.current.page.query.toString())&&(a.props.page=t);const n=s[s.length-1],o=n.loaded&&n.loaded.maxage;if(o){const l=`${t.path}?${t.query}`;let c=!1;const u=()=>{this.cache.get(l)===a&&this.cache.delete(l),f(),clearTimeout(h)},h=setTimeout(u,o*1e3),f=this.stores.session.subscribe(()=>{c&&u()});c=!0,this.cache.set(l,a)}return a}async _load_node({status:t,error:e,module:s,page:i,stuff:a}){const n={module:s,uses:{params:new Set,path:!1,query:!1,session:!1,stuff:!1,dependencies:[]},loaded:null,stuff:a},o={};for(const c in i.params)Object.defineProperty(o,c,{get(){return n.uses.params.add(c),i.params[c]},enumerable:!0});const l=this.$session;if(s.load){const{started:c}=this,u={page:{host:i.host,params:o,get path(){return n.uses.path=!0,i.path},get query(){return n.uses.query=!0,i.query}},get session(){return n.uses.session=!0,l},get stuff(){return n.uses.stuff=!0,R({},a)},fetch(f,b){const p=typeof f=="string"?f:f.url,{href:k}=new URL(p,new URL(i.path,document.baseURI));return n.uses.dependencies.push(k),c?fetch(f,b):It(f,b)}};e&&(u.status=t,u.error=e);const h=await s.load.call(null,u);if(!h)return;n.loaded=Tt(h),n.loaded.stuff&&(n.stuff=n.loaded.stuff)}return n}async _load({route:t,info:{path:e,decoded_path:s,query:i}},a){const n=`${s}?${i}`;if(!a){const d=this.cache.get(n);if(d)return d}const[o,l,c,u]=t,h=u?u(o.exec(s)):{},f=this.current.page&&{path:e!==this.current.page.path,params:Object.keys(h).filter(d=>this.current.page.params[d]!==h[d]),query:i.toString()!==this.current.page.query.toString(),session:this.session_id!==this.current.session_id},b={host:this.host,path:e,query:i,params:h};let p=[],k={},D=!1,q=200,j;l.forEach(d=>d());t:for(let d=0;d<l.length;d+=1){let _;try{if(!l[d])continue;const w=await l[d](),g=this.current.branch[d];if(!g||w!==g.module||f.path&&g.uses.path||f.params.some(L=>g.uses.params.has(L))||f.query&&g.uses.query||f.session&&g.uses.session||g.uses.dependencies.some(L=>this.invalid.has(L))||D&&g.uses.stuff){_=await this._load_node({module:w,page:b,stuff:k});const L=d===l.length-1;if(_&&_.loaded){if(_.loaded.error&&(q=_.loaded.status,j=_.loaded.error),_.loaded.redirect)return{redirect:_.loaded.redirect,props:{},state:this.current};_.loaded.stuff&&(D=!0)}else if(L&&w.load)return}else _=g}catch(w){q=500,j=it(w)}if(j){for(;d--;)if(c[d]){let w,g,I=d;for(;!(g=p[I]);)I-=1;try{if(w=await this._load_node({status:q,error:j,module:await c[d](),page:b,stuff:g.stuff}),w&&w.loaded&&w.loaded.error)continue;p=p.slice(0,I+1).concat(w);break t}catch{continue}}return await this._load_error({status:q,error:j,path:e,query:i})}else _&&_.loaded&&_.loaded.stuff&&(k=R(R({},k),_.loaded.stuff)),p.push(_)}return await this._get_navigation_result_from_branch({page:b,branch:p})}async _load_error({status:t,error:e,path:s,query:i}){const a={host:this.host,path:s,query:i,params:{}},n=await this._load_node({module:await this.fallback[0],page:a,stuff:{}}),o=[n,await this._load_node({status:t,error:e,module:await this.fallback[1],page:a,stuff:n&&n.loaded&&n.loaded.stuff||{}})];return await this._get_navigation_result_from_branch({page:a,branch:o})}}async function Mt({paths:r,target:t,session:e,host:s,route:i,spa:a,trailing_slash:n,hydrate:o}){const l=new Ct({Root:St,fallback:Lt,target:t,session:e,host:s}),c=i?new Ot({base:r.base,routes:qt,trailing_slash:n,renderer:l}):null;At(r),o&&await l.start(o),c&&(a&&c.goto(location.href,{replaceState:!0},[]),c.init_listeners()),dispatchEvent(new CustomEvent("sveltekit:start"))}export{Mt as start};
