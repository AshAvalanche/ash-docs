"use strict";(self.webpackChunkash_docs=self.webpackChunkash_docs||[]).push([[744],{9613:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return n?a.createElement(f,i(i({ref:t},l),{},{components:n})):a.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d[p]="string"==typeof e?e:r,i[1]=d;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8948:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>s});var a=n(7605),r=(n(9496),n(9613));const o={sidebar_position:4},i="2. Node ID Secret Generation",d={unversionedId:"console/guides/fuji-node/node-id",id:"console/guides/fuji-node/node-id",title:"2. Node ID Secret Generation",description:"The Ash Console is currently in alpha and not production-ready. It is under active development and subject to breaking changes.",source:"@site/docs/console/guides/fuji-node/node-id.md",sourceDirName:"console/guides/fuji-node",slug:"/console/guides/fuji-node/node-id",permalink:"/docs/console/guides/fuji-node/node-id",draft:!1,editUrl:"https://github.com/AshAvalanche/ash-docs/tree/main/docs/console/guides/fuji-node/node-id.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"consoleSidebar",previous:{title:"1. Cloud Credentials Setup",permalink:"/docs/console/guides/fuji-node/cloud-credentials"},next:{title:"3. Project and Cloud Region Creation",permalink:"/docs/console/guides/fuji-node/project-region"}},c={},s=[{value:"Generate a new node ID secret",id:"generate-a-new-node-id-secret",level:2},{value:"Create the node ID secret",id:"create-the-node-id-secret",level:2}],l={toc:s},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"2-node-id-secret-generation"},"2. Node ID Secret Generation"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The Ash Console is currently in alpha and ",(0,r.kt)("strong",{parentName:"p"},"not production-ready"),". It is under active development and subject to breaking changes.")),(0,r.kt)("p",null,"The Ash Console ",(0,r.kt)("strong",{parentName:"p"},"decorelates the node ID from Avalanche nodes"),", so that you can have a better control over your validator nodes' lifecycle."),(0,r.kt)("p",null,"The Node ID is stored as a ",(0,r.kt)("a",{parentName:"p",href:"/docs/console/glossary#secret"},"secret")," in the Console."),(0,r.kt)("h2",{id:"generate-a-new-node-id-secret"},"Generate a new node ID secret"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If not already done, create a folder for this guide and navigate to it:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p ash-console-guides/fuji-node\ncd ash-console-guides/fuji-node\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Generate a new Node ID with the ",(0,r.kt)("inlineCode",{parentName:"p"},"avalanche node generate-id")," command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},"ash avalanche node generate-id -o node-id\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"Node ID: NodeID-Bdf7YwriWbpY15CPcXH5791uDTqtCYyjw\nCertificate and key files written to 'node-id/node.crt' and 'node-id/node.key'\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Note:")," Your node ID will be different.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make sure to ",(0,r.kt)("strong",{parentName:"p"},"keep a backup of the certificate and key files")," in a safe place. If an outage occurs, you will need them to recreate a node with the same ID.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Save the Node ID")," for later use. You can also compute it from the node certificate with the ",(0,r.kt)("inlineCode",{parentName:"p"},"avalanche node id")," command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},"ash avalanche node id-from-cert -f node-id/node.crt\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"Node ID: NodeID-Bdf7YwriWbpY15CPcXH5791uDTqtCYyjw\n")))),(0,r.kt)("h2",{id:"create-the-node-id-secret"},"Create the node ID secret"),(0,r.kt)("p",null,"Use the certificate and key files to create a ",(0,r.kt)("inlineCode",{parentName:"p"},"nodeId")," secret with the ",(0,r.kt)("inlineCode",{parentName:"p"},"console secret create")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},'ash console secret create \'{\n  "name": "node-id-01",\n  "secretType": "nodeId",\n  "nodeId": "NodeID-Bdf7YwriWbpY15CPcXH5791uDTqtCYyjw"}\',\n  "nodeCert": "node-id/node.crt",\n  "nodeKey": "node-id/node.key"\n}\'\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"Secret created successfully!\n+--------------------------------------+-------------+------------+---------+------------------+---------+\n| Secret ID                            | Owner ID    | Name       | Type    | Created at       | Used by |\n+======================================+=============+===========+=========+==================+=========+\n| 0b3ab7f4-c355-4971-b9d1-74f67414abc0 | 2870...dc26 | node-id-01 | NodeId  | 2023-11-12T10:35 | 0       |\n+--------------------------------------+-------------+------------+---------+------------------+---------+\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"See the ",(0,r.kt)("a",{parentName:"p",href:"/docs/console/reference/secret-management"},"reference")," for more information about secrets lifecycle management.")))}u.isMDXComponent=!0}}]);