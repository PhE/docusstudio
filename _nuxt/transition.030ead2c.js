import{d as m,r as i,b as o,c as r,e,g as u,w as p,f as b,T as h,F as c,a0 as v,aN as g,t as y,p as k,i as C,k as w}from"./entry.8080465b.js";const d=a=>(k("data-v-62d1ff66"),a=a(),C(),a),x=d(()=>e("h1",null,"Debug transition X",-1)),B={key:0,src:"https://images.unsplash.com/photo-1689481172416-dae28c4a08b4?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=warren-umoh-uCPhB996wW8-unsplash.jpg&w=640"},I=d(()=>e("hr",null,null,-1)),N=m({__name:"transition",setup(a){i(0);const l=i(!0),s=i(["Alice","Bob","Charly","David","Eve"]);function _(){s.value=s.value.sort((f,t)=>.5-Math.random())}return(f,t)=>(o(),r(c,null,[x,e("button",{onClick:t[0]||(t[0]=n=>l.value=!l.value),class:"btn btn-primary"},"toggle"),u(h,{name:"fade"},{default:p(()=>[l.value?(o(),r("img",B)):b("",!0)]),_:1}),I,e("button",{onClick:t[1]||(t[1]=n=>s.value.push("You")),class:"btn btn-primary"},"add"),e("button",{onClick:_,class:"btn btn-primary"},"shuffle"),u(g,{name:"list",tag:"ul"},{default:p(()=>[(o(!0),r(c,null,v(s.value,n=>(o(),r("li",{key:n},y(n),1))),128))]),_:1})],64))}});const D=w(N,[["__scopeId","data-v-62d1ff66"]]);export{D as default};
