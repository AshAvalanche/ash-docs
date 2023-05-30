"use strict";(self.webpackChunkash_docs=self.webpackChunkash_docs||[]).push([[5706],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},h=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),u=s(a),d=l,m=u["".concat(c,".").concat(d)]||u[d]||p[d]||o;return a?n.createElement(m,r(r({ref:t},h),{},{components:a})):n.createElement(m,r({ref:t},h))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=a.length,r=new Array(o);r[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:l,r[1]=i;for(var s=2;s<o;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2115:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=a(7462),l=(a(7294),a(3905));const o={sidebar_position:8},r="Subnet Faucet",i={unversionedId:"toolkit/ansible-avalanche-collection/tutorials/subnet-faucet",id:"toolkit/ansible-avalanche-collection/tutorials/subnet-faucet",title:"Subnet Faucet",description:"In this section, we will learn how to use the ash.avalanche.faucet role to deploy an Avalanche Faucet for an EVM blockchain.",source:"@site/docs/toolkit/ansible-avalanche-collection/tutorials/subnet-faucet.md",sourceDirName:"toolkit/ansible-avalanche-collection/tutorials",slug:"/toolkit/ansible-avalanche-collection/tutorials/subnet-faucet",permalink:"/docs/toolkit/ansible-avalanche-collection/tutorials/subnet-faucet",draft:!1,editUrl:"https://github.com/AshAvalanche/ash-docs/tree/main/docs/toolkit/ansible-avalanche-collection/tutorials/subnet-faucet.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"toolkitSidebar",previous:{title:"Subnet Blockchain Explorer",permalink:"/docs/toolkit/ansible-avalanche-collection/tutorials/subnet-blockchain-explorer"},next:{title:"Monitoring",permalink:"/docs/toolkit/ansible-avalanche-collection/tutorials/monitoring"}},c={},s=[{value:"Requirements",id:"requirements",level:2},{value:"Configure the faucet",id:"configure-the-faucet",level:2},{value:"Install the faucet",id:"install-the-faucet",level:2}],h={toc:s},u="wrapper";function p(e){let{components:t,...o}=e;return(0,l.kt)(u,(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"subnet-faucet"},"Subnet Faucet"),(0,l.kt)("p",null,"In this section, we will learn how to use the ",(0,l.kt)("inlineCode",{parentName:"p"},"ash.avalanche.faucet")," role to deploy an ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ava-labs/avalanche-faucet"},"Avalanche Faucet")," for an EVM blockchain."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"For this tutorial, we will use the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local"},(0,l.kt)("inlineCode",{parentName:"a"},"local"))," inventory provided by the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-getting-started"},"Ansible Avalanche Getting Started")," repository. See ",(0,l.kt)("a",{parentName:"p",href:"./local-test-network"},"Create a Local Test Network")," for details."),(0,l.kt)("p",{parentName:"admonition"},"We should also have created a Subnet and a blockchain, see ",(0,l.kt)("a",{parentName:"p",href:"./blockchain-management"},"Blockchain management")," for details.")),(0,l.kt)("h2",{id:"requirements"},"Requirements"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"ash.avalanche.faucet")," role uses Docker and the ",(0,l.kt)("inlineCode",{parentName:"p"},"ash.avalanche.install_faucet_docker")," playbook installs Docker through the ",(0,l.kt)("a",{parentName:"p",href:"https://galaxy.ansible.com/geerlingguy/docker"},"geerlingguy.docker"),"."),(0,l.kt)("p",null,"We can make this role available locally with:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ansible-galaxy install -r ansible_collections/ash/avalanche/requirements.yml\n")),(0,l.kt)("h2",{id:"configure-the-faucet"},"Configure the faucet"),(0,l.kt)("p",null,"The Avalanche Faucet will be installed as a ",(0,l.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/"},"Docker Compose")," service on the nodes of the ",(0,l.kt)("inlineCode",{parentName:"p"},"faucet")," Ansible group. In ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-getting-started"},"Ansible Avalanche Getting Started"),", it is the ",(0,l.kt)("inlineCode",{parentName:"p"},"frontend")," node by default. You can change this by editing the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-getting-started/blob/main/inventories/local/hosts"},(0,l.kt)("inlineCode",{parentName:"a"},"hosts"))," file."),(0,l.kt)("p",null,"We need to set the blockchain configuration using the ",(0,l.kt)("inlineCode",{parentName:"p"},"avalanche_faucet_chains")," variable. Let's modify ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local/group_vars/faucet.yml"},(0,l.kt)("inlineCode",{parentName:"a"},"faucet.yml"))," (the ",(0,l.kt)("inlineCode",{parentName:"p"},"group_vars")," file associated with our hosts' group):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"avalanche_faucet_chains:\n  - ID: ASH\n    NAME: Subnet-EVM Local Subnet\n    TOKEN: SUBNET\n    RPC: http://192.168.60.11:9650/ext/bc/2qySivgXbE13Guu3icudmMj5HTnDiXnJHznLd22JZSWCCA3tbL/rpc\n    CHAINID: 13213\n    EXPLORER: http://192.168.60.19:4000\n    IMAGE: https://docs.ash.center/img/ash-logo.svg\n    MAX_PRIORITY_FEE: 2000000000\n    MAX_FEE: 100000000000\n    DRIP_AMOUNT: 2\n    RATELIMIT:\n      MAX_LIMIT: 1\n      WINDOW_SIZE: 1440\n")),(0,l.kt)("p",null,"The blockchain ID (",(0,l.kt)("inlineCode",{parentName:"p"},"2qySivgXbE13Guu3icudmMj5HTnDiXnJHznLd22JZSWCCA3tbL")," in our case) should be the one created in the ",(0,l.kt)("a",{parentName:"p",href:"./blockchain-management"},"Blockchain management")," tutorial."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"If you went through all the tutorials with the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local"},(0,l.kt)("inlineCode",{parentName:"a"},"local"))," inventory and the default variables, you should be good to go! Otherwise, check out the other variables at ",(0,l.kt)("a",{parentName:"p",href:"/docs/toolkit/ansible-avalanche-collection/reference/roles/avalanche-faucet"},(0,l.kt)("inlineCode",{parentName:"a"},"ash.avalanche.faucet")),".")),(0,l.kt)("h2",{id:"install-the-faucet"},"Install the faucet"),(0,l.kt)("p",null,"Running the ",(0,l.kt)("inlineCode",{parentName:"p"},"ash.avalanche.install_faucet_docker")," will install Docker and the docker-compose service:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ansible-playbook ash.avalanche.install_faucet_docker -i inventories/local\n")),(0,l.kt)("p",null,"The Faucet should then be available at ",(0,l.kt)("a",{parentName:"p",href:"http://192.168.60.19:8000"},"http://192.168.60.19:8000")),(0,l.kt)("figure",null,(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Ash faucet",src:a(182).Z,width:"1185",height:"937"})),(0,l.kt)("figcaption",{style:{textAlign:"center"}},"Fig.1 - Ash faucet")),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"ash.avalanche.faucet")," role is not yet compatible with secured HTTP API endpoints (see ",(0,l.kt)("a",{parentName:"p",href:"./node-security"},"Node security")," for details).")))}p.isMDXComponent=!0},182:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ash-faucet-2408288fc938549ef2b2dab5681a3254.png"}}]);