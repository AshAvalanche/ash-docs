"use strict";(self.webpackChunkash_docs=self.webpackChunkash_docs||[]).push([[8409],{9613:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>d});var n=t(9496);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function r(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=n.createContext({}),c=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},m=function(e){var a=c(e.components);return n.createElement(s.Provider,{value:a},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),p=c(t),u=l,d=p["".concat(s,".").concat(u)]||p[u]||h[u]||o;return t?n.createElement(d,i(i({ref:a},m),{},{components:t})):n.createElement(d,i({ref:a},m))}));function d(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var o=t.length,i=new Array(o);i[0]=u;var r={};for(var s in a)hasOwnProperty.call(a,s)&&(r[s]=a[s]);r.originalType=e,r[p]="string"==typeof e?e:l,i[1]=r;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6379:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var n=t(7605),l=(t(9496),t(9613));const o={sidebar_position:4},i="Blockchain VM Management",r={unversionedId:"toolkit/ansible-avalanche-collection/tutorials/vm-management",id:"toolkit/ansible-avalanche-collection/tutorials/vm-management",title:"Blockchain VM Management",description:"In this section, we will learn how to use the Ansible Avalanche Collection to install or upgrade blockchain VMs on the nodes.",source:"@site/docs/toolkit/ansible-avalanche-collection/tutorials/vm-management.md",sourceDirName:"toolkit/ansible-avalanche-collection/tutorials",slug:"/toolkit/ansible-avalanche-collection/tutorials/vm-management",permalink:"/docs/toolkit/ansible-avalanche-collection/tutorials/vm-management",draft:!1,editUrl:"https://github.com/AshAvalanche/ash-docs/tree/main/docs/toolkit/ansible-avalanche-collection/tutorials/vm-management.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"toolkitSidebar",previous:{title:"Node Upgrade",permalink:"/docs/toolkit/ansible-avalanche-collection/tutorials/node-upgrade"},next:{title:"Subnet Creation",permalink:"/docs/toolkit/ansible-avalanche-collection/tutorials/subnet-creation"}},s={},c=[{value:"Install a VM",id:"install-a-vm",level:2},{value:"Upgrade a VM",id:"upgrade-a-vm",level:2},{value:"Uninstall a VM",id:"uninstall-a-vm",level:2},{value:"Install a custom VM",id:"install-a-custom-vm",level:2}],m={toc:c},p="wrapper";function h(e){let{components:a,...t}=e;return(0,l.kt)(p,(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"blockchain-vm-management"},"Blockchain VM Management"),(0,l.kt)("p",null,"In this section, we will learn how to use the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-collection"},"Ansible Avalanche Collection")," to install or upgrade blockchain VMs on the nodes."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"For this tutorial, we will use the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local"},(0,l.kt)("inlineCode",{parentName:"a"},"local"))," inventory provided by the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-getting-started"},"Ansible Avalanche Getting Started")," repository. See ",(0,l.kt)("a",{parentName:"p",href:"./local-test-network"},"Create a Local Test Network")," for details.")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Always make sure you have the latest version of the collection installed. See ",(0,l.kt)("a",{parentName:"p",href:"/docs/toolkit/ansible-avalanche-collection/installation"},"Installation and upgrade"),".")),(0,l.kt)("h2",{id:"install-a-vm"},"Install a VM"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"For now only the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ava-labs/subnet-evm"},"Subnet EVM")," is supported by the collection, see section ",(0,l.kt)("a",{parentName:"p",href:"#install-a-custom-vm"},"Install a custom VM")," if you want to use the collection to install your own VM.")),(0,l.kt)("p",null,"The VMs are managed by the ",(0,l.kt)("inlineCode",{parentName:"p"},"avalanchego_vms_install")," role variable which is empty by default (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/blob/main/roles/node/defaults/main.yml#L42"},(0,l.kt)("inlineCode",{parentName:"a"},"avalanchego_vms_install: {}")),")."),(0,l.kt)("p",null,"To add a new VM that will be installed on our validator nodes, we just have to update the ",(0,l.kt)("inlineCode",{parentName:"p"},"avalanchego_vms_install")," variable. For the next example, we will install Ava Labs' ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ava-labs/subnet-evm"},"Subnet EVM")," in version ",(0,l.kt)("inlineCode",{parentName:"p"},"0.6.3"),". The variable we are should be added to ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local/group_vars/avalanche_nodes.yml"},(0,l.kt)("inlineCode",{parentName:"a"},"avalanche_nodes.yml")),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="inventories/local/group_vars/avalanche_nodes.yml"',title:'"inventories/local/group_vars/avalanche_nodes.yml"'},"avalanchego_vms_install:\n  subnet-evm: 0.6.3\n")),(0,l.kt)("p",null,"We can then install this VM to all the nodes defined in our Ansible inventory by running the ",(0,l.kt)("inlineCode",{parentName:"p"},"provision_nodes")," playbook again:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ansible-playbook ash.avalanche.provision_nodes -i inventories/local\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"The Ash team maintains a AvalancheGo / Ava Labs' VMs ",(0,l.kt)("a",{parentName:"p",href:"/docs/toolkit/ansible-avalanche-collection/reference/roles/avalanche-node#supported-vms-and-avalanchego-compatibility"},"compatibility matrix")," that keeps you from mistakenly add a VM that is not compatible with your current AvalancheGo version which could cause a critical node failure.")),(0,l.kt)("p",null,"The VM binary can then be found on the Avalanche node at ",(0,l.kt)("inlineCode",{parentName:"p"},"/opt/avalanche/avalanchego/current/plugins/"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'{2} title="Command"',"{2}":!0,title:'"Command"'},"# First SSH to the node\nmultipass shell validator01\n\nll /opt/avalanche/avalanchego/current/plugins/\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"total 8\ndrwxr-xr-x 2 avalanche avalanche 4096 Jul 25 11:21 ./\ndrwxr-xr-x 3 avalanche avalanche 4096 Jul 25 11:05 ../\nlrwxrwxrwx 1 root      root        58 Jul 25 11:21 subnet-evm -> /opt/avalanche/vms/subnet-evm/subnet-evm-v0.6.3/subnet-evm*\n")),(0,l.kt)("p",null,"AvalancheGo has been automatically restarted and the VM is ready to be used."),(0,l.kt)("h2",{id:"upgrade-a-vm"},"Upgrade a VM"),(0,l.kt)("p",null,"Upgrading a VM is as simple as updating the ",(0,l.kt)("inlineCode",{parentName:"p"},"avalanchego_vms_install")," variable."),(0,l.kt)("p",null,"For example, if we want to upgrade the ",(0,l.kt)("inlineCode",{parentName:"p"},"subnet-evm")," from version ",(0,l.kt)("inlineCode",{parentName:"p"},"0.6.3")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"0.6.4"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="inventories/local/group_vars/avalanche_nodes.yml"',title:'"inventories/local/group_vars/avalanche_nodes.yml"'},"avalanchego_vms_install:\n  subnet-evm: 0.6.4\n")),(0,l.kt)("p",null,"Re-run the ",(0,l.kt)("inlineCode",{parentName:"p"},"provision_nodes")," playbook:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ansible-playbook ash.avalanche.provision_nodes -i inventories/local\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"/opt/avalanche/avalanchego/current/plugins/")," has been updated accordingly:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'{1} title="Command"',"{1}":!0,title:'"Command"'},"multipass shell validator01\n\nll /opt/avalanche/avalanchego/current/plugins/\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"total 8\ndrwxr-xr-x 2 avalanche avalanche 4096 Jul 25 11:22 ./\ndrwxr-xr-x 3 avalanche avalanche 4096 Jul 25 11:05 ../\nlrwxrwxrwx 1 root      root        58 Jul 25 11:22 subnet-evm -> /opt/avalanche/vms/subnet-evm/subnet-evm-v0.6.4/subnet-evm*\n")),(0,l.kt)("h2",{id:"uninstall-a-vm"},"Uninstall a VM"),(0,l.kt)("p",null,"Uninstalling a VM can be done by removing it from the ",(0,l.kt)("inlineCode",{parentName:"p"},"avalanchego_vms_install")," variable and re-running the ",(0,l.kt)("inlineCode",{parentName:"p"},"provision_nodes")," playbook."),(0,l.kt)("h2",{id:"install-a-custom-vm"},"Install a custom VM"),(0,l.kt)("p",null,"You can use the Ansible Avalanche Collection to install your own VMs by extending the ",(0,l.kt)("a",{parentName:"p",href:"/docs/toolkit/ansible-avalanche-collection/reference/roles/avalanche-node#supported-vms-and-avalanchego-compatibility"},"compatibility matrix"),"."),(0,l.kt)("p",null,"In this example, we will add ",(0,l.kt)("a",{parentName:"p",href:"https://movementlabs.xyz/"},"Movement Labs"),"'s ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/movemntdev/M1"},"M1"),", a VM bringing an ",(0,l.kt)("a",{parentName:"p",href:"https://aptoslabs.com/"},"Aptos"),"-compatible blockchain to the Subnet ecosystem."),(0,l.kt)("p",null,"The compatibility matrix is managed by the ",(0,l.kt)("inlineCode",{parentName:"p"},"avalanchego_vms_list")," role variable. We can extend the list by adding the following to ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local/group_vars/avalanche_nodes.yml"},(0,l.kt)("inlineCode",{parentName:"a"},"avalanche_nodes.yml")),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"# List of VMs supported by the collection\navalanchego_vms_list:\n  m1:\n    download_url: https://github.com/AshAvalanche/M1/releases/download\n    id: qCP4kDnEWVorqyoUmcAtAmJybm8gXZzhHZ7pZibrJJEWECooU\n    ash_vm_type: Custom\n    binary_filename: m1\n    versions_comp:\n      0.1.0:\n        ge: 1.11.3\n        le: 1.11.7\n")),(0,l.kt)("p",null,"Here are some details about the variables:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"m1"),": The name of the VM."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"download_url"),": URL where the VM binary archive and checksum can be downloaded from."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"id"),": The VM ID (see ",(0,l.kt)("a",{parentName:"li",href:"https://docs.avax.network/build/vm/intro#installing-a-vm"},"Installing a VM"),")."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ash_vm_type"),": The VM type used by the ",(0,l.kt)("a",{parentName:"li",href:"/docs/toolkit/ash-cli/introduction"},"Ash CLI"),". ",(0,l.kt)("inlineCode",{parentName:"li"},"Custom")," for a custom VM."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"binary_filename"),": The name of the VM binary (will be used to generate the archive filename, the checksum filename and the extracted binary filename)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"versions_comp"),": AvalancheGo version boundaries for which the VM is compatible. ",(0,l.kt)("inlineCode",{parentName:"li"},"le"),' is for "less or equal" and ',(0,l.kt)("inlineCode",{parentName:"li"},"ge"),' for "greater or equal".')),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"By defining the ",(0,l.kt)("inlineCode",{parentName:"p"},"m1")," VM with the variables above, the collection will download the VM binary archive from ",(0,l.kt)("inlineCode",{parentName:"p"},"https://github.com/AshAvalanche/M1/releases/download/v0.1.0/m1_0.1.0_linux_amd64.tar.gz"),", validate its SHA-256 checksum with ",(0,l.kt)("inlineCode",{parentName:"p"},"https://github.com/AshAvalanche/M1/releases/download/v0.1.0/m1_0.1.0_checksums.txt")," and extract the ",(0,l.kt)("inlineCode",{parentName:"p"},"m1")," VM binary.")),(0,l.kt)("p",null,"With the example above, we can now install the M1 VM to our nodes by adding the following to ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local/group_vars/avalanche_nodes.yml"},(0,l.kt)("inlineCode",{parentName:"a"},"avalanche_nodes.yml")),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="inventories/local/group_vars/avalanche_nodes.yml"',title:'"inventories/local/group_vars/avalanche_nodes.yml"'},"avalanchego_vms_install:\n  m1: 0.1.0\n")),(0,l.kt)("p",null,"We can then install this VM to all the nodes defined in our Ansible inventory by running the ",(0,l.kt)("inlineCode",{parentName:"p"},"provision_nodes")," playbook again:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ansible-playbook ash.avalanche.provision_nodes -i inventories/local\n")),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"For security reasons, the collection will checksum test the downloaded VM. The checksum file must be available at the same location as the VM binary archive. The standard follows is the same as Ava Lab's ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ava-labs/subnet-evm"},"Subnet EVM")," (see release ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ava-labs/subnet-evm/releases/tag/v0.6.3"},"v0.6.3")," for an example.).")))}h.isMDXComponent=!0}}]);