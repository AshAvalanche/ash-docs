"use strict";(self.webpackChunkash_docs=self.webpackChunkash_docs||[]).push([[2906],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(7462),r=n(7294),o=n(6010),l=n(2466),i=n(6550),s=n(1980),u=n(7392),c=n(12);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,u]=h({queryString:n,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),b=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var b=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==i&&(p(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function y(e){const t=(0,b.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}},997:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),o=n(4866),l=n(5162);const i={sidebar_position:4},s="2. Blueprint Configuration and Apply",u={unversionedId:"console/guides/blueprint/blueprint-configuration",id:"console/guides/blueprint/blueprint-configuration",title:"2. Blueprint Configuration and Apply",description:"The Ash Console is currently in alpha and not production-ready. It is under active development and subject to breaking changes.",source:"@site/docs/console/guides/blueprint/blueprint-configuration.md",sourceDirName:"console/guides/blueprint",slug:"/console/guides/blueprint/blueprint-configuration",permalink:"/docs/console/guides/blueprint/blueprint-configuration",draft:!1,editUrl:"https://github.com/AshAvalanche/ash-docs/tree/main/docs/console/guides/blueprint/blueprint-configuration.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"consoleSidebar",previous:{title:"1. Cloud Credentials Setup",permalink:"/docs/console/guides/blueprint/cloud-credentials"},next:{title:"3. Teardown",permalink:"/docs/console/guides/blueprint/teardown"}},c={},p=[{value:"Download the blueprint",id:"download-the-blueprint",level:2},{value:"Review the blueprint",id:"review-the-blueprint",level:2},{value:"Define environment variables",id:"define-environment-variables",level:2},{value:"Apply the blueprint",id:"apply-the-blueprint",level:2},{value:"Health",id:"health",level:2}],d={toc:p},m="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"2-blueprint-configuration-and-apply"},"2. Blueprint Configuration and Apply"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The Ash Console is currently in alpha and ",(0,r.kt)("strong",{parentName:"p"},"not production-ready"),". It is under active development and subject to breaking changes.")),(0,r.kt)("p",null,"We need to write a ",(0,r.kt)("a",{parentName:"p",href:"/docs/console/reference/blueprints"},"blueprint")," that defines all the entities needed to deploy a 5-node Avalanche devnet. For convenience, we have prepared the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ash-rs/blob/ash-console-alpha/crates/ash_cli/examples/console/blueprint/devnet.yml"},"devnet.yml")," blueprint for you."),(0,r.kt)("h2",{id:"download-the-blueprint"},"Download the blueprint"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If not already done, create a folder for this guide and navigate to it:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p ash-console-guides/one-command-devnet\ncd ash-console-guides/one-command-devnet\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ash-rs/blob/ash-console-alpha/crates/ash_cli/examples/console/blueprint/devnet.yml"},"devnet.yml")," blueprint from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ash-rs"},"ash-rs")," GitHub repository."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sSL https://raw.githubusercontent.com/AshAvalanche/ash-rs/ash-console-alpha/crates/ash_cli/examples/console/blueprint/devnet.yml -o devnet.yml\n")))),(0,r.kt)("h2",{id:"review-the-blueprint"},"Review the blueprint"),(0,r.kt)("p",null,"Let's take a look at the blueprint. You will see that it defines:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"5 ",(0,r.kt)("inlineCode",{parentName:"strong"},"nodeId")," secrets")," for the 5 nodes of our Avalanche devnet (the node IDs of a ",(0,r.kt)("inlineCode",{parentName:"li"},"local")," Avalanche network are hard-coded in AvalancheGo).",(0,r.kt)("br",{parentName:"li"}),"A ",(0,r.kt)("inlineCode",{parentName:"li"},"nodeId")," ",(0,r.kt)("a",{parentName:"li",href:"/docs/console/glossary#secret"},"secret")," contains the TLS keys and certificates for an Avalanche node:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"secrets:\n  - name: local-node-id-01\n    secretType: nodeId\n    nodeId: NodeID-7Xhw2mDxuDS44j42TCB6U5579esbSt3Lg\n    nodeCert: LS0tLS...\n    nodeKey: LS0tLS...\n  # ...\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"1 ",(0,r.kt)("a",{parentName:"strong",href:"/docs/console/glossary#project"},"project"))," named ",(0,r.kt)("inlineCode",{parentName:"li"},"ash-devnet")," and tied to the ",(0,r.kt)("inlineCode",{parentName:"li"},"local")," network. It is the ",(0,r.kt)("strong",{parentName:"li"},"logical set")," that will contain all the resources of our devnet:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"projects:\n  - project:\n      name: ash-devnet\n      network: local\n      sharedResourceConfig:\n        avalancheNodeConfig:\n          avalanchego_version: 1.10.17\n")),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The project also defines ",(0,r.kt)("inlineCode",{parentName:"p"},"sharedResourceConfig.avalancheNodeConfig")," that will be used by all the ",(0,r.kt)("inlineCode",{parentName:"p"},"avalancheNode")," resources of the project."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"1 ",(0,r.kt)("a",{parentName:"strong",href:"/docs/console/glossary#cloud-region"},"region"))," in the ",(0,r.kt)("inlineCode",{parentName:"li"},"ash-devnet")," project. We will deploy all our resources in this region.",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'regions:\n  - cloudProvider: "${CLOUD_PROVIDER}}"\n    region: "${CLOUD_REGION}"\n    cloudCredentialsSecretId: "${CLOUD_CREDENTIALS_SECRET}"\n')),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Here we ",(0,r.kt)("strong",{parentName:"p"},"reference environment variables")," that we will define in the ",(0,r.kt)("a",{parentName:"p",href:"#define-environment-variables"},"next section"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"5 ",(0,r.kt)("inlineCode",{parentName:"strong"},"avalancheNode")," ",(0,r.kt)("a",{parentName:"strong",href:"/docs/console/glossary#resource"},"resources"))," in the ",(0,r.kt)("inlineCode",{parentName:"li"},"ash-devnet")," project. Each ",(0,r.kt)("inlineCode",{parentName:"li"},"avalancheNode")," resource references a ",(0,r.kt)("inlineCode",{parentName:"li"},"nodeId")," secret:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'resources:\n  - name: local-node-01\n    resourceType: avalancheNode\n    cloudRegionId: "${CLOUD_PROVIDER}/${CLOUD_REGION}"\n    nodeIdSecretId: local-node-id-01\n    size: small\n  # ...\n')),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"We ",(0,r.kt)("strong",{parentName:"p"},"reference environment variables")," to determine to which cloud region the resources will be deployed. We will define these variables in the ",(0,r.kt)("a",{parentName:"p",href:"#define-environment-variables"},"next section"),".")))),(0,r.kt)("h2",{id:"define-environment-variables"},"Define environment variables"),(0,r.kt)("p",null,"A blueprint is ",(0,r.kt)("strong",{parentName:"p"},"very flexible thanks to the use of environment variables"),". Here we can dynamically specify the cloud provider, region, and cloud credentials secret ID. Let's define them depending on your cloud provider you set up in ",(0,r.kt)("a",{parentName:"p",href:"/docs/console/guides/blueprint/cloud-credentials"},"step 1"),":"),(0,r.kt)(o.Z,{groupId:"cloud-provider",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"aws",label:"Example for AWS",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export CLOUD_PROVIDER=aws\nexport CLOUD_REGION=us-east-1\nexport CLOUD_CREDENTIALS_SECRET=aws-credentials\n"))),(0,r.kt)(l.Z,{value:"azure",label:"Example for Azure",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export CLOUD_PROVIDER=azure\nexport CLOUD_REGION=westus\nexport CLOUD_CREDENTIALS_SECRET=azure-credentials\n"))),(0,r.kt)(l.Z,{value:"google",label:"Example for Google Cloud",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export CLOUD_PROVIDER=google\nexport CLOUD_REGION=us-central1\nexport CLOUD_CREDENTIALS_SECRET=google-credentials\n")))),(0,r.kt)("p",null,"Of course, pick the ",(0,r.kt)("inlineCode",{parentName:"p"},"CLOUD_REGION")," of your choice."),(0,r.kt)("h2",{id:"apply-the-blueprint"},"Apply the blueprint"),(0,r.kt)("p",null,"Everything is ready to deploy our devnet! Let's apply the blueprint:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},"ash console blueprint apply ./devnet.yml\n")),(0,r.kt)("p",null,"The CLI will ask you to confirm the action:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Confirmation prompt"',title:'"Confirmation','prompt"':!0},"Blueprint summary\nSecrets\n  5 to create: local-node-id-01, local-node-id-02, local-node-id-03, local-node-id-04, local-node-id-05\n  0 to update:\nProjects\n  1 to create:\n  - 'ash-devnet':\n      Regions: aws/us-east-1\n      Resources: local-node-01, local-node-02, local-node-03, local-node-04, local-node-05\n  0 to update:\n? Are you sure you want to apply this blueprint? (y/N)\n[This action is irreversible!]\n")),(0,r.kt)("p",null,"Enter ",(0,r.kt)("inlineCode",{parentName:"p"},"y")," and watch the magic happen!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"> Are you sure you want to apply this blueprint? Yes\nCreating entities...\nCreating secret: local-node-id-01\nSecret created successfully!\n+------------------+-------------+--------+------------------+---------+\n| Secret name      | Secret ID   | Type   | Created at       | Used by |\n+==================+=============+========+==================+=========+\n| local-node-id-01 | f906...0afc | NodeId | 2024-01-02T11:54 | 0       |\n+------------------+-------------+--------+------------------+---------+\n# ...\nCreating resource: ash-devnet:local-node-05\nResource successfully created in project 'ash-devnet'!\n+---------------+-------------+---------------+-----------------+-------+------------------+---------+--------------------------+\n| Resource name | Resource ID | Type          | Cloud region ID | Size  | Created at       | Status  | Resource specific        |\n+===============+=============+===============+=================+=======+==================+=========+==========================+\n| local-node-05 | cd99...0342 | AvalancheNode | 8d01...b4fc     | Small | 2024-01-02T11:56 | Pending |  IP address   | None     |\n|               |             |               |                 |       |                  |         |  Running      | false    |\n|               |             |               |                 |       |                  |         |  Bootstrapped | [false]  |\n|               |             |               |                 |       |                  |         |  Healthy      | [false]  |\n|               |             |               |                 |       |                  |         |  Restart req. | false    |\n+---------------+-------------+---------------+-----------------+-------+------------------+---------+--------------------------+\n")),(0,r.kt)("h2",{id:"health"},"Health"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"It will take a few minutes before the local network is ",(0,r.kt)("inlineCode",{parentName:"p"},"Bootstrapped")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Healthy"),". You can get its updated status with the ",(0,r.kt)("inlineCode",{parentName:"p"},"console resource info")," command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'}," ash console resource info avalanche-node-01\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"Resource 'avalanche-node-01' of project 'devnet-guide':\n+-------------------+-------------+---------------+-----------------+-------+------------------+---------+--------------------------------+\n| Resource name     | Resource ID | Type          | Cloud region ID | Size  | Created at       | Status  | Resource specific              |\n+===================+=============+===============+=================+========+==================+=========+================================+\n| avalanche-node-01 | 9419...6722 | AvalancheNode | 634d...c9d9     | Small | 2024-01-02T11:54 | Running |  IP address   | 3.210.183.166  |\n|                   |             |               |                 |       |                  |         |  Running      | true           |\n|                   |             |               |                 |       |                  |         |  Bootstrapped | [false]        |\n|                   |             |               |                 |       |                  |         |  Healthy      | [false]        |\n|                   |             |               |                 |       |                  |         |  Restart req. | false          |\n+-------------------+-------------+---------------+-----------------+-------+------------------+---------+--------------------------------+\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once a node is ",(0,r.kt)("inlineCode",{parentName:"p"},"Running"),", you can also query the node ",(0,r.kt)("inlineCode",{parentName:"p"},"info")," endpoint with the ",(0,r.kt)("inlineCode",{parentName:"p"},"avalanche node info")," command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},"ash avalanche node info -n 3.210.183.166\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'}," Node '3.210.183.166:9650':\n   ID:            NodeID-7Xhw2mDxuDS44j42TCB6U5579esbSt3Lg\n   Network:       local\n   Public IP:     3.210.183.166\n   Staking port:  9651\n   Versions:\n     AvalancheGo:  avalanche/1.10.17\n     Database:     v1.4.5\n     RPC Protocol: 28\n     Git commit:   145dfb0dc179d688f45ad44067ef6f9821148b36\n     VMs:\n       AvalancheVM: v1.10.17\n       Coreth:      v0.12.5\n       PlatformVM:  v1.10.17\n       Subnet VMs:  []\n   Uptime:\n     Rewarding stake:  100%\n     Weighted average: 100%\n")),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Your node IP address will be different.")))),(0,r.kt)("p",null,"Your local Avalanche network is now up and running!"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"See the ",(0,r.kt)("a",{parentName:"p",href:"/docs/console/reference/resource-management"},"reference")," for more information about resources lifecycle management.")))}h.isMDXComponent=!0}}]);