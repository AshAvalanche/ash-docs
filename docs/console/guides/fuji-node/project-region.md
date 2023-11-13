---
sidebar_position: 5
---

# 3. Project and Cloud Region Creation

:::caution
The Ash Console is currently in alpha and **not production-ready**. It is under active development and subject to breaking changes.
:::

The Avalanche node [resource](/docs/console/glossary#resource) will be deployed into a [cloud region](/docs/console/glossary#cloud-region) of a [project](/docs/console/glossary#project).

## Create a project

Create a project on the `testnet` network for this guide with the `console project create` command:

```bash title="Command"
ash console project create '{"name": "fuji-node-guide", "network": "testnet"}'
```

```bash title="Output"
Project created successfully!
+--------------------------------------+-------------+-------------------+---------+---------------+------------------+
| Project ID                           | Owner ID    | Name              | Network | Cloud regions | Created at       |
+======================================+=============+===================+=========+===============+==================+
| 1c464e44-1e2c-46de-a08c-79ac58f6e632 | 2870...dc26 | fuji-node-guide   | Testnet |               | 2023-11-12T10:36 |
+--------------------------------------+-------------+-------------------+---------+---------------+------------------+

Switched to project 'fuji-node-guide' (1c464e44-1e2c-46de-a08c-79ac58f6e632)!
```

:::note
See the [reference](/docs/console/reference/project-management) for more information about projects lifecycle management.
:::

**Note:** Your project ID will be different.

## Add a cloud region to the project

Add a cloud region of your choice to the project with the `console region add` ([list of supported regions](/docs/console/glossary#cloud-region))

**Note:** You need the **ID of the cloud credentials secret** created in [step 1.](/docs/console/guides/fuji-node/cloud-credentials)

```bash title="Command"
ash console region add '{"cloudProvider": "azure", "region": "francecentral", "cloudCredentialsSecretId": "57634714-1827-4871-9ba6-68ea75b7d016"}'
```

```bash title="Output"
Cloud region successfully added to project '1c464e44-1e2c-46de-a08c-79ac58f6e632'!
+--------------------------------------+----------------+---------------+-----------------------+------------------+
| Region ID                            | Cloud provider | Cloud region  | Cloud creds secret ID | Created at       |
+======================================+================+==============+=======================+==================+
| 0c102d85-4e75-414d-abfe-b0679ab0adc7 | azure          | francecentral | 4447...bac1           | 2023-11-12T10:38 |
+--------------------------------------+----------------+---------------+-----------------------+------------------+
```

:::note
See the [reference](/docs/console/reference/resource-management) for more information about cloud regions lifecycle management.
:::
