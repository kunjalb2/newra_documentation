"use strict";(self.webpackChunknewra=self.webpackChunknewra||[]).push([[268],{4723:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var t=n(4848),r=n(8453);const i={sidebar_position:1},c="Introduction",o={id:"knowledgebases/datasources/types/WebScrapping/flow",title:"Introduction",description:"WebscrapingHelper is a Laravel-based helper class, which employs a Python script (webscrapingV3.py) for executing web scraping tasks on specific URLs.",source:"@site/docs/knowledgebases/datasources/types/WebScrapping/flow.md",sourceDirName:"knowledgebases/datasources/types/WebScrapping",slug:"/knowledgebases/datasources/types/WebScrapping/flow",permalink:"/docs/knowledgebases/datasources/types/WebScrapping/flow",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/knowledgebases/datasources/types/WebScrapping/flow.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Document",permalink:"/docs/knowledgebases/datasources/types/DocumentScrapping"},next:{title:"Multiple URL",permalink:"/docs/knowledgebases/datasources/types/WebScrapping/URL"}},l={},a=[{value:"Function Highlights",id:"function-highlights",level:2},{value:"Key Variables",id:"key-variables",level:2},{value:"Core Logic Flow",id:"core-logic-flow",level:2}];function d(e){const s={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"WebscrapingHelper"})," is a Laravel-based helper class, which employs a Python script (",(0,t.jsx)(s.code,{children:"webscrapingV3.py"}),") for executing web scraping tasks on specific URLs."]}),"\n",(0,t.jsx)(s.h2,{id:"function-highlights",children:"Function Highlights"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"url($url)"}),": This function is responsible for defining the primary URL targeted by the web scraping operation."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"parentUrl($parentUrl)"}),": This function helps set up the parent URL in the web scraping operation context."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"excludedUrls($excludedUrls)"}),": Allows users to specify a list of URLs that should be exempt from the web scraping process."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"get()"}),": A crucial function that assembles the necessary data, triggering the Python web scraping script using Symfony's Process component. It then retrieves the returned JSON response following the execution of the Python script."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"key-variables",children:"Key Variables"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"$url"}),": Holds the target URL for the web scraping operation."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"$parentUrl"}),": Stores the parent URL data during the web scraping process."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"$excludedUrls"}),": An array structure containing all URLs specified to be excluded from the web scraping operation."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"$command"}),": Stores an array of command-line arguments which will be combined to form the run command for the Python script."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"$process"}),": An instance of Symfony's ",(0,t.jsx)(s.code,{children:"Process"})," class, which functions to execute the Python script using the arguments configured in ",(0,t.jsx)(s.code,{children:"$command"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"core-logic-flow",children:"Core Logic Flow"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"url()"}),", ",(0,t.jsx)(s.code,{children:"parentUrl()"}),", and ",(0,t.jsx)(s.code,{children:"excludedUrls()"})," are primarily used to set values for the corresponding class attributes. The nature of these methods allows for method chaining."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"get()"})," function initiates the primary functions of the class. It sets up the Python script's execution by specifying the arguments like ",(0,t.jsx)(s.code,{children:"function"}),", ",(0,t.jsx)(s.code,{children:"url"}),", ",(0,t.jsx)(s.code,{children:"parent_url"}),", and ",(0,t.jsx)(s.code,{children:"exclude_urls"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["It then employs the ",(0,t.jsx)(s.code,{children:"Process"})," class from Symfony to invoke the Python script, which performs the web scraping operation asynchronously."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Using the ",(0,t.jsx)(s.code,{children:"Process"})," class's ",(0,t.jsx)(s.code,{children:"getOutput()"})," function, it retrieves the output from the Python script. It manages this output (assumed to be in JSON format) by decoding it into workable data."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["On successful execution, it parses the output to return a comprehensive array containing details about execution status, output data, and potential links. Conversely, the method returns ",(0,t.jsx)(s.code,{children:"false"})," if the process fails."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Please note, the specifics of how data is handled during processing may vary because it depends on how the Python script (",(0,t.jsx)(s.code,{children:"webscrapingV3.py"}),") performs and returns results. For a closer look at how this data management is approached, consider examining the Python script directly."]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>c,x:()=>o});var t=n(6540);const r={},i=t.createContext(r);function c(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);