"use strict";(self.webpackChunkash_docs=self.webpackChunkash_docs||[]).push([[2268],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1241:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:2,sidebar_label:"Features"},l="Ash Console Features",i={unversionedId:"console/features",id:"console/features",title:"Ash Console Features",description:"\ud83d\udea7 Page under construction",source:"@site/docs/console/features.md",sourceDirName:"console",slug:"/console/features",permalink:"/docs/console/features",draft:!1,editUrl:"https://github.com/AshAvalanche/ash-docs/tree/main/docs/console/features.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Features"},sidebar:"consoleSidebar",previous:{title:"Overview",permalink:"/docs/console/"},next:{title:"Pricing",permalink:"/docs/console/pricing"}},s={},u=[{value:"Validator management",id:"validator-management",level:3},{value:"Subnets management",id:"subnets-management",level:3},{value:"Networks",id:"networks",level:3},{value:"Monitoring",id:"monitoring",level:3},{value:"Alerting",id:"alerting",level:3},{value:"Support",id:"support",level:3},{value:"Automatic upgrade",id:"automatic-upgrade",level:3},{value:"Faucet",id:"faucet",level:3},{value:"Block explorer",id:"block-explorer",level:3},{value:"Load balanced RPC",id:"load-balanced-rpc",level:3},{value:"Multi-cloud deployments",id:"multi-cloud-deployments",level:3},{value:"Subnet benchmarking",id:"subnet-benchmarking",level:3},{value:"RPC Auth",id:"rpc-auth",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ash-console-features"},"Ash Console Features"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\ud83d\udea7 Page under construction")),(0,a.kt)("h3",{id:"validator-management"},"Validator management"),(0,a.kt)("p",null,"Manage validator nodes seamlessly with the Ash Console. Edit configuration keys, install, upgrade, or restart AvalancheGo, etc."),(0,a.kt)("h3",{id:"subnets-management"},"Subnets management"),(0,a.kt)("p",null,"Manage Subnets and blockchains."),(0,a.kt)("h3",{id:"networks"},"Networks"),(0,a.kt)("p",null,"Ash supports running Avalanche validator nodes in a private network, on the Fuji testnet, or on the mainnet (only in the Pro plans)."),(0,a.kt)("h3",{id:"monitoring"},"Monitoring"),(0,a.kt)("p",null,"Get a comprehensive view of your validators with our prebuilt dashboards presenting a complete suite of metrics (AvalancheGo metrics, machine metrics, Subnet centric metrics)."),(0,a.kt)("h3",{id:"alerting"},"Alerting"),(0,a.kt)("p",null,"Receive custom alerts in real time and never miss an important event going on in your Subnet."),(0,a.kt)("h3",{id:"support"},"Support"),(0,a.kt)("p",null,"Get first class support from our expert team."),(0,a.kt)("h3",{id:"automatic-upgrade"},"Automatic upgrade"),(0,a.kt)("p",null,"Ash will make sure your validators are always up to date with the latest release of AvalancheGo."),(0,a.kt)("h3",{id:"faucet"},"Faucet"),(0,a.kt)("p",null,"Launch a fully configurable ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ava-labs/avalanche-faucet"},"Faucet")," plugged on your Subnet for easy testing and user on-boarding."),(0,a.kt)("h3",{id:"block-explorer"},"Block explorer"),(0,a.kt)("p",null,"Analyze blocks, transactions, addresses and more with your very own ",(0,a.kt)("a",{parentName:"p",href:"https://www.blockscout.com/"},"Blockscout")," instance to get full grasp of what\u2019s going on in your Subnet."),(0,a.kt)("h3",{id:"load-balanced-rpc"},"Load balanced RPC"),(0,a.kt)("p",null,"Never worry about your Subnet availability again with our automatic load balancer. Choose the nodes that should serve the request and your Subnet RPC is ready to go."),(0,a.kt)("h3",{id:"multi-cloud-deployments"},"Multi-cloud deployments"),(0,a.kt)("p",null,"Our service is infrastructure agnostic, use bare metal machines or BYOC (Bring Your Own Cloud)."),(0,a.kt)("h3",{id:"subnet-benchmarking"},"Subnet benchmarking"),(0,a.kt)("p",null,"Stress test your Subnet with our customizable on-demand Subnet benchmarking tool."),(0,a.kt)("h3",{id:"rpc-auth"},"RPC Auth"),(0,a.kt)("p",null,"Secure your validators or Subnets with an authentication layer. Define RBAC to control the access to the RPCs."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Most of the features powering the Ash Console are open-source as part of the ",(0,a.kt)("a",{parentName:"p",href:"/docs/toolkit"},"Ash toolkit"),".")))}d.isMDXComponent=!0}}]);