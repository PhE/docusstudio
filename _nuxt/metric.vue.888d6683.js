import{d as _,r as h,Q as v,R as y,o as p,cf as V,b as i,c as r,e as s,g,f as k,G as B,t as n,al as P,K as R,O as w}from"./entry.e551834a.js";import{u as M}from"./usePaxparAPI.9bbf5d06.js";const C={class:"stat place-items-center"},E={key:0,class:"stat-figure text-secondary"},F={class:"stat-title"},I={class:"stat-value"},N={class:"stat-desc"},l=1e4,O=_({__name:"metric",props:{name:{default:"go_memstats_frees_total"},title:{default:""},desc:{default:""},icon:{},noRefresh:{type:Boolean,default:!1},fake:{type:Boolean,default:!1},domain:{},user:{},offset:{}},setup(d){const e=d,{useFetchPP:u}=M(),a=h(0),f=v(a,{duration:l,transition:y.easeInOutCubic});async function o(){if(e.fake)a.value=a.value+5+Math.floor(Math.random()*100);else{const{data:t}=await u(`/api/metric/${e.name}`,{query:{domain:e==null?void 0:e.domain,user:e==null?void 0:e.user,offset:e==null?void 0:e.offset}}),c=parseFloat(t.value);a.value=c}}return p(async()=>{await o(),e.noRefresh===!1&&V(async()=>{await o()},l)}),(t,c)=>{const m=w;return i(),r("div",{onClick:o,class:"stats shadow"},[s("div",C,[t.icon?(i(),r("div",E,[g(m,{name:"uil:github",size:"32"})])):k("",!0),s("div",F,[B(n(t.title),1),P(t.$slots,"default")]),s("div",I,n(Math.round(R(f)).toLocaleString()),1),s("div",N,n(t.desc),1)])])}}});export{O as _};