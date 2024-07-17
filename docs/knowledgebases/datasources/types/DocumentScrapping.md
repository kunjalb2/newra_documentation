---
sidebar_position: 5
---

# Document

## Route Directory

For routes connected to the Datasource module reference the path `newra/web/Modules/DocumentScrapping/Routes/web.php`.

## Code Explanation:

### Function Details

The `store(StoreDocumentDataSourceRequest $request)` method handles the actual process of storing a newly created resource in storage. Key aspects of the method include:

- Managing the user's storage token data based on their active subscription details.
- It loops through all the documents provided in the request.
- Skips unsupported file types and reads the content of the supported ones using the `readFileContents` method.
- It calculates the token count needed for the document content using `TokenizerX`. If the required tokens exceed the user’s remaining storage tokens, it skips the document.
- It then creates a datasource for each document via `DatasourceService::createFromText`.
- If the datasource is successfully created and `auto_train` is enabled for it, a new `TrainDataSourceJob` is dispatched.
- At the end, it deletes the document from the storage.

### `readFileContents(string $filename, string $fileExtension)`

This function reads the contents of a file using `FileReaderService`. It determines the file reader method based on the file extension.

In summary, `DocumentScrappingController` mainly facilitates rendering an upload form, reading the document contents, and creating a datasource from those documents. If configured, it also triggers an auto-training job for each datasource. The flow is designed around managing the storage token and file type restrictions and handling successful datasource creation and optional trigger of training jobs.
