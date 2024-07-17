---
sidebar_position: 2
---

# Multiple URL

For routes connected to the Datasource module reference the path `newra/web/Modules/WebScrapping/Routes/web.php`.

### Function Details

`store(WebpageScrappingRequest $request)`: This function is responsible for triggering a web scrapping process on source URLs that a user provides. It receives a `WebpageScrappingRequest $request` which likely contains request data that has been validated in the `WebpageScrappingRequest` class.

### Important Variables Explained

- `$knowledgeBaseId`: Retrieved from request data, likely used to link scrapping data to a particular knowledge base.

- `$knowledgeBase`: An instance of a knowledge base associated with the passed ID.

- `$autoTrain`: A flag indicating whether the data should be trained automatically or not.

- `$user`: Consists of authenticated user data.

- `$sourceUrls`: Array of URLs obtained from request object, which are then cleaned for any duplicates and empty string values.

- `$subscription`: Represents the user's active subscription details.

- `$remainingStorageToken`: Used for computing remaining storage tokens for the user based on their subscription.

- `$storageTokenCacheKey`: A string created for caching purpose.

- `$jobs`: An array of queued jobs. Each job is an instance of `WebscrapingJob` associated with a particular URL from `$sourceUrls`.

### Core Logic

- The method retrieves knowledgeBase data, user's active subscription, calculates remaining storage tokens based on `feature_value` and `feature_usage_value`, and caches this value using the `$storageTokenCacheKey`.

- For each given URL, a web scraping job (`WebscrapingJob`) is initiated and added to a job batch, where each job is assigned an individual task of scraping data from a provided URL.

- The batches are dispatched using `Bus::batch($jobs)` and cached storage tokens are free from memory.

- The `->then()` method forgets the storage token cache only if all the jobs in the batch have been processed successfully.

- The function return's a JSON response indicating success and a message. If the process fails anywhere in between, the response will be handled somewhere else, probably in the `WebpageScrappingRequest` class or `WebscrapingJob` class.

That's a quick overview of the method. It's all about scraping data from multiple URLs, storing the results, and managing resources effectively.
