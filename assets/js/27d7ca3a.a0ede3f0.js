"use strict";(self.webpackChunkash_docs=self.webpackChunkash_docs||[]).push([[407],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return n?a.createElement(m,l(l({ref:t},p),{},{components:n})):a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5464:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(7605),r=(n(9496),n(9613));const o={sidebar_position:2},l="Installation",i={unversionedId:"toolkit/ash-cli/installation",id:"toolkit/ash-cli/installation",title:"Installation",description:"The Ash CLI is written in Rust and can therefore be installed on any platform supported by Rust.",source:"@site/docs/toolkit/ash-cli/installation.md",sourceDirName:"toolkit/ash-cli",slug:"/toolkit/ash-cli/installation",permalink:"/docs/toolkit/ash-cli/installation",draft:!1,editUrl:"https://github.com/AshAvalanche/ash-docs/tree/main/docs/toolkit/ash-cli/installation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"toolkitSidebar",previous:{title:"Introduction",permalink:"/docs/toolkit/ash-cli/introduction"},next:{title:"Tutorials",permalink:"/docs/category/tutorials-1"}},s={},c=[{value:"Rust native method: cargo install",id:"rust-native-method-cargo-install",level:2},{value:"Fastest method: binary release download",id:"fastest-method-binary-release-download",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation"},"Installation"),(0,r.kt)("p",null,"The Ash CLI is written in Rust and can therefore be installed on any platform supported by Rust."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The CLI is ",(0,r.kt)("strong",{parentName:"p"},"installed and pre-configured")," on the Avalanche nodes by default when using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/toolkit/ansible-avalanche-collection/introduction"},"Ansible Avalanche Collection"),"!")),(0,r.kt)("h2",{id:"rust-native-method-cargo-install"},"Rust native method: cargo install"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The installation can take a few minutes as it will compile the CLI and all its dependencies.")),(0,r.kt)("p",null,"Prior to installing the CLI, you need to install Rust on your machine. Follow the ",(0,r.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/tools/install"},"official installation instructions")," to install Rust."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo install ash_cli\n")),(0,r.kt)("p",null,"This will make the ",(0,r.kt)("inlineCode",{parentName:"p"},"ash")," command available in your terminal."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ash help\n")),(0,r.kt)("h2",{id:"fastest-method-binary-release-download"},"Fastest method: binary release download"),(0,r.kt)("p",null,"The binary releases are available on the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ash-rs/releases"},"GitHub releases page"),"."),(0,r.kt)("p",null,"Download the latest release (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"v0.4.0"),") and make it executable:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export ASH_VERSION=v0.4.0\n# Can be 'linux' or 'macos'\nexport OS=linux\n# Can be 'amd64' or 'arm64'\nexport ARCH=amd64\n# Download the binary archive\ncurl -sSfL \"https://github.com/AshAvalanche/ash-rs/releases/download/${ASH_VERSION}/ash-${OS}-${ARCH}-${ASH_VERSION}.tar.gz\" -o \"ash-${OS}-${ARCH}-${ASH_VERSION}.tar.gz\"\n# Verify binary checksum\ncurl -sSfL \"https://github.com/AshAvalanche/ash-rs/releases/download/${ASH_VERSION}/ash-${OS}-${ARCH}-${ASH_VERSION}.tar.gz.sha512\" | sha512sum -c\n# Extract the binary\ntar -xzf \"ash-${OS}-${ARCH}-${ASH_VERSION}.tar.gz\"\n# Make the binary executable\nchmod +x ash\n")),(0,r.kt)("p",null,"You are now ready to use the Ash CLI!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./ash help\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"On MacOS, you will probably need to allow the binary to run in your security settings.")))}d.isMDXComponent=!0}}]);