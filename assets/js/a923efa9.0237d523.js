"use strict";(self.webpackChunkash_docs=self.webpackChunkash_docs||[]).push([[6546],{9613:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=i(r),m=o,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||a;return r?n.createElement(f,c(c({ref:t},d),{},{components:r})):n.createElement(f,c({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,c[1]=l;for(var i=2;i<a;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3127:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var n=r(7605),o=(r(9496),r(9613));const a={sidebar_position:3},c="1. Cloud Credentials Setup",l={unversionedId:"console/guides/local-network/cloud-credentials",id:"console/guides/local-network/cloud-credentials",title:"1. Cloud Credentials Setup",description:"The Ash Console is currently in alpha and not production-ready. It is under active development and subject to breaking changes.",source:"@site/docs/console/guides/local-network/cloud-credentials.md",sourceDirName:"console/guides/local-network",slug:"/console/guides/local-network/cloud-credentials",permalink:"/docs/console/guides/local-network/cloud-credentials",draft:!1,editUrl:"https://github.com/AshAvalanche/ash-docs/tree/main/docs/console/guides/local-network/cloud-credentials.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"consoleSidebar",previous:{title:"0. Prerequisites",permalink:"/docs/console/guides/local-network/prerequisites"},next:{title:"2. Node ID Secrets Generation",permalink:"/docs/console/guides/local-network/node-ids"}},s={},i=[],d={toc:i},u="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"1-cloud-credentials-setup"},"1. Cloud Credentials Setup"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The Ash Console is currently in alpha and ",(0,o.kt)("strong",{parentName:"p"},"not production-ready"),". It is under active development and subject to breaking changes.")),(0,o.kt)("p",null,"To ",(0,o.kt)("strong",{parentName:"p"},"deploy the Avalanche node ",(0,o.kt)("a",{parentName:"strong",href:"/docs/console/glossary#resource"},"resources")," into your cloud account/subscription/project"),", you need to provide the Console with appropriate credentials."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Follow the instructions provided in the ",(0,o.kt)("a",{parentName:"li",href:"/docs/console/reference/cloud-credentials"},"Cloud Credentials reference")," to create a ",(0,o.kt)("strong",{parentName:"li"},"cloud credentials ",(0,o.kt)("a",{parentName:"strong",href:"/docs/console/glossary#secret"},"secret"))," in the Console. You can ",(0,o.kt)("strong",{parentName:"li"},"pick the cloud provider of your choice")," among: AWS, Azure, and Google Cloud (more coming soon)."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Save the secret ID")," for later use. You can always get it with the ",(0,o.kt)("inlineCode",{parentName:"li"},"console secret list")," command:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ash console secret list\n")))))}p.isMDXComponent=!0}}]);