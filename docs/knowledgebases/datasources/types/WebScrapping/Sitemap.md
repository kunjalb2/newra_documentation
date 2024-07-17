---
sidebar_position: 4
---

# Sitemap

### Function Details

- `fetchSitemapUrl(Request $request)`: This method retrieves the sitemap via a URL from the request object, parses the XML, captures the URLs within the sitemap, and then returns these URLs in a JSON response.

- `store(SitemapScrappingRequest $request)`: This function handles the storing of the sitemap scaping request. It triggers the sitemap scraping process based on the provided sitemap URLs in the request.

### Important Variables Explained

- `$sitemapUrls`: Array of URLs attained from the request object and separated by commas.

- `$knowledgeBaseId`: Retrieved from the request data. Likely used to link scrapping data to a particular knowledge base.

- `$autoTrain`: A flag determining if the data should be trained automatically or not.

- `$user`: Contains authenticated user data.

- `$datasourceLimit`: Maximum limit of data sources for the user.

- `$jobs`: Array of queued jobs. Each job is an instance of `WebscrapingJob`, meant to process the web scraping task carried on each sitemap URL.

- `$knowledgebase` and `$datasourceCount`: Contains retrieved knowledge base details and the count of current data sources.

- `$remainingJobsCount`: Total jobs that can still be handled based on the remaining data source limit.

- `$subscription` and `$remainingStorageToken`: Provides information regarding the user's active subscription and calculates the remaining storage tokens based on their subscription details.

- `$storageTokenCacheKey`: A string created for caching purposes.

### Core Logic

- The `store` method processes sitemap URLs provided in the request. It splits multiple URLs by commas, gets the KnowledgeBaseId, determines the autoTrain status, and recognizes the authenticated user initiating the request.

- It calculates the remaining jobs count by checking the user's current knowledge base data source count against their data source limit.

- It also computes the remaining storage tokens by checking the storage token limit and its usage values from the user's active subscription.

- The storage token information is cached using `Cache::put`.

- For each sitemap URL, a scraping job is created and it is added to a jobs collection.

- These job collections are added to the batch either by retrieving the previous batch or creating a new batch.

- After executing the batch jobs, if all the jobs have been processed successfully, the `then()` function forgets the storage token cache key.

- If the request is last in the sequence (`$request->lastRequest`), then removes the batch ID from the session.

- Finally, a JSON response indicating success and a message is returned. If the process fails, the response will be handled somewhere else.
