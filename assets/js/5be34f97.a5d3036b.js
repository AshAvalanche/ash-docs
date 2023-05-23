"use strict";(self.webpackChunkash_docs=self.webpackChunkash_docs||[]).push([[7986],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(a),h=r,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||l;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},18:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:6},o="ash.avalanche.ash_cli",i={unversionedId:"toolkit/ansible-avalanche-collection/reference/roles/avalanche-ash-cli",id:"toolkit/ansible-avalanche-collection/reference/roles/avalanche-ash-cli",title:"ash.avalanche.ash_cli",description:"This Ansible role allows to install and configure the Ash CLI.",source:"@site/docs/toolkit/ansible-avalanche-collection/reference/roles/avalanche-ash-cli.md",sourceDirName:"toolkit/ansible-avalanche-collection/reference/roles",slug:"/toolkit/ansible-avalanche-collection/reference/roles/avalanche-ash-cli",permalink:"/docs/toolkit/ansible-avalanche-collection/reference/roles/avalanche-ash-cli",draft:!1,editUrl:"https://github.com/AshAvalanche/ash-docs/tree/main/docs/toolkit/ansible-avalanche-collection/reference/roles/avalanche-ash-cli.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"toolkitSidebar",previous:{title:"ash.avalanche.blockscout",permalink:"/docs/toolkit/ansible-avalanche-collection/reference/roles/avalanche-blockscout"},next:{title:"Modules",permalink:"/docs/category/modules"}},c={},s=[{value:"Role variables",id:"role-variables",level:2}],d={toc:s},p="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ashavalancheash_cli"},"ash.avalanche.ash_cli"),(0,r.kt)("p",null,"This Ansible role allows to install and configure the ",(0,r.kt)("a",{parentName:"p",href:"/docs/toolkit/ash-cli/introduction"},"Ash CLI"),"."),(0,r.kt)("h2",{id:"role-variables"},"Role variables"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Comment"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ash_cli_version")),(0,r.kt)("td",{parentName:"tr",align:null},"CLI version"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0.1.1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ash_cli_install_dir")),(0,r.kt)("td",{parentName:"tr",align:null},"Base directory to install CLI"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/opt/avalanche/ash-cli"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ash_cli_conf_dir")),(0,r.kt)("td",{parentName:"tr",align:null},"Where to store the default CLI configuration"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/etc/avalanche/ash-cli/conf"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"avalanche_network_id")),(0,r.kt)("td",{parentName:"tr",align:null},"The default network of the CLI. Can be ",(0,r.kt)("inlineCode",{parentName:"td"},"fuji"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"mainnet")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"local"),"."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fuji"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"avalanche_pchain_local_url")),(0,r.kt)("td",{parentName:"tr",align:null},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"avalanche_network_id")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"local"),", this URL will be used as ",(0,r.kt)("inlineCode",{parentName:"td"},"rpcUrl")," for the P-Chain in the CLI default configuration."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"http://127.0.0.1:9650/ext/bc/P"))))))}u.isMDXComponent=!0}}]);