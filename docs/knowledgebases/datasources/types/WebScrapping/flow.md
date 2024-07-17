---
sidebar_position: 1
---

# Introduction

`WebscrapingHelper` is a Laravel-based helper class, which employs a Python script (`webscrapingV3.py`) for executing web scraping tasks on specific URLs.

## Function Highlights

- `url($url)`: This function is responsible for defining the primary URL targeted by the web scraping operation.

- `parentUrl($parentUrl)`: This function helps set up the parent URL in the web scraping operation context.

- `excludedUrls($excludedUrls)`: Allows users to specify a list of URLs that should be exempt from the web scraping process.

- `get()`: A crucial function that assembles the necessary data, triggering the Python web scraping script using Symfony's Process component. It then retrieves the returned JSON response following the execution of the Python script.

## Key Variables

- `$url`: Holds the target URL for the web scraping operation.

- `$parentUrl`: Stores the parent URL data during the web scraping process.

- `$excludedUrls`: An array structure containing all URLs specified to be excluded from the web scraping operation.

- `$command`: Stores an array of command-line arguments which will be combined to form the run command for the Python script.

- `$process`: An instance of Symfony's `Process` class, which functions to execute the Python script using the arguments configured in `$command`.

## Core Logic Flow

- `url()`, `parentUrl()`, and `excludedUrls()` are primarily used to set values for the corresponding class attributes. The nature of these methods allows for method chaining.

- The `get()` function initiates the primary functions of the class. It sets up the Python script's execution by specifying the arguments like `function`, `url`, `parent_url`, and `exclude_urls`.

- It then employs the `Process` class from Symfony to invoke the Python script, which performs the web scraping operation asynchronously.

- Using the `Process` class's `getOutput()` function, it retrieves the output from the Python script. It manages this output (assumed to be in JSON format) by decoding it into workable data.

- On successful execution, it parses the output to return a comprehensive array containing details about execution status, output data, and potential links. Conversely, the method returns `false` if the process fails.

Please note, the specifics of how data is handled during processing may vary because it depends on how the Python script (`webscrapingV3.py`) performs and returns results. For a closer look at how this data management is approached, consider examining the Python script directly.
