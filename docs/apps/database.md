---
sidebar_position: 1
---

# Database

## users

| Column | Type                                             | Comment |
| ------ | ------------------------------------------------ | ------- |
| id     | integer Auto Increment [nextval('users_id_seq')] |         |
| name   | character varying(255)                           |         |
| email  | character varying(255)                           |         |
| ...    | ...                                              | ...     |

## apps

| Column  | Type                   | Comment |
| ------- | ---------------------- | ------- |
| id      | uuid                   |         |
| user_id | integer                |         |
| icon    | character varying(255) |         |
| ...     | ...                    | ...     |

## app_settings

| Column | Type                   | Comment |
| ------ | ---------------------- | ------- |
| id     | uuid                   |         |
| app_id | uuid                   |         |
| model  | character varying(255) | NULL    |
| ...    | ...                    | ...     |

## app_appearances

| Column | Type                   | Comment |
| ------ | ---------------------- | ------- |
| id     | uuid                   |         |
| app_id | uuid                   |         |
| icon   | character varying(255) |         |
| ...    | ...                    | ...     |

## app_prompt_engineering_settings

| Column      | Type | Comment |
| ----------- | ---- | ------- |
| id          | uuid |         |
| app_id      | uuid |         |
| custom_form | json | NULL    |
| ...         | ...  | ...     |

## app_restricted_urls

| Column         | Type                   | Comment |
| -------------- | ---------------------- | ------- |
| id             | uuid                   |         |
| app_id         | uuid                   |         |
| restricted_url | character varying(255) | NULL    |
| ...            | ...                    | ...     |

# Relationships

- `users` have _one-to-many_ relationship with `apps`

  - One user has many apps

- `apps` has _one-to-one_ relationship with `app_settings`, `app_appearances`, `app_prompt_engineering_settings`, and `app_restricted_urls`
  - One app has one setting (app_setting)
  - One app has one appearance (app_appearance)
  - One app has one prompt setting (app_prompt_engineering_setting)
  - One app has one restricted_url (app_restricted_urls)
