"use strict";(self.webpackChunkash_docs=self.webpackChunkash_docs||[]).push([[4966],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,d=p["".concat(s,".").concat(m)]||p[m]||h[m]||o;return a?n.createElement(d,l(l({ref:t},c),{},{components:a})):n.createElement(d,l({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(7462),r=a(7294),o=a(6010),l=a(2466),i=a(6550),s=a(1980),u=a(7392),c=a(12);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function h(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=h(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,u]=d({queryString:a,groupId:n}),[p,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),b=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var b=a(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),h=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==i&&(p(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:h},l,{className:(0,o.Z)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function g(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",v.tabList)},r.createElement(k,(0,n.Z)({},e,t)),r.createElement(g,(0,n.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},8995:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=a(7462),r=(a(7294),a(3905)),o=a(4866),l=a(5162);const i={sidebar_position:1},s="Introduction",u={unversionedId:"toolkit/ash-cli/introduction",id:"toolkit/ash-cli/introduction",title:"Introduction",description:"The Ash CLI aims at boosting Avalanche developers productivity by providing a set of commands to interact with Avalanche.",source:"@site/docs/toolkit/ash-cli/introduction.md",sourceDirName:"toolkit/ash-cli",slug:"/toolkit/ash-cli/introduction",permalink:"/docs/toolkit/ash-cli/introduction",draft:!1,editUrl:"https://github.com/AshAvalanche/ash-docs/tree/main/docs/toolkit/ash-cli/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"toolkitSidebar",previous:{title:"Ash CLI",permalink:"/docs/category/ash-cli"},next:{title:"Installation",permalink:"/docs/toolkit/ash-cli/installation"}},c={},p=[{value:"Features",id:"features",level:2},{value:"Motivation",id:"motivation",level:2}],h={toc:p},m="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"The Ash CLI aims at ",(0,r.kt)("strong",{parentName:"p"},"boosting Avalanche developers productivity")," by providing a set of commands to interact with Avalanche."),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"The ",(0,r.kt)("b",null,"easiest way to explore")," \ud83d\udd0d Avalanche networks from the command line"),(0,r.kt)("div",null,(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"/docs/toolkit/ash-cli/tutorials/network-exploration"},"Network Exploration")," tutorial"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{1}","{1}":!0},"ash avalanche help\nInteract with Avalanche Subnets, blockchains and nodes\n\nUsage: ash avalanche [OPTIONS] <COMMAND>\n\nCommands:\n  network    Interact with Avalanche networks\n  node       Interact with Avalanche nodes\n  subnet     Interact with Avalanche Subnets\n  validator  Interact with Avalanche validators\n  help       Print this message or the help of the given subcommand(s)\n")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Support for ",(0,r.kt)("b",null,"any Avalanche network")," with custom configuration \ud83d\udcdd"),(0,r.kt)("div",null,(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"/docs/toolkit/ash-cli/tutorials/custom-configuration"},"Custom Configuration")," tutorial"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'{3,12} title="~/.config/ash/my-custom-config.yaml"',"{3,12}":!0,title:'"~/.config/ash/my-custom-config.yaml"'},"---\navalancheNetworks:\n  - name: my-network\n    subnets:\n      - id: 11111111111111111111111111111111LpoYY\n        controlKeys: []\n        threshold: 0\n        blockchains:\n          - id: 11111111111111111111111111111111LpoYY\n            name: P-Chain\n            vmType: PVM\n            rpcUrl: http://validator01.ash.local:9650/ext/bc/P\n          [...]\n")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Create Subnets and blockchains \ud83d\udee0\ufe0f, 100% ",(0,r.kt)("b",null,"compatible with Avalanche CLI")," wizard"),(0,r.kt)("div",null,(0,r.kt)("p",null,"Coming soon! Stay tuned by following ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/ash_avax"},"@ash_avax")," \ud83d\udc26!"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Lightweight (written in Rust \ud83e\udd80) and ",(0,r.kt)("b",null,"perfect for scripting")," with JSON output"),(0,r.kt)("div",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export AVALANCHE_NETWORK=my-network\nexport ASH_CONFIG_PATH=~/.config/ash/my-network.yaml\nexport ASH_JSON=true\n\nash avalanche validator info --id NodeID-CskPetRMvtH5Xr6gLa5cwfY4hR34UgkM5 | jq '.uptime'\n")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"The ",(0,r.kt)("b",null,"command line companion")," \ud83e\uddd1\u200d\ud83d\udcbb of all the other Ash tools"),(0,r.kt)("div",null,(0,r.kt)("p",null,"Coming soon! Stay tuned by following ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/ash_avax"},"@ash_avax")," \ud83d\udc26!"))),(0,r.kt)("h2",{id:"motivation"},"Motivation"),(0,r.kt)("p",null,"Several factors motivated us to create the Ash CLI:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The need of an easy and scriptable way to explore Avalanche networks from the command line")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A network information is accessible through ",(0,r.kt)("a",{parentName:"li",href:"https://docs.avax.network/apis/avalanchego/apis/issuing-api-calls"},"AvalancheGo JSON-RPC APIs"),", that are not made to be queried directly by developers. Extra development is required to reach an acceptable level of usability (don't tell us you like querying JSON-RPC endpoints with cURL \ud83d\ude2c)."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"API layout is not optimal for all queries")," and sometimes requires multiple calls to get the desired information. The Ash CLI abstracts this complexity and provides a single command to get the information you need.")),(0,r.kt)("p",null,"Let's see how easy it is to list all the blockchains of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Vn3aX6hNRstj5VHHm63TCgPNaeGnRSqCYXQqemSqDd2TQH4qJ")," Subnet using Ash CLI vs cURL:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"curl",label:"Using cURL",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -s -X POST --data \'{\n    "jsonrpc": "2.0",\n    "method": "platform.getBlockchains",\n    "params": {},\n    "id": 1\n}\' -H \'content-type:application/json;\' https://api.avax.network/ext/bc/P |\njq \'.result.blockchains[] | select(.subnetID == "Vn3aX6hNRstj5VHHm63TCgPNaeGnRSqCYXQqemSqDd2TQH4qJ")\'\n'))),(0,r.kt)(l.Z,{value:"ash-cli",label:"Using Ash CLI",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ash avalanche subnet info --id Vn3aX6hNRstj5VHHm63TCgPNaeGnRSqCYXQqemSqDd2TQH4qJ\n")))),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Limitations of the ",(0,r.kt)("a",{parentName:"strong",href:"https://github.com/ava-labs/avalanche-cli"},"Avalanche CLI")," developped by Ava Labs")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Avalanche CLI only support using the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ava-labs/avalanche-network-runner"},"avalanche-network-runner")," for local/private networks. We needed a way to interact with ",(0,r.kt)("strong",{parentName:"li"},"any")," Avalanche network."),(0,r.kt)("li",{parentName:"ul"},"The Avalanche CLI ",(0,r.kt)("strong",{parentName:"li"},"outputs were not made to be parsed"),", which makes it impossible to use it in scripts, CI/CD pipelines or other automation tools.")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--json")," flag is available on all Ash CLI commands, making it super easy to filter the output with tools like ",(0,r.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq/"},"jq"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{1}","{1}":!0},"ash avalanche validator info --id NodeID-CskPetRMvtH5Xr6gLa5cwfY4hR34UgkM5 --json | jq '.uptime'\n99.9911\n")))}d.isMDXComponent=!0}}]);