(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[46103],{98258:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return h}});t(59496);var a=t(45924),r=t(33859),i=t(14755),o=t(9160),l=t(84376),s=t(66822),c=t(25270),u=t(74685),d=t(4637);function m(e){var n=e.nextItem,t=e.prevItem;return(0,d.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[t&&(0,d.jsx)(u.Z,Object.assign({},t,{subLabel:(0,d.jsx)(c.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer Post"})})),n&&(0,d.jsx)(u.Z,Object.assign({},n,{subLabel:(0,d.jsx)(c.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older Post"}),isNext:!0}))]})}function v(){var e,n=(0,o.C)(),t=n.assets,a=n.metadata,i=a.title,l=a.description,s=a.date,c=a.tags,u=a.authors,m=a.frontMatter,v=m.keywords,f=null!=(e=t.image)?e:m.image;return(0,d.jsxs)(r.d,{title:i,description:l,keywords:v,image:f,children:[(0,d.jsx)("meta",{property:"og:type",content:"article"}),(0,d.jsx)("meta",{property:"article:published_time",content:s}),u.some((function(e){return e.url}))&&(0,d.jsx)("meta",{property:"article:author",content:u.map((function(e){return e.url})).filter(Boolean).join(",")}),c.length>0&&(0,d.jsx)("meta",{property:"article:tag",content:c.map((function(e){return e.label})).join(",")})]})}var f=t(51925);function g(e){var n=e.sidebar,t=e.children,a=(0,o.C)(),r=a.metadata,i=a.toc,c=r.nextItem,u=r.prevItem,v=r.frontMatter,g=v.hide_table_of_contents,h=v.toc_min_heading_level,p=v.toc_max_heading_level;return(0,d.jsxs)(l.Z,{sidebar:n,toc:!g&&i.length>0?(0,d.jsx)(f.Z,{toc:i,minHeadingLevel:h,maxHeadingLevel:p}):void 0,children:[(0,d.jsx)(s.Z,{children:t}),(c||u)&&(0,d.jsx)(m,{nextItem:c,prevItem:u})]})}function h(e){var n=e.content;return(0,d.jsx)(o.n,{content:e.content,isBlogPostPage:!0,children:(0,d.jsxs)(r.FG,{className:(0,a.Z)(i.k.wrapper.blogPages,i.k.page.blogPostPage),children:[(0,d.jsx)(v,{}),(0,d.jsx)(g,{sidebar:e.sidebar,children:(0,d.jsx)(n,{})})]})})}},51925:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var a=t(40151),r=(t(59496),t(45924)),i=t(92278),o="tableOfContents_MdFo",l=t(4637),s=["className"];function c(e){var n=e.className,t=(0,a.Z)(e,s);return(0,l.jsx)("div",{className:(0,r.Z)(o,"thin-scrollbar",n),children:(0,l.jsx)(i.Z,Object.assign({},t,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"}))})}},92278:function(e,n,t){"use strict";t.d(n,{Z:function(){return p}});var a=t(40151),r=t(59496),i=t(40458),o=["parentIndex"];function l(e){var n=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),t=Array(7).fill(-1);n.forEach((function(e,n){var a=t.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),t[e.level]=n}));var r=[];return n.forEach((function(e){var t=e.parentIndex,i=(0,a.Z)(e,o);t>=0?n[t].children.push(i):r.push(i)})),r}function s(e){var n=e.toc,t=e.minHeadingLevel,a=e.maxHeadingLevel;return n.flatMap((function(e){var n=s({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[Object.assign({},e,{children:n})]:n}))}function c(e){var n=e.getBoundingClientRect();return n.top===n.bottom?c(e.parentNode):n}function u(e,n){var t,a,r=n.anchorTopOffset,i=e.find((function(e){return c(e).top>=r}));return i?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(i))?i:null!=(a=e[e.indexOf(i)-1])?a:null:null!=(t=e[e.length-1])?t:null}function d(){var e=(0,r.useRef)(0),n=(0,i.L)().navbar.hideOnScroll;return(0,r.useEffect)((function(){e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function m(e){var n=(0,r.useRef)(void 0),t=d();(0,r.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,r=e.linkActiveClassName,i=e.minHeadingLevel,o=e.maxHeadingLevel;function l(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),l=function(e){for(var n=e.minHeadingLevel,t=e.maxHeadingLevel,a=[],r=n;r<=t;r+=1)a.push("h"+r+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:i,maxHeadingLevel:o}),s=u(l,{anchorTopOffset:t.current}),c=e.find((function(e){return s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(r),e.classList.add(r),n.current=e):e.classList.remove(r)}(e,e===c)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,t])}var v=t(4637);function f(e){var n=e.toc,t=e.className,a=e.linkClassName,r=e.isChild;return n.length?(0,v.jsx)("ul",{className:r?void 0:t,children:n.map((function(e){return(0,v.jsxs)("li",{children:[(0,v.jsx)("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,v.jsx)(f,{isChild:!0,toc:e.children,className:t,linkClassName:a})]},e.id)}))}):null}var g=r.memo(f),h=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function p(e){var n=e.toc,t=e.className,o=void 0===t?"table-of-contents table-of-contents__left-border":t,c=e.linkClassName,u=void 0===c?"table-of-contents__link":c,d=e.linkActiveClassName,f=void 0===d?void 0:d,p=e.minHeadingLevel,x=e.maxHeadingLevel,b=(0,a.Z)(e,h),L=(0,i.L)(),j=null!=p?p:L.tableOfContents.minHeadingLevel,N=null!=x?x:L.tableOfContents.maxHeadingLevel,H=function(e){var n=e.toc,t=e.minHeadingLevel,a=e.maxHeadingLevel;return(0,r.useMemo)((function(){return s({toc:l(n),minHeadingLevel:t,maxHeadingLevel:a})}),[n,t,a])}({toc:n,minHeadingLevel:j,maxHeadingLevel:N});return m((0,r.useMemo)((function(){if(u&&f)return{linkClassName:u,linkActiveClassName:f,minHeadingLevel:j,maxHeadingLevel:N}}),[u,f,j,N])),(0,v.jsx)(g,Object.assign({toc:H,className:o,linkClassName:u},b))}},35426:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var a=t(5120),r=t(9160),i=t(51626),o="title_xvU1",l="listTitle_ozbw",s=t(4637),c=function(e){var n=e.className,t=(0,r.C)(),c=t.metadata,u=t.isBlogPostPage,d=c.permalink,m=c.title,v=u?"h1":"h2";return(0,s.jsx)(v,{className:(0,i.Z)(o,!u&&l,n),itemProp:"headline",children:u?m:(0,s.jsx)(a.Z,{itemProp:"url",to:d,children:m})})}},37319:function(e,n,t){var a={"./locale":62642,"./locale.js":62642};function r(e){var n=i(e);return t(n)}function i(e){if(!t.o(a,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id=37319}}]);