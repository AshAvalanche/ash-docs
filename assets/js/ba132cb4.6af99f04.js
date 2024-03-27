"use strict";(self.webpackChunkash_docs=self.webpackChunkash_docs||[]).push([[8246],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),u=o,h=p["".concat(i,".").concat(u)]||p[u]||m[u]||r;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:o,l[1]=s;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2097:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:4},l="2. Node ID / BLS keys Secrets Generation",s={unversionedId:"console/guides/local-network/node-ids",id:"console/guides/local-network/node-ids",title:"2. Node ID / BLS keys Secrets Generation",description:"The Ash Console is currently in alpha and not production-ready. It is under active development and subject to breaking changes.",source:"@site/docs/console/guides/local-network/node-ids.md",sourceDirName:"console/guides/local-network",slug:"/console/guides/local-network/node-ids",permalink:"/docs/console/guides/local-network/node-ids",draft:!1,editUrl:"https://github.com/AshAvalanche/ash-docs/tree/main/docs/console/guides/local-network/node-ids.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"consoleSidebar",previous:{title:"1. Cloud Credentials Setup",permalink:"/docs/console/guides/local-network/cloud-credentials"},next:{title:"3. Project and Cloud Region Creation",permalink:"/docs/console/guides/local-network/project-region"}},i={},c=[{value:"Fetch the node IDs blueprint",id:"fetch-the-node-ids-blueprint",level:2},{value:"Create the node ID secrets",id:"create-the-node-id-secrets",level:2}],d={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"2-node-id--bls-keys-secrets-generation"},"2. Node ID / BLS keys Secrets Generation"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The Ash Console is currently in alpha and ",(0,o.kt)("strong",{parentName:"p"},"not production-ready"),". It is under active development and subject to breaking changes.")),(0,o.kt)("p",null,"The Ash Console ",(0,o.kt)("strong",{parentName:"p"},"decorelates the node ID from Avalanche nodes"),", so that you can have a better control over your validator nodes' lifecycle."),(0,o.kt)("p",null,"Node IDs are stored as ",(0,o.kt)("a",{parentName:"p",href:"/docs/console/glossary#secret"},"secrets")," in the Console."),(0,o.kt)("p",null,"In this part of the guide, we will create ",(0,o.kt)("strong",{parentName:"p"},"5 node ID secrets")," for the 5 nodes of our Avalanche devnet."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The Node ID secrets need to match the hardcoded Node IDs in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ava-labs/avalanchego/blob/master/genesis/genesis_local.json#L47"},(0,o.kt)("inlineCode",{parentName:"a"},"genesis_local.json"))," file of the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ava-labs/avalanchego"},"AvalancheGo")," codebase.")),(0,o.kt)("h2",{id:"fetch-the-node-ids-blueprint"},"Fetch the node IDs blueprint"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Learn more about blueprints in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/console/reference/blueprints"},"Console Blueprints")," reference.")),(0,o.kt)("p",null,"We will use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ash-rs/blob/main/crates/ash_cli/examples/console/blueprint/local-node-ids.yml"},"local-node-ids.yml")," blueprint to create the node ID secrets for the 5 nodes of our Avalanche devnet."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If not already done, create a folder for this guide and navigate to it:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p ash-console-guides/devnet-network\ncd ash-console-guides/devnet-network\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Fetch the blueprint from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ash-rs/blob/main/crates/ash_cli/examples/console/blueprint/local-node-ids.yml"},(0,o.kt)("inlineCode",{parentName:"a"},"ash-rs"))," repository:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sSL https://raw.githubusercontent.com/AshAvalanche/ash-rs/ash-console-alpha/crates/ash_cli/examples/console/blueprint/local-node-ids.yml -o local-node-ids.yml\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Take a look at the blueprint. You will see that it defines 5 secrets of type ",(0,o.kt)("inlineCode",{parentName:"p"},"nodeId")," with their TLS keys and certificates:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},"cat local-node-ids.yml\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Output"',title:'"Output"'},"secrets:\n  - name: local-node-id-01\n    secretType: nodeId\n    nodeId: NodeID-7Xhw2mDxuDS44j42TCB6U5579esbSt3Lg\n    nodeCert: LS0tLS...\n    nodeKey: LS0tLS...\n    nodeBlsKey: U2fcxy...\n  # ...\n")))),(0,o.kt)("h2",{id:"create-the-node-id-secrets"},"Create the node ID secrets"),(0,o.kt)("p",null,"Apply the blueprint with the ",(0,o.kt)("inlineCode",{parentName:"p"},"console blueprint apply")," command to create the node ID secrets:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},"ash console blueprint apply ./local-node-ids.yml\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Confirmation prompt"',title:'"Confirmation','prompt"':!0},"Blueprint summary\nSecrets\n  5 to create: local-node-id-01, local-node-id-02, local-node-id-03, local-node-id-04, local-node-id-05\n  0 to update:\nProjects\n  0 to create:\n  0 to update:\n? Are you sure you want to apply this blueprint? (y/N)\n[This action is irreversible!]\n")),(0,o.kt)("p",null,"After the blueprint is done applying, we can then confirm that the secrets have been created with the ",(0,o.kt)("inlineCode",{parentName:"p"},"console secret list")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},"ash console secret list\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"+------------------+-------------+----------------+------------------+---------+\n| Secret name      | Secret ID   | Type           | Created at       | Used by |\n+==================+=============+================+==================+=========+\n| local-node-id-01 | 7738...a900 | NodeId         | 2023-12-21T15:53 | 0       |\n+------------------+-------------+----------------+------------------+---------+\n| local-node-id-02 | d577...a0bd | NodeId         | 2023-12-21T15:54 | 0       |\n+------------------+-------------+----------------+------------------+---------+\n| local-node-id-03 | 6cf7...db9d | NodeId         | 2023-12-21T15:54 | 0       |\n+------------------+-------------+----------------+------------------+---------+\n| local-node-id-04 | 7221...fa0c | NodeId         | 2023-12-21T15:54 | 0       |\n+------------------+-------------+----------------+------------------+---------+\n| local-node-id-05 | 36a1...59b8 | NodeId         | 2023-12-21T15:54 | 0       |\n+------------------+-------------+----------------+------------------+---------+\n| my-aws-creds     | 2a29...fde2 | AwsCredentials | 2023-12-21T15:55 | 0       |\n+------------------+-------------+----------------+------------------+---------+\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"See the ",(0,o.kt)("a",{parentName:"p",href:"/docs/console/reference/secret-management"},"reference")," for more information about secrets lifecycle management.")))}m.isMDXComponent=!0}}]);