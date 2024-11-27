"use strict";(self.webpackChunkash_docs=self.webpackChunkash_docs||[]).push([[3048],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),i=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=i(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=i(n),m=a,k=p["".concat(c,".").concat(m)]||p[m]||d[m]||r;return n?o.createElement(k,l(l({ref:t},u),{},{components:n})):o.createElement(k,l({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var i=2;i<r;i++)l[i]=n[i];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var o=n(7294),a=n(6010);const r={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var o=n(7462),a=n(7294),r=n(6010),l=n(2466),s=n(6550),c=n(1980),i=n(7392),u=n(12);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:o,default:a}}=e;return{value:t,label:n,attributes:o,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:n}=e;const o=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(o.location.search);t.set(r,e),o.replace({...o.location,search:t.toString()})}),[r,o])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,r=d(e),[l,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=n.find((e=>e.default))??n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:r}))),[c,i]=k({queryString:n,groupId:o}),[p,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,r]=(0,u.Nk)(n);return[o,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:o}),b=(()=>{const e=c??p;return m({value:e,tabValues:r})?e:null})();(0,a.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),i(e),h(e)}),[i,h,r]),tabValues:r}}var b=n(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:s,selectValue:c,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),o=i[n].value;o!==s&&(p(t),c(o))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},i.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},l,{className:(0,r.Z)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":s===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:o}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==o}))))}function y(e){const t=h(e);return a.createElement("div",{className:(0,r.Z)("tabs-container",f.tabList)},a.createElement(g,(0,o.Z)({},e,t)),a.createElement(v,(0,o.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return a.createElement(y,(0,o.Z)({key:String(t)},e))}},6889:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>k,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var o=n(7462),a=(n(7294),n(3905)),r=n(4866),l=n(5162);const s={sidebar_position:8},c="6. Block explorer Deployment",i={unversionedId:"console/guides/local-network/blockscout",id:"console/guides/local-network/blockscout",title:"6. Block explorer Deployment",description:"The Ash Console is currently in alpha and not production-ready. It is under active development and subject to breaking changes.",source:"@site/docs/console/guides/local-network/blockscout.md",sourceDirName:"console/guides/local-network",slug:"/console/guides/local-network/blockscout",permalink:"/docs/console/guides/local-network/blockscout",draft:!1,editUrl:"https://github.com/AshAvalanche/ash-docs/tree/main/docs/console/guides/local-network/blockscout.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"consoleSidebar",previous:{title:"5. Subnet Creation",permalink:"/docs/console/guides/local-network/subnet"},next:{title:"7. Teardown",permalink:"/docs/console/guides/local-network/teardown"}},u={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Blockscout creation",id:"blockscout-creation",level:2},{value:"Blockscout endpoint",id:"blockscout-endpoint",level:2},{value:"Blockscout endpoint",id:"blockscout-endpoint-1",level:2}],d={toc:p},m="wrapper";function k(e){let{components:t,...s}=e;return(0,a.kt)(m,(0,o.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"6-block-explorer-deployment"},"6. Block explorer Deployment"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The Ash Console is currently in alpha and ",(0,a.kt)("strong",{parentName:"p"},"not production-ready"),". It is under active development and subject to breaking changes.")),(0,a.kt)("p",null,"In this section, we will create a ",(0,a.kt)("a",{parentName:"p",href:"https://www.blockscout.com/"},"Blockscout")," ",(0,a.kt)("a",{parentName:"p",href:"/docs/console/glossary#resource"},"resource")," on our local network."),(0,a.kt)("p",null,"In addition to indexing blocks, this instance will be able to verify smart contracts. "),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"Before setting up ",(0,a.kt)("a",{parentName:"p",href:"https://www.blockscout.com/"},"Blockscout"),", we must deploy at least one ",(0,a.kt)("a",{parentName:"p",href:"/docs/console/guides/local-network/subnet"},"local Subnet")," to be indexed and wait until it's ready, as described in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/console/guides/local-network/subnet#subnet-information"},"previous section"),"."),(0,a.kt)("h2",{id:"blockscout-creation"},"Blockscout creation"),(0,a.kt)(r.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"console",label:"Using the Ash Console",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"From the ",(0,a.kt)("a",{parentName:"p",href:"https://console.ash.center"},"Ash Console")," project overview page, navigate to the ",(0,a.kt)("strong",{parentName:"p"},"Block Explorers")," tab:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click on the ",(0,a.kt)("inlineCode",{parentName:"li"},"Create Block Explorer")," button."),(0,a.kt)("li",{parentName:"ul"},"Pick a name for your Blockscout instance, e.g., ",(0,a.kt)("inlineCode",{parentName:"li"},"ash-blockscout"),"."),(0,a.kt)("li",{parentName:"ul"},"Select the cloud region you added in the previous step."),(0,a.kt)("li",{parentName:"ul"},"Choose a VM size between ",(0,a.kt)("inlineCode",{parentName:"li"},"small"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"medium"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"large")," (see ",(0,a.kt)("a",{parentName:"li",href:"/docs/console/reference/resource-management#resource-sizes"},"Resource sizes")," for details on available sizes)."),(0,a.kt)("li",{parentName:"ul"},"Select the ",(0,a.kt)("inlineCode",{parentName:"li"},"ash-subnet")," Subnet resource you created in the previous step."),(0,a.kt)("li",{parentName:"ul"},"(Optional) Configure the block explorer with custom configurations if needed."),(0,a.kt)("li",{parentName:"ul"},"Click on the ",(0,a.kt)("inlineCode",{parentName:"li"},"Create")," button.")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"blockscoutConfig")," field is following the same structure as the ",(0,a.kt)("a",{parentName:"p",href:"/docs/toolkit/ansible-avalanche-collection/introduction"},"Ansible Avalanche Collection"),"'s ",(0,a.kt)("inlineCode",{parentName:"p"},"ash.avalanche.evm.blockscout")," role. See ",(0,a.kt)("a",{parentName:"p",href:"/docs/toolkit/ansible-avalanche-collection/reference/roles/avalanche-evm-blockscout"},"Blockscout configuration")," for more information on how to configure blockscout.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Ash Console block explorer create",src:n(1321).Z,width:"1272",height:"708"})),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Unlike other resources, there is no secrets to create here.")),(0,a.kt)("h2",{id:"blockscout-endpoint"},"Blockscout endpoint"),(0,a.kt)("p",null,"After a few minutes, we can get the details on the Blockscout, including its URL:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Ash Console block explorer URL",src:n(9008).Z,width:"1487",height:"402"}))),(0,a.kt)(l.Z,{value:"cli",label:"Using the Ash CLI",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"The following command will create a ",(0,a.kt)("a",{parentName:"p",href:"https://www.blockscout.com/"},"Blockscout")," instance."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},"ash console resource create '{\n  name: ash-blockscout, \n  resourceType: blockscout, \n  cloudRegionId: aws/us-east-1, \n  size: medium, \n  subnetResourceId: ash-subnet, \n  blockscoutConfig: {\n    blockscout_frontend_env_variables: {\n      NEXT_PUBLIC_NETWORK_NAME: Ash-network\n    }\n  }\n}'\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"blockscoutConfig")," field is following the same structure as the ",(0,a.kt)("a",{parentName:"p",href:"/docs/toolkit/ansible-avalanche-collection/introduction"},"Ansible Avalanche Collection"),"'s ",(0,a.kt)("inlineCode",{parentName:"p"},"ash.avalanche.evm.blockscout")," role. See ",(0,a.kt)("a",{parentName:"p",href:"/docs/toolkit/ansible-avalanche-collection/reference/roles/avalanche-evm-blockscout"},"Blockscout configuration")," for more information on how to configure blockscout.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"Resource successfully created in project 'ash-devnet'!\n+----------------+-------------+------------+---------------+--------+------------------+---------+----------------------+\n| Resource name  | Resource ID | Type       | Cloud region  | Size   | Created at       | Status  | Resource specific    |\n+================+=============+============+===============+========+==================+=========+======================+\n| ash-blockscout | e1d6...9a0b | Blockscout | aws/us-east-1 | Medium | 2024-06-07T21:20 | Pending |  IP address |        |\n|                |             |            |               |        |                  |         |  Running    | false  |\n+----------------+-------------+------------+---------------+--------+------------------+---------+----------------------+\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Unlike other resources, there is no secrets to create here.")),(0,a.kt)("h2",{id:"blockscout-endpoint-1"},"Blockscout endpoint"),(0,a.kt)("p",null,"After a few minutes, we can get the details on the Blockscout:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},"ash console resource info ash-blockscout\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"Resource 'ash-blockscout' of project 'ash-devnet':\n+----------------+-------------+------------+---------------+--------+------------------+---------+------------------------------+\n| Resource name  | Resource ID | Type       | Cloud region  | Size   | Created at       | Status  | Resource specific            |\n+================+=============+============+===============+========+==================+=========+==============================+\n| ash-blockscout | e1d6...9a0b | Blockscout | aws/us-east-1 | Medium | 2024-06-07T21:20 | Running |  IP address | 44.210.241.77  |\n|                |             |            |               |        |                  |         |  Running    | true           |\n+----------------+-------------+------------+---------------+--------+------------------+---------+------------------------------+\n")),(0,a.kt)("p",null,"The CLI provides a powerful helper to get the URL where the user interface is."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},"ash console helper blockscout-url ash-blockscout\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"Explorer URL:\n  http:/44.210.241.77:80\n")))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"See the ",(0,a.kt)("a",{parentName:"p",href:"/docs/console/reference/resource-management"},"reference")," for more information about resources lifecycle management.")))}k.isMDXComponent=!0},1321:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/ash-console-block-explorer-create-ec43bdb6dd73f101896485a5ae9ad023.png"},9008:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/ash-console-block-explorer-url-8c290dcd93bb58752ee422982c8b30e0.png"}}]);