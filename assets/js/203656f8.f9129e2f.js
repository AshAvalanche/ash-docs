"use strict";(self.webpackChunkash_docs=self.webpackChunkash_docs||[]).push([[393],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=o,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||r;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7723:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:8},i="Node Security",l={unversionedId:"toolkit/ansible-avalanche-collection/tutorials/node-security",id:"toolkit/ansible-avalanche-collection/tutorials/node-security",title:"Node Security",description:"In this section, we will learn how to secure Avalanche nodes installed by the Ansible Avalanche Collection.",source:"@site/docs/toolkit/ansible-avalanche-collection/tutorials/node-security.md",sourceDirName:"toolkit/ansible-avalanche-collection/tutorials",slug:"/toolkit/ansible-avalanche-collection/tutorials/node-security",permalink:"/docs/toolkit/ansible-avalanche-collection/tutorials/node-security",draft:!1,editUrl:"https://github.com/AshAvalanche/ash-docs/tree/main/docs/toolkit/ansible-avalanche-collection/tutorials/node-security.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"toolkitSidebar",previous:{title:"Subnet Faucet",permalink:"/docs/toolkit/ansible-avalanche-collection/tutorials/subnet-faucet"},next:{title:"Reference",permalink:"/docs/category/reference"}},c={},s=[{value:"Enable HTTPS for API endpoints",id:"enable-https-for-api-endpoints",level:2}],p={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"node-security"},"Node Security"),(0,o.kt)("p",null,"In this section, we will learn how to secure Avalanche nodes installed by the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-collection"},"Ansible Avalanche Collection"),"."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"For this tutorial, we will use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local"},(0,o.kt)("inlineCode",{parentName:"a"},"local"))," inventory provided by the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-getting-started"},"Ansible Avalanche Getting Started")," repository. See ",(0,o.kt)("a",{parentName:"p",href:"./local-test-network"},"Create a local test network")," for details.")),(0,o.kt)("h2",{id:"enable-https-for-api-endpoints"},"Enable HTTPS for API endpoints"),(0,o.kt)("p",null,"By default, the HTTP API endpoints are ",(0,o.kt)("strong",{parentName:"p"},"not secured"),". This is fine for testing purposes but ",(0,o.kt)("strong",{parentName:"p"},"not recommended for mainnet deployments"),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The Getting Started repository provides self-signed TLS certificates and keys that can be used for testing purposes in the ",(0,o.kt)("inlineCode",{parentName:"p"},"files/https")," directory.")),(0,o.kt)("p",null,"To secure the API endpoints, we need to:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Provide the TLS certificate and key for each Avalanche node. They have to be named after the Ansible ",(0,o.kt)("inlineCode",{parentName:"li"},"inventory_hostname")," of each node."),(0,o.kt)("li",{parentName:"ol"},"Provide the CA certificate used to sign the TLS certificate. The CA certificate has to be named ",(0,o.kt)("inlineCode",{parentName:"li"},"ca.crt"),".",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{2}","{2}":!0},"# Example of the certs and the keys provided in ansible-avalanche-getting-started\nls files/https\nca.crt           validator02.crt  validator03.key  validator05.crt\nvalidator01.crt  validator02.key  validator04.crt  validator05.key\nvalidator01.key  validator03.crt  validator04.key\n"))),(0,o.kt)("li",{parentName:"ol"},"Enable TLS in the node configuration using the ",(0,o.kt)("inlineCode",{parentName:"li"},"avalanchego_https_enabled")," variable. In the Getting Started repository, edit ",(0,o.kt)("inlineCode",{parentName:"li"},"inventories/local/group_vars/avalanche_nodes.yml"),":",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"# The variable is set to false by default\navalanchego_https_enabled: true\n")))),(0,o.kt)("p",null,"After modifying the configuration, we can run the ",(0,o.kt)("inlineCode",{parentName:"p"},"provision_nodes")," playbook again to update the nodes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ansible-playbook ash.avalanche.provision_nodes -i inventories/local\n")),(0,o.kt)("p",null,"After enabling HTTPS, all curl commands have to provide the ",(0,o.kt)("inlineCode",{parentName:"p"},"--cacert")," option to specify the CA certificate used to sign the TLS certificate:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl --cacert files/https/ca.crt -X POST --data \'{\n  "jsonrpc": "2.0",\n  "id"     : 1,\n  "method" : "info.isBootstrapped",\n  "params": {\n    "chain": "P"\n  }\n}\' -H \'content-type:application/json;\' https://192.168.60.11:9650/ext/info\n')),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"We recommend using different CA certificates for the HTTP API endpoints and staking. By doing so, you have the ",(0,o.kt)("strong",{parentName:"p"},"flexibility of migrating a node to different server")," without having to change its node ID.")))}u.isMDXComponent=!0}}]);