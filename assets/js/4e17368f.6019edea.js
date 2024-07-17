"use strict";(self.webpackChunknewra=self.webpackChunknewra||[]).push([[483],{5640:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var i=s(4848),t=s(8453);const a={sidebar_position:3},o="Domain",r={id:"knowledgebases/datasources/types/WebScrapping/Domain",title:"Domain",description:"Function Details",source:"@site/docs/knowledgebases/datasources/types/WebScrapping/Domain.md",sourceDirName:"knowledgebases/datasources/types/WebScrapping",slug:"/knowledgebases/datasources/types/WebScrapping/Domain",permalink:"/newra_documentation/docs/knowledgebases/datasources/types/WebScrapping/Domain",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/knowledgebases/datasources/types/WebScrapping/Domain.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Multiple URL",permalink:"/newra_documentation/docs/knowledgebases/datasources/types/WebScrapping/URL"},next:{title:"Sitemap",permalink:"/newra_documentation/docs/knowledgebases/datasources/types/WebScrapping/Sitemap"}},c={},d=[{value:"Function Details",id:"function-details",level:3},{value:"Important Variables Explained",id:"important-variables-explained",level:3},{value:"Core Logic",id:"core-logic",level:3}];function l(e){const n={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"domain",children:"Domain"}),"\n",(0,i.jsx)(n.h3,{id:"function-details",children:"Function Details"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"store(DomainScrappingRequest $request)"})," function is tasked with handling a request to start a web scraping operation using a designated domain, which is part of the data provided in a ",(0,i.jsx)(n.code,{children:"DomainScrappingRequest"})," object."]}),"\n",(0,i.jsx)(n.h3,{id:"important-variables-explained",children:"Important Variables Explained"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"$targetDomain"}),": This stores data from the request concerning which domain should be the focus of the web scraping operation."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"$knowledgeBaseId"}),": Important for linking the results of the scraping process with a specific knowledge base."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"$autoTrain"}),": A boolean value determining whether or not the system will automatically initiate training after the scraping process."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"$user"}),": This variable holds the details of the user who is initiating the request."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"$excludedUrls"}),": Specific URLs that will be avoided during the scraping process."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"$subscription"}),": Contains information about the user's current subscription."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"$remainingStorageToken"}),": A numeric value representing the remaining storage tokens related to the user's subscription."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"$storageTokenCacheKey"}),": Used for caching the status of the storage tokens."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"$jobs"}),": This holds information about a ",(0,i.jsx)(n.code,{children:"WebscrapingJob"})," instance, a task assigned to process the web scraping on the specified domain."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"core-logic",children:"Core Logic"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The logic primarily starts with the preparation of specific variables including ",(0,i.jsx)(n.code,{children:"remainingStorageToken"})," and ",(0,i.jsx)(n.code,{children:"storageTokenCacheKey"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"A web scraping job is then created using these data, focusing on the target domain identified in the request."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"Bus::batch($jobs)"})," function then dispatches the job. Handled asynchronously, Laravel's Job Batching allows the server to process the sizable task while allowing for the normal use of the system."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Upon completion of the job batch, the function will check the vector database to see if retraining is necessary. If yes, another job (",(0,i.jsx)(n.code,{children:"TrainDataSourceJob"}),") will be dispatched."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"At the end of the process, any remaining JSON files related to the knowledge base will be deleted for cleanup."}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>r});var i=s(6540);const t={},a=i.createContext(t);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);