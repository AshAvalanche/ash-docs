"use strict";(self.webpackChunkash_docs=self.webpackChunkash_docs||[]).push([[8409],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>v});var n=t(7294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=n.createContext({}),c=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},p=function(e){var a=c(e.components);return n.createElement(s.Provider,{value:a},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(t),h=l,v=m["".concat(s,".").concat(h)]||m[h]||u[h]||o;return t?n.createElement(v,r(r({ref:a},p),{},{components:t})):n.createElement(v,r({ref:a},p))}));function v(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var o=t.length,r=new Array(o);r[0]=h;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[m]="string"==typeof e?e:l,r[1]=i;for(var c=2;c<o;c++)r[c]=t[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},879:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=t(7462),l=(t(7294),t(3905));const o={sidebar_position:4},r="Blockchain VM Management",i={unversionedId:"toolkit/ansible-avalanche-collection/tutorials/vm-management",id:"toolkit/ansible-avalanche-collection/tutorials/vm-management",title:"Blockchain VM Management",description:"In this section, we will learn how to use the Ansible Avalanche Collection to install or upgrade blockchain VMs on the nodes.",source:"@site/docs/toolkit/ansible-avalanche-collection/tutorials/vm-management.md",sourceDirName:"toolkit/ansible-avalanche-collection/tutorials",slug:"/toolkit/ansible-avalanche-collection/tutorials/vm-management",permalink:"/docs/toolkit/ansible-avalanche-collection/tutorials/vm-management",draft:!1,editUrl:"https://github.com/AshAvalanche/ash-docs/tree/main/docs/toolkit/ansible-avalanche-collection/tutorials/vm-management.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"toolkitSidebar",previous:{title:"Node Upgrade",permalink:"/docs/toolkit/ansible-avalanche-collection/tutorials/node-upgrade"},next:{title:"Subnet Creation",permalink:"/docs/toolkit/ansible-avalanche-collection/tutorials/subnet-creation"}},s={},c=[{value:"Install a VM",id:"install-a-vm",level:2},{value:"Upgrade a VM",id:"upgrade-a-vm",level:2},{value:"Uninstall a VM",id:"uninstall-a-vm",level:2}],p={toc:c},m="wrapper";function u(e){let{components:a,...t}=e;return(0,l.kt)(m,(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"blockchain-vm-management"},"Blockchain VM Management"),(0,l.kt)("p",null,"In this section, we will learn how to use the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-collection"},"Ansible Avalanche Collection")," to install or upgrade blockchain VMs on the nodes."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"For this tutorial, we will use the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local"},(0,l.kt)("inlineCode",{parentName:"a"},"local"))," inventory provided by the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-getting-started"},"Ansible Avalanche Getting Started")," repository. See ",(0,l.kt)("a",{parentName:"p",href:"./local-test-network"},"Create a Local Test Network")," for details.")),(0,l.kt)("h2",{id:"install-a-vm"},"Install a VM"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"For now only the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ava-labs/subnet-evm"},"Subnet EVM")," is supported by the collection.")),(0,l.kt)("p",null,"The VMs are managed by the ",(0,l.kt)("inlineCode",{parentName:"p"},"avalanchego_vms_install")," role variable which is empty by default (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/blob/main/roles/node/defaults/main.yml#L42"},(0,l.kt)("inlineCode",{parentName:"a"},"avalanchego_vms_install: []")),")."),(0,l.kt)("p",null,"To add a new VM that will be installed on our validator nodes, we just have to update the ",(0,l.kt)("inlineCode",{parentName:"p"},"avalanchego_vms_install")," variable. For the next example, we will install Ava Labs' ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ava-labs/subnet-evm"},"Subnet EVM")," in version 0.5.2. The variable we are should be added to ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local/group_vars/avalanche_nodes.yml"},(0,l.kt)("inlineCode",{parentName:"a"},"avalanche_nodes.yml")),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="inventories/local/group_vars/avalanche_nodes.yml"',title:'"inventories/local/group_vars/avalanche_nodes.yml"'},"avalanchego_vms_install:\n  - subnet-evm=0.5.1\n")),(0,l.kt)("p",null,"We can then install this VM to all the nodes defined in our Ansible inventory by running the ",(0,l.kt)("inlineCode",{parentName:"p"},"provision_nodes")," playbook again:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ansible-playbook ash.avalanche.provision_nodes -i inventories/local\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"The Ash team maintains a AvalancheGo / Ava Labs' VMs ",(0,l.kt)("a",{parentName:"p",href:"/docs/toolkit/ansible-avalanche-collection/reference/roles/avalanche-node#supported-vms-and-avalanchego-compatibility"},"compatibility matrix")," that keeps you from mistakenly add a VM that is not compatible with your current AvalancheGo version which could cause a critical node failure.")),(0,l.kt)("p",null,"The VM binary can then be found on the Avalanche node at ",(0,l.kt)("inlineCode",{parentName:"p"},"/opt/avalanche/avalanchego/current/plugins/"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'{2} title="Command"',"{2}":!0,title:'"Command"'},"# First SSH to the node\nmultipass shell validator01\n\nll /opt/avalanche/avalanchego/current/plugins/\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"total 8\ndrwxr-xr-x 2 avalanche avalanche 4096 Jul 25 11:21 ./\ndrwxr-xr-x 3 avalanche avalanche 4096 Jul 25 11:05 ../\nlrwxrwxrwx 1 root      root        58 Jul 25 11:21 subnet-evm -> /opt/avalanche/vms/subnet-evm/subnet-evm-v0.5.1/subnet-evm*\n")),(0,l.kt)("p",null,"AvalancheGo has been automatically restarted and the VM is ready to be used."),(0,l.kt)("h2",{id:"upgrade-a-vm"},"Upgrade a VM"),(0,l.kt)("p",null,"Upgrading a VM is as simple as updating the ",(0,l.kt)("inlineCode",{parentName:"p"},"avalanchego_vms_install")," variable."),(0,l.kt)("p",null,"For example, if we want to upgrade the ",(0,l.kt)("inlineCode",{parentName:"p"},"subnet-evm")," from version 0.5.1 to 0.5.2:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="inventories/local/group_vars/avalanche_nodes.yml"',title:'"inventories/local/group_vars/avalanche_nodes.yml"'},"avalanchego_vms_install:\n  - subnet-evm=0.5.2\n")),(0,l.kt)("p",null,"Re-run the ",(0,l.kt)("inlineCode",{parentName:"p"},"provision_nodes")," playbook:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ansible-playbook ash.avalanche.provision_nodes -i inventories/local\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"/opt/avalanche/avalanchego/current/plugins/")," has been updated accordingly:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'{1} title="Command"',"{1}":!0,title:'"Command"'},"multipass shell validator01\n\nll /opt/avalanche/avalanchego/current/plugins/\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"total 8\ndrwxr-xr-x 2 avalanche avalanche 4096 Jul 25 11:22 ./\ndrwxr-xr-x 3 avalanche avalanche 4096 Jul 25 11:05 ../\nlrwxrwxrwx 1 root      root        58 Jul 25 11:22 subnet-evm -> /opt/avalanche/vms/subnet-evm/subnet-evm-v0.5.2/subnet-evm*\n")),(0,l.kt)("h2",{id:"uninstall-a-vm"},"Uninstall a VM"),(0,l.kt)("p",null,"Uninstalling a VM can be done by removing it from the ",(0,l.kt)("inlineCode",{parentName:"p"},"avalanchego_vms_install")," variable and re-running the ",(0,l.kt)("inlineCode",{parentName:"p"},"provision_nodes")," playbook."))}u.isMDXComponent=!0}}]);