---
sidebar_position: 5
---

# 3. Project and Cloud Region Creation

:::caution
The Ash Console is currently in beta and **not production-ready**. It is under active development and subject to breaking changes.
:::

The Avalanche node [resource](/docs/console/glossary#resource) will be deployed into a [cloud region](/docs/console/glossary#cloud-region) of a [project](/docs/console/glossary#project).

## Create a project

:::tip
The Ash Console subcommands support both JSON and YAML.
:::

Create a project on the `testnet` network for this guide with the `console project create` command:

```bash title="Command"
ash console project create '{name: fuji-node-guide, network: testnet}'
```

```bash title="Output"
Project created successfully!
+-----------------+-------------+---------+---------------+------------------+
| Project name    | Project ID  | Network | Cloud regions | Created at       |
+=================+=============+=========+===============+==================+
| fuji-node-guide | 5a5a...6351 | Testnet |               | 2023-12-21T11:07 |
+-----------------+-------------+---------+---------------+------------------+

Switched to project 'fuji-node-guide' (5a5a0bcf-ec93-4ddc-b6f4-1253e07f6351)!
```

:::note
See the [reference](/docs/console/reference/project-management) for more information about projects lifecycle management.
:::

## Add a cloud region to the project

Add a cloud region of your choice to the project with the `console region add` ([list of supported regions](/docs/console/glossary#cloud-region))

:::tip
You need the **name of the cloud credentials secret** created in [step 1.](/docs/console/guides/fuji-node/cloud-credentials)
:::

```bash title="Command"
ash console region add '{
  cloudProvider: azure,
  region: francecentral,
  cloudCredentialsSecretId: my-az-creds
}'
```

```bash title="Output"
Cloud region successfully added to project 'fuji-node-guide'!
+---------------------+-------------+-----------------------+------------------+-----------+
| Cloud region        | Region ID   | Cloud creds secret ID | Created at       | Status    |
+=====================+=============+=======================+==================+===========+
| azure/francecentral | 3975...8ab1 | f4f4...c596           | 2023-12-21T11:18 | Available |
+---------------------+-------------+-----------------------+------------------+-----------+
```

:::note
See the [reference](/docs/console/reference/resource-management) for more information about cloud regions lifecycle management.
:::
