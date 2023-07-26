"use strict";(self.webpackChunkash_docs=self.webpackChunkash_docs||[]).push([[644],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(a),h=o,d=p["".concat(s,".").concat(h)]||p[h]||m[h]||r;return a?n.createElement(d,i(i({ref:t},u),{},{components:a})):n.createElement(d,i({ref:t},u))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),o=a(6010);const r={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,i),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(7462),o=a(7294),r=a(6010),i=a(2466),l=a(6550),s=a(1980),c=a(7392),u=a(12);function p(e){return function(e){return o.Children.map(e,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:o}}=e;return{value:t,label:a,attributes:n,default:o}}))}function m(e){const{values:t,children:a}=e;return(0,o.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=m(e),[i,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[s,c]=d({queryString:a,groupId:n}),[p,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,u.Nk)(a);return[n,(0,o.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),b=(()=>{const e=s??p;return h({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),g(e)}),[c,g,r]),tabValues:r}}var b=a(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==l&&(p(t),s(n))},h=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:i}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:h,onClick:m},i,{className:(0,r.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":l===t})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=g(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",f.tabList)},o.createElement(v,(0,n.Z)({},e,t)),o.createElement(k,(0,n.Z)({},e,t)))}function y(e){const t=(0,b.Z)();return o.createElement(N,(0,n.Z)({key:String(t)},e))}},5833:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=a(7462),o=(a(7294),a(3905)),r=a(4866),i=a(5162);const l={sidebar_position:2},s="Create a Fuji node on AWS",c={unversionedId:"toolkit/ansible-avalanche-collection/tutorials/fuji-node-aws",id:"toolkit/ansible-avalanche-collection/tutorials/fuji-node-aws",title:"Create a Fuji node on AWS",description:"In this section, we will learn how to use the ash.avalanche Ansible collection to provision a Fuji Avalanche node on a AWS EC2 instance.",source:"@site/docs/toolkit/ansible-avalanche-collection/tutorials/fuji-node-aws.md",sourceDirName:"toolkit/ansible-avalanche-collection/tutorials",slug:"/toolkit/ansible-avalanche-collection/tutorials/fuji-node-aws",permalink:"/docs/toolkit/ansible-avalanche-collection/tutorials/fuji-node-aws",draft:!1,editUrl:"https://github.com/AshAvalanche/ash-docs/tree/main/docs/toolkit/ansible-avalanche-collection/tutorials/fuji-node-aws.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"toolkitSidebar",previous:{title:"Local Test Network Creation",permalink:"/docs/toolkit/ansible-avalanche-collection/tutorials/local-test-network"},next:{title:"Node Upgrade",permalink:"/docs/toolkit/ansible-avalanche-collection/tutorials/node-upgrade"}},u={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Setup the environment",id:"setup-the-environment",level:2},{value:"Create EC2 instance with Terraform",id:"create-ec2-instance-with-terraform",level:2},{value:"Provision Fuji node",id:"provision-fuji-node",level:2},{value:"Monitor bootstrapping",id:"monitor-bootstrapping",level:2},{value:"Issue API calls",id:"issue-api-calls",level:2},{value:"Stop or start AvalancheGo",id:"stop-or-start-avalanchego",level:2},{value:"Customization",id:"customization",level:2},{value:"Where to go next?",id:"where-to-go-next",level:2}],m={toc:p},h="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(h,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-a-fuji-node-on-aws"},"Create a Fuji node on AWS"),(0,o.kt)("p",null,"In this section, we will learn how to use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-collection"},"ash.avalanche")," Ansible collection to provision a Fuji ",(0,o.kt)("a",{parentName:"p",href:"https://docs.avax.network/"},"Avalanche")," node on a ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com"},"AWS")," EC2 instance."),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Python >=3.9 with ",(0,o.kt)("inlineCode",{parentName:"li"},"venv")," module installed"),(0,o.kt)("li",{parentName:"ul"},"AWS account and access key (see ",(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/powershell/latest/userguide/pstools-appendix-sign-up.html"},"AWS docs"),") with correct permissions to manage EC2 instances (e.g.: ",(0,o.kt)("inlineCode",{parentName:"li"},"AmazonEC2FullAccess"),")"),(0,o.kt)("li",{parentName:"ul"},"Terraform installed (see ",(0,o.kt)("a",{parentName:"li",href:"https://developer.hashicorp.com/terraform/tutorials/aws-get-started/install-cli"},"Install Terraform"),")",(0,o.kt)("admonition",{parentName:"li",type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://terraform.io"},"Terraform")," is an infrastructure as code tool that lets you build, change, and version infrastructure safely and efficiently"))),(0,o.kt)("li",{parentName:"ul"},"For filtering outputs:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stedolan.github.io/jq/"},"jq")," (see ",(0,o.kt)("a",{parentName:"li",href:"https://stedolan.github.io/jq/download/"},"Installation"),")")))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"We recommend installing the Ash CLI to easily get information about your nodes and Subnets. See ",(0,o.kt)("a",{parentName:"p",href:"/docs/toolkit/ash-cli/installation"},"Ash CLI - Installation"),".",(0,o.kt)("br",{parentName:"p"}),"\n","The tutorials still provide the snippets to query the Avalanche APIs with cURL.")),(0,o.kt)("h2",{id:"setup-the-environment"},"Setup the environment"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Clone the Getting Started repository:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/AshAvalanche/ansible-avalanche-getting-started\ncd ansible-avalanche-collection-getting-started\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Setup and activate Python venv:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bin/setup.sh\nsource .venv/bin/activate\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install the ",(0,o.kt)("inlineCode",{parentName:"p"},"ash.avalanche")," collection:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ansible-galaxy collection install git+https://github.com/AshAvalanche/ansible-avalanche-collection.git\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Initialize the Terraform modules:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"terraform -chdir=terraform/aws init\n")))),(0,o.kt)("h2",{id:"create-ec2-instance-with-terraform"},"Create EC2 instance with Terraform"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Setup AWS keys environment variables:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'export AWS_SECRET_ACCESS_KEY="XXXXXXXXXXXXXXXXXXXXXXXXXX"\nexport AWS_ACCESS_KEY_ID="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Created the resources with Terraform:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"terraform -chdir=terraform/aws apply\n")))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This command will create the resources defined in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-getting-started/blob/main/terraform/aws/main.tf"},(0,o.kt)("inlineCode",{parentName:"a"},"main.tf"))," including a ",(0,o.kt)("inlineCode",{parentName:"p"},"t2.2xlarge")," EC2 instance with ",(0,o.kt)("inlineCode",{parentName:"p"},"300GiB")," of storage, an associated ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html"},"key pair")," and a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-security-groups.html"},"security group")," configured to allow SSH (port 22) and default AVAX ports (9650 for HTTP and 9651 for staking) as well as all outbound traffic.")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Save the IP of the newly created EC2 instance:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"terraform -chdir=terraform/aws output fuji_node_ip\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Update ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-getting-started/blob/main/inventories/fuji-aws/hosts"},(0,o.kt)("inlineCode",{parentName:"a"},"inventories/fuji-aws/hosts"))," with the IP of your EC2 instance. E.g.:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="inventories/fuji-aws/hosts"',title:'"inventories/fuji-aws/hosts"'},"aws-fuji-node ansible_host=35.171.27.213 ansible_user=ubuntu ansible_ssh_private_key_file=files/ansible_key.pem\n\n[avalanche_nodes]\naws-fuji-node\n")))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Creating the EC2 instance with Terraform is not the only way to go, you can also create it manually using the AWS console or CLI. Just make sure to update ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-getting-started/blob/main/inventories/fuji-aws/hosts"},(0,o.kt)("inlineCode",{parentName:"a"},"inventories/fuji-aws/hosts"))," so that Ansible knows how to connect to your EC2 instance.")),(0,o.kt)("h2",{id:"provision-fuji-node"},"Provision Fuji node"),(0,o.kt)("p",null,"We will use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/blob/main/playbooks/provision_nodes.yml"},"ash.avalanche.provision_nodes")," playbook to install and configure AvalancheGo on our EC2 instance."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ansible-playbook ash.avalanche.provision_nodes -i inventories/fuji-aws\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/fuji-aws/group_vars/avalanche_nodes.yml"},(0,o.kt)("inlineCode",{parentName:"a"},"inventories/fuji-aws/group_vars/avalanche_nodes.yml"))," file holds the configuration for the ",(0,o.kt)("inlineCode",{parentName:"p"},"ash.avalanche.node")," role. We only override the ",(0,o.kt)("inlineCode",{parentName:"p"},"avalanchego_version")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"avalanchego_network_id")," variables, leaving the others as default. For a list of all available variables, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/toolkit/ansible-avalanche-collection/reference/roles/avalanche-node"},"ash.avalanche.node reference"),".")),(0,o.kt)("h2",{id:"monitor-bootstrapping"},"Monitor bootstrapping"),(0,o.kt)("p",null,"We can SSH to our EC2 instance to follow the synchronization of the P, X and C chains. For example with the P-chain:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'{1} title="Commands"',"{1}":!0,title:'"Commands"'},'ssh -i ./files/ansible_key.pem "ubuntu@$YOUR_EC2_INSTANCE_IP"\n\ncd /var/log/avalanche/avalanchego\ntail C.log\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Output"',title:'"Output"'},'[06-02|09:16:47.131] INFO <P Chain> platformvm/vm.go:205 initializing last accepted {"blkID": "99BWrAqUMvTp9nXKXyjPsCqjGwDqVFqssTRQbu58af57Cf9VG"}\n[06-02|09:16:47.132] INFO <P Chain> snowman/transitive.go:90 initializing consensus engine\n[06-02|09:16:47.133] INFO <P Chain> bootstrap/bootstrapper.go:115 starting bootstrapper\n[06-02|09:16:53.011] INFO <P Chain> common/bootstrapper.go:244 bootstrapping started syncing {"numVerticesInFrontier": 1}\n[06-02|09:16:58.208] INFO <P Chain> bootstrap/bootstrapper.go:495 fetching blocks {"numFetchedBlocks": 5000, "numTotalBlocks": 105347, "eta": "1m44s"}\n[06-02|09:17:07.713] INFO <P Chain> bootstrap/bootstrapper.go:495 fetching blocks {"numFetchedBlocks": 10000, "numTotalBlocks": 105347, "eta": "2m20s"}\n[06-02|09:17:10.766] INFO <P Chain> bootstrap/bootstrapper.go:495 fetching blocks {"numFetchedBlocks": 15000, "numTotalBlocks": 105347, "eta": "1m47s"}\n[06-02|09:17:14.385] INFO <P Chain> bootstrap/bootstrapper.go:495 fetching blocks {"numFetchedBlocks": 20000, "numTotalBlocks": 105347, "eta": "1m31s"}\n[06-02|09:17:18.286] INFO <P Chain> bootstrap/bootstrapper.go:495 fetching blocks {"numFetchedBlocks": 25000, "numTotalBlocks": 105347, "eta": "1m21s"}\n[06-02|09:17:21.936] INFO <P Chain> bootstrap/bootstrapper.go:495 fetching blocks {"numFetchedBlocks": 30000, "numTotalBlocks": 105347, "eta": "1m13s"}\n')),(0,o.kt)("p",null,"Logs should look like this once the chain is bootstrapped:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'[06-02|09:18:18.373] INFO <P Chain> bootstrap/bootstrapper.go:554 executing blocks {"numPendingJobs": 105347}\n[06-02|09:18:48.374] INFO <P Chain> queue/jobs.go:203 executing operations {"numExecuted": 36081, "numToExecute": 105347, "eta": "58s"}\n[06-02|09:19:18.395] INFO <P Chain> queue/jobs.go:203 executing operations {"numExecuted": 43933, "numToExecute": 105347, "eta": "1m24s"}\n[06-02|09:19:48.398] INFO <P Chain> queue/jobs.go:203 executing operations {"numExecuted": 44159, "numToExecute": 105347, "eta": "2m5s"}\n[06-02|09:20:18.554] INFO <P Chain> queue/jobs.go:203 executing operations {"numExecuted": 44364, "numToExecute": 105347, "eta": "2m45s"}\n[06-02|09:20:48.555] INFO <P Chain> queue/jobs.go:203 executing operations {"numExecuted": 47613, "numToExecute": 105347, "eta": "3m2s"}\n[06-02|09:21:18.556] INFO <P Chain> queue/jobs.go:203 executing operations {"numExecuted": 64999, "numToExecute": 105347, "eta": "1m52s"}\n[06-02|09:21:48.557] INFO <P Chain> queue/jobs.go:203 executing operations {"numExecuted": 81297, "numToExecute": 105347, "eta": "1m2s"}\n[06-02|09:22:18.558] INFO <P Chain> queue/jobs.go:203 executing operations {"numExecuted": 96176, "numToExecute": 105347, "eta": "23s"}\n[06-02|09:22:34.657] INFO <P Chain> queue/jobs.go:224 executed operations {"numExecuted": 105347}\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"By default, AvalancheGo is configured to use ",(0,o.kt)("a",{parentName:"p",href:"https://docs.avax.network/nodes/maintain/chain-config-flags#state-sync"},"State Sync")," for faster node bootstrapping. If you want to run an ",(0,o.kt)("strong",{parentName:"p"},"archival node"),", you need to disable State Sync on the C-chain. This is configurable through the Ansible Avalanche Collection by adding the following keys to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/fuji-aws/group_vars/avalanche_nodes.yml"},(0,o.kt)("inlineCode",{parentName:"a"},"avalanche_nodes.yml")),":"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="inventories/fuji-aws/group_vars/avalanche_nodes.yml"',title:'"inventories/fuji-aws/group_vars/avalanche_nodes.yml"'},"avalanchego_chains_configs:\n  C:\n    state-sync-enabled: false\n"))),(0,o.kt)("h2",{id:"issue-api-calls"},"Issue API calls"),(0,o.kt)("p",null,"The node ",(0,o.kt)("inlineCode",{parentName:"p"},"aws-fuji-node")," exposes AvalancheGo APIs on it's public IP: you can query any ",(0,o.kt)("a",{parentName:"p",href:"https://docs.avax.network/build/avalanchego-apis/"},"Avalanche API")," from your terminal. For example, to check if the P-Chain is done bootstrapping:"),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"ash-cli",label:"Using Ash CLI",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},'ash avalanche node is-bootstrapped C --http-host "$YOUR_EC2_INSTANCE_IP"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"Chain 'C' on node '$YOUR_EC2_INSTANCE_IP:9650': Bootstrapped \u2713\n"))),(0,o.kt)(i.Z,{value:"curl",label:"Using cURL",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},'curl -X POST --data \'{\n  "jsonrpc": "2.0",\n  "id"     : 1,\n  "method" : "info.isBootstrapped",\n  "params": {\n    "chain": "C"\n  }\n}\' -H \'content-type:application/json;\' "http://$YOUR_EC2_INSTANCE_IP:9650/ext/info"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},'{"jsonrpc":"2.0","result":{"isBootstrapped":true},"id":1}\n')))),(0,o.kt)("h2",{id:"stop-or-start-avalanchego"},"Stop or start AvalancheGo"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-collection"},"ash.avalanche")," collection creates a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/systemd/systemd"},"systemd")," service to manage AvalancheGo. It can be stopped or started using the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{1}","{1}":!0},'ssh -i ./files/ansible_key.pem "ubuntu@$YOUR_EC2_INSTANCE_IP"\n# Stop AvalancheGo\nsystemctl stop avalanchego\n# Start AvalancheGo\nsystemctl start avalanchego\n')),(0,o.kt)("h2",{id:"customization"},"Customization"),(0,o.kt)("p",null,"Different aspects of the installation can be customized:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To customize the EC2 instance specs (e.g.: instance type, storage capacity, etc.): edit ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/terraform/aws/main.tf"},(0,o.kt)("inlineCode",{parentName:"a"},"terraform/aws/main.tf")),"."),(0,o.kt)("li",{parentName:"ul"},"To customize AvalancheGo installation: edit the variables in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/fuji-aws/group_vars/avalanche_nodes.yml"},(0,o.kt)("inlineCode",{parentName:"a"},"inventories/fuji-aws/group_vars/avalanche_nodes.yml")),".")),(0,o.kt)("h2",{id:"where-to-go-next"},"Where to go next?"),(0,o.kt)("p",null,"All of our tutorials can be run on the EC2 instance created in this tutorial! Go ahead and deploy a ",(0,o.kt)("a",{parentName:"p",href:"/docs/toolkit/ansible-avalanche-collection/tutorials/monitoring"},"Monitoring stack")," or learn how to ",(0,o.kt)("a",{parentName:"p",href:"/docs/toolkit/ansible-avalanche-collection/tutorials/vm-management"},"Install the Subnet EVM")," to your node."))}d.isMDXComponent=!0}}]);