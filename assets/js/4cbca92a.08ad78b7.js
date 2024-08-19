"use strict";(self.webpackChunkash_docs=self.webpackChunkash_docs||[]).push([[9067],{9613:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(9496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},238:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(9496),r=a(5924);const o={tabItem:"tabItem_qcoa"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:a},t)}},5414:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(7605),r=a(9496),o=a(5924),i=a(4976),l=a(3442),s=a(9250),u=a(9160),c=a(5535);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=p(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,u]=h({queryString:a,groupId:n}),[d,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),k=(()=>{const e=s??d;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{k&&l(k)}),[k]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,o]),tabValues:o}}var k=a(9915);const g={tabList:"tabList_nOpa",tabItem:"tabItem_jOOI"};function v(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==l&&(d(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},i,{className:(0,o.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":l===t})}),a??t)})))}function N(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function f(e){const t=b(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(N,(0,n.Z)({},e,t)))}function y(e){const t=(0,k.Z)();return r.createElement(f,(0,n.Z)({key:String(t)},e))}},6189:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var n=a(7605),r=(a(9496),a(9613)),o=a(5414),i=a(238);const l={sidebar_position:4},s="Local Subnet Creation",u={unversionedId:"toolkit/ash-cli/tutorials/local-subnet",id:"toolkit/ash-cli/tutorials/local-subnet",title:"Local Subnet Creation",description:"The Ash CLI allows to create Subnets and blockchains, and to add validators to Subnets (including the Primary Network).",source:"@site/docs/toolkit/ash-cli/tutorials/local-subnet.md",sourceDirName:"toolkit/ash-cli/tutorials",slug:"/toolkit/ash-cli/tutorials/local-subnet",permalink:"/docs/toolkit/ash-cli/tutorials/local-subnet",draft:!1,editUrl:"https://github.com/AshAvalanche/ash-docs/tree/main/docs/toolkit/ash-cli/tutorials/local-subnet.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"toolkitSidebar",previous:{title:"Wallet Funding",permalink:"/docs/toolkit/ash-cli/tutorials/wallet-funding"}},c={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create the Subnet",id:"create-the-subnet",level:2},{value:"Create the Subnet EVM blockchain configuration",id:"create-the-subnet-evm-blockchain-configuration",level:2},{value:"Create the Subnet EVM blockchain",id:"create-the-subnet-evm-blockchain",level:2},{value:"Encode the genesis data",id:"encode-the-genesis-data",level:3},{value:"Submit the blockchain creation transaction",id:"submit-the-blockchain-creation-transaction",level:3},{value:"Add validators to the Subnet",id:"add-validators-to-the-subnet",level:2},{value:"Get validator IDs",id:"get-validator-ids",level:3},{value:"Submit the validator add transactions",id:"submit-the-validator-add-transactions",level:3},{value:"Check the Subnet validators",id:"check-the-subnet-validators",level:2},{value:"Connect to the Subnet and start issuing transactions",id:"connect-to-the-subnet-and-start-issuing-transactions",level:2}],p={toc:d},m="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"local-subnet-creation"},"Local Subnet Creation"),(0,r.kt)("p",null,"The Ash CLI allows to ",(0,r.kt)("strong",{parentName:"p"},"create Subnets and blockchains"),", and to ",(0,r.kt)("strong",{parentName:"p"},"add validators")," to Subnets (including the Primary Network)."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The Ash CLI uses ",(0,r.kt)("strong",{parentName:"p"},"plain-text private keys")," to interact with wallets. ",(0,r.kt)("strong",{parentName:"p"},"It should never be used on the mainnet"),". If you try do so, the command will fail with: ",(0,r.kt)("inlineCode",{parentName:"p"},"AvalancheNetwork error: wallet creation is not allowed on network 'mainnet'"),"."),(0,r.kt)("p",{parentName:"admonition"},"To interact with wallets on the mainnet (e.g. to create Subnets and blockchains), you should use the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.avax.network/subnets/deploy-a-subnet/avalanche-mainnet"},"Avalanche CLI")," which is compatible with Ledger devices.")),(0,r.kt)("br",null),(0,r.kt)("p",null,"In this tutorial, we will see how to create ",(0,r.kt)("strong",{parentName:"p"},"a new Subnet with a Subnet EVM blockchain")," on a local test network (see ",(0,r.kt)("a",{parentName:"p",href:"/docs/toolkit/ansible-avalanche-collection/tutorials/local-test-network"},"Local Test Network Creation")," for more information on how to deploy such an environment)."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"A deployed local network"),". You can use:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"Ansible Avalanche Collection"),". See ",(0,r.kt)("a",{parentName:"li",href:"/docs/toolkit/ansible-avalanche-collection/tutorials/local-test-network"},"Local Test Network Creation"),"."),(0,r.kt)("li",{parentName:"ul"},"Or the ",(0,r.kt)("strong",{parentName:"li"},"Avalanche Network Runner")," via Avalanche CLI: ",(0,r.kt)("inlineCode",{parentName:"li"},"avalanche network start")))),(0,r.kt)("li",{parentName:"ul"},"A wallet with ",(0,r.kt)("strong",{parentName:"li"},"some AVAX on the P-Chain"),". See ",(0,r.kt)("a",{parentName:"li",href:"/docs/toolkit/ash-cli/tutorials/wallet-funding"},"Wallet Funding"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Ash CLI installed and configured")," for your network. See ",(0,r.kt)("a",{parentName:"li",href:"/docs/toolkit/ash-cli/installation"},"Installation")," and ",(0,r.kt)("a",{parentName:"li",href:"/docs/toolkit/ash-cli/tutorials/wallet-funding#configure-the-ash-cli-for-your-network"},"Configure the Ash CLI for your network"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Avalanche CLI installed"),". We use it to create the Subnet EVM genesis configuration using a nice wizard. See ",(0,r.kt)("a",{parentName:"li",href:"https://docs.avax.network/tooling/guides/get-avalanche-cli"},"Install Avalanche CLI"),".")),(0,r.kt)("h2",{id:"create-the-subnet"},"Create the Subnet"),(0,r.kt)("p",null,"We use the ",(0,r.kt)("inlineCode",{parentName:"p"},"subnet create")," command to create a new Subnet:"),(0,r.kt)(o.Z,{groupId:"pkey-arg",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"env var",label:"Using AVALANCHE_PRIVATE_KEY",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},"ash avalanche subnet create -w\n"))),(0,r.kt)(i.Z,{value:"argument",label:"Passing the private key as argument (unsafe)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},"ash avalanche subnet create -w -p PrivateKey-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"Waiting for transaction to be accepted...\nSubnet created! (Tx ID: 'GQE4XUWgCR8ZryvhNdaCoyqVi25YNyh2nxyAjyCB3jXFL6gbk')\nSubnet 'GQE4XUWgCR8ZryvhNdaCoyqVi25YNyh2nxyAjyCB3jXFL6gbk':\n  Type: Permissioned\n  Control keys: [\"P-local18jma8ppw3nhx5r4ap8clazz0dps7rv5u00z96u\"]\n  Threshold:    1\n  Blockchains list (0): []\n  Validators list (0): []\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"We used the ",(0,r.kt)("inlineCode",{parentName:"p"},"-w")," flag to wait for the transaction to be accepted.")),(0,r.kt)("h2",{id:"create-the-subnet-evm-blockchain-configuration"},"Create the Subnet EVM blockchain configuration"),(0,r.kt)("p",null,"Avalanche CLI provides an awesome wizard to create the Subnet EVM blockchain genesis configuration. Follow the official tutorial: ",(0,r.kt)("a",{parentName:"p",href:"https://docs.avax.network/subnets/build-first-subnet#create-your-subnet-configuration"},"Create Your Subnet Configuration"),"."),(0,r.kt)("p",null,"This will create a ",(0,r.kt)("inlineCode",{parentName:"p"},"genesis.json")," file at ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.avalanche-cli/subnets/$YOUR_SUBNET")," where ",(0,r.kt)("inlineCode",{parentName:"p"},"$YOUR_SUBNET")," is the name you chose for your Subnet (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"testSubnetEVM"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},"cat ~/.avalanche-cli/subnets/testSubnetEVM/genesis.json\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Output"',title:'"Output"'},'{\n  "config": {\n    "chainId": 11111,\n    "feeConfig": {\n      [...]\n    }\n  }\n}\n')),(0,r.kt)("h2",{id:"create-the-subnet-evm-blockchain"},"Create the Subnet EVM blockchain"),(0,r.kt)("h3",{id:"encode-the-genesis-data"},"Encode the genesis data"),(0,r.kt)("p",null,"At blockchain creation, we need to provide the byte-encoded genesis data. We use the ",(0,r.kt)("inlineCode",{parentName:"p"},"vm encode-genesis")," command and store the output to a temporary JSON file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Commands"',title:'"Commands"'},"# Encode the genesis data\nash avalanche vm encode-genesis \\\n  ~/.avalanche-cli/subnets/testSubnetEVM/genesis.json --json > /tmp/encoded-genesis.json\n\n# Display the encoded genesis data\ncat /tmp/encoded-genesis.json\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Output"',title:'"Output"'},'{ "genesisBytes": "0x7b22636f6e666967223a..." }\n')),(0,r.kt)("h3",{id:"submit-the-blockchain-creation-transaction"},"Submit the blockchain creation transaction"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"blockchain create")," command to create the Subnet EVM blockchain in the Subnet we created earlier:"),(0,r.kt)(o.Z,{groupId:"pkey-arg",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"env var",label:"Using AVALANCHE_PRIVATE_KEY",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},"ash avalanche blockchain create testSubnetEVM \\\n  --subnet-id GQE4XUWgCR8ZryvhNdaCoyqVi25YNyh2nxyAjyCB3jXFL6gbk \\\n  --vm-type SubnetEVM \\\n  --vm-id srEXiWaHuhNyGwPUi444Tu47ZEDwxTWrbQiuD7FmgSAQ6X7Dy \\\n  --genesis-file /tmp/encoded-genesis.json -w\n"))),(0,r.kt)(i.Z,{value:"argument",label:"Passing the private key as argument (unsafe)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},"ash avalanche blockchain create testSubnetEVM \\\n  -p PrivateKey-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX \\\n  --subnet-id GQE4XUWgCR8ZryvhNdaCoyqVi25YNyh2nxyAjyCB3jXFL6gbk \\\n  --vm-type SubnetEVM \\\n  --vm-id srEXiWaHuhNyGwPUi444Tu47ZEDwxTWrbQiuD7FmgSAQ6X7Dy \\\n  --genesis-file /tmp/encoded-genesis.json -w\n")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"Waiting for transaction to be accepted...\nBlockchain created! (Tx ID: 'i2ZXw8NbVFxUK3kMjpwPtF2T3mtyoc6VWuH41rMfbc1NWE1Pb')\nBlockchain 'testSubnetEVM':\n  ID:      i2ZXw8NbVFxUK3kMjpwPtF2T3mtyoc6VWuH41rMfbc1NWE1Pb\n  VM ID:   srEXiWaHuhNyGwPUi444Tu47ZEDwxTWrbQiuD7FmgSAQ6X7Dy\n  VM type: SubnetEVM\n")),(0,r.kt)("h2",{id:"add-validators-to-the-subnet"},"Add validators to the Subnet"),(0,r.kt)("p",null,"Our Subnet has been created but we still need to add some validators to it."),(0,r.kt)("h3",{id:"get-validator-ids"},"Get validator IDs"),(0,r.kt)("p",null,"First, we need to get the validator IDs of the validators we want to add to the Subnet. We can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"subnet info")," command to get the list of validators on the Primary Network:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},"ash avalanche subnet info 11111111111111111111111111111111LpoYY\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"Subnet '11111111111111111111111111111111LpoYY':\n  Type: PrimaryNetwork\n  Blockchains list (3): [...]\n  Validators list (5):\n  - NodeID-P7oB2McjBGgW2NXXWVYjV8JEDFoW9xDE5\n  - NodeID-GWPcbFJZFfZreETSoWjPimr846mXEKCtu\n  - NodeID-NFBbbJ4qCmNaCzeW7sxErhvWqvEQMnYcN\n  - NodeID-MFrZFVCXPv5iCn6M9K6XduxGTYp891xXZ\n  - NodeID-7Xhw2mDxuDS44j42TCB6U5579esbSt3Lg\n")),(0,r.kt)("h3",{id:"submit-the-validator-add-transactions"},"Submit the validator add transactions"),(0,r.kt)("p",null,"Let's add a first validator with a weight of ",(0,r.kt)("inlineCode",{parentName:"p"},"100")," to the Subnet using the ",(0,r.kt)("inlineCode",{parentName:"p"},"validator add")," command. It takes a lot of arguments:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},"#                           | Node ID of the validator to add        | Validator weight\nash avalanche validator add NodeID-P7oB2McjBGgW2NXXWVYjV8JEDFoW9xDE5 100 \\\n  --subnet-id GQE4XUWgCR8ZryvhNdaCoyqVi25YNyh2nxyAjyCB3jXFL6gbk \\\n  --start-time \"$(date -d '2 minutes' --rfc-3339=seconds | sed 's/ /T/')\" \\\n  --end-time \"$(date -d '2 days' --rfc-3339=seconds | sed 's/ /T/')\"\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"Initiated validator addition to Subnet! (Tx ID: 'NodeID-P7oB2McjBGgW2NXXWVYjV8JEDFoW9xDE5')\nValidator 'NodeID-P7oB2McjBGgW2NXXWVYjV8JEDFoW9xDE5' on Subnet 'GQE4XUWgCR8ZryvhNdaCoyqVi25YNyh2nxyAjyCB3jXFL6gbk':\nTx ID:            UcreXaaf5nt9Chy3nXSvJEAKHW9eqCQSjWB21KLxFBiUzuQvM\nStart time:       2023-05-29 16:29:12\nEnd time:         2023-05-31 16:27:12\nWeight:           100\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"start-time")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"end-time")," arguments should follow the RFC 3339 format: ",(0,r.kt)("inlineCode",{parentName:"p"},"YYYY-MM-DDTHH:MM:SSZ"),". You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"date")," command as above to generate them.")),(0,r.kt)("p",null,"In this example validation period will start 2 minutes after the transaction is accepted and will end 2 days after."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See ",(0,r.kt)("a",{parentName:"p",href:"https://docs.avax.network/api-reference/p-chain/api#platformgetcurrentvalidators"},"platform.getCurrentValidators")," for more information about ",(0,r.kt)("strong",{parentName:"p"},"the weight parameter"),".")),(0,r.kt)("p",null,"We can now ",(0,r.kt)("strong",{parentName:"p"},"repeat the process")," for the 4 other validators."),(0,r.kt)("h2",{id:"check-the-subnet-validators"},"Check the Subnet validators"),(0,r.kt)("p",null,"After 2 minutes, we can check the validators list of the Subnet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},"ash avalanche subnet info GQE4XUWgCR8ZryvhNdaCoyqVi25YNyh2nxyAjyCB3jXFL6gbk\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"Subnet 'GQE4XUWgCR8ZryvhNdaCoyqVi25YNyh2nxyAjyCB3jXFL6gbk':\n  Type: Subnet\n  Blockchains list (1):\n  - testSubnetEVM:\n      ID:      i2ZXw8NbVFxUK3kMjpwPtF2T3mtyoc6VWuH41rMfbc1NWE1Pb\n      VM ID:   srEXiWaHuhNyGwPUi444Tu47ZEDwxTWrbQiuD7FmgSAQ6X7Dy\n      VM type: SubnetEVM\n  Validators list (5):\n  - NodeID-P7oB2McjBGgW2NXXWVYjV8JEDFoW9xDE5\n  - NodeID-GWPcbFJZFfZreETSoWjPimr846mXEKCtu\n  - NodeID-NFBbbJ4qCmNaCzeW7sxErhvWqvEQMnYcN\n  - NodeID-MFrZFVCXPv5iCn6M9K6XduxGTYp891xXZ\n  - NodeID-7Xhw2mDxuDS44j42TCB6U5579esbSt3Lg\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--extended")," flag to get more information about the validators, notably their weight and the start/end time of their validation period.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Don't forget that the validator nodes should be ",(0,r.kt)("strong",{parentName:"p"},"configured to track the Subnet"),", otherwise you will not be able to issue transactions. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/toolkit/ansible-avalanche-collection/tutorials/subnet-creation#track-the-subnet-with-the-validators"},"Track the Subnet with the validators"),".")),(0,r.kt)("h2",{id:"connect-to-the-subnet-and-start-issuing-transactions"},"Connect to the Subnet and start issuing transactions"),(0,r.kt)("p",null,"The Subnet is now ready to be used! You can connect any EVM-compatible wallet (e.g. ",(0,r.kt)("a",{parentName:"p",href:"https://metamask.io/"},"MetaMask"),", ",(0,r.kt)("a",{parentName:"p",href:"https://core.app"},"Core"),", ",(0,r.kt)("a",{parentName:"p",href:"https://frame.sh"},"Frame"),", etc.) to it and start issuing transactions, deploying smart contracts, etc."),(0,r.kt)("p",null,"Use the following settings to connect to the Subnet:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"ansible",label:"Local Ash network",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Network name"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"testSubnetEVM"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"New RPC URL"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"https://192.168.60.11:9650/ext/bc/${YOUR_BLOCKCHAIN_ID}/rpc"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Chain ID"),": The one entered during ",(0,r.kt)("inlineCode",{parentName:"p"},"avalanche subnet create"),". Can be found via ",(0,r.kt)("inlineCode",{parentName:"p"},"avalanche subnet describe testSubnetEVM"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Symbol"),": Whatever you want to name your token",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Explorer URL"),": NA")),(0,r.kt)(i.Z,{value:"avalanche-cli",label:"Avalanche Network Runner",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Network name"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"testSubnetEVM"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"New RPC URL"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"https://127.0.0.1:9650/ext/bc/${YOUR_BLOCKCHAIN_ID}/rpc"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Chain ID"),": The one entered during ",(0,r.kt)("inlineCode",{parentName:"p"},"avalanche subnet create"),". Can be found via ",(0,r.kt)("inlineCode",{parentName:"p"},"avalanche subnet describe testSubnetEVM"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Symbol"),": Whatever you want to name your token",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Explorer URL"),": NA"))))}h.isMDXComponent=!0}}]);