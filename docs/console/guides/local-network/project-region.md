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
| devnet-guide | 08a7...82a8 | Local   |               | 2023-12-21T14:55 |
+--------------+-------------+---------+---------------+------------------+

Switched to project 'devnet-guide' (08a7a46c-19f2-4ce6-94e5-7ec16e5682a8)!
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
| aws/us-east-1 | 2433...98ad | 9954...ac4b           | 2023-12-21T14:57 | Available |
+---------------+-------------+-----------------------+------------------+-----------+
```

:::note
See the [reference](/docs/console/reference/resource-management) for more information about cloud regions lifecycle management.
:::
