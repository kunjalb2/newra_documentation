---
sidebar_position: 3
---

# AI Settings

The given code demonstrates how a part of a Laravel application, using the Laravel form builder package, manages AI settings of a "knowledgebase" model based on different model providers like Anthropic, Google, or OpenAI. The code includes two main sections:

1. \*\*Controller (`AiSettingController`)
   The Controller is the traffic controller between the Model (data) and the View (visual presentation of data). The `index` method receives a `KnowledgeBase` instance and uses it to load its settings and API keys.

   It checks user authorization, loads data based on specific ids, and prepares the form for the settings view. The form fields are dynamic and determined by the 'model provider'. The user gets options and configuration settings for the model provider they have chosen. Data is also validated before saving using Laravel's JsValidator package.

   The `update` method handles the submission of the AI settings form, validates the request against a ruleset defined in a specific form request class, and if the validation passes, updates the `KnowledgebaseSetting` model with the new data

2. \*\*Forms (`AiSettingForm`, `Anthropic`, `Google`, `OpenAI`)
   The form classes define how form fields should be created. These classes return arrays of fields with their settings. The specific form fields are determined by the 'model provider' that the user has chosen and get loaded in the `AiSettingForm`.

   The form fields array for each model provider mirrors the structure provided by constant "FORM_FIELDS".

Here's a more in-depth explanation of the code:

### `AiSettingController`

In this Laravel controller, two methods are defined `index` and `update`.

- `index`: Here, a form is built using the models, providers, and various configurations. The form fields are rendered individually and concatenated to create the complete form.

Following are some important steps in the `index` method:

- `authorize`: It checks if the currently authenticated user can 'view' the given KnowledgeBase instance.
- `load`: It retrieves the 'settings' and 'apiKeys' related to the KnowledgeBase instance using Laravel's eager loading.
- `getTextModels`, `getSpeechToTextModels`, `getTextToSpeechModels`: These methods return various models related to text processing and speech I/O.
- `create`: It builds the form fields structure using FormBuilder.
- `$formFields` and `$modelProviderRequestClass`: These are generated dynamically based on the 'modelProvider'. Both are extracted from the respective modelProvider Form class (either `Anthropic`, `Google`, or `OpenAI`).

- `update`: This method handles the submission of the form created in `index`. It validates the incoming HTTP request with the custom validation rules defined in `$validationRules`. If the validation passes, it updates the `KnowledgebaseSetting` model with new user data.

### `Forms (AiSettingForm, Anthropic, Google, OpenAI)`

These classes are using the LaravelFormBuilder package and define the shape and structure of the forms.

- `AiSettingForm`: This builds a generic form layout where AI settings can be dynamically injected. Once the settings are defined, they are included in the form via the `foreach` loop.

- `Anthropic`, `Google`, and `OpenAI`: These classes define the unique setting fields for each provider with their respective labels, help text, default values, and validation rules. The forms in these classes are structured to mirror the "FORM_FIELDS" constant.

Overall, the code mentioned in the context follows solid Object-Oriented Principles and is well-abstracted for different model providers. Each model provider has its own defined Form class that contains the required settings fields.

Using Laravel's MVC structure, the user can effectively manage their choice of AI model within this knowledgebase application, providing an intuitive and flexible interface for handling AI settings.
