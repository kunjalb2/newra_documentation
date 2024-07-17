---
sidebar_position: 4
---

# WebScrappingJob

This file is located in `Modules/WebScrapping/Jobs/WebscrapingJob.php` path

## WebscrapingJob Class: A Deep Dive

`WebscrapingJob` facilitates web scraping operations as a Laravel queued job. This class interacts with services and jobs like `DatasourceService` and `TrainDataSourceJob`.

### Class Signature

`class WebscrapingJob implements ShouldQueue` indicates that this Laravel Job class is designed to be queued for background processing.

## Properties

These private properties store important data used during the web scraping process:

- `$url`: The URL to scrape.
- `$scrapAllUrl`: A flag to scrape all links found within a webpage.
- `$knowledgebaseId`, `$userId`, `$excludedUrls`, `$autoTrain`, `$parentId`: Various identifiers and flags that govern the scraping process.
- `$user`, `$tokenKey`: Data related to the user and their token storage.

## Methods

### `__construct()`

Initializes the job class with necessary parameters, setting up individual scraping tasks.

### `middleware()`

Specifies that this job should use the `SkipIfBatchCancelled` middleware, stopping execution if the batch is cancelled.

### `handle(WebscrapingHelper $webscrapingHelper, DataspaceService $datasourceService)`

Processes the scraping task:

- Loads related KnowledgeBase instance and User object.
- Checks if the user's datasource limit is exceeded.
- Starts URL scraping operation using `WebscrapingHelper`.
- If scraping fails, it logs the event through `DatasourceService.createFailedDatasource()`.
- Calculates token counts for successful scraping contents via `TokenizerX`.
- Checks if storage tokens are sufficient, else cancels the batch.
- Creates a new datasource from scraped content via `DatasourceService.createFromText()`.
- If `auto_train` is enabled and creation is successful, adds `TrainDataSourceJob` to the batch.
- If `scrapAllUrl` is set, creates additional scraping tasks for detected internal links.

### `shouldProcessLink(string $link)`

Determines if the provided link should be scraped. It considers if the link is excluded, has been processed before, or exceeds user's limits.

### `isLinkExcluded(string $link)`

Checks if the provided link is within `excludedUrls`.

### `linkExistsInKnowledgebase(string $link)`

Checks if the provided link is already a datasource in the user's knowledge base.

### `isLimitExceeded(string $link)`

Checks if the datasource limit for the user is reached; also checks if the link has been processed before.

### `saveTempJson(string $link)`

Keeps a temporary record of a link that's set to be processed. This aids in verifying if a link has been processed before and helps track the number of links processed so far. Stores these processed links in a JSON file named 'kb_ID.json', where 'ID' represents the knowledge base ID.

This class arranges the scraping of URLs, managing of resources, tracking the number of tokens involved, and the user's datasource limit. It interfaces with `DatasourceService` and `TrainDataSourceJob` concerning the creation of new datasources and optional auto-training.
