"use strict";(self.webpackChunkash_docs=self.webpackChunkash_docs||[]).push([[7294],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>N});var a=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=l,N=m["".concat(p,".").concat(d)]||m[d]||k[d]||i;return n?a.createElement(N,r(r({ref:t},u),{},{components:n})):a.createElement(N,r({ref:t},u))}));function N(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:l,r[1]=o;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1044:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(7605),l=(n(9496),n(9613));const i={sidebar_position:5},r="Glossary",o={unversionedId:"console/glossary",id:"console/glossary",title:"Glossary",description:"This section define the terms used in the Ash Console.",source:"@site/docs/console/glossary.md",sourceDirName:"console",slug:"/console/glossary",permalink:"/docs/console/glossary",draft:!1,editUrl:"https://github.com/AshAvalanche/ash-docs/tree/main/docs/console/glossary.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"consoleSidebar",previous:{title:"Console Blueprints",permalink:"/docs/console/reference/blueprints"}},p={},s=[{value:"User",id:"user",level:2},{value:"Organization",id:"organization",level:2},{value:"Role",id:"role",level:2},{value:"Operation",id:"operation",level:2},{value:"Secret",id:"secret",level:2},{value:"Project",id:"project",level:2},{value:"Cloud Region",id:"cloud-region",level:2},{value:"Resource",id:"resource",level:2}],u={toc:s},m="wrapper";function k(e){let{components:t,...n}=e;return(0,l.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"glossary"},"Glossary"),(0,l.kt)("p",null,"This section define the terms used in the Ash Console."),(0,l.kt)("h2",{id:"user"},"User"),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"User")," who interacts with the Ash Console, either through the Console Website, the Ash CLI, or the Console REST API."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Every Console entity is owned by a single ",(0,l.kt)("inlineCode",{parentName:"strong"},"User"),".")),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("code",null,"User")," properties"),(0,l.kt)("div",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"id: UUID4\nusername: str\nfirstname: str\nlastname: str\nemail: str\n")))),(0,l.kt)("h2",{id:"organization"},"Organization"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Not implemented in alpha")),(0,l.kt)("p",null,"A group of ",(0,l.kt)("inlineCode",{parentName:"p"},"User"),"s that collaborate on the same ",(0,l.kt)("inlineCode",{parentName:"p"},"Project"),"s."),(0,l.kt)("p",null,"The owner of the ",(0,l.kt)("inlineCode",{parentName:"p"},"Organization")," can add other ",(0,l.kt)("inlineCode",{parentName:"p"},"User"),"s and give them ",(0,l.kt)("inlineCode",{parentName:"p"},"Role"),"s."),(0,l.kt)("h2",{id:"role"},"Role"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Not implemented in alpha")),(0,l.kt)("p",null,"A set of permissions granted to ",(0,l.kt)("inlineCode",{parentName:"p"},"User"),"s that have this role."),(0,l.kt)("h2",{id:"operation"},"Operation"),(0,l.kt)("p",null,"Any ",(0,l.kt)("inlineCode",{parentName:"p"},"User")," query made on the Console triggers an ",(0,l.kt)("inlineCode",{parentName:"p"},"Operation")," that is logged."),(0,l.kt)("p",null,"Examples of operation types: ",(0,l.kt)("inlineCode",{parentName:"p"},"ProjectAPI.create_project"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"SecretAPI.get_all_secrets")),(0,l.kt)("p",null,"An ",(0,l.kt)("inlineCode",{parentName:"p"},"Operation")," can result in ",(0,l.kt)("inlineCode",{parentName:"p"},"success")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"failure"),"."),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("code",null,"Operation")," properties"),(0,l.kt)("div",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"id: UUID4\nowner_id: UUID4 # The user who performed the operation\nlogged: datetime\ntarget_type: str\ntarget_id: UUID4 | None # Can be None if the operation is not related to a specific item\ntarget_value: str | None\noperation_type: str\nargs: List[str]\nkwargs: Dict[str, str]\nresult: OperationResult\nerror_msg: str | None\n")))),(0,l.kt)("h2",{id:"secret"},"Secret"),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"Secret")," is an encrypted piece of information which can be used in:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Resource"),"s configuration keys"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CloudRegion"),"s creation"),(0,l.kt)("li",{parentName:"ul"},"A ",(0,l.kt)("inlineCode",{parentName:"li"},"Secret")," can be one of:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"generic"),": contains any arbitrary value"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"wallet"),": contains a wallet's private key, used to sign transactions"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"nodeId"),": contains a ",(0,l.kt)("a",{parentName:"li",href:"https://docs.avax.network/nodes/maintain/node-backup-and-restore#nodeid"},"NodeID")," with its related TLS certificate and key, used to spin up an Avalanche node"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"awsCredentials"),": contains AWS credentials, used to manage resources in an AWS cloud region"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"azureCredentials"),": contains Azure credentials, used to manage resources in an Azure cloud region"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"googleCredentials"),": contains GCP credentials, used to manage resources in a Google cloud region"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"lxdCredentials")," (Not implemented in alpha)")))),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"Secret")," can be used across ",(0,l.kt)("inlineCode",{parentName:"p"},"Project"),"s by multiple ",(0,l.kt)("inlineCode",{parentName:"p"},"Resource"),"s, and ",(0,l.kt)("inlineCode",{parentName:"p"},"CloudRegion"),"s."),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("code",null,"Secret")," properties"),(0,l.kt)("div",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"id: UUID4\nowner_id: UUID4\nname: str\nsecret_type: SecretType\ncreated: datetime\nused_by: Dict[UUID4, str] # (UUID => EntityType)\n... # extra properties based on type\n")))),(0,l.kt)("h2",{id:"project"},"Project"),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"Project")," managed by a ",(0,l.kt)("inlineCode",{parentName:"p"},"User")," (later an ",(0,l.kt)("inlineCode",{parentName:"p"},"Organization"),"). It is a ",(0,l.kt)("strong",{parentName:"p"},"logical set of ",(0,l.kt)("inlineCode",{parentName:"strong"},"Resource"),"s that are deployed in ",(0,l.kt)("inlineCode",{parentName:"strong"},"CloudRegion"),"s"),"."),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"User")," can have access to multiple projects."),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"Project")," is linked to a (blockchain) ",(0,l.kt)("inlineCode",{parentName:"p"},"Network"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"local"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"testnet"),", or ",(0,l.kt)("inlineCode",{parentName:"p"},"mainnet"),". All the ",(0,l.kt)("inlineCode",{parentName:"p"},"Resource"),"s created in the project will automatically be configured to belong to this ",(0,l.kt)("inlineCode",{parentName:"p"},"Network"),"."),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("code",null,"Project")," properties"),(0,l.kt)("div",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"id: UUID4\nowner_id: UUID4\nname: str\nnetwork: Network\ncreated: datetime\ncloud_regions_ids: Dict[str, UUID4]\nresources_ids: Dict[str, UUID4]\n...\n")))),(0,l.kt)("h2",{id:"cloud-region"},"Cloud Region"),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"CloudRegion")," is managed by a ",(0,l.kt)("inlineCode",{parentName:"p"},"User")," (later an ",(0,l.kt)("inlineCode",{parentName:"p"},"Organization"),") inside a ",(0,l.kt)("inlineCode",{parentName:"p"},"Project"),"."),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"CloudRegion")," is created from a ",(0,l.kt)("inlineCode",{parentName:"p"},"AwsCredentials"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"AzureCredentials")," or",(0,l.kt)("inlineCode",{parentName:"p"},"GcpCredentials")),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"CloudRegion"),"'s format is always ",(0,l.kt)("inlineCode",{parentName:"p"},"cloudprovider/region"),"."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"A ",(0,l.kt)("code",null,"region")," can be one of:"),(0,l.kt)("div",null,(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("code",null,"azure/*")),(0,l.kt)("div",null,(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"azure/australiacentral")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"azure/australiacentral2")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"azure/australiaeast")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"azure/australiasoutheast")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"azure/brazilsouth")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"azure/canadacentral")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"azure/canadaeast")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"azure/centralindia")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"azure/centralus")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"azure/eastasia")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"azure/eastus")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"azure/eastus2")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"azure/francecentral")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"azure/francesouth")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"azure/germanynorth")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"azure/germanywestcentral")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"azure/japaneast")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"azure/japanwest")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"azure/koreacentral")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"azure/koreasouth")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"azure/northcentralus")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"azure/northeurope")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"azure/norwayeast")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"azure/norwaywest")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"azure/southafricanorth")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"azure/southafricawest")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"azure/southcentralus")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"azure/southeastasia")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"azure/southindia")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"azure/swedencentral")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"azure/switzerlandnorth")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"azure/switzerlandwest")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"azure/uaecentral")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"azure/uaenorth")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"azure/uksouth")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"azure/ukwest")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"azure/westcentralus")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"azure/westeurope")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"azure/westindia")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"azure/westus"))))),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("code",null,"aws/*")),(0,l.kt)("div",null,(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"aws/af-south-1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"aws/ap-east-1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"aws/ap-northeast-1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"aws/ap-northeast-2")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"aws/ap-northeast-3")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"aws/ap-south-1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"aws/ap-south-2")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"aws/ap-southeast-1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"aws/ap-southeast-2")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"aws/ap-southeast-3")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"aws/ap-southeast-4")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"aws/ca-central-1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"aws/eu-central-1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"aws/eu-central-2")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"aws/eu-north-1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"aws/eu-south-1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"aws/eu-south-2")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"aws/eu-west-1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"aws/eu-west-2")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"aws/eu-west-3")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"aws/me-central-1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"aws/me-south-1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"aws/sa-east-1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"aws/us-east-1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"aws/us-east-2")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"aws/us-west-1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"aws/us-west-2"))))),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("code",null,"google/*")),(0,l.kt)("div",null,(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"google/asia-east1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"google/asia-east2")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"google/asia-northeast1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"google/asia-northeast2")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"google/asia-northeast3")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"google/asia-south1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"google/asia-southeast1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"google/asia-southeast2")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"google/australia-southeast1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"google/europe-central2")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"google/europe-north1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"google/europe-west1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"google/europe-west2")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"google/europe-west3")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"google/europe-west4")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"google/europe-west6")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"google/northamerica-northeast1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"google/southamerica-east1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"google/us-central1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"google/us-east1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"google/us-east4")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"google/us-west1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"google/us-west2")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"google/us-west3")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"google/us-west4"))))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"A ",(0,l.kt)("inlineCode",{parentName:"strong"},"CloudRegion")," belongs to only one ",(0,l.kt)("inlineCode",{parentName:"strong"},"project"),".")),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("code",null,"CloudRegion")," properties"),(0,l.kt)("div",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"id: UUID4\nowner_id: UUID4\nproject_id: UUID4\ncreated: datetime\ncloud_provider: CloudProvider\nregion: Region\ncloud_credentials_secret_id: UUID4\nstatus: CloudRegionStatus\n")))),(0,l.kt)("h2",{id:"resource"},"Resource"),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"Resource")," is managed by a ",(0,l.kt)("inlineCode",{parentName:"p"},"User")," (later an ",(0,l.kt)("inlineCode",{parentName:"p"},"Organization"),") inside a ",(0,l.kt)("inlineCode",{parentName:"p"},"Project")," and in a ",(0,l.kt)("inlineCode",{parentName:"p"},"CloudRegion"),"."),(0,l.kt)("p",null,"A ",(0,l.kt)("inlineCode",{parentName:"p"},"Resource")," can be:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"An ",(0,l.kt)("inlineCode",{parentName:"li"},"avalancheNode")),(0,l.kt)("li",{parentName:"ul"},"An ",(0,l.kt)("inlineCode",{parentName:"li"},"avalancheSubnet")),(0,l.kt)("li",{parentName:"ul"},"An ",(0,l.kt)("inlineCode",{parentName:"li"},"avalancheFaucet")," (Not implemented in alpha)"),(0,l.kt)("li",{parentName:"ul"},"A ",(0,l.kt)("inlineCode",{parentName:"li"},"blockExplorer")," (Not implemented in alpha)"),(0,l.kt)("li",{parentName:"ul"},"A ",(0,l.kt)("inlineCode",{parentName:"li"},"monitoringStack")," (Not implemented in alpha)")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"A ",(0,l.kt)("inlineCode",{parentName:"strong"},"Resource")," belongs to only one ",(0,l.kt)("inlineCode",{parentName:"strong"},"Project")," and one ",(0,l.kt)("inlineCode",{parentName:"strong"},"CloudRegion"),".")),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("code",null,"Resource")," properties"),(0,l.kt)("div",null,(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"id: UUID4\nowner_id: UUID4\nproject_id: UUID4\ncreated: datetime\nresource_type: ResourceType\ncloud_region_id: UUID4\n... # extra properties based on type\n")))))}k.isMDXComponent=!0}}]);