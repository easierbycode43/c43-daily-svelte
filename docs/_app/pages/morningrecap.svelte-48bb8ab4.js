import{S as o,i as r,s as c}from"../chunks/vendor-3b41b8c6.js";const u=async({fetch:a})=>({props:{data:await(await a("morningrecap.json")).json()}});function i(a,t,n){let{data:s}=t;return a.$$set=e=>{"data"in e&&n(0,s=e.data)},[s]}class l extends o{constructor(t){super();r(this,t,i,null,c,{data:0})}}export{l as default,u as load};