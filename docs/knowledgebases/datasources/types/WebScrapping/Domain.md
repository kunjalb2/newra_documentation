---
sidebar_position: 3
---

# Domain

### Function Details

The `store(DomainScrappingRequest $request)` function is tasked with handling a request to start a web scraping operation using a designated domain, which is part of the data provided in a `DomainScrappingRequest` object.

### Important Variables Explained

- `$targetDomain`: This stores data from the request concerning which domain should be the focus of the web scraping operation.

- `$knowledgeBaseId`: Important for linking the results of the scraping process with a specific knowledge base.

- `$autoTrain`: A boolean value determining whether or not the system will automatically initiate training after the scraping process.

- `$user`: This variable holds the details of the user who is initiating the request.

- `$excludedUrls`: Specific URLs that will be avoided during the scraping process.

- `$subscription`: Contains information about the user's current subscription.

- `$remainingStorageToken`: A numeric value representing the remaining storage tokens related to the user's subscription.

- `$storageTokenCacheKey`: Used for caching the status of the storage tokens.

- `$jobs`: This holds information about a `WebscrapingJob` instance, a task assigned to process the web scraping on the specified domain.

### Core Logic

- The logic primarily starts with the preparation of specific variables including `remainingStorageToken` and `storageTokenCacheKey`.
- A web scraping job is then created using these data, focusing on the target domain identified in the request.
- The `Bus::batch($jobs)` function then dispatches the job. Handled asynchronously, Laravel's Job Batching allows the server to process the sizable task while allowing for the normal use of the system.

- Upon completion of the job batch, the function will check the vector database to see if retraining is necessary. If yes, another job (`TrainDataSourceJob`) will be dispatched.
- At the end of the process, any remaining JSON files related to the knowledge base will be deleted for cleanup.
