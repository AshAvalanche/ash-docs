---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Project Management

:::caution
The Ash Console is currently in alpha and **not production-ready**. It is under active development and subject to breaking changes.
:::

The first step for an Ash Console user is to create a [project](/docs/console/glossary#project): a logical set of [resources](/docs/console/glossary#resource) that are deployed in [cloud regions](/docs/console/glossary#cloud-region).

## List projects

<Tabs groupId="ash-console-client">
  <TabItem value="ash-cli" label="Using the Ash CLI" default>

:::tip
The Ash CLI displays information in a table format by default. To get a more detailed output (or for scripting), use the `--json` flag.
:::

To list projects you have access to, run:

```bash title="Command"
ash console project list
```

```bash title="Output"
+------------+----------+------+---------+---------------+------------+
| Project ID | Owner ID | Name | Network | Cloud regions | Created at |
+============+==========+======+=========+===============+============+
+------------+----------+------+---------+---------------+------------+
```

  </TabItem>
  <TabItem value="ash-api" label="Using the Ash Console API">

:::tip
See [Authentication](/docs/console/tutorials/authentication?ash-console-auth-client=ash-api) for more information on how to get an access token.
:::

The project API endpoint is `/projects`.:

```bash title="Command"
curl https://api.console.ash.center/projects \
  -H "Authorization: Bearer ${access_token}"
```

```bash title="Output"
[]
```

  </TabItem>
</Tabs>

## Create a project

<Tabs groupId="ash-console-client">
  <TabItem value="ash-cli" label="Using the Ash CLI" default>

To create a new project, use the `create project` command and provide the required project properties as JSON:

```bash title="Command"
ash console project create '{"name": "my-devnet-project", "network": "local"}'
```

```bash title="Output"
Project created successfully!
+--------------------------------------+-------------+-------------------+---------+---------------+------------------+
| Project ID                           | Owner ID    | Name              | Network | Cloud regions | Created at       |
+======================================+=============+===================+=========+===============+==================+
| 1c464e44-1e2c-46de-a08c-79ac58f6e632 | 2870...dc26 | my-devnet-project | Local   |               | 2023-10-26T10:36 |
+--------------------------------------+-------------+-------------------+---------+---------------+------------------+

Switched to project 'my-devnet-project' (1c464e44-1e2c-46de-a08c-79ac58f6e632)!
```

  </TabItem>
  <TabItem value="ash-api" label="Using the Ash Console API">

To create a new project, you have to send a `POST` request with the required project properties as JSON:

```bash title="Command"
curl -X POST https://api.console.ash.center/projects \
  -H "Authorization: Bearer ${access_token}" \
  -H "Content-Type: application/json" \
  -d '{"name": "my-devnet-project", "network": "local"}'
```

```json title="Output"
{
  "cloudRegionsIds": {},
  "created": "2023-10-26T13:38:42.548836",
  "id": "c84c4a2f-9a65-46a2-b7b9-be8eeceaa2b1",
  "name": "my-devnet-project",
  "network": "local",
  "ownerId": "287090ee-7fae-4bd7-9263-d690959edc26"
}
```

  </TabItem>
</Tabs>

## Select the current project (CLI only)

<Tabs groupId="ash-console-client">
  <TabItem value="ash-cli" label="Using the Ash CLI" default>

The Ash CLI stores the current project in a configuration file. This project will be used by default for all the commands that require a project (e.g. `console region ...`).

To show the current project, run:

```bash title="Command"
ash console project show
```

```bash title="Output"
Current project: 'my-devnet-project' (1c464e44-1e2c-46de-a08c-79ac58f6e632)
```

You can switch between projects:

```bash title="Command"
ash console project select 1c464e44-1e2c-46de-a08c-79ac58f6e632
```

```bash title="Output"
Switched to project 'my-devnet-project' (1c464e44-1e2c-46de-a08c-79ac58f6e632)!
```

  </TabItem>
  <TabItem value="ash-api" label="Using the Ash Console API">

This feature does not exist in the Ash Console API.

  </TabItem>
</Tabs>

## Update a project

<Tabs groupId="ash-console-client">
  <TabItem value="ash-cli" label="Using the Ash CLI" default>

The only propery that can be updated is the project name:

```bash title="Command"
ash console project update 1c464e44-1e2c-46de-a08c-79ac58f6e632 '{"name": "my-devnet-project-updated"}'
```

```bash title="Output"
Project updated successfully!
+--------------------------------------+-------------+---------------------------+---------+---------------+------------------+
| Project ID                           | Owner ID    | Name                      | Network | Cloud regions | Created at       |
+======================================+=============+===========================+=========+===============+==================+
| 1c464e44-1e2c-46de-a08c-79ac58f6e632 | 2870...dc26 | my-devnet-project-updated | Local   |               | 2023-10-26T10:36 |
+--------------------------------------+-------------+---------------------------+---------+---------------+------------------+
```

  </TabItem>
  <TabItem value="ash-api" label="Using the Ash Console API">

The only propery that can be updated is the project name by sending a `PATCH` to the `projects/${projectId}` endpoint:

```bash title="Command"
curl -X PATCH https://api.console.ash.center/projects/c84c4a2f-9a65-46a2-b7b9-be8eeceaa2b1 \
  -H "Authorization: Bearer ${access_token}" \
  -H "Content-Type: application/json" \
  -d '{"name": "my-devnet-project-updated"}'
```

```json title="Output"
{
  "cloudRegionsIds": {},
  "created": "2023-10-26T13:38:42.548836",
  "id": "c84c4a2f-9a65-46a2-b7b9-be8eeceaa2b1",
  "name": "my-devnet-project-updated",
  "network": "local",
  "ownerId": "287090ee-7fae-4bd7-9263-d690959edc26"
}
```

  </TabItem>
</Tabs>

## Delete a project

:::caution
Deleting a project will recursively delete **all the cloud regions and resources** that belong to it!
:::

<Tabs groupId="ash-console-client">
  <TabItem value="ash-cli" label="Using the Ash CLI" default>

The CLI will ask for confirmation before deleting the project. To skip the confirmation, use the `--yes` flag.

```bash title="Command"
ash console project delete 1c464e44-1e2c-46de-a08c-79ac58f6e632
```

```bash title="Output"
> Are you sure you want to delete this project? Yes
Project deleted successfully!
```

  </TabItem>
  <TabItem value="ash-api" label="Using the Ash Console API">

```bash title="Command"
curl -X DELETE https://api.console.ash.center/projects/c84c4a2f-9a65-46a2-b7b9-be8eeceaa2b1 \
  -H "Authorization: Bearer ${access_token}"
```

```bash title="Output"
{
  "cloudRegionsIds": {},
  "created": "2023-10-26T13:38:42.548836",
  "id": "c84c4a2f-9a65-46a2-b7b9-be8eeceaa2b1",
  "name": "my-devnet-project-updated",
  "network": "local",
  "ownerId": "287090ee-7fae-4bd7-9263-d690959edc26"
}
```

  </TabItem>
</Tabs>
