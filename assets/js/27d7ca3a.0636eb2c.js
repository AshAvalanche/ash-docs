"use strict";(self.webpackChunkash_docs=self.webpackChunkash_docs||[]).push([[407],{9613:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(9496);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=c(a),d=o,m=h["".concat(s,".").concat(d)]||h[d]||u[d]||r;return a?n.createElement(m,l(l({ref:t},p),{},{components:a})):n.createElement(m,l({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[h]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5464:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=a(7605),o=(a(9496),a(9613));const r={sidebar_position:2},l="Installation",i={unversionedId:"toolkit/ash-cli/installation",id:"toolkit/ash-cli/installation",title:"Installation",description:"The Ash CLI is written in Rust and can therefore be installed on any platform supported by Rust.",source:"@site/docs/toolkit/ash-cli/installation.md",sourceDirName:"toolkit/ash-cli",slug:"/toolkit/ash-cli/installation",permalink:"/docs/toolkit/ash-cli/installation",draft:!1,editUrl:"https://github.com/AshAvalanche/ash-docs/tree/main/docs/toolkit/ash-cli/installation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"toolkitSidebar",previous:{title:"Introduction",permalink:"/docs/toolkit/ash-cli/introduction"},next:{title:"Tutorials",permalink:"/docs/category/tutorials-1"}},s={},c=[{value:"Rust native method: cargo install",id:"rust-native-method-cargo-install",level:2},{value:"Fastest method: binary release download",id:"fastest-method-binary-release-download",level:2}],p={toc:c},h="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(h,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation"},"Installation"),(0,o.kt)("p",null,"The Ash CLI is written in Rust and can therefore be installed on any platform supported by Rust."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The CLI is ",(0,o.kt)("strong",{parentName:"p"},"installed and pre-configured")," on the Avalanche nodes by default when using the ",(0,o.kt)("a",{parentName:"p",href:"/docs/toolkit/ansible-avalanche-collection/introduction"},"Ansible Avalanche Collection"),"!")),(0,o.kt)("h2",{id:"rust-native-method-cargo-install"},"Rust native method: cargo install"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The installation can take a few minutes as it will compile the CLI and all its dependencies.")),(0,o.kt)("p",null,"Prior to installing the CLI, you need to install Rust on your machine. Follow the ",(0,o.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/tools/install"},"official installation instructions")," to install Rust."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cargo install ash_cli\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"To install a version of the CLI that is compatible with the Ash Console alpha, you need to specify the ",(0,o.kt)("inlineCode",{parentName:"p"},"--version")," flag:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cargo install ash_cli --version '~0.4.0-alpha'\n"))),(0,o.kt)("p",null,"This will make the ",(0,o.kt)("inlineCode",{parentName:"p"},"ash")," command available in your terminal."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ash help\n")),(0,o.kt)("h2",{id:"fastest-method-binary-release-download"},"Fastest method: binary release download"),(0,o.kt)("p",null,"The binary releases are available on the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AshAvalanche/ash-rs/releases"},"GitHub releases page"),"."),(0,o.kt)("p",null,"Download the latest release (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"v0.4.0-alpha.5"),") and make it executable:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export ASH_VERSION=v0.4.0-alpha.5\n# Can be 'linux' or 'macos'\nexport OS=linux\n# Can be 'amd64' or 'arm64'\nexport ARCH=amd64\n# Download the binary archive\ncurl -sSfL \"https://github.com/AshAvalanche/ash-rs/releases/download/${ASH_VERSION}/ash-${OS}-${ARCH}-${ASH_VERSION}.tar.gz\" -o \"ash-${OS}-${ARCH}-${ASH_VERSION}.tar.gz\"\n# Verify binary checksum\ncurl -sSfL \"https://github.com/AshAvalanche/ash-rs/releases/download/${ASH_VERSION}/ash-${OS}-${ARCH}-${ASH_VERSION}.tar.gz.sha512\" | sha512sum -c\n# Extract the binary\ntar -xzf \"ash-${OS}-${ARCH}-${ASH_VERSION}.tar.gz\"\n# Make the binary executable\nchmod +x ash\n")),(0,o.kt)("p",null,"You are now ready to use the Ash CLI!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./ash help\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"On MacOS, you will probably need to allow the binary to run in your security settings.")))}u.isMDXComponent=!0}}]);