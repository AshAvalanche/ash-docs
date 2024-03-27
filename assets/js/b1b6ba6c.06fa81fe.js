"use strict";(self.webpackChunkash_docs=self.webpackChunkash_docs||[]).push([[8017],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,g=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(g,l(l({ref:t},u),{},{components:a})):n.createElement(g,l({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(7462),r=a(7294),o=a(6010),l=a(2466),s=a(6550),i=a(1980),c=a(7392),u=a(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=p(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[i,c]=g({queryString:a,groupId:n}),[d,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=i??d;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),b(e)}),[c,b,o]),tabValues:o}}var f=a(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:a,selectedValue:s,selectValue:i,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==s&&(d(t),i(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:p},l,{className:(0,o.Z)("tabs__item",h.tabItem,l?.className,{"tabs__item--active":s===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=b(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",h.tabList)},r.createElement(k,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},600:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>g,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=a(7462),r=(a(7294),a(3905)),o=a(4866),l=a(5162);const s={sidebar_position:5},i="Cloud Region Management",c={unversionedId:"console/reference/cloud-region-management",id:"console/reference/cloud-region-management",title:"Cloud Region Management",description:"The Ash Console is currently in alpha and not production-ready. It is under active development and subject to breaking changes.",source:"@site/docs/console/reference/cloud-region-management.md",sourceDirName:"console/reference",slug:"/console/reference/cloud-region-management",permalink:"/docs/console/reference/cloud-region-management",draft:!1,editUrl:"https://github.com/AshAvalanche/ash-docs/tree/main/docs/console/reference/cloud-region-management.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"consoleSidebar",previous:{title:"Secret Management",permalink:"/docs/console/reference/secret-management"},next:{title:"Resource Management",permalink:"/docs/console/reference/resource-management"}},u={},d=[{value:"List a project&#39;s cloud regions",id:"list-a-projects-cloud-regions",level:2},{value:"Add a cloud region to a project",id:"add-a-cloud-region-to-a-project",level:2},{value:"Remove a cloud region from a project",id:"remove-a-cloud-region-from-a-project",level:2}],p={toc:d},m="wrapper";function g(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cloud-region-management"},"Cloud Region Management"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The Ash Console is currently in alpha and ",(0,r.kt)("strong",{parentName:"p"},"not production-ready"),". It is under active development and subject to breaking changes.")),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/docs/console/glossary#resource"},"resources")," of a ",(0,r.kt)("a",{parentName:"p",href:"/docs/console/glossary#project"},"project")," are deployed across one or more ",(0,r.kt)("a",{parentName:"p",href:"/docs/console/glossary#cloud-region"},"cloud regions"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The Ash Console alpha supports ",(0,r.kt)("strong",{parentName:"p"},"AWS, Azure, and Google Cloud"),".")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Cloud regions live under a project"),". To manage cloud regions, you need to have ",(0,r.kt)("strong",{parentName:"p"},"at least one project"),"."),(0,r.kt)("p",{parentName:"admonition"},"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/console/reference/project-management"},"Project Management"),".")),(0,r.kt)("h2",{id:"list-a-projects-cloud-regions"},"List a project's cloud regions"),(0,r.kt)(o.Z,{groupId:"ash-console-client",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"ash-cli",label:"Using the Ash CLI",default:!0,mdxType:"TabItem"},(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The Ash CLI displays information in a table format by default. To get a more detailed output (or for scripting), use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--json")," flag.")),(0,r.kt)("p",null,"To list secrets you have access to, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},"ash console region list\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"Cloud regions of project 'f3cbcada-8ba7-4ce8-b0ef-e4874b24da2b':\n+-----------+----------------+--------------+-----------------------+------------+\n| Region ID | Cloud provider | Cloud region | Cloud creds secret ID | Created at |\n+===========+================+==============+=======================+============+\n+-----------+----------------+--------------+-----------------------+------------+\n"))),(0,r.kt)(l.Z,{value:"ash-api",label:"Using the Ash Console API",mdxType:"TabItem"},(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/console/reference/authentication?ash-console-auth-client=ash-api"},"Authentication")," for more information on how to get an access token.")),(0,r.kt)("p",null,"The secret API endpoint is ",(0,r.kt)("inlineCode",{parentName:"p"},"/project/${projectId}/regions"),".:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},'curl https://api.console.ash.center/projects/f3cbcada-8ba7-4ce8-b0ef-e4874b24da2b/regions \\\n  -H "Authorization: Bearer ${access_token}"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"[]\n")))),(0,r.kt)("h2",{id:"add-a-cloud-region-to-a-project"},"Add a cloud region to a project"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Prior to adding a cloud region, you need to ",(0,r.kt)("strong",{parentName:"p"},"create a ",(0,r.kt)("em",{parentName:"strong"},"cloud credentials")," secret"),". See ",(0,r.kt)("a",{parentName:"p",href:"/docs/console/reference/cloud-credentials"},"Cloud Credentials")," for how to create appropriate credentials for each cloud provider.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can also provide the cloud credentials secret name instead of its ID in the ",(0,r.kt)("inlineCode",{parentName:"p"},"cloudCredentialsSecretId")," field.")),(0,r.kt)(o.Z,{groupId:"ash-console-client",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"ash-cli",label:"Using the Ash CLI",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"To add a cloud region to the current project, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"region add")," command and provide the required secret properties as JSON:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},"ash console region add '{cloudProvider: aws, region: us-east-1, cloudCredentialsSecretId: 4447cba1-e43c-45a4-8a9d-dbebef81bac1}'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"Cloud region successfully added to project 'f3cbcada-8ba7-4ce8-b0ef-e4874b24da2b'!\n+--------------------------------------+----------------+--------------+-----------------------+------------------+\n| Region ID                            | Cloud provider | Cloud region | Cloud creds secret ID | Created at       |\n+======================================+================+==============+=======================+==================+\n| 0c102d85-4e75-414d-abfe-b0679ab0adc7 | aws            | us-east-1    | 4447...bac1           | 2023-11-07T16:52 |\n+--------------------------------------+----------------+--------------+-----------------------+------------------+\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"ash console region available")," to get the list of regions available for each cloud provider."))),(0,r.kt)(l.Z,{value:"ash-api",label:"Using the Ash Console API",mdxType:"TabItem"},(0,r.kt)("p",null,"To create a new secret, you have to send a ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," request with the required secret properties as JSON:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},'curl -X POST https://api.console.ash.center/projects/f3cbcada-8ba7-4ce8-b0ef-e4874b24da2b/regions \\\n  -H "Authorization: Bearer ${access_token}" \\\n  -H "Content-Type: application/json" \\\n  -d \'{"cloudProvider": "aws", "region": "us-east-2", "cloudCredentialsSecretId": "4447cba1-e43c-45a4-8a9d-dbebef81bac1"}\'\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Output"',title:'"Output"'},'{\n  "cloudCredentialsSecretId": "4447cba1-e43c-45a4-8a9d-dbebef81bac1",\n  "cloudProvider": "aws",\n  "created": "2023-11-07T16:54:27.662311",\n  "id": "89b64711-8cf8-4634-8433-10652efecb95",\n  "name": "aws/us-east-2",\n  "ownerId": "287090ee-7fae-4bd7-9263-d690959edc26",\n  "projectId": "f3cbcada-8ba7-4ce8-b0ef-e4874b24da2b",\n  "region": "us-east-2",\n  "status": "available"\n}\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"/regions")," endpoint to get the list of regions available for each cloud provider.")))),(0,r.kt)("h2",{id:"remove-a-cloud-region-from-a-project"},"Remove a cloud region from a project"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Removing a region from a project will recursively delete ",(0,r.kt)("strong",{parentName:"p"},"all the resources")," that belong to it!")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Removing a cloud region is not instantaneous"),". The cloud region will be in status ",(0,r.kt)("inlineCode",{parentName:"p"},"destroying")," for a few seconds/minutes before it is completely removed.")),(0,r.kt)(o.Z,{groupId:"ash-console-client",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"ash-cli",label:"Using the Ash CLI",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"The CLI will ask for confirmation before deleting the secret. To skip the confirmation, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--yes")," flag."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},"ash console region remove aws/us-east-1\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"> Are you sure you want to remove this region? Yes\nCloud region removed successfully!\n"))),(0,r.kt)(l.Z,{value:"ash-api",label:"Using the Ash Console API",mdxType:"TabItem"},(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," in the region name is replaced with ",(0,r.kt)("inlineCode",{parentName:"p"},"_")," in the API endpoint:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},'curl -X DELETE https://api.console.ash.center/projects/f3cbcada-8ba7-4ce8-b0ef-e4874b24da2b/regions/aws_us-east-2 \\\n  -H "Authorization: Bearer ${access_token}"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},'{\n  "cloudCredentialsSecretId": "4447cba1-e43c-45a4-8a9d-dbebef81bac1",\n  "cloudProvider": "aws",\n  "created": "2023-11-07T16:54:27.662311",\n  "id": "89b64711-8cf8-4634-8433-10652efecb95",\n  "name": "aws/us-east-2",\n  "ownerId": "287090ee-7fae-4bd7-9263-d690959edc26",\n  "projectId": "f3cbcada-8ba7-4ce8-b0ef-e4874b24da2b",\n  "region": "us-east-2",\n  "status": "available"\n}\n')))))}g.isMDXComponent=!0}}]);