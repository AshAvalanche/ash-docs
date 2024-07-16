---
sidebar_position: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Cloud Region Management

:::caution
The Ash Console is currently in beta and **not production-ready**. It is under active development and subject to breaking changes.
:::

The [resources](/docs/console/glossary#resource) of a [project](/docs/console/glossary#project) are deployed across one or more [cloud regions](/docs/console/glossary#cloud-region).

:::info
The Ash Console alpha supports **AWS, Azure, and Google Cloud**.
:::

:::note
**Cloud regions live under a project**. To manage cloud regions, you need to have **at least one project**.

See [Project Management](/docs/console/reference/project-management).
:::

## List a project's cloud regions

<Tabs groupId="ash-console-client">
  <TabItem value="ash-cli" label="Using the Ash CLI" default>

:::tip
The Ash CLI displays information in a table format by default. To get a more detailed output (or for scripting), use the `--json` flag.
:::

To list secrets you have access to, run:

```bash title="Command"
ash console region list
```

```bash title="Output"
Cloud regions of project 'my-devnet-project':
+--------------+-----------+-----------------------+------------+--------+
| Cloud region | Region ID | Cloud creds secret ID | Created at | Status |
+==============+===========+=======================+============+========+
+--------------+-----------+-----------------------+------------+--------+
```

  </TabItem>
  <TabItem value="ash-api" label="Using the Ash Console API">

:::tip
See [Authentication](/docs/console/reference/authentication?ash-console-auth-client=ash-api) for more information on how to get an access token.
:::

The secret API endpoint is `/project/${projectId}/regions`.:

```bash title="Command"
curl https://api.console.ash.center/projects/e05f4f15-f5ca-4ac7-b38c-0726e256c70b/regions \
  -H "Authorization: Bearer ${access_token}"
```

```bash title="Output"
[]
```

  </TabItem>
</Tabs>

## Add a cloud region to a project

:::note
Prior to adding a cloud region, you need to **create a _cloud credentials_ secret**. See [Cloud Credentials](/docs/console/reference/cloud-credentials) for how to create appropriate credentials for each cloud provider.
:::

:::tip
You can also provide the cloud credentials secret name instead of its ID in the `cloudCredentialsSecretId` field.
:::

<Tabs groupId="ash-console-client">
  <TabItem value="ash-cli" label="Using the Ash CLI" default>

To add a cloud region to the current project, use the `region add` command and provide the required secret properties as JSON:

```bash title="Command"
ash console region add '{cloudProvider: google, region: europe-west1, cloudCredentialsSecretId: c705551e-d74d-4d59-9010-4c9432394aa1}'
```

```bash title="Output"
Cloud region successfully added to project 'my-devnet-project'!
+---------------------+-------------+-----------------------+------------------+-----------+
| Cloud region        | Region ID   | Cloud creds secret ID | Created at       | Status    |
+=====================+=============+=======================+==================+===========+
| google/europe-west1 | 9e28...3164 | c705...4aa1           | 2024-04-04T15:53 | Available |
+---------------------+-------------+-----------------------+------------------+-----------+
```

:::tip
Use `ash console region available` to get the list of regions available for each cloud provider.
:::

  </TabItem>
  <TabItem value="ash-api" label="Using the Ash Console API">

To create a new secret, you have to send a `POST` request with the required secret properties as JSON:

```bash title="Command"
curl -X POST https://api.console.ash.center/projects/e05f4f15-f5ca-4ac7-b38c-0726e256c70b/regions \
  -H "Authorization: Bearer ${access_token}" \
  -H "Content-Type: application/json" \
  -d '{"cloudProvider": "google", "region": "europe-west1", "cloudCredentialsSecretId": "c705551e-d74d-4d59-9010-4c9432394aa1"}'
```

```json title="Output"
{
  "id": "9a1a3837-bf36-462b-9671-93f525284b95", 
  "cloudProvider": "google", 
  "region": "europe-west1", 
  "cloudCredentialsSecretId": "c705551e-d74d-4d59-9010-4c9432394aa1", 
  "status": "available", 
  "ownerId": "4d4dee2d-e943-432c-91ee-678975615caa", 
  "projectId": "e05f4f15-f5ca-4ac7-b38c-0726e256c70b", 
  "created": "2024-04-04T15:58:33.636264", 
  "name": "google/europe-west1"
}
```

:::tip
Use the `/regions` endpoint to get the list of regions available for each cloud provider.
:::

  </TabItem>
</Tabs>

## Remove a cloud region from a project

:::caution
Removing a region from a project will recursively delete **all the resources** that belong to it!
:::

:::info
**Removing a cloud region is not instantaneous**. The cloud region will be in status `destroying` for a few seconds/minutes before it is completely removed.
:::

<Tabs groupId="ash-console-client">
  <TabItem value="ash-cli" label="Using the Ash CLI" default>

The CLI will ask for confirmation before deleting the secret. To skip the confirmation, use the `--yes` flag.

```bash title="Command"
ash console region remove google/europe-west1
```

```bash title="Output"
Region 'google/europe-west1' of project 'my-devnet-project':
+---------------------+-------------+-----------------------+------------------+-----------+
| Cloud region        | Region ID   | Cloud creds secret ID | Created at       | Status    |
+=====================+=============+=======================+==================+===========+
| google/europe-west1 | d072...eb29 | c705...4aa1           | 2024-04-04T16:05 | Available |
+---------------------+-------------+-----------------------+------------------+-----------+

> Are you sure you want to remove this region? Yes
Cloud region removed successfully!
```

  </TabItem>
  <TabItem value="ash-api" label="Using the Ash Console API">

The `/` in the region name is replaced with `_` in the API endpoint:

```bash title="Command"
curl -X DELETE https://api.console.ash.center/projects/e05f4f15-f5ca-4ac7-b38c-0726e256c70b/regions/europe_west1 \
  -H "Authorization: Bearer ${access_token}"
```

```bash title="Output"
{
  "id": "9a1a3837-bf36-462b-9671-93f525284b95", 
  "cloudProvider": "google", 
  "region": "europe-west1", 
  "cloudCredentialsSecretId": "c705551e-d74d-4d59-9010-4c9432394aa1", 
  "status": "available", 
  "ownerId": "4d4dee2d-e943-432c-91ee-678975615caa", 
  "projectId": "e05f4f15-f5ca-4ac7-b38c-0726e256c70b", 
  "created": "2024-04-04T15:58:33.636264", 
  "name": "google/europe-west1"
}
```

  </TabItem>
</Tabs>
