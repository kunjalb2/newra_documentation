---
sidebar_position: 5
---

## Settings

The `KnowledgeBaseSettingController` class is responsible for managing settings for a specific KnowledgeBase, including retrieving, updating, and deleting settings. It ensures that only authorized users can perform these actions.

### Responsibilities

- **Authorization**: Ensures users have necessary permissions to view, update, and delete KnowledgeBase settings.
- **Data Retrieval**: Fetches current settings and associated API keys.
- **Form Handling**: Creates forms for updating settings.
- **Deletion**: Handles deletion of a KnowledgeBase.

### Workflow

1. **Authorize User**:

   - Confirms the authenticated user is authorized and the owner of the KnowledgeBase.

2. **Data Retrieval**:

   - Retrieves settings and API keys for the KnowledgeBase.

3. **Form Creation**:

   - Uses `FormBuilder` to create an update form (`UpdateKnowledgebaseForm`), setting necessary attributes and endpoints.

4. **Render View**:

   - Passes the KnowledgeBase instance, permissions, and update form to the view (`knowledgebase::datasource.settings`).

5. **Deletion**:
   - Provides a `destroy` method to delete the KnowledgeBase instance.

## UpdateKnowledgebaseForm Class

The `UpdateKnowledgebaseForm` class outlines fields for the KnowledgeBase settings update form, leveraging LaravelFormBuilder.

### Key Fields

- **Icon**: Dropdown to select an icon.
- **Title**: Text field for entering the title.
- **Description**: Textarea for a detailed description.
- **Tip Block**: Information block offering tips to users.
- **Enable Source Documents**: Checkbox to toggle source document display.
- **Reset Button**: Button to reset form fields.
- **Submit Button**: Button to save the updated settings.

### Workflow

1. **Field Configuration**:

   - Fields are defined with labels, placeholders, and CSS classes for consistency.

2. **Validation and Submission**:
   - Handles input validation and async submission to the backend.

### Usage

Users can access the settings page to see a pre-filled form. They can modify settings and submit the form, which handles validation and backend communication for updates.

## Deletion Workflow

The `KnowledgeBaseSettingController` also includes functionality for deleting a KnowledgeBase via the `destroy` method.

### Destroy Method Workflow

1. **Authorize User**:
   - Confirms user permission for deletion.
2. **Find KnowledgeBase**:
   - Retrieves the instance to be deleted.
3. **Deletion Logic**:
   - Deletes the instance from the database.
4. **Redirect Response**:
   - Provides feedback to the user on the deletion status.

### Example Usage

When a user deletes a KnowledgeBase:

1. The `destroy` method is invoked.
2. The user’s authorization is verified.
3. The KnowledgeBase instance is located and deleted.
4. The user is redirected, typically with a confirmation message.

This concise flow ensures developers can quickly grasp how `KnowledgeBaseSettingController` and `UpdateKnowledgebaseForm` collaborate to handle settings management and deletion.
