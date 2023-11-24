"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[89485,42918,43583],{3893:function(e,n,o){o.r(n),o.d(n,{assets:function(){return h},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return m}});var t=o(11527),c=o(17279),r=o(22548),a=o(38140),i=o(75268),s=o(67234);const l={sidebar_position:2},d="Manage connectors",u={id:"docs/references/using-cli/manage-connectors",title:"Manage connectors",description:"Note",source:"@site/docs/docs/references/using-cli/manage-connectors.mdx",sourceDirName:"docs/references/using-cli",slug:"/docs/references/using-cli/manage-connectors",permalink:"/next/docs/references/using-cli/manage-connectors",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/references/using-cli/manage-connectors.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Install Logto",permalink:"/next/docs/references/using-cli/install-logto"},next:{title:"Database alteration",permalink:"/next/docs/references/using-cli/database-alteration"}},h={},m=[{value:"List existing connectors",id:"list-existing-connectors",level:2},{value:"Add connectors",id:"add-connectors",level:2},{value:"Official connectors",id:"official-connectors",level:3},{value:"Third-party connectors",id:"third-party-connectors",level:3},{value:"Link local connectors",id:"link-local-connectors",level:3},{value:"Remove connectors",id:"remove-connectors",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"manage-connectors",children:"Manage connectors"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Note"})}),"\n",(0,t.jsxs)(n.p,{children:["For each command, you can append ",(0,t.jsx)(n.code,{children:"--path /your/path/to/logto"})," (alias ",(0,t.jsx)(n.code,{children:"-p"}),") to specify the Logto instance path."]}),"\n",(0,t.jsx)(r.Z,{cloud:!0,oss:{major:1,minor:2}}),"\n",(0,t.jsxs)(n.p,{children:["If the working directory at the root of a Logto project, you can skip using the ",(0,t.jsx)(n.code,{children:"--path"})," option as the CLI will automatically detect it."]}),"\n",(0,t.jsx)(n.h2,{id:"list-existing-connectors",children:"List existing connectors"}),"\n",(0,t.jsx)(n.p,{children:"Use the command below to list existing connectors that have been added to your Logto instance:"}),"\n",(0,t.jsxs)(s.Z,{groupId:"cmd",children:[(0,t.jsx)(i.Z,{value:"cli",label:"CLI",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"logto connector list\n"})})}),(0,t.jsx)(i.Z,{value:"local",label:"Local",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm run cli connector list\n"})})}),(0,t.jsx)(i.Z,{value:"npx",label:"npx",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npx @logto/cli connector list\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"A sample output:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"OFFICIAL\n  @logto/connector-alipay-native\n  @logto/connector-aliyun-dm\n  @logto/connector-aliyun-sms\n  @logto/connector-apple\n  @logto/connector-azuread\n\n3RD-PARTY\n  connector-some-third-party\n"})}),"\n",(0,t.jsx)(n.h2,{id:"add-connectors",children:"Add connectors"}),"\n",(0,t.jsx)(n.h3,{id:"official-connectors",children:"Official connectors"}),"\n",(0,t.jsxs)(n.p,{children:["All official connectors are listed in ",(0,t.jsx)(n.a,{href:"https://github.com/logto-io/logto/tree/master/packages/connectors",children:"@logto/connectors"}),", except those names that start with ",(0,t.jsx)(n.code,{children:"connector-mock-"})," for testing purposes."]}),"\n",(0,t.jsx)(a.Z,{type:"tip",icon:"\ud83e\udd20",title:"Call for contributors!",children:(0,t.jsxs)(n.p,{children:["Every connector is a ",(0,t.jsx)(n.a,{href:"https://github.com/logto-io/logto/issues/1861",children:"Tier 1 Bounty Hunter issue"})," by default. Feel free to comment on or create the related GitHub issue for acknowledging a connector if you are interested."]})}),"\n",(0,t.jsx)(n.p,{children:"If you are using the official Logto release (Docker image, Docker Compose, download from GitHub release page, or init via CLI), there's no need to manually add official connectors."}),"\n",(0,t.jsxs)(s.Z,{groupId:"cmd",children:[(0,t.jsx)(i.Z,{value:"cli",label:"CLI",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"logto connector add --official\n"})})}),(0,t.jsx)(i.Z,{value:"local",label:"Local",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm run cli connector add --official\n"})})}),(0,t.jsx)(i.Z,{value:"npx",label:"npx",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npx @logto/cli connector add --official\n"})})})]}),"\n",(0,t.jsx)(n.h3,{id:"third-party-connectors",children:"Third-party connectors"}),"\n",(0,t.jsxs)(n.p,{children:["Third-party connectors are those made for Logto but NOT in ",(0,t.jsx)(n.a,{href:"https://github.com/logto-io/logto/tree/master/packages/connectors",children:"@logto/connectors"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The connector to add should be a valid NPM package, and the package name must start with ",(0,t.jsx)(n.code,{children:"connector-"})," or ",(0,t.jsx)(n.code,{children:"@some-org/connector-"}),". E.g.:"]}),"\n",(0,t.jsxs)(s.Z,{groupId:"cmd",children:[(0,t.jsx)(i.Z,{value:"cli",label:"CLI",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"logto connector add service-a connector-service-b @org/service-c\n# is equal to\nlogto connector add connector-service-a connector-service-b @org/connector-service-c\n"})})}),(0,t.jsx)(i.Z,{value:"local",label:"Local",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm run cli connector add service-a connector-service-b @org/service-c\n# is equal to\nnpm run cli connector add connector-service-a connector-service-b @org/connector-service-c\n"})})}),(0,t.jsx)(i.Z,{value:"npx",label:"npx",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npx @logto/cli connector add service-a connector-service-b @org/service-c\n# is equal to\nnpx @logto/cli connector add connector-service-a connector-service-b @org/connector-service-c\n"})})})]}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsx)(n.p,{children:"Connectors are executable code! Inspect and review the COMPILED CODE (the content download from NPM) very, very carefully to avoid potential security issues if you are trying to use a third-party connector."})}),"\n",(0,t.jsx)(n.admonition,{title:"Note",type:"info",children:(0,t.jsx)(n.p,{children:"Remember to restart your Logto instance to get the changes reflected."})}),"\n",(0,t.jsx)(n.h3,{id:"link-local-connectors",children:"Link local connectors"}),"\n",(0,t.jsx)(r.Z,{cloud:!0,oss:{major:1,minor:2}}),"\n",(0,t.jsxs)(n.p,{children:["Logto also comes with a set of prebuilt connectors in the ",(0,t.jsx)(n.code,{children:"<logto-root>/pacakges/connectors"})," of your Logto instance directory. They are linked to the core service by default, which you can manually link again for updates (e.g. add a new local connector)."]}),"\n",(0,t.jsxs)(s.Z,{groupId:"cmd",children:[(0,t.jsx)(i.Z,{value:"cli",label:"CLI",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"logto connector link\n"})})}),(0,t.jsx)(i.Z,{value:"local",label:"Local",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm run cli connector link\n"})})}),(0,t.jsx)(i.Z,{value:"npx",label:"npx",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npx @logto/cli connector link\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["This command will create symbolic links of every connector in ",(0,t.jsx)(n.code,{children:"<logto-root>/packages/connectors"})," to ",(0,t.jsx)(n.code,{children:"<logto-root>/packages/core/connectors"}),". If a connector with the same name already exists in ",(0,t.jsx)(n.code,{children:"packages/core/connectors"}),", it will be removed first."]}),"\n",(0,t.jsx)(n.h2,{id:"remove-connectors",children:"Remove connectors"}),"\n",(0,t.jsxs)(s.Z,{groupId:"cmd",children:[(0,t.jsx)(i.Z,{value:"cli",label:"CLI",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"logto connector remove connector-service-a @org/connector-service-b\n"})})}),(0,t.jsx)(i.Z,{value:"local",label:"Local",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm run cli connector remove connector-service-a @org/connector-service-b\n"})})}),(0,t.jsx)(i.Z,{value:"npx",label:"npx",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npx @logto/cli connector remove connector-service-a @org/connector-service-b\n"})})})]}),"\n",(0,t.jsx)(n.admonition,{title:"Note",type:"info",children:(0,t.jsx)(n.p,{children:"Remember to restart your Logto instance to get the changes reflected."})})]})}function g(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},38140:function(e,n,o){o.d(n,{Z:function(){return T}});var t=o(50959),c=o(11527);function r(e){const{mdxAdmonitionTitle:n,rest:o}=function(e){const n=t.Children.toArray(e),o=n.find((e=>t.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),r=n.filter((e=>e!==o)),a=o?.props.children;return{mdxAdmonitionTitle:a,rest:r.length>0?(0,c.jsx)(c.Fragment,{children:r}):null}}(e.children),r=e.title??n;return{...e,...r&&{title:r},children:o}}var a=o(45924),i=o(77146),s=o(94843),l={admonition:"admonition_Ea3n",admonitionHeading:"admonitionHeading_OqI6",admonitionIcon:"admonitionIcon_Ckmq",admonitionContent:"admonitionContent_NLSJ"};function d(e){let{type:n,className:o,children:t}=e;return(0,c.jsx)("div",{className:(0,a.Z)(s.k.common.admonition,s.k.common.admonitionType(n),l.admonition,o),children:t})}function u(e){let{icon:n,title:o}=e;return(0,c.jsxs)("div",{className:l.admonitionHeading,children:[(0,c.jsx)("span",{className:l.admonitionIcon,children:n}),o]})}function h(e){let{children:n}=e;return n?(0,c.jsx)("div",{className:l.admonitionContent,children:n}):null}function m(e){const{type:n,icon:o,title:t,children:r,className:a}=e;return(0,c.jsxs)(d,{type:n,className:a,children:[(0,c.jsx)(u,{title:t,icon:o}),(0,c.jsx)(h,{children:r})]})}function p(e){return(0,c.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,c.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const g={icon:(0,c.jsx)(p,{}),title:(0,c.jsx)(i.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function x(e){return(0,c.jsx)(m,{...g,...e,className:(0,a.Z)("alert alert--secondary",e.className),children:e.children})}function f(e){return(0,c.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,c.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const v={icon:(0,c.jsx)(f,{}),title:(0,c.jsx)(i.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function j(e){return(0,c.jsx)(m,{...v,...e,className:(0,a.Z)("alert alert--success",e.className),children:e.children})}function b(e){return(0,c.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,c.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const y={icon:(0,c.jsx)(b,{}),title:(0,c.jsx)(i.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function N(e){return(0,c.jsx)(m,{...y,...e,className:(0,a.Z)("alert alert--info",e.className),children:e.children})}function k(e){return(0,c.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,c.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const w={icon:(0,c.jsx)(k,{}),title:(0,c.jsx)(i.Z,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function Z(e){return(0,c.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,c.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const I={icon:(0,c.jsx)(Z,{}),title:(0,c.jsx)(i.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const C={icon:(0,c.jsx)(k,{}),title:(0,c.jsx)(i.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};var L={...{note:x,tip:j,info:N,warning:function(e){return(0,c.jsx)(m,{...w,...e,className:(0,a.Z)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,c.jsx)(m,{...I,...e,className:(0,a.Z)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,c.jsx)(x,{title:"secondary",...e}),important:e=>(0,c.jsx)(N,{title:"important",...e}),success:e=>(0,c.jsx)(j,{title:"success",...e}),caution:function(e){return(0,c.jsx)(m,{...C,...e,className:(0,a.Z)("alert alert--warning",e.className),children:e.children})}}};function T(e){const n=r(e),o=(t=n.type,L[t]||(console.warn(`No admonition component found for admonition type "${t}". Using Info as fallback.`),L.info));var t;return(0,c.jsx)(o,{...n})}},75268:function(e,n,o){o.d(n,{Z:function(){return a}});o(50959);var t=o(45924),c={tabItem:"tabItem_zBCg"},r=o(11527);function a(e){let{children:n,hidden:o,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.Z)(c.tabItem,a),hidden:o,children:n})}},67234:function(e,n,o){o.d(n,{Z:function(){return N}});var t=o(50959),c=o(45924),r=o(58748),a=o(28903),i=o(88137),s=o(70670),l=o(91391),d=o(47841);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:o}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:o,attributes:t,default:c}}=e;return{value:n,label:o,attributes:t,default:c}}))}(o);return function(e){const n=(0,l.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,o])}function m(e){let{value:n,tabValues:o}=e;return o.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:o}=e;const c=(0,a.k6)(),r=function(e){let{queryString:n=!1,groupId:o}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return o??null}({queryString:n,groupId:o});return[(0,s._X)(r),(0,t.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(c.location.search);n.set(r,e),c.replace({...c.location,search:n.toString()})}),[r,c])]}function g(e){const{defaultValue:n,queryString:o=!1,groupId:c}=e,r=h(e),[a,s]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:o}=e;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:o}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${o.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=o.find((e=>e.default))??o[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:r}))),[l,u]=p({queryString:o,groupId:c}),[g,x]=function(e){let{groupId:n}=e;const o=function(e){return e?`docusaurus.tab.${e}`:null}(n),[c,r]=(0,d.Nk)(o);return[c,(0,t.useCallback)((e=>{o&&r.set(e)}),[o,r])]}({groupId:c}),f=(()=>{const e=l??g;return m({value:e,tabValues:r})?e:null})();(0,i.Z)((()=>{f&&s(f)}),[f]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),x(e)}),[u,x,r]),tabValues:r}}var x=o(77691),f={tabList:"tabList_nHxI",tabItem:"tabItem_BSGW"},v=o(11527);function j(e){let{className:n,block:o,selectedValue:t,selectValue:a,tabValues:i}=e;const s=[],{blockElementScrollPositionUntilNextRender:l}=(0,r.o5)(),d=e=>{const n=e.currentTarget,o=s.indexOf(n),c=i[o].value;c!==t&&(l(n),a(c))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const o=s.indexOf(e.currentTarget)+1;n=s[o]??s[0];break}case"ArrowLeft":{const o=s.indexOf(e.currentTarget)-1;n=s[o]??s[s.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":o},n),children:i.map((e=>{let{value:n,label:o,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>s.push(e),onKeyDown:u,onClick:d,...r,className:(0,c.Z)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":t===n}),children:o??n},n)}))})}function b(e){let{lazy:n,children:o,selectedValue:c}=e;const r=(Array.isArray(o)?o:[o]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===c));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==c})))})}function y(e){const n=g(e);return(0,v.jsxs)("div",{className:(0,c.Z)("tabs-container",f.tabList),children:[(0,v.jsx)(j,{...e,...n}),(0,v.jsx)(b,{...e,...n})]})}function N(e){const n=(0,x.Z)();return(0,v.jsx)(y,{...e,children:u(e.children)},String(n))}},22548:function(e,n,o){o.d(n,{Z:function(){return a}});var t="availability_kRMk",c=o(11527);const r=e=>"comingSoon"===e?"coming soon-blue":"boolean"==typeof e?e?"\u2713 available-4EA254":"not applicable-78767F":`since v${e.major}.${e.minor}-4EA254`;var a=e=>{let{cloud:n,oss:o}=e;return(0,c.jsxs)("div",{className:t,children:[(0,c.jsx)("img",{alt:"Cloud availability",src:`https://img.shields.io/badge/Cloud-${r(n)}`}),(0,c.jsx)("img",{alt:"OSS availability",src:`https://img.shields.io/badge/OSS-${r(o)}`})]})}},17279:function(e,n,o){o.d(n,{Z:function(){return i},a:function(){return a}});var t=o(50959);const c={},r=t.createContext(c);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);