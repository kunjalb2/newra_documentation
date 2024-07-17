---
sidebar_position: 4
---

# Show and Update App Settings

## Description

The `show` and `update` methods in the `App` controller handle retrieving, displaying, and updating the detailed settings for a specific app. These methods gather necessary data, prepare dynamic forms, and manage user interactions and updates efficiently.

## Show Method

### Workflow

1. **User Authentication and Authorization**:

   - Retrieve the authenticated user.
   - Fetch the app by ID along with its settings.
   - Fetch available AI model providers for the user.
   - Ensure the app belongs to the authenticated user.
   - Check if the app is in a grace period and display an error message if applicable.

2. **Feature Usage Data**:

   - Retrieve the user's feature details, notably the `message_token_limit`.

3. **Knowledge Base List**:

   - Get the list of active knowledge bases associated with the user.

4. **Form Preparation**:

   - Fetch GPT form fields and validation rules based on the configured model provider.
   - Create the form using `FormBuilder` with necessary attributes and settings.

5. **Render View**:
   - Compile the form fields into HTML.
   - Prepare form validation rules and generate the validation script.
   - Return the view with app details, form, validation rules, and other necessary data.

### Custom Prompt

- Users can enable custom prompts on the settings page.
- Custom fields can be created using Textbox, Radio, Select, and Checkbox components.
- These fields can include default values and placeholders.
- On the frontend, values entered by the user will replace placeholders in the app prompt dynamically, such as `${name}` or `${age}`.

### Example Workflow

1. User navigates to the app settings page.
2. The method fetches app details and available model providers.
3. A dynamic form is generated based on the selected model provider.
4. The view is rendered, displaying the form for the user to change settings.
5. Users can create custom prompt fields which will appear in the frontend as interactive inputs.
6. User inputs are dynamically replaced within the app prompt.
7. Upon form submission, the new settings are validated and saved.

## Update Method

### Workflow

1. **Validation Preparation**:

   - Determine the model provider and instantiate the corresponding request class for validation.
   - Set validation rules, including those for `knowledge_base_id`, `maxTokens`, and `prompt`.

2. **Validation**:

   - Validate the request data against the defined rules.
   - If validation fails, return an error response with validation messages.

3. **Data Preparation**:

   - Retrieve the app settings and filter the request data to only include valid fields.
   - Clear out the `knowledge_base_id` if the `source_type` is `base_model`.

4. **Updating Settings**:

   - Update the app settings with the filtered data.
   - Prepare and update the app prompt settings, handling custom form data and active status.

5. **Response**:
   - Combine the updated settings and prompt data.
   - Return a success response with the updated app data.

### Example Workflow

1. User submits updated app settings.
2. The method validates the submitted data.
3. If validation passes, it updates the app settings and prompt configurations.
4. The method responds with a success message and the updated app data.

## Key Components

- **Authentication and Authorization**: Ensures the user has the right to view and modify the app's settings.
- **Model Providers**: Loads available AI model providers for the user.
- **FormBuilder**: Generates dynamic forms based on user settings and chosen model provider.
- **Validation**: Implements validation using request classes and custom rules.
- **Custom Prompt Fields**: Enables users to create dynamic input fields that personalize the app's behavior.

## Usage

These methods are used to display, manage, and update app settings efficiently. By providing dynamic forms based on the selected model provider, users can update their app configurations seamlessly and create custom prompts for more personalized interactions.

By following this structured approach, developers can ensure a smooth and dynamic experience for users managing their app settings.
