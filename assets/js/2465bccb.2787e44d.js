"use strict";(self.webpackChunkash_docs=self.webpackChunkash_docs||[]).push([[9691],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),i=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=i(n),m=r,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||s;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var i=2;i<s;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const s={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,o),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>T});var a=n(7462),r=n(7294),s=n(6010),o=n(2466),l=n(6550),c=n(1980),i=n(7392),u=n(12);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=d(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[c,i]=h({queryString:n,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),g=(()=>{const e=c??p;return m({value:e,tabValues:s})?e:null})();(0,r.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),i(e),f(e)}),[i,f,s]),tabValues:s}}var g=n(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:l,selectValue:c,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=i[n].value;a!==l&&(p(t),c(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t)},i.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},o,{className:(0,s.Z)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":l===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=f(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",b.tabList)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function T(e){const t=(0,g.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},8680:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),s=n(4866),o=n(5162);const l={sidebar_position:4},c="Secret Management",i={unversionedId:"console/reference/secret-management",id:"console/reference/secret-management",title:"Secret Management",description:"The Ash Console is currently in alpha and not production-ready. It is under active development and subject to breaking changes.",source:"@site/docs/console/reference/secret-management.md",sourceDirName:"console/reference",slug:"/console/reference/secret-management",permalink:"/docs/console/reference/secret-management",draft:!1,editUrl:"https://github.com/AshAvalanche/ash-docs/tree/main/docs/console/reference/secret-management.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"consoleSidebar",previous:{title:"Project Management",permalink:"/docs/console/reference/project-management"},next:{title:"Cloud Region Management",permalink:"/docs/console/reference/cloud-region-management"}},u={},p=[{value:"Types of secrets",id:"types-of-secrets",level:2},{value:"List secrets",id:"list-secrets",level:2},{value:"Create a secret",id:"create-a-secret",level:2},{value:"Update a secret",id:"update-a-secret",level:2},{value:"Delete a secret",id:"delete-a-secret",level:2}],d={toc:p},m="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"secret-management"},"Secret Management"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The Ash Console is currently in alpha and ",(0,r.kt)("strong",{parentName:"p"},"not production-ready"),". It is under active development and subject to breaking changes.")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/console/glossary#secret"},"Secrets")," are used at different steps of an Appchain deployment through the Ash Console."),(0,r.kt)("h2",{id:"types-of-secrets"},"Types of secrets"),(0,r.kt)("p",null,"There are several types of secrets, each with a different purpose. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/console/glossary#secret"},"Secret")," for more information."),(0,r.kt)("h2",{id:"list-secrets"},"List secrets"),(0,r.kt)(s.Z,{groupId:"ash-console-client",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"ash-cli",label:"Using the Ash CLI",default:!0,mdxType:"TabItem"},(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The Ash CLI displays information in a table format by default. To get a more detailed output (or for scripting), use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--json")," flag.")),(0,r.kt)("p",null,"To list secrets you have access to, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},"ash console secret list\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"+-----------+----------+------+------+------------+---------+\n| Secret ID | Owner ID | Name | Type | Created at | Used by |\n+===========+==========+======+======+============+=========+\n+-----------+----------+------+------+------------+---------+\n"))),(0,r.kt)(o.Z,{value:"ash-api",label:"Using the Ash Console API",mdxType:"TabItem"},(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/console/reference/authentication?ash-console-auth-client=ash-api"},"Authentication")," for more information on how to get an access token.")),(0,r.kt)("p",null,"The secret API endpoint is ",(0,r.kt)("inlineCode",{parentName:"p"},"/secrets"),".:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},'curl https://api.console.ash.center/secrets \\\n  -H "Authorization: Bearer ${access_token}"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"[]\n")))),(0,r.kt)("h2",{id:"create-a-secret"},"Create a secret"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"A secret ",(0,r.kt)("strong",{parentName:"p"},"sensitive values can never be retrieved")," from the Ash Console! Make sure to ",(0,r.kt)("strong",{parentName:"p"},"keep a copy")," in a safe place.")),(0,r.kt)(s.Z,{groupId:"ash-console-client",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"ash-cli",label:"Using the Ash CLI",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"To create a new secret, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"create secret")," command and provide the required secret properties as JSON:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},'ash console secret create \'{"name": "my-secret", "secretType": "generic", "content": "***"}\'\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"Secret created successfully!\n+--------------------------------------+-------------+-----------+---------+------------------+---------+\n| Secret ID                            | Owner ID    | Name      | Type    | Created at       | Used by |\n+======================================+=============+===========+=========+==================+=========+\n| ed8a3653-b6cc-4cd4-899f-ceee4159f545 | 2870...dc26 | my-secret | Generic | 2023-10-30T21:58 | 0       |\n+--------------------------------------+-------------+-----------+---------+------------------+---------+\n"))),(0,r.kt)(o.Z,{value:"ash-api",label:"Using the Ash Console API",mdxType:"TabItem"},(0,r.kt)("p",null,"To create a new secret, you have to send a ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," request with the required secret properties as JSON:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},'curl -X POST https://api.console.ash.center/secrets \\\n  -H "Authorization: Bearer ${access_token}" \\\n  -H "Content-Type: application/json" \\\n  -d \'{"name": "my-secret", "secretType": "generic", "content": "***"}\'\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Output"',title:'"Output"'},'{\n  "content": "**********",\n  "created": "2023-10-30T22:16:41.870842",\n  "id": "465a6c24-5640-46d4-963f-98c0990484e1",\n  "name": "my-secret",\n  "ownerId": "287090ee-7fae-4bd7-9263-d690959edc26",\n  "secretType": "generic",\n  "usedBy": {}\n}\n')))),(0,r.kt)("h2",{id:"update-a-secret"},"Update a secret"),(0,r.kt)(s.Z,{groupId:"ash-console-client",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"ash-cli",label:"Using the Ash CLI",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"The properties that can be updated ",(0,r.kt)("strong",{parentName:"p"},"depend on the secret type"),". For example, you can update a ",(0,r.kt)("inlineCode",{parentName:"p"},"generic")," secret's ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"content"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},'ash console secret update ed8a3653-b6cc-4cd4-899f-ceee4159f545 \'{"name": "my-secret-updated", "content": "****"}\'\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"Secret updated successfully!\n+--------------------------------------+-------------+-------------------+---------+------------------+---------+\n| Secret ID                            | Owner ID    | Name              | Type    | Created at       | Used by |\n+======================================+=============+===================+=========+==================+=========+\n| ed8a3653-b6cc-4cd4-899f-ceee4159f545 | 2870...dc26 | my-secret-updated | Generic | 2023-10-30T21:58 | 0       |\n+--------------------------------------+-------------+-------------------+---------+------------------+---------+\n"))),(0,r.kt)(o.Z,{value:"ash-api",label:"Using the Ash Console API",mdxType:"TabItem"},(0,r.kt)("p",null,"The properties that can be updated ",(0,r.kt)("strong",{parentName:"p"},"depend on the secret type"),". For example, you can update a ",(0,r.kt)("inlineCode",{parentName:"p"},"generic")," secret's ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"content")," by sending a ",(0,r.kt)("inlineCode",{parentName:"p"},"PATCH")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"secrets/${secretId}")," endpoint:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},'curl -X PATCH https://api.console.ash.center/secrets/465a6c24-5640-46d4-963f-98c0990484e1 \\\n  -H "Authorization: Bearer ${access_token}" \\\n  -H "Content-Type: application/json" \\\n  -d \'{"name": "my-secret-updated", "content": "****"}\'\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Output"',title:'"Output"'},'{\n  "content": "**********",\n  "created": "2023-10-30T22:16:41.870842",\n  "id": "465a6c24-5640-46d4-963f-98c0990484e1",\n  "name": "my-secret-updated",\n  "ownerId": "287090ee-7fae-4bd7-9263-d690959edc26",\n  "secretType": "generic",\n  "usedBy": {}\n}\n')))),(0,r.kt)("h2",{id:"delete-a-secret"},"Delete a secret"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Deleting a secret is not allowed if it used by another entity.")),(0,r.kt)(s.Z,{groupId:"ash-console-client",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"ash-cli",label:"Using the Ash CLI",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"The CLI will ask for confirmation before deleting the secret. To skip the confirmation, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--yes")," flag."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},"ash console secret delete ed8a3653-b6cc-4cd4-899f-ceee4159f545\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"> Are you sure you want to delete this secret? Yes\nSecret deleted successfully!\n"))),(0,r.kt)(o.Z,{value:"ash-api",label:"Using the Ash Console API",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},'curl -X DELETE https://api.console.ash.center/secrets/465a6c24-5640-46d4-963f-98c0990484e1 \\\n  -H "Authorization: Bearer ${access_token}"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},'{\n  "content": "**********",\n  "created": "2023-10-30T23:23:23.883772",\n  "id": "465a6c24-5640-46d4-963f-98c0990484e1",\n  "name": "my-secret",\n  "ownerId": "287090ee-7fae-4bd7-9263-d690959edc26",\n  "secretType": "generic",\n  "usedBy": {}\n}\n')))))}h.isMDXComponent=!0}}]);