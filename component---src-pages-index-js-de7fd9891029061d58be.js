(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{144:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(171),l=a(169);a(412);t.default=function(){return i.a.createElement(r.a,{title:""},i.a.createElement(l.a,{title:"Home"}),i.a.createElement("h1",null,"Welcome to Simple Stock Calculator."),i.a.createElement("p",null,"Navigate the different calculators above."),i.a.createElement("h5",null,"This website is a work in progress..."),i.a.createElement("div",{style:{maxWidth:"300px",marginBottom:"1.45rem"}}))}},158:function(e,t,a){var n;e.exports=(n=a(164))&&n.default||n},163:function(e){e.exports={data:{site:{siteMetadata:{title:"Simple Stock Calculator",menuLinks:[{name:"Home",link:"/"},{name:"Profit Calculator",link:"/profit-calc"},{name:"Short Position Calculator",link:"/position-calc"},{name:"Margin Trade Calculator",link:"/margin-trade"}]}}}}},164:function(e,t,a){"use strict";a.r(t);a(36);var n=a(0),i=a.n(n),r=a(4),l=a.n(r),o=a(55),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?i.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},169:function(e,t,a){"use strict";var n=a(170),i=a(0),r=a.n(i),l=a(4),o=a.n(l),c=a(193),s=a.n(c);function u(e){var t=e.description,a=e.lang,i=e.meta,l=e.title,o=n.data.site,c=t||o.siteMetadata.description;return r.a.createElement(s.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:l},{property:"og:description",content:c},{property:"og:type",content:"website"}].concat(i)})}u.defaultProps={lang:"en",meta:[],description:""},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),title:o.a.string.isRequired},t.a=u},170:function(e){e.exports={data:{site:{siteMetadata:{title:"Simple Stock Calculator",description:"This is Simple Stock Calculator!"}}}}},171:function(e,t,a){"use strict";var n=a(163),i=a(0),r=a.n(i),l=a(4),o=a.n(l),c=a(33),s=a.n(c),u=(a(158),r.a.createContext({})),m=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func};a(172),a(188);var d=a(463),p=function(e){var t=e.siteTitle,a=e.menuLinks,n=e.page;return r.a.createElement("header",{style:{background:"#2E3440",marginBottom:"1.45rem"}},r.a.createElement("div",null,r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},r.a.createElement("h1",{style:{margin:0}},r.a.createElement(s.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))),r.a.createElement(d.a,{stackable:!0},a.map(function(e){return r.a.createElement(d.a.Item,{active:"/"+n===e.link,onClick:function(){return Object(c.navigate)(e.link)}},e.name)}))))};p.propTypes={siteTitle:o.a.string},p.defaultProps={siteTitle:""};var g=p,f=(a(192),function(e){var t=e.children,a=e.title;return r.a.createElement(m,{query:"3436215879",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{menuLinks:e.site.siteMetadata.menuLinks,siteTitle:e.site.siteMetadata.title,page:a}),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},r.a.createElement("main",null,t),r.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with ♥ by"," ",r.a.createElement("a",{href:"https://www.linkedin.com/in/kevin-mckigney-b59481160/"},"Kevin McKigney,"),"  ",r.a.createElement("a",{href:"http://linkedin.com/in/zosman1/"},"Zach Osman "),"  and  ",r.a.createElement("a",{href:"https://www.linkedin.com/in/chrisae9/"},"Chris Alves"))))},data:n})});f.propTypes={children:o.a.node.isRequired};t.a=f}}]);
//# sourceMappingURL=component---src-pages-index-js-de7fd9891029061d58be.js.map