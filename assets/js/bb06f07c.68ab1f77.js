"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[24907],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?o.createElement(f,a(a({ref:t},u),{},{components:n})):o.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5937:function(e,t,n){n.d(t,{Z:function(){return a}});var o="availability_kRMk",r=n(4637),i=function(e){return"comingSoon"===e?"coming soon-blue":"boolean"==typeof e?e?"\u2713 available-4EA254":"not applicable-78767F":"since v"+e.major+"."+e.minor+"-4EA254"},a=function(e){var t=e.cloud,n=e.oss;return(0,r.jsxs)("div",{className:o,children:[(0,r.jsx)("img",{alt:"Cloud availability",src:"https://img.shields.io/badge/Cloud-"+i(t)}),(0,r.jsx)("img",{alt:"OSS availability",src:"https://img.shields.io/badge/OSS-"+i(n)})]})}},65199:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return d}});var o=n(665),r=n(40151),i=(n(59496),n(49613)),a=n(5937),s=["components"],c={sidebar_position:7.1},l="\ud83c\udfe2 Organizations (Multi-tenancy)",u={unversionedId:"docs/recipes/organizations/README",id:"docs/recipes/organizations/README",title:"\ud83c\udfe2 Organizations (Multi-tenancy)",description:"Organization is particularly effective in business-to-business (B2B) apps. In addition to individual users, your clients can also consist of teams, organizations, or entire companies. Logto introduces Organizations as a foundational element for B2B authentication and authorization.",source:"@site/docs/docs/recipes/organizations/README.mdx",sourceDirName:"docs/recipes/organizations",slug:"/docs/recipes/organizations/",permalink:"/next/docs/recipes/organizations/",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/organizations/README.mdx",tags:[],version:"current",sidebarPosition:7.1,frontMatter:{sidebar_position:7.1},sidebar:"docsSidebar",previous:{title:"Common practice: you don't need a user table",permalink:"/next/docs/recipes/manage-users/you-dont-need-a-user-table"},next:{title:"Understand how organizations work",permalink:"/next/docs/recipes/organizations/understand-how-it-works"}},p={},d=[{value:"Before we start",id:"before-we-start",level:2}],m={toc:d};function f(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-organizations-multi-tenancy"},"\ud83c\udfe2 Organizations (Multi-tenancy)"),(0,i.kt)(a.Z,{cloud:"comingSoon",oss:"comingSoon",mdxType:"Availability"}),(0,i.kt)("p",null,"Organization is particularly effective in business-to-business (B2B) apps. In addition to individual users, your clients can also consist of teams, organizations, or entire companies. Logto introduces Organizations as a foundational element for B2B authentication and authorization."),(0,i.kt)("p",null,"Even if your product is consumer-facing, organization can still be useful for collaboration features, such as sharing resources with other users."),(0,i.kt)("p",null,"With this fundamental element, you can build the must-have features for multi-tenancy apps, such as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A product that can be used by multiple organizations."),(0,i.kt)("li",{parentName:"ul"},"Organization member provision on an invitation or just-in-time basis."),(0,i.kt)("li",{parentName:"ul"},"Access controls that defined by roles assigned to members within an organization."),(0,i.kt)("li",{parentName:"ul"},"Link organizations with Enterprise SSO (single sign-on) experience.")),(0,i.kt)("p",null,'The term "organization" is also used in other forms, such as "workspace", "team", "company", etc. In Logto, we use "organization" as the generic term to represent the concept of multi-tenancy.'),(0,i.kt)("h2",{id:"before-we-start"},"Before we start"),(0,i.kt)("p",null,'Hold on, you may heard of some products use the term "multi-tenancy" to represent the identity isolation: each tenant has its own set of users, permissions, and data.'),(0,i.kt)("p",null,'It may be counterintuitive, but in fact, "multi-tenancy" indicates the contrary: multiple tenants are sharing resources in a single instance. For example, in Notion (a popular collaboration tool):'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You can create and join multiple workspaces with one account, instead of sign up for each workspace with different accounts."),(0,i.kt)("li",{parentName:"ul"},"For each workspace, Notion defines a ",(0,i.kt)("strong",{parentName:"li"},"same set"),' of access levels: "Worksapce owner" and "member", while you may expect different access levels for different workspaces.')),(0,i.kt)("p",null,"For more information, see our ",(0,i.kt)("a",{parentName:"p",href:"https://blog.logto.io/tenancy-models/"},"blog post about tenancy models"),"."))}f.isMDXComponent=!0}}]);