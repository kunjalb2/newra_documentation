---
sidebar_position: 2
---

The database consists of a variety of tables centered around user information, application data, knowledge bases, AI models, integrations, and other miscellaneous information. Here's a brief overview of the tables and their relationships:

1. **User-related tables**: Central to user-related tables is the `users` table, which has relationships with multiple other tables like `user_subscriptions`, `user_account_activities`, `apps`, `knowledge_bases`, `domains`, `settings`, `sessions`, and `workflows`. Each of these relationships represent a one-to-many relationship. For example, `user_subscription_id` in `users` references `user_subscriptions(id)`.

2. **Application tables**: The `apps` table is the main table for application information and is related to multiple other tables like `app_appearances`, `app_prompt_engineering_settings`, `app_restricted_urls`, `app_settings`, and `domains`. Here, too, the relationships are one-to-many and for instance, `app_id` in `app_prompt_engineering_settings` references `apps(id)`.

3. **Knowledge Base tables**: The `knowledge_bases` table contains information regarding various knowledge bases, and has relationships with `users`, `datasources`, and `knowledge_base_settings` tables. Here, the relationship between `knowledge_bases` and `users` and `datasources` can be interpreted as many-to-one on user- and data source-level detail, where `user_id` and `knowledge_base_id` in `datasources` both reference `users(id)` and `knowledge_bases(id)` respectively.

4. **AI and Integration tables**: These tables include `ai_models`, `providers` and `integrations`, are concerned with AI and integration-related information. The foreign key `user_id` in `ai_models` and `providers` references `users(id)`. There's also a junction table, `integration_user`, for mapping user-integration relationships.

5. **Other tables**: These tables, such as `domains`, `workflows`, `roles` and `permissions`, `settings`, `sessions`, `prompts` and `media`, contain other forms of necessary data, with respect to users, workflows, roles and permissions, etc. Relevant junction tables include `role_user`, `permission_role`, and `permission_user`.

There are also utility tables—`failed_jobs`, `jobs`, `migrations`, `password_resets`, `db_logger`, `email_templates`, `global_settings`—for additional functionality.

It's imperative to note that all relationships are defined in terms of primary-to-foreign key relationships. The tables are interconnected in a structured way, offering a comprehensive view of users, their activities, subscriptions, associated apps, knowledge bases, AI aspects and integrations in well-defined, interrelated structures.
