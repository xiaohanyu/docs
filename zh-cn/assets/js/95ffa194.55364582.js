"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[8905],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var o=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),g=u(n),d=r,m=g["".concat(s,".").concat(d)]||g[d]||l[d]||i;return n?o.createElement(m,a(a({ref:t},c),{},{components:n})):o.createElement(m,a({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=g;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},52894:function(e,t,n){n.r(t),n.d(t,{assets:function(){return x},contentTitle:function(){return z},default:function(){return I},frontMatter:function(){return N},metadata:function(){return O},toc:function(){return E}});var o=n(665),r=n(40151),i=(n(59496),n(49613)),a=["components"],p={toc:[]};function s(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",null,'This tutorial assumes you have created an Application of type "',n.type,'" in Admin Console. If you are not ready,'," ",(0,i.kt)("a",{href:"../../tutorials/get-started/create-and-integrate-the-first-app"},"read this")," before continuing.")))}s.isMDXComponent=!0;var u=["components"],c={toc:[]};function l(e){var t=e.components,n=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Let's switch to the Application details page of Admin Console in this section. Add a Redirect URI ",(0,i.kt)("code",null,n.redirectUri),' and click "Save Changes".'),(0,i.kt)("img",{alt:"Redirect URI in Admin Console",src:n.figureSrc,width:"600px"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.oauth.com/oauth2-servers/redirect-uris/"},"Redirect URI")," is an OAuth 2.0 concept which implies the location should redirect after authentication."))}l.isMDXComponent=!0;var g=["components"],d={toc:[]};function m(e){var t=e.components,n=(0,r.Z)(e,g);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy"},'// path/to/project/build.gradle\ndependencies {\n    implementation("com.fasterxml.jackson.datatype:jackson-datatype-jsr310")\n    implementation("org.springframework.boot:spring-boot-starter-web")\n    implementation("org.springframework.boot:spring-boot-starter-security")\n    implementation("org.springframework.boot:spring-boot-starter-oauth2-client")\n    implementation("org.springframework.boot:spring-boot-starter-thymeleaf")\n    implementation("org.thymeleaf.extras:thymeleaf-extras-springsecurity5")\n    implementation("nz.net.ultraq.thymeleaf:thymeleaf-layout-dialect")\n}\n')))}m.isMDXComponent=!0;var h=["components"],A={toc:[]};function f(e){var t=e.components,n=(0,r.Z)(e,h);return(0,i.kt)("wrapper",(0,o.Z)({},A,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// path/to/project/src/main/java/io/logto/springboot/sample/controller/HomeController.java\npackage io.logto.springboot.sample.controller;\n\nimport org.springframework.stereotype.Controller;\nimport org.springframework.web.bind.annotation.GetMapping;\n\n@Controller\npublic class HomeController {\n\n    @GetMapping("/")\n    public String home() {\n        return "index";\n    }\n}\n')))}f.isMDXComponent=!0;var k=["components"],y={toc:[]};function b(e){var t=e.components,n=(0,r.Z)(e,k);return(0,i.kt)("wrapper",(0,o.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- path/to/project/src/main/resources/templates/index.html --\x3e\n<!DOCTYPE html>\n<html\n  lang="en"\n  xmlns:th="http://www.thymeleaf.org"\n  xmlns:sec="http://www.thymeleaf.org/thymeleaf-extras-springsecurity5"\n>\n  <body>\n    <div sec:authorize="!isAuthenticated()">\n      <a th:href="@{/oauth2/authorization/logto}">Sign in</a>\n    </div>\n    <div sec:authorize="isAuthenticated()">\n      <p>Signed in</p>\n    </div>\n  </body>\n</html>\n')))}b.isMDXComponent=!0;var v=["components"],w={toc:[]};function S(e){var t=e.components,n=(0,r.Z)(e,v);return(0,i.kt)("wrapper",(0,o.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// path/to/project/src/main/java/io/logto/springboot/sample/configuration/SecurityConfiguration.java\npackage io.logto.springboot.sample.configuration;\n\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.security.config.annotation.web.builders.HttpSecurity;\nimport org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;\nimport org.springframework.security.oauth2.client.registration.ClientRegistrationRepository;\nimport org.springframework.security.oauth2.client.web.DefaultOAuth2AuthorizationRequestResolver;\nimport org.springframework.security.oauth2.client.web.OAuth2AuthorizationRequestCustomizers;\nimport org.springframework.security.oauth2.client.web.OAuth2AuthorizationRequestResolver;\nimport org.springframework.security.web.SecurityFilterChain;\n\n@EnableWebSecurity\npublic class SecurityConfiguration {\n\n    @Bean\n    public OAuth2AuthorizationRequestResolver authorizationRequestResolver(\n            ClientRegistrationRepository clientRegistrationRepository\n    ) {\n        DefaultOAuth2AuthorizationRequestResolver authorizationRequestResolver =\n                new DefaultOAuth2AuthorizationRequestResolver(clientRegistrationRepository, "/oauth2/authorization");\n        authorizationRequestResolver.setAuthorizationRequestCustomizer(OAuth2AuthorizationRequestCustomizers.withPkce()\n                .andThen(customizer -> customizer.additionalParameters(params -> params.put("prompt", "consent"))));\n        return  authorizationRequestResolver;\n    }\n\n    @Bean\n    public SecurityFilterChain securityFilterChain(\n            HttpSecurity http,\n            OAuth2AuthorizationRequestResolver authorizationRequestResolver\n    ) throws Exception {\n        http.authorizeRequests()\n                // Anyone can access the home page.\n                // (At least one mapping is required. Change it as you need.)\n                .mvcMatchers("/").permitAll()\n                .and().oauth2Login(oauth2LoginCustomizer -> oauth2LoginCustomizer\n                        .authorizationEndpoint()\n                        .authorizationRequestResolver(authorizationRequestResolver)\n                );\n        return http.build();\n    }\n}\n')))}S.isMDXComponent=!0;var C=["components"],B={toc:[]};function R(e){var t=e.components,n=(0,r.Z)(e,C);return(0,i.kt)("wrapper",(0,o.Z)({},B,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# path/to/project/src/main/resources/application.yaml\nspring:\n  security:\n    oauth2:\n      client:\n        registration:\n          logto:\n            client-id: <your-app-id>\n            client-secret: <your-app-secret> # Copy from application details in Admin Console\n            scope:\n              - offline_access\n              - openid\n              - profile\n        provider:\n          logto:\n            issuer-uri: <your-issuer-uri> # e.g. `http://localhost:3001/oidc`. Replace it with your logto issuer URI.\n")))}R.isMDXComponent=!0;var P=["components"],N={sidebar_label:"Spring Boot"},z="Spring Boot",O={unversionedId:"docs/recipes/integrate-logto/spring-boot",id:"docs/recipes/integrate-logto/spring-boot",title:"Spring Boot",description:"Your web app may run on the server-side using Spring Boot framework.",source:"@site/docs/docs/recipes/integrate-logto/spring-boot.mdx",sourceDirName:"docs/recipes/integrate-logto",slug:"/docs/recipes/integrate-logto/spring-boot",permalink:"/zh-cn/docs/recipes/integrate-logto/spring-boot",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/integrate-logto/spring-boot.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Spring Boot"},sidebar:"docsSidebar",previous:{title:"React",permalink:"/zh-cn/docs/recipes/integrate-logto/react"},next:{title:"\u4f20\u7edf Web",permalink:"/zh-cn/docs/recipes/integrate-logto/traditional"}},x={},E=[{value:"Start a Spring Boot project",id:"start-a-spring-boot-project",level:2},{value:"Add dependencies",id:"add-dependencies",level:2},{value:"Configure Spring Security",id:"configure-spring-security",level:2},{value:"Sign-in",id:"sign-in",level:2},{value:"Configure Redirect URI",id:"configure-redirect-uri",level:3},{value:"Configure Spring Security",id:"configure-spring-security-1",level:3},{value:"Implement sign-in route",id:"implement-sign-in-route",level:3},{value:"Sign out",id:"sign-out",level:2},{value:"Profile",id:"profile",level:2}],D={toc:E};function I(e){var t=e.components,n=(0,r.Z)(e,P);return(0,i.kt)("wrapper",(0,o.Z)({},D,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"spring-boot"},"Spring Boot"),(0,i.kt)(s,{type:"Traditional web",mdxType:"AppNote"}),(0,i.kt)("p",null,"Your web app may run on the server-side using Spring Boot framework.\nFor now, you need to integrate Logto in Spring Boot manually.\nThis article guides you on how to finish it step by step.\nAnd we use Java, Gradle, Spring MVC and ",(0,i.kt)("a",{parentName:"p",href:"https://www.thymeleaf.org/"},"Thymeleaf")," to take the example."),(0,i.kt)("h2",{id:"start-a-spring-boot-project"},"Start a Spring Boot project"),(0,i.kt)("p",null,"With ",(0,i.kt)("a",{parentName:"p",href:"https://start.spring.io/"},"Spring Initializr"),", you can quickly start a Spring Boot project.\nFollow the options below:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Gradle Project"),(0,i.kt)("li",{parentName:"ul"},"Language: Java"),(0,i.kt)("li",{parentName:"ul"},"Spring Boot: 2.7.2")),(0,i.kt)("p",null,"Generate and open the project."),(0,i.kt)("h2",{id:"add-dependencies"},"Add dependencies"),(0,i.kt)("p",null,"Add the dependencies to your Gradle project build file ",(0,i.kt)("inlineCode",{parentName:"p"},"build.gradle"),":"),(0,i.kt)(m,{mdxType:"GradleBuild"}),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Since Spring Boot and Spring Security have built-in support for both OAuth 2 and OIDC,\nyou DO NOT need to add additional libraries from Logto to integrate."),(0,i.kt)("p",{parentName:"admonition"},"See ",(0,i.kt)("a",{parentName:"p",href:"https://www.baeldung.com/spring-security-openid-connect"},"Spring Security and OpenID Connect"),"\nand ",(0,i.kt)("a",{parentName:"p",href:"https://spring.io/guides/topicals/spring-security-architecture"},"Spring Security Architecture"),"\nfor more details.")),(0,i.kt)("h2",{id:"configure-spring-security"},"Configure Spring Security"),(0,i.kt)("p",null,"Spring Security makes it easy to configure your application for authentication with OIDC providers such as Logto."),(0,i.kt)("p",null,"Use an ",(0,i.kt)("inlineCode",{parentName:"p"},"application.yml")," file (instead of the default ",(0,i.kt)("inlineCode",{parentName:"p"},"application.properties"),") to configure the OAuth2 client and provider."),(0,i.kt)(R,{mdxType:"SpringSecurityConfiguration"}),(0,i.kt)("h2",{id:"sign-in"},"Sign-in"),(0,i.kt)("h3",{id:"configure-redirect-uri"},"Configure Redirect URI"),(0,i.kt)(l,{figureSrc:"data:image/png;base64,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",redirectUri:"http://localhost:3000/login/oauth2/code/logto",mdxType:"ConfigureRedirectUri"}),(0,i.kt)("h3",{id:"configure-spring-security-1"},"Configure Spring Security"),(0,i.kt)("p",null,"To enable Logto user sign-in, you need to provide an instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"SecurityFilterChain")," (as a Spring Bean) and add the ",(0,i.kt)("inlineCode",{parentName:"p"},"@EnableWebSecurity")," annotation."),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"authorizationRequestResolver")," to enable ",(0,i.kt)("a",{parentName:"p",href:"https://oauth.net/2/pkce/"},"PKCE")," extension for increased safety and add parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"prompt=consent"),"."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"As the ",(0,i.kt)("inlineCode",{parentName:"p"},"offline_access")," scope has been provided above, we should add the parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"prompt=consent"),";\notherwise, the ",(0,i.kt)("inlineCode",{parentName:"p"},"offline_access")," scope will be ignored, and no refresh token will be returned.")),(0,i.kt)(S,{mdxType:"LoginConfiguration"}),(0,i.kt)("h3",{id:"implement-sign-in-route"},"Implement sign-in route"),(0,i.kt)("p",null,"A user can visit the route ",(0,i.kt)("inlineCode",{parentName:"p"},"/oauth2/authorization/logto")," (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/oauth2/authorization/logto"),") to sign in.\nSpring Security will use the ",(0,i.kt)("inlineCode",{parentName:"p"},"spring.security.oauth2.client")," configuration defined above to handle user sign-in automatically."),(0,i.kt)("p",null,"Let's try this sign-in link on your web application page."),(0,i.kt)("p",null,"Add a home page template file:"),(0,i.kt)(b,{mdxType:"HomePage"}),(0,i.kt)("p",null,"Add a controller to render the view:"),(0,i.kt)(f,{mdxType:"HomeController"}),(0,i.kt)("p",null,"Run your Spring Boot web application, visit the home page ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:3000/"},"http://localhost:3000/"),", click the ",(0,i.kt)("em",{parentName:"p"},"Sign in")," link on it, and it will redirect to the Logto sign-in page."),(0,i.kt)("p",null,'Provide your credentials, and once authenticated, it will redirect you back to the home page with a message that shows "Signed in".'),(0,i.kt)("h2",{id:"sign-out"},"Sign out"),(0,i.kt)("p",null,"TODO"),(0,i.kt)("h2",{id:"profile"},"Profile"),(0,i.kt)("p",null,"TODO"))}I.isMDXComponent=!0}}]);