import{_ as z}from"./bullets.vue.0b067fe6.js";import{_ as B}from"./debug-panel.vue.10bcdde1.js";import{d as N,r,o as Q,$ as F,b as i,L as m,w as k,e as l,f as w,g as h,t as o,K as D,c as x,F as M,a0 as V,n as L,S as j}from"./entry.8080465b.js";import"./useToast.18211047.js";import"./useFeatureFlag.78e6dd50.js";const K={class:"w-full"},O=l("p",null,"anim bullet debug panel ....",-1),A={class:"flex justify-center w-full py-2 gap-2"},G=["href","onClick"],X=N({__name:"carousel",props:{conf:{}},setup(g){const n=g;var t;const a=r(!1),c=r(!0),s=r(1),d=r(),C=r();function q(e){s.value=e}Q(async()=>{n.conf.auto_play_delay&&(t!==void 0&&clearInterval(t),t=setInterval(p,n.conf.auto_play_delay))}),F(a,async(e,u)=>{a.value==!0?S():$()}),F(c,async(e,u)=>{n.conf.auto_play_delay&&(c.value==!0?t=setInterval(p,n.conf.auto_play_delay):t!==void 0&&clearInterval(t))});function p(){s.value+=1,s.value>n.conf.slides.length&&(s.value=1),d.value=n.conf.slides[s.value-1]}function S(){var e=document.documentElement;e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()}function $(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()}function E(){}return(e,u)=>{const _=z,I=B,R=j;return i(),m(R,null,{default:k(()=>{var v,b;return[l("div",null,[l("div",K,[(v=n.conf)!=null&&v.background?(i(),m(_,{key:0,href:n.conf.background,class:"w-full absolute"},null,8,["href"])):w("",!0),h(_,{href:d.value,ref_key:"current_slide_ref",ref:C,class:"w-full"},null,8,["href"]),(b=n.conf)!=null&&b.foreground?(i(),m(_,{key:1,href:n.conf.foreground,class:"w-full absolute"},null,8,["href"])):w("",!0),h(I,null,{default:k(()=>[O,l("p",null," current_slide_num: "+o(s.value),1),l("p",null," current_slide: "+o(d.value),1),l("p",null," intervalID: "+o(D(t)),1),l("p",null," fullScreenMode: "+o(a.value),1),l("p",null," autoplay: "+o(c.value),1),l("button",{onClick:u[0]||(u[0]=y=>a.value=!a.value),class:"btn"}," Fullscreen "),l("button",{onClick:u[1]||(u[1]=y=>c.value=!c.value),class:"btn"}," autoplay "),l("button",{onClick:E,class:"btn"}," reload ")]),_:1})]),l("div",A,[(i(!0),x(M,null,V(n.conf.slides,(y,f)=>(i(),x("a",{href:`#item${f+1}`,class:L([f+1===s.value?"btn-sm":"btn-xs","btn"]),onClick:H=>q(f+1)},o(f+1),11,G))),256))])])]}),_:1})}}});export{X as default};
