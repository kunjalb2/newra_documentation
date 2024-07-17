"use strict";(self.webpackChunknewra=self.webpackChunknewra||[]).push([[488],{730:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var s=t(4848),n=t(8453);const a={sidebar_position:3},r="Listing and Creating Apps",o={id:"apps/listing",title:"Listing and Creating Apps",description:"Listing",source:"@site/docs/apps/listing.md",sourceDirName:"apps",slug:"/apps/listing",permalink:"/docs/apps/listing",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/apps/listing.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/apps/flow"},next:{title:"Show and Update App Settings",permalink:"/docs/apps/details"}},l={},d=[{value:"Listing",id:"listing",level:2},{value:"Description",id:"description",level:3},{value:"Workflow",id:"workflow",level:3},{value:"Usage",id:"usage",level:3},{value:"Creating",id:"creating",level:2},{value:"Description",id:"description-1",level:3},{value:"Workflow",id:"workflow-1",level:3},{value:"Usage",id:"usage-1",level:3}];function c(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"listing-and-creating-apps",children:"Listing and Creating Apps"}),"\n",(0,s.jsx)(i.h2,{id:"listing",children:"Listing"}),"\n",(0,s.jsx)(i.h3,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(i.p,{children:["The ",(0,s.jsx)(i.code,{children:"index"})," method in the ",(0,s.jsx)(i.code,{children:"App"})," controller is responsible for displaying a list of applications accessible to the authenticated user. It gathers relevant data such as the user's applications, subscription, and feature usage, and renders the appropriate view based on this information."]}),"\n",(0,s.jsx)(i.h3,{id:"workflow",children:"Workflow"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"User Authentication"}),": Retrieve the details of the currently authenticated user."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Missing Settings Check"}),": Optionally check for any missing or incomplete settings for the user. If found, render a view to address these settings (currently commented out)."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Fetching Applications"}),": Retrieve the list of applications associated with the user."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Feature Usage Data"}),": Fetch details and usage metrics for features like ",(0,s.jsx)(i.code,{children:"chat_widget_limit"})," from the user's active subscription."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Determine Blade Template"}),": Choose the view template to render based on whether the user has any applications:","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["If applications exist, use the ",(0,s.jsx)(i.code,{children:"apps::index"})," template."]}),"\n",(0,s.jsxs)(i.li,{children:["If no applications are found, use the ",(0,s.jsx)(i.code,{children:"apps::partials.blank"})," template."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Subscription Detail"}),": Query additional subscription details relevant to the user."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Render View"}),": Display the chosen view template, populated with application data, feature usage, count of applications, and specific flags like ",(0,s.jsx)(i.code,{children:"is_demo"})," and ",(0,s.jsx)(i.code,{children:"is_saas"}),"."]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(i.p,{children:"Typically, this method is tied to a route designed for listing applications, providing an organized overview of the user's apps, their feature usage, and subscription limits. The rendered data aids in seamlessly managing their applications."}),"\n",(0,s.jsx)(i.h2,{id:"creating",children:"Creating"}),"\n",(0,s.jsx)(i.h3,{id:"description-1",children:"Description"}),"\n",(0,s.jsxs)(i.p,{children:["In the ",(0,s.jsx)(i.code,{children:"App"})," controller, the ",(0,s.jsx)(i.code,{children:"store"})," method facilitates the creation of new applications. Users input application details (title, description, and icon) in a popup form. Upon submission, these details are validated and the application is saved to the database, linked to the user."]}),"\n",(0,s.jsx)(i.h3,{id:"workflow-1",children:"Workflow"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"User Authentication"}),": Retrieve the authenticated user's details."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Validation"}),": Validate the user-provided data using a form request, typically ",(0,s.jsx)(i.code,{children:"StoreAppRequest"}),", ensuring all required fields meet the necessary conditions."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Data Preparation"}),": Merge the validated input with additional fields like ",(0,s.jsx)(i.code,{children:"is_active"})," (initially set to false), user ID, and application URL."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Store Application"}),": Save the new application data to the database."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Update Subscription"}),": Increment the feature usage counter and update user subscription details to reflect the new addition."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Set Flash Message"}),": Provide a success message to confirm application creation."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Redirect"}),": Redirect users to the application's detail page for further settings and configurations."]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"usage-1",children:"Usage"}),"\n",(0,s.jsx)(i.p,{children:"This method greatly simplifies the process of creating new applications. By allowing users to input details through a popup form, it streamlines data entry and immediately connects applications to user accounts. The immediate redirect to the detail page ensures that users can quickly continue with additional configurations."}),"\n",(0,s.jsxs)(i.p,{children:["By understanding and implementing the ",(0,s.jsx)(i.code,{children:"index"})," and ",(0,s.jsx)(i.code,{children:"store"})," methods, developers can effectively manage both the listing and creation of applications within the platform, providing a seamless user experience."]})]})}function p(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,i,t)=>{t.d(i,{R:()=>r,x:()=>o});var s=t(6540);const n={},a=s.createContext(n);function r(e){const i=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(a.Provider,{value:i},e.children)}}}]);