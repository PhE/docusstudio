import{d,b as o,c as i,e,t as n,al as _,L as a,w as l,f as c,av as u,H as m}from"./entry.8080465b.js";const h=e("div",{class:""},null,-1),p={class:"hero-content text-center text-neutral-content"},x={class:"max-w-md"},f={class:"mb-5 text-5xl text-neutral-700 font-bold"},k={class:"mb-5 flex justify-center text-slate-500"},v={class:"btn"},y={class:"btn btn-primary"},w=d({__name:"5",props:{title:{},btnlabel:{},btnto:{},btnlabel2:{},btnto2:{},background:{}},setup(r){const t=r;return(b,g)=>{const s=m;return o(),i("div",{class:"hero h-auto",style:u(`background-image: url(${t.background});`)},[h,e("div",p,[e("div",x,[e("h1",f,n(t.title),1),e("div",k,[_(b.$slots,"default")]),t.btnlabel!==void 0?(o(),a(s,{key:0,to:t.btnto},{default:l(()=>[e("button",v,n(t.btnlabel),1)]),_:1},8,["to"])):c("",!0),t.btnlabel2!==void 0?(o(),a(s,{key:1,to:t.btnto2},{default:l(()=>[e("button",y,n(t.btnlabel2),1)]),_:1},8,["to"])):c("",!0)])])],4)}}});export{w as default};