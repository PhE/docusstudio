import{d as r,U as c,V as u,o as i,b as d,c as p,e as o}from"./entry.8080465b.js";const f=o("h1",null,"DEBUG database",-1),b=r({__name:"database",setup(_){const a=c(),n=u();i(async()=>{console.log({supabase:a});const{data:e}=await a.from("profiles").select("id, username, full_name, avatar_url, website");console.log({profile:e})});async function l(){var t;const e={id:(t=n.value)==null?void 0:t.id,full_name:"toto"};let{error:s}=await a.from("profiles").upsert(e);if(s)throw s}return(e,s)=>(d(),p("div",null,[f,o("button",{onClick:l,class:"btn"},"update")]))}});export{b as default};
