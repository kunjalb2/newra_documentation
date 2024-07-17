---
sidebar_position: 1
---

# Database

| Column      | Type                  | Comment                                           |
|-------------|-----------------------|---------------------------------------------------|
| id          | bigint                | Auto Incremented ID                               |
| user_id     | bigint                | ID of the user associated with the settings       |
| key         | varchar(255)          | Name of the setting (e.g., vector_database_setting)|
| value       | json                  | Details of the setting stored in JSON format      |
| created_at  | timestamp             | Date and time when the setting was created        |
| updated_at  | timestamp             | Date and time of the last update to the setting   |
| deleted_at  | timestamp             | Date and time when the setting was deleted (soft-delete) |

**Explanation:**
The settings table is used by the settings module to store various configurations for users. Each user has their own set of settings stored in this table. Here's what each column represents:

- **id**: This is a unique number for each setting entry. It automatically increments for new entries.
- **user_id**: Each setting belongs to a specific user, and this column stores the user's identifier.
- **key**: The name or type of setting being stored. For instance, it could be `vector_database_setting`, `storage_setting`, or `mail_setting`, among others.
- **value**: This column stores the details of the setting. The information is stored in JSON format, which allows for flexible and structured data storage.
- **created_at**: Records the date and time when the setting was initially created.
- **updated_at**: Shows the last time the setting was updated. This timestamp is updated whenever changes are made to the setting.
- **deleted_at**: Indicates when the setting was soft-deleted (marked as deleted but not physically removed). This allows for data recovery and history tracking.

In summary, this table structure enables the storage of various types of settings data for enterprise users, with each setting identified by a name (key) and its details stored in JSON format in the value field. The timestamps (created_at, updated_at, deleted_at) provide additional information about the lifecycle and history of each setting entry.

