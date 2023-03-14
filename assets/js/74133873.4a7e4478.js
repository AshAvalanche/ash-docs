"use strict";(self.webpackChunkash_docs=self.webpackChunkash_docs||[]).push([[765],{9613:(e,n,a)=>{a.d(n,{Zo:()=>h,kt:()=>u});var t=a(9496);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=t.createContext({}),s=function(e){var n=t.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},h=function(e){var n=s(e.components);return t.createElement(c.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},b=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),m=s(a),b=o,u=m["".concat(c,".").concat(b)]||m[b]||p[b]||l;return a?t.createElement(u,r(r({ref:n},h),{},{components:a})):t.createElement(u,r({ref:n},h))}));function u(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=a.length,r=new Array(l);r[0]=b;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[m]="string"==typeof e?e:o,r[1]=i;for(var s=2;s<l;s++)r[s]=a[s];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}b.displayName="MDXCreateElement"},5232:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var t=a(4778),o=(a(9496),a(9613));const l={sidebar_label:"Blockchain management",sidebar_position:6},r="Blockchain management",i={unversionedId:"tools/ansible-avalanche-collection/blockchain-management",id:"tools/ansible-avalanche-collection/blockchain-management",title:"Blockchain management",description:"In this section, we will learn how to use the ash.avalanche.blockchain role to create blockchains in Subnets.",source:"@site/docs/tools/ansible-avalanche-collection/blockchain-management.md",sourceDirName:"tools/ansible-avalanche-collection",slug:"/tools/ansible-avalanche-collection/blockchain-management",permalink:"/docs/tools/ansible-avalanche-collection/blockchain-management",draft:!1,editUrl:"https://github.com/AshAvalanche/ash-docs/tree/main/docs/tools/ansible-avalanche-collection/blockchain-management.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_label:"Blockchain management",sidebar_position:6},sidebar:"toolsSidebar",previous:{title:"Subnet management",permalink:"/docs/tools/ansible-avalanche-collection/subnet-management"},next:{title:"Avalanche transactions",permalink:"/docs/tools/ansible-avalanche-collection/avalanche-transactions"}},c={},s=[{value:"Create a Subnet EVM blockchain in a Subnet",id:"create-a-subnet-evm-blockchain-in-a-subnet",level:2},{value:"Customization",id:"customization",level:2}],h={toc:s};function m(e){let{components:n,...a}=e;return(0,o.kt)("wrapper",(0,t.Z)({},h,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"blockchain-management"},"Blockchain management"),(0,o.kt)("p",null,"In this section, we will learn how to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"ash.avalanche.blockchain")," role to create blockchains in Subnets."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"For this tutorial, we will use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local"},(0,o.kt)("inlineCode",{parentName:"a"},"local"))," inventory provided by the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-getting-started"},"Ansible Avalanche Getting Started")," repository. See ",(0,o.kt)("a",{parentName:"p",href:"./local-test-network"},"Create a local test network")," for details."),(0,o.kt)("p",{parentName:"admonition"},"Make sure to have gone through ",(0,o.kt)("a",{parentName:"p",href:"./vm-management"},"VM management")," as we need the Subnet EVM binary installed on our nodes."),(0,o.kt)("p",{parentName:"admonition"},"We should also have created and tracked a Subnet, see ",(0,o.kt)("a",{parentName:"p",href:"./subnet-management"},"Subnet management")," for details.")),(0,o.kt)("h2",{id:"create-a-subnet-evm-blockchain-in-a-subnet"},"Create a Subnet EVM blockchain in a Subnet"),(0,o.kt)("p",null,"The playbook ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/tree/main/playbooks/create_local_blockchains.yml"},"ash.avalanche.create_local_blockchains")," will create the blockchains listed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"create_blockchains")," variable in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-getting-started/blob/main/inventories/local/group_vars/subnet_control_node.yml#L9"},(0,o.kt)("inlineCode",{parentName:"a"},"subnet_control_node.yml")),"."),(0,o.kt)("p",null,"By default, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Subnet EVM")," blockchain is created using the ",(0,o.kt)("inlineCode",{parentName:"p"},"subnetevm")," VM."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ansible-playbook ash.avalanche.create_local_blockchains -i inventories/local \\\n  -e subnet_id=$MY_SUBNET_ID\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"$MY_SUBNET_ID")," should be the Subnet ID returned by the ",(0,o.kt)("a",{parentName:"p",href:"./subnet-management#subnet-creation"},"Subnet creation")," step.")),(0,o.kt)("p",null,"The blockchain information are displayed at the end of its creation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"ok: [validator01] =>\n  blockchain_info:\n    id: 2qySivgXbE13Guu3icudmMj5HTnDiXnJHznLd22JZSWCCA3tbL\n    name: Subnet EVM\n    subnetID: QBEQJBMPLQTQw7JzG1GtqLDasvcFyj5RLnvwyxDi6LfooQr7L\n    vmID: srEXiWaHuhNyGwPUi444Tu47ZEDwxTWrbQiuD7FmgSAQ6X7Dy\n")),(0,o.kt)("h2",{id:"customization"},"Customization"),(0,o.kt)("p",null,"To customize the blockchains created: edit the variables in ",(0,o.kt)("inlineCode",{parentName:"p"},"inventories/local/group_vars/subnet_control_node.yml"),"."),(0,o.kt)("p",null,"For a list of all available variables, see the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/tree/main/roles/blockchain"},"ash.avalanche.blockchain role documentation"),"."))}m.isMDXComponent=!0}}]);