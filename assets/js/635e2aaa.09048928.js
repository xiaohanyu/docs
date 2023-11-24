"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[26304],{37373:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return a},default:function(){return u},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return d}});var o=t(11527),s=t(17279),i=t(22548);const r={sidebar_position:7.3},a="\ud83e\ude9d Webhooks",l={id:"docs/recipes/webhooks/README",title:"\ud83e\ude9d Webhooks",description:"Logto Webhook enables you to effortlessly receive real-time updates regarding specific events, such as user registration, sign-in, or password reset. You no longer need to continuously poll for updates.",source:"@site/docs/docs/recipes/webhooks/README.md",sourceDirName:"docs/recipes/webhooks",slug:"/docs/recipes/webhooks/",permalink:"/next/docs/recipes/webhooks/",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/webhooks/README.md",tags:[],version:"current",sidebarPosition:7.3,frontMatter:{sidebar_position:7.3},sidebar:"docsSidebar",previous:{title:"\ud83d\udcdc Inspect audit logs",permalink:"/next/docs/recipes/inspect-audit-logs/"},next:{title:"Configure in Console",permalink:"/next/docs/recipes/webhooks/configure-webhooks-in-console"}},c={},d=[{value:"Why use Webhook?",id:"why-use-webhook",level:2},{value:"Terms",id:"terms",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",mermaid:"mermaid",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"-webhooks",children:"\ud83e\ude9d Webhooks"}),"\n",(0,o.jsx)(i.Z,{cloud:!0,oss:{major:1,minor:5}}),"\n",(0,o.jsx)(n.p,{children:"Logto Webhook enables you to effortlessly receive real-time updates regarding specific events, such as user registration, sign-in, or password reset. You no longer need to continuously poll for updates."}),"\n",(0,o.jsxs)(n.p,{children:["When an event is triggered, Logto sends an HTTP request to the Endpoint URL you provide, containing detailed information about the event, such as user ID, username, email, and other relevant details (for more about the data included in the payload and header, refer to ",(0,o.jsx)(n.a,{href:"/next/docs/recipes/webhooks/webhook-request",children:"Webhook request"}),"). Your application can process this request and take customized actions, like sending an email or updating a database."]}),"\n",(0,o.jsx)(n.p,{children:"We continuously add more events based on user needs. If you have specific requirements for your business, please let us know."}),"\n",(0,o.jsx)(n.h2,{id:"why-use-webhook",children:"Why use Webhook?"}),"\n",(0,o.jsx)(n.p,{children:"Webhooks offer real-time communication between applications, eliminating the need for polling and enabling immediate data updates. They simplify application integration and workflow automation without complex code or proprietary APIs."}),"\n",(0,o.jsx)(n.p,{children:"Here are some examples of common usage scenarios for CIAM:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Send emails"}),": Configure a webhook to send a welcome email to new users upon registration or notify administrators when a user logs in from a new device or location."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Send notifications"}),": Configure a webhook to trigger a virtual assistant with your CRM system to provide real-time customer support when users sign up."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Perform additional API calls"}),": Configure a webhook to verify user access by checking their email domain or IP address and then use the Logto Management API to assign appropriate roles with resource permissions."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Data synchronization:"})," Configure webhooks to keep the application updated about changes such as user account suspensions or deletions."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Generate reports"}),": Set up a webhook to receive user login activity data and leverage it to create reports on user engagement or usage patterns."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"terms",children:"Terms"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{style:{textAlign:"left"},children:"Item"}),(0,o.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{style:{textAlign:"left"},children:"Event"}),(0,o.jsx)(n.td,{style:{textAlign:"left"},children:"When a specific action is done, it will trigger a hook event with a specific type. E.g., Logto will emit a PostSignUp hook event when the user finished the sign-up process and created a new account."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{style:{textAlign:"left"},children:"Hook"}),(0,o.jsx)(n.td,{style:{textAlign:"left"},children:"A single or series of actions that hook to a specific event. Action can be calling API, executing code snippets, etc."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{style:{textAlign:"left"},children:"Webhook"}),(0,o.jsxs)(n.td,{style:{textAlign:"left"},children:["A subtype of hook that indicates calling an API with the event payload.",(0,o.jsx)("br",{}),"Say a developer wants to send a notification when user signs in via a new device, the developer can add a webhook that calls his security service API to the PostSignIn event."]})]})]})]}),"\n",(0,o.jsxs)(n.p,{children:["Here's an example of enabling two web hooks for ",(0,o.jsx)(n.code,{children:"PostSignIn"})," event in Logto:"]}),"\n",(0,o.jsx)(n.mermaid,{value:"graph LR\n  subgraph Logto\n    SF(Sign-in finished)\n    PS(Post sign-in)\n    WH2(Web hook 2)\n    WH1(Web hook 1)\n  end\n\n  subgraph Service 2\n    E2(Endpoint)\n  end\n\n  subgraph Service 1\n    E1(Endpoint)\n  end\n\n  SF --\x3e|Trigger| PS\n  PS --\x3e WH1\n  PS --\x3e WH2\n  WH1 ---\x3e|POST API call| E1\n  WH2 ---\x3e|POST API call| E2"})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},22548:function(e,n,t){t.d(n,{Z:function(){return r}});var o="availability_kRMk",s=t(11527);const i=e=>"comingSoon"===e?"coming soon-blue":"boolean"==typeof e?e?"\u2713 available-4EA254":"not applicable-78767F":`since v${e.major}.${e.minor}-4EA254`;var r=e=>{let{cloud:n,oss:t}=e;return(0,s.jsxs)("div",{className:o,children:[(0,s.jsx)("img",{alt:"Cloud availability",src:`https://img.shields.io/badge/Cloud-${i(n)}`}),(0,s.jsx)("img",{alt:"OSS availability",src:`https://img.shields.io/badge/OSS-${i(t)}`})]})}},17279:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return r}});var o=t(50959);const s={},i=o.createContext(s);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);