import{d as c,r as s,o as _,b as d,L as m,w as v,e as a,t as e,K as t,S as f}from"./entry.8080465b.js";import{u as w}from"./usePaxparAPI.05ffd27c.js";import"./fetch.4f635235.js";import"./url.6edfad5e.js";import"./useToast.18211047.js";const y=a("h1",null,"DEBUG API",-1),S=c({__name:"api",setup(h){const{backend:r,useFetchPP:n}=w(),o=s(),p=s(),i=s(),l=s();return _(async()=>{o.value=await n("/api/version"),p.value=await n("/api/status"),i.value=await n("/api/alive"),l.value=await n("/api/ready")}),(x,P)=>{const u=f;return d(),m(u,null,{default:v(()=>[a("div",null,[y,a("p",null,"backend : "+e(t(r)),1),a("p",null,"/api/version : "+e(t(o)),1),a("p",null,"/api/alive : "+e(t(i)),1),a("p",null,"/api/ready : "+e(t(l)),1),a("p",null,"/api/status : "+e(t(p)),1)])]),_:1})}}});export{S as default};