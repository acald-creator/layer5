"use strict";(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[9993],{22514:function(e,t,n){n.d(t,{A:function(){return r}});var i=n(96540);const a=[{id:0,link:"/projects/sistent/about",text:"About Sistent"},{id:1,link:"/projects/sistent/identity/color",text:"Colors"},{id:2,link:"/projects/sistent/identity/color/guidance",text:"Colors"},{id:3,link:"/projects/sistent/identity/color/code",text:"Colors"},{id:4,link:"/projects/sistent/identity/spacing",text:"Spacing"},{id:5,link:"/projects/sistent/identity/spacing/guidance",text:"Spacing"},{id:6,link:"/projects/sistent/identity/spacing/code",text:"Spacing"},{id:7,link:"/projects/sistent/identity/typography",text:"Typography"},{id:8,link:"/projects/sistent/identity/typography/guidance",text:"Typography"},{id:9,link:"/projects/sistent/identity/typography/code",text:"Typography"},{id:10,link:"/projects/sistent/components/button",text:"Button"},{id:10,link:"/projects/sistent/components/button/guidance",text:"Button"},{id:11,link:"/projects/sistent/components/button/code",text:"Button"},{id:12,link:"/projects/sistent/components/text-input",text:"Text Input"},{id:13,link:"/projects/sistent/components/text-input/guidance",text:"Text Input"},{id:14,link:"/projects/sistent/components/text-input/code",text:"Text Input"},{id:15,link:"/projects/sistent/components/paper",text:"Paper"},{id:16,link:"/projects/sistent/components/paper/guidance",text:"Paper"},{id:17,link:"/projects/sistent/components/paper/code",text:"Paper"},{id:18,link:"/projects/sistent/components/popper",text:"Popper"},{id:19,link:"/projects/sistent/components/popper/guidance",text:"Popper"},{id:20,link:"/projects/sistent/components/popper/code",text:"Popper"},{id:21,link:"/projects/sistent/components/text-field",text:"Text Field"},{id:22,link:"/projects/sistent/components/text-field/guidance",text:"Text Field"},{id:23,link:"/projects/sistent/components/text-field/code",text:"Text Field"},{id:24,link:"/projects/sistent/components/button-group",text:"Button Group"},{id:25,link:"/projects/sistent/components/button-group/guidance",text:"Button Group"},{id:26,link:"/projects/sistent/components/button-group/code",text:"Button Group"},{id:27,link:"/projects/sistent/components/tooltip",text:"Tooltip"},{id:25,link:"/projects/sistent/components/tooltip/guidance",text:"Tooltip"},{id:26,link:"/projects/sistent/components/tooltip/code",text:"Tooltip"}];var o=n(96044);var l=n(21250).default.div.withConfig({displayName:"paginationstyle__TocPaginationWrapper",componentId:"sc-isbsjw-0"})(["\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  margin: 3rem 2rem 4rem 2rem;\n\n  @media screen and (max-width: 540px) {\n    margin: 0 0 2rem 0;\n    flex-flow: row wrap;\n    gap: 0.3rem;\n  }\n"]);var r=()=>{var e,t;const{0:n,1:r}=(0,i.useState)(0);return(0,i.useEffect)((()=>{const e=window.location.pathname,t=a.findIndex((t=>t.link===e));r(t)}),[]),i.createElement(l,null,n>0?i.createElement(o.default,{$secondary:!0,$url:null===(e=a[n-1])||void 0===e?void 0:e.link},"← Previous"):null,n<a.length-1?i.createElement(o.default,{$primary:!0,$url:null===(t=a[n+1])||void 0===t?void 0:t.link},"Next →"):null)}},5168:function(e,t,n){n.d(t,{N:function(){return o}});var i=n(96540),a=n(5041);const o=e=>{let{name:t,code:n}=e;const{0:o,1:l}=(0,i.useState)(!1);return i.createElement("div",{className:"show-code"},i.createElement("input",{type:"checkbox",name:t,id:t,onChange:()=>{l((e=>!e))}}),i.createElement("label",{htmlFor:t,className:"label"},"Show Code"),o&&i.createElement(a.Ay,{codeString:n,language:"javascript"}))}},52427:function(e,t,n){n.r(t);var i=n(96540),a=n(64810),o=n(86462),l=n(58501),r=n(5168),s=n(9184),c=n(96044),d=n(92121);const m=['<SistentThemeProvider initialMode={isDark ? "dark" : "light"}>\n      <Container maxWidth="sm">\n        <Box sx={{ bgcolor: \'#cfe8fc\', height: \'50vh\' }} />\n      </Container>\n  </SistentThemeProvider>','<SistentThemeProvider initialMode={isDark ? "dark" : "light"}>\n      <Container maxWidth="md">\n        <Box sx={{ bgcolor: \'#cfe8fc\', height: \'50vh\' }} />\n      </Container>\n  </SistentThemeProvider>',"<SistentThemeProvider initialMode={isDark ? \"dark\" : \"light\"}>\n      <Container fixed>\n        <Box sx={{ bgcolor: '#cfe8fc', height: '50vh' }} />\n      </Container>\n  </SistentThemeProvider>\n",'\n<SistentThemeProvider initialMode={isDark ? "dark" : "light"}>\n              <Container>\n                <Container maxWidth="sm">\n                  <Box sx={{ bgcolor: "#cfe8fc", height: "50vh" }}>\n                    <p style={{ color: "black" }}>\n                      This is a nested container example.\n                    </p>\n                  </Box>\n                </Container>\n              </Container>\n</SistentThemeProvider>\n'];t.default=()=>{const e=(0,o.useLocation)(),{isDark:t}=(0,d.G)();return i.createElement(s.p,{title:"Container"},i.createElement("div",{className:"content"},i.createElement("a",{id:"Identity"},i.createElement("h2",null,"Container")),i.createElement("p",null),i.createElement("div",{className:"filterBtns"},i.createElement(c.default,{className:"/projects/sistent/components/container"===e.pathname?"active":"",onClick:()=>(0,a.navigate)("/projects/sistent/components/container"),title:"Overview"}),i.createElement(c.default,{className:"/projects/sistent/components/container/guidance"===e.pathname?"active":"",onClick:()=>(0,a.navigate)("/projects/sistent/components/container/guidance"),title:"Guidance"}),i.createElement(c.default,{className:"/projects/sistent/components/container/code"===e.pathname?"active":"",onClick:()=>(0,a.navigate)("/projects/sistent/components/container/code"),title:"Code"})),i.createElement("div",{className:"main-content"},i.createElement("p",null,"The Container component is an essential building block for creating layouts. Its ability to center content, provide fluid and fixed widths, and adapt responsively to different screen sizes makes it an invaluable tool for developers. By using the Container effectively, you can ensure that your application maintains a clean and organized appearance while enhancing the user experience."),i.createElement("a",{id:"Fluid Container"},i.createElement("h2",null,"Fluid Container Example")),i.createElement("p",null,"By default, the Container is fluid, meaning it adjusts its width based on the viewport size. You can control its maximum width by utilizing the maxWidth prop."),i.createElement("div",{className:"showcase"},i.createElement("div",{className:"items"},i.createElement(l.SistentThemeProvider,{initialMode:t?"dark":"light"},i.createElement(l.Container,{maxWidth:"sm"},i.createElement(l.Box,{sx:{bgcolor:"#cfe8fc",height:"50vh"}})))),i.createElement(r.N,{name:"container-fluid-sm",code:m[0]})),i.createElement("div",null,i.createElement("h4",null,"maxWidth Prop Values"),i.createElement("p",null,"The maxWidth prop accepts several predefined values, each corresponding to specific breakpoints. Here are the available options:"),i.createElement("ul",null,i.createElement("li",null,i.createElement("strong",null,'"xs"'),": This sets the maximum width to the extra-small breakpoint (0px to 600px). The container will not exceed this width, providing a compact layout suitable for mobile devices."),i.createElement("li",null,i.createElement("strong",null,'"sm"'),": The small breakpoint (600px to 960px) ensures that the container expands up to a width of 600px, making it a good choice for tablets and smaller desktops."),i.createElement("li",null,i.createElement("strong",null,'"md"'),": This option sets the maximum width to the medium breakpoint (960px to 1280px). It is useful for standard desktop views while still accommodating smaller devices."),i.createElement("li",null,i.createElement("strong",null,'"lg"'),": The large breakpoint (1280px to 1920px) allows the container to grow larger, up to 1280px, ideal for wide-screen displays and detailed layouts."),i.createElement("li",null,i.createElement("strong",null,'"xl"'),": This sets the maximum width to the extra-large breakpoint (1920px and above). It's particularly beneficial for high-resolution screens where more content can be displayed without feeling cramped."),i.createElement("li",null,i.createElement("strong",null,"false"),": If set to false, the container will have no maximum width constraint, allowing it to stretch the full width of its parent element."))),i.createElement("div",null,i.createElement("h4",null,"Another Example with ",i.createElement("strong",null,'maxWith = "md"')),i.createElement("div",{className:"showcase"},i.createElement("div",{className:"items"},i.createElement(l.SistentThemeProvider,{initialMode:t?"dark":"light"},i.createElement(l.Container,{maxWidth:"md"},i.createElement(l.Box,{sx:{bgcolor:"#cfe8fc",height:"50vh"}})))),i.createElement(r.N,{name:"Container-fluid-md",code:m[1]}))),i.createElement("a",{id:"Fixed Container"},i.createElement("h2",null,"Fixed Container Example")),i.createElement("p",null,"If you prefer a fixed width, you can use the fixed prop. This aligns the container's max-width with the minimum width of the current breakpoint, ensuring that your layout remains consistent across different screen sizes"),i.createElement("div",{className:"showcase"},i.createElement("div",{className:"items"},i.createElement(l.SistentThemeProvider,{initialMode:t?"dark":"light"},i.createElement(l.Container,{fixed:!0},i.createElement(l.Box,{sx:{bgcolor:"#cfe8fc",height:"50vh"}})))),i.createElement(r.N,{name:"Container-fixed",code:m[2]})),i.createElement("a",{id:"Nested Container"},i.createElement("h2",null,"Nested Container Example"),i.createElement("p",null,"A small section on nesting containers, emphasizing best practices.")),i.createElement("div",{className:"showcase"},i.createElement("div",{className:"items"},i.createElement(l.SistentThemeProvider,{initialMode:t?"dark":"light"},i.createElement(l.Container,null,i.createElement(l.Container,{maxWidth:"sm"},i.createElement(l.Box,{sx:{bgcolor:"#cfe8fc",height:"50vh"}}))))),i.createElement(r.N,{name:"Nested-container-fluid",code:m[3]})))))}},9184:function(e,t,n){n.d(t,{p:function(){return m}});var i=n(96540),a=n(91580),o=n(66198),l=n(66054),r=n(22514),s=n(64810);const c=n(21250).default.div.withConfig({displayName:"intra-page__JoinCommunityWrapper",componentId:"sc-q3x19t-0"})(["\n  width: 18rem;\n\n  @media screen and (max-width: 750px) {\n    display: none;\n  }\n\n  @media screen and (min-width: 751px) and (max-width: 1279px) {\n    display: none;\n  }\n  .intra-page {\n    position: sticky;\n    top: 10rem;\n    right: 0rem;\n    margin-right: 1rem;\n    padding-bottom: 5rem;\n    padding-right: 2rem;\n    align-items: left;\n    justify-content: space-around;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n\n    .list {\n      color: #000000;\n    }\n    .active {\n      font-weight: 5000;\n      color: #000000;\n    }\n\n    ul {\n      list-style: none;\n      top: 3rem;\n      li {\n        padding-bottom: 0.5rem;\n        padding-top: 0.5rem;\n      }\n    }\n    @media only screen and (min-width: 1280px) and (max-width: 1350px) {\n      padding-right: 0rem;\n      margin-right: 0rem;\n    }\n    @media only screen and (max-width: 950px) {\n      width: 0;\n      opacity: 0;\n      height: 0;\n      transition: none;\n      visibility: hidden;\n    }\n  }\n\n  .learn {\n    width: 10rem;\n  }\n"]);var d=function(){const{0:e,1:t}=(0,i.useState)([]);(0,i.useEffect)((()=>{const e=document.querySelectorAll(".main-content > a");console.log(e),e&&t(Array.from(e).map((e=>({id:e.id,link:`#${e.id}`,text:e.id}))))}),[]);const{0:n,1:a}=(0,i.useState)(null);return(0,i.useEffect)((()=>{const e=window.location.pathname;a(e)}),[]),i.createElement(c,null,i.createElement("div",{className:"intra-page"},i.createElement("ul",null,e.map((e=>i.createElement("li",{key:e.id,className:"list"},i.createElement(s.Link,{to:`${n}${e.link}`,key:e.id,activeClassName:"active"},e.text)))))))};const m=e=>{let{title:t,children:n}=e;return i.createElement(a.A,null,i.createElement("div",{className:"page-header-section"},i.createElement("h1",null,t)),i.createElement(o.A,null),i.createElement("div",{className:"page-section"},i.createElement(l.mc,null,n," ",i.createElement(r.A,null)),i.createElement(d,null)))}}}]);
//# sourceMappingURL=component---src-sections-projects-sistent-components-container-code-js-9639e775e4fd5c040410.js.map