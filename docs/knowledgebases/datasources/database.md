---
sidebar_position: 1
---

# Database

## Overview

The `users`, `knowledge_bases`, and `datasources` tables form important relationships within the database that are instrumental in managing users' knowledge bases and their respective data sources. Through the `user_id` and `knowledge_base_id` foreign keys, we can track and manage relationships between users and knowledge bases, as well as between knowledge bases and data sources.

## Users Table

The `users` table manages user-specific information. An individual user is represented by each row in the table, with the unique `id` field serving as the primary key.

## Knowledge_Bases Table

The `knowledge_bases` table contains information about users' knowledge bases. It maintains a one-to-many relationship with the `users` table through the `user_id` foreign key. This relationship indicates that each user can have multiple knowledge bases.

## DataSources Table

The `datasources` table houses entries for the various sources of data fed into the knowledge bases. It maintains a one-to-many relationship with the `knowledge_bases` table through the `knowledge_base_id` foreign key. In this relationship, each knowledge base can have multiple data sources associated with it.

Below is an overview of the table structures:

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
Here is the `datasources` table structure in MD format:

## DataSources Table

| Column             | Type                   | Comment                                              |
| ------------------ | ---------------------- | ---------------------------------------------------- |
| id                 | uuid                   | -                                                    |
| parent_id          | uuid                   | Can be `NULL`                                        |
| user_id            | bigint                 | Refers to foreign key from `users` table             |
| knowledge_base_id  | uuid                   | Refers to a foreign key from `knowledge_bases` table |
| type               | character varying(255) | -                                                    |
| title              | character varying(255) | Can be `NULL`                                        |
| paragraph          | text                   | Can be `NULL`                                        |
| scrap_all_url      | boolean                | Default `false`                                      |
| url                | character varying(255) | Can be `NULL`                                        |
| excluded_urls      | text                   | Can be `NULL`                                        |
| reference_url      | character varying(255) | Can be `NULL`                                        |
| size               | character varying(255) | Can be `NULL`                                        |
| estimated_tokens   | character varying(255) | Can be `NULL`                                        |
| status             | character varying(255) | -                                                    |
| auto_train         | boolean                | Default `false`                                      |
| is_content_fetched | boolean                | Default `false`                                      |
| last_sync_date     | timestamp(0)           | Can be `NULL`                                        |
| deleted_at         | timestamp(0)           | Can be `NULL`                                        |
| created_at         | timestamp(0)           | -                                                    |
| updated_at         | timestamp(0)           | -                                                    |
| failed_reason      | character varying(255) | Can be `NULL`                                        |
| created_by         | character varying(255) | Can be `NULL`                                        |
| meta_data          | json                   | Can be `NULL`                                        |

Each `datasource` is connected to a single `knowledge_bases`.
