import{i as I,m as L,g as N,r as W,a as G,A as V,w as z,_ as H,b as J,c as P,k as Q,d as R,e as j,f as U,h as X,j as Y,l as Z,p as $}from"./tslib.es6.0c17087b.js";import{cg as q}from"./entry.8080465b.js";function B(e,t,a,s){var n;return I(t)?t:t.startsWith("-")||t.startsWith("+")?Math.max(0,e+parseFloat(t)):t==="<"?a:(n=s.get(t))!==null&&n!==void 0?n:e}function tt(e,t,a){for(let s=0;s<e.length;s++){const n=e[s];n.at>t&&n.at<a&&(W(e,n),s--)}}function et(e,t,a,s,n,f){tt(e,n,f);for(let u=0;u<t.length;u++)e.push({value:t[u],at:L(n,f,s[u]),easing:N(a,u)})}function nt(e,t){return e.at===t.at?e.value===null?1:-1:e.at-t.at}function lt(e,t={}){var a;const s=at(e,t),n=s.map(f=>G(...f,V)).filter(Boolean);return z(n,t,(a=s[0])===null||a===void 0?void 0:a[3].duration)}function at(e,t={}){var{defaultOptions:a={}}=t,s=H(t,["defaultOptions"]);const n=[],f=new Map,u={},O=new Map;let b=0,c=0,S=0;for(let m=0;m<e.length;m++){const l=e[m];if(J(l)){O.set(l,c);continue}else if(!Array.isArray(l)){O.set(l.name,B(c,l.at,b,O));continue}const[k,g,o={}]=l;o.at!==void 0&&(c=B(c,o.at,b,O));let i=0;const h=P(k,u),p=h.length;for(let d=0;d<p;d++){const D=h[d],M=st(D,f);for(const v in g){const C=it(v,M);let r=Q(g[v]);const w=R(o,v);let{duration:E=a.duration||j.duration,easing:A=a.easing||j.easing}=w;if(U(A)){q(v==="opacity"||r.length>1);const T=A.createAnimation(r,v!=="opacity",()=>0,v);A=T.easing,r=T.keyframes||r,E=T.duration||E}const F=X(o.delay,d,p)||0,_=c+F,K=_+E;let{offset:y=Y(r.length)}=w;y.length===1&&y[0]===0&&(y[1]=1);const x=y.length-r.length;x>0&&Z(y,x),r.length===1&&r.unshift(null),et(C,r,A,y,_,K),i=Math.max(F+E,i),S=Math.max(K,S)}}b=c,c+=i}return f.forEach((m,l)=>{for(const k in m){const g=m[k];g.sort(nt);const o=[],i=[],h=[];for(let p=0;p<g.length;p++){const{at:d,value:D,easing:M}=g[p];o.push(D),i.push($(0,S,d)),h.push(M||j.easing)}i[0]!==0&&(i.unshift(0),o.unshift(o[0]),h.unshift("linear")),i[i.length-1]!==1&&(i.push(1),o.push(null)),n.push([l,k,o,Object.assign(Object.assign(Object.assign({},a),{duration:S,easing:h,offset:i}),s)])}}),n}function st(e,t){return!t.has(e)&&t.set(e,{}),t.get(e)}function it(e,t){return t[e]||(t[e]=[]),t[e]}export{lt as t};
