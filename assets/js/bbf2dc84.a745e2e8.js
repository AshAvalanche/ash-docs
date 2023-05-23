"use strict";(self.webpackChunkash_docs=self.webpackChunkash_docs||[]).push([[7273],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,h=d["".concat(c,".").concat(u)]||d[u]||p[u]||l;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6807:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:3},o="ash.avalanche.ash_cmd",i={unversionedId:"toolkit/ansible-avalanche-collection/reference/modules/ash_cmd",id:"toolkit/ansible-avalanche-collection/reference/modules/ash_cmd",title:"ash.avalanche.ash_cmd",description:"The ash.avalanche.ash_cmd module is a Ash CLI wrapper.",source:"@site/docs/toolkit/ansible-avalanche-collection/reference/modules/ash_cmd.md",sourceDirName:"toolkit/ansible-avalanche-collection/reference/modules",slug:"/toolkit/ansible-avalanche-collection/reference/modules/ash_cmd",permalink:"/docs/toolkit/ansible-avalanche-collection/reference/modules/ash_cmd",draft:!1,editUrl:"https://github.com/AshAvalanche/ash-docs/tree/main/docs/toolkit/ansible-avalanche-collection/reference/modules/ash_cmd.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"toolkitSidebar",previous:{title:"ash.avalanche.eth_call",permalink:"/docs/toolkit/ansible-avalanche-collection/reference/modules/eth_call"},next:{title:"Filters",permalink:"/docs/category/filters"}},c={},s=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2}],m={toc:s},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ashavalancheash_cmd"},"ash.avalanche.ash_cmd"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ash.avalanche.ash_cmd")," module is a ",(0,r.kt)("a",{parentName:"p",href:"/docs/toolkit/ash-cli/introduction"},"Ash CLI")," wrapper."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'- name: Get node info with Ash CLI\n  ash.avalanche.ash_cmd:\n    command: ["avalanche", "node", "info"]\n    options:\n      http-host: 192.168.60.11\n      http-port: 9650\n  register: ash_cli_command\n\n- name: Print node Id from Ash CLI output\n  debug:\n    msg: "{{ ash_cli_command.output.id }}"\n\n- name: Get list of Subnets on Fuji with Ash CLI\n  ash.avalanche.ash_cmd:\n    command: avalanche subnet list\n    options:\n      network: fuji\n  register: ash_cli_command\n\n- name: Print number of Subnets on Fuji from Ash CLI output\n  debug:\n    msg: "There are {{ ash_cli_command.output | length }} Subnets on Fuji"\n')),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"command"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"list"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The command to run as a string (e.g. ",(0,r.kt)("inlineCode",{parentName:"td"},"avalanche node info"),") or a list of strings (e.g.: ",(0,r.kt)("inlineCode",{parentName:"td"},'["avalanche", "node", "info"]'),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"dict"),(0,r.kt)("td",{parentName:"tr",align:null},"{}"),(0,r.kt)("td",{parentName:"tr",align:null},"The options to pass to the command. See ",(0,r.kt)("a",{parentName:"td",href:"/docs/toolkit/ash-cli/introduction"},"Ash CLI")," for more details.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ash_path"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'"/usr/local/bin/ash"'),(0,r.kt)("td",{parentName:"tr",align:null},"The path to the Ash CLI binary.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"json"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"True"),", output will be rendered in JSON")))))}p.isMDXComponent=!0}}]);