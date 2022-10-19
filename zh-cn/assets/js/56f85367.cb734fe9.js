"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[6402],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,k=c["".concat(p,".").concat(m)]||c[m]||s[m]||l;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},66139:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return s}});var r=n(665),a=n(40151),l=(n(59496),n(49613)),i=["components"],o={},p="\u914d\u7f6e",d={unversionedId:"docs/references/core/configuration",id:"docs/references/core/configuration",title:"\u914d\u7f6e",description:"\u73af\u5883\u53d8\u91cf",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/docs/references/core/configuration.md",sourceDirName:"docs/references/core",slug:"/docs/references/core/configuration",permalink:"/zh-cn/docs/references/core/configuration",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/i18n/zh-cn/docusaurus-plugin-content-docs/current/docs/references/core/configuration.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"\ud83e\uddf1 \u6838\u5fc3\u670d\u52a1",permalink:"/zh-cn/docs/references/core/"},next:{title:"\ud83d\udcc1 API \u8d44\u6e90",permalink:"/zh-cn/docs/references/resources/"}},u={},s=[{value:"\u73af\u5883\u53d8\u91cf",id:"\u73af\u5883\u53d8\u91cf",level:2},{value:"\u7528\u6cd5",id:"\u7528\u6cd5",level:3},{value:"\u53d8\u91cf",id:"\u53d8\u91cf",level:3},{value:"\u542f\u7528 HTTPS",id:"\u542f\u7528-https",level:3},{value:"\u4f7f\u7528 Node",id:"\u4f7f\u7528-node",level:4},{value:"\u4f7f\u7528 HTTPS \u4ee3\u7406",id:"\u4f7f\u7528-https-\u4ee3\u7406",level:4},{value:"Database configs",id:"database-configs",level:2},{value:"About refresh token reuse interval",id:"about-refresh-token-reuse-interval",level:3},{value:"Supported private key types",id:"supported-private-key-types",level:3}],c={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,l.kt)("h2",{id:"\u73af\u5883\u53d8\u91cf"},"\u73af\u5883\u53d8\u91cf"),(0,l.kt)("h3",{id:"\u7528\u6cd5"},"\u7528\u6cd5"),(0,l.kt)("p",null,"Logto \u6309\u5982\u4e0b\u987a\u5e8f\u5904\u7406\u73af\u5883\u53d8\u91cf (environment variables)\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7cfb\u7edf\u73af\u5883\u53d8\u91cf"),(0,l.kt)("li",{parentName:"ul"},"\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u7b26\u5408 ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/motdotla/dotenv#readme"},"dotenv")," \u683c\u5f0f\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},".env")," \u6587\u4ef6")),(0,l.kt)("p",null,"\u4e5f\u5c31\u662f\u8bf4\uff0c\u7cfb\u7edf\u73af\u5883\u53d8\u91cf\u4f1a\u8986\u76d6 ",(0,l.kt)("inlineCode",{parentName:"p"},".env")," \u5df2\u5b58\u5728\u7684\u503c\u3002"),(0,l.kt)("h3",{id:"\u53d8\u91cf"},"\u53d8\u91cf"),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"npm start")," \u5728\u6839\u76ee\u5f55\u4e0b\u8fd0\u884c Logto\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," \u5c06\u6c38\u8fdc\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"production"),"\u3002")),(0,l.kt)("p",null,"\u5728\u9ed8\u8ba4\u503c\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"protocol")," \u5c06\u4f1a\u6839\u636e\u4f60\u7684 HTTPS \u914d\u7f6e\u53d6\u503c ",(0,l.kt)("inlineCode",{parentName:"p"},"http")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"https"),"\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NODE_ENV"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"'production' ","|"," 'test' ","|"," undefined")),(0,l.kt)("td",{parentName:"tr",align:null},"Logto \u8fd0\u884c\u5728\u4ec0\u4e48\u6837\u7684\u73af\u5883\u91cc\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PORT"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"3001")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},"Logto \u76d1\u542c\u7684\u672c\u5730\u7aef\u53e3\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DB_URL"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Logto \u6570\u636e\u5e93\u7684 ",(0,l.kt)("a",{parentName:"td",href:"https://www.postgresql.org/docs/14/libpq-connect.html#id-1.7.3.8.3.6"},"Postgres DSN"),"\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HTTPS_CERT_PATH"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string ","|"," undefined")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8be6\u89c1 ",(0,l.kt)("a",{parentName:"td",href:"#%E5%90%AF%E7%94%A8-https"},"\u542f\u7528 HTTPS"),"\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HTTPS_KEY_PATH"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string ","|"," undefined")),(0,l.kt)("td",{parentName:"tr",align:null},"\u540c\u4e0a\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TRUST_PROXY_HEADER"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"\u540c\u4e0a\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ENDPOINT"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"'protocol://localhost:$PORT'")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f60\u53ef\u4ee5\u6307\u5b9a\u4e00\u4e2a\u5e26\u6709\u81ea\u5b9a\u4e49\u57df\u540d\u7684\u6307\u5411 Logto \u7684 URL\uff0c\u7528\u4e8e\u5728\u7ebf\u6d4b\u8bd5\u6216\u751f\u4ea7\u73af\u5883\u3002\u8fd9\u4e5f\u4f1a\u5f71\u54cd\u5230 ",(0,l.kt)("a",{parentName:"td",href:"https://openid.net/specs/openid-connect-core-1_0.html#IssuerIdentifier"},"OIDC issuer identifier")," \u548c\u300c\u7ba1\u7406\u63a7\u5236\u53f0\u300dRedirect URIs \u7684\u503c\u3002")))),(0,l.kt)("h3",{id:"\u542f\u7528-https"},"\u542f\u7528 HTTPS"),(0,l.kt)("h4",{id:"\u4f7f\u7528-node"},"\u4f7f\u7528 Node"),(0,l.kt)("p",null,"Node \u539f\u751f\u652f\u6301 HTTPS\u3002\u5f53 ",(0,l.kt)("inlineCode",{parentName:"p"},"HTTPS_CERT_PATH")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"HTTPS_KEY_PATH")," ",(0,l.kt)("strong",{parentName:"p"},"\u540c\u65f6")," \u88ab\u63d0\u4f9b\u65f6\u624d\u4f1a\u901a\u8fc7 Node \u542f\u7528 HTTPS\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"HTTPS_CERT_PATH")," \u662f\u4f60\u7684 HTTPS certificate \u7684\u8def\u5f84\uff1b",(0,l.kt)("inlineCode",{parentName:"p"},"HTTPS_KEY_PATH")," \u662f\u4f60\u7684 HTTPS key \u7684\u8def\u5f84\u3002"),(0,l.kt)("h4",{id:"\u4f7f\u7528-https-\u4ee3\u7406"},"\u4f7f\u7528 HTTPS \u4ee3\u7406"),(0,l.kt)("p",null,"\u53e6\u4e00\u4e2a\u60ef\u5e38\u7684\u505a\u6cd5\u662f\u5728 Node \u524d\u653e\u7f6e\u4e00\u4e2a HTTPS \u4ee3\u7406\uff08\u4f8b\u5982 Nginx\uff09\u3002"),(0,l.kt)("p",null,"\u5728\u8fd9\u6837\u7684\u60c5\u51b5\u4e0b\uff0c\u4f60\u5f88\u53ef\u80fd\u9700\u8981\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"TRUST_PROXY_HEADER")," \u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," \u4ee5\u8868\u660e\u4ee3\u7406 header \u7684\u5b57\u6bb5\u662f\u5426\u5e94\u8be5\u88ab\u4fe1\u4efb\u3002Logto \u5c06\u628a\u6b64\u503c\u4f20\u9012\u7ed9 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/koajs/koa/blob/master/docs/api/index.md#settings"},"Koa \u5e94\u7528\u8bbe\u7f6e"),"\u3002"),(0,l.kt)("p",null,"\u89c1 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#trusting-tls-offloading-proxies"},"Trusting TLS offloading proxies")," \u4ee5\u4e86\u89e3\u4f55\u65f6\u9700\u8981\u914d\u7f6e\u6b64\u5b57\u6bb5\u3002"),(0,l.kt)("h2",{id:"database-configs"},"Database configs"),(0,l.kt)("p",null,"Managing too many environment variables are not efficient and flexible, so most of our general configs are stored in the database table ",(0,l.kt)("inlineCode",{parentName:"p"},"_logto_configs"),"."),(0,l.kt)("p",null,"The table is a simple key-value storage, and the key is enumerable as following:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"oidc.privateKeys"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string[]")),(0,l.kt)("td",{parentName:"tr",align:null},"The string array of the ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#cookieskeys"},"signing cookie keys"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"oidc.cookieKeys"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string[]")),(0,l.kt)("td",{parentName:"tr",align:null},"The string array of the private key content for ",(0,l.kt)("a",{parentName:"td",href:"https://openid.net/specs/openid-connect-core-1_0.html#Signing"},"OIDC JWT signing"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"oidc.refreshTokenReuseInterval"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"See the section below.")))),(0,l.kt)("h3",{id:"about-refresh-token-reuse-interval"},"About refresh token reuse interval"),(0,l.kt)("p",null,"This interval helps to avoid concurrency issues when exchanging the rotating refresh token multiple times within a given timeframe."),(0,l.kt)("p",null,"During the leeway window (in seconds), the consumed refresh token will be considered as valid."),(0,l.kt)("p",null,"This is useful for distributed apps and serverless apps like Next.js, in which there is no shared memory."),(0,l.kt)("p",null,"It has a default value ",(0,l.kt)("inlineCode",{parentName:"p"},"3")," if you went through our seeding process."),(0,l.kt)("h3",{id:"supported-private-key-types"},"Supported private key types"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"RSA"),(0,l.kt)("li",{parentName:"ul"},"OKP (Ed25519, Ed448, X25519, X448 sub types)"),(0,l.kt)("li",{parentName:"ul"},"EC (P-256, secp256k1, P-384, and P-521 curves)")))}m.isMDXComponent=!0}}]);