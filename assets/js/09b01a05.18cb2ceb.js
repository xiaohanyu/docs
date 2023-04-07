"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[60956],{49613:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return g}});var o=n(59496);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=o.createContext({}),c=function(t){var e=o.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},p=function(t){var e=c(t.components);return o.createElement(d.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},u=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,d=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=c(n),g=r,m=u["".concat(d,".").concat(g)]||u[g]||s[g]||i;return n?o.createElement(m,a(a({ref:e},p),{},{components:n})):o.createElement(m,a({ref:e},p))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=t,l.mdxType="string"==typeof t?t:r,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},81348:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var o=n(665),r=n(40151),i=(n(59496),n(49613)),a=["components"],l={},d="signIn",c={unversionedId:"sdk/Kotlin/android/io.logto.sdk.android/-logto-client/sign-in",id:"version-1.x/sdk/Kotlin/android/io.logto.sdk.android/-logto-client/sign-in",title:"signIn",description:"fun signIn(context String, completion: EmptyCompletion&lt;LogtoException&gt;)",source:"@site/versioned_docs/version-1.x/sdk/Kotlin/android/io.logto.sdk.android/-logto-client/sign-in.md",sourceDirName:"sdk/Kotlin/android/io.logto.sdk.android/-logto-client",slug:"/sdk/Kotlin/android/io.logto.sdk.android/-logto-client/sign-in",permalink:"/sdk/Kotlin/android/io.logto.sdk.android/-logto-client/sign-in",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/versioned_docs/version-1.x/sdk/Kotlin/android/io.logto.sdk.android/-logto-client/sign-in.md",tags:[],version:"1.x",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"logtoConfig",permalink:"/sdk/Kotlin/android/io.logto.sdk.android/-logto-client/logto-config"},next:{title:"signOut",permalink:"/sdk/Kotlin/android/io.logto.sdk.android/-logto-client/sign-out"}},p={},s=[{value:"Parameters",id:"parameters",level:2}],u={toc:s};function g(t){var e=t.components,n=(0,r.Z)(t,a);return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"signin"},"signIn"),(0,i.kt)("p",null,"fun signIn(context: ",(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/reference/kotlin/android/app/Activity.html"},"Activity"),", redirectUri: ",(0,i.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", completion: ",(0,i.kt)("a",{parentName:"p",href:"/sdk/Kotlin/android/io.logto.sdk.android.completion/-empty-completion/"},"EmptyCompletion"),"<",(0,i.kt)("a",{parentName:"p",href:"/sdk/Kotlin/android/io.logto.sdk.android.exception/-logto-exception/"},"LogtoException"),">",")"),(0,i.kt)("p",null,"Sign in"),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"context"),(0,i.kt)("td",{parentName:"tr",align:null},"the activity to perform a sign-in action.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"redirectUri"),(0,i.kt)("td",{parentName:"tr",align:null},"one of the redirect URIs of this application.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"completion"),(0,i.kt)("td",{parentName:"tr",align:null},"the completion which handles the result of signing in.")))))}g.isMDXComponent=!0}}]);