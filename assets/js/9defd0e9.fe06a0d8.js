"use strict";(self.webpackChunkash_docs=self.webpackChunkash_docs||[]).push([[7272],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,c=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=s(n),g=l,h=u["".concat(c,".").concat(g)]||u[g]||d[g]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=g;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[u]="string"==typeof e?e:l,o[1]=r;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8672:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>s});var a=n(2564),l=(n(9496),n(9613));const i={sidebar_position:2},o="Installation and upgrade",r={unversionedId:"toolkit/ansible-avalanche-collection/installation",id:"toolkit/ansible-avalanche-collection/installation",title:"Installation and upgrade",description:"The Ansible Avalanche Collection can be installed and upgraded either using ansible-galaxy or by cloning the GitHub repository.",source:"@site/docs/toolkit/ansible-avalanche-collection/installation.md",sourceDirName:"toolkit/ansible-avalanche-collection",slug:"/toolkit/ansible-avalanche-collection/installation",permalink:"/docs/toolkit/ansible-avalanche-collection/installation",draft:!1,editUrl:"https://github.com/AshAvalanche/ash-docs/tree/main/docs/toolkit/ansible-avalanche-collection/installation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"toolkitSidebar",previous:{title:"Introduction",permalink:"/docs/toolkit/ansible-avalanche-collection/introduction"},next:{title:"Tutorials",permalink:"/docs/category/tutorials"}},c={},s=[{value:"Using <code>ansible-galaxy</code>",id:"using-ansible-galaxy",level:2},{value:"Installing the collection",id:"installing-the-collection",level:3},{value:"Upgrading the collection",id:"upgrading-the-collection",level:3},{value:"Using Git",id:"using-git",level:2},{value:"Installing the collection",id:"installing-the-collection-1",level:3},{value:"Upgrading the collection",id:"upgrading-the-collection-1",level:3}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"installation-and-upgrade"},"Installation and upgrade"),(0,l.kt)("p",null,"The Ansible Avalanche Collection can be installed and upgraded either using ",(0,l.kt)("inlineCode",{parentName:"p"},"ansible-galaxy")," or by cloning the GitHub repository."),(0,l.kt)("h2",{id:"using-ansible-galaxy"},"Using ",(0,l.kt)("inlineCode",{parentName:"h2"},"ansible-galaxy")),(0,l.kt)("h3",{id:"installing-the-collection"},"Installing the collection"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ansible-galaxy collection install git+https://github.com/AshAvalanche/ansible-avalanche-collection.git\n")),(0,l.kt)("h3",{id:"upgrading-the-collection"},"Upgrading the collection"),(0,l.kt)("p",null,"Simply run the same command as above to upgrade the collection!"),(0,l.kt)("h2",{id:"using-git"},"Using Git"),(0,l.kt)("h3",{id:"installing-the-collection-1"},"Installing the collection"),(0,l.kt)("p",null,"You have to clone the collection to the Ansible ",(0,l.kt)("inlineCode",{parentName:"p"},"COLLECTIONS_PATHS"),". To find the ",(0,l.kt)("inlineCode",{parentName:"p"},"COLLECTIONS_PATHS"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ansible-config dump | grep COLLECTIONS_PATHS\n# Example output:\n# COLLECTIONS_PATHS(/home/gauthier/Projects/ash/ansible-avalanche-getting-started/ansible.cfg) = ['/home/gauthier/Projects/ash/ansible-avalanche-getting-started']\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd $COLLECTIONS_PATHS\ngit clone https://github.com/AshAvalanche/ansible-avalanche-collection.git\n")),(0,l.kt)("h3",{id:"upgrading-the-collection-1"},"Upgrading the collection"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd $COLLECTIONS_PATHS/ansible-avalanche-collection\ngit pull\n")))}d.isMDXComponent=!0}}]);