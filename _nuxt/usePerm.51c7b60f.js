import{V as C,x as E}from"./entry.8080465b.js";const c=["FRONT_CONTENT","FRONT_CONTENT_DOCS","FRONT_CONTENT_DOCS_USER"],T=[{path:"/priv",permission:"FRONT_CONTENT_PRIV"},{path:"/docs/user",permission:"FRONT_CONTENT_DOCS_USER"},{path:"/docs/author",permission:"FRONT_CONTENT_DOCS_AUTHOR"},{path:"/docs/dev",permission:"FRONT_CONTENT_DOCS_DEV"},{path:"/docs/host",permission:"FRONT_CONTENT_DOCS_HOST"},{path:"/docs/team",permission:"FRONT_CONTENT_DOCS_TEAM"},{path:"/docs",permission:"FRONT_CONTENT_DOCS"},{path:"/profile",permission:"AUTHENTICATED"},{path:"/check",permission:"AUTHENTICATED"},{path:"/console",permission:"AUTHENTICATED"},{path:"",permission:"FRONT_CONTENT"}];T.map(s=>({...s,pathRE:new RegExp(`^${s.path.replace("/","/")}/.*$`,"g")}));function u(s,N){return s.every(t=>N.includes(t))}const D=()=>{var a,m;const s=C(),r=[...((m=(a=s.value)==null?void 0:a.user_metadata)==null?void 0:m.permissions)||[],...c];s.value&&r.push("AUTHENTICATED");function t(e){var O;const p=i(e,T),n=E(),o=i(e,((O=n.paxpar)==null?void 0:O.permission)||[]);return p.concat(o)}function i(e,p){const n=[];for(const o of p)(e.startsWith(o.path+"/")||e===o.path)&&n.push(o.permission);return n}function _(e){return u(e,r)}return{permissions:r,hasPermissions:_,notLoggedPermissions:c,permissionsPathGet:t,permissionsPathGetFromRules:i,rulesCommon:T,permissionsGranted:u}};export{D as u};
