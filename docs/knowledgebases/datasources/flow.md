---
sidebar_position: 1
---

# Overview

Our platform, NewRA, utilizes a modular approach for handling Dataspaces. Each distinct aspect of the Datasource operation has its dedicated module, including things like routes, models, controllers, and views.

In NewRA, you can select a knowledge base from different datasources through different methods. These methods include website scraping, uploading of PDF, TXT, or CSV documents or providing specific inputs.

## Datasources

Each datasource record will possess a status:

- 'Pending': The datasource has been added, but content retrieval is yet to begin.
- 'In Progress': Content retrieval from the datasource is ongoing.
- 'Synced/Success': Successful content retrieval from the datasource.
- 'Failed': Content retrieval from the datasource was unsuccessful.
- 'Sync Requested': You have initiated a request to re-sync the content from the source.
- 'Training Requested': You have requested to train the model using the datasource.
- 'Trained': Training is complete, and the AI chatbot can now use this content to respond to user messages.

## Datasource Creation

Datasources can be created in multiple ways:

- 'WebScrapping': Fetches text content from various sources such as web URLs, Sitemaps, and whole domains.
- 'DocumentScrapping': Fetches text content from file extensions such as CSV, PDF, and text files.
- 'TextScrapping': Trains the content from the manual text data provided in a textbox.

The main goal is to create a datasource from one of these methods and generate vector data based on the derived data. For the vector data generation, we use Node.js. This vector data allows the chatbot to engage with users within context.

## Route Directory

For routes connected to the Datasource module reference the path `newra/web/Modules/Datasource/Routes/web.php`.

## Dispatched Events

In response to particular conditions in the life cycle of a Datasource object, certain events are triggered. Namely, the events are `DatasourceCreating`, and `DataSourceDeleted`.

```php
class Datasource extends Model{
    protected $dispatchesEvents = [
        'creating' => DatasourceCreating::class,
        'deleted' => DataSourceDeleted::class,
    ];
}
```

## Event Listeners

Event listeners are designed to react to specific events that occur during the runtime of NewRA, particularly those related to the lifecycle of a Datasource. These listeners perform predefined tasks once the associated event has been dispatched. Here are the details of each listener:

- **SyncNodeServer**: This listener becomes active when a `DataSourceDeleted` event occurs. Located at `Modules\Datasource\Listeners\SyncNodeServer.php`, its handle function manages several tasks:

  1. Logs that the Node server updating process has commenced.
  2. Prepares request data for vector deletion, including the event type, datasource details, and user particulars.
  3. Sends this array to the Node server to delete the related data.
  4. Checks for any associated S3 files with the datasource, and if found, deletes the files to prevent redundancy.

- **CheckDatasourceLimit**: Triggered by the `DatasourceCreating` event, this listener at `Modules\Datasource\Listeners\CheckDatasourceLimit.php` helps enforce user's datasource limit:

  1. Whenever a new datasource is being created, it checks whether the new addition would breach the user's limit.
  2. In the event that adding a new datasource would surpass the limit, it aborts the process and returns `false`, indicating that datasource creation was unsuccessful.

- **EventServiceProvider**: Located at `Modules\Datasource\Providers\EventServiceProvider.php`, this provider maps the events to their corresponding listeners when triggered within the application.
