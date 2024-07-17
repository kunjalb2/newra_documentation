"use strict";(self.webpackChunknewra=self.webpackChunknewra||[]).push([[154],{6244:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var i=n(4848),r=n(8453);const o={sidebar_position:2},t=void 0,d={id:"Database",title:"Database",description:"The database consists of a variety of tables centered around user information, application data, knowledge bases, AI models, integrations, and other miscellaneous information. Here's a brief overview of the tables and their relationships:",source:"@site/docs/Database.md",sourceDirName:".",slug:"/Database",permalink:"/newra_documentation/docs/Database",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Database.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Tutorial Intro",permalink:"/newra_documentation/docs/intro"},next:{title:"Flow",permalink:"/newra_documentation/docs/knowledgebases/flow"}},a={},c=[];function l(e){const s={code:"code",li:"li",ol:"ol",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:"The database consists of a variety of tables centered around user information, application data, knowledge bases, AI models, integrations, and other miscellaneous information. Here's a brief overview of the tables and their relationships:"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"User-related tables"}),": Central to user-related tables is the ",(0,i.jsx)(s.code,{children:"users"})," table, which has relationships with multiple other tables like ",(0,i.jsx)(s.code,{children:"user_subscriptions"}),", ",(0,i.jsx)(s.code,{children:"user_account_activities"}),", ",(0,i.jsx)(s.code,{children:"apps"}),", ",(0,i.jsx)(s.code,{children:"knowledge_bases"}),", ",(0,i.jsx)(s.code,{children:"domains"}),", ",(0,i.jsx)(s.code,{children:"settings"}),", ",(0,i.jsx)(s.code,{children:"sessions"}),", and ",(0,i.jsx)(s.code,{children:"workflows"}),". Each of these relationships represent a one-to-many relationship. For example, ",(0,i.jsx)(s.code,{children:"user_subscription_id"})," in ",(0,i.jsx)(s.code,{children:"users"})," references ",(0,i.jsx)(s.code,{children:"user_subscriptions(id)"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Application tables"}),": The ",(0,i.jsx)(s.code,{children:"apps"})," table is the main table for application information and is related to multiple other tables like ",(0,i.jsx)(s.code,{children:"app_appearances"}),", ",(0,i.jsx)(s.code,{children:"app_prompt_engineering_settings"}),", ",(0,i.jsx)(s.code,{children:"app_restricted_urls"}),", ",(0,i.jsx)(s.code,{children:"app_settings"}),", and ",(0,i.jsx)(s.code,{children:"domains"}),". Here, too, the relationships are one-to-many and for instance, ",(0,i.jsx)(s.code,{children:"app_id"})," in ",(0,i.jsx)(s.code,{children:"app_prompt_engineering_settings"})," references ",(0,i.jsx)(s.code,{children:"apps(id)"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Knowledge Base tables"}),": The ",(0,i.jsx)(s.code,{children:"knowledge_bases"})," table contains information regarding various knowledge bases, and has relationships with ",(0,i.jsx)(s.code,{children:"users"}),", ",(0,i.jsx)(s.code,{children:"datasources"}),", and ",(0,i.jsx)(s.code,{children:"knowledge_base_settings"})," tables. Here, the relationship between ",(0,i.jsx)(s.code,{children:"knowledge_bases"})," and ",(0,i.jsx)(s.code,{children:"users"})," and ",(0,i.jsx)(s.code,{children:"datasources"})," can be interpreted as many-to-one on user- and data source-level detail, where ",(0,i.jsx)(s.code,{children:"user_id"})," and ",(0,i.jsx)(s.code,{children:"knowledge_base_id"})," in ",(0,i.jsx)(s.code,{children:"datasources"})," both reference ",(0,i.jsx)(s.code,{children:"users(id)"})," and ",(0,i.jsx)(s.code,{children:"knowledge_bases(id)"})," respectively."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"AI and Integration tables"}),": These tables include ",(0,i.jsx)(s.code,{children:"ai_models"}),", ",(0,i.jsx)(s.code,{children:"providers"})," and ",(0,i.jsx)(s.code,{children:"integrations"}),", are concerned with AI and integration-related information. The foreign key ",(0,i.jsx)(s.code,{children:"user_id"})," in ",(0,i.jsx)(s.code,{children:"ai_models"})," and ",(0,i.jsx)(s.code,{children:"providers"})," references ",(0,i.jsx)(s.code,{children:"users(id)"}),". There's also a junction table, ",(0,i.jsx)(s.code,{children:"integration_user"}),", for mapping user-integration relationships."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Other tables"}),": These tables, such as ",(0,i.jsx)(s.code,{children:"domains"}),", ",(0,i.jsx)(s.code,{children:"workflows"}),", ",(0,i.jsx)(s.code,{children:"roles"})," and ",(0,i.jsx)(s.code,{children:"permissions"}),", ",(0,i.jsx)(s.code,{children:"settings"}),", ",(0,i.jsx)(s.code,{children:"sessions"}),", ",(0,i.jsx)(s.code,{children:"prompts"})," and ",(0,i.jsx)(s.code,{children:"media"}),", contain other forms of necessary data, with respect to users, workflows, roles and permissions, etc. Relevant junction tables include ",(0,i.jsx)(s.code,{children:"role_user"}),", ",(0,i.jsx)(s.code,{children:"permission_role"}),", and ",(0,i.jsx)(s.code,{children:"permission_user"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["There are also utility tables\u2014",(0,i.jsx)(s.code,{children:"failed_jobs"}),", ",(0,i.jsx)(s.code,{children:"jobs"}),", ",(0,i.jsx)(s.code,{children:"migrations"}),", ",(0,i.jsx)(s.code,{children:"password_resets"}),", ",(0,i.jsx)(s.code,{children:"db_logger"}),", ",(0,i.jsx)(s.code,{children:"email_templates"}),", ",(0,i.jsx)(s.code,{children:"global_settings"}),"\u2014for additional functionality."]}),"\n",(0,i.jsx)(s.p,{children:"It's imperative to note that all relationships are defined in terms of primary-to-foreign key relationships. The tables are interconnected in a structured way, offering a comprehensive view of users, their activities, subscriptions, associated apps, knowledge bases, AI aspects and integrations in well-defined, interrelated structures."})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>d});var i=n(6540);const r={},o=i.createContext(r);function t(e){const s=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(o.Provider,{value:s},e.children)}}}]);