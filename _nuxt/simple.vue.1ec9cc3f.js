import{d as p,N as l,b as c,c as a,e,g as f,K as s,av as h,F as i,f as y,O as b}from"./entry.8080465b.js";import{t as k,s as C}from"./checktools.b7529971.js";const g={class:"px-10 pt-10"},v={class:"card-body items-center text-center"},x=e("h2",{class:"card-title"},"Non conforme !",-1),z=e("p",null,"Le document n'est pas conforme !",-1),N=e("p",null,"Cliquez pour obtenir le détail des anomalies.",-1),B=e("h2",{class:"card-title"},"Conforme !",-1),K=e("p",null,"Le document est conforme.",-1),O=e("p",null,"Cliquez pour obtenir le détail.",-1),V="96",L=p({__name:"simple",props:{node:{}},emits:["redirect"],setup(d,{emit:m}){const o=d,n=l(()=>{var t;return(t=o==null?void 0:o.node)==null?void 0:t.status}),r=l(()=>k.checklist.status[n.value]);function u(){const t=n.value=="KO"?"nonconformity":"basic";m("redirect",t)}return(t,q)=>{const _=b;return o.node?(c(),a("div",{key:0,onClick:u,class:"card w-full bg-base-100 shadow-none"},[e("figure",g,[f(_,{name:s(r).icon,style:h({color:s(C)(s(r).hue,!1),"font-size":V})},null,8,["name","style"])]),e("div",v,[s(n)=="KO"?(c(),a(i,{key:0},[x,z,N],64)):(c(),a(i,{key:1},[B,K,O],64))])])):y("",!0)}}});export{L as _};
