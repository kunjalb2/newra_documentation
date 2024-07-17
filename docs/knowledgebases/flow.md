---
sidebar_position: 1
---

# Flow

NewRA employs a structure known as a "Knowledge Base," which is a compilation of data sources gathered and stored within a vector database. These repositories become the primary source of information for AI models utilized in applications. NewRA offers the ability to establish multiple Knowledge Bases, facilitating the importation and training of a diverse range of data sources.

## Modular Approach

In NewRA, all code relevant to Knowledge Bases is contained within the "KnowledgeBase" module. This dedicated module incorporates its unique routes, models, controllers, views, etc., streamlining Knowledge Base operations.

## Route Directory

For routes connected to the KnowledgeBase module reference the path `newra/web/Modules/KnowledgeBase/Routes/web.php`.

## Knowledge Base Listing Page

The Knowledge Base Listing Page offers a centralized view and management portal for all Knowledge Bases. It allows users to adjust the status of each Knowledge Base (enabled/disabled) and provides easy access to a Knowledge Base's detailed information page.

## Creating a New Knowledge Base

Creating a new Knowledge Base is facilitated using the `index` method in the `KnowledgeBaseController`. It employs the `CreateKnowledgebaseForm` to display the creation form.

## Storing and Updating Knowledge Bases

The `store` method captures your data post successful validation. Following the storage or update operation via the `update` method, users are redirected to the comprehensive knowledge base listing page.

## Deleting Knowledge Base

The `Destroy` method is used to delete the KnowledgeBase from the database and it will trigger `KnowledgeBaseDeleted` event.

## Dispatched Events

In response to particular conditions in the life cycle of a Knowledge Base object, certain events are triggered. Namely, the events are `KnowledgeBaseCreated`, `KnowledgeBaseDeleting`, and `KnowledgeBaseDeleted`.

```php
class KnowledgeBase extends Model{
    protected $dispatchesEvents = [
        'created' => KnowledgeBaseCreated::class,
        'deleting' => KnowledgeBaseDeleting::class,
        'deleted' => KnowledgeBaseDeleted::class,
    ];
}
```

# Event Listeners

Event listeners are designed to react to specific events that occur during the runtime of NewRA, particularly those related to the lifecycle of a Knowledge Base. These listeners perform predefined tasks once the associated event has been dispatched. Here are the details of each listener:

- **EventServiceProvider**: Located at `Modules\KnowledgeBase\Providers\EventServiceProvider.php`, this provider maps the events to their corresponding listeners when triggered within the application.

- **KnowledgeBaseCreatedHandler**: This listener is set in motion by the `KnowledgeBaseCreated` event. It can be found at `Modules/KnowledgeBase/Listeners/KnowledgeBaseCreatedHandler.php`. Its primary role is to manage any setup tasks necessary after a new Knowledge Base has been successfully created. This could include initializing configurations, notifying other parts of the system about the new Knowledge Base, or even triggering additional events to set off other workflows.

- **KnowledgeBaseDeletingHandler**: Activated by the `KnowledgeBaseDeleting` event, this listener resides in `Modules/KnowledgeBase/Listeners/KnowledgeBaseDeletingHandler.php`. It's in charge of all house-cleaning tasks that must happen immediately before a Knowledge Base is deleted from the system. This can involve unlinking the Knowledge Base from associated apps, revoking permissions, or flagging relationships for cleanup.

- **KnowledgeBaseDeletedHandler**: Triggered by the `KnowledgeBaseDeleted` event, the corresponding listener is located in `Modules/KnowledgeBase/Listeners/KnowledgeBaseDeletedHandler.php`. This listener is responsible for wrapping up any tasks that need to happen immediately after the deletion of a Knowledge Base. For example, it might be tasked to delete all files associated with the Knowledge Base within the S3 storage system or clear cached data respective to that Knowledge Base.

Through these listeners, the system ensures that the codebase remains organized, clean, and efficient, with each part of the system staying informed about changes that might affect it.
