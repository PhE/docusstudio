import{_ as N}from"./head.vue.24da79cd.js";import{_ as V}from"./cell.vue.5571f2d4.js";import{_ as $}from"./tail.vue.45bdcae9.js";import{d as z,cj as A,N as w,b as e,c as t,e as n,F as i,a0 as c,n as a,K as l,g as d,G as y,t as k,f as g}from"./entry.8080465b.js";const F=n("th",null,null,-1),D=["onClick"],E={class:"py-0 text-left"},G={class:"flex flex-row"},K={key:0,class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},L=n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 5l7 7-7 7M5 5l7 7-7 7"},null,-1),S=[L],T={key:1,class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},q=n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 13l-7 7-7-7m14-8l-7 7-7-7"},null,-1),H=[q],I={class:"h-full p-6 rounded-x-lg border-x-2 border-y-none overflow-hidden flex justify-center"},J={class:"pl-9 py-0 text-left"},O={class:"flex flex-row"},P=n("svg",{class:"w-6 h-6 mr-3",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"})],-1),Q={class:"h-full px-6 py-2 rounded-x-lg border-x-2 border-y-none flex justify-center"},R=n("th",null,null,-1),U={class:"px-2 py-0"},te=z({__name:"main",props:{pricing:{},monthly:{type:Boolean},class:{},single_section:{},skip_section:{}},setup(x){const r=x,v=A(),p=w(()=>v.value=="dark"?"bg-gray-800":"bg-gray-200");function b(s){s.toggle=!s.toggle}const h=w(()=>{if(r.single_section){const s=r.pricing.sections[0];return s.toggle=!0,[s]}else return r.skip_section?r.pricing.sections.slice(1):r.pricing.sections});return w(()=>{}),(s,W)=>{const C=N,m=V,B=$;return e(),t("table",{class:a(["w-full",s.class])},[n("thead",null,[n("tr",null,[F,(e(!0),t(i,null,c(s.pricing.plans,(o,u)=>(e(),t("th",{class:a(["px-2 py-0",u==s.pricing.plans.length-1?[l(p)]:[]])},[d(C,{plan:o,monthly:r.monthly},null,8,["plan","monthly"]),y(" "+k(s.darkMode),1)],2))),256))])]),n("tbody",null,[(e(!0),t(i,null,c(l(h),(o,u)=>(e(),t(i,{key:u},[r.single_section?g("",!0):(e(),t("tr",{key:0,onClick:_=>b(o),class:a(["hover:bg-primary",u==l(h).length-1?[l(p)]:[]])},[n("th",E,[n("span",G,[o.toggle?g("",!0):(e(),t("svg",K,S)),o.toggle?(e(),t("svg",T,H)):g("",!0),y(" "+k(o.name),1)])]),(e(!0),t(i,null,c(s.pricing.plans,(_,f)=>(e(),t("th",{class:a(["px-2 py-0",f==s.pricing.plans.length-1?[l(p)]:[]])},[n("div",I,[d(m,{text:o[_.id]},null,8,["text"])])],2))),256))],10,D)),o.toggle?(e(!0),t(i,{key:1},c(o.items,(_,f)=>(e(),t("tr",{key:f,class:a(["hover:bg-primary",u==l(h).length-1?[l(p)]:[]])},[n("th",J,[n("span",O,[P,d(m,{text:_.name},null,8,["text"])])]),(e(!0),t(i,null,c(s.pricing.plans,(M,j)=>(e(),t("td",{class:a(["px-2 py-0",j==s.pricing.plans.length-1?[l(p)]:[]])},[n("div",Q,[d(m,{text:_[M.id]},null,8,["text"])])],2))),256))],2))),128)):g("",!0)],64))),128)),n("tr",null,[R,(e(!0),t(i,null,c(s.pricing.plans,o=>(e(),t("td",U,[d(B,{plan:o},null,8,["plan"])]))),256))])])],2)}}});export{te as _};
