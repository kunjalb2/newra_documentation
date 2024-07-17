---
sidebar_position: 7
---

# TrainDataSourceJob

## Route Directory

Paths related to this job class will follow nothing specific as it's a job which can by definition be dispatched from anywhere in the Laravel application.

## Code Explanation

This Laravel Job is designed around managing the training of data sources after they have been saved in `TextScrappingController`.

### Function Details

1. **construct(array $datasourceIds, User $user):**

   When a new instance of this job is created, the constructor receives an array of datasource IDs and a user instance. It initializes the `DataSyncService` and assigns the ID array and the user to properties for later use.

2. **handle():**

   This method is the core of the job and is responsible for processing the datasource training. It systematically:

   - Prepares crawler data which includes information on the module name, user ID, and event type.
   - Chunks the list of datasources into groups of 20. This can be modified for efficiency based on hardware capabilities and requirements.
   - Iterates over these chunks, and for each datasource, it changes their status to 'training_requested' and saves them. It then generates a vector request for each datasource and sends the vector request to the `DataSyncService`.
   - Checks the active subscription for the user and retrieves the remaining storage tokens this user has left on their subscription.

3. **getRemainingStorageToken($subscription):**

   A private helper method to calculate the remaining storage tokens, if the user has an active subscription. Returns the number of storage tokens the user has left.

In summary, the `TrainDataSourceJob` job primarily handles the queueable task of setting up data sources for training. This involves checking the users' remaining storage tokens and preparing and sending vector requests to the `DataSyncService` for each valid datasource. The job is designed to systematically process requests for efficient usage of resources.
