"use strict";(self.webpackChunkash_docs=self.webpackChunkash_docs||[]).push([[3032],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),i=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=i(a),m=r,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var i=2;i<o;i++)l[i]=a[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(7462),r=a(7294),o=a(6010),l=a(2466),s=a(6550),c=a(1980),i=a(7392),u=a(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,c._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=d(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[c,i]=h({queryString:a,groupId:n}),[p,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),b=(()=>{const e=c??p;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),i(e),g(e)}),[i,g,o]),tabValues:o}}var b=a(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:a,selectedValue:s,selectValue:c,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),n=i[a].value;n!==s&&(p(t),c(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},i.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":s===t})}),a??t)})))}function j(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f.tabList)},r.createElement(k,(0,n.Z)({},e,t)),r.createElement(j,(0,n.Z)({},e,t)))}function v(e){const t=(0,b.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},9491:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905)),o=a(4866),l=a(5162);const s={sidebar_position:4},c="Project Management",i={unversionedId:"console/reference/project-management",id:"console/reference/project-management",title:"Project Management",description:"UPDATE: The Ash Console open beta has ended. Looking to launch your Avalanche L1? See our latest Ash Managed L1s offer announcement!",source:"@site/docs/console/reference/project-management.md",sourceDirName:"console/reference",slug:"/console/reference/project-management",permalink:"/docs/console/reference/project-management",draft:!1,editUrl:"https://github.com/AshAvalanche/ash-docs/tree/main/docs/console/reference/project-management.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"consoleSidebar",previous:{title:"Cloud Credentials",permalink:"/docs/console/reference/cloud-credentials"},next:{title:"Secret Management",permalink:"/docs/console/reference/secret-management"}},u={},p=[{value:"List projects",id:"list-projects",level:2},{value:"Create a project",id:"create-a-project",level:2},{value:"Select the current project (CLI only)",id:"select-the-current-project-cli-only",level:2},{value:"Update a project",id:"update-a-project",level:2},{value:"Delete a project",id:"delete-a-project",level:2}],d={toc:p},m="wrapper";function h(e){let{components:t,...s}=e;return(0,r.kt)(m,(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"project-management"},"Project Management"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"UPDATE"),": The Ash Console open beta has ended. Looking to launch your Avalanche L1? See our latest ",(0,r.kt)("a",{parentName:"p",href:"https://ashavax.hashnode.dev/announcing-ash-managed-l1s-and-avalanche-builder-credits"},"Ash Managed L1s offer announcement"),"!")),(0,r.kt)("p",null,"The first step for an Ash Console user is to create a ",(0,r.kt)("a",{parentName:"p",href:"/docs/console/glossary#project"},"project"),": a logical set of ",(0,r.kt)("a",{parentName:"p",href:"/docs/console/glossary#resource"},"resources")," that are deployed in ",(0,r.kt)("a",{parentName:"p",href:"/docs/console/glossary#cloud-region"},"cloud regions"),"."),(0,r.kt)("h2",{id:"list-projects"},"List projects"),(0,r.kt)(o.Z,{groupId:"ash-console-client",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"ash-console",label:"Using the Ash Console",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"  To list projects, navigate to the ",(0,r.kt)("a",{parentName:"p",href:"https://console.ash.center"},"Ash Console")," home page:"),(0,r.kt)("p",null,"  ",(0,r.kt)("img",{alt:"Ash Console Home Page",src:a(3978).Z,width:"771",height:"282"}))),(0,r.kt)(l.Z,{value:"ash-cli",label:"Using the Ash CLI",mdxType:"TabItem"},(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The Ash CLI displays information in a table format by default. To get a more detailed output (or for scripting), use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--json")," flag.")),(0,r.kt)("p",null,"To list projects you have access to, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},"ash console project list\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"+--------------+------------+---------+---------------+-----------+------------+\n| Project name | Project ID | Network | Cloud regions | Resources | Created at |\n+==============+============+=========+===============+===========+============+\n+--------------+------------+---------+---------------+-----------+------------+\n"))),(0,r.kt)(l.Z,{value:"ash-api",label:"Using the Ash Console API",mdxType:"TabItem"},(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/console/reference/authentication?ash-console-auth-client=ash-api"},"Authentication")," for more information on how to get an access token.")),(0,r.kt)("p",null,"The project API endpoint is ",(0,r.kt)("inlineCode",{parentName:"p"},"/projects"),".:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},'curl https://api.console.ash.center/projects \\\n  -H "Authorization: Bearer ${access_token}"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"[]\n")))),(0,r.kt)("h2",{id:"create-a-project"},"Create a project"),(0,r.kt)(o.Z,{groupId:"ash-console-client",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"ash-console",label:"Using the Ash Console",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"  To create a project, navigate to the ",(0,r.kt)("a",{parentName:"p",href:"https://console.ash.center"},"Ash Console")," home page and click on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Create a project")," button:"),(0,r.kt)("p",null,"  ",(0,r.kt)("img",{alt:"Ash Console Project Create",src:a(6461).Z,width:"1274",height:"779"}))),(0,r.kt)(l.Z,{value:"ash-cli",label:"Using the Ash CLI",mdxType:"TabItem"},(0,r.kt)("p",null,"To create a new project, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"create project")," command and provide the required project properties as JSON:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},"ash console project create '{name: my-devnet-project, network: local}'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"Project created successfully!\n+-------------------+-------------+---------+---------------+-----------+------------------+\n| Project name      | Project ID  | Network | Cloud regions | Resources | Created at       |\n+===================+=============+=========+===============+===========+==================+\n| my-devnet-project | d11f...453e | Local   |               |           | 2024-04-04T15:04 |\n+-------------------+-------------+---------+---------------+-----------+------------------+\n\nSwitched to project 'my-devnet-project' (d11ff0c8-8f09-4991-9832-bd79df9b453e)!\n"))),(0,r.kt)(l.Z,{value:"ash-api",label:"Using the Ash Console API",mdxType:"TabItem"},(0,r.kt)("p",null,"To create a new project, you have to send a ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," request with the required project properties as JSON:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},'curl -X POST https://api.console.ash.center/projects \\\n  -H "Authorization: Bearer ${access_token}" \\\n  -H "Content-Type: application/json" \\\n  -d \'{"name": "my-devnet-project", "network": "local"}\'\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Output"',title:'"Output"'},'{\n  "id": "5064c6a6-1542-43d9-b8bb-9ce9502347ff", \n  "ownerId": "4d4dee2d-e943-432c-91ee-678975615caa", \n  "name": "my-devnet-project", \n  "network": "local", \n  "sharedResourceConfig": {"avalancheNodeConfig": {}}, \n  "created": "2024-04-04T15:15:10.022849", \n  "cloudRegionsIds": {}, \n  "resourcesIds": {}\n}\n')))),(0,r.kt)("h2",{id:"select-the-current-project-cli-only"},"Select the current project (CLI only)"),(0,r.kt)(o.Z,{groupId:"ash-console-client",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"ash-cli",label:"Using the Ash CLI",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"The Ash CLI stores the current project in a configuration file. This project will be used by default for all the commands that require a project (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"console region ..."),")."),(0,r.kt)("p",null,"To show the current project, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},"ash console project show\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"Current project: 'my-devnet-project' (5064c6a6-1542-43d9-b8bb-9ce9502347ff)\n")),(0,r.kt)("p",null,"You can switch between projects:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},"ash console project select my-devnet-project\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"Switched to project 'my-devnet-project' (5064c6a6-1542-43d9-b8bb-9ce9502347ff)!\n"))),(0,r.kt)(l.Z,{value:"ash-api",label:"Using the Ash Console API",mdxType:"TabItem"},(0,r.kt)("p",null,"This feature does not exist in the Ash Console API."))),(0,r.kt)("h2",{id:"update-a-project"},"Update a project"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can also provide the project name instead of its ID.")),(0,r.kt)(o.Z,{groupId:"ash-console-client",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"ash-console",label:"Using the Ash Console",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"  To update a project's configuration, navigate to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Project overview")," page and click on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Project Settings")," button:"),(0,r.kt)("p",null,"  ",(0,r.kt)("img",{alt:"Ash Console Project settings",src:a(2140).Z,width:"1274",height:"470"})),(0,r.kt)("p",null,"  Edit the configuration as needed and click on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Update")," button.")),(0,r.kt)(l.Z,{value:"ash-cli",label:"Using the Ash CLI",mdxType:"TabItem"},(0,r.kt)("p",null,"The only propery that can be updated is the project name:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},"ash console project update 5064c6a6-1542-43d9-b8bb-9ce9502347ff '{name: my-devnet-project-updated}'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"Project updated successfully!\n+---------------------------+-------------+---------+---------------+-----------+------------------+\n| Project name              | Project ID  | Network | Cloud regions | Resources | Created at       |\n+===========================+=============+=========+===============+===========+==================+\n| my-devnet-project-updated | 5064...47ff | Local   |               |           | 2024-04-04T15:15 |\n+---------------------------+-------------+---------+---------------+-----------+------------------+\n"))),(0,r.kt)(l.Z,{value:"ash-api",label:"Using the Ash Console API",mdxType:"TabItem"},(0,r.kt)("p",null,"The only propery that can be updated is the project name by sending a ",(0,r.kt)("inlineCode",{parentName:"p"},"PATCH")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"projects/${projectId}")," endpoint:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},'curl -X PATCH https://api.console.ash.center/projects/5064c6a6-1542-43d9-b8bb-9ce9502347ff \\\n  -H "Authorization: Bearer ${access_token}" \\\n  -H "Content-Type: application/json" \\\n  -d \'{"name": "my-devnet-project-updated"}\'\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Output"',title:'"Output"'},'{\n  "id": "5064c6a6-1542-43d9-b8bb-9ce9502347ff", \n  "ownerId": "4d4dee2d-e943-432c-91ee-678975615caa", \n  "name": "my-devnet-project-updated", \n  "network": "local", \n  "sharedResourceConfig": {"avalancheNodeConfig": {}}, \n  "created": "2024-04-04T15:15:10.022849", \n  "cloudRegionsIds": {}, \n  "resourcesIds": {}\n}\n')))),(0,r.kt)("h2",{id:"delete-a-project"},"Delete a project"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Deleting a project will recursively delete ",(0,r.kt)("strong",{parentName:"p"},"all the cloud regions and resources")," that belong to it!")),(0,r.kt)(o.Z,{groupId:"ash-console-client",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"ash-console",label:"Using the Ash Console",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"  To delete a project, navigate to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Project overview")," page and click on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Project Settings")," button:"),(0,r.kt)("p",null,"  ",(0,r.kt)("img",{alt:"Ash Console Project delete",src:a(2140).Z,width:"1274",height:"470"})),(0,r.kt)("p",null,"  You can delete the project by clicking on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Delete")," button.")),(0,r.kt)(l.Z,{value:"ash-cli",label:"Using the Ash CLI",mdxType:"TabItem"},"The CLI will ask for confirmation before deleting the project. To skip the confirmation, use the `--yes` flag.",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},"ash console project delete my-devnet-project-updated\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"> Are you sure you want to delete this project? Yes\nProject deleted successfully!\n"))),(0,r.kt)(l.Z,{value:"ash-api",label:"Using the Ash Console API",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},'curl -X DELETE https://api.console.ash.center/projects/my-devnet-project-updated \\\n  -H "Authorization: Bearer ${access_token}"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},'{\n  "id": "5064c6a6-1542-43d9-b8bb-9ce9502347ff", \n  "ownerId": "4d4dee2d-e943-432c-91ee-678975615caa", \n  "name": "my-devnet-project-updated", \n  "network": "local", \n  "sharedResourceConfig": {"avalancheNodeConfig": {}}, \n  "created": "2024-04-04T15:15:10.022849", \n  "cloudRegionsIds": {}, \n  "resourcesIds": {}\n}\n')))))}h.isMDXComponent=!0},6461:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ash-console-fuji-project-create-ba92afc79913761a53aca375962864ed.png"},3978:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ash-console-project-list-47375c32114b7ec4a5a84b10cb9b84bf.png"},2140:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ash-console-project-settings-a9218a4c38e48197fa117d7ea1b21f25.png"}}]);