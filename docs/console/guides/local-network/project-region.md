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
ash console project create '{name: devnet-guide, network: local}'
```

```bash title="Output"
Project created successfully!
+--------------+-------------+---------+---------------+------------------+
| Project name | Project ID  | Network | Cloud regions | Created at       |
+==============+=============+=========+===============+==================+
| devnet-guide | ac00...6673 | Local   |               | 2023-12-21T15:55 |
+--------------+-------------+---------+---------------+------------------+

Switched to project 'devnet-guide' (ac00583b-7b98-4a3a-9a43-2402f8796673)!
```

:::note
See the [reference](/docs/console/reference/project-management) for more information about projects lifecycle management.
:::

## Add a cloud region to the project

Add a cloud region of your choice to the project with the `console region add` ([list of supported regions](/docs/console/glossary#cloud-region))

**Note:** You need the **name of the cloud credentials secret** created in [step 1.](/docs/console/guides/local-network/cloud-credentials)

```bash title="Command"
ash console region add '{
	cloudProvider: aws,
	region: us-east-1,
	cloudCredentialsSecretId: my-aws-creds
}'
```

```bash title="Output"
Cloud region successfully added to project 'devnet-guide'!
+---------------+-------------+-----------------------+------------------+-----------+
| Cloud region  | Region ID   | Cloud creds secret ID | Created at       | Status    |
+===============+=============+=======================+==================+===========+
| aws/us-east-1 | 634d...c9d9 | 2a29...fde2           | 2023-12-21T15:56 | Available |
+---------------+-------------+-----------------------+------------------+-----------+
```

:::note
See the [reference](/docs/console/reference/resource-management) for more information about cloud regions lifecycle management.
:::
