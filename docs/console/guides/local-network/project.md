---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 1. Project Creation

:::caution
The Ash Console is currently in beta and **not production-ready**. It is under active development and subject to breaking changes.
:::

The Avalanche node [resources](/docs/console/glossary#resource) will be deployed into a [cloud region](/docs/console/glossary#cloud-region) of a [project](/docs/console/glossary#project).

## Create a project

<Tabs>

<TabItem value="console" label="Using the Ash Console" default>

From the [Ash Console](https://console.ash.center) homepage, click the **Create a project** button:
- Pick a name for your project, e.g., `devnet-guide`.
- Select the `Local` network.
- Configure the project to change default parameters like the screenshot below of the AvalancheGo versions and installed VMs.
- Click on `Continue` to create the project.

![Ash Console project create](/img/ash-console-devnet-project-create.png)

</TabItem>

<TabItem value="cli" label="Using the Ash CLI">

Create a project on the `local` network for this guide with the `console project create` command:

```bash title="Command"
ash console project create '{name: devnet-guide, network: local}'
```

```bash title="Output"
Project created successfully!
+--------------+-------------+---------+---------------+-----------+------------------+
| Project name | Project ID  | Network | Cloud regions | Resources | Created at       |
+==============+=============+=========+===============+===========+==================+
| devnet-guide | 9a98...ed67 | Local   |               |           | 2024-04-05T09:09 |
+--------------+-------------+---------+---------------+-----------+------------------+

Switched to project 'devnet-guide' (9a98cc14-6022-44a9-8ca1-6d8db557ed67)!
```

:::note
See the [reference](/docs/console/reference/project-management) for more information about projects lifecycle management.
:::

</TabItem>
</Tabs>
