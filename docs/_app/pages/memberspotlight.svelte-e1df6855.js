import{S as B,i as F,s as K,l as h,f as d,x as p,e as k,k as y,c as v,a as j,n as w,d as u,b as m,H as U,K as X,L as Y,M as O,Z,_ as $,u as g,w as N,Y as z,X as b,$ as D,a0 as C,r as R}from"../chunks/vendor-2d5ccea2.js";import{b as G}from"../chunks/base-090ed074.js";function T(s,l,n){const e=s.slice();return e[4]=l[n],e[6]=n,e}function I(s,l,n){const e=s.slice();return e[7]=l[n],e}function S(s,l,n){const e=s.slice();return e[10]=l[n],e}function H(s){let l,n,e,t,o,c=s[4].data.body.content,i=[];for(let f=0;f<c.length;f+=1)i[f]=P(I(s,c,f));return{c(){l=k("section");for(let f=0;f<i.length;f+=1)i[f].c();n=y(),this.h()},l(f){l=v(f,"SECTION",{class:!0});var r=j(l);for(let a=0;a<i.length;a+=1)i[a].l(r);n=w(r),r.forEach(u),this.h()},h(){m(l,"class","bubble left "+s[6]+" svelte-1kvtcg8")},m(f,r){d(f,l,r);for(let a=0;a<i.length;a+=1)i[a].m(l,null);U(l,n),o=!0},p(f,r){if(r&5){c=f[4].data.body.content;let a;for(a=0;a<c.length;a+=1){const _=I(f,c,a);i[a]?i[a].p(_,r):(i[a]=P(_),i[a].c(),i[a].m(l,n))}for(;a<i.length;a+=1)i[a].d(1);i.length=c.length}},i(f){o||(Z(()=>{t&&t.end(1),e=D(l,C,{x:200,duration:2e3,delay:800}),e.start()}),o=!0)},o(f){e&&e.invalidate(),t=$(l,C,{x:-2e3,duration:750}),o=!1},d(f){f&&u(l),O(i,f),f&&t&&t.end()}}}function M(s){let l,n=s[7].paragraph.elements,e=[];for(let t=0;t<n.length;t+=1)e[t]=L(S(s,n,t));return{c(){for(let t=0;t<e.length;t+=1)e[t].c();l=h()},l(t){for(let o=0;o<e.length;o+=1)e[o].l(t);l=h()},m(t,o){for(let c=0;c<e.length;c+=1)e[c].m(t,o);d(t,l,o)},p(t,o){if(o&5){n=t[7].paragraph.elements;let c;for(c=0;c<n.length;c+=1){const i=S(t,n,c);e[c]?e[c].p(i,o):(e[c]=L(i),e[c].c(),e[c].m(l.parentNode,l))}for(;c<e.length;c+=1)e[c].d(1);e.length=n.length}},d(t){O(e,t),t&&u(l)}}}function q(s){let l,n=s[2](s[10],s[4].data.title.replace("Testimonials - ",""))+"",e;return{c(){l=new X,e=h(),this.h()},l(t){l=Y(t),e=h(),this.h()},h(){l.a=e},m(t,o){l.m(n,t,o),d(t,e,o)},p(t,o){o&1&&n!==(n=t[2](t[10],t[4].data.title.replace("Testimonials - ",""))+"")&&l.p(n)},d(t){t&&u(e),t&&l.d()}}}function L(s){let l,n=(s[10].inlineObjectElement||s[10].textRun&&s[10].textRun.content!==`
`)&&q(s);return{c(){n&&n.c(),l=h()},l(e){n&&n.l(e),l=h()},m(e,t){n&&n.m(e,t),d(e,l,t)},p(e,t){e[10].inlineObjectElement||e[10].textRun&&e[10].textRun.content!==`
`?n?n.p(e,t):(n=q(e),n.c(),n.m(l.parentNode,l)):n&&(n.d(1),n=null)},d(e){n&&n.d(e),e&&u(l)}}}function P(s){let l,n=s[7].paragraph&&M(s);return{c(){n&&n.c(),l=h()},l(e){n&&n.l(e),l=h()},m(e,t){n&&n.m(e,t),d(e,l,t)},p(e,t){e[7].paragraph?n?n.p(e,t):(n=M(e),n.c(),n.m(l.parentNode,l)):n&&(n.d(1),n=null)},d(e){n&&n.d(e),e&&u(l)}}}function A(s){let l,n,e=s[6]==s[1]&&H(s);return{c(){e&&e.c(),l=h()},l(t){e&&e.l(t),l=h()},m(t,o){e&&e.m(t,o),d(t,l,o),n=!0},p(t,o){t[6]==t[1]?e?(e.p(t,o),o&2&&p(e,1)):(e=H(t),e.c(),p(e,1),e.m(l.parentNode,l)):e&&(R(),g(e,1,1,()=>{e=null}),N())},i(t){n||(p(e),n=!0)},o(t){g(e),n=!1},d(t){e&&e.d(t),t&&u(l)}}}function J(s){let l,n,e,t,o,c=s[0],i=[];for(let r=0;r<c.length;r+=1)i[r]=A(T(s,c,r));const f=r=>g(i[r],1,1,()=>{i[r]=null});return{c(){l=k("iframe"),e=y(),t=k("section");for(let r=0;r<i.length;r+=1)i[r].c();this.h()},l(r){l=v(r,"IFRAME",{src:!0,title:!0,style:!0}),j(l).forEach(u),e=w(r),t=v(r,"SECTION",{id:!0,class:!0});var a=j(t);for(let _=0;_<i.length;_+=1)i[_].l(a);a.forEach(u),this.h()},h(){z(l.src,n="/c43")||m(l,"src",n),m(l,"title","C43"),b(l,"border-width","0"),b(l,"height","100vh"),b(l,"position","absolute"),b(l,"top","0"),b(l,"width","100%"),m(t,"id","wrpr"),m(t,"class","svelte-1kvtcg8")},m(r,a){d(r,l,a),d(r,e,a),d(r,t,a);for(let _=0;_<i.length;_+=1)i[_].m(t,null);o=!0},p(r,[a]){if(a&7){c=r[0];let _;for(_=0;_<c.length;_+=1){const E=T(r,c,_);i[_]?(i[_].p(E,a),p(i[_],1)):(i[_]=A(E),i[_].c(),p(i[_],1),i[_].m(t,null))}for(R(),_=c.length;_<i.length;_+=1)f(_);N()}},i(r){if(!o){for(let a=0;a<c.length;a+=1)p(i[a]);o=!0}},o(r){i=i.filter(Boolean);for(let a=0;a<i.length;a+=1)g(i[a]);o=!1},d(r){r&&u(l),r&&u(e),r&&u(t),O(i,r)}}}const x=async({fetch:s})=>({props:{data:await(await s("memberspotlight.json")).json()}});function Q(s,l,n){let{data:e}=l,t=0;setInterval(()=>{t<e.length-1?n(1,t++,t):n(1,t=0)},1e4);let o={};e.forEach(i=>{i.data.inlineObjects&&Object.keys(i.data.inlineObjects).forEach(f=>{o[f]=i.data.inlineObjects[f]})});function c(i,f){if(i.inlineObjectElement){let{inlineObjectElement:r}=i,{contentUri:a}=o[r.inlineObjectId].inlineObjectProperties.embeddedObject.imageProperties;return a=`${G}/${f.toLowerCase().replace(/\s/g,"_")}.png`,`
            <img src='${a}' alt='ICON' height='58' style='border-radius: 50%; position: absolute; right: 25px; bottom: 25px;' />
            `}return`<p class='content'>${i.textRun.content}</p>`}return s.$$set=i=>{"data"in i&&n(0,e=i.data)},[e,t,c]}class ee extends B{constructor(l){super();F(this,l,Q,J,K,{data:0})}}export{ee as default,x as load};
