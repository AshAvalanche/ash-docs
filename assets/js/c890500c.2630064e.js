"use strict";(self.webpackChunkash_docs=self.webpackChunkash_docs||[]).push([[2350],{9613:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(9496);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(a),m=o,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,r[1]=l;for(var u=2;u<i;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7726:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=a(1163),o=(a(9496),a(9613));const i={sidebar_position:1},r="Network Exploration",l={unversionedId:"toolkit/ash-cli/tutorials/network-exploration",id:"toolkit/ash-cli/tutorials/network-exploration",title:"Network Exploration",description:"The Ash CLI is the perfect tool to explore Avalanche networks from the command line. Here are some examples of what you can do with it.",source:"@site/docs/toolkit/ash-cli/tutorials/network-exploration.md",sourceDirName:"toolkit/ash-cli/tutorials",slug:"/toolkit/ash-cli/tutorials/network-exploration",permalink:"/docs/toolkit/ash-cli/tutorials/network-exploration",draft:!1,editUrl:"https://github.com/AshAvalanche/ash-docs/tree/main/docs/toolkit/ash-cli/tutorials/network-exploration.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"toolkitSidebar",previous:{title:"Tutorials",permalink:"/docs/category/tutorials-1"},next:{title:"Custom Configuration",permalink:"/docs/toolkit/ash-cli/tutorials/custom-configuration"}},s={},u=[{value:"List available networks",id:"list-available-networks",level:2},{value:"Get information about Subnets and their blockchains and validators",id:"get-information-about-subnets-and-their-blockchains-and-validators",level:2},{value:"List Subnets",id:"list-subnets",level:3},{value:"Get detailed information about a Subnet",id:"get-detailed-information-about-a-subnet",level:3},{value:"Get detailed information about a Subnet validator",id:"get-detailed-information-about-a-subnet-validator",level:3},{value:"Filter the CLI output using jq",id:"filter-the-cli-output-using-jq",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"network-exploration"},"Network Exploration"),(0,o.kt)("p",null,"The Ash CLI is the perfect tool to explore Avalanche networks from the command line. Here are some examples of what you can do with it."),(0,o.kt)("h2",{id:"list-available-networks"},"List available networks"),(0,o.kt)("p",null,"The CLI comes with a list of networks that you can use out of the box. You can list them with the ",(0,o.kt)("inlineCode",{parentName:"p"},"network list")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ash avalanche network list\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Available Avalanche networks:\n  - 'mainnet'\n  - 'fuji'\n  - 'mainnet-ankr'\n  - 'fuji-ankr'\n  - 'mainnet-blast'\n  - 'fuji-blast'\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"mainnet")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"fuji")," networks use ",(0,o.kt)("a",{parentName:"p",href:"https://docs.avax.network/apis/avalanchego/public-api-server"},"Avalanche public API servers")," that tend to reach their rate limit quickly. If this happens you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"*-ankr")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"*-blast")," networks instead (they use ",(0,o.kt)("a",{parentName:"p",href:"https://www.ankr.com/"},"Ankr")," and ",(0,o.kt)("a",{parentName:"p",href:"https://blastapi.io/"},"Blast")," public API servers).")),(0,o.kt)("h2",{id:"get-information-about-subnets-and-their-blockchains-and-validators"},"Get information about Subnets and their blockchains and validators"),(0,o.kt)("h3",{id:"list-subnets"},"List Subnets"),(0,o.kt)("p",null,"You can get the list of Subnets and their blockchains with the ",(0,o.kt)("inlineCode",{parentName:"p"},"subnet list")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ash avalanche subnet list --network fuji\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Found 2011 Subnet(s) on 'fuji':\n------------------------------------------------------\n- 7o2ywrBRa7EerWrKTHvaE1YSKWwWrQfVtHenLiqXmvcB2FN4j:\n    Number of blockchains: 1\n    Control keys:          [\"P-fuji1ncfxrmzxfwmjtq5dyfujt42rgkgv8uxxxkdacx\"]\n    Threshold:             1\n    Blockchains:\n   - MovoEVM:\n      ID:      xPUagXQMwXQ9wmAcQFS1oKN7QQf7RkeiqVQpYWwep3utGxa7o\n      VM type:\n      RPC URL:\n[...]\n")),(0,o.kt)("h3",{id:"get-detailed-information-about-a-subnet"},"Get detailed information about a Subnet"),(0,o.kt)("p",null,"To get detailed information about a Subnet, including its list of validators, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"subnet info")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ash avalanche subnet info --network fuji --id 9m6a3Qte8FaRbLZixLhh8Ptdkemm4csNaLwQeKkENx5wskbWP\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Subnet '9m6a3Qte8FaRbLZixLhh8Ptdkemm4csNaLwQeKkENx5wskbWP':\n  Number of blockchains: 1\n  Control keys:          [\"P-fuji1n3f5zmv6md96glq9sevnzmmtur5ugvfaghj3jh\"]\n  Threshold:             1\n  Blockchains:\n  - main:\n     ID:      XuEPnCE59rtutASDPCDeYw8geQaGWwteWjkDXYLWvssfuirde\n     VM type:\n     RPC URL:\n  Validators:\n  - NodeID-FkbkPTVMLbZZJKFHYUKZTt1Z3quNUurV\n  [...]\n")),(0,o.kt)("h3",{id:"get-detailed-information-about-a-subnet-validator"},"Get detailed information about a Subnet validator"),(0,o.kt)("p",null,"To get detailed information about one Subnet validator, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"validator info")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ash avalanche validator info --network fuji --id NodeID-FkbkPTVMLbZZJKFHYUKZTt1Z3quNUurV --subnet-id 9m6a3Qte8FaRbLZixLhh8Ptdkemm4csNaLwQeKkENx5wskbWP\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Validator 'NodeID-54RagM4VF5VNeKWoVV5UNHJfM6ccHtBob' on Subnet '9m6a3Qte8FaRbLZixLhh8Ptdkemm4csNaLwQeKkENx5wskbWP':\n  Tx ID:            6qQdasWo9xyQ1kctTd1AGzdbrrL1HkSriSR7aCap51qivH1GU\n  Start time:       1672859120\n  End time:         1688481650\n  Stake amount:     1000\n  Weight:           1000\n  Potential reward: 0\n  Delegation fee:   0\n  Connected:        false\n  Uptime:           0\n  [...]\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Some information is not available for validators on permissioned Subnets (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"Potential reward"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Connected"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Uptime"),").")),(0,o.kt)("h2",{id:"filter-the-cli-output-using-jq"},"Filter the CLI output using jq"),(0,o.kt)("p",null,"All commands of the Ash CLI can output JSON data. Combined with ",(0,o.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq/"},"jq"),", this makes a very powerful tool to get any information you need about Avalanche networks."),(0,o.kt)("p",null,"For example, get the IDs of all the Subnets that have at least one blockchain on the mainnet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ash avalanche subnet list --json | jq -r '.[] | select((.blockchains | length) > 0) | .id'\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yDxaSh2hoVxQKRHmacV1xFpuSgHf6Q6cCMu4v3GoLQnqQWk6L\nD3YwWGVE7MxBkiHq6s9Qkd978QyCBDxAMcJeBqsEyVRZf4XGh\n[...]\n2ibTg9ruyJRQf4NpRbkd1Utcfayo3gRRpkoWGCWNC3oXTZoYCe\n11111111111111111111111111111111LpoYY\n")))}d.isMDXComponent=!0}}]);