"use strict";(self.webpackChunkash_docs=self.webpackChunkash_docs||[]).push([[9397],{9613:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(9496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),h=r,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||l;return a?n.createElement(m,o(o({ref:t},u),{},{components:a})):n.createElement(m,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5498:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(9496),r=a(5924);const l={tabItem:"tabItem_IfE0"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:a},t)}},725:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(2564),r=a(9496),l=a(5924),o=a(3819),i=a(3442),s=a(1233),c=a(6491),u=a(9182);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function v(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=d(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,c]=m({queryString:a,groupId:n}),[p,v]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),b=(()=>{const e=s??p;return h({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),v(e)}),[c,v,l]),tabValues:l}}var b=a(6363);const g={tabList:"tabList_qavC",tabItem:"tabItem_f8Aq"};function f(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==i&&(p(t),s(n))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:h,onClick:d},o,{className:(0,l.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":i===t})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=v(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",g.tabList)},r.createElement(f,(0,n.Z)({},e,t)),r.createElement(k,(0,n.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},5669:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=a(2564),r=(a(9496),a(9613)),l=a(725),o=a(5498);const i={sidebar_position:3},s="Node Upgrade",c={unversionedId:"toolkit/ansible-avalanche-collection/tutorials/node-upgrade",id:"toolkit/ansible-avalanche-collection/tutorials/node-upgrade",title:"Node Upgrade",description:"In this section, we will learn how to upgrade the AvalancheGo version on many nodes simultaneously with a single command.",source:"@site/docs/toolkit/ansible-avalanche-collection/tutorials/node-upgrade.md",sourceDirName:"toolkit/ansible-avalanche-collection/tutorials",slug:"/toolkit/ansible-avalanche-collection/tutorials/node-upgrade",permalink:"/docs/toolkit/ansible-avalanche-collection/tutorials/node-upgrade",draft:!1,editUrl:"https://github.com/AshAvalanche/ash-docs/tree/main/docs/toolkit/ansible-avalanche-collection/tutorials/node-upgrade.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"toolkitSidebar",previous:{title:"Create a Fuji node on AWS",permalink:"/docs/toolkit/ansible-avalanche-collection/tutorials/fuji-node-aws"},next:{title:"Blockchain VM Management",permalink:"/docs/toolkit/ansible-avalanche-collection/tutorials/vm-management"}},u={},p=[{value:"Check the current AvalancheGo version",id:"check-the-current-avalanchego-version",level:2},{value:"Upgrade the AvalancheGo version",id:"upgrade-the-avalanchego-version",level:2},{value:"Verify the new AvalancheGo version",id:"verify-the-new-avalanchego-version",level:2}],d={toc:p},h="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(h,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"node-upgrade"},"Node Upgrade"),(0,r.kt)("p",null,"In this section, we will learn how to upgrade the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ava-labs/avalanchego"},"AvalancheGo")," version on many nodes simultaneously with a single command."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For this tutorial, we will use the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local"},(0,r.kt)("inlineCode",{parentName:"a"},"local"))," inventory provided by the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-getting-started"},"Ansible Avalanche Getting Started")," repository. See ",(0,r.kt)("a",{parentName:"p",href:"./local-test-network"},"Create a Local Test Network")," for details.")),(0,r.kt)("h2",{id:"check-the-current-avalanchego-version"},"Check the current AvalancheGo version"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"ash-cli",label:"Using Ash CLI",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Let's start by checking the current version of my node(s) with the Ash CLI:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},"multipass exec validator01 -- ash avalanche node info\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'{7} title="Output"',"{7}":!0,title:'"Output"'},"Node '127.0.0.1:9650':\n  ID:            NodeID-7Xhw2mDxuDS44j42TCB6U5579esbSt3Lg\n  Network:       local\n  Public IP:     10.117.207.160\n  Staking port:  9651\n  Versions:\n    AvalancheGo:  avalanche/1.10.1\n    [...]\n"))),(0,r.kt)(o.Z,{value:"curl",label:"Using cURL",mdxType:"TabItem"},(0,r.kt)("p",null,"Let's start by checking the current version of my node(s) with an API call:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},'multipass exec validator01 -- curl -s -X POST --data \'{\n    "jsonrpc":"2.0",\n    "id"     :1,\n    "method" :"info.getNodeVersion"\n}\' -H \'content-type:application/json;\' http://127.0.0.1:9650/ext/info |\njq -r \'.result.version\'\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"avalanche/1.10.1\n")))),(0,r.kt)("p",null,"As we can see above, our node is currently running AvalancheGo version ",(0,r.kt)("inlineCode",{parentName:"p"},"1.10.1"),". This is what's expected because of the Ansible role variable ",(0,r.kt)("inlineCode",{parentName:"p"},"avalanchego_version: 1.10.1")," set at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-getting-started/blob/main/inventories/local/group_vars/avalanche_nodes.yml#L4"},"avalanche_nodes.yml")," in our inventory."),(0,r.kt)("h2",{id:"upgrade-the-avalanchego-version"},"Upgrade the AvalancheGo version"),(0,r.kt)("p",null,"Let's upgrade our nodes by changing the ",(0,r.kt)("inlineCode",{parentName:"p"},"avalanchego_version")," Ansible variable to ",(0,r.kt)("inlineCode",{parentName:"p"},"1.10.3")," with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sed -i 's/avalanchego_version: 1.10.1/avalanchego_version: 1.10.3/' inventories/local/group_vars/avalanche_nodes.yml\n")),(0,r.kt)("p",null,"We can then upgrade all the nodes defined in our Ansible inventory by running the ",(0,r.kt)("inlineCode",{parentName:"p"},"provision_nodes")," playbook again:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ansible-playbook ash.avalanche.provision_nodes -i inventories/local\n")),(0,r.kt)("h2",{id:"verify-the-new-avalanchego-version"},"Verify the new AvalancheGo version"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"ash-cli",label:"Using Ash CLI",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"By running the same command as previously:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"multipass exec validator01 -- ash avalanche node info\n")),(0,r.kt)("p",null,"We can confirm that our node is now running AvalancheGo 1.10.3:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{7}","{7}":!0},"Node '127.0.0.1:9650':\n  ID:            NodeID-7Xhw2mDxuDS44j42TCB6U5579esbSt3Lg\n  Network:       local\n  Public IP:     10.117.207.160\n  Staking port:  9651\n  Versions:\n    AvalancheGo:  avalanche/1.10.3\n    [...]\n"))),(0,r.kt)(o.Z,{value:"curl",label:"Using cURL",mdxType:"TabItem"},(0,r.kt)("p",null,"By running the same API call as previously:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'multipass exec validator01 -- curl -s -X POST --data \'{\n    "jsonrpc":"2.0",\n    "id"     :1,\n    "method" :"info.getNodeVersion"\n}\' -H \'content-type:application/json;\' http://127.0.0.1:9650/ext/info |\njq -r \'.result.version\'\n')),(0,r.kt)("p",null,"We can confirm that our node is now running AvalancheGo 1.10.3:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"avalanche/1.10.3\n")))))}m.isMDXComponent=!0}}]);