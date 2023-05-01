"use strict";(self.webpackChunkash_docs=self.webpackChunkash_docs||[]).push([[7315],{9613:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>b});var n=a(9496);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),u=s(a),m=o,b=u["".concat(c,".").concat(m)]||u[m]||p[m]||l;return a?n.createElement(b,i(i({ref:t},h),{},{components:a})):n.createElement(b,i({ref:t},h))}));function b(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,i=new Array(l);i[0]=m;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[u]="string"==typeof e?e:o,i[1]=r;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},395:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>s});var n=a(1163),o=(a(9496),a(9613));const l={sidebar_position:6},i="Blockchain Management",r={unversionedId:"toolkit/ansible-avalanche-collection/tutorials/blockchain-management",id:"toolkit/ansible-avalanche-collection/tutorials/blockchain-management",title:"Blockchain Management",description:"In this section, we will learn how to use the ash.avalanche.blockchain role to create blockchains in Subnets.",source:"@site/docs/toolkit/ansible-avalanche-collection/tutorials/blockchain-management.md",sourceDirName:"toolkit/ansible-avalanche-collection/tutorials",slug:"/toolkit/ansible-avalanche-collection/tutorials/blockchain-management",permalink:"/docs/toolkit/ansible-avalanche-collection/tutorials/blockchain-management",draft:!1,editUrl:"https://github.com/AshAvalanche/ash-docs/tree/main/docs/toolkit/ansible-avalanche-collection/tutorials/blockchain-management.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"toolkitSidebar",previous:{title:"Subnet Management",permalink:"/docs/toolkit/ansible-avalanche-collection/tutorials/subnet-management"},next:{title:"Avalanche Transactions",permalink:"/docs/toolkit/ansible-avalanche-collection/tutorials/avalanche-transactions"}},c={},s=[{value:"Create a Subnet EVM blockchain in a Subnet",id:"create-a-subnet-evm-blockchain-in-a-subnet",level:2},{value:"Customization",id:"customization",level:2}],h={toc:s},u="wrapper";function p(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"blockchain-management"},"Blockchain Management"),(0,o.kt)("p",null,"In this section, we will learn how to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"ash.avalanche.blockchain")," role to create blockchains in Subnets."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"For this tutorial, we will use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local"},(0,o.kt)("inlineCode",{parentName:"a"},"local"))," inventory provided by the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-getting-started"},"Ansible Avalanche Getting Started")," repository. See ",(0,o.kt)("a",{parentName:"p",href:"./local-test-network"},"Create a local test network")," for details."),(0,o.kt)("p",{parentName:"admonition"},"Make sure to have gone through ",(0,o.kt)("a",{parentName:"p",href:"./vm-management"},"VM management")," as we need the Subnet EVM binary installed on our nodes."),(0,o.kt)("p",{parentName:"admonition"},"We should also have created and tracked a Subnet, see ",(0,o.kt)("a",{parentName:"p",href:"./subnet-management"},"Subnet management")," for details.")),(0,o.kt)("h2",{id:"create-a-subnet-evm-blockchain-in-a-subnet"},"Create a Subnet EVM blockchain in a Subnet"),(0,o.kt)("p",null,"The playbook ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/tree/main/playbooks/create_local_blockchains.yml"},"ash.avalanche.create_local_blockchains")," will create the blockchains listed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"create_blockchains")," variable in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-getting-started/blob/main/inventories/local/group_vars/subnet_control_node.yml#L9"},(0,o.kt)("inlineCode",{parentName:"a"},"subnet_control_node.yml")),"."),(0,o.kt)("p",null,"By default, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Subnet EVM")," blockchain is created using the ",(0,o.kt)("inlineCode",{parentName:"p"},"subnet-evm")," VM."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ansible-playbook ash.avalanche.create_local_blockchains -i inventories/local \\\n  -e subnet_id=$MY_SUBNET_ID\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"$MY_SUBNET_ID")," should be the Subnet ID returned by the ",(0,o.kt)("a",{parentName:"p",href:"./subnet-management#subnet-creation"},"Subnet creation")," step.")),(0,o.kt)("p",null,"The blockchain information are displayed at the end of its creation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"ok: [validator01] =>\n  blockchain_info:\n    id: 2qySivgXbE13Guu3icudmMj5HTnDiXnJHznLd22JZSWCCA3tbL\n    name: Subnet EVM\n    subnetID: QBEQJBMPLQTQw7JzG1GtqLDasvcFyj5RLnvwyxDi6LfooQr7L\n    vmID: srEXiWaHuhNyGwPUi444Tu47ZEDwxTWrbQiuD7FmgSAQ6X7Dy\n")),(0,o.kt)("h2",{id:"customization"},"Customization"),(0,o.kt)("p",null,"To customize the blockchains created: edit the variables in ",(0,o.kt)("inlineCode",{parentName:"p"},"inventories/local/group_vars/subnet_control_node.yml"),"."),(0,o.kt)("p",null,"For a list of all available variables, see the ",(0,o.kt)("a",{parentName:"p",href:"/docs/toolkit/ansible-avalanche-collection/reference/roles/avalanche-blockchain"},"ash.avalanche.blockchain role reference"),"."))}p.isMDXComponent=!0}}]);