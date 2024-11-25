"use strict";(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[4397],{22514:function(e,t,n){n.d(t,{A:function(){return l}});var i=n(96540);const o=[{id:0,link:"/projects/sistent/about",text:"About Sistent"},{id:1,link:"/projects/sistent/identity/color",text:"Colors"},{id:2,link:"/projects/sistent/identity/color/guidance",text:"Colors"},{id:3,link:"/projects/sistent/identity/color/code",text:"Colors"},{id:4,link:"/projects/sistent/identity/spacing",text:"Spacing"},{id:5,link:"/projects/sistent/identity/spacing/guidance",text:"Spacing"},{id:6,link:"/projects/sistent/identity/spacing/code",text:"Spacing"},{id:7,link:"/projects/sistent/identity/typography",text:"Typography"},{id:8,link:"/projects/sistent/identity/typography/guidance",text:"Typography"},{id:9,link:"/projects/sistent/identity/typography/code",text:"Typography"},{id:10,link:"/projects/sistent/components/button",text:"Button"},{id:10,link:"/projects/sistent/components/button/guidance",text:"Button"},{id:11,link:"/projects/sistent/components/button/code",text:"Button"},{id:12,link:"/projects/sistent/components/text-input",text:"Text Input"},{id:13,link:"/projects/sistent/components/text-input/guidance",text:"Text Input"},{id:14,link:"/projects/sistent/components/text-input/code",text:"Text Input"},{id:15,link:"/projects/sistent/components/paper",text:"Paper"},{id:16,link:"/projects/sistent/components/paper/guidance",text:"Paper"},{id:17,link:"/projects/sistent/components/paper/code",text:"Paper"},{id:18,link:"/projects/sistent/components/popper",text:"Popper"},{id:19,link:"/projects/sistent/components/popper/guidance",text:"Popper"},{id:20,link:"/projects/sistent/components/popper/code",text:"Popper"},{id:21,link:"/projects/sistent/components/text-field",text:"Text Field"},{id:22,link:"/projects/sistent/components/text-field/guidance",text:"Text Field"},{id:23,link:"/projects/sistent/components/text-field/code",text:"Text Field"},{id:24,link:"/projects/sistent/components/button-group",text:"Button Group"},{id:25,link:"/projects/sistent/components/button-group/guidance",text:"Button Group"},{id:26,link:"/projects/sistent/components/button-group/code",text:"Button Group"},{id:27,link:"/projects/sistent/components/tooltip",text:"Tooltip"},{id:25,link:"/projects/sistent/components/tooltip/guidance",text:"Tooltip"},{id:26,link:"/projects/sistent/components/tooltip/code",text:"Tooltip"}];var a=n(96044);var r=n(21250).default.div.withConfig({displayName:"paginationstyle__TocPaginationWrapper",componentId:"sc-isbsjw-0"})(["\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  margin: 3rem 2rem 4rem 2rem;\n\n  @media screen and (max-width: 540px) {\n    margin: 0 0 2rem 0;\n    flex-flow: row wrap;\n    gap: 0.3rem;\n  }\n"]);var l=()=>{var e,t;const{0:n,1:l}=(0,i.useState)(0);return(0,i.useEffect)((()=>{const e=window.location.pathname,t=o.findIndex((t=>t.link===e));l(t)}),[]),i.createElement(r,null,n>0?i.createElement(a.default,{$secondary:!0,$url:null===(e=o[n-1])||void 0===e?void 0:e.link},"← Previous"):null,n<o.length-1?i.createElement(a.default,{$primary:!0,$url:null===(t=o[n+1])||void 0===t?void 0:t.link},"Next →"):null)}},91219:function(e,t,n){n.r(t);var i=n(96540),o=n(64810),a=n(86462),r=n(58501),l=n(96044),s=n(9184),c=n(66054),p=n(92121);t.default=()=>{const e=(0,a.useLocation)(),{isDark:t}=(0,p.G)(),{0:n,1:d}=(0,i.useState)(null),{0:m,1:u}=(0,i.useState)("bottom"),{0:h,1:g}=(0,i.useState)(!1),x=e=>t=>{d(t.currentTarget),g((t=>m!==e||!t)),u(e)};return i.createElement(s.p,{title:"Popper"},i.createElement("div",{className:"content"},i.createElement("a",{id:"Identity"},i.createElement("h2",null,"Popper")),i.createElement("p",null,"The Popper component provides a mechanism for positioning content dynamically relative to a reference element. It is commonly used for tooltips, dropdowns, and modals, enhancing the user experience by presenting contextual information without overcrowding the interface."),i.createElement("div",{className:"filterBtns"},i.createElement(l.default,{className:"/projects/sistent/components/popper"===e.pathname?"active":"",onClick:()=>(0,o.navigate)("/projects/sistent/components/popper"),title:"Overview"}),i.createElement(l.default,{className:"/projects/sistent/components/popper/guidance"===e.pathname?"active":"",onClick:()=>(0,o.navigate)("/projects/sistent/components/popper/guidance"),title:"Guidance"}),i.createElement(l.default,{className:"/projects/sistent/components/popper/code"===e.pathname?"active":"",onClick:()=>(0,o.navigate)("/projects/sistent/components/popper/code"),title:"Code"})),i.createElement("div",{className:"main-content"},i.createElement("p",null,"Poppers are critical for displaying information dynamically and can be used in various scenarios like tooltips, dropdowns, and menus. By anchoring the content to a reference element, Poppers provide users with relevant information as they interact with the interface."),i.createElement("a",{id:"Usage"},i.createElement("h2",null,"Usage")),i.createElement("p",null,"The Popper component should be used in cases where context-sensitive information is necessary. Here are common use cases:"),i.createElement("ul",null,i.createElement("li",null,"Tooltips that provide additional information on hover."),i.createElement("li",null,"Dropdown menus for navigation or selections."),i.createElement("li",null,"Modals for confirmations or additional content.")),i.createElement("a",{id:"Basic Example"},i.createElement("h3",null,"Basic Example")),i.createElement("p",null,"Below is a simple example of how to use the Popper component to display content relative to a button."),i.createElement(r.SistentThemeProvider,{initialMode:t?"dark":"light"},i.createElement(r.Popper,{open:h,anchorEl:n,placement:m},i.createElement(r.Box,{sx:{border:1,p:1,bgcolor:"background.paper"}},"The content of the Popper."))),i.createElement(c.fI,{$Hcenter:!0,className:"image-container"},i.createElement(r.SistentThemeProvider,{initialMode:t?"dark":"light"},i.createElement(r.Button,{variant:"contained",label:"Toggle Popper",size:"medium",onClick:x("bottom")}))),i.createElement("p",null,"The `anchorEl` prop specifies the element to which the Popper will be anchored. The `open` prop controls its visibility."),i.createElement("a",{id:"Styling and Positioning"},i.createElement("h3",null,"Styling and Positioning")),i.createElement("p",null,"You can customize the positioning of the Popper using the `placement` prop to define where the Popper appears relative to the anchor element."),i.createElement(c.fI,{$Hcenter:!0,className:"image-container"},i.createElement(r.SistentThemeProvider,{initialMode:t?"dark":"light"},i.createElement(r.Button,{variant:"contained",label:"Toggle Popper",size:"medium",onClick:x("right")}))),i.createElement("p",null,"The above example demonstrates a Popper positioned right the reference button, providing flexibility in its placement."))))}},9184:function(e,t,n){n.d(t,{p:function(){return d}});var i=n(96540),o=n(91580),a=n(66198),r=n(66054),l=n(22514),s=n(64810);const c=n(21250).default.div.withConfig({displayName:"intra-page__JoinCommunityWrapper",componentId:"sc-q3x19t-0"})(["\n  width: 18rem;\n\n  @media screen and (max-width: 750px) {\n    display: none;\n  }\n\n  @media screen and (min-width: 751px) and (max-width: 1279px) {\n    display: none;\n  }\n  .intra-page {\n    position: sticky;\n    top: 10rem;\n    right: 0rem;\n    margin-right: 1rem;\n    padding-bottom: 5rem;\n    padding-right: 2rem;\n    align-items: left;\n    justify-content: space-around;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n\n    .list {\n      color: #000000;\n    }\n    .active {\n      font-weight: 5000;\n      color: #000000;\n    }\n\n    ul {\n      list-style: none;\n      top: 3rem;\n      li {\n        padding-bottom: 0.5rem;\n        padding-top: 0.5rem;\n      }\n    }\n    @media only screen and (min-width: 1280px) and (max-width: 1350px) {\n      padding-right: 0rem;\n      margin-right: 0rem;\n    }\n    @media only screen and (max-width: 950px) {\n      width: 0;\n      opacity: 0;\n      height: 0;\n      transition: none;\n      visibility: hidden;\n    }\n  }\n\n  .learn {\n    width: 10rem;\n  }\n"]);var p=function(){const{0:e,1:t}=(0,i.useState)([]);(0,i.useEffect)((()=>{const e=document.querySelectorAll(".main-content > a");console.log(e),e&&t(Array.from(e).map((e=>({id:e.id,link:`#${e.id}`,text:e.id}))))}),[]);const{0:n,1:o}=(0,i.useState)(null);return(0,i.useEffect)((()=>{const e=window.location.pathname;o(e)}),[]),i.createElement(c,null,i.createElement("div",{className:"intra-page"},i.createElement("ul",null,e.map((e=>i.createElement("li",{key:e.id,className:"list"},i.createElement(s.Link,{to:`${n}${e.link}`,key:e.id,activeClassName:"active"},e.text)))))))};const d=e=>{let{title:t,children:n}=e;return i.createElement(o.A,null,i.createElement("div",{className:"page-header-section"},i.createElement("h1",null,t)),i.createElement(a.A,null),i.createElement("div",{className:"page-section"},i.createElement(r.mc,null,n," ",i.createElement(l.A,null)),i.createElement(p,null)))}}}]);
//# sourceMappingURL=component---src-sections-projects-sistent-components-popper-index-js-fe3466800ba15647f31c.js.map