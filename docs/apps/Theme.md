---
sidebar_position: 6
---

Each app can have a `theme` relationship, established as the app is created. This relationship stores the UI and options for themes, which are used in Public URLs, iFrames, Chat widgets, and within the app itself.

## Theme Fields

The theme includes multiple fields:

- `themeType`
- `themeFont`
- `themeBubblePlacement`
- `themeDefaultType`
- `themeChatView`
- `themeIcon`
- `themeIconName`
- `themeOperatorAvatar`
- `themeOperatorAvatarName`
- `themeColor`
- `operatorName`
- `welcomeMessage`
- `copy_right`

> **Note**: Some options are available only to enterprise customers who have access to the theme feature.

## Data Flow and Runtime Preview

1. **Data Fetching and Rendering**:

   - Upon accessing the theme settings, data for the theme is fetched and passed to the blade file.
   - A runtime preview is provided, allowing users to set and see theme values dynamically.

2. **User Interaction**:

   - Users can modify theme settings via the runtime preview interface.
   - On clicking the "Save" button, the updated values are stored in the database.

3. **Database Update**:
   - The `theme` data is updated in its respective table.
   - Changes are immediately reflected in the app, Public URLs, iFrames, and Chat widgets.

## Database Considerations

- **Table Structure**:

  - The theme-related data is stored in a dedicated table, typically linked to the apps table via a foreign key (e.g., `app_id`).
  - The structure includes columns corresponding to each theme field (e.g., `themeType`, `themeFont`, `operatorName`, etc.).

- **Enterprise Feature Handling**:
  - Additional columns or flags may exist to differentiate enterprise features, ensuring only authorized users can access and modify these settings.

## Technical Flow

1. **Retrieve and Render Theme Data**:

   - Fetch the theme data for the selected app.
   - Pass the data to the blade file to populate the current settings.

2. **Runtime Preview and Interactivity**:

   - Allow users to interact with and modify theme settings via the UI.
   - Provide a live preview of changes to offer instant feedback.

3. **Save Changes**:

   - Upon clicking "Save," validate and persist the new theme settings.
   - Update the relevant fields in the theme table.
   - Reflect the changes across different components (Public URL, iFrame, Chat widget).

4. **Enterprise Feature Control**:
   - Check user permissions before allowing access to enterprise-only features.
   - Render additional options and fields based on the user’s subscription level.

By following this approach, users can seamlessly customize and preview theme settings, ensuring a cohesive and personalized experience across various application interfaces.
