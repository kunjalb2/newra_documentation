---
sidebar_position: 2
---

# Database

Sure, let's dive deeper into the relationships between the given database tables: users, knowledge_bases, and knowledge_base_settings.

The `users` table has a one-to-many relationship with the `knowledge_bases` table, meaning that one user can possess and manage multiple knowledge bases. This is established via the `user_id` column in the `knowledge_bases` table; every row in the knowledge_bases table has a `user_id` indicating the user that particular knowledge base belongs to.

However, each individual row in the `knowledge_bases` table has a unique corresponding row in the `knowledge_base_settings` table. This indicates a one-to-one relationship between these two tables. So, for each specific knowledge base, there is a unique set of settings. This connection is established via the `knowledge_base_id` in the `knowledge_base_settings` table.

This structure allows individual users to manage multiple unique knowledge bases, each with their specific settings. This is beneficial as it allows users to have personalized settings for each of their knowledge bases, thus helping cater their experience more specifically towards their needs. Thus, the relational structure of these tables stops redundant data and makes maintenance and updates smoother.

I hope this gives you a clearer understanding of the database relationships. Please feel free to ask if you have any other questions.

## Users Table

The `users` table stores user specific information. Each row corresponds to an individual user. The structure of the table is as follows:

| Column                         | Type                   | Comment                            |
| ------------------------------ | ---------------------- | ---------------------------------- |
| id                             | integer                | Unique identifier (Auto Increment) |
| name                           | character varying(255) |                                    |
| email                          | character varying(255) |                                    |
| photo                          | character varying(255) | Can be `NULL`                      |
| email_verified_at              | timestamp(0)           | Can be `NULL`                      |
| password                       | character varying(255) | Can be `NULL`                      |
| notification_frequency         | character varying(255) | Can be `NULL`                      |
| api_platform                   | character varying(255) | Default value: node                |
| integratex_user_id             | integer                | Can be `NULL`                      |
| integratex_subscription_id     | integer                | Can be `NULL`                      |
| integratex_user_status         | character varying(255) | Can be `NULL`                      |
| message_tokens                 | numeric(14,2)          | Can be `NULL`                      |
| storage_token                  | numeric(14,2)          | Can be `NULL`                      |
| knowledgebase_limit            | numeric(5,2)           | Can be `NULL`                      |
| expiry_date                    | timestamp(0)           | Can be `NULL`                      |
| integratex_subscription_status | character varying(255) | Can be `NULL`                      |
| chat_branding                  | character varying(255) | Default value: No                  |
| integratex_plan_name           | character varying(255) | Can be `NULL`                      |
| timezone                       | character varying(255) | Can be `NULL`                      |
| app_token_key                  | text                   | Can be `NULL`                      |
| is_copied                      | boolean                | Default value: false               |
| user_subscription_id           | bigint                 | Can be `NULL`                      |
| remember_token                 | character varying(100) | Can be `NULL`                      |
| deleted_at                     | timestamp(0)           | Can be `NULL`                      |
| created_at                     | timestamp(0)           |                                    |
| updated_at                     | timestamp(0)           |                                    |
| status                         | character varying(255) | Default value: active              |
| phone_number                   | character varying(255) | Can be `NULL`                      |
| theme_color                    | character varying(255) | Default value: theme-blue          |
| theme_mode                     | character varying(255) | Default value: light               |
| theme_additional_data          | json                   | Can be `NULL`                      |

    A user may own multiple `knowledge_bases`.

## Knowledge_Bases Table

The `knowledge_bases` table stores unique knowledge base entries. Each row corresponds to an individual knowledge base. Each `knowledge_bases` row belongs to one user.

| Column         | Type                   | Comment                            |
| -------------- | ---------------------- | ---------------------------------- |
| id             | uuid                   | Unique identifier                  |
| user_id        | integer                | Foreign Key referencing `users.id` |
| icon           | character varying(255) | Can be `NULL`                      |
| title          | character varying(255) |                                    |
| slug           | character varying(255) | Can be `NULL`                      |
| description    | text                   | Can be `NULL`                      |
| is_active      | boolean                | Default value: true                |
| deleted_at     | timestamp(0)           | Can be `NULL`                      |
| created_at     | timestamp(0)           |                                    |
| updated_at     | timestamp(0)           |                                    |
| type           | character varying(255) | Default value: chat                |
| show_reference | boolean                | Default value: false               |

Each `knowledge_bases` row has one `knowledge_base_settings`.

## Knowledge_Base_Settings Table

The `knowledge_base_settings` table stores the settings for each knowledge base. Each row corresponds to the individual settings of a knowledge base.

| Column               | Type                   | Comment                                      |
| -------------------- | ---------------------- | -------------------------------------------- |
| id                   | bigint                 | Unique identifier (Auto Increment)           |
| knowledge_base_id    | uuid                   | Foreign Key referencing `knowledge_bases.id` |
| model                | character varying(255) | Can be `NULL`                                |
| temperature          | character varying(255) | Can be `NULL`                                |
| maximum_tokens       | character varying(255) | Can be `NULL`                                |
| top_p                | character varying(255) | Can be `NULL`                                |
| frequency_penalty    | character varying(255) | Can be `NULL`                                |
| presence_penalty     | character varying(255) | Can be `NULL`                                |
| voice_tone           | character varying(255) | Can be `NULL`                                |
| prompt               | text                   | Can be `NULL`                                |
| local_search         | boolean                | Default value: false                         |
| history              | integer                | Can be `NULL`                                |
| deleted_at           | timestamp(0)           | Can be `NULL`                                |
| created_at           | timestamp(0)           |                                              |
| updated_at           | timestamp(0)           |                                              |
| speech_to_text_model | character varying(255) | Default value: whisper-1                     |
| text_to_speech_model | character varying(255) | Default value: tts-1                         |
| voice                | character varying(255) | Default value: alloy                         |
| configuration        | json                   | Can be `NULL`                                |

Each knowledge base will have one set of `knowledge_base_settings`.
