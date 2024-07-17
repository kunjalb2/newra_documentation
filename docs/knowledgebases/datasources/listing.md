---
sidebar_position: 3
---

## Datasource Listing Page

The Datasource Listing Page serves as a centralized interface for viewing and managing all Datasources within a specific Knowledge Base. The page enables users to perform actions such as viewing, editing, resyncing, reindexing, and deleting Datasources. Below are the technical steps and processes involved:

### Fetching Datasources

To retrieve all Datasources associated with a Knowledge Base, you can use the `show` method from the `Modules/KnowledgeBase/Http/Controllers/KnowledgeBaseController.php`. This controller leverages `DatasourceDataGrid` to gather and structure the Datasources for the selected Knowledge Base.

### Datasource Actions

The `DatasourceDataGrid` provides an HTML table displaying the list of Datasources with the following available actions for each entry:

- **Edit**
- **Re-sync**
- **Re-index**
- **Delete**

### Adding a Datasource

1. **Data Extraction**:

   - When a Datasource of any type is added, the system first attempts to extract text from the source.
   - The extracted text is then uploaded to an S3 server, and the file path is stored in the database with a status set to `success`.

2. **Training Request**:

   - The `TrainDataSourceJob` is dispatched, which sends the data to the Node server.
   - Before sending to the Node server, the job updates the status to `training_requested`.

3. **Node Server Processing**:
   - The `TrainDataSource` job is dispatched. The Node server processes this request.
   - Upon completion, an acknowledgment is sent back to our webhook.
   - The system then updates the status to `trained`, indicating that the Datasource indexing is complete.

With the status marked as `trained`, the Datasource is now ready for interactions, such as chat, based on the data provided.
