"use strict";(self.webpackChunknewra=self.webpackChunknewra||[]).push([[363],{2533:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=o(4848),i=o(8453);const s={sidebar_position:2},r="Flow",l={id:"setting-module/flow",title:"Flow",description:"The Setting module includes its own routes, controllers, models, and resource folder.",source:"@site/docs/setting-module/flow.md",sourceDirName:"setting-module",slug:"/setting-module/flow",permalink:"/newra_documentation/docs/setting-module/flow",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/setting-module/flow.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Database",permalink:"/newra_documentation/docs/setting-module/database"},next:{title:"Database",permalink:"/newra_documentation/docs/apps/database"}},d={},c=[{value:"Common check in controllers for enterprise users in saas module :",id:"common-check-in-controllers-for-enterprise-users-in-saas-module-",level:2},{value:"Profile",id:"profile",level:2},{value:"Theme",id:"theme",level:2},{value:"AI Model",id:"ai-model",level:2},{value:"Mail",id:"mail",level:2},{value:"Vector Database",id:"vector-database",level:2},{value:"Storage",id:"storage",level:2},{value:"Newra API",id:"newra-api",level:2}];function a(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"flow",children:"Flow"}),"\n",(0,n.jsx)(t.h1,{id:"modular-aproach-",children:"Modular Aproach :"}),"\n",(0,n.jsx)(t.p,{children:"The Setting module includes its own routes, controllers, models, and resource folder."}),"\n",(0,n.jsx)(t.h2,{id:"common-check-in-controllers-for-enterprise-users-in-saas-module-",children:"Common check in controllers for enterprise users in saas module :"}),"\n",(0,n.jsx)(t.p,{children:"The showPlanSwitchPage flag variable has been added to the controllers handling HTTP requests in the database, vector, mail, and AI model. This addition is facilitated by the SaasSettingMiddleware, which verifies the user's policy for hasEnterpriseSubscription. Flag showPlanSwitchPage will redirect to setting::switch view in all controllers"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",metastring:'title="app/Policies/UserPolicy.php"',children:"public function hasEnterpriseSubscription()\n{\n    return $this->activeSubscription?->details()\n        ->where('feature_variable', 'custom_api_settings')\n        ->where('feature_value', 'yes')\n        ->exists();\n\n    return $this->activeSubscription()\n        ->where('integratex_plan_name', 'Professional')->exists();\n}\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",metastring:'title="Modules/Setting/Http/Middleware/SaasSettingMiddleware.php"',children:"public function handle(Request $request, Closure $next)\n{\n    $request->merge(['showPlanSwitchPage' => false]);\n    //$request->merge(['showPlanSwitchPage' => true]);\n    if (!isSaas()) {\n        return $next($request);\n    }\n\n    $user = $request->user();\n    $isAdmin = Gate::forUser($user)->allows('manageUsers', User::class);\n    if (!$isAdmin) {\n        //$request->merge(['showPlanSwitchPage' => true]);\n    }\n\n    $hasValidSubscription = Gate::forUser($user)->allows('hasEnterpriseSubscription', User::class);\n    if (!$hasValidSubscription) {\n        $request->merge(['showPlanSwitchPage' => true]);\n    }\n\n    return $next($request);\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"profile",children:"Profile"}),"\n",(0,n.jsxs)(t.p,{children:["the ",(0,n.jsx)(t.code,{children:"settings.profile"})," route, located in ",(0,n.jsx)(t.code,{children:"Modules/Setting/Routes/web.php"}),", invokes the ",(0,n.jsx)(t.code,{children:"index"})," method of ",(0,n.jsx)(t.code,{children:"ProfileSettingController"})," from ",(0,n.jsx)(t.code,{children:"Modules/Setting/Http/Controllers/ProfileSettingController.php"}),". This route is responsible for displaying user profile data."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"settings.profile.update"})," route, also defined in ",(0,n.jsx)(t.code,{children:"Modules/Setting/Routes/web.php"}),", triggers the ",(0,n.jsx)(t.code,{children:"update"})," method in ",(0,n.jsx)(t.code,{children:"ProfileSettingController"}),". In a SaaS module context, it restricts the listing of profile data to the account portal for editing purposes only. In a non-SaaS module, it allows direct updating of user profile details."]}),"\n",(0,n.jsx)(t.h2,{id:"theme",children:"Theme"}),"\n",(0,n.jsxs)(t.p,{children:["the ",(0,n.jsx)(t.code,{children:"settings.color-themes"})," route, located in ",(0,n.jsx)(t.code,{children:"Modules/Setting/Routes/web.php"}),", invokes the ",(0,n.jsx)(t.code,{children:"index"})," method of ",(0,n.jsx)(t.code,{children:"ColorThemesController"})," from ",(0,n.jsx)(t.code,{children:"Modules/Setting/Http/Controllers/ColorThemesController.php"}),". This route is responsible for displaying user's theme."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"settings.color-themes.update"})," route, also defined in ",(0,n.jsx)(t.code,{children:"Modules/Setting/Routes/web.php"}),", triggers the ",(0,n.jsx)(t.code,{children:"update"})," method in ",(0,n.jsx)(t.code,{children:"ColorThemesController"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"ai-model",children:"AI Model"}),"\n",(0,n.jsxs)(t.p,{children:["the ",(0,n.jsx)(t.code,{children:"settings.provider"})," route, located in ",(0,n.jsx)(t.code,{children:"Modules/Setting/Routes/web.php"}),", invokes the ",(0,n.jsx)(t.code,{children:"index"})," method of ",(0,n.jsx)(t.code,{children:"ProviderSettingController"})," from ",(0,n.jsx)(t.code,{children:"Modules/Setting/Http/Controllers/ProviderSettingController.php"}),". This route is responsible for displaying available ai provider and models."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"settings.provider.update"})," route, also defined in ",(0,n.jsx)(t.code,{children:"Modules/Setting/Routes/web.php"}),", triggers the ",(0,n.jsx)(t.code,{children:"update"})," method in ",(0,n.jsx)(t.code,{children:"ProviderSettingController"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"ProvideSettingController"})," loads the ",(0,n.jsx)(t.code,{children:"index"})," method, which retrieves model providers and applies filters to them. This method then renders an off-canvas tab view in a Blade template for configuring APIs associated with each provider."]}),"\n",(0,n.jsx)(t.h2,{id:"mail",children:"Mail"}),"\n",(0,n.jsxs)(t.p,{children:["the ",(0,n.jsx)(t.code,{children:"settings.mail"})," route, located in ",(0,n.jsx)(t.code,{children:"Modules/Setting/Routes/web.php"}),", invokes the ",(0,n.jsx)(t.code,{children:"index"})," method of ",(0,n.jsx)(t.code,{children:"MailSettingController"})," from ",(0,n.jsx)(t.code,{children:"Modules/Setting/Http/Controllers/MailSettingController.php"}),". This route is responsible for displaying non saas user email details."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"settings.mail.update"})," route, also defined in ",(0,n.jsx)(t.code,{children:"Modules/Setting/Routes/web.php"}),", triggers the ",(0,n.jsx)(t.code,{children:"update"})," method in ",(0,n.jsx)(t.code,{children:"MailSettingController"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"vector-database",children:"Vector Database"}),"\n",(0,n.jsxs)(t.p,{children:["the ",(0,n.jsx)(t.code,{children:"settings.vector"})," route, located in ",(0,n.jsx)(t.code,{children:"Modules/Setting/Routes/web.php"}),", invokes the ",(0,n.jsx)(t.code,{children:"index"})," method of ",(0,n.jsx)(t.code,{children:"VectorSettingController"})," from ",(0,n.jsx)(t.code,{children:"Modules/Setting/Http/Controllers/VectorSettingController.php"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"settings.vector.update"})," route, also defined in ",(0,n.jsx)(t.code,{children:"Modules/Setting/Routes/web.php"}),", triggers the ",(0,n.jsx)(t.code,{children:"update"})," method in ",(0,n.jsx)(t.code,{children:"VectorSettingController"}),". This route is responsible for update/create Weaviat/Pinecone vector configuration values into settings table."]}),"\n",(0,n.jsx)(t.h2,{id:"storage",children:"Storage"}),"\n",(0,n.jsxs)(t.p,{children:["the ",(0,n.jsx)(t.code,{children:"settings.storage"})," route, located in ",(0,n.jsx)(t.code,{children:"Modules/Setting/Routes/web.php"}),", invokes the ",(0,n.jsx)(t.code,{children:"index"})," method of ",(0,n.jsx)(t.code,{children:"StorageSettingController"})," from ",(0,n.jsx)(t.code,{children:"Modules/Setting/Http/Controllers/StorageSettingController.php"}),".\nThis route is responsible for update/create S3 configuration values into settings table."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"settings.vector.update"})," route, also defined in ",(0,n.jsx)(t.code,{children:"Modules/Setting/Routes/web.php"}),", triggers the ",(0,n.jsx)(t.code,{children:"update"})," method in ",(0,n.jsx)(t.code,{children:"VectorSettingController"}),". This route is responsible for update/create Weaviat/Pinecone vector configuration values into settings table."]}),"\n",(0,n.jsx)(t.h2,{id:"newra-api",children:"Newra API"}),"\n",(0,n.jsxs)(t.p,{children:["the ",(0,n.jsx)(t.code,{children:"settings.apikey"})," route, located in ",(0,n.jsx)(t.code,{children:"Modules/Setting/Routes/web.php"}),", invokes the ",(0,n.jsx)(t.code,{children:"index"})," method of ",(0,n.jsx)(t.code,{children:"ApikeySettingController"})," from ",(0,n.jsx)(t.code,{children:"Modules/Setting/Http/Controllers/ApikeySettingController.php"}),". This route is responsible for displaying newra api key."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"settings.createAppKeyToken"})," route, also defined in ",(0,n.jsx)(t.code,{children:"Modules/Setting/Routes/web.php"}),", triggers the ",(0,n.jsx)(t.code,{children:"update"})," method in ",(0,n.jsx)(t.code,{children:"ApikeySettingController"}),". This route is responsible for update/create api key for newra."]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},8453:(e,t,o)=>{o.d(t,{R:()=>r,x:()=>l});var n=o(6540);const i={},s=n.createContext(i);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);