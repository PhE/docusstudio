import{d as v,r as p,$ as x,b as s,c as t,F as i,a0 as u,K as r,W as w,X as C,e as n,Y as k,t as o}from"./entry.8080465b.js";import{u as y}from"./usePerm.51c7b60f.js";const B=n("h1",null,"Perm",-1),G=n("h2",null,"notLoggedPermissions",-1),L=n("h2",null,"userPermissions",-1),b=n("h2",null,"rulesCommon",-1),D=["onClick"],F=n("h2",null,"targetPermissions",-1),K=v({__name:"perm",setup(T){const l=p("/my/target/path"),c=p([]),d=p(!1),{permissions:h,notLoggedPermissions:_,permissionsPathGet:g,rulesCommon:P,permissionsGranted:f}=y();return x(l,(m,a)=>{console.log("watch targetPath",m,a);const e=g(m);c.value=e,d.value=f(e,h)}),(m,a)=>(s(),t(i,null,[B,G,(s(!0),t(i,null,u(r(_),e=>(s(),t("li",null,o(e),1))),256)),L,(s(!0),t(i,null,u(r(h),e=>(s(),t("li",null,o(e),1))),256)),b,(s(!0),t(i,null,u(r(P),e=>(s(),t("li",null,[n("span",{onClick:V=>l.value=e.path},o(e.path)+", permission : "+o(e.permission),9,D)]))),256)),w(n("input",{"onUpdate:modelValue":a[0]||(a[0]=e=>k(l)?l.value=e:null),type:"text",placeholder:"Target path",class:"input input-bordered w-full max-w-xs"},null,512),[[C,r(l)]]),n("p",null,"Permission granted : "+o(r(d)),1),F,(s(!0),t(i,null,u(r(c),e=>(s(),t("li",null,o(e),1))),256))],64))}});export{K as default};
