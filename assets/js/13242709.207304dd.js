"use strict";(self.webpackChunkash_docs=self.webpackChunkash_docs||[]).push([[3523],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:o,l[1]=s;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),o=n(6010);const a={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(a.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>N});var r=n(7462),o=n(7294),a=n(6010),l=n(2466),s=n(6550),i=n(1980),c=n(7392),u=n(12);function d(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:o}}=e;return{value:t,label:n,attributes:r,default:o}}))}function p(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(a),(0,o.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=p(e),[l,s]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[i,c]=f({queryString:n,groupId:r}),[d,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,u.Nk)(n);return[r,(0,o.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),h=(()=>{const e=i??d;return m({value:e,tabValues:a})?e:null})();(0,o.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),g(e)}),[c,g,a]),tabValues:a}}var h=n(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,n=u.indexOf(t),r=c[n].value;r!==s&&(d(t),i(r))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:l}=e;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:p},l,{className:(0,a.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":s===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:r}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function k(e){const t=g(e);return o.createElement("div",{className:(0,a.Z)("tabs-container",b.tabList)},o.createElement(v,(0,r.Z)({},e,t)),o.createElement(y,(0,r.Z)({},e,t)))}function N(e){const t=(0,h.Z)();return o.createElement(k,(0,r.Z)({key:String(t)},e))}},4935:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=n(7462),o=(n(7294),n(3905)),a=n(4866),l=n(5162);const s={sidebar_position:4},i="2. Cloud Credentials and Regions setup",c={unversionedId:"console/guides/fuji-node/cloud-region",id:"console/guides/fuji-node/cloud-region",title:"2. Cloud Credentials and Regions setup",description:"The Ash Console is currently in beta and not production-ready. It is under active development and subject to breaking changes.",source:"@site/docs/console/guides/fuji-node/cloud-region.md",sourceDirName:"console/guides/fuji-node",slug:"/console/guides/fuji-node/cloud-region",permalink:"/docs/console/guides/fuji-node/cloud-region",draft:!1,editUrl:"https://github.com/AshAvalanche/ash-docs/tree/main/docs/console/guides/fuji-node/cloud-region.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"consoleSidebar",previous:{title:"1. Project Creation",permalink:"/docs/console/guides/fuji-node/project"},next:{title:"3. Node ID / BLS key Secret Generation",permalink:"/docs/console/guides/fuji-node/node-id"}},u={},d=[{value:"Create a cloud credentials secret",id:"create-a-cloud-credentials-secret",level:2},{value:"Add a cloud region to the project",id:"add-a-cloud-region-to-the-project",level:2}],p={toc:d},m="wrapper";function f(e){let{components:t,...s}=e;return(0,o.kt)(m,(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"2-cloud-credentials-and-regions-setup"},"2. Cloud Credentials and Regions setup"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The Ash Console is currently in beta and ",(0,o.kt)("strong",{parentName:"p"},"not production-ready"),". It is under active development and subject to breaking changes.")),(0,o.kt)("h2",{id:"create-a-cloud-credentials-secret"},"Create a cloud credentials secret"),(0,o.kt)("p",null,"To ",(0,o.kt)("strong",{parentName:"p"},"deploy the Avalanche node ",(0,o.kt)("a",{parentName:"strong",href:"/docs/console/glossary#resource"},"resource")," into your cloud account/subscription/project"),", you need to provide the Console with appropriate credentials."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Follow the instructions provided in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/console/reference/cloud-credentials"},"Cloud Credentials reference")," to create a ",(0,o.kt)("strong",{parentName:"p"},"cloud credentials ",(0,o.kt)("a",{parentName:"strong",href:"/docs/console/glossary#secret"},"secret"))," in the Console. You can ",(0,o.kt)("strong",{parentName:"p"},"pick the cloud provider of your choice")," among: AWS, Azure, and Google Cloud (more coming soon).")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Save the secret ID")," for later use. You can always get it with the ",(0,o.kt)("inlineCode",{parentName:"p"},"console secret list")," command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ash console secret list\n")))),(0,o.kt)("h2",{id:"add-a-cloud-region-to-the-project"},"Add a cloud region to the project"),(0,o.kt)(a.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"console",label:"Using the Ash Console",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,"From the ",(0,o.kt)("a",{parentName:"p",href:"https://console.ash.center"},"Ash Console")," project overview page, navigate to the ",(0,o.kt)("strong",{parentName:"p"},"Cloud Regions")," tab:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click on the ",(0,o.kt)("inlineCode",{parentName:"li"},"Add Cloud Region")," button."),(0,o.kt)("li",{parentName:"ul"},"Select the cloud provider and region you want to use (see ",(0,o.kt)("a",{parentName:"li",href:"/docs/console/glossary#cloud-region"},"list of supported regions"),")."),(0,o.kt)("li",{parentName:"ul"},"Select the cloud credentials secret you created the previous step."),(0,o.kt)("li",{parentName:"ul"},"Click on the ",(0,o.kt)("inlineCode",{parentName:"li"},"Create")," button to add the cloud region to the project.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Ash Console cloud region create",src:n(5071).Z,width:"1172",height:"331"}))),(0,o.kt)(l.Z,{value:"cli",label:"Using the Ash CLI",mdxType:"TabItem"},(0,o.kt)("p",null,"Add a cloud region of your choice to the project with the ",(0,o.kt)("inlineCode",{parentName:"p"},"console region add")," (see ",(0,o.kt)("a",{parentName:"p",href:"/docs/console/glossary#cloud-region"},"list of supported regions"),")"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You need the ",(0,o.kt)("strong",{parentName:"p"},"name of the cloud credentials secret")," created above.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},"ash console region add '{\n  cloudProvider: azure,\n  region: francecentral,\n  cloudCredentialsSecretId: my-az-creds\n}'\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"Cloud region successfully added to project 'fuji-node-guide'!\n+---------------------+-------------+-----------------------+------------------+-----------+\n| Cloud region        | Region ID   | Cloud creds secret ID | Created at       | Status    |\n+=====================+=============+=======================+==================+===========+\n| azure/francecentral | 3975...8ab1 | f4f4...c596           | 2023-12-21T11:18 | Available |\n+---------------------+-------------+-----------------------+------------------+-----------+\n")))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"See the ",(0,o.kt)("a",{parentName:"p",href:"/docs/console/reference/resource-management"},"reference")," for more information about cloud regions lifecycle management.")))}f.isMDXComponent=!0},5071:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ash-console-create-cloud-region-bf932c972984e18a50a534062a58b4cf.png"}}]);