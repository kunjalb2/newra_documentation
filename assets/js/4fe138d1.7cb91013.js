"use strict";(self.webpackChunknewra=self.webpackChunknewra||[]).push([[783],{1057:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>a});var i=s(4848),r=s(8453);const l={sidebar_position:5},d=void 0,o={id:"apps/Playground",title:"Playground",description:"Overview",source:"@site/docs/apps/Playground.md",sourceDirName:"apps",slug:"/apps/Playground",permalink:"/newra_documentation/docs/apps/Playground",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/apps/Playground.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Show and Update App Settings",permalink:"/newra_documentation/docs/apps/details"},next:{title:"Logs",permalink:"/newra_documentation/docs/apps/Logs"}},t={},a=[{value:"Overview",id:"overview",level:2},{value:"Key Components",id:"key-components",level:2},{value:"Main Flow (__invoke method)",id:"main-flow-__invoke-method",level:2},{value:"Form Settings Loading (loadFormSettings method)",id:"form-settings-loading-loadformsettings-method",level:2},{value:"Important Notes",id:"important-notes",level:2}];function c(e){const n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:"This controller manages the Apps playground functionality, allowing users to interact with AI models and configure settings."}),"\n",(0,i.jsx)(n.h2,{id:"key-components",children:"Key Components"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Namespace and Use Statements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The controller is part of the ",(0,i.jsx)(n.code,{children:"Modules\\Apps\\Http\\Controllers"})," namespace"]}),"\n",(0,i.jsx)(n.li,{children:"It uses various services, models, and form builders from different modules"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Default Provider"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:'const DEFAULT_PROVIDER = "OpenAI";'})," sets the default AI model provider"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"main-flow-__invoke-method",children:"Main Flow (__invoke method)"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Datasource Check"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Checks if the Apps has associated datasources"}),"\n",(0,i.jsx)(n.li,{children:"If not, renders a 'no-datasource' view"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Settings and Provider Setup"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Retrieves Apps settings and user providers"}),"\n",(0,i.jsx)(n.li,{children:"Determines the model provider from settings or uses the default"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Dynamic Class Loading"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Uses string interpolation to dynamically load provider-specific classes:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:'$formFields = constant("Modules\\\\{$modelProvider}\\\\Forms\\\\{$modelProvider}::FORM_FIELDS");\n$modelProviderRequestClass = "Modules\\\\{$modelProvider}\\\\Http\\\\Requests\\\\{$modelProvider}Request";\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Form Creation"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Uses FormBuilder to create a AppsPlaygroundForm"}),"\n",(0,i.jsx)(n.li,{children:"Sets up form attributes including AJAX callbacks"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Form HTML Generation"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Iterates through form fields to generate HTML, excluding 'reset' and 'submit' buttons"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Validation Setup"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Uses JsValidatorFacade to create client-side validation rules"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"View Rendering"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Renders the 'playground' view with compiled data including:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"User and Apps information"}),"\n",(0,i.jsx)(n.li,{children:"Chat URLs and API headers"}),"\n",(0,i.jsx)(n.li,{children:"Form HTML and validation rules"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"form-settings-loading-loadformsettings-method",children:"Form Settings Loading (loadFormSettings method)"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Provider Selection"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Retrieves the selected model provider from the request"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Dynamic Class Loading"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Similar to the __invoke method, dynamically loads provider-specific classes"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Form Regeneration"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Creates a new playground form with updated provider settings"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Response"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Returns a JSON response with:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Updated form HTML"}),"\n",(0,i.jsx)(n.li,{children:"New validation rules"}),"\n",(0,i.jsx)(n.li,{children:"Success status"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"important-notes",children:"Important Notes"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Error Handling"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Checks for existence of provider classes before proceeding"}),"\n",(0,i.jsx)(n.li,{children:"Returns a 400 error if invalid provider or request class is specified"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Flexibility"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The controller is designed to work with multiple AI providers"}),"\n",(0,i.jsx)(n.li,{children:"Provider-specific logic is encapsulated in separate modules"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"JavaScript Integration"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Uses data attributes on the form for AJAX callbacks:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-php",children:"'data-async' => 'true',\n'data-before' => 'playgroundBeforeSubmitCb',\n'data-complete' => 'playgroundCompleteCb',\n'data-success' => 'playgroundSuccessCb',\n'data-error' => 'playgroundErrorCb',\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"API Integration"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Uses DataSyncService to retrieve platform API URLs and headers"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Performance Consideration"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Generates form HTML server-side to reduce client-side processing"}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>o});var i=s(6540);const r={},l=i.createContext(r);function d(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);