---
sidebar_position: 1
---

# DatasourceService

## Code Explanation

This service is designed to handle various operations regarding datasources including creating a new datasource from various types of inputs such as files, text, and URLs. Additionally, it manages the update operation with the new text content.

### Function Details

1. **createFromFile(UploadedFile $file, array $data):**

   This method creates a new datasource from an uploaded file. It moves the uploaded file into the appropriate directory, stores the file path in the new datasource entry, and creates the entry.

2. **createFromFilename(string $filename, array $data):**

   This method creates a new datasource from a filename. It moves a file from its source location into storage, stores the new file path in the datasource entry, and creates the entry.

3. **createFromText(string $text, array $data):**

   This method creates a new datasource from a text string. It saves the text string in a txt file in storage, stores the new filepath in the datasource entry, and creates the entry.

4. **createFailedDatasource(array $data):**

   This method creates a new failed datasource. It just calls the `create` method passing the `data` array as it's parameter.

5. **createFromPublicUrl(string $url, array $data):**

   This method creates a new datasource from a public URL. It uploads the content from the URL and stores the file path in the datasource entry.

6. **create(array $data):**

   This private method creates a new datasource entry in the database.

7. **uploadTextContent(string $content, array $requestData):**

   This private method uploads the text content to the chosen filesystem and returns the file path.

8. **moveFileToStorage(string $sourcePath, array $requestData):**

   This private method moves a file to the selected filesystem and returns the new file path.

9. **uploadUrlContent(string $url, array $requestData):**

   This method uploads content fetched from a specific url to the filesystem and returns the file path.

10. **updateFromText(Datasource $datasource, string $text):**

This method updates an existing datasource with new text content, uploads the new content, and updates the necessary attributes.

11. **createFromCredentials(array $requestData):**

    This method creates a datasource from the provided credentials.

In essence, the `DatasourceService` facilitates various operations on data sources - creation from text, files, and URLs, as well as the update operation. The service also manages the filesystem operations crucial for data source handling.
