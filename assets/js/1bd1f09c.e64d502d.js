"use strict";(self.webpackChunkash_docs=self.webpackChunkash_docs||[]).push([[1881],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),u=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(a),h=r,m=s["".concat(c,".").concat(h)]||s[h]||d[h]||l;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5220:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:4},o="ash.avalanche.faucet",i={unversionedId:"toolkit/ansible-avalanche-collection/reference/roles/avalanche-faucet",id:"toolkit/ansible-avalanche-collection/reference/roles/avalanche-faucet",title:"ash.avalanche.faucet",description:"This Ansible role allows to deploy the Avalanche Faucet as a Docker service.",source:"@site/docs/toolkit/ansible-avalanche-collection/reference/roles/avalanche-faucet.md",sourceDirName:"toolkit/ansible-avalanche-collection/reference/roles",slug:"/toolkit/ansible-avalanche-collection/reference/roles/avalanche-faucet",permalink:"/docs/toolkit/ansible-avalanche-collection/reference/roles/avalanche-faucet",draft:!1,editUrl:"https://github.com/AshAvalanche/ash-docs/tree/main/docs/toolkit/ansible-avalanche-collection/reference/roles/avalanche-faucet.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"toolkitSidebar",previous:{title:"ash.avalanche.blockchain",permalink:"/docs/toolkit/ansible-avalanche-collection/reference/roles/avalanche-blockchain"},next:{title:"ash.avalanche.blockscout",permalink:"/docs/toolkit/ansible-avalanche-collection/reference/roles/avalanche-blockscout"}},c={},u=[{value:"Role variables",id:"role-variables",level:2},{value:"Inventory requirements",id:"inventory-requirements",level:2},{value:"How to?",id:"how-to",level:2}],p={toc:u},s="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(s,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ashavalanchefaucet"},"ash.avalanche.faucet"),(0,r.kt)("p",null,"This Ansible role allows to deploy the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ava-labs/avalanche-faucet"},"Avalanche Faucet")," as a Docker service."),(0,r.kt)("h2",{id:"role-variables"},"Role variables"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Comment"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"avalanche_faucet_image")),(0,r.kt)("td",{parentName:"tr",align:null},"Base image of the Avalanche faucet"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ghcr.io/ashavalanche/faucet-image"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"avalanche_faucet_image_version")),(0,r.kt)("td",{parentName:"tr",align:null},"Tag to be used"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"disable-captcha-variable"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"avalanche_faucet_conf_dir")),(0,r.kt)("td",{parentName:"tr",align:null},"Where to store the faucet config files"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/etc/avalanche/faucet/conf"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"avalanche_faucet_log_dir")),(0,r.kt)("td",{parentName:"tr",align:null},"Where to store the faucet logs"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/var/log/avalanche/faucet"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"avalanche_faucet_user")),(0,r.kt)("td",{parentName:"tr",align:null},"User that will run the faucet"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"faucet"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"avalanche_faucet_group")),(0,r.kt)("td",{parentName:"tr",align:null},"Group of the user running the faucet"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"faucet"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"avalanche_faucet_docker_group")),(0,r.kt)("td",{parentName:"tr",align:null},"Docker group of the target host"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"docker"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"avalanche_faucet_port")),(0,r.kt)("td",{parentName:"tr",align:null},"Port on which the faucet will attach on the target host"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"8000"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"avalanche_faucet_chains")),(0,r.kt)("td",{parentName:"tr",align:null},"Config file for the faucet (see ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/ava-labs/avalanche-faucet#setup-evm-chain-configurations"},"docs"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"NA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"avalanche_faucet_env")),(0,r.kt)("td",{parentName:"tr",align:null},"Env file for the faucet (see ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/ava-labs/avalanche-faucet#setup-environment-variables"},"docs"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"NA")))),(0,r.kt)("h2",{id:"inventory-requirements"},"Inventory requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The host on which to install the faucet have to be in the ",(0,r.kt)("inlineCode",{parentName:"li"},"faucet")," group.")),(0,r.kt)("h2",{id:"how-to"},"How to?"),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"/docs/toolkit/ansible-avalanche-collection/tutorials/subnet-faucet"},"Subnet faucet")," tutorial to learn how to deploy the Avalanche Faucet."))}d.isMDXComponent=!0}}]);