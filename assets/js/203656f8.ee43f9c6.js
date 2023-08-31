"use strict";(self.webpackChunkash_docs=self.webpackChunkash_docs||[]).push([[3393],{9613:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(9496);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=o,u=d["".concat(s,".").concat(m)]||d[m]||h[m]||r;return a?n.createElement(u,i(i({ref:t},p),{},{components:a})):n.createElement(u,i({ref:t},p))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9462:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=a(2564),o=(a(9496),a(9613));const r={sidebar_position:10},i="Node Security",l={unversionedId:"toolkit/ansible-avalanche-collection/tutorials/node-security",id:"toolkit/ansible-avalanche-collection/tutorials/node-security",title:"Node Security",description:"In this section, we will learn how to secure Avalanche nodes installed by the Ansible Avalanche Collection.",source:"@site/docs/toolkit/ansible-avalanche-collection/tutorials/node-security.md",sourceDirName:"toolkit/ansible-avalanche-collection/tutorials",slug:"/toolkit/ansible-avalanche-collection/tutorials/node-security",permalink:"/docs/toolkit/ansible-avalanche-collection/tutorials/node-security",draft:!1,editUrl:"https://github.com/AshAvalanche/ash-docs/tree/main/docs/toolkit/ansible-avalanche-collection/tutorials/node-security.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"toolkitSidebar",previous:{title:"Nodes Rolling Restart",permalink:"/docs/toolkit/ansible-avalanche-collection/tutorials/nodes-rolling-restart"},next:{title:"Reference",permalink:"/docs/category/reference"}},s={},c=[{value:"Enable HTTPS for API endpoints",id:"enable-https-for-api-endpoints",level:2}],p={toc:c},d="wrapper";function h(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"node-security"},"Node Security"),(0,o.kt)("p",null,"In this section, we will learn how to secure Avalanche nodes installed by the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-collection"},"Ansible Avalanche Collection"),"."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"For this tutorial, we will use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local"},(0,o.kt)("inlineCode",{parentName:"a"},"local"))," inventory provided by the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-getting-started"},"Ansible Avalanche Getting Started")," repository. See ",(0,o.kt)("a",{parentName:"p",href:"./local-test-network"},"Create a Local Test Network")," for details.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Always make sure you have the latest version of the collection installed. See ",(0,o.kt)("a",{parentName:"p",href:"/docs/toolkit/ansible-avalanche-collection/installation"},"Installation and upgrade"),".")),(0,o.kt)("h2",{id:"enable-https-for-api-endpoints"},"Enable HTTPS for API endpoints"),(0,o.kt)("p",null,"By default, the HTTP API endpoints are ",(0,o.kt)("strong",{parentName:"p"},"not secured"),". This is fine for testing purposes but ",(0,o.kt)("strong",{parentName:"p"},"not recommended for mainnet deployments"),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The Getting Started repository provides self-signed TLS certificates and keys that can be used for testing purposes in the ",(0,o.kt)("inlineCode",{parentName:"p"},"files/https")," directory.")),(0,o.kt)("p",null,"To secure the API endpoints, we need to:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Provide the TLS certificate and key for each Avalanche node. They have to be named after the Ansible ",(0,o.kt)("inlineCode",{parentName:"li"},"inventory_hostname")," of each node."),(0,o.kt)("li",{parentName:"ol"},"Provide the CA certificate used to sign the TLS certificate. The CA certificate has to be named ",(0,o.kt)("inlineCode",{parentName:"li"},"ca.crt"),".",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{2}","{2}":!0},"# Example of the certs and the keys provided in ansible-avalanche-getting-started\nls files/https\nca.crt           validator02.crt  validator03.key  validator05.crt\nvalidator01.crt  validator02.key  validator04.crt  validator05.key\nvalidator01.key  validator03.crt  validator04.key\n"))),(0,o.kt)("li",{parentName:"ol"},"Enable TLS in the node configuration using the ",(0,o.kt)("inlineCode",{parentName:"li"},"avalanchego_https_enabled")," variable. In the Getting Started repository, edit ",(0,o.kt)("inlineCode",{parentName:"li"},"inventories/local/group_vars/avalanche_nodes.yml"),":",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"# The variable is set to false by default\navalanchego_https_enabled: true\n")))),(0,o.kt)("p",null,"After modifying the configuration, we can run the ",(0,o.kt)("inlineCode",{parentName:"p"},"provision_nodes")," playbook again to update the nodes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ansible-playbook ash.avalanche.provision_nodes -i inventories/local\n")),(0,o.kt)("p",null,"After enabling HTTPS, all curl commands have to provide the ",(0,o.kt)("inlineCode",{parentName:"p"},"--cacert")," option to specify the CA certificate used to sign the TLS certificate:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Make sure that ",(0,o.kt)("inlineCode",{parentName:"p"},"validator01.ash.local")," is resolvable by adding it to your ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/hosts")," file:"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Generate the line to add:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},"echo \"$(terraform -chdir=terraform/multipass output -json validators_ips | jq -r '.[0]')  validator01.ash.local\"\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Sample output"',title:'"Sample','output"':!0},"10.117.207.160  validator01.ash.local\n"))),(0,o.kt)("li",{parentName:"ol"},"Add it to your ",(0,o.kt)("inlineCode",{parentName:"li"},"/etc/hosts")," file"),(0,o.kt)("li",{parentName:"ol"},"Ping ",(0,o.kt)("inlineCode",{parentName:"li"},"validator01.ash.local")," to make sure it's resolvable:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ping validator01.ash.local\n"))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Issue an API call using the node FQDN and the ",(0,o.kt)("inlineCode",{parentName:"p"},"--cacert")," option:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl --cacert files/https/ca.crt -X POST --data \'{\n  "jsonrpc": "2.0",\n  "id"     : 1,\n  "method" : "info.isBootstrapped",\n  "params": {\n    "chain": "P"\n  }\n}\' -H \'content-type:application/json;\' "https://validator01.ash.local:9650/ext/info"\n')))),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"We recommend using different CA certificates for the HTTP API endpoints and staking. By doing so, you have the ",(0,o.kt)("strong",{parentName:"p"},"flexibility of migrating a node to different server")," without having to change its node ID.")))}h.isMDXComponent=!0}}]);