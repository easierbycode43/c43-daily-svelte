import{S as B,i as C,s as F,D as A,e as E,k as D,t as G,c as w,a as I,d as p,n as $,g as M,b as k,f as S,H as v,_ as T,E as H,F as K,G as O,x as U,u as V,a0 as N,a1 as R,a2 as z,U as J}from"../chunks/vendor-a5891121.js";const L=l=>({}),j=l=>({});function P(l){let i,d,s,_,b,m,u,r,h,f,n,g;const c=l[4].header,t=A(c,l,l[3],j),y=l[4].default,o=A(y,l,l[3],null);return{c(){i=E("div"),d=D(),s=E("div"),t&&t.c(),_=D(),b=E("hr"),m=D(),o&&o.c(),u=D(),r=E("button"),h=G("\u2716"),this.h()},l(e){i=w(e,"DIV",{class:!0}),I(i).forEach(p),d=$(e),s=w(e,"DIV",{class:!0,role:!0,"aria-modal":!0});var a=I(s);t&&t.l(a),_=$(a),b=w(a,"HR",{}),m=$(a),o&&o.l(a),u=$(a),r=w(a,"BUTTON",{class:!0});var q=I(r);h=M(q,"\u2716"),q.forEach(p),a.forEach(p),this.h()},h(){k(i,"class","modal-background svelte-229vf8"),r.autofocus=!0,k(r,"class","svelte-229vf8"),k(s,"class","modal svelte-229vf8"),k(s,"role","dialog"),k(s,"aria-modal","true")},m(e,a){S(e,i,a),S(e,d,a),S(e,s,a),t&&t.m(s,null),v(s,_),v(s,b),v(s,m),o&&o.m(s,null),v(s,u),v(s,r),v(r,h),l[5](s),f=!0,r.focus(),n||(g=[T(window,"keydown",l[2]),T(i,"click",l[1]),T(r,"click",l[1])],n=!0)},p(e,[a]){t&&t.p&&(!f||a&8)&&H(t,c,e,e[3],f?O(c,e[3],a,L):K(e[3]),j),o&&o.p&&(!f||a&8)&&H(o,y,e,e[3],f?O(y,e[3],a,null):K(e[3]),null)},i(e){f||(U(t,e),U(o,e),f=!0)},o(e){V(t,e),V(o,e),f=!1},d(e){e&&p(i),e&&p(d),e&&p(s),t&&t.d(e),o&&o.d(e),l[5](null),n=!1,N(g)}}}function Q(l,i,d){let{$$slots:s={},$$scope:_}=i;const b=R(),m=()=>b("close");let u;const r=n=>{if(n.key==="Escape"){m();return}if(n.key==="Tab"){const g=u.querySelectorAll("*"),c=Array.from(g).filter(y=>y.tabIndex>=0);let t=c.indexOf(document.activeElement);t===-1&&n.shiftKey&&(t=0),t+=c.length+(n.shiftKey?-1:1),t%=c.length,c[t].focus(),n.preventDefault()}},h=typeof document!="undefined"&&document.activeElement;h&&z(()=>{h.focus()});function f(n){J[n?"unshift":"push"](()=>{u=n,d(0,u)})}return l.$$set=n=>{"$$scope"in n&&d(3,_=n.$$scope)},[u,m,r,_,s,f]}class X extends B{constructor(i){super();C(this,i,Q,P,F,{})}}export{X as default};