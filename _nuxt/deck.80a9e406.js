import{_ as p}from"./single.vue.13f4eb96.js";import{d as _,b as a,c as r,F as m,a0 as u,L as f}from"./entry.8080465b.js";const x={class:"flex space-x-4"},c=18,z=_({__name:"deck",props:{size:{default:"32"},cards:{},arc:{type:Boolean,default:!1}},setup(l){const e=l,s=e.cards.length&&e.cards.length>1?c*2/(e.cards.length-1):0,d=t=>{if(e.arc){const n=Math.round(-c+t*s);return console.log("angleCard",n),n}else return 0};return console.log("angle_step=",s),(t,n)=>{const i=p;return a(),r("div",x,[(a(!0),r(m,null,u(e.cards,(o,g)=>(a(),f(i,{index:o,id:o,size:e.size,angle:d(g).toString()},null,8,["index","id","size","angle"]))),256))])}}});export{z as default};
