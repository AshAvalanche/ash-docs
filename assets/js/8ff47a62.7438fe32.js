"use strict";(self.webpackChunkash_docs=self.webpackChunkash_docs||[]).push([[9364],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,h=u["".concat(c,".").concat(d)]||u[d]||f[d]||o;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},738:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(7605),a=(n(9496),n(9613));const o={sidebar_position:2},l="ash.avalanche.XXX_to_XXX",i={unversionedId:"toolkit/ansible-avalanche-collection/reference/filters/xxx_to_xxx",id:"toolkit/ansible-avalanche-collection/reference/filters/xxx_to_xxx",title:"ash.avalanche.XXX_to_XXX",description:"The ash.avalanche.XXXtoXXX filter converts a string between encodings",source:"@site/docs/toolkit/ansible-avalanche-collection/reference/filters/xxx_to_xxx.md",sourceDirName:"toolkit/ansible-avalanche-collection/reference/filters",slug:"/toolkit/ansible-avalanche-collection/reference/filters/xxx_to_xxx",permalink:"/docs/toolkit/ansible-avalanche-collection/reference/filters/xxx_to_xxx",draft:!1,editUrl:"https://github.com/AshAvalanche/ash-docs/tree/main/docs/toolkit/ansible-avalanche-collection/reference/filters/xxx_to_xxx.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"toolkitSidebar",previous:{title:"ash.avalanche.convert",permalink:"/docs/toolkit/ansible-avalanche-collection/reference/filters/convert"},next:{title:"Changelog",permalink:"/docs/toolkit/ansible-avalanche-collection/changelog"}},c={},s=[{value:"Usage",id:"usage",level:2},{value:"Supported conversions",id:"supported-conversions",level:2}],p={toc:s},u="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ashavalanchexxx_to_xxx"},"ash.avalanche.XXX_to_XXX"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ash.avalanche.XXX_to_XXX")," filter converts a string between encodings"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"This is useful to convert string between different encodings, e.g. from hexadecimal to ",(0,a.kt)("a",{parentName:"p",href:"https://support.avax.network/en/articles/4587395-what-is-cb58"},"CB58"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# Example of cb58_to_hex conversion\n- name: Convert NodeID to hexadecimal\n  set_fact:\n    node_id_hex: |-\n      {{ (get_node_id_res.json.result.nodeID | split('-'))[1]\n         | ash.avalanche.cb58_to_hex }}\n")),(0,a.kt)("h2",{id:"supported-conversions"},"Supported conversions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cb58_to_hex")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cb58_to_bytes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"hex_to_cb58")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"hex_to_bytes"))))}f.isMDXComponent=!0}}]);