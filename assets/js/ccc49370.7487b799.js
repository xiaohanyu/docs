(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[46103],{55784:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return g}});t(59496);var a=t(45924),r=t(72851),i=t(70930),o=t(7706),l=t(25857),s=t(62585),c=t(36430),u=t(50034),d=t(4637);function m(e){var n=e.nextItem,t=e.prevItem;return(0,d.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[t&&(0,d.jsx)(u.Z,Object.assign({},t,{subLabel:(0,d.jsx)(c.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer Post"})})),n&&(0,d.jsx)(u.Z,Object.assign({},n,{subLabel:(0,d.jsx)(c.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older Post"}),isNext:!0}))]})}function f(){var e,n=(0,o.C)(),t=n.assets,a=n.metadata,i=a.title,l=a.description,s=a.date,c=a.tags,u=a.authors,m=a.frontMatter,f=m.keywords,v=null!=(e=t.image)?e:m.image;return(0,d.jsxs)(r.d,{title:i,description:l,keywords:f,image:v,children:[(0,d.jsx)("meta",{property:"og:type",content:"article"}),(0,d.jsx)("meta",{property:"article:published_time",content:s}),u.some((function(e){return e.url}))&&(0,d.jsx)("meta",{property:"article:author",content:u.map((function(e){return e.url})).filter(Boolean).join(",")}),c.length>0&&(0,d.jsx)("meta",{property:"article:tag",content:c.map((function(e){return e.label})).join(",")})]})}var v=t(59509);function h(e){var n=e.sidebar,t=e.children,a=(0,o.C)(),r=a.metadata,i=a.toc,c=r.nextItem,u=r.prevItem,f=r.frontMatter,h=f.hide_table_of_contents,g=f.toc_min_heading_level,p=f.toc_max_heading_level;return(0,d.jsxs)(l.Z,{sidebar:n,toc:!h&&i.length>0?(0,d.jsx)(v.Z,{toc:i,minHeadingLevel:g,maxHeadingLevel:p}):void 0,children:[(0,d.jsx)(s.Z,{children:t}),(c||u)&&(0,d.jsx)(m,{nextItem:c,prevItem:u})]})}function g(e){var n=e.content;return(0,d.jsx)(o.n,{content:e.content,isBlogPostPage:!0,children:(0,d.jsxs)(r.FG,{className:(0,a.Z)(i.k.wrapper.blogPages,i.k.page.blogPostPage),children:[(0,d.jsx)(f,{}),(0,d.jsx)(h,{sidebar:e.sidebar,children:(0,d.jsx)(n,{})})]})})}},59509:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var a=t(40151),r=(t(59496),t(45924)),i=t(54228),o="tableOfContents_Yrd9",l=t(4637),s=["className"];function c(e){var n=e.className,t=(0,a.Z)(e,s);return(0,l.jsx)("div",{className:(0,r.Z)(o,"thin-scrollbar",n),children:(0,l.jsx)(i.Z,Object.assign({},t,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"}))})}},54228:function(e,n,t){"use strict";t.d(n,{Z:function(){return p}});var a=t(40151),r=t(59496),i=t(83467),o=["parentIndex"];function l(e){var n=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),t=Array(7).fill(-1);n.forEach((function(e,n){var a=t.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),t[e.level]=n}));var r=[];return n.forEach((function(e){var t=e.parentIndex,i=(0,a.Z)(e,o);t>=0?n[t].children.push(i):r.push(i)})),r}function s(e){var n=e.toc,t=e.minHeadingLevel,a=e.maxHeadingLevel;return n.flatMap((function(e){var n=s({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[Object.assign({},e,{children:n})]:n}))}function c(e){var n=e.getBoundingClientRect();return n.top===n.bottom?c(e.parentNode):n}function u(e,n){var t,a,r=n.anchorTopOffset,i=e.find((function(e){return c(e).top>=r}));return i?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(i))?i:null!=(a=e[e.indexOf(i)-1])?a:null:null!=(t=e[e.length-1])?t:null}function d(){var e=(0,r.useRef)(0),n=(0,i.L)().navbar.hideOnScroll;return(0,r.useEffect)((function(){e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function m(e){var n=(0,r.useRef)(void 0),t=d();(0,r.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,r=e.linkActiveClassName,i=e.minHeadingLevel,o=e.maxHeadingLevel;function l(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),l=function(e){for(var n=e.minHeadingLevel,t=e.maxHeadingLevel,a=[],r=n;r<=t;r+=1)a.push("h"+r+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:i,maxHeadingLevel:o}),s=u(l,{anchorTopOffset:t.current}),c=e.find((function(e){return s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(r),e.classList.add(r),n.current=e):e.classList.remove(r)}(e,e===c)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,t])}var f=t(4637);function v(e){var n=e.toc,t=e.className,a=e.linkClassName,r=e.isChild;return n.length?(0,f.jsx)("ul",{className:r?void 0:t,children:n.map((function(e){return(0,f.jsxs)("li",{children:[(0,f.jsx)("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,f.jsx)(v,{isChild:!0,toc:e.children,className:t,linkClassName:a})]},e.id)}))}):null}var h=r.memo(v),g=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function p(e){var n=e.toc,t=e.className,o=void 0===t?"table-of-contents table-of-contents__left-border":t,c=e.linkClassName,u=void 0===c?"table-of-contents__link":c,d=e.linkActiveClassName,v=void 0===d?void 0:d,p=e.minHeadingLevel,x=e.maxHeadingLevel,b=(0,a.Z)(e,g),j=(0,i.L)(),L=null!=p?p:j.tableOfContents.minHeadingLevel,N=null!=x?x:j.tableOfContents.maxHeadingLevel,k=function(e){var n=e.toc,t=e.minHeadingLevel,a=e.maxHeadingLevel;return(0,r.useMemo)((function(){return s({toc:l(n),minHeadingLevel:t,maxHeadingLevel:a})}),[n,t,a])}({toc:n,minHeadingLevel:L,maxHeadingLevel:N});return m((0,r.useMemo)((function(){if(u&&v)return{linkClassName:u,linkActiveClassName:v,minHeadingLevel:L,maxHeadingLevel:N}}),[u,v,L,N])),(0,f.jsx)(h,Object.assign({toc:k,className:o,linkClassName:u},b))}},51537:function(e,n,t){"use strict";t.d(n,{Z:function(){return v}});var a=t(78792),r=t(22426),i=t(233),o=t(7706),l=t(19998),s=t(51626),c=t(59496),u="title_xvU1",d="listTitle_ozbw",m=t(4637),f=function(e){var n=e.className,t=(0,o.C)(),r=t.metadata,f=t.isBlogPostPage,v=r.permalink,h=r.title,g=f?"h1":"h2",p=window.location.pathname.startsWith("/blog"),x=(0,c.useCallback)((function(){for(var e,n=new URL(f?window.location.pathname.replace(/^\/blog/,""):"/","https://blog.logto.io"),t=new URLSearchParams(window.location.search),r=(0,a.Z)(t.entries());!(e=r()).done;){var i=e.value,o=i[0],l=i[1];n.searchParams.append(o,l)}return n.pathname.endsWith("/")||(n.pathname+="/"),n}),[f]);return(0,c.useEffect)((function(){if(p){for(var e,n=(0,a.Z)(document.head.querySelectorAll("link"));!(e=n()).done;){var t,r,i=e.value;if(["canonical","alternate"].includes(null!=(t=i.getAttribute("rel"))?t:""))null==(r=i.parentNode)||r.removeChild(i)}var o=document.createElement("link");o.setAttribute("rel","canonical"),o.href=x().href,document.head.append(o)}}),[x,p]),(0,m.jsxs)(m.Fragment,{children:[p&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(l.Z,{type:"tip",children:["Logto Blog has been moved to the new place!"," ",(0,m.jsx)("a",{href:x().href,children:"Click here"})," to see this article in the new blog."]}),(0,m.jsx)("hr",{})]}),(0,m.jsx)(g,{className:(0,s.Z)(u,!f&&d,n),itemProp:"headline",children:f?h:(0,m.jsx)(i.Z,{itemProp:"url",to:v,children:h})})]})},v=function(){return(0,m.jsx)(r.Z,{children:function(){return(0,m.jsx)(f,{})}})}},37319:function(e,n,t){var a={"./locale":62642,"./locale.js":62642};function r(e){var n=i(e);return t(n)}function i(e){if(!t.o(a,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id=37319}}]);