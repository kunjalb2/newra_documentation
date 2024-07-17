---
sidebar_position: 4
---

# Text

## Route Directory

For routes connected to the TextScrapping module, reference the path `newra/web/Modules/TextScrapping/Routes/web.php`.

## Code Explanation

This module primarily handles the creation of manually entered data sources for text scrapping purposes.

### Function Details

1. **store(StoreManualDataSourceRequest $request):**

   This method is responsible for storing a newly created resource in storage. It does this by:

   - Checking if the user has enough storage tokens left for the new data based on the size of the text content to be stored.
   - If storage tokens are insufficient, creating a failed data source entry via `handleStorageLimitExceeded()`.
   - If there are enough tokens, creating and training the data source using `createAndTrainDatasource()`.

2. **renderForm($args, FormBuilder $formBuilder):**

   A static method which is used to render a form for creating a manual data source.

3. **calculateUserStorageTokens($storageTokenData):**

   A private method to calculate the remaining user storage tokens based on their usage and feature value.

4. **handleStorageLimitExceeded($validatedData, $autoTrain, $user, $knowledgeBaseId):**

   Invoked when the user's storage limit has exceeded. It creates a failed entry in the database and returns with an error message.

5. **createAndTrainDatasource($textContent, $validatedData, $autoTrain, $user, $knowledgeBaseId, $tokenCount):**

   Invoked when there are enough tokens. It creates the text data source, sets its status to 'success', and triggers a training job if the `auto_train` property of the data source is set to true.

In essence, `TextScrappingController` is mainly tasked with managing data sources specific to manual text scrapping operations. Its key deployments include form rendering for data source creation, handling user's token storage limits, facilitating successful data source creation, and optional triggering of training jobs.
