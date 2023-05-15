"use strict";(self.webpackChunkash_docs=self.webpackChunkash_docs||[]).push([[5977],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>v});var l=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function h(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,l)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?h(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,l,n=function(e,a){if(null==e)return{};var t,l,n={},h=Object.keys(e);for(l=0;l<h.length;l++)t=h[l],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(e);for(l=0;l<h.length;l++)t=h[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=l.createContext({}),r=function(e){var a=l.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=r(e.components);return l.createElement(c.Provider,{value:a},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},m=l.forwardRef((function(e,a){var t=e.components,n=e.mdxType,h=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=r(t),m=n,v=s["".concat(c,".").concat(m)]||s[m]||u[m]||h;return t?l.createElement(v,o(o({ref:a},p),{},{components:t})):l.createElement(v,o({ref:a},p))}));function v(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var h=t.length,o=new Array(h);o[0]=m;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i[s]="string"==typeof e?e:n,o[1]=i;for(var r=2;r<h;r++)o[r]=t[r];return l.createElement.apply(null,o)}return l.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8951:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>h,metadata:()=>i,toc:()=>r});var l=t(7462),n=(t(7294),t(3905));const h={},o="Changelog",i={unversionedId:"toolkit/ansible-avalanche-collection/changelog",id:"toolkit/ansible-avalanche-collection/changelog",title:"Changelog",description:"v0.7.3 (2023-05-15)",source:"@site/docs/toolkit/ansible-avalanche-collection/changelog.md",sourceDirName:"toolkit/ansible-avalanche-collection",slug:"/toolkit/ansible-avalanche-collection/changelog",permalink:"/docs/toolkit/ansible-avalanche-collection/changelog",draft:!1,editUrl:"https://github.com/AshAvalanche/ash-docs/tree/main/docs/toolkit/ansible-avalanche-collection/changelog.md",tags:[],version:"current",frontMatter:{},sidebar:"toolkitSidebar",previous:{title:"Filters",permalink:"/docs/toolkit/ansible-avalanche-collection/reference/filters"},next:{title:"Ash CLI",permalink:"/docs/category/ash-cli"}},c={},r=[{value:"v0.7.3 (2023-05-15)",id:"v073-2023-05-15",level:2},{value:"v0.7.2 (2023-04-27)",id:"v072-2023-04-27",level:2},{value:"v0.7.1 (2023-04-26)",id:"v071-2023-04-26",level:2},{value:"v0.7.0 (2023-04-26)",id:"v070-2023-04-26",level:2},{value:"v0.6.1 (2023-03-30)",id:"v061-2023-03-30",level:2},{value:"v0.6.0 (2023-03-23)",id:"v060-2023-03-23",level:2},{value:"v0.5.1 (2023-03-20)",id:"v051-2023-03-20",level:2},{value:"v0.5.0 (2023-03-17)",id:"v050-2023-03-17",level:2},{value:"v0.4.1 (2023-03-14)",id:"v041-2023-03-14",level:2},{value:"v0.4.0 (2023-02-27)",id:"v040-2023-02-27",level:2},{value:"v0.3.1 (2022-10-28)",id:"v031-2022-10-28",level:2},{value:"v0.3.0 (2022-10-15)",id:"v030-2022-10-15",level:2},{value:"v0.2.0 (2022-07-21)",id:"v020-2022-07-21",level:2},{value:"v0.1.6 (2022-07-21)",id:"v016-2022-07-21",level:2},{value:"v0.1.5 (2022-06-22)",id:"v015-2022-06-22",level:2},{value:"v0.1.4 (2022-03-25)",id:"v014-2022-03-25",level:2},{value:"v0.1.3 (2022-03-25)",id:"v013-2022-03-25",level:2},{value:"v0.1.2 (2022-03-20)",id:"v012-2022-03-20",level:2},{value:"v0.1.1 (2022-03-17)",id:"v011-2022-03-17",level:2},{value:"v0.1.0 (2022-02-19)",id:"v010-2022-02-19",level:2}],p={toc:r},s="wrapper";function u(e){let{components:a,...t}=e;return(0,n.kt)(s,(0,l.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"changelog"},"Changelog"),(0,n.kt)("h2",{id:"v073-2023-05-15"},(0,n.kt)("a",{parentName:"h2",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/tree/v0.7.3"},"v0.7.3")," (2023-05-15)"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/compare/v0.7.2...v0.7.3"},"Full Changelog")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Implemented enhancements:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Certificate upload should be optional ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/issues/58"},"#","58"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Fixed bugs:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Missing variables for http-tls-","*"," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/issues/57"},"#","57"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Merged pull requests:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"fix: make http-tls certs upload optional ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/pull/59"},"#","59")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/leopaul36"},"leopaul36"),")"),(0,n.kt)("li",{parentName:"ul"},"feat: bump avalanchego","_","vms","_","list ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/pull/55"},"#","55")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/leopaul36"},"leopaul36"),")")),(0,n.kt)("h2",{id:"v072-2023-04-27"},(0,n.kt)("a",{parentName:"h2",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/tree/v0.7.2"},"v0.7.2")," (2023-04-27)"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/compare/v0.7.1...v0.7.2"},"Full Changelog")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Implemented enhancements:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Configure Ash CLI depending on the current network ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/issues/53"},"#","53")),(0,n.kt)("li",{parentName:"ul"},"Add a monitoring stack playbook ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/issues/51"},"#","51"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Merged pull requests:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"feat","(","ash","_","cli",")",": add config playbook ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/pull/54"},"#","54")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Nuttymoon"},"Nuttymoon"),")"),(0,n.kt)("li",{parentName:"ul"},"feat: monitoring stack ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/pull/52"},"#","52")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/leopaul36"},"leopaul36"),")")),(0,n.kt)("h2",{id:"v071-2023-04-26"},(0,n.kt)("a",{parentName:"h2",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/tree/v0.7.1"},"v0.7.1")," (2023-04-26)"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/compare/v0.7.0...v0.7.1"},"Full Changelog")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Implemented enhancements:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"feat: add ash","_","cli role ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/pull/50"},"#","50")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Nuttymoon"},"Nuttymoon"),")")),(0,n.kt)("h2",{id:"v070-2023-04-26"},(0,n.kt)("a",{parentName:"h2",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/tree/v0.7.0"},"v0.7.0")," (2023-04-26)"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/compare/v0.6.1...v0.7.0"},"Full Changelog")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Implemented enhancements:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add Blockscout role ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/issues/48"},"#","48"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Merged pull requests:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"feat: add blockscout role ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/pull/49"},"#","49")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/leopaul36"},"leopaul36"),")")),(0,n.kt)("h2",{id:"v061-2023-03-30"},(0,n.kt)("a",{parentName:"h2",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/tree/v0.6.1"},"v0.6.1")," (2023-03-30)"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/compare/v0.6.0...v0.6.1"},"Full Changelog")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Breaking changes:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"feat: remove ash node logic from node role ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/pull/45"},"#","45")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Nuttymoon"},"Nuttymoon"),")")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Implemented enhancements:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"feat: add faucet role ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/pull/42"},"#","42")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/leopaul36"},"leopaul36"),")")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Closed issues:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Remove Ash node logic from this collection ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/issues/40"},"#","40")),(0,n.kt)("li",{parentName:"ul"},"Avalanche Subnet faucet role ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/issues/36"},"#","36"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Merged pull requests:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"docs: add changelog ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/pull/43"},"#","43")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Nuttymoon"},"Nuttymoon"),")")),(0,n.kt)("h2",{id:"v060-2023-03-23"},(0,n.kt)("a",{parentName:"h2",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/tree/v0.6.0"},"v0.6.0")," (2023-03-23)"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/compare/v0.5.1...v0.6.0"},"Full Changelog")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Breaking changes:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Rename ",(0,n.kt)("inlineCode",{parentName:"li"},"avalanche_tracked_subnets")," variable to ",(0,n.kt)("inlineCode",{parentName:"li"},"avalanchego_track_subnets")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/issues/34"},"#","34"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Implemented enhancements:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Verify AvalancheGo binary integrity before installation ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/issues/37"},"#","37")),(0,n.kt)("li",{parentName:"ul"},"Use Ava Labs releases of Subnet EVM ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/issues/32"},"#","32")),(0,n.kt)("li",{parentName:"ul"},"Try to use apt to install AvalancheGo ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/issues/31"},"#","31")),(0,n.kt)("li",{parentName:"ul"},"Support TLS for the HTTP API endpoints ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/issues/26"},"#","26"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Merged pull requests:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add TLS support for HTTP API endpoints ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/pull/41"},"#","41")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Nuttymoon"},"Nuttymoon"),")"),(0,n.kt)("li",{parentName:"ul"},"AvalancheGo binary verification ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/pull/38"},"#","38")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Nuttymoon"},"Nuttymoon"),")")),(0,n.kt)("h2",{id:"v051-2023-03-20"},(0,n.kt)("a",{parentName:"h2",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/tree/v0.5.1"},"v0.5.1")," (2023-03-20)"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/compare/v0.5.0...v0.5.1"},"Full Changelog")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Breaking changes:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Use Ava Labs VM releases ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/pull/33"},"#","33")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Nuttymoon"},"Nuttymoon"),")")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Deprecated:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Drop support for blobvm, spacesvm and timestampvm ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/issues/29"},"#","29"))),(0,n.kt)("h2",{id:"v050-2023-03-17"},(0,n.kt)("a",{parentName:"h2",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/tree/v0.5.0"},"v0.5.0")," (2023-03-17)"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/compare/v0.4.1...v0.5.0"},"Full Changelog")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Breaking changes:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"feat: drop support for vms other than subnet-evm ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/pull/30"},"#","30")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Nuttymoon"},"Nuttymoon"),")")),(0,n.kt)("h2",{id:"v041-2023-03-14"},(0,n.kt)("a",{parentName:"h2",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/tree/v0.4.1"},"v0.4.1")," (2023-03-14)"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/compare/v0.4.0...v0.4.1"},"Full Changelog")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Closed issues:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Clean the plugins dir if avalanchego","_","vms","_","install is empty ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/issues/27"},"#","27")),(0,n.kt)("li",{parentName:"ul"},"Uniformize license headers ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/issues/17"},"#","17"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Merged pull requests:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"fix: clean plugins dir if avalanchego","_","vms","_","install is empty ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/pull/28"},"#","28")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/leopaul36"},"leopaul36"),")"),(0,n.kt)("li",{parentName:"ul"},"chore: uniformize license headers ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/pull/24"},"#","24")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Nuttymoon"},"Nuttymoon"),")")),(0,n.kt)("h2",{id:"v040-2023-02-27"},(0,n.kt)("a",{parentName:"h2",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/tree/v0.4.0"},"v0.4.0")," (2023-02-27)"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/compare/v0.3.1...v0.4.0"},"Full Changelog")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Implemented enhancements:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Adapt to the changes of v1.9.6 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/issues/18"},"#","18")),(0,n.kt)("li",{parentName:"ul"},"Support subnet configs ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/issues/8"},"#","8"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Fixed bugs:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Bootstrapping a node without additional VMs currently fails ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/issues/20"},"#","20")),(0,n.kt)("li",{parentName:"ul"},"Adding validator to primary network should not be triggered if the validator is pending ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/issues/6"},"#","6"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Closed issues:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Bump VMs compatibility list ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/issues/22"},"#","22"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Merged pull requests:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"fix: remove duplicate plugins dir creation ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/pull/21"},"#","21")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/leopaul36"},"leopaul36"),")"),(0,n.kt)("li",{parentName:"ul"},"feat: adapt to 1.9.6 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/pull/19"},"#","19")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/leopaul36"},"leopaul36"),")"),(0,n.kt)("li",{parentName:"ul"},"fix: update subnetevm compatibility matrix ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/pull/16"},"#","16")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/leopaul36"},"leopaul36"),")"),(0,n.kt)("li",{parentName:"ul"},"Ash node playbook ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/pull/15"},"#","15")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Nuttymoon"},"Nuttymoon"),")"),(0,n.kt)("li",{parentName:"ul"},"fix: check pending validators before addvalidator ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/pull/14"},"#","14")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Nuttymoon"},"Nuttymoon"),")"),(0,n.kt)("li",{parentName:"ul"},"feat: add subnets configs support ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/pull/12"},"#","12")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Nuttymoon"},"Nuttymoon"),")")),(0,n.kt)("h2",{id:"v031-2022-10-28"},(0,n.kt)("a",{parentName:"h2",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/tree/v0.3.1"},"v0.3.1")," (2022-10-28)"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/compare/v0.3.0...v0.3.1"},"Full Changelog")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Implemented enhancements:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Switch default network to fuji to avoid having to overwrite critical config in testnet/mainnet ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/issues/3"},"#","3"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Closed issues:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Document all playbooks ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/issues/10"},"#","10"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Merged pull requests:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"feat: add convert ansible filter ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/pull/13"},"#","13")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Nuttymoon"},"Nuttymoon"),")"),(0,n.kt)("li",{parentName:"ul"},"docs: add playbooks desc to readme ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/pull/11"},"#","11")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Nuttymoon"},"Nuttymoon"),")"),(0,n.kt)("li",{parentName:"ul"},"feat: set fuji as default network ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/pull/7"},"#","7")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Nuttymoon"},"Nuttymoon"),")")),(0,n.kt)("h2",{id:"v030-2022-10-15"},(0,n.kt)("a",{parentName:"h2",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/tree/v0.3.0"},"v0.3.0")," (2022-10-15)"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/compare/v0.2.0...v0.3.0"},"Full Changelog")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Merged pull requests:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"feat: update vms supported versions ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/pull/5"},"#","5")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Nuttymoon"},"Nuttymoon"),")"),(0,n.kt)("li",{parentName:"ul"},"docs: enable statistics for yaml ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/pull/4"},"#","4")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Nuttymoon"},"Nuttymoon"),")"),(0,n.kt)("li",{parentName:"ul"},"feat: add user and add validator tasks ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/pull/2"},"#","2")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/leopaul36"},"leopaul36"),")")),(0,n.kt)("h2",{id:"v020-2022-07-21"},(0,n.kt)("a",{parentName:"h2",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/tree/v0.2.0"},"v0.2.0")," (2022-07-21)"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/compare/v0.1.6...v0.2.0"},"Full Changelog")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Merged pull requests:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Migrate collection to ash org ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/pull/1"},"#","1")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Nuttymoon"},"Nuttymoon"),")")),(0,n.kt)("h2",{id:"v016-2022-07-21"},(0,n.kt)("a",{parentName:"h2",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/tree/v0.1.6"},"v0.1.6")," (2022-07-21)"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/compare/v0.1.5...v0.1.6"},"Full Changelog")),(0,n.kt)("h2",{id:"v015-2022-06-22"},(0,n.kt)("a",{parentName:"h2",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/tree/v0.1.5"},"v0.1.5")," (2022-06-22)"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/compare/v0.1.4...v0.1.5"},"Full Changelog")),(0,n.kt)("h2",{id:"v014-2022-03-25"},(0,n.kt)("a",{parentName:"h2",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/tree/v0.1.4"},"v0.1.4")," (2022-03-25)"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/compare/v0.1.3...v0.1.4"},"Full Changelog")),(0,n.kt)("h2",{id:"v013-2022-03-25"},(0,n.kt)("a",{parentName:"h2",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/tree/v0.1.3"},"v0.1.3")," (2022-03-25)"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/compare/v0.1.2...v0.1.3"},"Full Changelog")),(0,n.kt)("h2",{id:"v012-2022-03-20"},(0,n.kt)("a",{parentName:"h2",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/tree/v0.1.2"},"v0.1.2")," (2022-03-20)"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/compare/v0.1.1...v0.1.2"},"Full Changelog")),(0,n.kt)("h2",{id:"v011-2022-03-17"},(0,n.kt)("a",{parentName:"h2",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/tree/v0.1.1"},"v0.1.1")," (2022-03-17)"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/compare/v0.1.0...v0.1.1"},"Full Changelog")),(0,n.kt)("h2",{id:"v010-2022-02-19"},(0,n.kt)("a",{parentName:"h2",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/tree/v0.1.0"},"v0.1.0")," (2022-02-19)"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ansible-avalanche-collection/compare/ace915f1b17eb1edf3a58a1471c506f210fba591...v0.1.0"},"Full Changelog")),(0,n.kt)("p",null,"*"," ",(0,n.kt)("em",{parentName:"p"},"This Changelog was automatically generated by ",(0,n.kt)("a",{parentName:"em",href:"https://github.com/github-changelog-generator/github-changelog-generator"},"github_changelog_generator"))))}u.isMDXComponent=!0}}]);