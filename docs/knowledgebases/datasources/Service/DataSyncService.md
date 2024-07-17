---
sidebar_position: 2
---

# DataSyncService

## Code Explanation

The `DataSyncService` class is primarily responsible for integrating the application with external Node.js API and Python API. It encapsulates various functions for handling requests related to vectors, Datasources, and chatbots, among others.

### Class Variables

The class stores various API URL endpoints as class variables for different environments such as Node.js or Python. It also includes `EVENT_TYPES`, which is a collection of string constants to represent different events as they occur. In addition to those, it has a `$nodePostApiHeader` which is used for HTTP authorization while making requests to the Node API.

### Constructor

The constructor initializes these URL endpoints and API keys by fetching them from the environment variables.

Sure, let's delve deeper into all the methods:

### Public Methods

1. `prepareRequestDataForVector()`: This function fetches the file extension from the URL and creates a filtered record of data that conforms to the node's vector requirements. The differently named fields in our system are mapped to the expected ones in the node.

2. `prepareRequestData()`: Similar to `prepareRequestDataForVector`, this method prepares the request payload which we will send for data source creation, update, manual sync, and delete operations to the node/Python server depending on the event type.

3. `modifyData()`: This private method is used by the functions that prepare request data. It takes in data and a fieldMappings array to extract and rename fields as necessary according to the fieldMappings.

4. `handleVectorRequest()`: This method is responsible for making the HTTP POST request to the vectorUrl (Python/Node.js API) with the required vector request payload. It includes the necessary headers, one of which is the authorization key. If the request is successfully executed, it returns the response content.

5. `playGroundSaveMessage()`: This function is responsible for initiating chatbot requests to either Python/Node.js API. If the chat involves audio data, the audio file is attached to the HTTP object before making the POST request to the specified API. It returns the chatbot response on successful execution and logs any exceptions that may occur.

6. `deleteNamespace()`: This function sends a DELETE HTTP request with a payload containing user_id and namespace to the vectorUrl. It is used to remove the specific namespace along with its vectors present in Python/Node.js vector engines.

7. `getNamespace()`: This function is utilized to fetch the namespace of a knowledgebase.

8. `updateDataSource()`: This function is responsible for updating or deleting the datasource in Node.js/Python. It sends a PUT or DELETE request to the Node.js/Python API endpoint depending on the action passed to the function - 'update' or 'delete'.

9. `getKnowledgebaseCategoryLog()`: This function retrieves a log list for each knowledgebase category in Node.js/Python. It sends a GET request to the API and returns the data after refining it.

10. `getKnowledgebaseLog()`: This function sends a POST request to Python/Node.js API to fetch the logs associated with the particular knowledgebase.

11. `getLogBySessionId()`: This function fetches logs based on a Session ID by sending a POST request with the payload containing the Session ID to the Python/Node.js API.

12. `syncDocumentsToNode()`: This function is used to sync documents to the Python/Node.js API. It sends a POST request with the provided request data to a specified API for syncing.

13. `addUserTokenNodeJs()`: This function is responsible for adding a user's tokens to the Node.js API. It prepares a payload containing the user's tokens and initiures a POST request to the Node.js API.

### Private Methods

1. `getPlatformApiUrl()`: This function fetches Node.js or Python API URL endpoints from `env.production` or `env.local` files based on the running environment.

2. `getUrl()`: This method returns an array of various API URLs such as chat, vector, manage data sources etc. based on specified platform Node.js/Python.

3. `getAudioContent()`: This function checks whether there is audio content in a chat request. If there is, it gets the audio content and returns it along with the original filename.

4. `getBase64Encoded()`: This function base64 encodes data and returns it. Used for the preparation of the API requests where the audio needs to be encoded before sending.

Overall, the class serves as an intermediary between the internal functions of the application and external API services, facilitating data synchronization, request handling, and response acquisition. It represents an effective way to decouple the core application logic from external dependencies.
