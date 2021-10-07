"use strict";(self.webpackChunkhexo_theme_yun=self.webpackChunkhexo_theme_yun||[]).push([[293],{3293:(e,l,t)=>{t.r(l),t.d(l,{default:()=>_e});var a=t(6252),n=t(3577),i=t(2262),u=t(9963),s=t(7621),o=t(2119),r=t(7788);const c=["href","rel","target","aria-label"],v=(0,a.aZ)({inheritAttrs:!1}),d=(0,a.aZ)({...v,props:{item:{type:Object,required:!0}},setup:function(e){const l=e,t=(0,o.yj)(),u=(0,s.WF)(),{item:v}=(0,i.BK)(l),d=(0,i.Fl)((()=>(0,r.ak)(v.value.link))),p=(0,i.Fl)((()=>(0,r.B2)(v.value.link)||(0,r.R5)(v.value.link))),h=(0,i.Fl)((()=>{if(!p.value)return v.value.target?v.value.target:d.value?"_blank":void 0})),g=(0,i.Fl)((()=>"_blank"===h.value)),m=(0,i.Fl)((()=>!d.value&&!p.value&&!g.value)),k=(0,i.Fl)((()=>{if(!p.value)return v.value.rel?v.value.rel:g.value?"noopener noreferrer":void 0})),b=(0,i.Fl)((()=>v.value.ariaLabel||v.value.text)),w=(0,i.Fl)((()=>{const e=Object.keys(u.value.locales);return e.length?!e.some((e=>e===v.value.link)):"/"!==v.value.link})),f=(0,i.Fl)((()=>!!w.value&&t.path.startsWith(v.value.link))),U=(0,i.Fl)((()=>!!m.value&&(v.value.activeMatch?new RegExp(v.value.activeMatch).test(t.path):f.value)));return(e,l)=>{const t=(0,a.up)("RouterLink"),u=(0,a.up)("OutboundLink");return(0,i.SU)(m)?((0,a.wg)(),(0,a.j4)(t,(0,a.dG)({key:0,class:["nav-link",{"router-link-active":(0,i.SU)(U)}],to:(0,i.SU)(v).link,"aria-label":(0,i.SU)(b)},e.$attrs),{default:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"before"),(0,a.Uk)(" "+(0,n.zw)((0,i.SU)(v).text)+" ",1),(0,a.WI)(e.$slots,"after")])),_:3},16,["class","to","aria-label"])):((0,a.wg)(),(0,a.iD)("a",(0,a.dG)({key:1,class:"nav-link external",href:(0,i.SU)(v).link,rel:(0,i.SU)(k),target:(0,i.SU)(h),"aria-label":(0,i.SU)(b)},e.$attrs),[(0,a.WI)(e.$slots,"before"),(0,a.Uk)(" "+(0,n.zw)((0,i.SU)(v).text)+" ",1),(0,i.SU)(g)?((0,a.wg)(),(0,a.j4)(u,{key:0})):(0,a.kq)("",!0),(0,a.WI)(e.$slots,"after")],16,c))}}}),p=["aria-labelledby"],h={class:"hero"},g=["src","alt"],m={key:1,id:"main-title"},k={key:2,class:"description"},b={key:3,class:"actions"},w={key:0,class:"features"},f={class:"theme-default-content custom"},U=["innerHTML"],S=["textContent"],y=(0,a.aZ)({setup(e){const l=(0,s.I2)(),t=(0,s.I5)(),u=(0,i.Fl)((()=>l.value.heroImage?(0,s.pJ)(l.value.heroImage):null)),o=(0,i.Fl)((()=>null===l.value.heroText?null:l.value.heroText||t.value.title||"Hello")),c=(0,i.Fl)((()=>l.value.heroAlt||o.value||"hero")),v=(0,i.Fl)((()=>null===l.value.tagline?null:l.value.tagline||t.value.description||"Welcome to your VuePress site")),y=(0,i.Fl)((()=>(0,r.kJ)(l.value.actions)?l.value.actions.map((({text:e,link:l,type:t="primary"})=>({text:e,link:l,type:t}))):[])),D=(0,i.Fl)((()=>(0,r.kJ)(l.value.features)?l.value.features:[])),F=(0,i.Fl)((()=>l.value.footer)),_=(0,i.Fl)((()=>l.value.footerHtml));return(e,l)=>{const t=(0,a.up)("Content");return(0,a.wg)(),(0,a.iD)("main",{class:"home","aria-labelledby":(0,i.SU)(o)?"main-title":void 0},[(0,a._)("header",h,[(0,i.SU)(u)?((0,a.wg)(),(0,a.iD)("img",{key:0,src:(0,i.SU)(u),alt:(0,i.SU)(c)},null,8,g)):(0,a.kq)("",!0),(0,i.SU)(o)?((0,a.wg)(),(0,a.iD)("h1",m,(0,n.zw)((0,i.SU)(o)),1)):(0,a.kq)("",!0),(0,i.SU)(v)?((0,a.wg)(),(0,a.iD)("p",k,(0,n.zw)((0,i.SU)(v)),1)):(0,a.kq)("",!0),(0,i.SU)(y).length?((0,a.wg)(),(0,a.iD)("p",b,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,i.SU)(y),(e=>((0,a.wg)(),(0,a.j4)(d,{key:e.text,class:(0,n.C_)(["action-button",[e.type]]),item:e},null,8,["class","item"])))),128))])):(0,a.kq)("",!0)]),(0,i.SU)(D).length?((0,a.wg)(),(0,a.iD)("div",w,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,i.SU)(D),(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.title,class:"feature"},[(0,a._)("h2",null,(0,n.zw)(e.title),1),(0,a._)("p",null,(0,n.zw)(e.details),1)])))),128))])):(0,a.kq)("",!0),(0,a._)("div",f,[(0,a.Wm)(t)]),(0,i.SU)(F)?((0,a.wg)(),(0,a.iD)(a.HY,{key:1},[(0,i.SU)(_)?((0,a.wg)(),(0,a.iD)("div",{key:0,class:"footer",innerHTML:(0,i.SU)(F)},null,8,U)):((0,a.wg)(),(0,a.iD)("div",{key:1,class:"footer",textContent:(0,n.zw)((0,i.SU)(F))},null,8,S))],64)):(0,a.kq)("",!0)],8,p)}}});var D=t(2791);const F=e=>!(0,r.ak)(e)||/github\.com/.test(e)?"GitHub":/bitbucket\.org/.test(e)?"Bitbucket":/gitlab\.com/.test(e)?"GitLab":/gitee\.com/.test(e)?"Gitee":null,_={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},x=(0,a.aZ)({setup(e){const l=e=>{e.style.height=e.scrollHeight+"px"},t=e=>{e.style.height=""};return(e,n)=>((0,a.wg)(),(0,a.j4)(u.uT,{name:"dropdown",onEnter:l,onAfterEnter:t,onBeforeLeave:l},{default:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"default")])),_:3}))}}),W=["aria-label"],I={class:"title"},$=(0,a._)("span",{class:"arrow down"},null,-1),C=["aria-label"],L={class:"title"},z={class:"nav-dropdown"},H={class:"dropdown-subtitle"},j={key:1},q={class:"dropdown-subitem-wrapper"},M=(0,a.aZ)({props:{item:{type:Object,required:!0}},setup(e){const l=e,{item:t}=(0,i.BK)(l),s=(0,i.Fl)((()=>t.value.ariaLabel||t.value.text)),r=(0,i.iH)(!1),c=(0,o.yj)();(0,a.YP)((()=>c.path),(()=>{r.value=!1}));const v=e=>{const l=0===e.detail;r.value=!!l&&!r.value},p=(e,l)=>l[l.length-1]===e;return(e,l)=>((0,a.wg)(),(0,a.iD)("div",{class:(0,n.C_)(["dropdown-wrapper",{open:r.value}])},[(0,a._)("button",{class:"dropdown-title",type:"button","aria-label":(0,i.SU)(s),onClick:v},[(0,a._)("span",I,(0,n.zw)((0,i.SU)(t).text),1),$],8,W),(0,a._)("button",{class:"mobile-dropdown-title",type:"button","aria-label":(0,i.SU)(s),onClick:l[0]||(l[0]=e=>r.value=!r.value)},[(0,a._)("span",L,(0,n.zw)((0,i.SU)(t).text),1),(0,a._)("span",{class:(0,n.C_)(["arrow",r.value?"down":"right"])},null,2)],8,C),(0,a.Wm)(x,null,{default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("ul",z,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,i.SU)(t).children,((e,l)=>((0,a.wg)(),(0,a.iD)("li",{key:e.link||l,class:"dropdown-item"},[e.children?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[(0,a._)("h4",H,[e.link?((0,a.wg)(),(0,a.j4)(d,{key:0,item:e,onFocusout:l=>p(e,(0,i.SU)(t).children)&&0===e.children.length&&(r.value=!1)},null,8,["item","onFocusout"])):((0,a.wg)(),(0,a.iD)("span",j,(0,n.zw)(e.text),1))]),(0,a._)("ul",q,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.children,(l=>((0,a.wg)(),(0,a.iD)("li",{key:l.link,class:"dropdown-subitem"},[(0,a.Wm)(d,{item:l,onFocusout:a=>p(l,e.children)&&p(e,(0,i.SU)(t).children)&&(r.value=!1)},null,8,["item","onFocusout"])])))),128))])],64)):((0,a.wg)(),(0,a.j4)(d,{key:1,item:e,onFocusout:l=>p(e,(0,i.SU)(t).children)&&(r.value=!1)},null,8,["item","onFocusout"]))])))),128))],512),[[u.F8,r.value]])])),_:1})],2))}}),T={key:0,class:"navbar-links"},B=(0,a.aZ)({setup(e){const l=e=>(0,r.HD)(e)?(0,D.sC)(e):e.children?{...e,children:e.children.map(l)}:e,t=(()=>{const e=(0,D.X6)();return(0,i.Fl)((()=>(e.value.navbar||[]).map(l)))})(),n=(()=>{const e=(0,o.tv)(),l=(0,s.I)(),t=(0,s.I5)(),a=(0,D.X6)();return(0,i.Fl)((()=>{var n,i;const u=Object.keys(t.value.locales);if(u.length<2)return[];const s=e.currentRoute.value.path,o=e.currentRoute.value.fullPath;return[{text:null!=(n=a.value.selectLanguageText)?n:"unkown language",ariaLabel:null!=(i=a.value.selectLanguageAriaLabel)?i:"unkown language",children:u.map((n=>{var i,u,r,c,v,d;const p=null!=(u=null==(i=t.value.locales)?void 0:i[n])?u:{},h=null!=(c=null==(r=a.value.locales)?void 0:r[n])?c:{},g=`${p.lang}`,m=null!=(v=h.selectLanguageName)?v:g;let k;if(g===t.value.lang)k=o;else{const t=s.replace(l.value,n);k=e.getRoutes().some((e=>e.path===t))?t:null!=(d=h.home)?d:n}return{text:m,link:k}}))}]}))})(),u=(()=>{const e=(0,D.X6)(),l=(0,i.Fl)((()=>e.value.repo)),t=(0,i.Fl)((()=>l.value?F(l.value):null)),a=(0,i.Fl)((()=>l.value&&!(0,r.ak)(l.value)?`https://github.com/${l.value}`:l.value)),n=(0,i.Fl)((()=>a.value?e.value.repoLabel?e.value.repoLabel:null===t.value?"Source":t.value:null));return(0,i.Fl)((()=>a.value&&n.value?[{text:n.value,link:a.value}]:[]))})(),c=(0,i.Fl)((()=>[...t.value,...n.value,...u.value]));return(e,l)=>(0,i.SU)(c).length?((0,a.wg)(),(0,a.iD)("nav",T,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,i.SU)(c),(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.text,class:"navbar-links-item"},[e.children?((0,a.wg)(),(0,a.j4)(M,{key:0,item:e},null,8,["item"])):((0,a.wg)(),(0,a.j4)(d,{key:1,item:e},null,8,["item"]))])))),128))])):(0,a.kq)("",!0)}}),R=["title"],Y={class:"icon",focusable:"false",viewBox:"0 0 32 32"},Z=[(0,a.uE)('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9)],X={class:"icon",focusable:"false",viewBox:"0 0 32 32"},P=[(0,a._)("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1)],E=(0,a.aZ)({setup(e){const l=(0,D.X6)(),t=(0,D.vs)(),n=()=>{t.value=!t.value};return(e,s)=>((0,a.wg)(),(0,a.iD)("button",{class:"toggle-dark-button",title:(0,i.SU)(l).toggleDarkMode,onClick:n},[(0,a.wy)(((0,a.wg)(),(0,a.iD)("svg",Y,Z,512)),[[u.F8,!(0,i.SU)(t)]]),(0,a.wy)(((0,a.wg)(),(0,a.iD)("svg",X,P,512)),[[u.F8,(0,i.SU)(t)]])],8,R))}}),K=["title"],V=[(0,a._)("div",{class:"icon","aria-hidden":"true"},[(0,a._)("span"),(0,a._)("span"),(0,a._)("span")],-1)],G=(0,a.aZ)({emits:["toggle"],setup(e){const l=(0,D.X6)();return(e,t)=>((0,a.wg)(),(0,a.iD)("div",{class:"toggle-sidebar-button",title:(0,i.SU)(l).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:t[0]||(t[0]=l=>e.$emit("toggle"))},V,8,K))}}),N=["src","alt"],A=(0,a.aZ)({emits:["toggle-sidebar"],setup(e){const l=(0,s.I)(),t=(0,s.I5)(),u=(0,D.X6)(),o=(0,D.vs)(),r=(0,i.iH)(null),c=(0,i.iH)(null),v=(0,i.Fl)((()=>u.value.home||l.value)),d=(0,i.Fl)((()=>o.value&&void 0!==u.value.logoDark?u.value.logoDark:u.value.logo)),p=(0,i.Fl)((()=>t.value.title)),h=(0,i.iH)(0),g=(0,i.Fl)((()=>h.value?{maxWidth:h.value+"px"}:{})),m=(0,i.Fl)((()=>u.value.darkMode));function k(e,l){var t,a,n;const i=null==(n=null==(a=null==(t=null==e?void 0:e.ownerDocument)?void 0:t.defaultView)?void 0:a.getComputedStyle(e,null))?void 0:n[l],u=Number.parseInt(i,10);return Number.isNaN(u)?0:u}return(0,a.bv)((()=>{const e=k(r.value,"paddingLeft")+k(r.value,"paddingRight"),l=()=>{var l;window.innerWidth<=719?h.value=0:h.value=r.value.offsetWidth-e-((null==(l=c.value)?void 0:l.offsetWidth)||0)};l(),window.addEventListener("resize",l,!1),window.addEventListener("orientationchange",l,!1)})),(e,l)=>{const t=(0,a.up)("RouterLink"),u=(0,a.up)("NavbarSearch");return(0,a.wg)(),(0,a.iD)("header",{ref:(e,l)=>{l.navbar=e,r.value=e},class:"navbar"},[(0,a.Wm)(G,{onToggle:l[0]||(l[0]=l=>e.$emit("toggle-sidebar"))}),(0,a._)("span",{ref:(e,l)=>{l.siteBrand=e,c.value=e}},[(0,a.Wm)(t,{to:(0,i.SU)(v)},{default:(0,a.w5)((()=>[(0,i.SU)(d)?((0,a.wg)(),(0,a.iD)("img",{key:0,class:"logo",src:(0,i.SU)(s.pJ)((0,i.SU)(d)),alt:(0,i.SU)(p)},null,8,N)):(0,a.kq)("",!0),(0,i.SU)(p)?((0,a.wg)(),(0,a.iD)("span",{key:1,class:(0,n.C_)(["site-name",{"can-hide":(0,i.SU)(d)}])},(0,n.zw)((0,i.SU)(p)),3)):(0,a.kq)("",!0)])),_:1},8,["to"])],512),(0,a._)("div",{class:"navbar-links-wrapper",style:(0,n.j5)((0,i.SU)(g))},[(0,a.WI)(e.$slots,"before"),(0,a.Wm)(B,{class:"can-hide"}),(0,a.WI)(e.$slots,"after"),(0,i.SU)(m)?((0,a.wg)(),(0,a.j4)(E,{key:0})):(0,a.kq)("",!0),(0,a.Wm)(u)],4)],512)}}}),O={class:"page-meta"},J={key:0,class:"meta-item edit-link"},Q={key:1,class:"meta-item last-updated"},ee={class:"meta-item-label"},le={class:"meta-item-info"},te={key:2,class:"meta-item contributors"},ae={class:"meta-item-label"},ne={class:"meta-item-info"},ie=["title"],ue=(0,a.Uk)(", "),se=(0,a.aZ)({setup(e){const l=(0,D.X6)(),t=(()=>{const e=(0,D.X6)(),l=(0,s.Vi)(),t=(0,s.I2)();return(0,i.Fl)((()=>{var a,n;if(null!=(n=null!=(a=t.value.editLink)?a:e.value.editLink)&&!n)return null;const{repo:i,docsRepo:u=i,docsBranch:s="main",docsDir:o="",editLinkText:c}=e.value;if(!u)return null;const v=(({docsRepo:e,docsBranch:l,docsDir:t,filePathRelative:a,editLinkPattern:n})=>{const i=F(e);let u;return n?u=n:null!==i&&(u=_[i]),u?u.replace(/:repo/,(0,r.ak)(e)?e:`https://github.com/${e}`).replace(/:branch/,l).replace(/:path/,(0,r.FY)(`${(0,r.U1)(t)}/${a}`)):null})({docsRepo:u,docsBranch:s,docsDir:o,filePathRelative:l.value.filePathRelative,editLinkPattern:e.value.editLinkPattern});return v?{text:null!=c?c:"Edit this page",link:v}:null}))})(),u=(()=>{const e=(0,s.I5)(),l=(0,D.X6)(),t=(0,s.Vi)(),a=(0,s.I2)();return(0,i.Fl)((()=>{var n,i,u,s;return(null==(i=null!=(n=a.value.lastUpdated)?n:l.value.lastUpdated)||i)&&(null==(u=t.value.git)?void 0:u.updatedTime)?new Date(null==(s=t.value.git)?void 0:s.updatedTime).toLocaleString(e.value.lang):null}))})(),o=(()=>{const e=(0,D.X6)(),l=(0,s.Vi)(),t=(0,s.I2)();return(0,i.Fl)((()=>{var a,n,i,u;return null!=(n=null!=(a=t.value.contributors)?a:e.value.contributors)&&!n||null==(u=null==(i=l.value.git)?void 0:i.contributors)?null:u}))})();return(e,s)=>((0,a.wg)(),(0,a.iD)("footer",O,[(0,i.SU)(t)?((0,a.wg)(),(0,a.iD)("div",J,[(0,a.Wm)(d,{class:"meta-item-label",item:(0,i.SU)(t)},null,8,["item"])])):(0,a.kq)("",!0),(0,i.SU)(u)?((0,a.wg)(),(0,a.iD)("div",Q,[(0,a._)("span",ee,(0,n.zw)((0,i.SU)(l).lastUpdatedText)+": ",1),(0,a._)("span",le,(0,n.zw)((0,i.SU)(u)),1)])):(0,a.kq)("",!0),(0,i.SU)(o)&&(0,i.SU)(o).length?((0,a.wg)(),(0,a.iD)("div",te,[(0,a._)("span",ae,(0,n.zw)((0,i.SU)(l).contributorsText)+": ",1),(0,a._)("span",ne,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,i.SU)(o),((e,l)=>((0,a.wg)(),(0,a.iD)(a.HY,{key:l},[(0,a._)("span",{class:"contributor",title:`email: ${e.email}`},(0,n.zw)(e.name),9,ie),l!==(0,i.SU)(o).length-1?((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[ue],64)):(0,a.kq)("",!0)],64)))),128))])])):(0,a.kq)("",!0)]))}}),oe={key:0,class:"page-nav"},re={class:"inner"},ce={key:0,class:"prev"},ve=(0,a.Uk)(" ← "),de={key:1,class:"next"},pe=(0,a.Uk)(" → "),he=(0,a.aZ)({setup(e){const l=e=>!1===e?null:(0,r.HD)(e)?(0,D.sC)(e):!!(0,r.PO)(e)&&e,t=(e,l,a)=>{const n=e.findIndex((e=>e.link===l));if(-1!==n){const l=e[n+a];return(null==l?void 0:l.link)?l:null}for(const n of e)if(n.children){const e=t(n.children,l,a);if(e)return e}return null},n=(0,s.I2)(),u=(0,D.VU)(),c=(0,o.yj)(),v=(0,i.Fl)((()=>{const e=l(n.value.prev);return!1!==e?e:t(u.value,c.path,-1)})),p=(0,i.Fl)((()=>{const e=l(n.value.next);return!1!==e?e:t(u.value,c.path,1)}));return(e,l)=>(0,i.SU)(v)||(0,i.SU)(p)?((0,a.wg)(),(0,a.iD)("nav",oe,[(0,a._)("p",re,[(0,i.SU)(v)?((0,a.wg)(),(0,a.iD)("span",ce,[ve,(0,a.Wm)(d,{item:(0,i.SU)(v)},null,8,["item"])])):(0,a.kq)("",!0),(0,i.SU)(p)?((0,a.wg)(),(0,a.iD)("span",de,[(0,a.Wm)(d,{item:(0,i.SU)(p)},null,8,["item"]),pe])):(0,a.kq)("",!0)])])):(0,a.kq)("",!0)}}),ge={class:"page"},me={class:"theme-default-content"},ke=(0,a.aZ)({setup:e=>(e,l)=>{const t=(0,a.up)("Content");return(0,a.wg)(),(0,a.iD)("main",ge,[(0,a.WI)(e.$slots,"top"),(0,a._)("div",me,[(0,a.Wm)(t)]),(0,a.Wm)(se),(0,a.Wm)(he),(0,a.WI)(e.$slots,"bottom")])}}),be=e=>decodeURI(e).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),we=(e,l)=>!!((e,l)=>void 0!==l&&(e.hash===l||be(e.path)===be(l)))(e,l.link)||!!l.children&&l.children.some((l=>we(e,l))),fe=(e,l)=>e.link?(0,a.h)(d,{...l,item:e}):(0,a.h)("p",l,e.text),Ue=(e,l)=>{var t;return(null===(t=e.children)||void 0===t?void 0:t.length)?(0,a.h)("ul",{class:{"sidebar-sub-items":l>0}},e.children.map((e=>(0,a.h)("li",(0,a.h)(Se,{item:e,depth:l+1}))))):null},Se=({item:e,depth:l=0})=>{const t=(0,o.yj)(),a=we(t,e);return[fe(e,{class:{"sidebar-heading":0===l,"sidebar-item":!0,active:a}}),Ue(e,l)]};Se.displayName="SidebarChild",Se.props={item:{type:Object,required:!0},depth:{type:Number,required:!1}};const ye={class:"sidebar"},De={class:"sidebar-links"},Fe=(0,a.aZ)({setup(e){const l=(0,D.VU)();return(e,t)=>((0,a.wg)(),(0,a.iD)("aside",ye,[(0,a.Wm)(B),(0,a.WI)(e.$slots,"top"),(0,a._)("ul",De,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,i.SU)(l),(e=>((0,a.wg)(),(0,a.j4)((0,i.SU)(Se),{key:e.link||e.text,item:e},null,8,["item"])))),128))]),(0,a.WI)(e.$slots,"bottom")]))}}),_e=(0,a.aZ)({setup(e){const l=(0,s.Vi)(),t=(0,s.I2)(),r=(0,D.X6)(),c=(0,i.Fl)((()=>!1!==t.value.navbar&&!1!==r.value.navbar)),v=(0,D.VU)(),d=(0,i.iH)(!1),p=e=>{d.value="boolean"==typeof e?e:!d.value},h={x:0,y:0},g=e=>{h.x=e.changedTouches[0].clientX,h.y=e.changedTouches[0].clientY},m=e=>{const l=e.changedTouches[0].clientX-h.x,t=e.changedTouches[0].clientY-h.y;Math.abs(l)>Math.abs(t)&&Math.abs(l)>40&&(l>0&&h.x<=80?p(!0):p(!1))},k=(0,i.Fl)((()=>[{"no-navbar":!c.value,"no-sidebar":!v.value.length,"sidebar-open":d.value},t.value.pageClass]));let b;(0,a.bv)((()=>{const e=(0,o.tv)();b=e.afterEach((()=>{p(!1)}))})),(0,a.Ah)((()=>{b()}));const w=(0,D.P$)(),f=w.resolve,U=w.pending;return(e,s)=>((0,a.wg)(),(0,a.iD)("div",{class:(0,n.C_)(["theme-container",(0,i.SU)(k)]),onTouchstart:g,onTouchend:m},[(0,a.WI)(e.$slots,"navbar",{},(()=>[(0,i.SU)(c)?((0,a.wg)(),(0,a.j4)(A,{key:0,onToggleSidebar:p},{before:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"navbar-before")])),after:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"navbar-after")])),_:3})):(0,a.kq)("",!0)])),(0,a._)("div",{class:"sidebar-mask",onClick:s[0]||(s[0]=e=>p(!1))}),(0,a.WI)(e.$slots,"sidebar",{},(()=>[(0,a.Wm)(Fe,null,{top:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"sidebar-top")])),bottom:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"sidebar-bottom")])),_:3})])),(0,a.WI)(e.$slots,"page",{},(()=>[(0,i.SU)(t).home?((0,a.wg)(),(0,a.j4)(y,{key:0})):((0,a.wg)(),(0,a.j4)(u.uT,{key:1,name:"fade-slide-y",mode:"out-in",onBeforeEnter:(0,i.SU)(f),onBeforeLeave:(0,i.SU)(U)},{default:(0,a.w5)((()=>[(0,a.Wm)(ke,{key:(0,i.SU)(l).path},{top:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"page-top")])),bottom:(0,a.w5)((()=>[(0,a.WI)(e.$slots,"page-bottom")])),_:3})])),_:3},8,["onBeforeEnter","onBeforeLeave"]))]))],34))}})}}]);