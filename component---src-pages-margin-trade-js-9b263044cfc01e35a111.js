(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{145:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return f});a(172);var n=a(7),l=a.n(n),r=a(0),i=a.n(r),o=a(467),c=a(468),u=a(461),s=a(459),p=a(462),m=a(460),d=a(171),E=a(169),h=a(194),g=a(196),f=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(t=e.call.apply(e,[this].concat(n))||this).state={initPps:null,quantity:null,interest:null,newPps:null,leverage:null,initCap:null},t}l()(t,e);var a=t.prototype;return a.handleInput=function(e,t){var a;this.setState(((a={})[t]=e.target.value,a))},a.render=function(){var e=this,t=this.state,a=t.initPps,n=t.quantity,l=t.newPps,r=t.initCap,f=this.state.interest/100,v=this.state.leverage/100,y=parseInt(r)+r*v,C=a*n,b=(l-a)/a,w=C*b,P=Math.abs(w)*f,k=w-Math.abs(P),T=y-a*n;return i.a.createElement(d.a,{title:"margin-trade"},i.a.createElement(E.a,{title:"Margin Trade Calculator"}),i.a.createElement(o.a,null,i.a.createElement(c.a,{columns:2,relaxed:"very"},i.a.createElement(c.a.Column,null,i.a.createElement(u.a,null,i.a.createElement("h1",null,"Margin Trade Calculator"),i.a.createElement("p",null,"Enter Stock Information Below:"),i.a.createElement(u.a.Field,null,i.a.createElement("label",null,"Initial Capital:"),i.a.createElement(s.a,{value:this.state.initCap,onChange:function(t){return e.handleInput(t,"initCap")},placeholder:"Initial Capital",icon:"dollar sign"})),i.a.createElement(u.a.Field,null,i.a.createElement("label",null,"Leverage: "),i.a.createElement(s.a,{value:this.state.leverage,onChange:function(t){return e.handleInput(t,"leverage")},placeholder:"Leverage",icon:"percent"})),i.a.createElement(u.a.Field,null,i.a.createElement("label",null,"Interest:"),i.a.createElement(s.a,{value:this.state.interest,onChange:function(t){return e.handleInput(t,"interest")},placeholder:"Interest Or Comission",icon:"percent"})),i.a.createElement(u.a.Field,null,i.a.createElement("label",null,"Stock Price:"),i.a.createElement(s.a,{value:this.state.initPps,onChange:function(t){return e.handleInput(t,"initPps")},placeholder:"Price Per Share",icon:"dollar sign"})),i.a.createElement(u.a.Field,null,i.a.createElement("label",null,"Quantity:"),i.a.createElement(s.a,{value:this.state.quantity,onChange:function(t){return e.handleInput(t,"quantity")},placeholder:"Quantity of Shares",icon:"sort amount up"})),i.a.createElement(u.a.Field,null,i.a.createElement("label",null,"New Stock Price: "),i.a.createElement(s.a,{value:this.state.newPps,onChange:function(t){return e.handleInput(t,"newPps")},placeholder:"New PPS",icon:"dollar sign"})))),i.a.createElement(c.a.Column,null,i.a.createElement(g.a,{netp:k}),i.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",padding:"10px"}},i.a.createElement(p.a,{basic:"very",celled:!0,collapsing:!0},i.a.createElement(h.a,{label:"Total Buying Power",value:y}),i.a.createElement(h.a,{label:"Total Market Purchase Value",value:C}),i.a.createElement(h.a,{label:"Remaining Buying Power",value:T}),i.a.createElement(h.a,{label:"Growth",value:100*b,percent:!0}),i.a.createElement(h.a,{label:"Gross Profit",value:w}),i.a.createElement(h.a,{label:"Amount Owed To Broker",value:P}),i.a.createElement(h.a,{label:"Net Profit After Interest / Commision",value:k})),C>y&&i.a.createElement("h4",{style:{color:"red"}},"ERROR: YOUR PURCHASE EXCEEDS BUYING POWER!!!!"," ")))),i.a.createElement(m.a,{vertical:!0},"yields")),i.a.createElement("h5",null,"This website is a work in progress..."))},t}(i.a.Component)},158:function(e,t,a){var n;e.exports=(n=a(164))&&n.default||n},163:function(e){e.exports={data:{site:{siteMetadata:{title:"Simple Stock Calculator",menuLinks:[{name:"Home",link:"/"},{name:"Profit Calculator",link:"/profit-calc"},{name:"Short Position Calculator",link:"/position-calc"},{name:"Margin Trade Calculator",link:"/margin-trade"}]}}}}},164:function(e,t,a){"use strict";a.r(t);a(36);var n=a(0),l=a.n(n),r=a(4),i=a.n(r),o=a(55),c=a(2),u=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?l.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u},169:function(e,t,a){"use strict";var n=a(170),l=a(0),r=a.n(l),i=a(4),o=a.n(i),c=a(193),u=a.n(c);function s(e){var t=e.description,a=e.lang,l=e.meta,i=e.title,o=n.data.site,c=t||o.siteMetadata.description;return r.a.createElement(u.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:i},{property:"og:description",content:c},{property:"og:type",content:"website"}].concat(l)})}s.defaultProps={lang:"en",meta:[],description:""},s.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),title:o.a.string.isRequired},t.a=s},170:function(e){e.exports={data:{site:{siteMetadata:{title:"Simple Stock Calculator",description:"This is Simple Stock Calculator!"}}}}},171:function(e,t,a){"use strict";var n=a(163),l=a(0),r=a.n(l),i=a(4),o=a.n(i),c=a(33),u=a.n(c),s=(a(158),r.a.createContext({})),p=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func};a(172),a(188);var m=a(463),d=function(e){var t=e.siteTitle,a=e.menuLinks,n=e.page;return r.a.createElement("header",{style:{background:"#2E3440",marginBottom:"1.45rem"}},r.a.createElement("div",null,r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},r.a.createElement("h1",{style:{margin:0}},r.a.createElement(u.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))),r.a.createElement(m.a,{stackable:!0},a.map(function(e){return r.a.createElement(m.a.Item,{active:"/"+n===e.link,onClick:function(){return Object(c.navigate)(e.link)}},e.name)}))))};d.propTypes={siteTitle:o.a.string},d.defaultProps={siteTitle:""};var E=d,h=(a(192),function(e){var t=e.children,a=e.title;return r.a.createElement(p,{query:"3436215879",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,{menuLinks:e.site.siteMetadata.menuLinks,siteTitle:e.site.siteMetadata.title,page:a}),r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},r.a.createElement("main",null,t),r.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",r.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:n})});h.propTypes={children:o.a.node.isRequired};t.a=h},194:function(e,t,a){"use strict";var n=a(7),l=a.n(n),r=a(0),i=a.n(r),o=a(4),c=a.n(o),u=a(462),s=a(465),p=function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){var e=this.props,t=e.value,a=e.label,n=e.percent,l=e.dollarSign;return i.a.createElement(u.a.Body,null,i.a.createElement(u.a.Row,null,i.a.createElement(u.a.Cell,null,i.a.createElement(s.a,{as:"h4"},i.a.createElement(s.a.Content,null,a))),i.a.createElement(u.a.Cell,null,l&&"$",isNaN(t)?0:Math.round(100*t)/100,n&&"%")))},t}(i.a.Component);p.propTypes={label:c.a.string.isRequired,value:c.a.number.isRequired,percent:c.a.bool,dollarSign:c.a.bool},t.a=p},196:function(e,t,a){"use strict";a.d(t,"a",function(){return s});var n=a(7),l=a.n(n),r=a(0),i=a.n(r),o=a(4),c=a.n(o),u=a(465),s=function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){var e=isNaN(this.props.netp)?0:this.props.netp,t="black";return e>0&&(t="green"),e<0&&(t="red"),i.a.createElement(u.a,{as:"h1",icon:!0,textAlign:"center"},i.a.createElement(u.a.Content,null,"Total Profit"),i.a.createElement(u.a,{color:t},"$",Math.round(100*e)/100))},t}(i.a.Component);s.propTypes={netp:c.a.number.isRequired}}}]);
//# sourceMappingURL=component---src-pages-margin-trade-js-9b263044cfc01e35a111.js.map