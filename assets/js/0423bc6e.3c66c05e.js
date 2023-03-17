"use strict";(self.webpackChunkash_docs=self.webpackChunkash_docs||[]).push([[943],{9613:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>c});var n=a(9496);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},s="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,d=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),s=p(a),u=l,c=s["".concat(d,".").concat(u)]||s[u]||k[u]||r;return a?n.createElement(c,i(i({ref:e},m),{},{components:a})):n.createElement(c,i({ref:e},m))}));function c(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=u;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[s]="string"==typeof t?t:l,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7162:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(4778),l=(a(9496),a(9613));const r={sidebar_position:3},i="Modules",o={unversionedId:"tools/ansible-avalanche-collection/reference/modules",id:"tools/ansible-avalanche-collection/reference/modules",title:"Modules",description:"The collection provides the following modules:",source:"@site/docs/tools/ansible-avalanche-collection/reference/modules.md",sourceDirName:"tools/ansible-avalanche-collection/reference",slug:"/tools/ansible-avalanche-collection/reference/modules",permalink:"/docs/tools/ansible-avalanche-collection/reference/modules",draft:!1,editUrl:"https://github.com/AshAvalanche/ash-docs/tree/main/docs/tools/ansible-avalanche-collection/reference/modules.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"toolsSidebar",previous:{title:"ash.avalanche.blockchain",permalink:"/docs/tools/ansible-avalanche-collection/reference/roles/avalanche-blockchain"},next:{title:"Filters",permalink:"/docs/tools/ansible-avalanche-collection/reference/filters"}},d={},p=[{value:"ash.avalanche.tx",id:"ashavalanchetx",level:2},{value:"Supported API methods",id:"supported-api-methods",level:3},{value:"Module arguments",id:"module-arguments",level:3},{value:"JSON RPC endpoint construction",id:"json-rpc-endpoint-construction",level:3},{value:"Example playbook",id:"example-playbook",level:3},{value:"ash.avalanche.eth_call",id:"ashavalancheeth_call",level:2},{value:"Module arguments",id:"module-arguments-1",level:3},{value:"Example playbook",id:"example-playbook-1",level:3}],m={toc:p};function s(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"modules"},"Modules"),(0,l.kt)("p",null,"The collection provides the following modules:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#ashavalanchetx"},"ash.avalanche.tx")," (alias: ",(0,l.kt)("inlineCode",{parentName:"li"},"ash.avalanche.transaction"),"): submit a transaction to an Avalanche network"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#ashavalancheeth_call"},"ash.avalanche.eth_call"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"eth_call")," a smart contract's function on an EVM Avalanche network")),(0,l.kt)("h2",{id:"ashavalanchetx"},"ash.avalanche.tx"),(0,l.kt)("h3",{id:"supported-api-methods"},"Supported API methods"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.avax.network/build/avalanchego-apis/p-chain"},"Platform Chain (P-Chain) API"),": all the methods that create a transaction"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.avax.network/build/avalanchego-apis/x-chain"},"Exchange Chain (X-Chain) API"),": all the methods that create a transaction"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.avax.network/build/avalanchego-apis/c-chain"},"Contract Chain (C-Chain) API"),": only ",(0,l.kt)("strong",{parentName:"li"},"Avalanche specific methods")," (see ",(0,l.kt)("a",{parentName:"li",href:"https://docs.avax.network/build/avalanchego-apis/c-chain/#avalanche-specific-apis"},"Avalanche Specific APIs"),") that create a transaction")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," You can identify transaction methods by looking at its signature: ",(0,l.kt)("strong",{parentName:"p"},"it returns a ",(0,l.kt)("inlineCode",{parentName:"strong"},"txID")),". E.g. for the ",(0,l.kt)("inlineCode",{parentName:"p"},"avm.import")," method of the X-Chain:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},"avm.import({\n    to: string,\n    sourceChain: string,\n    username: string,\n    password: string,\n}) -> {\n    txID: string // This tells us that avm.import() creates a transaction\n}\n")),(0,l.kt)("h3",{id:"module-arguments"},"Module arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"),(0,l.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"blockchain")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"chain")),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"str")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"None")),(0,l.kt)("td",{parentName:"tr",align:null},"Blockchain to query. Can be ",(0,l.kt)("inlineCode",{parentName:"td"},"P"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"X")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"C/avax"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"method")),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"str")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"None")),(0,l.kt)("td",{parentName:"tr",align:null},"API method to call")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"username")),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"str")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"None")),(0,l.kt)("td",{parentName:"tr",align:null},"Username of the user that will pay the transaction fees (and owns addresses in case of send transaction)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"password")),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"str")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"None")),(0,l.kt)("td",{parentName:"tr",align:null},"Password of the user. It is recommended to store the password in an Ansible vault.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"params")),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"raw")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"None")),(0,l.kt)("td",{parentName:"tr",align:null},"Parameters of the method (except ",(0,l.kt)("inlineCode",{parentName:"td"},"username")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"password"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"http_host")),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"str")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'127.0.0.1'")),(0,l.kt)("td",{parentName:"tr",align:null},"IP address that exposes the JSON RPC API")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"http_port")),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"str")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"9650")),(0,l.kt)("td",{parentName:"tr",align:null},"Port that exposes the JSON RPC API")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"protocol")),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"str")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'http'")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"http")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"https"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"retry_if_unknown")),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bool")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"True")),(0,l.kt)("td",{parentName:"tr",align:null},"Retry to submit the transaction in case the transaction's status is ",(0,l.kt)("inlineCode",{parentName:"td"},"Unknown"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"max_retries")),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"int")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"5")),(0,l.kt)("td",{parentName:"tr",align:null},"Maximum number of retries in case the transaction's status is ",(0,l.kt)("inlineCode",{parentName:"td"},"Unknown"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"wait_validation")),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bool")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"False")),(0,l.kt)("td",{parentName:"tr",align:null},"Wait for the transaction to be validated by the network")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"wait_timeout")),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"int")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"300")),(0,l.kt)("td",{parentName:"tr",align:null},"Timeout when waiting for the transaction's validation")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note:")," ",(0,l.kt)("inlineCode",{parentName:"p"},"username")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"password")," are not redacted in the module output (replaced by ",(0,l.kt)("inlineCode",{parentName:"p"},"VALUE_SPECIFIED_IN_NO_LOG_PARAMETER"),")."),(0,l.kt)("h3",{id:"json-rpc-endpoint-construction"},"JSON RPC endpoint construction"),(0,l.kt)("p",null,"The JSON RPC endpoint used for the API calls is constructed as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jinja"},"{{ protocol }}://{{ http_host }}:{{ http_port }}/ext/bc/{{ blockchain }}\n")),(0,l.kt)("p",null,"Some blockchains, like the C-Chain, have multiple RPC endpoints (see ",(0,l.kt)("a",{parentName:"p",href:"https://docs.avax.network/build/avalanchego-apis/c-chain/"},"Contract Chain (C-Chain) API"),"). You have to specify the desired endpoint to use with the ",(0,l.kt)("inlineCode",{parentName:"p"},"blockchain")," argument, e.g.:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"blockchain: C/avax\n")),(0,l.kt)("h3",{id:"example-playbook"},"Example playbook"),(0,l.kt)("p",null,"The playbook ",(0,l.kt)("inlineCode",{parentName:"p"},"ash.avalanche.transfer_avax")," is provided as an example of how to use the ",(0,l.kt)("inlineCode",{parentName:"p"},"ash.avalanche.tx")," module. See ",(0,l.kt)("a",{parentName:"p",href:"/docs/tools/ansible-avalanche-collection/tutorials/avalanche-transactions"},"Avalanche Transactions")," for more."),(0,l.kt)("h2",{id:"ashavalancheeth_call"},"ash.avalanche.eth_call"),(0,l.kt)("h3",{id:"module-arguments-1"},"Module arguments"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Argument"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"),(0,l.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"rpc_url")),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"str")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"None")),(0,l.kt)("td",{parentName:"tr",align:null},"RPC endpoint to call")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"contract_addr")),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"str")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"None")),(0,l.kt)("td",{parentName:"tr",align:null},"Address of the smart contract to query (in ",(0,l.kt)("inlineCode",{parentName:"td"},"0x...")," format)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"abi")),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"str")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"None")),(0,l.kt)("td",{parentName:"tr",align:null},"JSON ABI of the smart contract. Can be retrieved from ",(0,l.kt)("a",{parentName:"td",href:"https://snowtrace.io"},"Snowtrace"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"function_sig")),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"str")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"None")),(0,l.kt)("td",{parentName:"tr",align:null},"Signature of the function to call. Looks like ",(0,l.kt)("inlineCode",{parentName:"td"},"foo(uint32,bool)"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"parameters")),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"raw")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"None")),(0,l.kt)("td",{parentName:"tr",align:null},"List of parameters of the functions.")))),(0,l.kt)("h3",{id:"example-playbook-1"},"Example playbook"),(0,l.kt)("p",null,"The playbook ",(0,l.kt)("inlineCode",{parentName:"p"},"ash.avalanche.node/ash-node")," makes use of this plugin to enrich the node configuration with on-chain data."))}s.isMDXComponent=!0}}]);