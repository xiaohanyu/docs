"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[65197],{7904:function(e,t,n){n.r(t),n.d(t,{assets:function(){return a},contentTitle:function(){return i},default:function(){return l},frontMatter:function(){return s},metadata:function(){return r},toc:function(){return u}});var c=n(11527),o=n(17279);const s={sidebar_position:4},i="Backup codes",r={id:"docs/recipes/multi-factor-auth/backup-codes",title:"Backup codes",description:"Concepts",source:"@site/docs/docs/recipes/multi-factor-auth/backup-codes.md",sourceDirName:"docs/recipes/multi-factor-auth",slug:"/docs/recipes/multi-factor-auth/backup-codes",permalink:"/next/docs/recipes/multi-factor-auth/backup-codes",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/multi-factor-auth/backup-codes.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"WebAuthn (Passkeys)",permalink:"/next/docs/recipes/multi-factor-auth/webauthn"},next:{title:"\ud83e\ude9b Configure connectors",permalink:"/next/docs/recipes/configure-connectors/"}},a={},u=[{value:"Concepts",id:"concepts",level:2},{value:"Auth flows",id:"auth-flows",level:2}];function d(e){const t={a:"a",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h1,{id:"backup-codes",children:"Backup codes"}),"\n",(0,c.jsx)(t.h2,{id:"concepts",children:"Concepts"}),"\n",(0,c.jsx)(t.p,{children:"Backup codes, also known as Recovery code, is a one-time use code for MFA, acting as a backup in case the user's primary authentication factors (e.g., authenticator app or hardware token) are unavailable."}),"\n",(0,c.jsx)(t.p,{children:"Losing them can lead to account recovery challenges. Therefore, it's recommended to set up an additional primary factor before enabling Backup Codes, giving it priority."}),"\n",(0,c.jsxs)(t.p,{children:["Logto automatically generates 10 Backup Codes for users once they configure an additional factor. Each code is single-use. Users are advised to regenerate a new set of codes in the User Account Settings (accessible through the ",(0,c.jsx)(t.a,{href:"/docs/recipes/interact-with-management-api/",children:"Management API"}),") before using up all the existing codes."]}),"\n",(0,c.jsx)(t.h2,{id:"auth-flows",children:"Auth flows"}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsx)(t.li,{children:(0,c.jsx)(t.strong,{children:"Setup flows"})}),"\n"]}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.img,{alt:"Backup codes set up flow",src:n(712).Z+"",width:"2716",height:"1348"})}),"\n",(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsx)(t.li,{children:(0,c.jsx)(t.strong,{children:"Verification flow"})}),"\n"]}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.img,{alt:"Backup codes verification flow",src:n(60424).Z+"",width:"2706",height:"1250"})})]})}function l(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},712:function(e,t,n){t.Z=n.p+"assets/images/backup-codes-set-up-flow-50cd7627098b278e790e8e12d96c9cc7.webp"},60424:function(e,t,n){t.Z=n.p+"assets/images/backup-codes-verification-flow-9b0e0e92e5492834110cd159e7977efd.webp"},17279:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return i}});var c=n(50959);const o={},s=c.createContext(o);function i(e){const t=c.useContext(s);return c.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),c.createElement(s.Provider,{value:t},e.children)}}}]);