"use strict";(self.webpackChunkash_docs=self.webpackChunkash_docs||[]).push([[625],{9613:(e,a,n)=>{n.d(a,{Zo:()=>p,kt:()=>v});var t=n(9496);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=t.createContext({}),c=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},p=function(e){var a=c(e.components);return t.createElement(s.Provider,{value:a},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},h=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),h=l,v=m["".concat(s,".").concat(h)]||m[h]||u[h]||o;return n?t.createElement(v,r(r({ref:a},p),{},{components:n})):t.createElement(v,r({ref:a},p))}));function v(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=h;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[m]="string"==typeof e?e:l,r[1]=i;for(var c=2;c<o;c++)r[c]=n[c];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5933:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var t=n(4778),l=(n(9496),n(9613));const o={sidebar_position:4},r="VM Management",i={unversionedId:"tools/ansible-avalanche-collection/tutorials/vm-management",id:"tools/ansible-avalanche-collection/tutorials/vm-management",title:"VM Management",description:"In this section, we will learn how to use the Ansible Avalanche Collection to install or upgrade VMs on the nodes.",source:"@site/docs/tools/ansible-avalanche-collection/tutorials/vm-management.md",sourceDirName:"tools/ansible-avalanche-collection/tutorials",slug:"/tools/ansible-avalanche-collection/tutorials/vm-management",permalink:"/docs/tools/ansible-avalanche-collection/tutorials/vm-management",draft:!1,editUrl:"https://github.com/AshAvalanche/ash-docs/tree/main/docs/tools/ansible-avalanche-collection/tutorials/vm-management.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"toolsSidebar",previous:{title:"Node Upgrade",permalink:"/docs/tools/ansible-avalanche-collection/tutorials/node-upgrade"},next:{title:"Subnet Management",permalink:"/docs/tools/ansible-avalanche-collection/tutorials/subnet-management"}},s={},c=[{value:"Install a VM",id:"install-a-vm",level:2},{value:"Upgrade a VM",id:"upgrade-a-vm",level:2},{value:"Uninstall a VM",id:"uninstall-a-vm",level:2}],p={toc:c};function m(e){let{components:a,...n}=e;return(0,l.kt)("wrapper",(0,t.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"vm-management"},"VM Management"),(0,l.kt)("p",null,"In this section, we will learn how to use the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-collection"},"Ansible Avalanche Collection")," to install or upgrade VMs on the nodes."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"For this tutorial, we will use the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local"},(0,l.kt)("inlineCode",{parentName:"a"},"local"))," inventory provided by the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-getting-started"},"Ansible Avalanche Getting Started")," repository. See ",(0,l.kt)("a",{parentName:"p",href:"./local-test-network"},"Create a local test network")," for details.")),(0,l.kt)("h2",{id:"install-a-vm"},"Install a VM"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"For now only the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ava-labs/subnet-evm"},"Subnet EVM")," is supported by the collection.")),(0,l.kt)("p",null,"The VMs are managed by the ",(0,l.kt)("inlineCode",{parentName:"p"},"avalanchego_vms_install")," role variable which is empty by default (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/blob/main/roles/node/defaults/main.yml#L42"},(0,l.kt)("inlineCode",{parentName:"a"},"avalanchego_vms_install: []")),")."),(0,l.kt)("p",null,"To add a new VM that will be installed on our validator nodes, we just have to update the ",(0,l.kt)("inlineCode",{parentName:"p"},"avalanchego_vms_install")," variable. For the next example, we will install Ava Labs' ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ava-labs/subnet-evm"},"Subnet EVM")," in version 0.4.9. The variable we are should be added to ",(0,l.kt)("inlineCode",{parentName:"p"},"inventories/local/group_vars/avalanche_nodes.yml"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"[...]\navalanchego_vms_install:\n  - subnet-evm=0.4.9\n[...]\n")),(0,l.kt)("p",null,"We can then install this VM to all the nodes defined in our Ansible inventory by running the ",(0,l.kt)("inlineCode",{parentName:"p"},"provision_nodes")," playbook again:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ansible-playbook ash.avalanche.provision_nodes -i inventories/local\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"The Ash team maintains a AvalancheGo / Ava Labs' VMs ",(0,l.kt)("a",{parentName:"p",href:"/docs/tools/ansible-avalanche-collection/reference/roles/avalanche-node#available-vms-and-avalanchego-compatibility"},"compatibility matrix")," that keeps you from mistakenly add a VM that is not compatible with your current AvalancheGo version which could cause a critical node failure.")),(0,l.kt)("p",null,"The VM binary can then be found on the Avalanche node at ",(0,l.kt)("inlineCode",{parentName:"p"},"/opt/avalanche/avalanchego/current/plugins/"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{2,4}","{2,4}":!0},"# First SSH to the node\nvagrant ssh validator01-local\n\nll /opt/avalanche/avalanchego/current/plugins/\ntotal 8\ndrwxr-xr-x 2 avalanche avalanche 4096 Mar 10 18:30 ./\ndrwxr-xr-x 3 avalanche avalanche 4096 Mar  9 16:10 ../\nlrwxrwxrwx 1 root      root        56 Mar 10 18:30 subnet-evm -> /opt/avalanche/vms/subnet-evm/subnet-evm-v0.4.9/subnet-evm\n")),(0,l.kt)("p",null,"AvalancheGo has been automatically restarted and the VM is ready to be used."),(0,l.kt)("h2",{id:"upgrade-a-vm"},"Upgrade a VM"),(0,l.kt)("p",null,"Upgrading a VM is as simple as updating the ",(0,l.kt)("inlineCode",{parentName:"p"},"avalanchego_vms_install")," variable."),(0,l.kt)("p",null,"For example, if we want to upgrade the ",(0,l.kt)("inlineCode",{parentName:"p"},"subnet-evm")," from version 0.4.9 to 0.4.10:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"[...]\navalanchego_vms_install:\n  - subnet-evm=0.4.10\n[...]\n")),(0,l.kt)("p",null,"Re-run the ",(0,l.kt)("inlineCode",{parentName:"p"},"provision_nodes")," playbook:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ansible-playbook ash.avalanche.provision_nodes -i inventories/local\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"/opt/avalanche/avalanchego/current/plugins/")," has been updated accordingly:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{1}","{1}":!0},"ll /opt/avalanche/avalanchego/current/plugins/\ntotal 8\ndrwxr-xr-x 2 avalanche avalanche 4096 Mar 10 18:32 ./\ndrwxr-xr-x 3 avalanche avalanche 4096 Mar  9 16:10 ../\nlrwxrwxrwx 1 root      root        56 Mar 10 18:32 subnet-evm -> /opt/avalanche/vms/subnet-evm/subnet-evm-v0.4.10/subnet-evm\n")),(0,l.kt)("h2",{id:"uninstall-a-vm"},"Uninstall a VM"),(0,l.kt)("p",null,"Uninstalling a VM can be done by removing it from the ",(0,l.kt)("inlineCode",{parentName:"p"},"avalanchego_vms_install")," variable and re-running the ",(0,l.kt)("inlineCode",{parentName:"p"},"provision_nodes")," playbook."))}m.isMDXComponent=!0}}]);