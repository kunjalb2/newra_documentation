---
sidebar_position: 4
---

The Log Listing Page provides a centralized interface for viewing and managing all logs within a specific Knowledge Base. The following technical flow outlines how this is accomplished:

### Fetching Log Categories

1. **API Call for Log Categories**:

   - Initially, an API call is made to the `getKnowledgebaseCategoryLog` function in the `DataSyncService` class.
   - This function retrieves all types of logs, which can include categories such as KnowledgeBase, App Playground, Public URL, Chat Widget, API, Integration, etc.

2. **Display Log Categories**:
   - The retrieved log categories are displayed on the Log Listing Page. Users can click on any log category to view specific logs.

### Fetching Logs by Category

1. **Category Selection**:

   - When a user clicks on a log category, an API call is made to the `getKnowledgebaseLog` function in the `DataSyncService` class.
   - This call retrieves all logs associated with the selected category.

2. **Displaying Logs**:
   - Once the logs are received, they are displayed using a jQuery DataTable.

### Log Actions

1. **Viewing Log Details**:

   - Users can click on individual logs to view detailed conversation history, along with the context and other properties.

2. **Deleting Logs**:
   - Admin users have the capability to delete logs if necessary.

### Data Storage

- Logs are stored in MongoDB, which allows for efficient querying and management of log data.
