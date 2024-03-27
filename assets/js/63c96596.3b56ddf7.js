"use strict";(self.webpackChunkash_docs=self.webpackChunkash_docs||[]).push([[5117],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(a),u=r,k=m["".concat(d,".").concat(u)]||m[u]||p[u]||i;return a?n.createElement(k,l(l({ref:t},c),{},{components:a})):n.createElement(k,l({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3231:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:2},l="ash.avalanche.subnet",o={unversionedId:"toolkit/ansible-avalanche-collection/reference/roles/avalanche-subnet",id:"toolkit/ansible-avalanche-collection/reference/roles/avalanche-subnet",title:"ash.avalanche.subnet",description:"This Ansible role allows to create an Avalanche Subnet, its blockchains and add validators to it.",source:"@site/docs/toolkit/ansible-avalanche-collection/reference/roles/avalanche-subnet.md",sourceDirName:"toolkit/ansible-avalanche-collection/reference/roles",slug:"/toolkit/ansible-avalanche-collection/reference/roles/avalanche-subnet",permalink:"/docs/toolkit/ansible-avalanche-collection/reference/roles/avalanche-subnet",draft:!1,editUrl:"https://github.com/AshAvalanche/ash-docs/tree/main/docs/toolkit/ansible-avalanche-collection/reference/roles/avalanche-subnet.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"toolkitSidebar",previous:{title:"ash.avalanche.node",permalink:"/docs/toolkit/ansible-avalanche-collection/reference/roles/avalanche-node"},next:{title:"ash.avalanche.faucet",permalink:"/docs/toolkit/ansible-avalanche-collection/reference/roles/avalanche-faucet"}},d={},s=[{value:"Role variables",id:"role-variables",level:2},{value:"Inventory requirements",id:"inventory-requirements",level:2},{value:"Blockchain configuration",id:"blockchain-configuration",level:2},{value:"Validators parameters",id:"validators-parameters",level:2}],c={toc:s},m="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ashavalanchesubnet"},"ash.avalanche.subnet"),(0,r.kt)("p",null,"This Ansible role allows to create an Avalanche Subnet, its blockchains and add validators to it."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This role uses Ash CLI under the hood."),(0,r.kt)("p",{parentName:"admonition"},"The Ash CLI uses ",(0,r.kt)("strong",{parentName:"p"},"plain-text private keys")," to interact with wallets. ",(0,r.kt)("strong",{parentName:"p"},"It should never be used on the mainnet"),". If you try do so, commands will fail with: ",(0,r.kt)("inlineCode",{parentName:"p"},"AvalancheNetwork error: wallet creation is not allowed on network 'mainnet'"),"."),(0,r.kt)("p",{parentName:"admonition"},"To interact with wallets on the mainnet (e.g. to create Subnets and blockchains), you should use the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.avax.network/subnets/create-a-mainnet-subnet"},"Avalanche CLI")," which is compatible with Ledger devices.")),(0,r.kt)("h2",{id:"role-variables"},"Role variables"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Comment"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"subnet_avalanche_network_id")),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("a",{parentName:"td",href:"https://docs.avax.network/build/references/avalanchego-config-flags/#network-id"},"Network ID")," in which to create the Subnet"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"local"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"subnet_txs_private_key")),(0,r.kt)("td",{parentName:"tr",align:null},"The private key used to sign all Subnet related transactions. The P-Chain address of the account will also be used as control key for the Subnet."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PrivateKey-ewoqjP7PxY4yr3iLTpLisriqt94hdyDFNgchSxGGztUrTXtNN"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"subnet_txs_key_encoding")),(0,r.kt)("td",{parentName:"tr",align:null},"Encoding of the private key. Can be ",(0,r.kt)("inlineCode",{parentName:"td"},"cb58")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"hex"),"."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"cb58"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"subnet_blockchains_check_name")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to fail if a blockchain with the same name already exists"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"subnet_blockchains_list")),(0,r.kt)("td",{parentName:"tr",align:null},"List of blockchains to create in the Subnet. See ",(0,r.kt)("a",{parentName:"td",href:"#blockchain-configuration"},"Blockchain configuration")," for the list structure."),(0,r.kt)("td",{parentName:"tr",align:null},"NA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"subnet_validators_add")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to add the validatores from ",(0,r.kt)("inlineCode",{parentName:"td"},"subnet_validators_params")," to the Subnet"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"subnet_validators_params")),(0,r.kt)("td",{parentName:"tr",align:null},"Validation parameters for each validator to add to the Subnet. See ",(0,r.kt)("a",{parentName:"td",href:"#validators-parameters"},"Validators parameters"),"."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"subnet_validator_start_time_command")),(0,r.kt)("td",{parentName:"tr",align:null},"Command used to dynamically compute ",(0,r.kt)("inlineCode",{parentName:"td"},"start_time_command_output")),(0,r.kt)("td",{parentName:"tr",align:null},"2 minutes from now using ",(0,r.kt)("inlineCode",{parentName:"td"},"date"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"subnet_validator_end_time_command")),(0,r.kt)("td",{parentName:"tr",align:null},"Command used to dynamically compute ",(0,r.kt)("inlineCode",{parentName:"td"},"end_time_command_output")),(0,r.kt)("td",{parentName:"tr",align:null},"1 week and 2 minutes from now using ",(0,r.kt)("inlineCode",{parentName:"td"},"date"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"subnet_validator_start_time")),(0,r.kt)("td",{parentName:"tr",align:null},"Start time of the validation either in RFC 3339 format (",(0,r.kt)("inlineCode",{parentName:"td"},"YYYY-MM-DDTHH:MM:SSZ"),") or ",(0,r.kt)("inlineCode",{parentName:"td"},"start_time_command_output")," that will be resolved by executing ",(0,r.kt)("inlineCode",{parentName:"td"},"subnet_validator_start_time_command")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"start_time_command_output"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"subnet_validator_end_time")),(0,r.kt)("td",{parentName:"tr",align:null},"End time of the validation either in RFC 3339 format (",(0,r.kt)("inlineCode",{parentName:"td"},"YYYY-MM-DDTHH:MM:SSZ"),") or ",(0,r.kt)("inlineCode",{parentName:"td"},"end_time_command_output")," that will be resoved by executing ",(0,r.kt)("inlineCode",{parentName:"td"},"subnet_validator_end_time_command")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"end_time_command_output"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"subnet_validator_stake_or_weight")),(0,r.kt)("td",{parentName:"tr",align:null},"Default stake (for elastic Subnets) or weight (for permissioned Subnets) of validators"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"100"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"subnet_validator_delegation_fee")),(0,r.kt)("td",{parentName:"tr",align:null},"Default delegation fee in percentage."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"2"))))),(0,r.kt)("h2",{id:"inventory-requirements"},"Inventory requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"The node used to issue transactions")," has to be in the ",(0,r.kt)("inlineCode",{parentName:"li"},"subnet_txs_host")," group."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"The nodes to be added as validators")," to the Subnet have to be in the ",(0,r.kt)("inlineCode",{parentName:"li"},"subnet_validators")," group. The Ansible host has to be able to connect to those nodes via SSH.")),(0,r.kt)("h2",{id:"blockchain-configuration"},"Blockchain configuration"),(0,r.kt)("p",null,"Each blockchain in ",(0,r.kt)("inlineCode",{parentName:"p"},"subnet_blockchains_list")," is defined by a dictionary with the following keys:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name"),": Name of the blockchain"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"vm"),": Name of the VM in the collection to use for the blockchain. See ",(0,r.kt)("a",{parentName:"li",href:"/docs/toolkit/ansible-avalanche-collection/reference/roles/avalanche-node#supported-vms-and-avalanchego-compatibility"},"Supported VMs and AvalancheGo compatibility")," for the list of supported VMs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"genesis_data"),": Genesis data of the blockchain. The structure of the genesis data is different for each VM:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For the ",(0,r.kt)("inlineCode",{parentName:"li"},"subnet-evm"),":",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'config:\n  chainId: 66666\n  homesteadBlock: 0\n  eip150Block: 0\n  eip150Hash: "0x2086799aeebeae135c246c65021c82b4e15a2c451340993aacfd2751886514f0"\n  eip155Block: 0\n  eip158Block: 0\n  byzantiumBlock: 0\n  constantinopleBlock: 0\n  petersburgBlock: 0\n  istanbulBlock: 0\n  muirGlacierBlock: 0\n  subnetEVMTimestamp: 0\n  feeConfig:\n    gasLimit: 8000000\n    minBaseFee: 25000000000\n    targetGas: 15000000\n    baseFeeChangeDenominator: 36\n    minBlockGasCost: 0\n    maxBlockGasCost: 1000000\n    targetBlockRate: 2\n    blockGasCostStep: 200000\nalloc:\n  8db97C7cEcE249c2b98bDC0226Cc4C2A57BF52FC:\n    balance: "0x295BE96E64066972000000"\nnonce: "0x0"\ntimestamp: "0x0"\nextraData: "0x00"\ngasLimit: "0x7A1200"\ndifficulty: "0x0"\nmixHash: "0x0000000000000000000000000000000000000000000000000000000000000000"\ncoinbase: "0x0000000000000000000000000000000000000000"\nnumber: "0x0"\ngasUsed: "0x0"\nparentHash: "0x0000000000000000000000000000000000000000000000000000000000000000"\n')))))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To generate the genesis data for a new blockchain, you can use the Avalanche CLI wizard. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/toolkit/ash-cli/tutorials/local-subnet#create-the-subnet-evm-blockchain-configuration"},"Create the Subnet EVM blockchain configuration"),".")),(0,r.kt)("h2",{id:"validators-parameters"},"Validators parameters"),(0,r.kt)("p",null,"Each validator can have its own validation parameters. The parameters are defined by a dictionary with the following keys:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"node_id"),": ID of the node to add as validator"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"start_time"),": Start time of the validation in RFC 3339 format: ",(0,r.kt)("inlineCode",{parentName:"li"},"YYYY-MM-DDTHH:MM:SSZ")," format"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"end_time"),": End time of the validation in RFC 3339 format: ",(0,r.kt)("inlineCode",{parentName:"li"},"YYYY-MM-DDTHH:MM:SSZ")," format"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"stake_or_weight"),": Stake (for elastic Subnets) or weight (for permissioned Subnets) of the validator"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"delegation_fee"),": Delegation fee in percentage")),(0,r.kt)("p",null,"Default values are available as variables, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"subnet_validator_start_time"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'subnet_validators_params:\n  - node_id: NodeID-7Xhw2mDxuDS44j42TCB6U5579esbSt3Lg\n    start_time: "{{ subnet_validator_start_time }}"\n    end_time: "{{ subnet_validator_end_time }}"\n    stake_or_weight: 100\n    delegation_fee: 2\n')))}p.isMDXComponent=!0}}]);