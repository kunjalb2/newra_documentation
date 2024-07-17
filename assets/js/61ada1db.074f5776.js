"use strict";(self.webpackChunknewra=self.webpackChunknewra||[]).push([[891],{2698:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var i=n(4848),a=n(8453);const r={sidebar_position:2},t="Multiple URL",c={id:"knowledgebases/datasources/types/WebScrapping/URL",title:"Multiple URL",description:"For routes connected to the Datasource module reference the path newra/web/Modules/WebScrapping/Routes/web.php.",source:"@site/docs/knowledgebases/datasources/types/WebScrapping/URL.md",sourceDirName:"knowledgebases/datasources/types/WebScrapping",slug:"/knowledgebases/datasources/types/WebScrapping/URL",permalink:"/newra_documentation/docs/knowledgebases/datasources/types/WebScrapping/URL",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/knowledgebases/datasources/types/WebScrapping/URL.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/newra_documentation/docs/knowledgebases/datasources/types/WebScrapping/flow"},next:{title:"Domain",permalink:"/newra_documentation/docs/knowledgebases/datasources/types/WebScrapping/Domain"}},o={},d=[{value:"Function Details",id:"function-details",level:3},{value:"Important Variables Explained",id:"important-variables-explained",level:3},{value:"Core Logic",id:"core-logic",level:3}];function l(e){const s={code:"code",h1:"h1",h3:"h3",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"multiple-url",children:"Multiple URL"}),"\n",(0,i.jsxs)(s.p,{children:["For routes connected to the Datasource module reference the path ",(0,i.jsx)(s.code,{children:"newra/web/Modules/WebScrapping/Routes/web.php"}),"."]}),"\n",(0,i.jsx)(s.h3,{id:"function-details",children:"Function Details"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"store(WebpageScrappingRequest $request)"}),": This function is responsible for triggering a web scrapping process on source URLs that a user provides. It receives a ",(0,i.jsx)(s.code,{children:"WebpageScrappingRequest $request"})," which likely contains request data that has been validated in the ",(0,i.jsx)(s.code,{children:"WebpageScrappingRequest"})," class."]}),"\n",(0,i.jsx)(s.h3,{id:"important-variables-explained",children:"Important Variables Explained"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"$knowledgeBaseId"}),": Retrieved from request data, likely used to link scrapping data to a particular knowledge base."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"$knowledgeBase"}),": An instance of a knowledge base associated with the passed ID."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"$autoTrain"}),": A flag indicating whether the data should be trained automatically or not."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"$user"}),": Consists of authenticated user data."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"$sourceUrls"}),": Array of URLs obtained from request object, which are then cleaned for any duplicates and empty string values."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"$subscription"}),": Represents the user's active subscription details."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"$remainingStorageToken"}),": Used for computing remaining storage tokens for the user based on their subscription."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"$storageTokenCacheKey"}),": A string created for caching purpose."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"$jobs"}),": An array of queued jobs. Each job is an instance of ",(0,i.jsx)(s.code,{children:"WebscrapingJob"})," associated with a particular URL from ",(0,i.jsx)(s.code,{children:"$sourceUrls"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"core-logic",children:"Core Logic"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["The method retrieves knowledgeBase data, user's active subscription, calculates remaining storage tokens based on ",(0,i.jsx)(s.code,{children:"feature_value"})," and ",(0,i.jsx)(s.code,{children:"feature_usage_value"}),", and caches this value using the ",(0,i.jsx)(s.code,{children:"$storageTokenCacheKey"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["For each given URL, a web scraping job (",(0,i.jsx)(s.code,{children:"WebscrapingJob"}),") is initiated and added to a job batch, where each job is assigned an individual task of scraping data from a provided URL."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["The batches are dispatched using ",(0,i.jsx)(s.code,{children:"Bus::batch($jobs)"})," and cached storage tokens are free from memory."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"->then()"})," method forgets the storage token cache only if all the jobs in the batch have been processed successfully."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["The function return's a JSON response indicating success and a message. If the process fails anywhere in between, the response will be handled somewhere else, probably in the ",(0,i.jsx)(s.code,{children:"WebpageScrappingRequest"})," class or ",(0,i.jsx)(s.code,{children:"WebscrapingJob"})," class."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"That's a quick overview of the method. It's all about scraping data from multiple URLs, storing the results, and managing resources effectively."})]})}function h(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>c});var i=n(6540);const a={},r=i.createContext(a);function t(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);