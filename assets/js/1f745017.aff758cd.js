"use strict";(self.webpackChunkash_docs=self.webpackChunkash_docs||[]).push([[6159],{9613:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(9496);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(a),d=o,u=h["".concat(s,".").concat(d)]||h[d]||m[d]||r;return a?n.createElement(u,i(i({ref:t},c),{},{components:a})):n.createElement(u,i({ref:t},c))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3091:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(2564),o=(a(9496),a(9613));const r={sidebar_position:8},i="Monitoring",l={unversionedId:"toolkit/ansible-avalanche-collection/tutorials/monitoring",id:"toolkit/ansible-avalanche-collection/tutorials/monitoring",title:"Monitoring",description:"In this section, we will learn how to use the ash.avalanche.installmonitoringstack playbook to deploy a monitoring stack for Avalanche nodes and Subnets.",source:"@site/docs/toolkit/ansible-avalanche-collection/tutorials/monitoring.md",sourceDirName:"toolkit/ansible-avalanche-collection/tutorials",slug:"/toolkit/ansible-avalanche-collection/tutorials/monitoring",permalink:"/docs/toolkit/ansible-avalanche-collection/tutorials/monitoring",draft:!1,editUrl:"https://github.com/AshAvalanche/ash-docs/tree/main/docs/toolkit/ansible-avalanche-collection/tutorials/monitoring.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"toolkitSidebar",previous:{title:"Subnet Faucet",permalink:"/docs/toolkit/ansible-avalanche-collection/tutorials/subnet-faucet"},next:{title:"Node Security",permalink:"/docs/toolkit/ansible-avalanche-collection/tutorials/node-security"}},s={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Install the monitoring stack",id:"install-the-monitoring-stack",level:2},{value:"Grafana",id:"grafana",level:3},{value:"Nodes dashboards",id:"nodes-dashboards",level:4},{value:"Subnet dashboard",id:"subnet-dashboard",level:4},{value:"Prometheus",id:"prometheus",level:3},{value:"Targets",id:"targets",level:4}],c={toc:p},h="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(h,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"monitoring"},"Monitoring"),(0,o.kt)("p",null,"In this section, we will learn how to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"ash.avalanche.install_monitoring_stack")," playbook to deploy a monitoring stack for Avalanche nodes and Subnets."),(0,o.kt)("p",null,"The monitoring stack is comprised of:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://prometheus.io"},"Prometheus")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://prometheus.io/docs/guides/node-exporter/"},"Prometheus Node Exporter")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://grafana.com"},"Grafana"))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"For this tutorial, we will use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local"},(0,o.kt)("inlineCode",{parentName:"a"},"local"))," inventory provided by the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-getting-started"},"Ansible Avalanche Getting Started")," repository. See ",(0,o.kt)("a",{parentName:"p",href:"./local-test-network"},"Create a Local Test Network")," for details.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Always make sure you have the latest version of the collection installed. See ",(0,o.kt)("a",{parentName:"p",href:"/docs/toolkit/ansible-avalanche-collection/installation"},"Installation and upgrade"),".")),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ash.avalanche.install_monitoring_stack")," playbook installs Prometheus and Grafana through the ",(0,o.kt)("a",{parentName:"p",href:"https://galaxy.ansible.com/prometheus/prometheus"},"prometheus.prometheus")," collection and the ",(0,o.kt)("a",{parentName:"p",href:"https://galaxy.ansible.com/cloudalchemy/grafana"},"cloudalchemy.grafana")," role."),(0,o.kt)("p",null,"We can make these available locally with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ansible-galaxy install -r ansible_collections/ash/avalanche/requirements.yml\n")),(0,o.kt)("h2",{id:"install-the-monitoring-stack"},"Install the monitoring stack"),(0,o.kt)("p",null,"Grafana will be installed on the nodes of the ",(0,o.kt)("inlineCode",{parentName:"p"},"grafana")," Ansible group and Prometheus on the ",(0,o.kt)("inlineCode",{parentName:"p"},"prometheus")," Ansible group. In ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-getting-started"},"Ansible Avalanche Getting Started"),", it is the ",(0,o.kt)("inlineCode",{parentName:"p"},"frontend")," node by default. You can change this by editing the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-getting-started/blob/main/inventories/local/hosts"},(0,o.kt)("inlineCode",{parentName:"a"},"hosts"))," file."),(0,o.kt)("p",null,"Prometheus Node Exporter will be installed on all nodes in the ",(0,o.kt)("inlineCode",{parentName:"p"},"avalanche_nodes")," Ansible group."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ansible-playbook ash.avalanche.install_monitoring_stack -i inventories/local\n")),(0,o.kt)("h3",{id:"grafana"},"Grafana"),(0,o.kt)("p",null,"Generate the Grafana URL and open it in your browser:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},'echo "http://$(terraform -chdir=terraform/multipass output -raw frontend_ip):3000"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Sample output"',title:'"Sample','output"':!0},"http://10.117.207.108:3000\n")),(0,o.kt)("figure",null,(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Ash Grafana",src:a(3470).Z,width:"1274",height:"705"})),(0,o.kt)("figcaption",{style:{textAlign:"center"}},"Fig.1 - Grafana")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The default admin credentials to log in Grafana in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local"},(0,o.kt)("inlineCode",{parentName:"a"},"local"))," inventory provided by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-getting-started"},"Ansible Avalanche Getting Started")," are ",(0,o.kt)("inlineCode",{parentName:"p"},"admin:admin123"),". You can change it in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-getting-started/blob/main/inventories/local/group_vars/grafana.yml"},(0,o.kt)("inlineCode",{parentName:"a"},"grafana.yml")),".")),(0,o.kt)("h4",{id:"nodes-dashboards"},"Nodes dashboards"),(0,o.kt)("p",null,"In the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local"},(0,o.kt)("inlineCode",{parentName:"a"},"local"))," inventory, Grafana is configured to connect with the Prometheus instance and comes with pre-built dashboards (see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-getting-started/blob/main/inventories/local/group_vars/grafana.yml"},(0,o.kt)("inlineCode",{parentName:"a"},"grafana.yml")),"). The list of available dashboards can be found in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/tree/main/files/dashboard"},"dashboards")," directory."),(0,o.kt)("h4",{id:"subnet-dashboard"},"Subnet dashboard"),(0,o.kt)("p",null,"If you created ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ava-labs/subnet-evm"},"Subnet EVM")," blockchains in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/toolkit/ansible-avalanche-collection/tutorials/subnet-creation"},"Subnet Creation")," tutorial, you can configure the Grafana role to install a pre-configured dashboard for them."),(0,o.kt)("p",null,"To do so, define the ",(0,o.kt)("inlineCode",{parentName:"p"},"grafana_subnets_dashboard_variables")," variable (in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-getting-started/blob/main/inventories/local/group_vars/grafana.yml"},(0,o.kt)("inlineCode",{parentName:"a"},"grafana.yml"))," for the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local"},(0,o.kt)("inlineCode",{parentName:"a"},"local"))," inventory):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"grafana_subnets_dashboard_variables:\n  - text: Subnet EVM\n    value: 2dEmExGjJT6MouJRr1PqV4PSQEbScDAjKuPtT6pgqYR5xdUuac\n    selected: true\n")),(0,o.kt)("p",null,"Then rerun the ",(0,o.kt)("inlineCode",{parentName:"p"},"install_monitoring_stack")," playbook:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ansible-playbook ash.avalanche.install_monitoring_stack -i inventories/local\n")),(0,o.kt)("figure",null,(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Ash Grafana",src:a(1486).Z,width:"1272",height:"707"})),(0,o.kt)("figcaption",{style:{textAlign:"center"}},"Fig.2 - Subnets dashboard")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you deployed multiple Subnet EVM blockchains, you can define them all in the ",(0,o.kt)("inlineCode",{parentName:"p"},"grafana_subnets_dashboard_variables")," variable, Grafana will display a dropdown menu to select the blockchain to display.")),(0,o.kt)("h3",{id:"prometheus"},"Prometheus"),(0,o.kt)("p",null,"Generate the Prometheus URL and open it in your browser:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Command"',title:'"Command"'},'echo "http://$(terraform -chdir=terraform/multipass output -raw frontend_ip):9090"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Sample output"',title:'"Sample','output"':!0},"http://10.117.207.108:9090\n")),(0,o.kt)("figure",null,(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Ash prometheus",src:a(3411).Z,width:"1443",height:"875"})),(0,o.kt)("figcaption",{style:{textAlign:"center"}},"Fig.3 - Prometheus")),(0,o.kt)("h4",{id:"targets"},"Targets"),(0,o.kt)("p",null,"In the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local"},(0,o.kt)("inlineCode",{parentName:"a"},"local"))," inventory, Prometheus is configured (see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-getting-started/blob/main/inventories/local/group_vars/prometheus.yml"},(0,o.kt)("inlineCode",{parentName:"a"},"prometheus.yml")),") to scrape metrics from the Avalanche nodes (endpoint ",(0,o.kt)("inlineCode",{parentName:"p"},"/ext/metrics")," on port ",(0,o.kt)("inlineCode",{parentName:"p"},"9650")," of AvalancheGo, see ",(0,o.kt)("a",{parentName:"p",href:"https://docs.avax.network/apis/avalanchego/apis/metrics"},"documentation")," for details) and the Prometheus Node Exporter (port ",(0,o.kt)("inlineCode",{parentName:"p"},"9100")," by default)."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ash.avalanche.faucet")," role is not yet compatible with secured HTTP API endpoints (see ",(0,o.kt)("a",{parentName:"p",href:"./node-security"},"Node security")," for details).")))}m.isMDXComponent=!0},3470:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ash-grafana-33559254816b3abce1271438ef99ae54.png"},3411:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ash-prometheus-1c20d6c2f56762aff9a1c0383ca2a22b.png"},1486:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ash-subnets-dashboard-5da12b5d317d88392344d05fe758978e.png"}}]);