"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[12262],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22149:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(665),a=n(40151),o=(n(59496),n(49613)),i=["components"],s={sidebar_position:3.1},c="\ud83d\udee1\ufe0f Multi-factor auth",l={unversionedId:"docs/recipes/multi-factor-auth/README",id:"docs/recipes/multi-factor-auth/README",title:"\ud83d\udee1\ufe0f Multi-factor auth",description:"Added in v1.11.0",source:"@site/docs/docs/recipes/multi-factor-auth/README.md",sourceDirName:"docs/recipes/multi-factor-auth",slug:"/docs/recipes/multi-factor-auth/",permalink:"/next/docs/recipes/multi-factor-auth/",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/multi-factor-auth/README.md",tags:[],version:"current",sidebarPosition:3.1,frontMatter:{sidebar_position:3.1},sidebar:"docsSidebar",previous:{title:"Check out the live preview",permalink:"/next/docs/recipes/customize-sie/check-out-the-live-preview"},next:{title:"Config MFA",permalink:"/next/docs/recipes/multi-factor-auth/config-mfa"}},u={},p=[{value:"What is MFA?",id:"what-is-mfa",level:2},{value:"Why do we need MFA?",id:"why-do-we-need-mfa",level:2},{value:"Logto support",id:"logto-support",level:2}],d={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\ufe0f-multi-factor-auth"},"\ud83d\udee1\ufe0f Multi-factor auth"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Added in v1.11.0")),(0,o.kt)("p",null,"Logto offers a minimal-effort configuration process, allowing you to enable MFA with a single click. Our comprehensive MFA flows prioritize security and balance user experience."),(0,o.kt)("h2",{id:"what-is-mfa"},"What is MFA?"),(0,o.kt)("p",null,"MFA, or Multi-Factor Authentication, is a security method that adds an extra layer of protection during the login process. It requires users to provide multiple credentials to establish their digital identity. There are two primary types of authentication:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"SFA/1FA (Single-Factor Authentication)"),": This is the initial login method, typically requiring a username/email/phone and password."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"MFA/2FA (Multi-Factor Authentication/Two-Factor Authentication)"),": MFA mandates at least two different verification methods for accessing your account, effectively strengthening your defense against unauthorized access.")),(0,o.kt)("p",null,"Authentication factors are the moves that prove you're really you. There are lots of factors divided by attributes to choose from:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Types"),(0,o.kt)("th",{parentName:"tr",align:null},"What it means"),(0,o.kt)("th",{parentName:"tr",align:null},"Verification factors (Logto supported)"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Knowledge"),(0,o.kt)("td",{parentName:"tr",align:null},"Something you know"),(0,o.kt)("td",{parentName:"tr",align:null},"Password, Email verification code, Backup code")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Possession"),(0,o.kt)("td",{parentName:"tr",align:null},"Something you have"),(0,o.kt)("td",{parentName:"tr",align:null},"SMS verification code, Authenticator app OTP, Hardware OTP (Security key)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Inherence"),(0,o.kt)("td",{parentName:"tr",align:null},"Something you are"),(0,o.kt)("td",{parentName:"tr",align:null},"Biometrics like fingerprints, face ID")))),(0,o.kt)("p",null,'In an MFA flow, it\'s essential that the second authentication step uses a different attribute type (Knowledge/Possession/Inherence) from the first. For instance, combining "Password (Knowledge)" as the 1FA and "Authenticator app OTP (Possession)" as the 2FA can effectively thwart various attack vectors.'),(0,o.kt)("h2",{id:"why-do-we-need-mfa"},"Why do we need MFA?"),(0,o.kt)("p",null,"MFA is a vital security measure, particularly for B2B and B2E services, and it's recommended for B2C applications as well. Here's why it's crucial:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Account Hacking"),": Unauthorized access to accounts is a prevalent security concern, but MFA provides robust protection, blocking 99.9% of account hacks (especially for password breaches). It's a cost-effective way to enhance security, complemented by options like passwordless logins, password policies, password managers, and attack protection measures."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"SaaS Adoption"),": A significant number of enterprises are adopting MFA to safeguard their employees and protect sensitive company data and assets. A survey by LastPass revealed that 57% of global businesses now use MFA, marking a 12% increase from the previous year."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Regulatory Compliance"),": MFA helps organizations stay compliant with data protection regulations such as GDPR and NIST, ensuring the security of user data.")),(0,o.kt)("h2",{id:"logto-support"},"Logto support"),(0,o.kt)("p",null,"Logto simplifies the process of enabling MFA by offering a one-click toggle, requiring no complex configurations. Get started with our quick guide on how to ",(0,o.kt)("a",{parentName:"p",href:"./config-mfa"},"Enable Verification Factors"),"."),(0,o.kt)("p",null,"We also provide support for two MFA policies: User-Controlled and Mandatory MFA, with Adaptive MFA on the horizon. Learn more about configuring these policies in our guide on ",(0,o.kt)("a",{parentName:"p",href:"./config-mfa"},"Setting MFA Policies"),"."),(0,o.kt)("p",null,"Additionally, you have the flexibility to customize your User Account Settings and Profile pages through our ",(0,o.kt)("a",{parentName:"p",href:"/docs/recipes/interact-with-management-api/"},"Management API"),". This functionality includes the ability to manage the Authenticator app OTP and Backup codes, with WebAuthn support coming soon."),(0,o.kt)("p",null,"Learn more about the usage and user flow for each verification factor, including ",(0,o.kt)("a",{parentName:"p",href:"./authenticator-app-otp"},"Authenticator app OTP"),", ",(0,o.kt)("a",{parentName:"p",href:"./webauthn"},"WebAuthn (Passkey)"),", and ",(0,o.kt)("a",{parentName:"p",href:"./backup-code"},"Backup codes")," in our dedicated resources."))}f.isMDXComponent=!0}}]);