"use strict";(self.webpackChunknewra=self.webpackChunknewra||[]).push([[985],{2956:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var i=s(4848),t=s(8453);const r={sidebar_position:4},l="Show and Update App Settings",d={id:"apps/details",title:"Show and Update App Settings",description:"Description",source:"@site/docs/apps/details.md",sourceDirName:"apps",slug:"/apps/details",permalink:"/docs/apps/details",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/apps/details.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Listing and Creating Apps",permalink:"/docs/apps/listing"},next:{title:"Playground",permalink:"/docs/apps/Playground"}},a={},o=[{value:"Description",id:"description",level:2},{value:"Show Method",id:"show-method",level:2},{value:"Workflow",id:"workflow",level:3},{value:"Custom Prompt",id:"custom-prompt",level:3},{value:"Example Workflow",id:"example-workflow",level:3},{value:"Update Method",id:"update-method",level:2},{value:"Workflow",id:"workflow-1",level:3},{value:"Example Workflow",id:"example-workflow-1",level:3},{value:"Key Components",id:"key-components",level:2},{value:"Usage",id:"usage",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"show-and-update-app-settings",children:"Show and Update App Settings"}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"show"})," and ",(0,i.jsx)(n.code,{children:"update"})," methods in the ",(0,i.jsx)(n.code,{children:"App"})," controller handle retrieving, displaying, and updating the detailed settings for a specific app. These methods gather necessary data, prepare dynamic forms, and manage user interactions and updates efficiently."]}),"\n",(0,i.jsx)(n.h2,{id:"show-method",children:"Show Method"}),"\n",(0,i.jsx)(n.h3,{id:"workflow",children:"Workflow"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"User Authentication and Authorization"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Retrieve the authenticated user."}),"\n",(0,i.jsx)(n.li,{children:"Fetch the app by ID along with its settings."}),"\n",(0,i.jsx)(n.li,{children:"Fetch available AI model providers for the user."}),"\n",(0,i.jsx)(n.li,{children:"Ensure the app belongs to the authenticated user."}),"\n",(0,i.jsx)(n.li,{children:"Check if the app is in a grace period and display an error message if applicable."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Feature Usage Data"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Retrieve the user's feature details, notably the ",(0,i.jsx)(n.code,{children:"message_token_limit"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Knowledge Base List"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Get the list of active knowledge bases associated with the user."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Form Preparation"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Fetch GPT form fields and validation rules based on the configured model provider."}),"\n",(0,i.jsxs)(n.li,{children:["Create the form using ",(0,i.jsx)(n.code,{children:"FormBuilder"})," with necessary attributes and settings."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Render View"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Compile the form fields into HTML."}),"\n",(0,i.jsx)(n.li,{children:"Prepare form validation rules and generate the validation script."}),"\n",(0,i.jsx)(n.li,{children:"Return the view with app details, form, validation rules, and other necessary data."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"custom-prompt",children:"Custom Prompt"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Users can enable custom prompts on the settings page."}),"\n",(0,i.jsx)(n.li,{children:"Custom fields can be created using Textbox, Radio, Select, and Checkbox components."}),"\n",(0,i.jsx)(n.li,{children:"These fields can include default values and placeholders."}),"\n",(0,i.jsxs)(n.li,{children:["On the frontend, values entered by the user will replace placeholders in the app prompt dynamically, such as ",(0,i.jsx)(n.code,{children:"${name}"})," or ",(0,i.jsx)(n.code,{children:"${age}"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"example-workflow",children:"Example Workflow"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"User navigates to the app settings page."}),"\n",(0,i.jsx)(n.li,{children:"The method fetches app details and available model providers."}),"\n",(0,i.jsx)(n.li,{children:"A dynamic form is generated based on the selected model provider."}),"\n",(0,i.jsx)(n.li,{children:"The view is rendered, displaying the form for the user to change settings."}),"\n",(0,i.jsx)(n.li,{children:"Users can create custom prompt fields which will appear in the frontend as interactive inputs."}),"\n",(0,i.jsx)(n.li,{children:"User inputs are dynamically replaced within the app prompt."}),"\n",(0,i.jsx)(n.li,{children:"Upon form submission, the new settings are validated and saved."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"update-method",children:"Update Method"}),"\n",(0,i.jsx)(n.h3,{id:"workflow-1",children:"Workflow"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Validation Preparation"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Determine the model provider and instantiate the corresponding request class for validation."}),"\n",(0,i.jsxs)(n.li,{children:["Set validation rules, including those for ",(0,i.jsx)(n.code,{children:"knowledge_base_id"}),", ",(0,i.jsx)(n.code,{children:"maxTokens"}),", and ",(0,i.jsx)(n.code,{children:"prompt"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Validation"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Validate the request data against the defined rules."}),"\n",(0,i.jsx)(n.li,{children:"If validation fails, return an error response with validation messages."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Data Preparation"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Retrieve the app settings and filter the request data to only include valid fields."}),"\n",(0,i.jsxs)(n.li,{children:["Clear out the ",(0,i.jsx)(n.code,{children:"knowledge_base_id"})," if the ",(0,i.jsx)(n.code,{children:"source_type"})," is ",(0,i.jsx)(n.code,{children:"base_model"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Updating Settings"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Update the app settings with the filtered data."}),"\n",(0,i.jsx)(n.li,{children:"Prepare and update the app prompt settings, handling custom form data and active status."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Response"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Combine the updated settings and prompt data."}),"\n",(0,i.jsx)(n.li,{children:"Return a success response with the updated app data."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"example-workflow-1",children:"Example Workflow"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"User submits updated app settings."}),"\n",(0,i.jsx)(n.li,{children:"The method validates the submitted data."}),"\n",(0,i.jsx)(n.li,{children:"If validation passes, it updates the app settings and prompt configurations."}),"\n",(0,i.jsx)(n.li,{children:"The method responds with a success message and the updated app data."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"key-components",children:"Key Components"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Authentication and Authorization"}),": Ensures the user has the right to view and modify the app's settings."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Model Providers"}),": Loads available AI model providers for the user."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"FormBuilder"}),": Generates dynamic forms based on user settings and chosen model provider."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Validation"}),": Implements validation using request classes and custom rules."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Custom Prompt Fields"}),": Enables users to create dynamic input fields that personalize the app's behavior."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n.p,{children:"These methods are used to display, manage, and update app settings efficiently. By providing dynamic forms based on the selected model provider, users can update their app configurations seamlessly and create custom prompts for more personalized interactions."}),"\n",(0,i.jsx)(n.p,{children:"By following this structured approach, developers can ensure a smooth and dynamic experience for users managing their app settings."})]})}function c(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>d});var i=s(6540);const t={},r=i.createContext(t);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);