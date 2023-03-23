"use strict";(self.webpackChunkash_docs=self.webpackChunkash_docs||[]).push([[489],{9613:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(9496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(a),h=r,u=p["".concat(c,".").concat(h)]||p[h]||m[h]||l;return a?n.createElement(u,o(o({ref:t},d),{},{components:a})):n.createElement(u,o({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},3150:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=a(4778),r=(a(9496),a(9613));const l={sidebar_position:3},o="ash.avalanche.blockchain",i={unversionedId:"tools/ansible-avalanche-collection/reference/roles/avalanche-blockchain",id:"tools/ansible-avalanche-collection/reference/roles/avalanche-blockchain",title:"ash.avalanche.blockchain",description:"This Ansible role allows to create an Avalanche blockchain.",source:"@site/docs/tools/ansible-avalanche-collection/reference/roles/avalanche-blockchain.md",sourceDirName:"tools/ansible-avalanche-collection/reference/roles",slug:"/tools/ansible-avalanche-collection/reference/roles/avalanche-blockchain",permalink:"/docs/tools/ansible-avalanche-collection/reference/roles/avalanche-blockchain",draft:!1,editUrl:"https://github.com/AshAvalanche/ash-docs/tree/main/docs/tools/ansible-avalanche-collection/reference/roles/avalanche-blockchain.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"toolsSidebar",previous:{title:"ash.avalanche.subnet",permalink:"/docs/tools/ansible-avalanche-collection/reference/roles/avalanche-subnet"},next:{title:"Modules",permalink:"/docs/tools/ansible-avalanche-collection/reference/modules"}},c={},s=[{value:"Role variables",id:"role-variables",level:2},{value:"Inventory requirements",id:"inventory-requirements",level:2}],d={toc:s};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ashavalancheblockchain"},"ash.avalanche.blockchain"),(0,r.kt)("p",null,"This Ansible role allows to create an Avalanche blockchain."),(0,r.kt)("h2",{id:"role-variables"},"Role variables"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Comment"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"avalanchego_http_host")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.avax.network/build/references/avalanchego-config-flags#--http-host-string"},"--http-host")," argument"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"127.0.0.1"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"avalanchego_http_port")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.avax.network/build/references/avalanchego-config-flags#--http-port-int"},"--http-port")," argument"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"9650"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"avalanchego_https_enabled")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the HTTP API endpoints are using TLS or not"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"subnet_id")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"aUC7SX8QGVwsbwS4YNuavVTbinjJLrPjNNjdpZbbcFZZFSxFd"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"subnet_control_username")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ewoq"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"subnet_control_password")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"I_l1ve_@_Endor"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"blockchain_vm")),(0,r.kt)("td",{parentName:"tr",align:null},"The VM used by the blockchain. See ",(0,r.kt)("a",{parentName:"td",href:"/docs/tools/ansible-avalanche-collection/reference/roles/avalanche-node#available-vms-and-avalanchego-compatibility"},"Available VMs and AvalancheGo compatibility")," for the names to use."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"timestampvm"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"blockchain_name")),(0,r.kt)("td",{parentName:"tr",align:null},"The blockchain name."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Timestamp Chain"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"blockchain_aliases")),(0,r.kt)("td",{parentName:"tr",align:null},"The aliases to be linked to this blockchain. See ",(0,r.kt)("a",{parentName:"td",href:"https://docs.avax.network/build/references/avalanchego-config-flags#vm-configs"},"VM Configs"),"."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"['timestamp']"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"blockchain_genesis_params")),(0,r.kt)("td",{parentName:"tr",align:null},"The params passed to the gensis function of the VM to build the blockchain genesis state. See ",(0,r.kt)("a",{parentName:"td",href:"https://docs.avax.network/build/tutorials/platform/subnets/create-custom-blockchain#create-the-genesis-data"},"Create the Genesis Data"),"."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{'data': 'Hello world'}"))))),(0,r.kt)("h2",{id:"inventory-requirements"},"Inventory requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"The node used to make API calls")," have to be in the ",(0,r.kt)("inlineCode",{parentName:"li"},"subnet_control_node")," group."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"The Subnet validators")," have to be in the ",(0,r.kt)("inlineCode",{parentName:"li"},"subnet_validators")," group. The Ansible host has to be able to connect to those nodes via SSH (to create blockchain aliases.")))}p.isMDXComponent=!0}}]);