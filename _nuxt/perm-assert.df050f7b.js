import{u as p}from"./usePerm.03b0744c.js";import{d as m,N as t,K as c,al as u,b as i,c as l}from"./entry.e551834a.js";const d={key:1,class:""},k=m({__name:"perm-assert",props:{authenticated:{type:Boolean,default:!0},perm:{},perms:{default:()=>[]}},setup(r){const e=r,{hasPermissions:o}=p(),a=t(()=>{const s=[];e.authenticated&&s.push("AUTHENTICATED"),e.perm&&s.push(e.perm),e.perm&&s.push(...e.perms)}),n=t(()=>o(a));return(s,f)=>c(n)?u(s.$slots,"default",{key:0}):(i(),l("div",d))}});export{k as default};