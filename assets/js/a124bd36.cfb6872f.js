"use strict";(self.webpackChunkash_docs=self.webpackChunkash_docs||[]).push([[717],{9613:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(9496);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),d=o,m=p["".concat(i,".").concat(d)]||p[d]||h[d]||r;return a?n.createElement(m,l(l({ref:t},u),{},{components:a})):n.createElement(m,l({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:o,l[1]=s;for(var c=2;c<r;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},623:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(4778),o=(a(9496),a(9613));const r={sidebar_label:"Subnet management",sidebar_position:5},l="Subnet management",s={unversionedId:"tools/ansible-avalanche-collection/subnet-management",id:"tools/ansible-avalanche-collection/subnet-management",title:"Subnet management",description:"In this section, we will learn how to use the ash.avalanche.subnet role to create a Subnet.",source:"@site/docs/tools/ansible-avalanche-collection/subnet-management.md",sourceDirName:"tools/ansible-avalanche-collection",slug:"/tools/ansible-avalanche-collection/subnet-management",permalink:"/docs/tools/ansible-avalanche-collection/subnet-management",draft:!1,editUrl:"https://github.com/AshAvalanche/ash-docs/tree/main/docs/tools/ansible-avalanche-collection/subnet-management.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_label:"Subnet management",sidebar_position:5},sidebar:"toolsSidebar",previous:{title:"VM management",permalink:"/docs/tools/ansible-avalanche-collection/vm-management"},next:{title:"Blockchain management",permalink:"/docs/tools/ansible-avalanche-collection/blockchain-management"}},i={},c=[{value:"Create control keys",id:"create-control-keys",level:2},{value:"Subnet creation",id:"subnet-creation",level:2},{value:"Subnet tracking",id:"subnet-tracking",level:2},{value:"Customization",id:"customization",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"subnet-management"},"Subnet management"),(0,o.kt)("p",null,"In this section, we will learn how to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"ash.avalanche.subnet")," role to create a Subnet."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"For this tutorial, we will use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local"},(0,o.kt)("inlineCode",{parentName:"a"},"local"))," inventory provided by the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-getting-started"},"Ansible Avalanche Getting Started")," repository. See ",(0,o.kt)("a",{parentName:"p",href:"./local-test-network"},"Create a local test network")," for details.")),(0,o.kt)("h2",{id:"create-control-keys"},"Create control keys"),(0,o.kt)("p",null,"For this tutorial, we will use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/tree/main/playbooks/create_local_subnet.yml"},"ash.avalanche.create_local_subnet")," notebook that leverages the pre-funded account to create the Subnet. Therefore, before creating the Subnet, we need to create 2 addresses that will serve as control keys for the subnet (see ",(0,o.kt)("a",{parentName:"p",href:"https://docs.avax.network/build/tutorials/platform/subnets/create-a-subnet"},"Create a subnet")," for more information):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'data=\'{\n  "jsonrpc": "2.0", "id": 1, "method" : "platform.createAddress",\n  "params" : {"username":"ewoq", "password": "I_l1ve_@_Endor"}\n}\'\nkey_1=$(curl -s -X POST -H \'content-type:application/json;\' --data "$data" http://192.168.60.11:9650/ext/bc/P | jq -r \'.result.address\')\nkey_2=$(curl -s -X POST -H \'content-type:application/json;\' --data "$data" http://192.168.60.11:9650/ext/bc/P | jq -r \'.result.address\')\n')),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"You should only use the keystore API on nodes you manage yourself.")),(0,o.kt)("h2",{id:"subnet-creation"},"Subnet creation"),(0,o.kt)("p",null,"We will use the 2 addresses created above as control keys for the Subnet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'ansible-playbook ash.avalanche.create_local_subnet -i inventories/local \\\n  --extra-vars "{\\"subnet_control_keys\\": [\\"$key_1\\",\\"$key_2\\"]}"\n')),(0,o.kt)("h2",{id:"subnet-tracking"},"Subnet tracking"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ash.avalanche.subnet")," role does not handle Subnet tracking on validator nodes. The list of tracked Subnets is handled by the ",(0,o.kt)("inlineCode",{parentName:"p"},"avalanche_tracked_subnets")," variable in the ",(0,o.kt)("inlineCode",{parentName:"p"},"ash.avalanche.node")," role."),(0,o.kt)("p",null,"At the end of the Subnet creation, information about the new Subnet is displayed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"ok: [validator01] =>\n  msg: |-\n    The subnet has been created and the validators added.\n    Make sure to add the subnet ID to the track-subnets list of the validators.\n    Subnet ID = QBEQJBMPLQTQw7JzG1GtqLDasvcFyj5RLnvwyxDi6LfooQr7L\n")),(0,o.kt)("p",null,"To track the Subnet on our nodes:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add the following lines to the ",(0,o.kt)("inlineCode",{parentName:"p"},"group_vars")," file associated with the hosts to add the ",(0,o.kt)("inlineCode",{parentName:"p"},"avalanche_tracked_subnets")," variable. In our case it is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local/group_vars/avalanche_nodes.yml"},(0,o.kt)("inlineCode",{parentName:"a"},"avalanche_nodes.yml")),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"avalanche_tracked_subnets:\n  - QBEQJBMPLQTQw7JzG1GtqLDasvcFyj5RLnvwyxDi6LfooQr7L\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run the ",(0,o.kt)("inlineCode",{parentName:"p"},"ash.avalanche.provision_nodes")," to apply the new configuration and restart the :"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"ansible-playbook ash.avalanche.provision_nodes -i inventories/local\n")))),(0,o.kt)("h2",{id:"customization"},"Customization"),(0,o.kt)("p",null,"To customize the Subnet: edit the variables in ",(0,o.kt)("inlineCode",{parentName:"p"},"inventories/local/group_vars/subnet_control_node.yml"),"."),(0,o.kt)("p",null,"For a list of all available variables, see the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/tree/main/roles/subnet"},"ash.avalanche.subnet role documentation"),"."))}p.isMDXComponent=!0}}]);