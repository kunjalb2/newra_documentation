---
sidebar_position: 2
---

# Flow


# Modular Aproach :
The Setting module includes its own routes, controllers, models, and resource folder.


## Common check in controllers for enterprise users in saas module :
The showPlanSwitchPage flag variable has been added to the controllers handling HTTP requests in the database, vector, mail, and AI model. This addition is facilitated by the SaasSettingMiddleware, which verifies the user's policy for hasEnterpriseSubscription. Flag showPlanSwitchPage will redirect to setting::switch view in all controllers


```jsx title="app/Policies/UserPolicy.php"
public function hasEnterpriseSubscription()
{
    return $this->activeSubscription?->details()
        ->where('feature_variable', 'custom_api_settings')
        ->where('feature_value', 'yes')
        ->exists();

    return $this->activeSubscription()
        ->where('integratex_plan_name', 'Professional')->exists();
}
```

```jsx title="Modules/Setting/Http/Middleware/SaasSettingMiddleware.php"
public function handle(Request $request, Closure $next)
{
    $request->merge(['showPlanSwitchPage' => false]);
    //$request->merge(['showPlanSwitchPage' => true]);
    if (!isSaas()) {
        return $next($request);
    }

    $user = $request->user();
    $isAdmin = Gate::forUser($user)->allows('manageUsers', User::class);
    if (!$isAdmin) {
        //$request->merge(['showPlanSwitchPage' => true]);
    }

    $hasValidSubscription = Gate::forUser($user)->allows('hasEnterpriseSubscription', User::class);
    if (!$hasValidSubscription) {
        $request->merge(['showPlanSwitchPage' => true]);
    }

    return $next($request);
}
```


## Profile
the `settings.profile` route, located in `Modules/Setting/Routes/web.php`, invokes the `index` method of `ProfileSettingController` from `Modules/Setting/Http/Controllers/ProfileSettingController.php`. This route is responsible for displaying user profile data.

The `settings.profile.update` route, also defined in `Modules/Setting/Routes/web.php`, triggers the `update` method in `ProfileSettingController`. In a SaaS module context, it restricts the listing of profile data to the account portal for editing purposes only. In a non-SaaS module, it allows direct updating of user profile details.


## Theme
the `settings.color-themes` route, located in `Modules/Setting/Routes/web.php`, invokes the `index` method of `ColorThemesController` from `Modules/Setting/Http/Controllers/ColorThemesController.php`. This route is responsible for displaying user's theme.

The `settings.color-themes.update` route, also defined in `Modules/Setting/Routes/web.php`, triggers the `update` method in `ColorThemesController`.


## AI Model
the `settings.provider` route, located in `Modules/Setting/Routes/web.php`, invokes the `index` method of `ProviderSettingController` from `Modules/Setting/Http/Controllers/ProviderSettingController.php`. This route is responsible for displaying available ai provider and models.

The `settings.provider.update` route, also defined in `Modules/Setting/Routes/web.php`, triggers the `update` method in `ProviderSettingController`.

The `ProvideSettingController` loads the `index` method, which retrieves model providers and applies filters to them. This method then renders an off-canvas tab view in a Blade template for configuring APIs associated with each provider.


## Mail
the `settings.mail` route, located in `Modules/Setting/Routes/web.php`, invokes the `index` method of `MailSettingController` from `Modules/Setting/Http/Controllers/MailSettingController.php`. This route is responsible for displaying non saas user email details.

The `settings.mail.update` route, also defined in `Modules/Setting/Routes/web.php`, triggers the `update` method in `MailSettingController`.


## Vector Database
the `settings.vector` route, located in `Modules/Setting/Routes/web.php`, invokes the `index` method of `VectorSettingController` from `Modules/Setting/Http/Controllers/VectorSettingController.php`. 

The `settings.vector.update` route, also defined in `Modules/Setting/Routes/web.php`, triggers the `update` method in `VectorSettingController`. This route is responsible for update/create Weaviat/Pinecone vector configuration values into settings table.


## Storage
the `settings.storage` route, located in `Modules/Setting/Routes/web.php`, invokes the `index` method of `StorageSettingController` from `Modules/Setting/Http/Controllers/StorageSettingController.php`.
This route is responsible for update/create S3 configuration values into settings table.

The `settings.vector.update` route, also defined in `Modules/Setting/Routes/web.php`, triggers the `update` method in `VectorSettingController`. This route is responsible for update/create Weaviat/Pinecone vector configuration values into settings table.


## Newra API
the `settings.apikey` route, located in `Modules/Setting/Routes/web.php`, invokes the `index` method of `ApikeySettingController` from `Modules/Setting/Http/Controllers/ApikeySettingController.php`. This route is responsible for displaying newra api key.


The `settings.createAppKeyToken` route, also defined in `Modules/Setting/Routes/web.php`, triggers the `update` method in `ApikeySettingController`. This route is responsible for update/create api key for newra.
