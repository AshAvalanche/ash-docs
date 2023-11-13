---
sidebar_position: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Cloud Region Management

:::caution
The Ash Console is currently in alpha and **not production-ready**. It is under active development and subject to breaking changes.
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
Cloud regions of project 'f3cbcada-8ba7-4ce8-b0ef-e4874b24da2b':
+-----------+----------------+--------------+-----------------------+------------+
| Region ID | Cloud provider | Cloud region | Cloud creds secret ID | Created at |
+===========+================+==============+=======================+============+
+-----------+----------------+--------------+-----------------------+------------+
```

  </TabItem>
  <TabItem value="ash-api" label="Using the Ash Console API">

:::tip
See [Authentication](/docs/console/tutorials/authentication?ash-console-auth-client=ash-api) for more information on how to get an access token.
:::

The secret API endpoint is `/project/${projectId}/regions`.:

```bash title="Command"
curl https://api.console.ash.center/projects/f3cbcada-8ba7-4ce8-b0ef-e4874b24da2b/regions \
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

<Tabs groupId="ash-console-client">
  <TabItem value="ash-cli" label="Using the Ash CLI" default>

To add a cloud region to the current project, use the `region add` command and provide the required secret properties as JSON:

```bash title="Command"
ash console region add '{"cloudProvider": "aws", "region": "us-east-1", "cloudCredentialsSecretId": "4447cba1-e43c-45a4-8a9d-dbebef81bac1"}'
```

```bash title="Output"
Cloud region successfully added to project 'f3cbcada-8ba7-4ce8-b0ef-e4874b24da2b'!
+--------------------------------------+----------------+--------------+-----------------------+------------------+
| Region ID                            | Cloud provider | Cloud region | Cloud creds secret ID | Created at       |
+======================================+================+==============+=======================+==================+
| 0c102d85-4e75-414d-abfe-b0679ab0adc7 | aws            | us-east-1    | 4447...bac1           | 2023-11-07T16:52 |
+--------------------------------------+----------------+--------------+-----------------------+------------------+
```

:::tip
Use `ash console region available` to get the list of regions available for each cloud provider.
:::

  </TabItem>
  <TabItem value="ash-api" label="Using the Ash Console API">

To create a new secret, you have to send a `POST` request with the required secret properties as JSON:

```bash title="Command"
curl -X POST https://api.console.ash.center/projects/f3cbcada-8ba7-4ce8-b0ef-e4874b24da2b/regions \
  -H "Authorization: Bearer ${access_token}" \
  -H "Content-Type: application/json" \
  -d '{"cloudProvider": "aws", "region": "us-east-2", "cloudCredentialsSecretId": "4447cba1-e43c-45a4-8a9d-dbebef81bac1"}'
```

```json title="Output"
{
  "cloudCredentialsSecretId": "4447cba1-e43c-45a4-8a9d-dbebef81bac1",
  "cloudProvider": "aws",
  "created": "2023-11-07T16:54:27.662311",
  "id": "89b64711-8cf8-4634-8433-10652efecb95",
  "name": "aws/us-east-2",
  "ownerId": "287090ee-7fae-4bd7-9263-d690959edc26",
  "projectId": "f3cbcada-8ba7-4ce8-b0ef-e4874b24da2b",
  "region": "us-east-2",
  "status": "available"
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
ash console region remove aws/us-east-1
```

```bash title="Output"
> Are you sure you want to remove this region? Yes
Cloud region removed successfully!
```

  </TabItem>
  <TabItem value="ash-api" label="Using the Ash Console API">

The `/` in the region name is replaced with `_` in the API endpoint:

```bash title="Command"
curl -X DELETE https://api.console.ash.center/projects/f3cbcada-8ba7-4ce8-b0ef-e4874b24da2b/regions/aws_us-east-2 \
  -H "Authorization: Bearer ${access_token}"
```

```bash title="Output"
{
  "cloudCredentialsSecretId": "4447cba1-e43c-45a4-8a9d-dbebef81bac1",
  "cloudProvider": "aws",
  "created": "2023-11-07T16:54:27.662311",
  "id": "89b64711-8cf8-4634-8433-10652efecb95",
  "name": "aws/us-east-2",
  "ownerId": "287090ee-7fae-4bd7-9263-d690959edc26",
  "projectId": "f3cbcada-8ba7-4ce8-b0ef-e4874b24da2b",
  "region": "us-east-2",
  "status": "available"
}
```

  </TabItem>
</Tabs>
