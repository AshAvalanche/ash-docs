"use strict";(self.webpackChunkash_docs=self.webpackChunkash_docs||[]).push([[594],{9613:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>k});var n=a(9496);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},h=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),u=p(a),c=o,k=u["".concat(i,".").concat(c)]||u[c]||d[c]||r;return a?n.createElement(k,s(s({ref:t},h),{},{components:a})):n.createElement(k,s({ref:t},h))}));function k(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:o,s[1]=l;for(var p=2;p<r;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2423:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(4778),o=(a(9496),a(9613));const r={sidebar_position:1},s="Ash Whitepaper",l={unversionedId:"whitepaper/index",id:"whitepaper/index",title:"Ash Whitepaper",description:"| Version | Date       | Authors                                                                                                                   | Description    |",source:"@site/docs/whitepaper/index.md",sourceDirName:"whitepaper",slug:"/whitepaper/",permalink:"/docs/whitepaper/",draft:!1,editUrl:"https://github.com/AshAvalanche/ash-docs/tree/main/packages/create-docusaurus/templates/shared/docs/whitepaper/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"whitepaperSidebar"},i={},p=[{value:"Abstract",id:"abstract",level:2},{value:"Context",id:"context",level:2},{value:"Problematic",id:"problematic",level:2},{value:"Financial entry cost",id:"financial-entry-cost",level:3},{value:"For Subnet owners",id:"for-subnet-owners",level:4},{value:"For node operators",id:"for-node-operators",level:4},{value:"Technical entry cost",id:"technical-entry-cost",level:3},{value:"For Subnet owners and node operators",id:"for-subnet-owners-and-node-operators",level:4},{value:"Subnet ecosystem accessibility",id:"subnet-ecosystem-accessibility",level:3},{value:"For retail users",id:"for-retail-users",level:4},{value:"Goals",id:"goals",level:2},{value:"Ash Demographics",id:"ash-demographics",level:2},{value:"Ash for Subnet owners",id:"ash-for-subnet-owners",level:3},{value:"Validation renting",id:"validation-renting",level:4},{value:"Voted validation",id:"voted-validation",level:4},{value:"Ash for retail users",id:"ash-for-retail-users",level:3},{value:"AVAX",id:"avax",level:4},{value:"ASH",id:"ash",level:4},{value:"Native Subnets tokens",id:"native-subnets-tokens",level:4},{value:"Ash for node operators",id:"ash-for-node-operators",level:3},{value:"Technical Details",id:"technical-details",level:2},{value:"Overall Architecture",id:"overall-architecture",level:3},{value:"Ash nodes",id:"ash-nodes",level:4},{value:"Ash contracts",id:"ash-contracts",level:4},{value:"Ash API",id:"ash-api",level:4},{value:"Ash web app",id:"ash-web-app",level:4},{value:"Ash Subnet",id:"ash-subnet",level:4},{value:"Ansible Avalanche Collection",id:"ansible-avalanche-collection",level:3},{value:"Extra services",id:"extra-services",level:3},{value:"Node monitoring",id:"node-monitoring",level:4},{value:"DNS / Load Balancers",id:"dns--load-balancers",level:4},{value:"Protocol Evolution Towards Decentralization",id:"protocol-evolution-towards-decentralization",level:3},{value:"Liquid Staking (V2)",id:"liquid-staking-v2",level:4},{value:"DAO (V2)",id:"dao-v2",level:4},{value:"Third-party node operators (V3)",id:"third-party-node-operators-v3",level:4},{value:"Tokenomics",id:"tokenomics",level:2},{value:"ashAVAX Token",id:"ashavax-token",level:3},{value:"ASH Token",id:"ash-token",level:3},{value:"Glossary",id:"glossary",level:3}],h={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ash-whitepaper"},"Ash Whitepaper"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Version"),(0,o.kt)("th",{parentName:"tr",align:null},"Date"),(0,o.kt)("th",{parentName:"tr",align:null},"Authors"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"1.0"),(0,o.kt)("td",{parentName:"tr",align:null},"25/02/2023"),(0,o.kt)("td",{parentName:"tr",align:null},"Gauthier Leonard - ",(0,o.kt)("a",{parentName:"td",href:"mailto:gauthier@e36knots.com"},"gauthier@e36knots.com"),(0,o.kt)("br",null),"Antoine Laborde - ",(0,o.kt)("a",{parentName:"td",href:"mailto:antoine@e36knots.com"},"antoine@e36knots.com"),(0,o.kt)("br",null),"L\xe9o Schoukroun - ",(0,o.kt)("a",{parentName:"td",href:"mailto:leo@e36knots.com"},"leo@e36knots.com")),(0,o.kt)("td",{parentName:"tr",align:null},"Public release")))),(0,o.kt)("h2",{id:"abstract"},"Abstract"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Ash is a ",(0,o.kt)("strong",{parentName:"em"},"decentralized Validator as a Service (VaaS) protocol")," that makes ",(0,o.kt)("strong",{parentName:"em"},"Avalanche Subnets",(0,o.kt)("sup",null," ",(0,o.kt)("a",{parentName:"strong",href:"#glossary"},"1")))," more accessible and decentralized."),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("em",{parentName:"p"},"The Ash protocol operates Avalanche nodes",(0,o.kt)("sup",null," ",(0,o.kt)("a",{parentName:"em",href:"#glossary"},"3")),", validates Avalanche Subnets, and gives retail users easy access to the Subnets ecosystem.")),(0,o.kt)("h2",{id:"context"},"Context"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://avax.network"},"Avalanche")," allows any user to launch and operate its own blockchain network, with a customizable set of rules, through its ",(0,o.kt)("strong",{parentName:"p"},"scaling solution called \u201cSubnets\u201d",(0,o.kt)("sup",null," ",(0,o.kt)("a",{parentName:"strong",href:"#glossary"},"1"))),"."),(0,o.kt)("p",null,"Each Subnet is independent and can ",(0,o.kt)("strong",{parentName:"p"},"scale infinitely")," as it is not constrained by network resources and competition with other apps."),(0,o.kt)("p",null,"Use cases for Subnets range from ",(0,o.kt)("strong",{parentName:"p"},"Web3 gaming")," (",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/@PlayCrabada/introducing-crabadas-subnet-on-the-avalanche-network-18cb310ddb8c"},"Crabada"),", ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/defi-kingdoms-official/defi-kingdoms-announces-defi-kingdoms-blockchain-2d51333b1e4e"},"DeFi Kingdoms"),") to ",(0,o.kt)("strong",{parentName:"p"},"institutions")," (",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/avalancheavax/deloitte-leverages-avalanche-to-improve-recoveries-from-natural-disasters-and-public-health-4fa3fd3644bf"},"Deloitte"),", ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/avalancheavax/intain-launches-avalanche-subnet-to-usher-in-new-era-for-multi-trillion-dollar-securitized-877c7cc1031f"},"Intain"),")."),(0,o.kt)("p",null,"We believe that Subnets currently have some ",(0,o.kt)("strong",{parentName:"p"},"obstacles preventing wide adoption"),". Ash aims at reducing those."),(0,o.kt)("h2",{id:"problematic"},"Problematic"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"entry costs")," (financial and technical) to the Subnet ecosystem are very high ",(0,o.kt)("strong",{parentName:"p"},"for all the participants"),": Subnet owners",(0,o.kt)("sup",null," ",(0,o.kt)("a",{parentName:"p",href:"#glossary"},"2")),", retail users that want to get involved, and node operators."),(0,o.kt)("h3",{id:"financial-entry-cost"},"Financial entry cost"),(0,o.kt)("p",null,"Running a validator node",(0,o.kt)("sup",null," ",(0,o.kt)("a",{parentName:"p",href:"#glossary"},"4"))," on the Avalanche Mainnet requires staking 2,000 AVAX."),(0,o.kt)("h4",{id:"for-subnet-owners"},"For Subnet owners"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For stability reasons our recommendation is to have ",(0,o.kt)("strong",{parentName:"p"},"at least")," 5 full validators on your Subnet. - ",(0,o.kt)("a",{parentName:"p",href:"https://docs.avax.network/subnets/deploying-subnets-on-prod#number-of-validators"},"Avalanche documentation"))),(0,o.kt)("p",null,"At $30 per AVAX, a Subnet owner needs to stake 10,000 AVAX, for a total cost $300,000, to be able run blockchains on a 5-nodes Subnet."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," This calculation does not include the hosting price for the validator nodes\u2019",(0,o.kt)("sup",null," ",(0,o.kt)("a",{parentName:"p",href:"#glossary"},"4"))," servers on cloud or on-premise infrastructure."),(0,o.kt)("h4",{id:"for-node-operators"},"For node operators"),(0,o.kt)("p",null,"In addition to the 2,000 AVAX required by the Mainnet, Subnet owners can require ",(0,o.kt)("strong",{parentName:"p"},"staking extra tokens")," to participate in their Subnets' validation. That financially limits potential node operators to ",(0,o.kt)("strong",{parentName:"p"},"companies and a few privileged individuals"),"."),(0,o.kt)("h3",{id:"technical-entry-cost"},"Technical entry cost"),(0,o.kt)("h4",{id:"for-subnet-owners-and-node-operators"},"For Subnet owners and node operators"),(0,o.kt)("p",null,"Deploying and maintaining a Subnet and Avalanche nodes",(0,o.kt)("sup",null," ",(0,o.kt)("a",{parentName:"p",href:"#glossary"},"3"))," is ",(0,o.kt)("strong",{parentName:"p"},"technically challenging")," and requires time and skills that a team may not have. The Ash team experienced it first-hand at the Avalanche Summit Hackathon where most of the technical discussions with other teams were about node/Subnet operating issues."),(0,o.kt)("h3",{id:"subnet-ecosystem-accessibility"},"Subnet ecosystem accessibility"),(0,o.kt)("h4",{id:"for-retail-users"},"For retail users"),(0,o.kt)("p",null,"To participate in Subnets validation, ",(0,o.kt)("strong",{parentName:"p"},"a user has to operate Avalanche node(s)",(0,o.kt)("sup",null," ",(0,o.kt)("a",{parentName:"strong",href:"#glossary"},"3"))),", therefore becoming a node operator and facing the same challenges."),(0,o.kt)("h2",{id:"goals"},"Goals"),(0,o.kt)("p",null,"The Ash protocol aims at making Avalanche Subnets more ",(0,o.kt)("strong",{parentName:"p"},"accessible and decentralized")," by providing a decentralized VaaS",(0,o.kt)("sup",null," ",(0,o.kt)("a",{parentName:"p",href:"#glossary"},"5"))," for Avalanche."),(0,o.kt)("p",null,"Ash gives Avalanche projects affordable access to a ",(0,o.kt)("strong",{parentName:"p"},"robust decentralized infrastructure")," to validate their Subnets. The protocol operates the validator nodes",(0,o.kt)("sup",null," ",(0,o.kt)("a",{parentName:"p",href:"#glossary"},"4")),", and developers can focus on the heart of their product."),(0,o.kt)("p",null,"Ash also allows ",(0,o.kt)("strong",{parentName:"p"},"retail users")," to get involved in the Avalanche ",(0,o.kt)("strong",{parentName:"p"},"Subnets ecosystem")," through ",(0,o.kt)("strong",{parentName:"p"},"liquid staking",(0,o.kt)("sup",null," ",(0,o.kt)("a",{parentName:"strong",href:"#glossary"},"6"))),". Stakers crowdfund new Ash validator nodes and vote to ",(0,o.kt)("strong",{parentName:"p"},"allocate the protocol validation power")," between Subnets."),(0,o.kt)("p",null,"The Ash protocol relies on ",(0,o.kt)("strong",{parentName:"p"},"third-party node operators")," to ensure the Subnets' decentralization."),(0,o.kt)("h2",{id:"ash-demographics"},"Ash Demographics"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"AshWorkflow",src:a(2455).Z,width:"957",height:"406"})),(0,o.kt)("p",null,"The Ash protocol targets 3 user groups:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Subnet owners"),(0,o.kt)("li",{parentName:"ul"},"Retail users"),(0,o.kt)("li",{parentName:"ul"},"Node operators")),(0,o.kt)("h3",{id:"ash-for-subnet-owners"},"Ash for Subnet owners"),(0,o.kt)("p",null,"Ash offers 2 validation services to Subnet owners:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Validation renting"),(0,o.kt)("li",{parentName:"ul"},"Voted validation by the protocol")),(0,o.kt)("h4",{id:"validation-renting"},"Validation renting"),(0,o.kt)("p",null,"Subnet owners can ",(0,o.kt)("strong",{parentName:"p"},"rent validation")," from Ash nodes for a ",(0,o.kt)("strong",{parentName:"p"},"fraction of the price")," needed to bootstrap a validator."),(0,o.kt)("p",null,"Instead of operating validator nodes",(0,o.kt)("sup",null," ",(0,o.kt)("a",{parentName:"p",href:"#glossary"},"4"))," themselves, Subnet owners benefit from the expertise of the Ash team."),(0,o.kt)("p",null,"The rent is paid monthly in AVAX, native tokens, or a combination of both. The protocol guarantees that Subnets are validated by a ",(0,o.kt)("strong",{parentName:"p"},"robust, up-to-date set of nodes"),"."),(0,o.kt)("p",null,"Subnet owners are freed from the burden of running their own infrastructure and can instead focus on building their projects' core."),(0,o.kt)("h4",{id:"voted-validation"},"Voted validation"),(0,o.kt)("p",null,"Liquid stakers",(0,o.kt)("sup",null," ",(0,o.kt)("a",{parentName:"p",href:"#glossary"},"6"))," can participate in the protocol's governance. The main governance component is ",(0,o.kt)("strong",{parentName:"p"},"the allocation of the protocol's validating power")," between Subnets."),(0,o.kt)("p",null,"Node operator ",(0,o.kt)("strong",{parentName:"p"},"rewards are redistributed to liquid-stakers"),". With attractive incentives, a Subnet will ",(0,o.kt)("strong",{parentName:"p"},"naturally get more decentralized")," because it will appeal to more users."),(0,o.kt)("h3",{id:"ash-for-retail-users"},"Ash for retail users"),(0,o.kt)("p",null,"Ash will feature a ",(0,o.kt)("strong",{parentName:"p"},"community pool")," in which retail users can liquid-stake",(0,o.kt)("sup",null," ",(0,o.kt)("a",{parentName:"p",href:"#glossary"},"6"))," their AVAX and Subnet native tokens. This pool is used to ",(0,o.kt)("strong",{parentName:"p"},"crowdfund new validator nodes",(0,o.kt)("sup",null," ",(0,o.kt)("a",{parentName:"strong",href:"#glossary"},"4")))," for the Ash protocol which will in turn increase the number of Subnets that can be validated."),(0,o.kt)("p",null,"The Ash pool features three type of rewards for stakers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"AVAX"),(0,o.kt)("li",{parentName:"ul"},"ASH"),(0,o.kt)("li",{parentName:"ul"},"Native tokens from the validated Subnets")),(0,o.kt)("h4",{id:"avax"},"AVAX"),(0,o.kt)("p",null,"Stakers receive AVAX from ",(0,o.kt)("strong",{parentName:"p"},"node validation rewards")," as they would by delegating their AVAX, but in a ",(0,o.kt)("strong",{parentName:"p"},"much more flexible way"),"."),(0,o.kt)("h4",{id:"ash"},"ASH"),(0,o.kt)("p",null,"Stakers receive ",(0,o.kt)("strong",{parentName:"p"},"ASH tokens")," emitted by the Ash protocol proportionally to the amount of AVAX they stake in the community pool."),(0,o.kt)("p",null,"The ASH token will be used by the stakers to vote in the ",(0,o.kt)("strong",{parentName:"p"},"Ash DAO",(0,o.kt)("sup",null," ",(0,o.kt)("a",{parentName:"strong",href:"#glossary"},"7"))),". Votes will determine which Subnets are validated by the Ash protocol and which node operators get AVAX delegation to spin up new validators."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," See ",(0,o.kt)("a",{parentName:"p",href:"#tokenomics"},"Tokenomics")," for more details on the ASH token."),(0,o.kt)("h4",{id:"native-subnets-tokens"},"Native Subnets tokens"),(0,o.kt)("p",null,"Subnet owners can ",(0,o.kt)("strong",{parentName:"p"},"incentivize the validation")," of their Subnets by providing native tokens to the Ash protocol (leveraging features of the Banff upgrade). These tokens are ",(0,o.kt)("strong",{parentName:"p"},"redistributed to the community")," pool stakers."),(0,o.kt)("h3",{id:"ash-for-node-operators"},"Ash for node operators"),(0,o.kt)("p",null,"Node operators can ",(0,o.kt)("strong",{parentName:"p"},"apply to operate Ash nodes")," and ",(0,o.kt)("strong",{parentName:"p"},"validate Subnets")," for the protocol."),(0,o.kt)("p",null,"If a node operator is elected by the DAO",(0,o.kt)("sup",null," ",(0,o.kt)("a",{parentName:"p",href:"#glossary"},"7")),", its nodes will be allowed to ",(0,o.kt)("strong",{parentName:"p"},"join the ",(0,o.kt)("a",{parentName:"strong",href:"#ash-subnet"},"Ash Subnet")),"."),(0,o.kt)("p",null,"AVAX and Subnet native tokens ",(0,o.kt)("strong",{parentName:"p"},"from the community pool")," are staked on Ash nodes. The revenues generated are redistributed to the Ash community, and ",(0,o.kt)("strong",{parentName:"p"},"node operators are rewarded"),"."),(0,o.kt)("p",null,"This key feature of the protocol provides ",(0,o.kt)("strong",{parentName:"p"},"true decentralization")," of Subnet validation."),(0,o.kt)("p",null,"Node operators can also benefit from the Ash team\u2019s DevOps expertise by leveraging open-source tools provided by the Ash team."),(0,o.kt)("h2",{id:"technical-details"},"Technical Details"),(0,o.kt)("h3",{id:"overall-architecture"},"Overall Architecture"),(0,o.kt)("p",null,"The following schema represents the target protocol architecture. All features will not be available in the first release (see ",(0,o.kt)("a",{parentName:"p",href:"#protocol-evolution-towards-decentralization"},"Protocol evolution towards decentralization"),")."),(0,o.kt)("figure",null,(0,o.kt)("p",null,(0,o.kt)("img",{alt:"AshArchi",src:a(4013).Z,width:"960",height:"720"})),(0,o.kt)("figcaption",{style:{textAlign:"center"}},"Fig.1 - Ash protocol architecture")),(0,o.kt)("h4",{id:"ash-nodes"},"Ash nodes"),(0,o.kt)("p",null,"Each Ash validator node",(0,o.kt)("sup",null," ",(0,o.kt)("a",{parentName:"p",href:"#glossary"},"4"))," offers \u201c",(0,o.kt)("strong",{parentName:"p"},"Subnet slots"),"\u201d for renting. The number of slots available on a node is determined by its hardware characteristics. A rented slot corresponds to a blockchain VM",(0,o.kt)("sup",null," ",(0,o.kt)("a",{parentName:"p",href:"#glossary"},"8"))," running on the node."),(0,o.kt)("p",null,"The Ash team will conduct large-scale benchmarking of blockchain VMs performances to determine the resources comprised within a Subnet slot."),(0,o.kt)("p",null,"Validator nodes are operated by the ",(0,o.kt)("strong",{parentName:"p"},"Ash team")," and ",(0,o.kt)("strong",{parentName:"p"},"third-party node operators")," (elected by the DAO",(0,o.kt)("sup",null," ",(0,o.kt)("a",{parentName:"p",href:"#glossary"},"7")),")."),(0,o.kt)("h4",{id:"ash-contracts"},"Ash contracts"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"All transactions")," related to Subnet slots renting, liquid staking",(0,o.kt)("sup",null," ",(0,o.kt)("a",{parentName:"p",href:"#glossary"},"6")),", and DAO votes are ",(0,o.kt)("strong",{parentName:"p"},"tracked on-chain"),".\nThe Ash protocol leverages the popularity and robustness of the Avalanche C-Chain",(0,o.kt)("sup",null," ",(0,o.kt)("a",{parentName:"p",href:"#glossary"},"9"))," to host its smart contracts. It relies on ",(0,o.kt)("strong",{parentName:"p"},"trusted smart contract standards")," for its different building blocks:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Subnet slots rentals are represented by ERC-721 NFTs"),(0,o.kt)("li",{parentName:"ul"},"The liquid staking contracts will take inspiration from industry standards like ",(0,o.kt)("a",{parentName:"li",href:"https://lido.fi"},"Lido")),(0,o.kt)("li",{parentName:"ul"},"The DAO will follow an established framework (most likely ",(0,o.kt)("a",{parentName:"li",href:"https://aragon.org/"},"Aragon"),")")),(0,o.kt)("h4",{id:"ash-api"},"Ash API"),(0,o.kt)("p",null,"The Ash API tracks all on-chain activity on both Avalanche C-Chain (renting contracts) and P-Chain",(0,o.kt)("sup",null," ",(0,o.kt)("a",{parentName:"p",href:"#glossary"},"10"))," (Subnets/blockchains operations). It exposes the ",(0,o.kt)("strong",{parentName:"p"},"current state of the protocol"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Validator nodes and Subnets status"),(0,o.kt)("li",{parentName:"ul"},"Subnet slots rentals"),(0,o.kt)("li",{parentName:"ul"},"Liquid staking pool size and DAO",(0,o.kt)("sup",null," ",(0,o.kt)("a",{parentName:"li",href:"#glossary"},"7"))," votes")),(0,o.kt)("p",null,"The API will rely on ",(0,o.kt)("strong",{parentName:"p"},"secured open-source software")," that can generate ZK proofs of the data being served (most likely ",(0,o.kt)("a",{parentName:"p",href:"https://www.apibara.com/"},"Apibara"),"). The Ash web app and Ash validator nodes rely on the API."),(0,o.kt)("h4",{id:"ash-web-app"},"Ash web app"),(0,o.kt)("figure",null,(0,o.kt)("p",null,(0,o.kt)("img",{alt:"AshWebApp",src:a(7937).Z,width:"1899",height:"957"})),(0,o.kt)("figcaption",{style:{textAlign:"center"}},"Fig.2 - Web app PoC staking dashboard")),(0,o.kt)("p",null,"The Ash web app is the ",(0,o.kt)("strong",{parentName:"p"},"main entry point")," to interact with the protocol."),(0,o.kt)("p",null,"Subnet owners use it to create, configure, validate, and monitor their Subnets/blockchains. Retail users use it to liquid-stake AVAX and Subnet native tokens, participate in DAO votes, and claim rewards. Node operators use it to manage their validator nodes."),(0,o.kt)("h4",{id:"ash-subnet"},"Ash Subnet"),(0,o.kt)("p",null,"The Ash Subnet will serve as a ",(0,o.kt)("strong",{parentName:"p"},"back-bone for the protocol"),", ensuring Ash nodes' resources monitoring, subnet slots distribution, etc."),(0,o.kt)("h3",{id:"ansible-avalanche-collection"},"Ansible Avalanche Collection"),(0,o.kt)("p",null,"Ava Labs provides tools to bring up validator nodes",(0,o.kt)("sup",null," ",(0,o.kt)("a",{parentName:"p",href:"#glossary"},"4"))," and create/manage Subnets (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ava-labs/avalanche-network-runner"},"Avalanche Network Runner"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ava-labs/avalanche-cli"},"Avalanche CLI"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ava-labs/avalanche-ops"},"Avalanche Ops"),"). Yet, at the time of writing, none of those are production-ready (according to their documentation)."),(0,o.kt)("p",null,"Relying on years of experience in DevOps best practices, the Ash team developed the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-collection"},"Ansible Avalanche Collection"),". Using ",(0,o.kt)("a",{parentName:"p",href:"https://ansible.com"},"Ansible"),", the ",(0,o.kt)("strong",{parentName:"p"},"industry standard for IT automation"),", the collection allows developers to ",(0,o.kt)("strong",{parentName:"p"},"deploy and configure")," nodes, Subnets, and blockchains to their own infrastructure, whether on bare-metal machines or virtual machine instances from ",(0,o.kt)("strong",{parentName:"p"},"any cloud provider"),"."),(0,o.kt)("p",null,"There are multiple perks to using the Ansible Avalanche Collection, including:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Reduce errors")," related to manual configurations"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Scale")," to hundreds of nodes seamlessly"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Update or rollback")," the AvalancheGo version in a transparent fashion"),(0,o.kt)("li",{parentName:"ul"},"The benefit of a production-ready configuration of AvalancheGo following the Filesystem Hierarchy Standard")),(0,o.kt)("p",null,"The Ansible Avalanche Collection is open-source and available on ",(0,o.kt)("strong",{parentName:"p"},"GitHub")," under the ",(0,o.kt)("strong",{parentName:"p"},"BSD-3 license"),". The Ash team is committed to open-source all the tools that will benefit Avalanche users and developers."),(0,o.kt)("p",null,"The Avalanche Ansible Collection is part of our solution to ",(0,o.kt)("strong",{parentName:"p"},"reduce the technical cost")," related to deploying validator nodes",(0,o.kt)("sup",null," ",(0,o.kt)("a",{parentName:"p",href:"#glossary"},"4")),", Subnets, and blockchains."),(0,o.kt)("h3",{id:"extra-services"},"Extra services"),(0,o.kt)("p",null,"Ash provides additional tools to ",(0,o.kt)("strong",{parentName:"p"},"empower Subnet owners")," with a ready-to-use Subnet experience, including monitoring and other services."),(0,o.kt)("h4",{id:"node-monitoring"},"Node monitoring"),(0,o.kt)("figure",null,(0,o.kt)("p",null,(0,o.kt)("img",{alt:"AshNodeMonitoring",src:a(1966).Z,width:"2489",height:"928"})),(0,o.kt)("figcaption",{style:{textAlign:"center"}},"Fig.3 - Node monitoring with Grafana")),(0,o.kt)("p",null,"All the validating nodes of the Ash protocols are ",(0,o.kt)("strong",{parentName:"p"},"monitored")," using Grafana and Prometheus. Subnet owners have access to comprehensive dashboards with all the metrics they need to keep track of the nodes validating their Subnets."),(0,o.kt)("p",null,"Ash can also provide additional blockchain-related metrics to Subnet owners."),(0,o.kt)("h4",{id:"dns--load-balancers"},"DNS / Load Balancers"),(0,o.kt)("p",null,"Ash will provide a unique DNS entry for Subnet owners (e.g.: ",(0,o.kt)("em",{parentName:"p"},"mysubnet.ash.center"),"). This entry will be served by multiple validators in a Load Balancing fashion. Subnet owners can focus on the heart of their project while Ash takes care of the accessibility of the Subnet."),(0,o.kt)("h3",{id:"protocol-evolution-towards-decentralization"},"Protocol Evolution Towards Decentralization"),(0,o.kt)("p",null,"Building a truly ",(0,o.kt)("strong",{parentName:"p"},"decentralized protocol")," cannot be done overnight and we believe that it is more important to start with a rather centralized but robust protocol than to rush onto a broken \u201cdecentralized\u201d protocol."),(0,o.kt)("p",null,"The first Ash release will focus on building a ",(0,o.kt)("strong",{parentName:"p"},"reliable software layer")," for validator node",(0,o.kt)("sup",null," ",(0,o.kt)("a",{parentName:"p",href:"#glossary"},"4"))," operating and offering the ",(0,o.kt)("strong",{parentName:"p"},"best possible experience")," to Subnet owners."),(0,o.kt)("p",null,"The following features will be available in the subsequent releases of the protocol."),(0,o.kt)("h4",{id:"liquid-staking-v2"},"Liquid Staking (V2)"),(0,o.kt)("p",null,"Users will stake AVAX and Subnet native tokens into the Ash community pool to be eligible for rewards: AVAX staking rewards, Subnets rewards, and ASH tokens.\nLike any liquid staking",(0,o.kt)("sup",null," ",(0,o.kt)("a",{parentName:"p",href:"#glossary"},"6"))," protocol, users will receive tokens (ashAVAX, ashTOKENX, ashTOKENY) that represent their stake and can be freely transferred, traded, or used in other DeFi protocols."),(0,o.kt)("h4",{id:"dao-v2"},"DAO (V2)"),(0,o.kt)("p",null,"The Ash DAO",(0,o.kt)("sup",null," ",(0,o.kt)("a",{parentName:"p",href:"#glossary"},"7"))," (Decentralized Autonomous Organization) will give ASH token owners the power to choose what Subnets are validated by the Ash protocol and how many nodes are validating each Subnet."),(0,o.kt)("h4",{id:"third-party-node-operators-v3"},"Third-party node operators (V3)"),(0,o.kt)("p",null,"The Ash protocol will fund third-party node operators to spin-up new validator nodes. The Ash node operators will be elected by the DAO, following a model that will take strong inspiration from the Lido protocol on Ethereum."),(0,o.kt)("h2",{id:"tokenomics"},"Tokenomics"),(0,o.kt)("h3",{id:"ashavax-token"},"ashAVAX Token"),(0,o.kt)("p",null,"ashAVAX is an ERC20 token that represents AVAX staked within the Ash protocol. Unlike staked AVAX, it is liquid, meaning that it can be transferred, traded, or used in other DeFi applications."),(0,o.kt)("p",null,"The total supply of ashAVAX reflects the amount of AVAX deposited into the protocol combined with staking rewards."),(0,o.kt)("p",null,"ashAVAX tokens are minted upon AVAX deposited in the community pool at a 1:1 ratio."),(0,o.kt)("p",null,"When AVAX are withdrawn from the community pool, ashAVAX are burned following the same 1:1 ratio."),(0,o.kt)("h3",{id:"ash-token"},"ASH Token"),(0,o.kt)("p",null,"ASH is an ERC-20 governance token that allows users to vote for the Subnets they want the Ash protocol to validate."),(0,o.kt)("p",null,"All users that are liquid-staking",(0,o.kt)("sup",null," ",(0,o.kt)("a",{parentName:"p",href:"#glossary"},"6"))," AVAX in the Ash community pool will receive ASH rewards."),(0,o.kt)("p",null,"ASH can be used to vote in the DAO for:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Choosing the Subnets validated by the Ash validator nodes",(0,o.kt)("sup",null," ",(0,o.kt)("a",{parentName:"li",href:"#glossary"},"4"))," and the number of nodes",(0,o.kt)("sup",null," ",(0,o.kt)("a",{parentName:"li",href:"#glossary"},"3"))," allocated to each Subnet"),(0,o.kt)("li",{parentName:"ul"},"Electing the node operators that will spin up new validators using AVAX from the community pool")),(0,o.kt)("p",null,"A public sale will occur after the launch of the protocol."),(0,o.kt)("h3",{id:"glossary"},"Glossary"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Subnet:")," An independent network with a customizable set of rules running on Avalanche. A Subnet hosts one or more blockchains, serving as a backend for the business logic. See ",(0,o.kt)("a",{parentName:"li",href:"https://docs.avax.network/subnets"},"Subnets Overview"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Subnet owner:")," An organization, whether public or private, that uses a dedicated Avalanche Subnet. The Subnet hosts one or more blockchains, serving as a backend for the business logic."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Avalanche node:")," A server, whether a virtual machine or a physical host, running the AvalancheGo program."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Validator node:")," An Avalanche node validates one or multiple Subnets. A minimum amount of staked tokens is required for a node to become validator of a Subnet."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"VaaS (Validator as a Service):")," A product that offers to operate blockchain validator nodes on behalf of users, while they keep the ownership of their assets."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Liquid Staking:")," Liquid staking protocols allow users to get staking rewards without locking tokens or maintaining staking infrastructure. Users of these protocols can deposit staking tokens and receive tradable liquid tokens in return. (from ",(0,o.kt)("a",{parentName:"li",href:"https://lido.fi/faq"},"Lido FAQ"),")"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"DAO:")," Decentralized Autonomous Organization. There is not a single entity controlling the organization, individuals from the community have their own decision-making power regarding their voting power."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"VM (Virtual Machine):")," A Virtual Machine (VM) defines the application-level logic of a blockchain. In technical terms, it specifies the blockchain\u2019s state, state transition function, transactions, and the API through which users can interact with the blockchain. (from ",(0,o.kt)("a",{parentName:"li",href:"https://docs.avax.network/subnets#virtual-machines"},"Avalanche Subnets docs"),")"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Avalanche C-Chain:")," The C-Chain is an implementation of the Ethereum Virtual Machine (EVM) that is part of Avalanche Primary Network. (from ",(0,o.kt)("a",{parentName:"li",href:"https://docs.avax.network/overview/getting-started/avalanche-platform#contract-chain-c-chain"},"Avalanche docs"),")"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Avalanche P-Chain:")," The P-Chain is responsible for all validator and Subnet-level operations. The P-Chain API supports the creation of new blockchains and Subnets, the addition of validators to Subnets, staking operations, and other platform-level operations. (from ",(0,o.kt)("a",{parentName:"li",href:"https://docs.avax.network/overview/getting-started/avalanche-platform#platform-chain-p-chain"},"Avalanche docs"),")")))}u.isMDXComponent=!0},4013:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ash-architecture-liquidstaking-light-9838d864d57d0da24fd3fbe8f260f8f1.svg"},1966:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ash-node-monitoring-656cda2e7f857bbb934ff70c826d5962.png"},7937:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ash-webapp-screen-staking-b17781d741d236ed284a4c30cde15014.png"},2455:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ash-workflow-circle-dark-169fef71050e82c4a71ede23e1a03074.svg"}}]);