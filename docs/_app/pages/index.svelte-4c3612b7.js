import{J as H,S as J,i as K,s as R,e as b,k as N,l as P,c as k,a as M,d as _,n as S,b as y,f as g,t as w,g as D,K as I,H as v,h as j,L as U,M as G,N as Q,I as A,O as V,P as W}from"../chunks/vendor-2bddb9ee.js";const C=H(new Date,function(e){const t=setInterval(()=>{e(new Date)},1e3);return function(){clearInterval(t)}});function q(n,e,t){const s=n.slice();return s[5]=e[t][0],s[6]=e[t][1],s[8]=t,s}function B(n,e,t){const s=n.slice();return s[9]=e[t],s}function X(n){let e=n[3].format(n[2])+"",t;return{c(){t=w(e)},l(s){t=D(s,e)},m(s,r){g(s,t,r)},p(s,r){r&4&&e!==(e=s[3].format(s[2])+"")&&j(t,e)},d(s){s&&_(t)}}}function Y(n){let e=n[5]+"",t;return{c(){t=w(e)},l(s){t=D(s,e)},m(s,r){g(s,t,r)},p(s,r){r&1&&e!==(e=s[5]+"")&&j(t,e)},d(s){s&&_(t)}}}function T(n){let e;return{c(){e=b("span"),this.h()},l(t){e=k(t,"SPAN",{class:!0}),M(e).forEach(_),this.h()},h(){y(e,"class","green-dot svelte-gxemf")},m(t,s){g(t,e,s)},d(t){t&&_(e)}}}function z(n){let e,t,s,r=n[9].summary+"",p,h,c,l=n[9].start+"",i,a,u=n[9].end+"",o,E,m=n[9].startMs<=n[1]&&n[9].endMs>=n[1]&&T();return{c(){e=b("li"),m&&m.c(),t=N(),s=b("span"),p=w(r),h=N(),c=b("span"),i=w(l),a=w(" - "),o=w(u),E=N(),this.h()},l(f){e=k(f,"LI",{class:!0});var d=M(e);m&&m.l(d),t=S(d),s=k(d,"SPAN",{class:!0});var O=M(s);p=D(O,r),O.forEach(_),h=S(d),c=k(d,"SPAN",{class:!0});var L=M(c);i=D(L,l),a=D(L," - "),o=D(L,u),L.forEach(_),E=S(d),d.forEach(_),this.h()},h(){y(s,"class","event svelte-gxemf"),y(c,"class","time svelte-gxemf"),y(e,"class","svelte-gxemf"),I(e,"starting",n[9].startMs-6e5<=n[1]&&n[9].startMs+3e5>=n[1]),I(e,"active",n[9].startMs<=n[1]&&n[9].endMs>=n[1]),I(e,"hidden",n[9].endMs<=n[1])},m(f,d){g(f,e,d),m&&m.m(e,null),v(e,t),v(e,s),v(s,p),v(e,h),v(e,c),v(c,i),v(c,a),v(c,o),v(e,E)},p(f,d){f[9].startMs<=f[1]&&f[9].endMs>=f[1]?m||(m=T(),m.c(),m.m(e,t)):m&&(m.d(1),m=null),d&1&&r!==(r=f[9].summary+"")&&j(p,r),d&1&&l!==(l=f[9].start+"")&&j(i,l),d&1&&u!==(u=f[9].end+"")&&j(o,u),d&3&&I(e,"starting",f[9].startMs-6e5<=f[1]&&f[9].startMs+3e5>=f[1]),d&3&&I(e,"active",f[9].startMs<=f[1]&&f[9].endMs>=f[1]),d&3&&I(e,"hidden",f[9].endMs<=f[1])},d(f){f&&_(e),m&&m.d()}}}function F(n,e){let t,s,r;function p(a,u){return a[5]!==a[4]?Y:X}let h=p(e),c=h(e),l=e[6],i=[];for(let a=0;a<l.length;a+=1)i[a]=z(B(e,l,a));return{key:n,first:null,c(){t=b("li"),c.c(),s=N();for(let a=0;a<i.length;a+=1)i[a].c();r=P(),this.h()},l(a){t=k(a,"LI",{class:!0});var u=M(t);c.l(u),u.forEach(_),s=S(a);for(let o=0;o<i.length;o+=1)i[o].l(a);r=P(),this.h()},h(){y(t,"class","day-label svelte-gxemf"),this.first=t},m(a,u){g(a,t,u),c.m(t,null),g(a,s,u);for(let o=0;o<i.length;o+=1)i[o].m(a,u);g(a,r,u)},p(a,u){if(e=a,h===(h=p(e))&&c?c.p(e,u):(c.d(1),c=h(e),c&&(c.c(),c.m(t,null))),u&3){l=e[6];let o;for(o=0;o<l.length;o+=1){const E=B(e,l,o);i[o]?i[o].p(E,u):(i[o]=z(E),i[o].c(),i[o].m(r.parentNode,r))}for(;o<i.length;o+=1)i[o].d(1);i.length=l.length}},d(a){a&&_(t),c.d(),a&&_(s),U(i,a),a&&_(r)}}}function Z(n){let e,t,s,r=[],p=new Map,h=Object.entries(n[0].eventsByDay);const c=l=>l[5];for(let l=0;l<h.length;l+=1){let i=q(n,h,l),a=c(i);p.set(a,r[l]=F(a,i))}return{c(){e=N(),t=b("section"),s=b("ul");for(let l=0;l<r.length;l+=1)r[l].c();this.h()},l(l){G('[data-svelte="svelte-z8c47p"]',document.head).forEach(_),e=S(l),t=k(l,"SECTION",{class:!0});var a=M(t);s=k(a,"UL",{class:!0});var u=M(s);for(let o=0;o<r.length;o+=1)r[o].l(u);u.forEach(_),a.forEach(_),this.h()},h(){document.title="C43 Events",y(s,"class","svelte-gxemf"),y(t,"class","svelte-gxemf")},m(l,i){g(l,e,i),g(l,t,i),v(t,s);for(let a=0;a<r.length;a+=1)r[a].m(s,null)},p(l,[i]){i&31&&(h=Object.entries(l[0].eventsByDay),r=Q(r,i,c,1,l,h,p,s,W,F,null,q))},i:A,o:A,d(l){l&&_(e),l&&_(t);for(let i=0;i<r.length;i+=1)r[i].d()}}}const ee=async({fetch:n})=>({props:{data:await(await n("index.json")).json()}});function $(n,e,t){let s,r;V(n,C,l=>t(2,r=l));const p=new Intl.DateTimeFormat("en",{hour12:!0,hour:"numeric",minute:"2-digit"});let{data:h={}}=e;const c=new Date().toString().split(" ")[0];return C.subscribe(l=>t(1,s=Number(l))),n.$$set=l=>{"data"in l&&t(0,h=l.data)},t(1,s=Date.now()),[h,s,r,p,c]}class te extends J{constructor(e){super();K(this,e,$,Z,R,{data:0})}}export{te as default,ee as load};
