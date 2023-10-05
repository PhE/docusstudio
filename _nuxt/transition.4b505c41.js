import{au as he,a8 as U,F as me,a2 as k,ab as A,d as G,N as B,at as P,r as E,o as T,a as J,$ as ge,n as ye}from"./entry.8080465b.js";function j(e,t,...n){if(e in t){let l=t[e];return typeof l=="function"?l(...n):l}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(l=>`"${l}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,j),r}var K=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(K||{}),b=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(b||{});function ee({visible:e=!0,features:t=0,ourProps:n,theirProps:r,...l}){var a;let i=ne(r,n),o=Object.assign(l,{props:i});if(e||t&2&&i.static)return M(o);if(t&1){let s=(a=i.unmount)==null||a?0:1;return j(s,{0(){return null},1(){return M({...l,props:{...i,hidden:!0,style:{display:"none"}}})}})}return M(o)}function M({props:e,attrs:t,slots:n,slot:r,name:l}){var a,i;let{as:o,...s}=re(e,["unmount","static"]),u=(a=n.default)==null?void 0:a.call(n,r),p={};if(r){let v=!1,c=[];for(let[g,h]of Object.entries(r))typeof h=="boolean"&&(v=!0),h===!0&&c.push(g);v&&(p["data-headlessui-state"]=c.join(" "))}if(o==="template"){if(u=te(u??[]),Object.keys(s).length>0||Object.keys(t).length>0){let[v,...c]=u??[];if(!be(v)||c.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${l} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(s).concat(Object.keys(t)).map(d=>d.trim()).filter((d,f,$)=>$.indexOf(d)===f).sort((d,f)=>d.localeCompare(f)).map(d=>`  - ${d}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(d=>`  - ${d}`).join(`
`)].join(`
`));let g=ne((i=v.props)!=null?i:{},s),h=he(v,g);for(let d in g)d.startsWith("on")&&(h.props||(h.props={}),h.props[d]=g[d]);return h}return Array.isArray(u)&&u.length===1?u[0]:u}return U(o,Object.assign({},s,p),{default:()=>u})}function te(e){return e.flatMap(t=>t.type===me?te(t.children):[t])}function ne(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let l in r)l.startsWith("on")&&typeof r[l]=="function"?(n[l]!=null||(n[l]=[]),n[l].push(r[l])):t[l]=r[l];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(t,{[r](l,...a){let i=n[r];for(let o of i){if(l instanceof Event&&l.defaultPrevented)return;o(l,...a)}}});return t}function re(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}function be(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let we=0;function Se(){return++we}function Ee(){return Se()}function X(e){var t;return e==null||e.value==null?null:(t=e.value.$el)!=null?t:e.value}let le=Symbol("Context");var m=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(m||{});function Oe(){return ae()!==null}function ae(){return k(le,null)}function Te(e){A(le,e)}var je=Object.defineProperty,$e=(e,t,n)=>t in e?je(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Z=(e,t,n)=>($e(e,typeof t!="symbol"?t+"":t,n),n);class Fe{constructor(){Z(this,"current",this.detect()),Z(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}}let Ce=new Fe;function Le(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function q(){let e=[],t={addEventListener(n,r,l,a){return n.addEventListener(r,l,a),t.add(()=>n.removeEventListener(r,l,a))},requestAnimationFrame(...n){let r=requestAnimationFrame(...n);t.add(()=>cancelAnimationFrame(r))},nextFrame(...n){t.requestAnimationFrame(()=>{t.requestAnimationFrame(...n)})},setTimeout(...n){let r=setTimeout(...n);t.add(()=>clearTimeout(r))},microTask(...n){let r={current:!0};return Le(()=>{r.current&&n[0]()}),t.add(()=>{r.current=!1})},style(n,r,l){let a=n.style.getPropertyValue(r);return Object.assign(n.style,{[r]:l}),this.add(()=>{Object.assign(n.style,{[r]:a})})},group(n){let r=q();return n(r),this.add(()=>r.dispose())},add(n){return e.push(n),()=>{let r=e.indexOf(n);if(r>=0)for(let l of e.splice(r,1))l()}},dispose(){for(let n of e.splice(0))n()}};return t}function Ae(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}function N(e,...t){e&&t.length>0&&e.classList.add(...t)}function L(e,...t){e&&t.length>0&&e.classList.remove(...t)}var R=(e=>(e.Finished="finished",e.Cancelled="cancelled",e))(R||{});function Be(e,t){let n=q();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:l}=getComputedStyle(e),[a,i]=[r,l].map(o=>{let[s=0]=o.split(",").filter(Boolean).map(u=>u.includes("ms")?parseFloat(u):parseFloat(u)*1e3).sort((u,p)=>p-u);return s});return a!==0?n.setTimeout(()=>t("finished"),a+i):t("finished"),n.add(()=>t("cancelled")),n.dispose}function _(e,t,n,r,l,a){let i=q(),o=a!==void 0?Ae(a):()=>{};return L(e,...l),N(e,...t,...n),i.nextFrame(()=>{L(e,...n),N(e,...r),i.add(Be(e,s=>(L(e,...r,...t),N(e,...l),o(s))))}),i.add(()=>L(e,...t,...n,...r,...l)),i.add(()=>o("cancelled")),i.dispose}function S(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let I=Symbol("TransitionContext");var Pe=(e=>(e.Visible="visible",e.Hidden="hidden",e))(Pe||{});function ke(){return k(I,null)!==null}function xe(){let e=k(I,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function He(){let e=k(D,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let D=Symbol("NestingContext");function x(e){return"children"in e?x(e.children):e.value.filter(({state:t})=>t==="visible").length>0}function ie(e){let t=E([]),n=E(!1);T(()=>n.value=!0),J(()=>n.value=!1);function r(a,i=b.Hidden){let o=t.value.findIndex(({id:s})=>s===a);o!==-1&&(j(i,{[b.Unmount](){t.value.splice(o,1)},[b.Hidden](){t.value[o].state="hidden"}}),!x(t)&&n.value&&(e==null||e()))}function l(a){let i=t.value.find(({id:o})=>o===a);return i?i.state!=="visible"&&(i.state="visible"):t.value.push({id:a,state:"visible"}),()=>r(a,b.Unmount)}return{children:t,register:l,unregister:r}}let oe=K.RenderStrategy,Me=G({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:r,expose:l}){let a=E(0);function i(){a.value|=m.Opening,t("beforeEnter")}function o(){a.value&=~m.Opening,t("afterEnter")}function s(){a.value|=m.Closing,t("beforeLeave")}function u(){a.value&=~m.Closing,t("afterLeave")}if(!ke()&&Oe())return()=>U(Re,{...e,onBeforeEnter:i,onAfterEnter:o,onBeforeLeave:s,onAfterLeave:u},r);let p=E(null),v=B(()=>e.unmount?b.Unmount:b.Hidden);l({el:p,$el:p});let{show:c,appear:g}=xe(),{register:h,unregister:d}=He(),f=E(c.value?"visible":"hidden"),$={value:!0},O=Ee(),F={value:!1},V=ie(()=>{!F.value&&f.value!=="hidden"&&(f.value="hidden",d(O),u())});T(()=>{let y=h(O);J(y)}),P(()=>{if(v.value===b.Hidden&&O){if(c.value&&f.value!=="visible"){f.value="visible";return}j(f.value,{hidden:()=>d(O),visible:()=>h(O)})}});let W=S(e.enter),Y=S(e.enterFrom),ue=S(e.enterTo),z=S(e.entered),se=S(e.leave),de=S(e.leaveFrom),fe=S(e.leaveTo);T(()=>{P(()=>{if(f.value==="visible"){let y=X(p);if(y instanceof Comment&&y.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function pe(y){let H=$.value&&!g.value,w=X(p);!w||!(w instanceof HTMLElement)||H||(F.value=!0,c.value&&i(),c.value||s(),y(c.value?_(w,W,Y,ue,z,C=>{F.value=!1,C===R.Finished&&o()}):_(w,se,de,fe,z,C=>{F.value=!1,C===R.Finished&&(x(V)||(f.value="hidden",d(O),u()))})))}return T(()=>{ge([c],(y,H,w)=>{pe(w),$.value=!1},{immediate:!0})}),A(D,V),Te(B(()=>j(f.value,{visible:m.Open,hidden:m.Closed})|a.value)),()=>{let{appear:y,show:H,enter:w,enterFrom:C,enterTo:Ue,entered:qe,leave:Ie,leaveFrom:De,leaveTo:Ve,...Q}=e,ce={ref:p},ve={...Q,...g.value&&c.value&&Ce.isServer?{class:ye([n.class,Q.class,...W,...Y])}:{}};return ee({theirProps:ve,ourProps:ce,slot:{},slots:r,attrs:n,features:oe,visible:f.value==="visible",name:"TransitionChild"})}}}),Ne=Me,Re=G({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:r}){let l=ae(),a=B(()=>e.show===null&&l!==null?(l.value&m.Open)===m.Open:e.show);P(()=>{if(![!0,!1].includes(a.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let i=E(a.value?"visible":"hidden"),o=ie(()=>{i.value="hidden"}),s=E(!0),u={show:a,appear:B(()=>e.appear||!s.value)};return T(()=>{P(()=>{s.value=!1,a.value?i.value="visible":x(o)||(i.value="hidden")})}),A(D,o),A(I,u),()=>{let p=re(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),v={unmount:e.unmount};return ee({ourProps:{...v,as:"template"},theirProps:{},slot:{},slots:{...r,default:()=>[U(Ne,{onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave"),...n,...v,...p},r.default)]},attrs:{},features:oe,visible:i.value==="visible",name:"Transition"})}}});export{Re as S};
