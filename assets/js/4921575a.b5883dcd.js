"use strict";(self.webpackChunkash_docs=self.webpackChunkash_docs||[]).push([[722],{9613:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),v=o,f=u["".concat(l,".").concat(v)]||u[v]||d[v]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=v;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},5973:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(4778),o=(r(9496),r(9613));const a={sidebar_label:"Overview",sidebar_position:1},i="Ash for Subnet Owners - Overview",s={unversionedId:"protocol/ash-for-subnet-owners/overview",id:"protocol/ash-for-subnet-owners/overview",title:"Ash for Subnet Owners - Overview",description:"Subnet owner: An organization, whether public or private, that uses a dedicated Avalanche Subnet. The Subnet hosts one or more blockchains, serving as a backend for the business logic.",source:"@site/docs/protocol/ash-for-subnet-owners/overview.md",sourceDirName:"protocol/ash-for-subnet-owners",slug:"/protocol/ash-for-subnet-owners/overview",permalink:"/docs/protocol/ash-for-subnet-owners/overview",draft:!1,editUrl:"https://github.com/AshAvalanche/ash-docs/tree/main/docs/protocol/ash-for-subnet-owners/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Overview",sidebar_position:1},sidebar:"protocolSidebar",previous:{title:"Ash for Subnet Owners",permalink:"/docs/category/ash-for-subnet-owners"},next:{title:"Validation Renting",permalink:"/docs/protocol/ash-for-subnet-owners/validator-node-renting"}},l={},p=[{value:"Validation renting",id:"validation-renting",level:2},{value:"Voted validation",id:"voted-validation",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ash-for-subnet-owners---overview"},"Ash for Subnet Owners - Overview"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Subnet owner:")," An organization, whether public or private, that uses a dedicated Avalanche Subnet. The Subnet hosts one or more blockchains, serving as a backend for the business logic.")),(0,o.kt)("p",null,"Ash offers 2 validation services to Subnet owners:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Validation renting"),(0,o.kt)("li",{parentName:"ul"},"Voted validation by the protocol")),(0,o.kt)("h2",{id:"validation-renting"},"Validation renting"),(0,o.kt)("p",null,"Subnet owners can ",(0,o.kt)("strong",{parentName:"p"},"rent validation")," from Ash nodes for a ",(0,o.kt)("strong",{parentName:"p"},"fraction of the price")," needed to bootstrap a validator."),(0,o.kt)("p",null,"Instead of operating validator nodes themselves, Subnet owners ",(0,o.kt)("strong",{parentName:"p"},"benefit from the expertise of the Ash team")," (and the Ash network of node operators in ",(0,o.kt)("a",{parentName:"p",href:"../roadmap"},"V3"),")."),(0,o.kt)("p",null,"The rent is ",(0,o.kt)("strong",{parentName:"p"},"paid monthly")," in AVAX, native tokens, or a combination of both. The protocol guarantees that Subnets are validated by a ",(0,o.kt)("strong",{parentName:"p"},"robust, up-to-date set of nodes"),"."),(0,o.kt)("p",null,"Subnet owners are freed from the burden of running their own infrastructure and can instead focus on building their projects' core."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"./validator-node-renting"},(0,o.kt)("strong",{parentName:"a"},"Start using the service"))),(0,o.kt)("h2",{id:"voted-validation"},"Voted validation"),(0,o.kt)("p",null,"In Ash ",(0,o.kt)("a",{parentName:"p",href:"../roadmap"},"V2"),", liquid stakers will be able to participate in the ",(0,o.kt)("a",{parentName:"p",href:"../governance/overview"},"protocol's governance"),". The main governance component is ",(0,o.kt)("strong",{parentName:"p"},"the allocation of the protocol's validating power")," between Subnets."),(0,o.kt)("p",null,"Node operator ",(0,o.kt)("strong",{parentName:"p"},"rewards are redistributed to liquid-stakers"),". With attractive incentives, a Subnet will ",(0,o.kt)("strong",{parentName:"p"},"naturally get more decentralized")," because it will appeal to more users."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"./voted-validation"},(0,o.kt)("strong",{parentName:"a"},"Discover how to maximize voted validation"))))}u.isMDXComponent=!0}}]);