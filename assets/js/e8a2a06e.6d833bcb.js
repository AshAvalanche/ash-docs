"use strict";(self.webpackChunkash_docs=self.webpackChunkash_docs||[]).push([[4519],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),h=r,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||o;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(7462),r=n(7294),o=n(6010),l=n(2466),i=n(6550),c=n(1980),s=n(7392),u=n(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[c,s]=m({queryString:n,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),b=(()=>{const e=c??p;return h({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),f(e)}),[s,f,o]),tabValues:o}}var b=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:n,selectedValue:i,selectValue:c,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=s[n].value;a!==i&&(p(t),c(a))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:h,onClick:d},l,{className:(0,o.Z)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},8986:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));n(4866),n(5162);const o={sidebar_position:11},l="Smart Contract Deployment",i={unversionedId:"toolkit/ansible-avalanche-collection/tutorials/contract-deployment",id:"toolkit/ansible-avalanche-collection/tutorials/contract-deployment",title:"Smart Contract Deployment",description:"In this section, we will deploy a smart contract to launch the ASHToken ERC20 token on an EVM Subnet deployed using the ash.avalanche Ansible collection.",source:"@site/docs/toolkit/ansible-avalanche-collection/tutorials/contract-deployment.md",sourceDirName:"toolkit/ansible-avalanche-collection/tutorials",slug:"/toolkit/ansible-avalanche-collection/tutorials/contract-deployment",permalink:"/docs/toolkit/ansible-avalanche-collection/tutorials/contract-deployment",draft:!1,editUrl:"https://github.com/AshAvalanche/ash-docs/tree/main/docs/toolkit/ansible-avalanche-collection/tutorials/contract-deployment.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"toolkitSidebar",previous:{title:"Nodes Rolling Restart",permalink:"/docs/toolkit/ansible-avalanche-collection/tutorials/nodes-rolling-restart"},next:{title:"HyperSDK devnet on AWS",permalink:"/docs/toolkit/ansible-avalanche-collection/tutorials/hypersdk-devnet-aws"}},c={},s=[{value:"Requirements",id:"requirements",level:2},{value:"Configure the environement",id:"configure-the-environement",level:2},{value:"Deploy the contract",id:"deploy-the-contract",level:2},{value:"Interact with the contract",id:"interact-with-the-contract",level:2},{value:"Using cast",id:"using-cast",level:3},{value:"Using your wallet",id:"using-your-wallet",level:3}],u={toc:s},p="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"smart-contract-deployment"},"Smart Contract Deployment"),(0,r.kt)("p",null,"In this section, we will deploy a smart contract to launch the ASHToken ERC20 token on an EVM Subnet deployed using the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-collection"},"ash.avalanche")," Ansible collection."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For this tutorial, we will use the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local"},(0,r.kt)("inlineCode",{parentName:"a"},"local"))," inventory provided by the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-getting-started"},"Ansible Avalanche Getting Started")," repository. See ",(0,r.kt)("a",{parentName:"p",href:"./local-test-network"},"Create a Local Test Network")," for details."),(0,r.kt)("p",{parentName:"admonition"},"We should also have created a Subnet and a blockchain, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/toolkit/ansible-avalanche-collection/tutorials/subnet-creation"},"Subnet Creation")," for details.")),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Foundry installed. (See ",(0,r.kt)("a",{parentName:"li",href:"https://book.getfoundry.sh/getting-started/installation"},"Install foundry"),".)")),(0,r.kt)("h2",{id:"configure-the-environement"},"Configure the environement"),(0,r.kt)("p",null,"To compile the contract, we need to clone two dependencies into the ",(0,r.kt)("inlineCode",{parentName:"p"},"ash_token/lib")," folder."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},"cd ash_token\ngit clone https://github.com/foundry-rs/forge-std lib/forge-std\ngit clone https://github.com/OpenZeppelin/openzeppelin-contracts.git lib/openzeppelin-contracts\n")),(0,r.kt)("h2",{id:"deploy-the-contract"},"Deploy the contract"),(0,r.kt)("p",null,"In order to deploy the ASH token we need to sign the transaction and to configure the RPC URL. To do so, we will use the private key of the pre-funded account (see ",(0,r.kt)("a",{parentName:"p",href:"https://ash.center/docs/toolkit/ansible-avalanche-collection/tutorials/subnet-creation#configure-the-subnet-transactions-wallet"},"configure-the-subnet-transactions-wallet"),")."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This key is CB58-encoded which is not handled by forge commands. See ",(0,r.kt)("a",{parentName:"p",href:"https://ash.center/docs/toolkit/ash-cli/tutorials/wallet-funding#show-information-about-the-wallet"},"show-information-about-the-wallet")," to retrieve the Hex-encoded version.")),(0,r.kt)("p",null,"We also need the RPC URL (see ",(0,r.kt)("a",{parentName:"p",href:"https://ash.center/docs/toolkit/ansible-avalanche-collection/tutorials/subnet-creation#connect-to-the-subnet-and-start-issuing-transactions"},"connect-to-the-subnet-and-start-issuing-transactions"),") for each command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},"export RPC_URL=http://${VALIDATOR01_IP}:9650/ext/bc/${BLOCKCHAIN_ID}/rpc\nexport EWOQ_PRIVATE_KEY=0x56289e99c94b6912bfc12adc093c9b51124f0dc54ac7a766b2bc5ccf558d8027\n")),(0,r.kt)("p",null,"Now, we can deploy our ERC20 with an initial supply of 200 tokens:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},"forge create --rpc-url $RPC_URL --private-key $EWOQ_PRIVATE_KEY src/ASHToken.sol:ASHToken --constructor-args 200000000000000000000\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenZeppelin/openzeppelin-contracts/blob/ae1bafcb48fe220257d76bfd93a237db3ebaf3df/contracts/token/ERC20/ERC20.sol#L83"},"openzepplin's ERC20 template")," is implemented with 18 decimal places, that's why we multiply 200 by 1e18.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"Compiler run successful!\n Deployer: 0x8db97C7cEcE249c2b98bDC0226Cc4C2A57BF52FC\n Deployed to: 0xa4DfF80B4a1D748BF28BC4A271eD834689Ea3407\n Transaction hash: 0xfeb4b67875c1daaf92be3cf7ffbb01fdfdbffcf81e81d4c9fd329397f492af99\n")),(0,r.kt)("h2",{id:"interact-with-the-contract"},"Interact with the contract"),(0,r.kt)("h3",{id:"using-cast"},"Using cast"),(0,r.kt)("p",null,"First we define the followings variables for convenience (Replace the contract address with the one indicated after deployment!):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="command"',title:'"command"'},"export EWOQ_ADDR=0x8db97C7cEcE249c2b98bDC0226Cc4C2A57BF52FC\nexport CONTRACT_ADDRESS=0xa4DfF80B4a1D748BF28BC4A271eD834689Ea3407\n")),(0,r.kt)("p",null,"Like ",(0,r.kt)("a",{parentName:"p",href:"https://book.getfoundry.sh/reference/forge/"},"forge"),", ",(0,r.kt)("a",{parentName:"p",href:"https://book.getfoundry.sh/reference/cast/"},"cast")," is a part of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/foundry-rs/foundry"},"foundry")," suit which allows us to interact with the contract:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="command"',title:'"command"'},'cast call $CONTRACT_ADDRESS "totalSupply()(uint256)" --rpc-url $RPC_URL\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"200000000000000000000000000000000000000 [2e38]\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="command"',title:'"command"'},'cast call $CONTRACT_ADDRESS "balanceOf(address)(uint256)" $EWOQ_ADDR --rpc-url $RPC_URL\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"200000000000000000000000000000000000000 [2e38]\n")),(0,r.kt)("h3",{id:"using-your-wallet"},"Using your wallet"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To be connected on the correct blockchain, please refer to  ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000/docs/toolkit/ansible-avalanche-collection/tutorials/subnet-creation#connect-to-the-subnet-and-start-issuing-transactions"},"connect-to-the-subnet-and-start-issuing-transactions")," section.")),(0,r.kt)("p",null,"Like every EVM-based blockchains, we can register a new token in a wallet (",(0,r.kt)("a",{parentName:"p",href:"https://core.app/"},"Core")," in our case) to interact with it. To do so, open the wallet, add a custom token and fill the contract address:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt text",src:n(214).Z,width:"2316",height:"731"})))}d.isMDXComponent=!0},214:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ash-workflow-ASHToken-Wallet-4720279efdc9e99acd04c0b55f21b24d.png"}}]);