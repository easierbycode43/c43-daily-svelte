import{J as H,S as J,i as K,s as R,e as k,k as N,l as P,c as g,a as M,d as _,n as S,b as y,f as b,t as w,g as D,K as I,H as p,h as j,L as U,M as G,N as Q,I as A,O as V,P as W}from"../chunks/vendor-2bddb9ee.js";const C=H(new Date,function(e){const t=setInterval(()=>{e(new Date)},1e3);return function(){clearInterval(t)}});function q(n,e,t){const s=n.slice();return s[5]=e[t][0],s[6]=e[t][1],s[8]=t,s}function B(n,e,t){const s=n.slice();return s[9]=e[t],s}function X(n){let e=n[3].format(n[2])+"",t;return{c(){t=w(e)},l(s){t=D(s,e)},m(s,r){b(s,t,r)},p(s,r){r&4&&e!==(e=s[3].format(s[2])+"")&&j(t,e)},d(s){s&&_(t)}}}function Y(n){let e=n[5]+"",t;return{c(){t=w(e)},l(s){t=D(s,e)},m(s,r){b(s,t,r)},p(s,r){r&1&&e!==(e=s[5]+"")&&j(t,e)},d(s){s&&_(t)}}}function T(n){let e;return{c(){e=k("span"),this.h()},l(t){e=g(t,"SPAN",{class:!0}),M(e).forEach(_),this.h()},h(){y(e,"class","green-dot svelte-af93v6")},m(t,s){b(t,e,s)},d(t){t&&_(e)}}}function z(n){let e,t,s,r=n[9].summary+"",v,h,c,l=n[9].start+"",i,a,u=n[9].end+"",o,E,m=n[9].startMs<=n[1]&&n[9].endMs>=n[1]&&T();return{c(){e=k("li"),m&&m.c(),t=N(),s=k("span"),v=w(r),h=N(),c=k("span"),i=w(l),a=w(" - "),o=w(u),E=N(),this.h()},l(f){e=g(f,"LI",{class:!0});var d=M(e);m&&m.l(d),t=S(d),s=g(d,"SPAN",{class:!0});var O=M(s);v=D(O,r),O.forEach(_),h=S(d),c=g(d,"SPAN",{class:!0});var L=M(c);i=D(L,l),a=D(L," - "),o=D(L,u),L.forEach(_),E=S(d),d.forEach(_),this.h()},h(){y(s,"class","event svelte-af93v6"),y(c,"class","time svelte-af93v6"),y(e,"class","svelte-af93v6"),I(e,"starting",n[9].startMs-6e5<=n[1]&&n[9].startMs+3e5>=n[1]),I(e,"active",n[9].startMs<=n[1]&&n[9].endMs>=n[1]),I(e,"hidden",n[9].endMs<=n[1])},m(f,d){b(f,e,d),m&&m.m(e,null),p(e,t),p(e,s),p(s,v),p(e,h),p(e,c),p(c,i),p(c,a),p(c,o),p(e,E)},p(f,d){f[9].startMs<=f[1]&&f[9].endMs>=f[1]?m||(m=T(),m.c(),m.m(e,t)):m&&(m.d(1),m=null),d&1&&r!==(r=f[9].summary+"")&&j(v,r),d&1&&l!==(l=f[9].start+"")&&j(i,l),d&1&&u!==(u=f[9].end+"")&&j(o,u),d&3&&I(e,"starting",f[9].startMs-6e5<=f[1]&&f[9].startMs+3e5>=f[1]),d&3&&I(e,"active",f[9].startMs<=f[1]&&f[9].endMs>=f[1]),d&3&&I(e,"hidden",f[9].endMs<=f[1])},d(f){f&&_(e),m&&m.d()}}}function F(n,e){let t,s,r;function v(a,u){return a[5]!==a[4]?Y:X}let h=v(e),c=h(e),l=e[6],i=[];for(let a=0;a<l.length;a+=1)i[a]=z(B(e,l,a));return{key:n,first:null,c(){t=k("li"),c.c(),s=N();for(let a=0;a<i.length;a+=1)i[a].c();r=P(),this.h()},l(a){t=g(a,"LI",{class:!0});var u=M(t);c.l(u),u.forEach(_),s=S(a);for(let o=0;o<i.length;o+=1)i[o].l(a);r=P(),this.h()},h(){y(t,"class","day-label svelte-af93v6"),this.first=t},m(a,u){b(a,t,u),c.m(t,null),b(a,s,u);for(let o=0;o<i.length;o+=1)i[o].m(a,u);b(a,r,u)},p(a,u){if(e=a,h===(h=v(e))&&c?c.p(e,u):(c.d(1),c=h(e),c&&(c.c(),c.m(t,null))),u&3){l=e[6];let o;for(o=0;o<l.length;o+=1){const E=B(e,l,o);i[o]?i[o].p(E,u):(i[o]=z(E),i[o].c(),i[o].m(r.parentNode,r))}for(;o<i.length;o+=1)i[o].d(1);i.length=l.length}},d(a){a&&_(t),c.d(),a&&_(s),U(i,a),a&&_(r)}}}function Z(n){let e,t,s,r=[],v=new Map,h=Object.entries(n[0].eventsByDay);const c=l=>l[5];for(let l=0;l<h.length;l+=1){let i=q(n,h,l),a=c(i);v.set(a,r[l]=F(a,i))}return{c(){e=N(),t=k("section"),s=k("ul");for(let l=0;l<r.length;l+=1)r[l].c();this.h()},l(l){G('[data-svelte="svelte-z8c47p"]',document.head).forEach(_),e=S(l),t=g(l,"SECTION",{class:!0});var a=M(t);s=g(a,"UL",{class:!0});var u=M(s);for(let o=0;o<r.length;o+=1)r[o].l(u);u.forEach(_),a.forEach(_),this.h()},h(){document.title="C43 Events",y(s,"class","svelte-af93v6"),y(t,"class","svelte-af93v6")},m(l,i){b(l,e,i),b(l,t,i),p(t,s);for(let a=0;a<r.length;a+=1)r[a].m(s,null)},p(l,[i]){i&31&&(h=Object.entries(l[0].eventsByDay),r=Q(r,i,c,1,l,h,v,s,W,F,null,q))},i:A,o:A,d(l){l&&_(e),l&&_(t);for(let i=0;i<r.length;i+=1)r[i].d()}}}const ee=async({fetch:n})=>({props:{data:await(await n("index.json")).json()}});function $(n,e,t){let s,r;V(n,C,l=>t(2,r=l));const v=new Intl.DateTimeFormat("en",{hour12:!0,hour:"numeric",minute:"2-digit"});let{data:h={}}=e;const c=new Date().toString().split(" ")[0];return C.subscribe(l=>t(1,s=Number(l))),n.$$set=l=>{"data"in l&&t(0,h=l.data)},t(1,s=Date.now()),[h,s,r,v,c]}class te extends J{constructor(e){super();K(this,e,$,Z,R,{data:0})}}export{te as default,ee as load};
