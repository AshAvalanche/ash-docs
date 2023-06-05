"use strict";(self.webpackChunkash_docs=self.webpackChunkash_docs||[]).push([[9784],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=c(a),d=l,m=h["".concat(s,".").concat(d)]||h[d]||u[d]||o;return a?n.createElement(m,r(r({ref:t},p),{},{components:a})):n.createElement(m,r({ref:t},p))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=a.length,r=new Array(o);r[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[h]="string"==typeof e?e:l,r[1]=i;for(var c=2;c<o;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5769:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(7462),l=(a(7294),a(3905));const o={sidebar_position:1},r="Local Test Network Creation",i={unversionedId:"toolkit/ansible-avalanche-collection/tutorials/local-test-network",id:"toolkit/ansible-avalanche-collection/tutorials/local-test-network",title:"Local Test Network Creation",description:"In this section, we will learn how to use the ash.avalanche Ansible collection to provision a local Avalanche test network on VirtualBox virtual machines.",source:"@site/docs/toolkit/ansible-avalanche-collection/tutorials/local-test-network.md",sourceDirName:"toolkit/ansible-avalanche-collection/tutorials",slug:"/toolkit/ansible-avalanche-collection/tutorials/local-test-network",permalink:"/docs/toolkit/ansible-avalanche-collection/tutorials/local-test-network",draft:!1,editUrl:"https://github.com/AshAvalanche/ash-docs/tree/main/docs/toolkit/ansible-avalanche-collection/tutorials/local-test-network.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"toolkitSidebar",previous:{title:"Tutorials",permalink:"/docs/category/tutorials"},next:{title:"Create a Fuji node on AWS",permalink:"/docs/toolkit/ansible-avalanche-collection/tutorials/fuji-node-aws"}},s={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Installation",id:"installation",level:2},{value:"Bootstrap a local test network",id:"bootstrap-a-local-test-network",level:2},{value:"API calls",id:"api-calls",level:2},{value:"Pre-funded account",id:"pre-funded-account",level:2},{value:"Customization",id:"customization",level:2}],p={toc:c},h="wrapper";function u(e){let{components:t,...a}=e;return(0,l.kt)(h,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"local-test-network-creation"},"Local Test Network Creation"),(0,l.kt)("p",null,"In this section, we will learn how to use the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-collection"},"ash.avalanche")," Ansible collection to provision a local ",(0,l.kt)("a",{parentName:"p",href:"https://docs.avax.network/"},"Avalanche")," test network on ",(0,l.kt)("a",{parentName:"p",href:"https://www.virtualbox.org/"},"VirtualBox")," virtual machines."),(0,l.kt)("h2",{id:"requirements"},"Requirements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Python >=3.9 with ",(0,l.kt)("inlineCode",{parentName:"li"},"venv")," module installed"),(0,l.kt)("li",{parentName:"ul"},"For the local test network:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"6+ GB of free RAM"),(0,l.kt)("li",{parentName:"ul"},"Vagrant (see ",(0,l.kt)("a",{parentName:"li",href:"https://www.vagrantup.com/docs/installation"},"Installing Vagrant"),")"),(0,l.kt)("li",{parentName:"ul"},"VirtualBox (see ",(0,l.kt)("a",{parentName:"li",href:"https://www.virtualbox.org/wiki/Downloads"},"Download VirtualBox"),")"))),(0,l.kt)("li",{parentName:"ul"},"For filtering outputs:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://stedolan.github.io/jq/"},"jq")," (see ",(0,l.kt)("a",{parentName:"li",href:"https://stedolan.github.io/jq/download/"},"Installation"),")")))),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"We recommend installing the Ash CLI to easily get information about your nodes and Subnets. See ",(0,l.kt)("a",{parentName:"p",href:"/docs/toolkit/ash-cli/installation"},"Ash CLI - Installation"),".",(0,l.kt)("br",{parentName:"p"}),"\n","The tutorials still provide the snippets to query the Avalanche APIs with cURL.")),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Clone the Getting Started repository:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/AshAvalanche/ansible-avalanche-getting-started\ncd ansible-avalanche-collection-getting-started\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Setup and activate Python venv:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"bin/setup.sh\nsource .venv/bin/activate\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Install the ",(0,l.kt)("inlineCode",{parentName:"p"},"ash.avalanche")," collection:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ansible-galaxy collection install git+https://github.com/AshAvalanche/ansible-avalanche-collection.git\n")))),(0,l.kt)("h2",{id:"bootstrap-a-local-test-network"},"Bootstrap a local test network"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"This section uses the ",(0,l.kt)("inlineCode",{parentName:"p"},"local")," inventory which is pre-configured as a local Avalanche network (see ",(0,l.kt)("inlineCode",{parentName:"p"},"avalanchego_network_id: local")," in ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local/group_vars/avalanche_nodes.yml#L5"},"avalanche_nodes.yml"),").")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Create the 5 virtual machines that will host the Avalanche nodes:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"vagrant up\n")))),(0,l.kt)("p",null,"We will use the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/blob/main/playbooks/bootstrap_local_network.yml"},"ash.avalanche.bootstrap_local_network")," playbook to bootstrap the local network. This playbook starts a first validator (",(0,l.kt)("inlineCode",{parentName:"p"},"validator01"),") and then boostrap additional nodes (",(0,l.kt)("inlineCode",{parentName:"p"},"validator02-05"),") from the first node, thus creating a local network."),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Bootstrap the Avalanche nodes:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ansible-playbook ash.avalanche.bootstrap_local_network -i inventories/local\n")))),(0,l.kt)("p",null,"It's done! We now have a ready to use 5 nodes Avalanche local test network."),(0,l.kt)("h2",{id:"api-calls"},"API calls"),(0,l.kt)("p",null,"The node ",(0,l.kt)("inlineCode",{parentName:"p"},"validator01-local")," exposes AvalancheGo APIs on it's public IP: you can query any ",(0,l.kt)("a",{parentName:"p",href:"https://docs.avax.network/build/avalanchego-apis/"},"Avalanche API")," at ",(0,l.kt)("inlineCode",{parentName:"p"},"192.168.60.11:9650")," from your terminal. For example, to check if the P-Chain is done bootstrapping:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST --data \'{\n  "jsonrpc": "2.0",\n  "id"     : 1,\n  "method" : "info.isBootstrapped",\n  "params": {\n    "chain": "P"\n  }\n}\' -H \'content-type:application/json;\' http://192.168.60.11:9650/ext/info\n')),(0,l.kt)("p",null,"The output should like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'{"jsonrpc":"2.0","result":{"isBootstrapped":true},"id":1}\n')),(0,l.kt)("h2",{id:"pre-funded-account"},"Pre-funded account"),(0,l.kt)("p",null,"A user with access to the default pre-funded account (see ",(0,l.kt)("a",{parentName:"p",href:"https://docs.avax.network/apis/avalanchejs/create-an-asset-on-the-x-chain#import-the-local-networks-pre-funded-address"},"Import the Local Network's Pre-funded Address")," is automatically created on ",(0,l.kt)("inlineCode",{parentName:"p"},"validator01-local"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Username: ",(0,l.kt)("inlineCode",{parentName:"li"},"ewoq")),(0,l.kt)("li",{parentName:"ul"},"Password: ",(0,l.kt)("inlineCode",{parentName:"li"},"I_l1ve_@_Endor")),(0,l.kt)("li",{parentName:"ul"},"Private key: ",(0,l.kt)("inlineCode",{parentName:"li"},"PrivateKey-ewoqjP7PxY4yr3iLTpLisriqt94hdyDFNgchSxGGztUrTXtNN"))),(0,l.kt)("h2",{id:"customization"},"Customization"),(0,l.kt)("p",null,"Different aspects of the installation can be customized:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"To customize the VMs specs: edit the ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/Vagrantfile"},"Vagrantfile")," and the ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local/hosts"},(0,l.kt)("inlineCode",{parentName:"a"},"hosts")," file")," accordingly"),(0,l.kt)("li",{parentName:"ul"},"To customize AvalancheGo installation: edit the variables in ",(0,l.kt)("inlineCode",{parentName:"li"},"inventories/local/group_vars"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local/group_vars/avalanche_nodes.yml"},"avalanche_nodes.yml")," is applied to all nodes"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local/group_vars/bootstrap_node.yml"},"bootstrap_node.yml")," is only applied to the bootstrap node")))),(0,l.kt)("p",null,"For a list of all available variables, see ",(0,l.kt)("a",{parentName:"p",href:"/docs/toolkit/ansible-avalanche-collection/reference/roles/avalanche-node"},"ash.avalanche.node reference"),"."))}u.isMDXComponent=!0}}]);