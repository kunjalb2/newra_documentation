"use strict";(self.webpackChunknewra=self.webpackChunknewra||[]).push([[187],{7820:(e,s,d)=>{d.r(s),d.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>x,frontMatter:()=>t,metadata:()=>c,toc:()=>a});var r=d(4848),n=d(8453);const t={sidebar_position:1},i="Database",c={id:"knowledgebases/datasources/database",title:"Database",description:"Overview",source:"@site/docs/knowledgebases/datasources/database.md",sourceDirName:"knowledgebases/datasources",slug:"/knowledgebases/datasources/database",permalink:"/docs/knowledgebases/datasources/database",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/knowledgebases/datasources/database.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"AI Settings",permalink:"/docs/knowledgebases/AI-settings"},next:{title:"Overview",permalink:"/docs/knowledgebases/datasources/flow"}},l={},a=[{value:"Overview",id:"overview",level:2},{value:"Users Table",id:"users-table",level:2},{value:"Knowledge_Bases Table",id:"knowledge_bases-table",level:2},{value:"DataSources Table",id:"datasources-table",level:2},{value:"Users Table",id:"users-table-1",level:2},{value:"Knowledge_Bases Table",id:"knowledge_bases-table-1",level:2},{value:"DataSources Table",id:"datasources-table-1",level:2}];function h(e){const s={code:"code",h1:"h1",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"database",children:"Database"}),"\n",(0,r.jsx)(s.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"users"}),", ",(0,r.jsx)(s.code,{children:"knowledge_bases"}),", and ",(0,r.jsx)(s.code,{children:"datasources"})," tables form important relationships within the database that are instrumental in managing users' knowledge bases and their respective data sources. Through the ",(0,r.jsx)(s.code,{children:"user_id"})," and ",(0,r.jsx)(s.code,{children:"knowledge_base_id"})," foreign keys, we can track and manage relationships between users and knowledge bases, as well as between knowledge bases and data sources."]}),"\n",(0,r.jsx)(s.h2,{id:"users-table",children:"Users Table"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"users"})," table manages user-specific information. An individual user is represented by each row in the table, with the unique ",(0,r.jsx)(s.code,{children:"id"})," field serving as the primary key."]}),"\n",(0,r.jsx)(s.h2,{id:"knowledge_bases-table",children:"Knowledge_Bases Table"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"knowledge_bases"})," table contains information about users' knowledge bases. It maintains a one-to-many relationship with the ",(0,r.jsx)(s.code,{children:"users"})," table through the ",(0,r.jsx)(s.code,{children:"user_id"})," foreign key. This relationship indicates that each user can have multiple knowledge bases."]}),"\n",(0,r.jsx)(s.h2,{id:"datasources-table",children:"DataSources Table"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"datasources"})," table houses entries for the various sources of data fed into the knowledge bases. It maintains a one-to-many relationship with the ",(0,r.jsx)(s.code,{children:"knowledge_bases"})," table through the ",(0,r.jsx)(s.code,{children:"knowledge_base_id"})," foreign key. In this relationship, each knowledge base can have multiple data sources associated with it."]}),"\n",(0,r.jsx)(s.p,{children:"Below is an overview of the table structures:"}),"\n",(0,r.jsx)(s.h2,{id:"users-table-1",children:"Users Table"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"users"})," table stores user specific information. Each row corresponds to an individual user. The structure of the table is as follows:"]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Column"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Comment"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"id"}),(0,r.jsx)(s.td,{children:"integer"}),(0,r.jsx)(s.td,{children:"Unique identifier (Auto Increment)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"name"}),(0,r.jsx)(s.td,{children:"character varying(255)"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"email"}),(0,r.jsx)(s.td,{children:"character varying(255)"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"photo"}),(0,r.jsx)(s.td,{children:"character varying(255)"}),(0,r.jsxs)(s.td,{children:["Can be ",(0,r.jsx)(s.code,{children:"NULL"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"email_verified_at"}),(0,r.jsx)(s.td,{children:"timestamp(0)"}),(0,r.jsxs)(s.td,{children:["Can be ",(0,r.jsx)(s.code,{children:"NULL"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"password"}),(0,r.jsx)(s.td,{children:"character varying(255)"}),(0,r.jsxs)(s.td,{children:["Can be ",(0,r.jsx)(s.code,{children:"NULL"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"notification_frequency"}),(0,r.jsx)(s.td,{children:"character varying(255)"}),(0,r.jsxs)(s.td,{children:["Can be ",(0,r.jsx)(s.code,{children:"NULL"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"api_platform"}),(0,r.jsx)(s.td,{children:"character varying(255)"}),(0,r.jsx)(s.td,{children:"Default value: node"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"integratex_user_id"}),(0,r.jsx)(s.td,{children:"integer"}),(0,r.jsxs)(s.td,{children:["Can be ",(0,r.jsx)(s.code,{children:"NULL"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"integratex_subscription_id"}),(0,r.jsx)(s.td,{children:"integer"}),(0,r.jsxs)(s.td,{children:["Can be ",(0,r.jsx)(s.code,{children:"NULL"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"integratex_user_status"}),(0,r.jsx)(s.td,{children:"character varying(255)"}),(0,r.jsxs)(s.td,{children:["Can be ",(0,r.jsx)(s.code,{children:"NULL"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"message_tokens"}),(0,r.jsx)(s.td,{children:"numeric(14,2)"}),(0,r.jsxs)(s.td,{children:["Can be ",(0,r.jsx)(s.code,{children:"NULL"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"storage_token"}),(0,r.jsx)(s.td,{children:"numeric(14,2)"}),(0,r.jsxs)(s.td,{children:["Can be ",(0,r.jsx)(s.code,{children:"NULL"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"knowledgebase_limit"}),(0,r.jsx)(s.td,{children:"numeric(5,2)"}),(0,r.jsxs)(s.td,{children:["Can be ",(0,r.jsx)(s.code,{children:"NULL"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"expiry_date"}),(0,r.jsx)(s.td,{children:"timestamp(0)"}),(0,r.jsxs)(s.td,{children:["Can be ",(0,r.jsx)(s.code,{children:"NULL"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"integratex_subscription_status"}),(0,r.jsx)(s.td,{children:"character varying(255)"}),(0,r.jsxs)(s.td,{children:["Can be ",(0,r.jsx)(s.code,{children:"NULL"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"chat_branding"}),(0,r.jsx)(s.td,{children:"character varying(255)"}),(0,r.jsx)(s.td,{children:"Default value: No"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"integratex_plan_name"}),(0,r.jsx)(s.td,{children:"character varying(255)"}),(0,r.jsxs)(s.td,{children:["Can be ",(0,r.jsx)(s.code,{children:"NULL"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"timezone"}),(0,r.jsx)(s.td,{children:"character varying(255)"}),(0,r.jsxs)(s.td,{children:["Can be ",(0,r.jsx)(s.code,{children:"NULL"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"app_token_key"}),(0,r.jsx)(s.td,{children:"text"}),(0,r.jsxs)(s.td,{children:["Can be ",(0,r.jsx)(s.code,{children:"NULL"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"is_copied"}),(0,r.jsx)(s.td,{children:"boolean"}),(0,r.jsx)(s.td,{children:"Default value: false"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"user_subscription_id"}),(0,r.jsx)(s.td,{children:"bigint"}),(0,r.jsxs)(s.td,{children:["Can be ",(0,r.jsx)(s.code,{children:"NULL"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"remember_token"}),(0,r.jsx)(s.td,{children:"character varying(100)"}),(0,r.jsxs)(s.td,{children:["Can be ",(0,r.jsx)(s.code,{children:"NULL"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"deleted_at"}),(0,r.jsx)(s.td,{children:"timestamp(0)"}),(0,r.jsxs)(s.td,{children:["Can be ",(0,r.jsx)(s.code,{children:"NULL"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"created_at"}),(0,r.jsx)(s.td,{children:"timestamp(0)"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"updated_at"}),(0,r.jsx)(s.td,{children:"timestamp(0)"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"status"}),(0,r.jsx)(s.td,{children:"character varying(255)"}),(0,r.jsx)(s.td,{children:"Default value: active"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"phone_number"}),(0,r.jsx)(s.td,{children:"character varying(255)"}),(0,r.jsxs)(s.td,{children:["Can be ",(0,r.jsx)(s.code,{children:"NULL"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"theme_color"}),(0,r.jsx)(s.td,{children:"character varying(255)"}),(0,r.jsx)(s.td,{children:"Default value: theme-blue"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"theme_mode"}),(0,r.jsx)(s.td,{children:"character varying(255)"}),(0,r.jsx)(s.td,{children:"Default value: light"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"theme_additional_data"}),(0,r.jsx)(s.td,{children:"json"}),(0,r.jsxs)(s.td,{children:["Can be ",(0,r.jsx)(s.code,{children:"NULL"})]})]})]})]}),"\n",(0,r.jsxs)(s.p,{children:["A user may own multiple ",(0,r.jsx)(s.code,{children:"knowledge_bases"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"knowledge_bases-table-1",children:"Knowledge_Bases Table"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"knowledge_bases"})," table stores unique knowledge base entries. Each row corresponds to an individual knowledge base. Each ",(0,r.jsx)(s.code,{children:"knowledge_bases"})," row belongs to one user."]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Column"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Comment"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"id"}),(0,r.jsx)(s.td,{children:"uuid"}),(0,r.jsx)(s.td,{children:"Unique identifier"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"user_id"}),(0,r.jsx)(s.td,{children:"integer"}),(0,r.jsxs)(s.td,{children:["Foreign Key referencing ",(0,r.jsx)(s.code,{children:"users.id"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"icon"}),(0,r.jsx)(s.td,{children:"character varying(255)"}),(0,r.jsxs)(s.td,{children:["Can be ",(0,r.jsx)(s.code,{children:"NULL"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"title"}),(0,r.jsx)(s.td,{children:"character varying(255)"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"slug"}),(0,r.jsx)(s.td,{children:"character varying(255)"}),(0,r.jsxs)(s.td,{children:["Can be ",(0,r.jsx)(s.code,{children:"NULL"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"description"}),(0,r.jsx)(s.td,{children:"text"}),(0,r.jsxs)(s.td,{children:["Can be ",(0,r.jsx)(s.code,{children:"NULL"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"is_active"}),(0,r.jsx)(s.td,{children:"boolean"}),(0,r.jsx)(s.td,{children:"Default value: true"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"deleted_at"}),(0,r.jsx)(s.td,{children:"timestamp(0)"}),(0,r.jsxs)(s.td,{children:["Can be ",(0,r.jsx)(s.code,{children:"NULL"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"created_at"}),(0,r.jsx)(s.td,{children:"timestamp(0)"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"updated_at"}),(0,r.jsx)(s.td,{children:"timestamp(0)"}),(0,r.jsx)(s.td,{})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"type"}),(0,r.jsx)(s.td,{children:"character varying(255)"}),(0,r.jsx)(s.td,{children:"Default value: chat"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"show_reference"}),(0,r.jsx)(s.td,{children:"boolean"}),(0,r.jsx)(s.td,{children:"Default value: false"})]})]})]}),"\n",(0,r.jsxs)(s.p,{children:["Each ",(0,r.jsx)(s.code,{children:"knowledge_bases"})," row has one ",(0,r.jsx)(s.code,{children:"knowledge_base_settings"}),".\nHere is the ",(0,r.jsx)(s.code,{children:"datasources"})," table structure in MD format:"]}),"\n",(0,r.jsx)(s.h2,{id:"datasources-table-1",children:"DataSources Table"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Column"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Comment"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"id"}),(0,r.jsx)(s.td,{children:"uuid"}),(0,r.jsx)(s.td,{children:"-"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"parent_id"}),(0,r.jsx)(s.td,{children:"uuid"}),(0,r.jsxs)(s.td,{children:["Can be ",(0,r.jsx)(s.code,{children:"NULL"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"user_id"}),(0,r.jsx)(s.td,{children:"bigint"}),(0,r.jsxs)(s.td,{children:["Refers to foreign key from ",(0,r.jsx)(s.code,{children:"users"})," table"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"knowledge_base_id"}),(0,r.jsx)(s.td,{children:"uuid"}),(0,r.jsxs)(s.td,{children:["Refers to a foreign key from ",(0,r.jsx)(s.code,{children:"knowledge_bases"})," table"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"type"}),(0,r.jsx)(s.td,{children:"character varying(255)"}),(0,r.jsx)(s.td,{children:"-"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"title"}),(0,r.jsx)(s.td,{children:"character varying(255)"}),(0,r.jsxs)(s.td,{children:["Can be ",(0,r.jsx)(s.code,{children:"NULL"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"paragraph"}),(0,r.jsx)(s.td,{children:"text"}),(0,r.jsxs)(s.td,{children:["Can be ",(0,r.jsx)(s.code,{children:"NULL"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"scrap_all_url"}),(0,r.jsx)(s.td,{children:"boolean"}),(0,r.jsxs)(s.td,{children:["Default ",(0,r.jsx)(s.code,{children:"false"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"url"}),(0,r.jsx)(s.td,{children:"character varying(255)"}),(0,r.jsxs)(s.td,{children:["Can be ",(0,r.jsx)(s.code,{children:"NULL"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"excluded_urls"}),(0,r.jsx)(s.td,{children:"text"}),(0,r.jsxs)(s.td,{children:["Can be ",(0,r.jsx)(s.code,{children:"NULL"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"reference_url"}),(0,r.jsx)(s.td,{children:"character varying(255)"}),(0,r.jsxs)(s.td,{children:["Can be ",(0,r.jsx)(s.code,{children:"NULL"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"size"}),(0,r.jsx)(s.td,{children:"character varying(255)"}),(0,r.jsxs)(s.td,{children:["Can be ",(0,r.jsx)(s.code,{children:"NULL"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"estimated_tokens"}),(0,r.jsx)(s.td,{children:"character varying(255)"}),(0,r.jsxs)(s.td,{children:["Can be ",(0,r.jsx)(s.code,{children:"NULL"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"status"}),(0,r.jsx)(s.td,{children:"character varying(255)"}),(0,r.jsx)(s.td,{children:"-"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"auto_train"}),(0,r.jsx)(s.td,{children:"boolean"}),(0,r.jsxs)(s.td,{children:["Default ",(0,r.jsx)(s.code,{children:"false"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"is_content_fetched"}),(0,r.jsx)(s.td,{children:"boolean"}),(0,r.jsxs)(s.td,{children:["Default ",(0,r.jsx)(s.code,{children:"false"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"last_sync_date"}),(0,r.jsx)(s.td,{children:"timestamp(0)"}),(0,r.jsxs)(s.td,{children:["Can be ",(0,r.jsx)(s.code,{children:"NULL"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"deleted_at"}),(0,r.jsx)(s.td,{children:"timestamp(0)"}),(0,r.jsxs)(s.td,{children:["Can be ",(0,r.jsx)(s.code,{children:"NULL"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"created_at"}),(0,r.jsx)(s.td,{children:"timestamp(0)"}),(0,r.jsx)(s.td,{children:"-"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"updated_at"}),(0,r.jsx)(s.td,{children:"timestamp(0)"}),(0,r.jsx)(s.td,{children:"-"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"failed_reason"}),(0,r.jsx)(s.td,{children:"character varying(255)"}),(0,r.jsxs)(s.td,{children:["Can be ",(0,r.jsx)(s.code,{children:"NULL"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"created_by"}),(0,r.jsx)(s.td,{children:"character varying(255)"}),(0,r.jsxs)(s.td,{children:["Can be ",(0,r.jsx)(s.code,{children:"NULL"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"meta_data"}),(0,r.jsx)(s.td,{children:"json"}),(0,r.jsxs)(s.td,{children:["Can be ",(0,r.jsx)(s.code,{children:"NULL"})]})]})]})]}),"\n",(0,r.jsxs)(s.p,{children:["Each ",(0,r.jsx)(s.code,{children:"datasource"})," is connected to a single ",(0,r.jsx)(s.code,{children:"knowledge_bases"}),"."]})]})}function x(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,s,d)=>{d.d(s,{R:()=>i,x:()=>c});var r=d(6540);const n={},t=r.createContext(n);function i(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);