function b(){}function et(t,n){for(const e in n)t[e]=n[e];return t}function W(t){return t()}function J(){return Object.create(null)}function w(t){t.forEach(W)}function it(t){return typeof t=="function"}function st(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let A;function St(t,n){return A||(A=document.createElement("a")),A.href=n,t===A.href}function Nt(t,n){return t!=t?n==n:t!==n}function ct(t){return Object.keys(t).length===0}function rt(t,...n){if(t==null)return b;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function Mt(t,n,e){t.$$.on_destroy.push(rt(n,e))}function Ct(t,n,e,i){if(t){const s=K(t,n,e,i);return t[0](s)}}function K(t,n,e,i){return t[1]&&i?et(e.ctx.slice(),t[1](i(n))):e.ctx}function jt(t,n,e,i){if(t[2]&&i){const s=t[2](i(e));if(n.dirty===void 0)return s;if(typeof s=="object"){const u=[],r=Math.max(n.dirty.length,s.length);for(let l=0;l<r;l+=1)u[l]=n.dirty[l]|s[l];return u}return n.dirty|s}return n.dirty}function vt(t,n,e,i,s,u){if(s){const r=K(n,e,i,u);t.p(r,s)}}function qt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}let S=!1;function lt(){S=!0}function ot(){S=!1}function ut(t,n,e,i){for(;t<n;){const s=t+(n-t>>1);e(s)<=i?t=s+1:n=s}return t}function at(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let o=0;o<n.length;o++){const f=n[o];f.claim_order!==void 0&&c.push(f)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let s=0;for(let c=0;c<n.length;c++){const o=n[c].claim_order,f=(s>0&&n[e[s]].claim_order<=o?s+1:ut(1,s,d=>n[e[d]].claim_order,o))-1;i[c]=e[f]+1;const _=f+1;e[_]=c,s=Math.max(_,s)}const u=[],r=[];let l=n.length-1;for(let c=e[s]+1;c!=0;c=i[c-1]){for(u.push(n[c-1]);l>=c;l--)r.push(n[l]);l--}for(;l>=0;l--)r.push(n[l]);u.reverse(),r.sort((c,o)=>c.claim_order-o.claim_order);for(let c=0,o=0;c<r.length;c++){for(;o<u.length&&r[c].claim_order>=u[o].claim_order;)o++;const f=o<u.length?u[o]:null;t.insertBefore(r[c],f)}}function ft(t,n){if(S){for(at(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function dt(t,n,e){t.insertBefore(n,e||null)}function _t(t,n,e){S&&!e?ft(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function N(t){t.parentNode.removeChild(t)}function Ht(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function Q(t){return document.createElement(t)}function z(t){return document.createTextNode(t)}function Lt(){return z(" ")}function Bt(){return z("")}function zt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function ht(t){return Array.from(t.childNodes)}function U(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function V(t,n,e,i,s=!1){U(t);const u=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const l=t[r];if(n(l)){const c=e(l);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),l}}for(let r=t.claim_info.last_index-1;r>=0;r--){const l=t[r];if(n(l)){const c=e(l);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,l}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function mt(t,n,e,i){return V(t,s=>s.nodeName===n,s=>{const u=[];for(let r=0;r<s.attributes.length;r++){const l=s.attributes[r];e[l.name]||u.push(l.name)}u.forEach(r=>s.removeAttribute(r))},()=>i(n))}function Dt(t,n,e){return mt(t,n,e,Q)}function pt(t,n){return V(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>z(n),!0)}function Ot(t){return pt(t," ")}function X(t,n,e){for(let i=e;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===n)return i}return t.length}function Gt(t){const n=X(t,"HTML_TAG_START",0),e=X(t,"HTML_TAG_END",n);if(n===e)return new Y;U(t);const i=t.splice(n,e+1);N(i[0]),N(i[i.length-1]);const s=i.slice(1,i.length-1);for(const u of s)u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new Y(s)}function Pt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function Ft(t,n,e,i){t.style.setProperty(n,e,i?"important":"")}function It(t,n,e){t.classList[e?"add":"remove"](n)}function yt(t,n,e=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,e,!1,n),i}function Rt(t,n=document.body){return Array.from(n.querySelectorAll(t))}class gt{constructor(){this.e=this.n=null}c(n){this.h(n)}m(n,e,i=null){this.e||(this.e=Q(e.nodeName),this.t=e,this.c(n)),this.i(i)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.childNodes)}i(n){for(let e=0;e<this.n.length;e+=1)dt(this.t,this.n[e],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach(N)}}class Y extends gt{constructor(n){super();this.e=this.n=null,this.l=n}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let e=0;e<this.n.length;e+=1)_t(this.t,this.n[e],n)}}let M;function C(t){M=t}function $(){if(!M)throw new Error("Function called outside component initialization");return M}function Wt(t){$().$$.on_mount.push(t)}function Jt(t){$().$$.after_update.push(t)}function Kt(){const t=$();return(n,e)=>{const i=t.$$.callbacks[n];if(i){const s=yt(n,e);i.slice().forEach(u=>{u.call(t,s)})}}}function Qt(t,n){$().$$.context.set(t,n)}function Ut(t){return $().$$.context.get(t)}function Vt(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(i=>i.call(this,n))}const k=[],Z=[],j=[],D=[],bt=Promise.resolve();let O=!1;function xt(){O||(O=!0,bt.then(tt))}function G(t){j.push(t)}function Xt(t){D.push(t)}let P=!1;const F=new Set;function tt(){if(!P){P=!0;do{for(let t=0;t<k.length;t+=1){const n=k[t];C(n),wt(n.$$)}for(C(null),k.length=0;Z.length;)Z.pop()();for(let t=0;t<j.length;t+=1){const n=j[t];F.has(n)||(F.add(n),n())}j.length=0}while(k.length);for(;D.length;)D.pop()();O=!1,P=!1,F.clear()}}function wt(t){if(t.fragment!==null){t.update(),w(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(G)}}const v=new Set;let g;function Yt(){g={r:0,c:[],p:g}}function Zt(){g.r||w(g.c),g=g.p}function nt(t,n){t&&t.i&&(v.delete(t),t.i(n))}function $t(t,n,e,i){if(t&&t.o){if(v.has(t))return;v.add(t),g.c.push(()=>{v.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}}const tn=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function nn(t,n){$t(t,1,1,()=>{n.delete(t.key)})}function en(t,n,e,i,s,u,r,l,c,o,f,_){let d=t.length,m=u.length,h=d;const q={};for(;h--;)q[t[h].key]=h;const E=[],H=new Map,L=new Map;for(h=m;h--;){const a=_(s,u,h),p=e(a);let y=r.get(p);y?i&&y.p(a,n):(y=o(p,a),y.c()),H.set(p,E[h]=y),p in q&&L.set(p,Math.abs(h-q[p]))}const I=new Set,R=new Set;function B(a){nt(a,1),a.m(l,f),r.set(a.key,a),f=a.first,m--}for(;d&&m;){const a=E[m-1],p=t[d-1],y=a.key,T=p.key;a===p?(f=a.first,d--,m--):H.has(T)?!r.has(y)||I.has(y)?B(a):R.has(T)?d--:L.get(y)>L.get(T)?(R.add(y),B(a)):(I.add(T),d--):(c(p,r),d--)}for(;d--;){const a=t[d];H.has(a.key)||c(a,r)}for(;m;)B(E[m-1]);return E}function sn(t,n){const e={},i={},s={$$scope:1};let u=t.length;for(;u--;){const r=t[u],l=n[u];if(l){for(const c in r)c in l||(i[c]=1);for(const c in l)s[c]||(e[c]=l[c],s[c]=1);t[u]=l}else for(const c in r)s[c]=1}for(const r in i)r in e||(e[r]=void 0);return e}function cn(t){return typeof t=="object"&&t!==null?t:{}}function rn(t,n,e){const i=t.$$.props[n];i!==void 0&&(t.$$.bound[i]=e,e(t.$$.ctx[i]))}function ln(t){t&&t.c()}function on(t,n){t&&t.l(n)}function kt(t,n,e,i){const{fragment:s,on_mount:u,on_destroy:r,after_update:l}=t.$$;s&&s.m(n,e),i||G(()=>{const c=u.map(W).filter(it);r?r.push(...c):w(c),t.$$.on_mount=[]}),l.forEach(G)}function Et(t,n){const e=t.$$;e.fragment!==null&&(w(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function Tt(t,n){t.$$.dirty[0]===-1&&(k.push(t),xt(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function un(t,n,e,i,s,u,r,l=[-1]){const c=M;C(t);const o=t.$$={fragment:null,ctx:null,props:u,update:b,not_equal:s,bound:J(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:J(),dirty:l,skip_bound:!1,root:n.target||c.$$.root};r&&r(o.root);let f=!1;if(o.ctx=e?e(t,n.props||{},(_,d,...m)=>{const h=m.length?m[0]:d;return o.ctx&&s(o.ctx[_],o.ctx[_]=h)&&(!o.skip_bound&&o.bound[_]&&o.bound[_](h),f&&Tt(t,_)),d}):[],o.update(),f=!0,w(o.before_update),o.fragment=i?i(o.ctx):!1,n.target){if(n.hydrate){lt();const _=ht(n.target);o.fragment&&o.fragment.l(_),_.forEach(N)}else o.fragment&&o.fragment.c();n.intro&&nt(t.$$.fragment),kt(t,n.target,n.anchor,n.customElement),ot(),tt()}C(c)}class an{$destroy(){Et(this,1),this.$destroy=b}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}$set(n){this.$$set&&!ct(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const x=[];function fn(t,n){return{subscribe:At(t,n).subscribe}}function At(t,n=b){let e;const i=new Set;function s(l){if(st(t,l)&&(t=l,e)){const c=!x.length;for(const o of i)o[1](),x.push(o,t);if(c){for(let o=0;o<x.length;o+=2)x[o][0](x[o+1]);x.length=0}}}function u(l){s(l(t))}function r(l,c=b){const o=[l,c];return i.add(o),i.size===1&&(e=n(s)||b),l(t),()=>{i.delete(o),i.size===0&&(e(),e=null)}}return{set:s,update:u,subscribe:r}}export{Kt as $,Wt as A,et as B,At as C,Ct as D,vt as E,qt as F,jt as G,ft as H,b as I,fn as J,Y as K,Gt as L,Ht as M,Rt as N,en as O,Mt as P,tn as Q,Z as R,an as S,rn as T,Xt as U,nn as V,It as W,Ft as X,St as Y,Ut as Z,Nt as _,ht as a,Vt as a0,zt as b,Dt as c,N as d,Q as e,_t as f,pt as g,Pt as h,un as i,ln as j,Lt as k,Bt as l,on as m,Ot as n,kt as o,sn as p,cn as q,Yt as r,st as s,z as t,$t as u,Et as v,Zt as w,nt as x,Qt as y,Jt as z};
