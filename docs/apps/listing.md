---
sidebar_position: 3
---

# Listing and Creating Apps

## Listing

### Description

The `index` method in the `App` controller is responsible for displaying a list of applications accessible to the authenticated user. It gathers relevant data such as the user's applications, subscription, and feature usage, and renders the appropriate view based on this information.

### Workflow

1. **User Authentication**: Retrieve the details of the currently authenticated user.
2. **Missing Settings Check**: Optionally check for any missing or incomplete settings for the user. If found, render a view to address these settings (currently commented out).
3. **Fetching Applications**: Retrieve the list of applications associated with the user.
4. **Feature Usage Data**: Fetch details and usage metrics for features like `chat_widget_limit` from the user's active subscription.
5. **Determine Blade Template**: Choose the view template to render based on whether the user has any applications:
   - If applications exist, use the `apps::index` template.
   - If no applications are found, use the `apps::partials.blank` template.
6. **Subscription Detail**: Query additional subscription details relevant to the user.
7. **Render View**: Display the chosen view template, populated with application data, feature usage, count of applications, and specific flags like `is_demo` and `is_saas`.

### Usage

Typically, this method is tied to a route designed for listing applications, providing an organized overview of the user's apps, their feature usage, and subscription limits. The rendered data aids in seamlessly managing their applications.

## Creating

### Description

In the `App` controller, the `store` method facilitates the creation of new applications. Users input application details (title, description, and icon) in a popup form. Upon submission, these details are validated and the application is saved to the database, linked to the user.

### Workflow

1. **User Authentication**: Retrieve the authenticated user's details.
2. **Validation**: Validate the user-provided data using a form request, typically `StoreAppRequest`, ensuring all required fields meet the necessary conditions.
3. **Data Preparation**: Merge the validated input with additional fields like `is_active` (initially set to false), user ID, and application URL.
4. **Store Application**: Save the new application data to the database.
5. **Update Subscription**: Increment the feature usage counter and update user subscription details to reflect the new addition.
6. **Set Flash Message**: Provide a success message to confirm application creation.
7. **Redirect**: Redirect users to the application's detail page for further settings and configurations.

### Usage

This method greatly simplifies the process of creating new applications. By allowing users to input details through a popup form, it streamlines data entry and immediately connects applications to user accounts. The immediate redirect to the detail page ensures that users can quickly continue with additional configurations.

By understanding and implementing the `index` and `store` methods, developers can effectively manage both the listing and creation of applications within the platform, providing a seamless user experience.
