---
sidebar_position: 5
---

# 3. Project and Cloud Region Creation

:::caution
The Ash Console is currently in alpha and **not production-ready**. It is under active development and subject to breaking changes.
:::

The Avalanche node [resources](/docs/console/glossary#resource) will be deployed into a [cloud region](/docs/console/glossary#cloud-region) of a [project](/docs/console/glossary#project).

## Create a project

Create a project on the `local` network for this guide with the `console project create` command:

```bash title="Command"
ash console project create '{"name": "devnet-guide", "network": "local"}'
```

```bash title="Output"
Project created successfully!
+--------------------------------------+-------------+---------------------+---------+---------------+------------------+
| Project ID                           | Owner ID    | Name                | Network | Cloud regions | Created at       |
+======================================+=============+=====================+=========+===============+==================+
| 70228a47-5ab1-493b-b921-5c22b83bfbf7 | fce8...3695 | devnet-guide        | Local   |               | 2023-11-23T15:08 |
+--------------------------------------+-------------+---------------------+---------+---------------+------------------+

Switched to project 'local-network-guide' (70228a47-5ab1-493b-b921-5c22b83bfbf7)!
```

:::note
See the [reference](/docs/console/reference/project-management) for more information about projects lifecycle management.
:::

**Note:** Your project ID will be different.

## Add a cloud region to the project

Add a cloud region of your choice to the project with the `console region add` ([list of supported regions](/docs/console/glossary#cloud-region))

**Note:** You need the **ID of the cloud credentials secret** created in [step 1.](/docs/console/guides/local-network/cloud-credentials)

```bash title="Command"
ash console region add '{"cloudProvider": "aws", "region": "us-east-1", "cloudCredentialsSecretId": "69ba9d5e-9454-449f-848c-de14005e68d4"}'
```

```bash title="Output"
Cloud region successfully added to project '70228a47-5ab1-493b-b921-5c22b83bfbf7'!
+--------------------------------------+----------------+--------------+-----------------------+------------------+-----------+
| Region ID                            | Cloud provider | Cloud region | Cloud creds secret ID | Created at       | Status    |
+======================================+================+==============+=======================+==================+===========+
| 08183731-869f-4099-8725-9fe3b56cf0bf | aws            | us-east-1    | 69ba...68d4           | 2023-11-23T15:12 | Available |
+--------------------------------------+----------------+--------------+-----------------------+------------------+-----------+
```

:::note
See the [reference](/docs/console/reference/resource-management) for more information about cloud regions lifecycle management.
:::
