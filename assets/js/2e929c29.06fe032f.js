"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[44289],{71368:function(e,n,t){t.d(n,{ZP:function(){return s}});var o=t(11527),i=t(17279);function r(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h3,{id:"register-twilio-account",children:"Register Twilio account"}),"\n",(0,o.jsxs)(n.p,{children:["Create a new account on ",(0,o.jsx)(n.a,{href:"https://www.twilio.com",children:"Twilio"}),". (Jump to the next step if you already have one.)"]}),"\n",(0,o.jsx)(n.h3,{id:"set-up-senders-phone-numbers",children:"Set up senders' phone numbers"}),"\n",(0,o.jsxs)(n.p,{children:["Go to the ",(0,o.jsx)(n.a,{href:"https://console.twilio.com/",children:"Twilio console page"})," and sign in with your Twilio account."]}),"\n",(0,o.jsx)(n.p,{children:'Purchase a phone number under "Phone Numbers" -> "Manage" -> "Buy a number".'}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,o.jsx)(n.strong,{children:"Tip"})]}),"\n",(0,o.jsx)(n.p,{children:"Sometimes you may encounter the situation that SMS service is not supported in specific countries or areas. Pick a number from other regions to bypass."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:'Once we have a valid number claimed, navigate to the "Messaging" -> "Services". Create a new Message Service by clicking on the button.'}),"\n",(0,o.jsxs)(n.p,{children:["Give a friendly service name and choose ",(0,o.jsx)(n.em,{children:"Notify my users"})," as our service purpose.\nFollowing the next step, choose ",(0,o.jsx)(n.code,{children:"Phone Number"})," as ",(0,o.jsx)(n.em,{children:"Sender Type"}),", and add the phone number we just claimed to this service as a sender."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,o.jsx)(n.strong,{children:"Note"})]}),"\n",(0,o.jsx)(n.p,{children:"Each phone number can only be linked with one messaging service."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"get-account-credentials",children:"Get account credentials"}),"\n",(0,o.jsxs)(n.p,{children:["We will need the API credentials to make the connector work. Let's begin with the ",(0,o.jsx)(n.a,{href:"https://console.twilio.com/",children:"Twilio console page"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:['Click on the "Account" menu in the top-right corner, then go to the "API keys & tokens" page to get your ',(0,o.jsx)(n.code,{children:"Account SID"})," and ",(0,o.jsx)(n.code,{children:"Auth token"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:['Back to "Messaging" -> "Services" settings page starting from the sidebar, and find the ',(0,o.jsx)(n.code,{children:"Sid"})," of your service."]}),"\n",(0,o.jsx)(n.h3,{id:"compose-the-connector-json",children:"Compose the connector JSON"}),"\n",(0,o.jsxs)(n.p,{children:["Fill out the ",(0,o.jsx)(n.em,{children:"accountSID"}),", ",(0,o.jsx)(n.em,{children:"authToken"})," and ",(0,o.jsx)(n.em,{children:"fromMessagingServiceSID"})," fields with ",(0,o.jsx)(n.code,{children:"Account SID"}),", ",(0,o.jsx)(n.code,{children:"Auth token"})," and ",(0,o.jsx)(n.code,{children:"Sid"})," of the corresponding messaging service."]}),"\n",(0,o.jsx)(n.p,{children:"You can add multiple SMS connector templates for different cases. Here is an example of adding a single template:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Fill out the ",(0,o.jsx)(n.code,{children:"content"})," field with arbitrary string-typed contents. Do not forget to leave ",(0,o.jsx)(n.code,{children:"{{code}}"})," placeholder for random verification code."]}),"\n",(0,o.jsxs)(n.li,{children:["Fill out the ",(0,o.jsx)(n.code,{children:"usageType"})," field with either ",(0,o.jsx)(n.code,{children:"Register"}),", ",(0,o.jsx)(n.code,{children:"SignIn"}),", ",(0,o.jsx)(n.code,{children:"ForgotPassword"}),", ",(0,o.jsx)(n.code,{children:"Generic"})," for different use cases. In order to enable full user flows, templates with usageType ",(0,o.jsx)(n.code,{children:"Register"}),", ",(0,o.jsx)(n.code,{children:"SignIn"}),", ",(0,o.jsx)(n.code,{children:"ForgotPassword"})," and ",(0,o.jsx)(n.code,{children:"Generic"})," are required."]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"test-twilio-sms-connector",children:"Test Twilio SMS connector"}),"\n",(0,o.jsx)(n.p,{children:'You can enter a phone number and click on "Send" to see whether the settings can work before "Save and Done".'}),"\n",(0,o.jsx)(n.p,{children:"That's it. Don't forget to enable connector in sign-in experience."}),"\n",(0,o.jsx)(n.h4,{id:"config-types",children:"Config types"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Name"}),(0,o.jsx)(n.th,{children:"Type"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"accountSID"}),(0,o.jsx)(n.td,{children:"string"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"authToken"}),(0,o.jsx)(n.td,{children:"string"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"fromMessagingServiceSID"}),(0,o.jsx)(n.td,{children:"string"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"templates"}),(0,o.jsx)(n.td,{children:"Templates[]"})]})]})]}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Template Properties"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{children:"Enum values"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"content"}),(0,o.jsx)(n.td,{children:"string"}),(0,o.jsx)(n.td,{children:"N/A"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"usageType"}),(0,o.jsx)(n.td,{children:"enum string"}),(0,o.jsx)(n.td,{children:"'Register' | 'SignIn' | 'ForgotPassword' | 'Generic'"})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"reference",children:"Reference"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://www.twilio.com/docs/api/errors",children:"Twilio - Error and Warning Dictionary"})}),"\n"]})]})}function s(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},44263:function(e,n,t){t.d(n,{ZP:function(){return p}});var o=t(11527),i=t(17279),r=t(45610),s=t(80302),c=t(73544),a=t(87739),l=t(36618),d=t(74976),u=t(13994);function h(e){const n={h2:"h2",h3:"h3",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"add-logto-sdk-as-a-dependency",children:"Add Logto SDK as a dependency"}),"\n",(0,o.jsx)(r.ZP,{}),"\n",(0,o.jsx)(n.h2,{id:"init-logtoclient",children:"Init LogtoClient"}),"\n",(0,o.jsx)(a.ZP,{}),"\n",(0,o.jsx)(n.h2,{id:"sign-in",children:"Sign in"}),"\n",(0,o.jsx)(n.h3,{id:"configure-redirect-uri",children:"Configure Redirect URI"}),"\n",(0,o.jsx)(s.ZP,{}),"\n",(0,o.jsx)(d.ZP,{figureSrc:l.Z,redirectUri:"io.logto.android://io.logto.sample/callback"}),"\n",(0,o.jsx)(n.h3,{id:"sign-in-1",children:"Sign in"}),"\n",(0,o.jsx)(c.ZP,{}),"\n",(0,o.jsx)(u.ZP,{sdk:"Android"})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},75263:function(e,n,t){t.d(n,{ZP:function(){return s}});var o=t(11527),i=t(17279);function r(e){const n={img:"img",p:"p",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:["To add or change ",e.connectorType,' connector, go to the "Connector" tab in the Admin Console,\nthen click on "Email and SMS Connectors". From there, click "Set up" or go to detail page and\nclick "Change ',e.connectorType,' connector".']})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Connector tab",src:t(94042).Z+"",width:"4164",height:"1290"})}),"\n",(0,o.jsxs)("p",{children:['In the openning modal, select "',e.connector,'" and click "Next".']}),"\n",(0,o.jsx)(n.p,{children:"On the next page, you will see a two-column layout with the README content on the left and configuration on the right."}),"\n",(0,o.jsx)(n.p,{children:"Feel free to follow the README file in place or read the following section to complete the configuration process. If you follow the in-place guide, you can skip the next section."})]})}function s(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},32778:function(e,n,t){t.d(n,{ZP:function(){return c}});var o=t(11527),i=t(17279),r=t.p+"assets/images/create-application-modal-a9838383da54c969256d05557ca13639.png";function s(e){const n={h3:"h3",img:"img",p:"p",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"In you browser, open a new tab and enter the link of Logto Admin Console."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Create application",src:t(95561).Z+"",width:"2368",height:"226"})}),"\n",(0,o.jsx)(n.p,{children:'Once the page is loaded, in the "Get Started" tab, click the "Create" button on the right, and the browser will redirect to the Application tab.'}),"\n",(0,o.jsx)(n.h3,{id:"choose-your-application-type",children:"Choose your application type"}),"\n",(0,o.jsxs)("p",{children:['In the opening modal, select the "',e.type,'" option as the application type.']}),"\n",(0,o.jsx)("img",{src:r,alt:"Create Application modal",width:"700"}),"\n",(0,o.jsx)(n.h3,{id:"enter-application-name",children:"Enter application name"}),"\n",(0,o.jsx)(n.p,{children:'Enter the application name, e.g., "Bookstore," and click "Create Application."'}),"\n",(0,o.jsx)(n.p,{children:"\ud83c\udf89 Ta-da! You just created your first application in Logto. You'll see a congrats page which includes a detailed integration guide. Follow the guide to see what the experience will be in your application."})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}},69599:function(e,n,t){t.d(n,{ZP:function(){return s}});var o=t(11527),i=t(17279);function r(e){const n={admonition:"admonition",img:"img",p:"p",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:'Switch to the "Sign-in Experience" tab, then click the "Sign-up and Sign-in" tab.'}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"If it's the first time you enter the tab, you will see a quick introduction about Sign-in Experience and its basic configuration."})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Sign-in Experience tab",src:t(65266).Z+"",width:"3160",height:"1822"})}),"\n",(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:['Select "',e.passwordlessSignUpIdentifier,'" or "Email address or phone number" for the "Sign-up\nidentifier" to provide sign-up for ',e.connectorType," passwordless sign-in, which may increase\nyour conversion rate."]})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Save changes",src:t(79120).Z+"",width:"2474",height:"188"})}),"\n",(0,o.jsx)(n.p,{children:'Finally, click "Save Changes" on the bottom right corner.'})]})}function s(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},10444:function(e,n,t){t.d(n,{ZP:function(){return s}});var o=t(11527),i=t(17279);function r(e){const n={a:"a",admonition:"admonition",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.admonition,{title:"For our new friends",type:"info",children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://logto.io",children:"Logto"})," is a cost-effective open-source alternative to Auth0. It offers OpenId Connect (OIDC) based authentication and authorization, with modern features like passwordless sign-in and role-based access control."]})}),"\n",(0,o.jsxs)("p",{children:[(0,o.jsxs)(n.p,{children:["In this article, we will go through the steps to quickly build the ",e.connector," sign-in\nexperience (user authentication) with"," "]}),(0,o.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk}),(0,o.jsx)("span",{children:" and "}),(0,o.jsx)("a",{href:"https://logto.io",target:"_blank",rel:"noopener",children:(0,o.jsx)(n.p,{children:"Logto"})}),(0,o.jsx)(n.p,{children:"."})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Prerequisites"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["A running Logto instance. Check out the ",(0,o.jsx)(n.a,{href:"/docs/tutorials/get-started/",children:"get started page"})," if you don't have one."]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)("span",{children:[(0,o.jsxs)(n.p,{children:["Basic knowledge of"," "]}),(0,o.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk}),(0,o.jsx)(n.p,{children:"."})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)("span",{children:["A usable ",e.connector," account."]}),"\n"]}),"\n"]})]})}function s(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},69441:function(e,n,t){t.d(n,{ZP:function(){return s}});var o=t(11527),i=t(17279);function r(e){const n={p:"p",...(0,i.a)(),...e.components};return(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:['Double check you have filled out necessary values in the Logto connector configuration area. Click\n"Save and Done" (or "Save Changes") and the ',e.connector," connector should be available now."]})})}function s(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},13994:function(e,n,t){t.d(n,{ZP:function(){return s}});var o=t(11527),i=t(17279);function r(e){const n={admonition:"admonition",p:"p",...(0,i.a)(),...e.components};return(0,o.jsx)(n.admonition,{title:"Test your integration",type:"info",children:(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:["Open your ",e.sdk,' app to test if the integration works. When you click the "Sign In" button,\nthe page should be redirected to a Logto sign-in page, and you should be able to create a new\naccount by entering username and password and complete the sign-in process.']})})})}function s(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},93974:function(e,n,t){t.d(n,{ZP:function(){return s}});var o=t(11527),i=t(17279);function r(e){const n={p:"p",...(0,i.a)(),...e.components};return(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:["Return to your ",e.sdk," app. You should now be able to sign in with ",e.connector,". Enjoy!"]})})}function s(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},24612:function(e,n,t){t.r(n),t.d(n,{assets:function(){return a},connector:function(){return d},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return l}});var o=t(11527),i=t(17279);t(10444),t(32778),t(75263),t(69441),t(69599),t(93974),t(44263),t(71368);const r={slug:"how-to-build-twilio-sign-in-with-android-and-logto",authors:"logto",tags:["authentication","twilio","android","kotlin/java","passwordless-sign-in","sign-in","login"],title:"How to build Twilio SMS passwordless sign-in with Android and Logto"},s=void 0,c={permalink:"/tutorial/how-to-build-twilio-sign-in-with-android-and-logto",source:"@site/tutorial/build-with-logto/generated-android-twilio.mdx",title:"How to build Twilio SMS passwordless sign-in with Android and Logto",description:"\x3c!--",date:"2023-11-24T09:46:23.529Z",formattedDate:"November 24, 2023",tags:[{label:"authentication",permalink:"/tutorial/tags/authentication"},{label:"twilio",permalink:"/tutorial/tags/twilio"},{label:"android",permalink:"/tutorial/tags/android"},{label:"kotlin/java",permalink:"/tutorial/tags/kotlin-java"},{label:"passwordless-sign-in",permalink:"/tutorial/tags/passwordless-sign-in"},{label:"sign-in",permalink:"/tutorial/tags/sign-in"},{label:"login",permalink:"/tutorial/tags/login"}],readingTime:1.295,hasTruncateMarker:!0,authors:[{name:"Logto team",title:"Comprehensive Auth0 alternative",url:"https://logto.io",imageURL:"https://github.com/logto-io.png",key:"logto"}],frontMatter:{slug:"how-to-build-twilio-sign-in-with-android-and-logto",authors:"logto",tags:["authentication","twilio","android","kotlin/java","passwordless-sign-in","sign-in","login"],title:"How to build Twilio SMS passwordless sign-in with Android and Logto"},unlisted:!1,nextItem:{title:"How to build AWS SES Email passwordless sign-in with Express and Logto",permalink:"/tutorial/how-to-build-aws-ses-sign-in-with-express-and-logto"}},a={authorsImageUrls:[void 0]},l=[],d="Twilio";function u(e){return(0,o.jsx)(o.Fragment,{})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u()}},45610:function(e,n,t){t.d(n,{ZP:function(){return a}});var o=t(11527),i=t(17279),r=t(75268),s=t(67234);function c(e){const n={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"The minimum supported Android API level of Logto Andorid SDK is level 24."})}),"\n",(0,o.jsxs)(n.p,{children:["Add the ",(0,o.jsx)(n.code,{children:"mavenCentral()"})," repository to your Gradle project build file:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:"repositories {\n    mavenCentral()\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"Add Logto Android SDK to your dependencies:"}),"\n",(0,o.jsxs)(s.Z,{children:[(0,o.jsx)(r.Z,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:'dependencies {\n    implementation("io.logto.sdk:android:1.0.0-alpha.0")\n}\n'})})}),(0,o.jsx)(r.Z,{value:"groovy",label:"Groovy",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-groovy",children:"dependencies {\n    implementation 'io.logto.sdk:android:1.0.0-alpha.0'\n}\n"})})})]})]})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},80302:function(e,n,t){t.d(n,{ZP:function(){return s}});var o=t(11527),i=t(17279);function r(e){const n={admonition:"admonition",br:"br",code:"code",p:"p",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["In Android, the Redirect URI follows the pattern: ",(0,o.jsx)(n.code,{children:"$(LOGTO_REDIRECT_SCHEME)://$(YOUR_APP_PACKAGE)/callback"}),"."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"LOGTO_REDIRECT_SCHEME"})," should be a custom scheme in the reverse domain format.",(0,o.jsx)(n.br,{}),"\n","The ",(0,o.jsx)(n.code,{children:"YOUR_APP_PACKAGE"})," is your app package name."]})}),"\n",(0,o.jsxs)(n.p,{children:["Assuming you treat ",(0,o.jsx)(n.code,{children:"io.logto.android"})," as the custom ",(0,o.jsx)(n.code,{children:"LOGTO_REDIRECT_SCHEME"}),", and ",(0,o.jsx)(n.code,{children:"io.logto.sample"})," is your app package name, the Redirect URI should be ",(0,o.jsx)(n.code,{children:"io.logto.android://io.logto.sample/callback"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Now you can configure the Redirect URI in the admin console (Take ",(0,o.jsx)(n.code,{children:"io.logto.android://io.logto.sample/callback"})," as an example)."]})]})}function s(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},73544:function(e,n,t){t.d(n,{ZP:function(){return p}});var o=t(11527),i=t(17279),r=t(75268),s=t(67234),c=t(45969);function a(e){const n={code:"code",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'logtoClient.signIn(this, "<your-redirect-uri>", logtoException -> {\n    // User signed in successfully if `logtoException` is null.\n});\n'})})}function l(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}function d(e){const n={code:"code",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:'logtoClient.signIn(this, "<your-redirect-uri>") { logtoException: LogtoException? ->\n    // User signed in successfully if `logtoException` is null.\n}\n'})})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}function h(e){const n={code:"code",p:"p",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.ZP,{calling:".signIn(context, redirectUri, completion)"}),"\n",(0,o.jsxs)(s.Z,{children:[(0,o.jsx)(r.Z,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(u,{})}),(0,o.jsx)(r.Z,{value:"java",label:"Java",children:(0,o.jsx)(l,{})})]}),"\n",(0,o.jsxs)(n.p,{children:["After signing in successfully, ",(0,o.jsx)(n.code,{children:"logtoClient.isAuthenticated"})," will be ",(0,o.jsx)(n.code,{children:"true"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},87739:function(e,n,t){t.d(n,{ZP:function(){return h}});var o=t(11527),i=t(17279),r=t(75268),s=t(67234);function c(e){const n={code:"code",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'import io.logto.sdk.android.LogtoClient;\nimport io.logto.sdk.android.type.LogtoConfig;\nimport io.logto.sdk.core.constant.PromptValue;\n\npublic class MainActivity extends AppCompatActivity {\n\n    private LogtoClient logtoClient;\n\n    @Override\n    protected void onCreate(Bundle savedInstanceState) {\n        // ...\n        LogtoConfig logtoConfig = new LogtoConfig(\n            "<your-logto-endpoint>",  // E.g. http://localhost:3001\n            "<your-app-id>",\n            null,\n            null,\n            true,\n            PromptValue.CONSENT\n        );\n\n        logtoClient = new LogtoClient(logtoConfig, getApplication());\n    }\n}\n'})})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}function l(e){const n={code:"code",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:'import io.logto.sdk.android.LogtoClient\nimport io.logto.sdk.android.type.LogtoConfig\nimport io.logto.sdk.core.constant.PromptValue\n\nclass MainActivity : AppCompatActivity() {\n\n    private lateinit var logtoClient: LogtoClient\n\n    override fun onCreate(savedInstanceState: Bundle?) {\n        // ...\n        val logtoConfig = LogtoConfig(\n            endpoint = "<your-logto-endpoint>",  // E.g. http://localhost:3001\n            appId = "<your-app-id>",\n            scopes = null,\n            resources = null,\n            usingPersistStorage = true,\n            prompt = PromptValue.CONSENT,\n        )\n\n        logtoClient = LogtoClient(logtoConfig, application)\n    }\n}\n'})})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}function u(e){const n={admonition:"admonition",p:"p",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"Ensure the Application object has been initialized before creating a LogtoClient."})}),"\n",(0,o.jsxs)(s.Z,{children:[(0,o.jsx)(r.Z,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(d,{})}),(0,o.jsx)(r.Z,{value:"java",label:"Java",children:(0,o.jsx)(a,{})})]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},74976:function(e,n,t){t.d(n,{ZP:function(){return s}});var o=t(11527),i=t(17279);function r(e){const n={a:"a",p:"p",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:["Let's switch to the Application details page of Admin Console in this section. Add a Redirect\nURI ",(0,o.jsx)("code",{children:e.redirectUri}),' and click "Save Changes".']})}),"\n",(0,o.jsx)("img",{alt:"Redirect URI in Admin Console",src:e.figureSrc,width:"600px"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://www.oauth.com/oauth2-servers/redirect-uris/",children:"Redirect URI"})," is an OAuth 2.0 concept which implies the location should redirect after authentication."]})]})}function s(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},45969:function(e,n,t){t.d(n,{ZP:function(){return s}});var o=t(11527),i=t(17279);function r(e){const n={admonition:"admonition",p:"p",...(0,i.a)(),...e.components};return(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)("p",{children:(0,o.jsxs)(n.p,{children:["Before calling ",(0,o.jsx)("code",{children:e.calling}),", make sure you have correctly configured Redirect URI\nin Admin Console."]})})})}function s(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},75268:function(e,n,t){t.d(n,{Z:function(){return s}});t(50959);var o=t(45924),i={tabItem:"tabItem_zBCg"},r=t(11527);function s(e){let{children:n,hidden:t,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,o.Z)(i.tabItem,s),hidden:t,children:n})}},67234:function(e,n,t){t.d(n,{Z:function(){return y}});var o=t(50959),i=t(45924),r=t(58748),s=t(28903),c=t(88137),a=t(70670),l=t(91391),d=t(47841);function u(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:o,default:i}}=e;return{value:n,label:t,attributes:o,default:i}}))}(t);return function(e){const n=(0,l.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const i=(0,s.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,a._X)(r),(0,o.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(i.location.search);n.set(r,e),i.replace({...i.location,search:n.toString()})}),[r,i])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,r=h(e),[s,a]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=t.find((e=>e.default))??t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:r}))),[l,u]=g({queryString:t,groupId:i}),[x,j]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,r]=(0,d.Nk)(t);return[i,(0,o.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:i}),m=(()=>{const e=l??x;return p({value:e,tabValues:r})?e:null})();(0,c.Z)((()=>{m&&a(m)}),[m]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);a(e),u(e),j(e)}),[u,j,r]),tabValues:r}}var j=t(77691),m={tabList:"tabList_nHxI",tabItem:"tabItem_BSGW"},f=t(11527);function b(e){let{className:n,block:t,selectedValue:o,selectValue:s,tabValues:c}=e;const a=[],{blockElementScrollPositionUntilNextRender:l}=(0,r.o5)(),d=e=>{const n=e.currentTarget,t=a.indexOf(n),i=c[t].value;i!==o&&(l(n),s(i))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=a.indexOf(e.currentTarget)+1;n=a[t]??a[0];break}case"ArrowLeft":{const t=a.indexOf(e.currentTarget)-1;n=a[t]??a[a.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n),children:c.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>a.push(e),onKeyDown:u,onClick:d,...r,className:(0,i.Z)("tabs__item",m.tabItem,r?.className,{"tabs__item--active":o===n}),children:t??n},n)}))})}function w(e){let{lazy:n,children:t,selectedValue:i}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===i));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function v(e){const n=x(e);return(0,f.jsxs)("div",{className:(0,i.Z)("tabs-container",m.tabList),children:[(0,f.jsx)(b,{...e,...n}),(0,f.jsx)(w,{...e,...n})]})}function y(e){const n=(0,j.Z)();return(0,f.jsx)(v,{...e,children:u(e.children)},String(n))}},36618:function(e,n,t){n.Z=t.p+"assets/images/android-redirect-uri-ac35116d71d63d3bf964651207e82085.png"},94042:function(e,n,t){n.Z=t.p+"assets/images/connector-tab-passwordless-9939bc0a0a5bbf8821d700cf9a25b825.png"},95561:function(e,n,t){n.Z=t.p+"assets/images/create-application-8ace18547a152b97cea519666a0e7bbf.png"},79120:function(e,n,t){n.Z=t.p+"assets/images/save-changes-cc32c907e69d5d865b13ee0449e34822.png"},65266:function(e,n,t){n.Z=t.p+"assets/images/sie-tab-8b47b6ad0a8bbc115fc6e2ee67ed1566.png"},17279:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return s}});var o=t(50959);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);