import{_ as V}from"../chunks/preload-helper-44e78077.js";import{J as se,S as ne,i as ae,s as le,e as E,k as j,l as q,c as D,a as I,d as $,n as S,b as N,f as w,x as b,t as A,g as P,K as L,H as y,j as O,m as T,o as R,u as k,v as C,w as F,h as B,L as re,M as oe,N as ie,O as fe,A as ue,r as H,P as Y,Q as z,R as G,T as ce,I as _e}from"../chunks/vendor-cf1efd55.js";import me from"./upnext.svelte-23662fd5.js";const J=se(new Date,function(e){const s=setInterval(()=>{e(new Date)},1e3);return function(){clearInterval(s)}}),pe="/c43-daily-svelte";function K(a,e,s){const t=a.slice();return t[19]=e[s][0],t[20]=e[s][1],t[22]=s,t}function Q(a,e,s){const t=a.slice();return t[23]=e[s],t}function de(a){let e=a[13].format(a[10])+"",s;return{c(){s=A(e)},l(t){s=P(t,e)},m(t,r){w(t,s,r)},p(t,r){r&1024&&e!==(e=t[13].format(t[10])+"")&&B(s,e)},d(t){t&&$(s)}}}function he(a){let e=a[19]+"",s;return{c(){s=A(e)},l(t){s=P(t,e)},m(t,r){w(t,s,r)},p(t,r){r&1&&e!==(e=t[19]+"")&&B(s,e)},d(t){t&&$(s)}}}function W(a){let e,s;return e=new me({}),{c(){O(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,r){R(e,t,r),s=!0},i(t){s||(b(e.$$.fragment,t),s=!0)},o(t){k(e.$$.fragment,t),s=!1},d(t){C(e,t)}}}function X(a){let e,s,t,r=a[23].summary+"",d,o,f,c=a[23].start+"",h,_,m=a[23].end+"",n,l,i,p=a[23].startMs>a[9]&&a[23].startMs-27e4>=a[9]&&a[23].startMs-601e3>=a[9]&&a[19]===a[14]&&W();return{c(){e=E("li"),p&&p.c(),s=j(),t=E("span"),d=A(r),o=j(),f=E("span"),h=A(c),_=A(" - "),n=A(m),l=j(),this.h()},l(u){e=D(u,"LI",{class:!0});var g=I(e);p&&p.l(g),s=S(g),t=D(g,"SPAN",{class:!0});var U=I(t);d=P(U,r),U.forEach($),o=S(g),f=D(g,"SPAN",{class:!0});var M=I(f);h=P(M,c),_=P(M," - "),n=P(M,m),M.forEach($),l=S(g),g.forEach($),this.h()},h(){N(t,"class","event svelte-1a6cw1d"),N(f,"class","time svelte-1a6cw1d"),N(e,"class","svelte-1a6cw1d"),L(e,"starting",a[23].startMs-6e5<=a[9]&&a[23].startMs+3e5>=a[9]),L(e,"active",a[23].startMs<=a[9]&&a[23].endMs>=a[9]),L(e,"hidden",a[23].endMs<=a[9])},m(u,g){w(u,e,g),p&&p.m(e,null),y(e,s),y(e,t),y(t,d),y(e,o),y(e,f),y(f,h),y(f,_),y(f,n),y(e,l),i=!0},p(u,g){u[23].startMs>u[9]&&u[23].startMs-27e4>=u[9]&&u[23].startMs-601e3>=u[9]&&u[19]===u[14]?p?g&513&&b(p,1):(p=W(),p.c(),b(p,1),p.m(e,s)):p&&(H(),k(p,1,1,()=>{p=null}),F()),(!i||g&1)&&r!==(r=u[23].summary+"")&&B(d,r),(!i||g&1)&&c!==(c=u[23].start+"")&&B(h,c),(!i||g&1)&&m!==(m=u[23].end+"")&&B(n,m),g&513&&L(e,"starting",u[23].startMs-6e5<=u[9]&&u[23].startMs+3e5>=u[9]),g&513&&L(e,"active",u[23].startMs<=u[9]&&u[23].endMs>=u[9]),g&513&&L(e,"hidden",u[23].endMs<=u[9])},i(u){i||(b(p),i=!0)},o(u){k(p),i=!1},d(u){u&&$(e),p&&p.d()}}}function Z(a,e){let s,t,r,d;function o(n,l){return n[19]!==n[14]?he:de}let f=o(e),c=f(e),h=e[20],_=[];for(let n=0;n<h.length;n+=1)_[n]=X(Q(e,h,n));const m=n=>k(_[n],1,1,()=>{_[n]=null});return{key:a,first:null,c(){s=E("li"),c.c(),t=j();for(let n=0;n<_.length;n+=1)_[n].c();r=q(),this.h()},l(n){s=D(n,"LI",{class:!0});var l=I(s);c.l(l),l.forEach($),t=S(n);for(let i=0;i<_.length;i+=1)_[i].l(n);r=q(),this.h()},h(){N(s,"class","day-label svelte-1a6cw1d"),this.first=s},m(n,l){w(n,s,l),c.m(s,null),w(n,t,l);for(let i=0;i<_.length;i+=1)_[i].m(n,l);w(n,r,l),d=!0},p(n,l){if(e=n,f===(f=o(e))&&c?c.p(e,l):(c.d(1),c=f(e),c&&(c.c(),c.m(s,null))),l&16897){h=e[20];let i;for(i=0;i<h.length;i+=1){const p=Q(e,h,i);_[i]?(_[i].p(p,l),b(_[i],1)):(_[i]=X(p),_[i].c(),b(_[i],1),_[i].m(r.parentNode,r))}for(H(),i=h.length;i<_.length;i+=1)m(i);F()}},i(n){if(!d){for(let l=0;l<h.length;l+=1)b(_[l]);d=!0}},o(n){_=_.filter(Boolean);for(let l=0;l<_.length;l+=1)k(_[l]);d=!1},d(n){n&&$(s),c.d(),n&&$(t),re(_,n),n&&$(r)}}}function x(a){let e,s;return e=new a[2]({props:{width:400,height:400,render:{pixelArt:!0,transparent:!0},physics:{default:"arcade"},$$slots:{default:[be]},$$scope:{ctx:a}}}),{c(){O(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,r){R(e,t,r),s=!0},p(t,r){const d={};r&67109184&&(d.$$scope={dirty:r,ctx:t}),e.$set(d)},i(t){s||(b(e.$$.fragment,t),s=!0)},o(t){k(e.$$.fragment,t),s=!1},d(t){C(e,t)}}}function ge(a){let e,s;return e=new a[1]({props:{velocityX:ke,velocityY:a[11]}}),{c(){O(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,r){R(e,t,r),s=!0},p:_e,i(t){s||(b(e.$$.fragment,t),s=!0)},o(t){k(e.$$.fragment,t),s=!1},d(t){C(e,t)}}}function $e(a){let e,s,t;function r(o){a[15](o)}let d={name:"santa",x:-91,y:250,animation:"santa/default",$$slots:{default:[ge]},$$scope:{ctx:a}};return a[6]!==void 0&&(d.instance=a[6]),e=new a[4]({props:d}),Y.push(()=>z(e,"instance",r)),{c(){O(e.$$.fragment)},l(o){T(e.$$.fragment,o)},m(o,f){R(e,o,f),t=!0},p(o,f){const c={};f&67108864&&(c.$$scope={dirty:f,ctx:o}),!s&&f&64&&(s=!0,c.instance=o[6],G(()=>s=!1)),e.$set(c)},i(o){t||(b(e.$$.fragment,o),t=!0)},o(o){k(e.$$.fragment,o),t=!1},d(o){C(e,o)}}}function be(a){let e,s,t;function r(o){a[16](o)}let d={key:"main",preload:a[12],create:we,$$slots:{default:[$e]},$$scope:{ctx:a}};return a[8]!==void 0&&(d.instance=a[8]),e=new a[3]({props:d}),Y.push(()=>z(e,"instance",r)),{c(){O(e.$$.fragment)},l(o){T(e.$$.fragment,o)},m(o,f){R(e,o,f),t=!0},p(o,f){const c={};f&67108928&&(c.$$scope={dirty:f,ctx:o}),!s&&f&256&&(s=!0,c.instance=o[8],G(()=>s=!1)),e.$set(c)},i(o){t||(b(e.$$.fragment,o),t=!0)},o(o){k(e.$$.fragment,o),t=!1},d(o){C(e,o)}}}function ve(a){let e,s,t,r=[],d=new Map,o,f,c,h=Object.entries(a[0].eventsByDay);const _=n=>n[19];for(let n=0;n<h.length;n+=1){let l=K(a,h,n),i=_(l);d.set(i,r[n]=Z(i,l))}let m=a[5]&&!a[7]&&x(a);return{c(){e=j(),s=E("section"),t=E("ul");for(let n=0;n<r.length;n+=1)r[n].c();o=j(),m&&m.c(),f=q(),this.h()},l(n){oe('[data-svelte="svelte-z8c47p"]',document.head).forEach($),e=S(n),s=D(n,"SECTION",{class:!0});var i=I(s);t=D(i,"UL",{class:!0});var p=I(t);for(let u=0;u<r.length;u+=1)r[u].l(p);p.forEach($),i.forEach($),o=S(n),m&&m.l(n),f=q(),this.h()},h(){document.title="C43 Events",N(t,"class","svelte-1a6cw1d"),N(s,"class","svelte-1a6cw1d")},m(n,l){w(n,e,l),w(n,s,l),y(s,t);for(let i=0;i<r.length;i+=1)r[i].m(t,null);w(n,o,l),m&&m.m(n,l),w(n,f,l),c=!0},p(n,[l]){l&26113&&(h=Object.entries(n[0].eventsByDay),H(),r=ie(r,l,_,1,n,h,d,t,ce,Z,null,K),F()),n[5]&&!n[7]?m?(m.p(n,l),l&160&&b(m,1)):(m=x(n),m.c(),b(m,1),m.m(f.parentNode,f)):m&&(H(),k(m,1,1,()=>{m=null}),F())},i(n){if(!c){for(let l=0;l<h.length;l+=1)b(r[l]);b(m),c=!0}},o(n){for(let l=0;l<r.length;l+=1)k(r[l]);k(m),c=!1},d(n){n&&$(e),n&&$(s);for(let l=0;l<r.length;l+=1)r[l].d();n&&$(o),m&&m.d(n),n&&$(f)}}}const De=async({fetch:a})=>({props:{data:await(await a("index.json")).json()}});let ke=25;function we(a){a.anims.create({key:"santa/default",frames:a.anims.generateFrameNumbers("santa"),frameRate:20,repeat:-1})}function ye(a,e,s){let t,r;fe(a,J,v=>s(10,r=v));let d,o,f,c,h=!1,_=-10,m,n=!1,l;ue(async()=>{await V(()=>import("../chunks/phaser-0d06a704.js").then(function(te){return te.p}),[]);const v=await V(()=>import("../chunks/index-9771636b.js"),["chunks/index-9771636b.js","chunks/vendor-cf1efd55.js","chunks/phaser-0d06a704.js"]);s(1,{ArcadePhysics:d,Game:o,Scene:f,Sprite:c}=v,d,s(2,o),s(3,f),s(4,c)),s(5,h=!0),setTimeout(()=>{l.time.addEvent({delay:25e3,callback:()=>{s(7,n=!0)}})},1e3)});let i=`${pe}/santa.png`;function p(v){v.load.spritesheet("santa",i,{frameWidth:91,frameHeight:37})}const u=new Intl.DateTimeFormat("en",{hour12:!0,hour:"numeric",minute:"2-digit"});let{data:g={}}=e;const U=new Date().toString().split(" ")[0];J.subscribe(v=>s(9,t=Number(v)));function M(v){m=v,s(6,m)}function ee(v){l=v,s(8,l)}return a.$$set=v=>{"data"in v&&s(0,g=v.data)},s(9,t=Date.now()),[g,d,o,f,c,h,m,n,l,t,r,_,p,u,U,M,ee]}class Ie extends ne{constructor(e){super();ae(this,e,ye,ve,le,{data:0})}}export{Ie as default,De as load};
