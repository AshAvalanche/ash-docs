"use strict";(self.webpackChunkash_docs=self.webpackChunkash_docs||[]).push([[5218],{9613:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(9496);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(a),d=l,m=p["".concat(s,".").concat(d)]||p[d]||h[d]||r;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:l,o[1]=i;for(var u=2;u<r;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},238:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(9496),l=a(5924);const r={tabItem:"tabItem_qcoa"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,o),hidden:a},t)}},5414:(e,t,a)=>{a.d(t,{Z:()=>g});var n=a(7605),l=a(9496),r=a(5924),o=a(4976),i=a(3442),s=a(9250),u=a(9160),c=a(5535);function p(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:l}}=e;return{value:t,label:a,attributes:n,default:l}}))}function h(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=h(e),[o,i]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[s,u]=m({queryString:a,groupId:n}),[p,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,c.Nk)(a);return[n,(0,l.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),f=(()=>{const e=s??p;return d({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:o,selectValue:(0,l.useCallback)((e=>{if(!d({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),k(e)}),[u,k,r]),tabValues:r}}var f=a(9915);const w={tabList:"tabList_nOpa",tabItem:"tabItem_jOOI"};function v(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),h=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==i&&(p(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:o}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:h},o,{className:(0,r.Z)("tabs__item",w.tabItem,o?.className,{"tabs__item--active":i===t})}),a??t)})))}function X(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function b(e){const t=k(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",w.tabList)},l.createElement(v,(0,n.Z)({},e,t)),l.createElement(X,(0,n.Z)({},e,t)))}function g(e){const t=(0,f.Z)();return l.createElement(b,(0,n.Z)({key:String(t)},e))}},327:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=a(7605),l=(a(9496),a(9613)),r=a(5414),o=a(238);const i={sidebar_position:3},s="Wallet Funding",u={unversionedId:"toolkit/ash-cli/tutorials/wallet-funding",id:"toolkit/ash-cli/tutorials/wallet-funding",title:"Wallet Funding",description:"The Ash CLI allows to interact with wallets and issue transactions with them on the Primary Network.",source:"@site/docs/toolkit/ash-cli/tutorials/wallet-funding.md",sourceDirName:"toolkit/ash-cli/tutorials",slug:"/toolkit/ash-cli/tutorials/wallet-funding",permalink:"/docs/toolkit/ash-cli/tutorials/wallet-funding",draft:!1,editUrl:"https://github.com/AshAvalanche/ash-docs/tree/main/docs/toolkit/ash-cli/tutorials/wallet-funding.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"toolkitSidebar",previous:{title:"Custom Configuration",permalink:"/docs/toolkit/ash-cli/tutorials/custom-configuration"},next:{title:"Local Subnet Creation",permalink:"/docs/toolkit/ash-cli/tutorials/local-subnet"}},c={},p=[{value:"Configure the Ash CLI for your network",id:"configure-the-ash-cli-for-your-network",level:2},{value:"Create a new wallet",id:"create-a-new-wallet",level:2},{value:"Store and reuse the private key",id:"store-and-reuse-the-private-key",level:2},{value:"Show information about the wallet",id:"show-information-about-the-wallet",level:2},{value:"Fund the wallet",id:"fund-the-wallet",level:2},{value:"Check the wallet balance before the transfer",id:"check-the-wallet-balance-before-the-transfer",level:3},{value:"Transfer AVAX to the wallet",id:"transfer-avax-to-the-wallet",level:3},{value:"Check the wallet balance after the transfer",id:"check-the-wallet-balance-after-the-transfer",level:3},{value:"Transfer AVAX to the P-Chain",id:"transfer-avax-to-the-p-chain",level:2},{value:"Connect to the wallet with Avalanche Wallet",id:"connect-to-the-wallet-with-avalanche-wallet",level:3},{value:"Forward the Avalanche HTTP API port using socat",id:"forward-the-avalanche-http-api-port-using-socat",level:4},{value:"Add a custom network",id:"add-a-custom-network",level:4},{value:"Select the Fuji network",id:"select-the-fuji-network",level:4},{value:"Access the wallet",id:"access-the-wallet",level:4},{value:"Transfer AVAX to the P-Chain",id:"transfer-avax-to-the-p-chain-1",level:3}],h={toc:p},d="wrapper";function m(e){let{components:t,...a}=e;return(0,l.kt)(d,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"wallet-funding"},"Wallet Funding"),(0,l.kt)("p",null,"The Ash CLI allows to interact with wallets and issue transactions with them on the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.avax.network/learn/avalanche/avalanche-platform"},"Primary Network"),"."),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"The Ash CLI uses ",(0,l.kt)("strong",{parentName:"p"},"plain-text private keys")," to interact with wallets. ",(0,l.kt)("strong",{parentName:"p"},"It should never be used on the mainnet"),". If you try do so, the command will fail with: ",(0,l.kt)("inlineCode",{parentName:"p"},"AvalancheNetwork error: wallet creation is not allowed on network 'mainnet'"),"."),(0,l.kt)("p",{parentName:"admonition"},"To interact with wallets on the mainnet (e.g. to create Subnets and blockchains), you should use the ",(0,l.kt)("a",{parentName:"p",href:"https://docs.avax.network/subnets/create-a-mainnet-subnet"},"Avalanche CLI")," which is compatible with Ledger devices.")),(0,l.kt)("br",null),(0,l.kt)("p",null,"In this tutorial, we will see how to ",(0,l.kt)("strong",{parentName:"p"},"create and fund a new wallet")," on:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A local test network (see ",(0,l.kt)("a",{parentName:"li",href:"/docs/toolkit/ansible-avalanche-collection/tutorials/local-test-network"},"Local Test Network Creation")," for more information on how to deploy such an environment)."),(0,l.kt)("li",{parentName:"ul"},"The Fuji testnet.")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"See ",(0,l.kt)("a",{parentName:"p",href:"/docs/toolkit/ash-cli/installation"},"Installation")," for the Ash CLI installation instructions on your platform.")),(0,l.kt)("h2",{id:"configure-the-ash-cli-for-your-network"},"Configure the Ash CLI for your network"),(0,l.kt)("p",null,"Prior to using the CLI, we will use a configuration file and environment variables to configure it for our target Avalanche network (see ",(0,l.kt)("a",{parentName:"p",href:"/docs/toolkit/ash-cli/tutorials/custom-configuration"},"Custom Configuration")," for more information)."),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"local",label:"Local test network",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"The file ",(0,l.kt)("inlineCode",{parentName:"p"},"terraform/multipass/local-test-network.yml")," is templated by Terraform."),(0,l.kt)("p",null,"Set the ",(0,l.kt)("inlineCode",{parentName:"p"},"ASH_CONFIG")," and the ",(0,l.kt)("inlineCode",{parentName:"p"},"AVALANCHE_NETWORK")," environment variables to use this configuration:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"export ASH_CONFIG=terraform/multipass/local-test-network.yml\nexport AVALANCHE_NETWORK=local\n"))),(0,l.kt)(o.Z,{value:"fuji",label:"Fuji testnet",mdxType:"TabItem"},(0,l.kt)("p",null,"The Fuji network is already pre-configured in the Ash CLI. You just need to set the ",(0,l.kt)("inlineCode",{parentName:"p"},"AVALANCHE_NETWORK")," environment variable:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"export AVALANCHE_NETWORK=fuji\n")))),(0,l.kt)("h2",{id:"create-a-new-wallet"},"Create a new wallet"),(0,l.kt)("p",null,"Creating a wallet is actually ",(0,l.kt)("strong",{parentName:"p"},"generating a new private key"),". We can do it with the ",(0,l.kt)("inlineCode",{parentName:"p"},"wallet generate")," command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},"ash avalanche wallet generate\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"Private key (CB58): PrivateKey-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\nPrivate key (hex):  0xXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Store your private key in a safe place!")," You will need it to sign transactions."),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Wallets generated with the Ash CLI only give access to one account (one address per blockchain).")),(0,l.kt)("h2",{id:"store-and-reuse-the-private-key"},"Store and reuse the private key"),(0,l.kt)("p",null,"An acceptable solution ",(0,l.kt)("strong",{parentName:"p"},"for test environments")," is to generate a JSON file with the ",(0,l.kt)("inlineCode",{parentName:"p"},"wallet generate --json")," command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Generate a JSON file with the private key\nash avalanche wallet generate --json > ~/.config/ash/test-wallet.json\n# Secure the file so that only you can read it\nchmod 600 ~/.config/ash/test-wallet.json\n")),(0,l.kt)("p",null,"You can then easily retrieve the private key with ",(0,l.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq/"},"jq")," and leverage the ",(0,l.kt)("inlineCode",{parentName:"p"},"AVALANCHE_PRIVATE_KEY")," environment variable:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"export AVALANCHE_PRIVATE_KEY=$(jq -r '.cb58' ~/.config/ash/test-wallet.json)\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Using the ",(0,l.kt)("inlineCode",{parentName:"p"},"AVALANCHE_PRIVATE_KEY")," environment variable is the safest way to interact with wallets (as long as you keep the private key out of your shell history!).")),(0,l.kt)("h2",{id:"show-information-about-the-wallet"},"Show information about the wallet"),(0,l.kt)("p",null,"You can get the list of the wallet's addresses with the ",(0,l.kt)("inlineCode",{parentName:"p"},"wallet info")," command:"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"env var",label:"Using AVALANCHE_PRIVATE_KEY",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},"ash avalanche wallet info\n"))),(0,l.kt)(o.Z,{value:"argument",label:"Passing the private key as argument (unsafe)",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},"ash avalanche wallet info PrivateKey-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\n")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"Wallet information:\n  X-Chain address: X-local1aszv6y7ugcnhgfvd7lzv8v3fk9hytlpstcazfk\n  P-Chain address: P-local1aszv6y7ugcnhgfvd7lzv8v3fk9hytlpstcazfk\n  EVM address:     0xE8eeF4A23106f11DFf676a41Eb1A58E585546aca\n")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"The addresses will be different for you as the private key is randomly generated.",(0,l.kt)("br",{parentName:"p"}),"\n","Also, the X-Chain and P-Chain addresses are different depending on the network (Fuji, local, etc.)!")),(0,l.kt)("h2",{id:"fund-the-wallet"},"Fund the wallet"),(0,l.kt)("p",null,"Now that we have a wallet and its addresses, we can ",(0,l.kt)("strong",{parentName:"p"},"transfer some AVAX to it"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"On local Avalanche networks, we will transfer AVAX on the X-Chain from the pre-funded account (see ",(0,l.kt)("a",{parentName:"li",href:"/docs/toolkit/ansible-avalanche-collection/tutorials/local-test-network#pre-funded-account"},"Pre-funded account")," for more information)."),(0,l.kt)("li",{parentName:"ul"},"On the Fuji testnet, we will use the official ",(0,l.kt)("a",{parentName:"li",href:"https://faucet.avax.network/"},"Fuji Faucet")," to request a 2-AVAX airdrop on the C-Chain.")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"local",label:"Local test network",default:!0,mdxType:"TabItem"},(0,l.kt)("h3",{id:"check-the-wallet-balance-before-the-transfer"},"Check the wallet balance before the transfer"),(0,l.kt)("p",null,"Let's use the ",(0,l.kt)("inlineCode",{parentName:"p"},"x balance")," command to check the wallet's balance on our local network:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},"ash avalanche x balance X-local1aszv6y7ugcnhgfvd7lzv8v3fk9hytlpstcazfk\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"Balance of 'X-local1aszv6y7ugcnhgfvd7lzv8v3fk9hytlpstcazfk' on X-Chain (asset 'AVAX'):  0\n")),(0,l.kt)("h3",{id:"transfer-avax-to-the-wallet"},"Transfer AVAX to the wallet"),(0,l.kt)("p",null,"Let's use the ",(0,l.kt)("inlineCode",{parentName:"p"},"x transfer")," command to transfer 2 AVAX to our new wallet (from the pre-funded account):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},"ash avalanche x transfer 2 X-local1aszv6y7ugcnhgfvd7lzv8v3fk9hytlpstcazfk \\\n  -p PrivateKey-ewoqjP7PxY4yr3iLTpLisriqt94hdyDFNgchSxGGztUrTXtNN -w\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"Waiting for transaction to be accepted...\nTransfered 2 of asset 'AVAX' to 'X-local1aszv6y7ugcnhgfvd7lzv8v3fk9hytlpstcazfk'!\nTransaction ID: BoLhWiiwfA7b2rq7WUyNTQrZ54nRqCYVSLt6oYWKc2AX5Lmpu\n")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"We used the ",(0,l.kt)("inlineCode",{parentName:"p"},"-w")," flag to wait for the transaction to be accepted.")),(0,l.kt)("h3",{id:"check-the-wallet-balance-after-the-transfer"},"Check the wallet balance after the transfer"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},"ash avalanche x balance X-local1aszv6y7ugcnhgfvd7lzv8v3fk9hytlpstcazfk\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"Balance of 'X-local1aszv6y7ugcnhgfvd7lzv8v3fk9hytlpstcazfk' on X-Chain (asset 'AVAX'):  2\n"))),(0,l.kt)(o.Z,{value:"fuji",label:"Fuji testnet",mdxType:"TabItem"},(0,l.kt)("p",null,"Follow the official tutorial: ",(0,l.kt)("a",{parentName:"p",href:"https://docs.avax.network/quickstart/fuji-workflow#get-a-drip-from-the-fuji-faucet"},"Get a Drip from the Fuji Faucet")," and use the wallet's ",(0,l.kt)("inlineCode",{parentName:"p"},"EVM address"),"."))),(0,l.kt)("p",null,"Great! We can now use this wallet to interact with blockchains on the network."),(0,l.kt)("h2",{id:"transfer-avax-to-the-p-chain"},"Transfer AVAX to the P-Chain"),(0,l.kt)("p",null,"In order to perform Subnet-related operations (e.g. create Subnets/blockchains, add validators), we need to transfer some AVAX to the P-Chain. We will use ",(0,l.kt)("a",{parentName:"p",href:"https://wallet.avax.network/"},"Avalanche Wallet")," to do so."),(0,l.kt)("h3",{id:"connect-to-the-wallet-with-avalanche-wallet"},"Connect to the wallet with Avalanche Wallet"),(0,l.kt)("p",null,"Open a new tab in your browser and open: ",(0,l.kt)("a",{parentName:"p",href:"https://wallet.avax.network/"},"https://wallet.avax.network/")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"local",label:"Local test network",default:!0,mdxType:"TabItem"},(0,l.kt)("h4",{id:"forward-the-avalanche-http-api-port-using-socat"},"Forward the Avalanche HTTP API port using socat"),(0,l.kt)("p",null,"Modern browsers don't allow to connect to other addresses than ",(0,l.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," from the Avalanche Wallet. We will use ",(0,l.kt)("a",{parentName:"p",href:"http://www.dest-unreach.org/socat/"},"socat")," to forward the Avalanche HTTP API port of ",(0,l.kt)("inlineCode",{parentName:"p"},"validator01")," to the host:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Install socat",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# On Ubuntu\nsudo apt install socat\n# On macOS\nbrew install socat\n"))),(0,l.kt)("li",{parentName:"ol"},"Forward the port",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo socat TCP-LISTEN:9650,fork \"TCP:$(terraform -chdir=terraform/multipass output -json validators_ips | jq -r '.[0]'):9650\"\n"))),(0,l.kt)("li",{parentName:"ol"},"Keep the terminal open and go back to the browser tab.")),(0,l.kt)("h4",{id:"add-a-custom-network"},"Add a custom network"),(0,l.kt)("p",null,"On the top right corner, click on the ",(0,l.kt)("inlineCode",{parentName:"p"},"\ud83d\udfe2 Mainnet")," and then ",(0,l.kt)("inlineCode",{parentName:"p"},"Add Custom"),". Use the following values:"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Network Name"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"Ash Local Network"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"URL"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:9650"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Explorer API"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"N/A"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Explorer Site"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"N/A")),(0,l.kt)("p",null,"Then click ",(0,l.kt)("inlineCode",{parentName:"p"},"Add Network")," and select it.")),(0,l.kt)(o.Z,{value:"fuji",label:"Fuji testnet",mdxType:"TabItem"},(0,l.kt)("h4",{id:"select-the-fuji-network"},"Select the Fuji network"),(0,l.kt)("p",null,"On the top right corner, click on the ",(0,l.kt)("inlineCode",{parentName:"p"},"\ud83d\udfe2 Mainnet")," and then select ",(0,l.kt)("inlineCode",{parentName:"p"},"Fuji"),"."))),(0,l.kt)("h4",{id:"access-the-wallet"},"Access the wallet"),(0,l.kt)("p",null,"Click on ",(0,l.kt)("inlineCode",{parentName:"p"},"Access Wallet")," and select ",(0,l.kt)("inlineCode",{parentName:"p"},"Private Key"),". Paste the private key of the wallet and click ",(0,l.kt)("inlineCode",{parentName:"p"},"Access Wallet"),"."),(0,l.kt)("h3",{id:"transfer-avax-to-the-p-chain-1"},"Transfer AVAX to the P-Chain"),(0,l.kt)("p",null,"Follow the ",(0,l.kt)("a",{parentName:"p",href:"https://support.avax.network/en/collections/3439750-avalanche-wallet-wallet-avax-network"},"Avalanche Wallet FAQ")," to transfer AVAX to the P-Chain from the X-Chain or C-Chain."))}m.isMDXComponent=!0}}]);