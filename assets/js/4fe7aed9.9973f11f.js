"use strict";(self.webpackChunkash_docs=self.webpackChunkash_docs||[]).push([[8560],{9613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var a=t(9496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return t?a.createElement(f,l(l({ref:n},u),{},{components:t})):a.createElement(f,l({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[d]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},238:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(9496),r=t(5924);const o={tabItem:"tabItem_qcoa"};function l(e){let{children:n,hidden:t,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:t},n)}},5414:(e,n,t)=>{t.d(n,{Z:()=>y});var a=t(7605),r=t(9496),o=t(5924),l=t(4976),s=t(3442),i=t(9250),c=t(9160),u=t(5535);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??d(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})}),[o,a])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,o=p(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:o}))),[i,c]=f({queryString:t,groupId:a}),[d,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,o]=(0,u.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),h=(()=>{const e=i??d;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),b(e)}),[c,b,o]),tabValues:o}}var h=t(9915);const g={tabList:"tabList_nOpa",tabItem:"tabItem_jOOI"};function k(e){let{className:n,block:t,selectedValue:s,selectValue:i,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const n=e.currentTarget,t=u.indexOf(n),a=c[t].value;a!==s&&(d(n),i(a))},m=e=>{let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n)},c.map((e=>{let{value:n,label:t,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,key:n,ref:e=>u.push(e),onKeyDown:m,onClick:p},l,{className:(0,o.Z)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":s===n})}),t??n)})))}function N(e){let{lazy:n,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function v(e){const n=b(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},r.createElement(k,(0,a.Z)({},e,n)),r.createElement(N,(0,a.Z)({},e,n)))}function y(e){const n=(0,h.Z)();return r.createElement(v,(0,a.Z)({key:String(n)},e))}},5994:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=t(7605),r=(t(9496),t(9613)),o=t(5414),l=t(238);const s={sidebar_position:6},i="Resource Management",c={unversionedId:"console/reference/resource-management",id:"console/reference/resource-management",title:"Resource Management",description:"The Ash Console is currently in alpha and not production-ready. It is under active development and subject to breaking changes.",source:"@site/docs/console/reference/resource-management.md",sourceDirName:"console/reference",slug:"/console/reference/resource-management",permalink:"/docs/console/reference/resource-management",draft:!1,editUrl:"https://github.com/AshAvalanche/ash-docs/tree/main/docs/console/reference/resource-management.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"consoleSidebar",previous:{title:"Cloud Region Management",permalink:"/docs/console/reference/cloud-region-management"},next:{title:"Console Blueprints",permalink:"/docs/console/reference/blueprints"}},u={},d=[{value:"Types of resources",id:"types-of-resources",level:2},{value:"List resources",id:"list-resources",level:2},{value:"Create a resource",id:"create-a-resource",level:2},{value:"Get a resource and its status",id:"get-a-resource-and-its-status",level:2},{value:"Update a resource",id:"update-a-resource",level:2},{value:"Restart a resource",id:"restart-a-resource",level:2},{value:"Delete a resource",id:"delete-a-resource",level:2},{value:"Resource sizes",id:"resource-sizes",level:2},{value:"AvalancheNode",id:"avalanchenode",level:3}],p={toc:d},m="wrapper";function f(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"resource-management"},"Resource Management"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The Ash Console is currently in alpha and ",(0,r.kt)("strong",{parentName:"p"},"not production-ready"),". It is under active development and subject to breaking changes.")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/console/glossary#secret"},"Resources")," are the core feature of the Ash Console. They are the building blocks of your infrastructure, deployed in ",(0,r.kt)("a",{parentName:"p",href:"/docs/console/glossary#cloud-region"},"cloud regions")," of your cloud account/subscription/project and managed by Ash."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The Ash Console alpha supports ",(0,r.kt)("strong",{parentName:"p"},"AvalancheNode")," resources.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Resources live under a project and a cloud region"),". To manage resources, you need to have ",(0,r.kt)("strong",{parentName:"p"},"at least one project and one cloud region"),"."),(0,r.kt)("p",{parentName:"admonition"},"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/console/reference/project-management"},"Project Management")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/console/reference/cloud-region-management"},"Cloud Region Management"),".")),(0,r.kt)("h2",{id:"types-of-resources"},"Types of resources"),(0,r.kt)("p",null,"There are several types of resources. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/console/glossary#resource"},"Resource")," for more information."),(0,r.kt)("h2",{id:"list-resources"},"List resources"),(0,r.kt)(o.Z,{groupId:"ash-console-client",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"ash-cli",label:"Using the Ash CLI",default:!0,mdxType:"TabItem"},(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The Ash CLI displays information in a table format by default. To get a more detailed output (or for scripting), use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--json")," flag.")),(0,r.kt)("p",null,"To list resources you have access to, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},"ash console resource list\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"Resources of project '399b6f5b-eed2-4713-8b68-993643babfd0':\n+-------------+------+------+-----------------+------+------------+--------+-------------------+\n| Resource ID | Name | Type | Cloud region ID | Size | Created at | Status | Resource specific |\n+=============+======+======+=================+======+============+========+===================+\n+-------------+------+------+-----------------+------+------------+--------+-------------------+\n"))),(0,r.kt)(l.Z,{value:"ash-api",label:"Using the Ash Console API",mdxType:"TabItem"},(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/console/reference/authentication?ash-console-auth-client=ash-api"},"Authentication")," for more information on how to get an access token.")),(0,r.kt)("p",null,"The secret API endpoint is ",(0,r.kt)("inlineCode",{parentName:"p"},"/secrets"),".:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},'curl https://api.console.ash.center/projects/399b6f5b-eed2-4713-8b68-993643babfd0/resources \\\n  -H "Authorization: Bearer ${access_token}"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"[]\n")))),(0,r.kt)("h2",{id:"create-a-resource"},"Create a resource"),(0,r.kt)("p",null,"Each resource type has specific requirements, e.g. a ",(0,r.kt)("inlineCode",{parentName:"p"},"nodeId")," secret is required to create an ",(0,r.kt)("inlineCode",{parentName:"p"},"AvalancheNode")," resource."),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Resource specific requirements")),(0,r.kt)("div",null,(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("code",null,"AvalancheNode")),(0,r.kt)("div",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "my-avalanche-node",\n  "resourceType": "avalancheNode",\n  "cloudRegionId": "ff69b281-917e-4ebb-b1e0-f5dc1da297fa",\n  "nodeIdSecretId": "4cc8f792-83af-475d-8be0-20c35efc1bd4",\n  "size": "small",\n  "nodeConfig": {\n    "isBootstrapNode": true,\n    "avalancheNodeConfig": {\n      "avalanchego_version": "1.10.10"\n    }\n  }\n}\n')),(0,r.kt)("p",null,"You can pass any variable available in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/toolkit/ansible-avalanche-collection/reference/roles/avalanche-node"},"ash.avalanche.node")," role under ",(0,r.kt)("inlineCode",{parentName:"p"},"nodeConfig.avalancheNodeConfig"),"."))))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can provide the secrets' or cloud regions' names instead of their IDs.")),(0,r.kt)(o.Z,{groupId:"ash-console-client",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"ash-cli",label:"Using the Ash CLI",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"To create a new resource, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"create resource")," command and provide the required resource properties as JSON."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},"ash console resource create '{\n  name: my-avalanche-node,\n  resourceType: avalancheNode,\n  cloudRegionId: ff69b281-917e-4ebb-b1e0-f5dc1da297fa,\n  nodeIdSecretId: my-node-id,\n  size: small,\n  nodeConfig: {\n    isBootstrapNode: true,\n    avalancheNodeConfig: {\n      avalanchego_version: 1.10.10\n    }\n  }\n}'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"Resource successfully created in project '399b6f5b-eed2-4713-8b68-993643babfd0'!\n+--------------------------------------+-------------------+---------------+--------------------------------------+-------+------------------+---------+--------------------------+\n| Resource ID                          | Name              | Type          | Cloud region ID                      | Size  | Created at       | Status  | Resource specific        |\n+======================================+===================+===============+======================================+=======+==================+=========+==========================+\n| 70877036-e8df-4ad3-af95-c0f085a094a6 | my-avalanche-node | AvalancheNode | ff69b281-917e-4ebb-b1e0-f5dc1da297fa | Small | 2023-11-10T16:41 | Pending |  IP address   | pending  |\n|                                      |                   |               |                                      |       |                  |         |  Running      | false    |\n|                                      |                   |               |                                      |       |                  |         |  Bootstrapped | [false]  |\n|                                      |                   |               |                                      |       |                  |         |  Healthy      | [false]  |\n|                                      |                   |               |                                      |       |                  |         |  Restart req. | false    |\n+--------------------------------------+-------------------+---------------+--------------------------------------+-------+------------------+---------+--------------------------+\n"))),(0,r.kt)(l.Z,{value:"ash-api",label:"Using the Ash Console API",mdxType:"TabItem"},(0,r.kt)("p",null,"To create a new resource, you have to send a ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," request with the required secret properties as JSON:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},'curl -X POST https://api.console.ash.center/projects/399b6f5b-eed2-4713-8b68-993643babfd0/resources \\\n  -H "Authorization: Bearer ${access_token}" \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n  "name": "my-avalanche-node",\n  "resourceType": "avalancheNode",\n  "cloudRegionId": "ff69b281-917e-4ebb-b1e0-f5dc1da297fa",\n  "nodeIdSecretId": "4cc8f792-83af-475d-8be0-20c35efc1bd4",\n  "size": "small",\n  "nodeConfig": {\n    "isBootstrapNode": true,\n    "avalancheNodeConfig": {\n      "avalanchego_version": "1.10.10"\n    }\n  }\n}\'\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Output"',title:'"Output"'},'{\n  "id": "157f2652-8282-4738-937f-b11e8dcb7f38",\n  "cloudRegionId": "ff69b281-917e-4ebb-b1e0-f5dc1da297fa",\n  "name": "my-avalanche-node",\n  "resourceType": "avalancheNode",\n  "status": "pending",\n  "size": "small",\n  "ownerId": "287090ee-7fae-4bd7-9263-d690959edc26",\n  "projectId": "399b6f5b-eed2-4713-8b68-993643babfd0",\n  "created": "2023-11-10T17:03:21.545230",\n  "nodeIdSecretId": "4cc8f792-83af-475d-8be0-20c35efc1bd4",\n  "nodeConfig": {\n    "ansibleAvalancheCollectionVersion": "v0.8.9",\n    "isBootstrapNode": true,\n    "avalancheNodeConfig": {\n      "avalanchego_version": "1.10.10"\n    }\n  },\n  "nodeStatus": {\n    "running": false,\n    "bootstrapped": {\n      "all": false\n    },\n    "healthy": {\n      "all": false\n    },\n    "restartRequired": false\n  },\n  "nodeIp": "pending"\n}\n')))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," See ",(0,r.kt)("a",{parentName:"p",href:"/docs/console/reference/resource-management#resource-sizes"},"Resource sizes")," for a list of available resource sizes."),(0,r.kt)("h2",{id:"get-a-resource-and-its-status"},"Get a resource and its status"),(0,r.kt)("p",null,"A resource can be in one of the following statuses:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pending"),": the resource is pending for a machine to be allocated in the cloud region"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"configuring"),": the resource is being configured"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"running"),": the resource is running"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"stopped"),": the resource is stopped"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"error"),": the resource is in an error state"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"destroying"),": the resource is being destroyed")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can also provide the resource name instead of its ID.")),(0,r.kt)(o.Z,{groupId:"ash-console-client",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"ash-cli",label:"Using the Ash CLI",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"To get information about a resource, including its status, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"resource info")," command and provide the resource ID."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},"ash console resource info 70877036-e8df-4ad3-af95-c0f085a094a6\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"Resource '70877036-e8df-4ad3-af95-c0f085a094a6' of project '399b6f5b-eed2-4713-8b68-993643babfd0':\n+--------------------------------------+-------------------+---------------+--------------------------------------+-------+------------------+---------+------------------------------+\n| Resource ID                          | Name              | Type          | Cloud region ID                      | Size  | Created at       | Status  | Resource specific            |\n+======================================+===================+===============+======================================+=======+==================+=========+==============================+\n| 70877036-e8df-4ad3-af95-c0f085a094a6 | my-avalanche-node | AvalancheNode | ff69b281-917e-4ebb-b1e0-f5dc1da297fa | Small | 2023-11-10T16:41 | Running |  IP address   | 20.74.16.34  |\n|                                      |                   |               |                                      |       |                  |         |  Running      | true         |\n|                                      |                   |               |                                      |       |                  |         |  Bootstrapped | [false]      |\n|                                      |                   |               |                                      |       |                  |         |  Healthy      | [false]      |\n|                                      |                   |               |                                      |       |                  |         |  Restart req. | false        |\n+--------------------------------------+-------------------+---------------+--------------------------------------+-------+------------------+---------+------------------------------+\n"))),(0,r.kt)(l.Z,{value:"ash-api",label:"Using the Ash Console API",mdxType:"TabItem"},(0,r.kt)("p",null,"You can get information about a resource, including its status by sending a ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"projects/${projectId}/resources/${resourceId}")," endpoint:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},'curl https://api.console.ash.center/projects/399b6f5b-eed2-4713-8b68-993643babfd0/resources/157f2652-8282-4738-937f-b11e8dcb7f38 \\\n  -H "Authorization: Bearer ${access_token}"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Output"',title:'"Output"'},'{\n  "id": "157f2652-8282-4738-937f-b11e8dcb7f38",\n  "cloudRegionId": "ff69b281-917e-4ebb-b1e0-f5dc1da297fa",\n  "name": "my-avalanche-node",\n  "resourceType": "avalancheNode",\n  "status": "running",\n  "size": "small",\n  "ownerId": "287090ee-7fae-4bd7-9263-d690959edc26",\n  "projectId": "399b6f5b-eed2-4713-8b68-993643babfd0",\n  "created": "2023-11-10T17:03:21.545230",\n  "nodeIdSecretId": "4cc8f792-83af-475d-8be0-20c35efc1bd4",\n  "nodeConfig": {\n    "ansibleAvalancheCollectionVersion": "v0.8.9",\n    "isBootstrapNode": true,\n    "avalancheNodeConfig": {\n      "avalanchego_version": "1.10.10"\n    }\n  },\n  "nodeStatus": {\n    "running": true,\n    "bootstrapped": {\n      "all": false\n    },\n    "healthy": {\n      "all": false\n    },\n    "restartRequired": false\n  },\n  "nodeIp": "20.19.110.67"\n}\n')))),(0,r.kt)("h2",{id:"update-a-resource"},"Update a resource"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For some resource types, updates will not take effect until the resource is restarted. See ",(0,r.kt)("a",{parentName:"p",href:"#restart-a-resource"},"Restart a resource"),".")),(0,r.kt)(o.Z,{groupId:"ash-console-client",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"ash-cli",label:"Using the Ash CLI",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"The properties that can be updated ",(0,r.kt)("strong",{parentName:"p"},"depend on the resource type"),". For example, you can update an ",(0,r.kt)("inlineCode",{parentName:"p"},"avalancheNode")," resource's ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"nodeConfig"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},"ash console resource update my-avalanche-node '{name: my-avalanche-node-v2}'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"Resource updated successfully!\n+--------------------------------------+----------------------+---------------+--------------------------------------+-------+------------------+---------+------------------------------+\n| Resource ID                          | Name                 | Type          | Cloud region ID                      | Size  | Created at       | Status  | Resource specific            |\n+======================================+======================+===============+======================================+=======+==================+=========+==============================+\n| 70877036-e8df-4ad3-af95-c0f085a094a6 | my-avalanche-node-v2 | AvalancheNode | ff69b281-917e-4ebb-b1e0-f5dc1da297fa | Small | 2023-11-10T16:41 | Running |  IP address   | 20.74.16.34  |\n|                                      |                      |               |                                      |       |                  |         |  Running      | true         |\n|                                      |                      |               |                                      |       |                  |         |  Bootstrapped | [false]      |\n|                                      |                      |               |                                      |       |                  |         |  Healthy      | [false]      |\n|                                      |                      |               |                                      |       |                  |         |  Restart req. | false        |\n+--------------------------------------+----------------------+---------------+--------------------------------------+-------+------------------+---------+------------------------------+\n"))),(0,r.kt)(l.Z,{value:"ash-api",label:"Using the Ash Console API",mdxType:"TabItem"},(0,r.kt)("p",null,"The properties that can be updated ",(0,r.kt)("strong",{parentName:"p"},"depend on the resource type"),". For example, you can update an ",(0,r.kt)("inlineCode",{parentName:"p"},"avalancheNode")," resource's ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"nodeConfig")," by sending a ",(0,r.kt)("inlineCode",{parentName:"p"},"PATCH")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"projects/${projectId}/resources/${resourceId}")," endpoint:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},'curl -X PATCH https://api.console.ash.center/projects/399b6f5b-eed2-4713-8b68-993643babfd0/resources/my-avalanche-node \\\n  -H "Authorization: Bearer ${access_token}" \\\n  -H "Content-Type: application/json" \\\n  -d \'{"name": "my-avalanche-node-v2"}\'\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Output"',title:'"Output"'},'{\n  "id": "157f2652-8282-4738-937f-b11e8dcb7f38",\n  "cloudRegionId": "ff69b281-917e-4ebb-b1e0-f5dc1da297fa",\n  "name": "my-avalanche-node-v2",\n  "resourceType": "avalancheNode",\n  "status": "running",\n  "size": "small",\n  "ownerId": "287090ee-7fae-4bd7-9263-d690959edc26",\n  "projectId": "399b6f5b-eed2-4713-8b68-993643babfd0",\n  "created": "2023-11-10T17:03:21.545230",\n  "nodeIdSecretId": "4cc8f792-83af-475d-8be0-20c35efc1bd4",\n  "nodeConfig": {\n    "ansibleAvalancheCollectionVersion": "v0.8.9",\n    "isBootstrapNode": true,\n    "avalancheNodeConfig": {\n      "avalanchego_version": "1.10.10"\n    }\n  },\n  "nodeStatus": {\n    "running": true,\n    "bootstrapped": {\n      "all": false\n    },\n    "healthy": {\n      "all": false\n    },\n    "restartRequired": false\n  },\n  "nodeIp": "20.19.110.67"\n}\n')))),(0,r.kt)("h2",{id:"restart-a-resource"},"Restart a resource"),(0,r.kt)("p",null,"Restarting a resource will ",(0,r.kt)("strong",{parentName:"p"},"apply any pending configuration changes")," and is required if the resource has ",(0,r.kt)("inlineCode",{parentName:"p"},'"restartRequired": true')," in its status."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Restarting a resource will ",(0,r.kt)("strong",{parentName:"p"},"interrupt its service")," for a few seconds/minutes.")),(0,r.kt)(o.Z,{groupId:"ash-console-client",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"ash-cli",label:"Using the Ash CLI",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"The CLI will ask for confirmation before restarting the resource. To skip the confirmation, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--yes")," flag."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},"ash console resource restart 70877036-e8df-4ad3-af95-c0f085a094a6\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"Resource updated successfully!\n+--------------------------------------+----------------------+---------------+--------------------------------------+-------+------------------+---------+------------------------------+\n| Resource ID                          | Name                 | Type          | Cloud region ID                      | Size  | Created at       | Status  | Resource specific            |\n+======================================+======================+===============+======================================+=======+==================+=========+==============================+\n| 70877036-e8df-4ad3-af95-c0f085a094a6 | my-avalanche-node-v2 | AvalancheNode | ff69b281-917e-4ebb-b1e0-f5dc1da297fa | Small | 2023-11-10T16:41 | Running |  IP address   | 20.74.16.34  |\n|                                      |                      |               |                                      |       |                  |         |  Running      | true         |\n|                                      |                      |               |                                      |       |                  |         |  Bootstrapped | [false]      |\n|                                      |                      |               |                                      |       |                  |         |  Healthy      | [false]      |\n|                                      |                      |               |                                      |       |                  |         |  Restart req. | false        |\n+--------------------------------------+----------------------+---------------+--------------------------------------+-------+------------------+---------+------------------------------+\n"))),(0,r.kt)(l.Z,{value:"ash-api",label:"Using the Ash Console API",mdxType:"TabItem"},(0,r.kt)("p",null,"A resource can be restarted by sending a ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"projects/${projectId}/resources/${resourceId}/restart")," endpoint:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},'curl -X POST https://api.console.ash.center/projects/399b6f5b-eed2-4713-8b68-993643babfd0/resources/157f2652-8282-4738-937f-b11e8dcb7f38/restart \\\n  -H "Authorization: Bearer ${access_token}"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Output"',title:'"Output"'},'{\n  "id": "157f2652-8282-4738-937f-b11e8dcb7f38",\n  "cloudRegionId": "ff69b281-917e-4ebb-b1e0-f5dc1da297fa",\n  "name": "my-avalanche-node-v2",\n  "resourceType": "avalancheNode",\n  "status": "running",\n  "size": "small",\n  "ownerId": "287090ee-7fae-4bd7-9263-d690959edc26",\n  "projectId": "399b6f5b-eed2-4713-8b68-993643babfd0",\n  "created": "2023-11-10T17:03:21.545230",\n  "nodeIdSecretId": "4cc8f792-83af-475d-8be0-20c35efc1bd4",\n  "nodeConfig": {\n    "ansibleAvalancheCollectionVersion": "v0.8.9",\n    "isBootstrapNode": true,\n    "avalancheNodeConfig": {\n      "avalanchego_version": "1.10.10"\n    }\n  },\n  "nodeStatus": {\n    "running": true,\n    "bootstrapped": {\n      "all": false\n    },\n    "healthy": {\n      "all": false\n    },\n    "restartRequired": false\n  },\n  "nodeIp": "20.19.110.67"\n}\n')))),(0,r.kt)("h2",{id:"delete-a-resource"},"Delete a resource"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Removing a resource is not instantaneous"),". The resource will be in status ",(0,r.kt)("inlineCode",{parentName:"p"},"destroying")," for a few seconds/minutes before it is completely removed.")),(0,r.kt)(o.Z,{groupId:"ash-console-client",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"ash-cli",label:"Using the Ash CLI",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"The CLI will ask for confirmation before deleting the resource. To skip the confirmation, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--yes")," flag."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},"ash console resource delete 70877036-e8df-4ad3-af95-c0f085a094a6\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"> Are you sure you want to delete this resource? Yes\nResource deleted successfully!\n"))),(0,r.kt)(l.Z,{value:"ash-api",label:"Using the Ash Console API",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},'curl -X DELETE https://api.console.ash.center/projects/399b6f5b-eed2-4713-8b68-993643babfd0/resources/157f2652-8282-4738-937f-b11e8dcb7f38 \\\n  -H "Authorization: Bearer ${access_token}"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Output"',title:'"Output"'},'{\n  "id": "157f2652-8282-4738-937f-b11e8dcb7f38",\n  "cloudRegionId": "ff69b281-917e-4ebb-b1e0-f5dc1da297fa",\n  "name": "my-avalanche-node-v2",\n  "resourceType": "avalancheNode",\n  "status": "destroying",\n  "size": "small",\n  "ownerId": "287090ee-7fae-4bd7-9263-d690959edc26",\n  "projectId": "399b6f5b-eed2-4713-8b68-993643babfd0",\n  "created": "2023-11-10T17:03:21.545230",\n  "nodeIdSecretId": "4cc8f792-83af-475d-8be0-20c35efc1bd4",\n  "nodeConfig": {\n    "ansibleAvalancheCollectionVersion": "v0.8.9",\n    "isBootstrapNode": true,\n    "avalancheNodeConfig": {\n      "avalanchego_version": "1.10.10"\n    }\n  },\n  "nodeStatus": {\n    "running": true,\n    "bootstrapped": {\n      "all": false\n    },\n    "healthy": {\n      "all": false\n    },\n    "restartRequired": false\n  },\n  "nodeIp": "20.19.110.67"\n}\n')))),(0,r.kt)("h2",{id:"resource-sizes"},"Resource sizes"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"size")," property of a resource is used to determine ",(0,r.kt)("strong",{parentName:"p"},"the machine type")," to use. The available sizes depend on the cloud provider."),(0,r.kt)("p",null,"Here are the available sizes per resource type and their corresponding machine types in each cloud provider:"),(0,r.kt)("h3",{id:"avalanchenode"},"AvalancheNode"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Size"),(0,r.kt)("th",{parentName:"tr",align:null},"RAM"),(0,r.kt)("th",{parentName:"tr",align:null},"CPU"),(0,r.kt)("th",{parentName:"tr",align:null},"Disk"),(0,r.kt)("th",{parentName:"tr",align:null},"Azure VM type"),(0,r.kt)("th",{parentName:"tr",align:null},"AWS EC2 instance type"),(0,r.kt)("th",{parentName:"tr",align:null},"GCP machine type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"small")),(0,r.kt)("td",{parentName:"tr",align:null},"1-2GB"),(0,r.kt)("td",{parentName:"tr",align:null},"1-2"),(0,r.kt)("td",{parentName:"tr",align:null},"8-32 (OS) + 50 GiB (resource storage)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Standard_B1s")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"t2.micro")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"e2-small"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"medium")),(0,r.kt)("td",{parentName:"tr",align:null},"4GB"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"8-32 (OS) + 200 GiB (resource storage)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Standard_B2s")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"t2.medium")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"e2-medium"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"large")),(0,r.kt)("td",{parentName:"tr",align:null},"32GB"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"8-32 (OS) + 1000 GiB (resource storage)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Standard_B8ms")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"t2.2xlarge")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"e2-standard-8"))))))}f.isMDXComponent=!0}}]);