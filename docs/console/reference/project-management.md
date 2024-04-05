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
+--------------+------------+---------+---------------+-----------+------------+
| Project name | Project ID | Network | Cloud regions | Resources | Created at |
+==============+============+=========+===============+===========+============+
+--------------+------------+---------+---------------+-----------+------------+
```

  </TabItem>
  <TabItem value="ash-api" label="Using the Ash Console API">

:::tip
See [Authentication](/docs/console/reference/authentication?ash-console-auth-client=ash-api) for more information on how to get an access token.
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
ash console project create '{name: my-devnet-project, network: local}'
```

```bash title="Output"
Project created successfully!
+-------------------+-------------+---------+---------------+-----------+------------------+
| Project name      | Project ID  | Network | Cloud regions | Resources | Created at       |
+===================+=============+=========+===============+===========+==================+
| my-devnet-project | d11f...453e | Local   |               |           | 2024-04-04T15:04 |
+-------------------+-------------+---------+---------------+-----------+------------------+

Switched to project 'my-devnet-project' (d11ff0c8-8f09-4991-9832-bd79df9b453e)!
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
  "id": "5064c6a6-1542-43d9-b8bb-9ce9502347ff", 
  "ownerId": "4d4dee2d-e943-432c-91ee-678975615caa", 
  "name": "my-devnet-project", 
  "network": "local", 
  "sharedResourceConfig": {"avalancheNodeConfig": {}}, 
  "created": "2024-04-04T15:15:10.022849", 
  "cloudRegionsIds": {}, 
  "resourcesIds": {}
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
Current project: 'my-devnet-project' (5064c6a6-1542-43d9-b8bb-9ce9502347ff)
```

You can switch between projects:

```bash title="Command"
ash console project select my-devnet-project
```

```bash title="Output"
Switched to project 'my-devnet-project' (5064c6a6-1542-43d9-b8bb-9ce9502347ff)!
```

  </TabItem>
  <TabItem value="ash-api" label="Using the Ash Console API">

This feature does not exist in the Ash Console API.

  </TabItem>
</Tabs>

## Update a project

:::tip
You can also provide the project name instead of its ID.
:::

<Tabs groupId="ash-console-client">
  <TabItem value="ash-cli" label="Using the Ash CLI" default>

The only propery that can be updated is the project name:

```bash title="Command"
ash console project update 5064c6a6-1542-43d9-b8bb-9ce9502347ff '{name: my-devnet-project-updated}'
```

```bash title="Output"
Project updated successfully!
+---------------------------+-------------+---------+---------------+-----------+------------------+
| Project name              | Project ID  | Network | Cloud regions | Resources | Created at       |
+===========================+=============+=========+===============+===========+==================+
| my-devnet-project-updated | 5064...47ff | Local   |               |           | 2024-04-04T15:15 |
+---------------------------+-------------+---------+---------------+-----------+------------------+
```

  </TabItem>
  <TabItem value="ash-api" label="Using the Ash Console API">

The only propery that can be updated is the project name by sending a `PATCH` to the `projects/${projectId}` endpoint:

```bash title="Command"
curl -X PATCH https://api.console.ash.center/projects/5064c6a6-1542-43d9-b8bb-9ce9502347ff \
  -H "Authorization: Bearer ${access_token}" \
  -H "Content-Type: application/json" \
  -d '{"name": "my-devnet-project-updated"}'
```

```json title="Output"
{
  "id": "5064c6a6-1542-43d9-b8bb-9ce9502347ff", 
  "ownerId": "4d4dee2d-e943-432c-91ee-678975615caa", 
  "name": "my-devnet-project-updated", 
  "network": "local", 
  "sharedResourceConfig": {"avalancheNodeConfig": {}}, 
  "created": "2024-04-04T15:15:10.022849", 
  "cloudRegionsIds": {}, 
  "resourcesIds": {}
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
ash console project delete my-devnet-project-updated
```

```bash title="Output"
> Are you sure you want to delete this project? Yes
Project deleted successfully!
```

  </TabItem>
  <TabItem value="ash-api" label="Using the Ash Console API">

```bash title="Command"
curl -X DELETE https://api.console.ash.center/projects/my-devnet-project-updated \
  -H "Authorization: Bearer ${access_token}"
```

```bash title="Output"
{
  "id": "5064c6a6-1542-43d9-b8bb-9ce9502347ff", 
  "ownerId": "4d4dee2d-e943-432c-91ee-678975615caa", 
  "name": "my-devnet-project-updated", 
  "network": "local", 
  "sharedResourceConfig": {"avalancheNodeConfig": {}}, 
  "created": "2024-04-04T15:15:10.022849", 
  "cloudRegionsIds": {}, 
  "resourcesIds": {}
}
```

  </TabItem>
</Tabs>
