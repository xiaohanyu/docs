"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[6673],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||r;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6771:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var a=n(665),o=n(40151),r=(n(59496),n(49613)),i=["components"],s={date:new Date("2023-01-01T00:00:00.000Z"),authors:"gao",tags:["release"]},l="Logto 2023 New Year Update",c={permalink:"/zh-cn/blog/releases/2023-jan",source:"@site/blog/releases/2023-jan.md",title:"Logto 2023 New Year Update",description:"\ud83d\ude4b Hey folks!",date:"2023-01-01T00:00:00.000Z",formattedDate:"2023\u5e741\u67081\u65e5",tags:[{label:"release",permalink:"/zh-cn/blog/tags/release"}],readingTime:3.295,hasTruncateMarker:!0,authors:[{name:"Gao",title:"Founder of Silverhand",url:"https://github.com/gao-sun",imageURL:"https://github.com/gao-sun.png",key:"gao"}],frontMatter:{date:"2023-01-01T00:00:00.000Z",authors:"gao",tags:["release"]},prevItem:{title:"Logto 2023 February Update",permalink:"/zh-cn/blog/releases/2023-feb"},nextItem:{title:"The design considerations for a seamless sign-in experience (Second Chapter)",permalink:"/zh-cn/blog/design-for-seamless-sie-2"}},u={authorsImageUrls:[void 0]},d=[{value:"\ud83d\udca5 Breaking change \ud83d\udca5",id:"-breaking-change-",level:2},{value:"Migration",id:"migration",level:2},{value:"Feature updates",id:"feature-updates",level:2},{value:"\ud83e\ude9d Web hooks",id:"-web-hooks",level:3},{value:"\u2699\ufe0f Advanced search API",id:"\ufe0f-advanced-search-api",level:3},{value:"\ud83d\udd17 Connectors",id:"-connectors",level:3},{value:"Enhancement",id:"enhancement",level:2},{value:"\ud83d\udcbb Admin Console enhancement to streamline the set up process",id:"-admin-console-enhancement-to-streamline-the-set-up-process",level:3},{value:"\ud83e\uddd1\u200d\ud83d\ude80 Refactored Interaction APIs and Audit logs",id:"-refactored-interaction-apis-and-audit-logs",level:3},{value:"Blog posts",id:"blog-posts",level:2}],p={toc:d};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\ud83d\ude4b Hey folks!"),(0,r.kt)("p",null,"For the first day of 2023, we shipped a few things for everybody: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Web hooks, Advanced search API, New connectors"),(0,r.kt)("li",{parentName:"ul"},"Admin console enhancement, Refactored Interaction APIs and Audit logs"),(0,r.kt)("li",{parentName:"ul"},"New blog posts")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"We are currently busy working on the general availability version which includes User profile, RBAC (Role-based access control), and much more!")),(0,r.kt)("h2",{id:"-breaking-change-"},"\ud83d\udca5 Breaking change \ud83d\udca5"),(0,r.kt)("p",null,"If you want to perform the original fuzzy user search via Management API, adding ",(0,r.kt)("inlineCode",{parentName:"p"},"%")," around the keyword is required. E.g.:"),(0,r.kt)("p",null,"Original: ",(0,r.kt)("inlineCode",{parentName:"p"},"GET /users?search=foo"),"\nNow: ",(0,r.kt)("inlineCode",{parentName:"p"},"GET /users?search=%foo%")),(0,r.kt)("h2",{id:"migration"},"Migration"),(0,r.kt)("p",null,"If you are upgrading from an older version of logto, make sure to go through our ",(0,r.kt)("a",{parentName:"p",href:"https://docs.logto.io/docs/tutorials/using-cli/database-alteration"},"Database alteration")," tutorial."),(0,r.kt)("h2",{id:"feature-updates"},"Feature updates"),(0,r.kt)("h3",{id:"-web-hooks"},"\ud83e\ude9d Web hooks"),(0,r.kt)("p",null,"With hooks, Logto can enable the next-level extensibility for you to interact with other services in an event-based manner. E.g., do some async jobs after a new user registered."),(0,r.kt)("p",null,"We support three events in this version: ",(0,r.kt)("inlineCode",{parentName:"p"},"PostRegister"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"PostSignIn")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"PostResetPassword"),". Check out ",(0,r.kt)("a",{parentName:"p",href:"https://docs.logto.io/docs/recipes/web-hooks/"},"\ud83e\ude9d Web hooks")," for the concept explained and detailed usage."),(0,r.kt)("h3",{id:"\ufe0f-advanced-search-api"},"\u2699\ufe0f Advanced search API"),(0,r.kt)("p",null,"Management API is a programmatic way to communicate with Logto. We redesigned the user search API to make it powerful for advanced search requests."),(0,r.kt)("p",null,"Now you can designate one or multiple search fields as well as the match mode. For example, you can search users that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Name starts with \u201cAlice\u201d, case-sensitive; or"),(0,r.kt)("li",{parentName:"ul"},"Email includes \u201cAlice\u201d, case-insensitive.")),(0,r.kt)("p",null,"Exact search is also supported, e.g., search users that name is exactly \u201cJohn Wick\u201d. See ",(0,r.kt)("a",{parentName:"p",href:"https://docs.logto.io/docs/recipes/interact-with-management-api/advanced-user-search"},"Advanced user search")," for details."),(0,r.kt)("h3",{id:"-connectors"},"\ud83d\udd17 Connectors"),(0,r.kt)("p",null,"Logto is built on open standards, and we believe they can eliminate enormous gaps in software development. From this version, Logto supports creating multiple connectors based on the same open standard: ",(0,r.kt)("strong",{parentName:"p"},"OAuth 2.0")," or ",(0,r.kt)("strong",{parentName:"p"},"OpenID Connect"),"; We call them \u201cstandard connectors\u201d."),(0,r.kt)("p",null,"We are developing more standard connectors like SAML and LDAP. Feel free to let us know your needs!"),(0,r.kt)("p",null,"Besides, we\u2019d like to highlight our community contributors:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/kentio"},"@kentio")," contributed AWS SES connector"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/StringKe"},"@StringKe")," contributed Tencent SMS and Feishu (Lark) connector")),(0,r.kt)("p",null,"Thank you!"),(0,r.kt)("h2",{id:"enhancement"},"Enhancement"),(0,r.kt)("h3",{id:"-admin-console-enhancement-to-streamline-the-set-up-process"},"\ud83d\udcbb Admin Console enhancement to streamline the set up process"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"We revisited the Logto admin console UI and give it a fresh look! The goal of this is to make the admin console more intuitive and aesthetically pleasing, which ends up helping developers more efficiently perform the tasks.")),(0,r.kt)("p",null,"Now you can feel the following enhancement as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Responsive design improvement")," We optimized responsive design to ensure that the interface looks great on different screen sizes. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Simplification of the layout")," We have streamlined the layout of the interface, organizing the content in a more logical and intuitive way. This makes it easier for our developers to navigate the interface and find what they are looking for."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Fixed the non-intuitive interaction behaviors")," we changed the saving interaction and make it a section-level behavior, which avoiding seeing too many double check alerts. We wish to provide a more secure developer experience when making configuration.")),(0,r.kt)("p",null,"Please check it out and explore, and let us know how you feel! \ud83d\ude09"),(0,r.kt)("h3",{id:"-refactored-interaction-apis-and-audit-logs"},"\ud83e\uddd1\u200d\ud83d\ude80 Refactored Interaction APIs and Audit logs"),(0,r.kt)("p",null,"Due to the increased flexibility and complexity of Sign-in experience, and to provide even more auditable and structured logs for user interactions, we decided to refactor our Interaction APIs with the logging mechanism; The original session APIs are deprecated from now."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This API change does not affect the end-user Sign-in experience.")),(0,r.kt)("p",null,"Audit logs become fine-categorized by the new key definitions, and payloads are optimized for behavior tracing. Check out the \u201cAudit logs\u201d tab in Admin console to feel the change."),(0,r.kt)("h2",{id:"blog-posts"},"Blog posts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://silverhand.substack.com/p/the-design-considerations-for-a-seamless-2d4?utm_source=github-release"},"The design considerations for a seamless sign-in experience (Second Chapter)")," Learn more about our design thinking and decision making philosophies"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dev.to/gaosun/series/21132?utm_source=github-release"},"Migrate a 60k LOC TypeScript (NodeJS) repo to ESM and testing become 4x faster")," A practical series of our engineering efforts on module system migration")))}h.isMDXComponent=!0}}]);