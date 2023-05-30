"use strict";(self.webpackChunkash_docs=self.webpackChunkash_docs||[]).push([[9397],{9613:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(9496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),d=r,m=p["".concat(s,".").concat(d)]||p[d]||h[d]||o;return a?n.createElement(m,l(l({ref:t},u),{},{components:a})):n.createElement(m,l({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5498:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(9496),r=a(5924);const o={tabItem:"tabItem_IfE0"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:a},t)}},725:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(2564),r=a(9496),o=a(5924),l=a(3819),i=a(3442),s=a(1233),c=a(6491),u=a(9182);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function h(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function v(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=h(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,c]=m({queryString:a,groupId:n}),[p,v]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),b=(()=>{const e=s??p;return d({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),v(e)}),[c,v,o]),tabValues:o}}var b=a(6363);const g={tabList:"tabList_qavC",tabItem:"tabItem_f8Aq"};function f(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),h=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==i&&(p(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:h},l,{className:(0,o.Z)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=v(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},r.createElement(f,(0,n.Z)({},e,t)),r.createElement(k,(0,n.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},5669:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=a(2564),r=(a(9496),a(9613)),o=a(725),l=a(5498);const i={sidebar_position:3},s="Node Upgrade",c={unversionedId:"toolkit/ansible-avalanche-collection/tutorials/node-upgrade",id:"toolkit/ansible-avalanche-collection/tutorials/node-upgrade",title:"Node Upgrade",description:"In this section, we will learn how to upgrade the AvalancheGo version on many nodes simultaneously with a single command.",source:"@site/docs/toolkit/ansible-avalanche-collection/tutorials/node-upgrade.md",sourceDirName:"toolkit/ansible-avalanche-collection/tutorials",slug:"/toolkit/ansible-avalanche-collection/tutorials/node-upgrade",permalink:"/docs/toolkit/ansible-avalanche-collection/tutorials/node-upgrade",draft:!1,editUrl:"https://github.com/AshAvalanche/ash-docs/tree/main/docs/toolkit/ansible-avalanche-collection/tutorials/node-upgrade.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"toolkitSidebar",previous:{title:"Local Test Network Creation",permalink:"/docs/toolkit/ansible-avalanche-collection/tutorials/local-test-network"},next:{title:"VM Management",permalink:"/docs/toolkit/ansible-avalanche-collection/tutorials/vm-management"}},u={},p=[{value:"Check the current AvalancheGo version",id:"check-the-current-avalanchego-version",level:2},{value:"Upgrade the AvalancheGo version",id:"upgrade-the-avalanchego-version",level:2},{value:"Verify the new AvalancheGo version",id:"verify-the-new-avalanchego-version",level:2}],h={toc:p},d="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"node-upgrade"},"Node Upgrade"),(0,r.kt)("p",null,"In this section, we will learn how to upgrade the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ava-labs/avalanchego"},"AvalancheGo")," version on many nodes simultaneously with a single command."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For this tutorial, we will use the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local"},(0,r.kt)("inlineCode",{parentName:"a"},"local"))," inventory provided by the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-getting-started"},"Ansible Avalanche Getting Started")," repository. See ",(0,r.kt)("a",{parentName:"p",href:"./local-test-network"},"Create a Local Test Network")," for details.")),(0,r.kt)("h2",{id:"check-the-current-avalanchego-version"},"Check the current AvalancheGo version"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"ash-cli",label:"Using Ash CLI",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Let's start by checking the current version of my node(s) with the Ash CLI:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ash avalanche node info --http-host 192.168.60.11\n")),(0,r.kt)("p",null,"The output should look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{6}","{6}":!0},"Node '192.168.60.11:9650':\n  ID:            NodeID-7Xhw2mDxuDS44j42TCB6U5579esbSt3Lg\n  Public IP:     192.168.60.11\n  Stacking port: 9651\n  Versions:\n    AvalancheGo: avalanche/1.9.6\n    [...]\n"))),(0,r.kt)(l.Z,{value:"curl",label:"Using cURL",mdxType:"TabItem"},(0,r.kt)("p",null,"Let's start by checking the current version of my node(s) with an API call:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -s -X POST --data \'{\n    "jsonrpc":"2.0",\n    "id"     :1,\n    "method" :"info.getNodeVersion"\n}\' -H \'content-type:application/json;\' http://192.168.60.11:9650/ext/info |\njq -r \'.result.version\'\n')),(0,r.kt)("p",null,"The output should look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"avalanche/1.9.6\n")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"192.168.60.11")," matches the validator01 VM IP in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-getting-started/blob/main/Vagrantfile#L8"},"Vagrantfile")," of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-getting-started"},"Ansible Avalanche Getting Started"),".")),(0,r.kt)("p",null,"As we can see above, our node is currently running AvalancheGo version ",(0,r.kt)("inlineCode",{parentName:"p"},"1.9.6"),". This is what's expected because of the Ansible role variable ",(0,r.kt)("inlineCode",{parentName:"p"},"avalanchego_version: 1.9.6")," set at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-getting-started/blob/main/inventories/local/group_vars/avalanche_nodes.yml#L4"},"avalanche_nodes.yml")," in our inventory."),(0,r.kt)("h2",{id:"upgrade-the-avalanchego-version"},"Upgrade the AvalancheGo version"),(0,r.kt)("p",null,"Let's upgrade our nodes by changing the ",(0,r.kt)("inlineCode",{parentName:"p"},"avalanchego_version")," Ansible variable to ",(0,r.kt)("inlineCode",{parentName:"p"},"1.9.9")," with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sed -i 's/avalanchego_version: 1.9.6/avalanchego_version: 1.9.9/' inventories/local/group_vars/avalanche_nodes.yml\n")),(0,r.kt)("p",null,"We can then upgrade all the nodes defined in our Ansible inventory by running the ",(0,r.kt)("inlineCode",{parentName:"p"},"provision_nodes")," playbook again:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ansible-playbook ash.avalanche.provision_nodes -i inventories/local\n")),(0,r.kt)("h2",{id:"verify-the-new-avalanchego-version"},"Verify the new AvalancheGo version"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"ash-cli",label:"Using Ash CLI",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"By running the same command as previously:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ash avalanche node info --http-host 192.168.60.11\n")),(0,r.kt)("p",null,"We can confirm that our node is now running AvalancheGo 1.9.9:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{6}","{6}":!0},"Node '192.168.60.11:9650':\n  ID:            NodeID-7Xhw2mDxuDS44j42TCB6U5579esbSt3Lg\n  Public IP:     192.168.60.11\n  Stacking port: 9651\n  Versions:\n    AvalancheGo: avalanche/1.9.9\n    [...]\n"))),(0,r.kt)(l.Z,{value:"curl",label:"Using cURL",mdxType:"TabItem"},(0,r.kt)("p",null,"By running the same API call as previously:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -s -X POST --data \'{\n    "jsonrpc":"2.0",\n    "id"     :1,\n    "method" :"info.getNodeVersion"\n}\' -H \'content-type:application/json;\' http://192.168.60.11:9650/ext/info |\njq -r \'.result.version\'\n')),(0,r.kt)("p",null,"We can confirm that our node is now running AvalancheGo 1.9.9:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"avalanche/1.9.9\n")))))}m.isMDXComponent=!0}}]);