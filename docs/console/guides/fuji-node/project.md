---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 1. Project Creation

:::caution
The Ash Console is currently in beta and **not production-ready**. It is under active development and subject to breaking changes.
:::

The Avalanche node [resource](/docs/console/glossary#resource) will be deployed into a [cloud region](/docs/console/glossary#cloud-region) of a [project](/docs/console/glossary#project).

## Create a project

<Tabs>

<TabItem value="console" label="Using the Ash Console" default>

From the [Ash Console](https://console.ash.center) homepage, click the **Create a project** button:
- Pick a name for your project, e.g., `fuji-node-guide`.
- Select the `Testnet (Fuji)` network.
- (Optional) Configure the project configuration to change defaults parameters like the AvalancheGo versions or installed VMs.
- Click on `Continue` to create the project.

![Ash Console project create](/img/ash-console-fuji-project-create.png)

</TabItem>

<TabItem value="cli" label="Using the Ash CLI">

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

</TabItem>
</Tabs>

:::note
See the [reference](/docs/console/reference/project-management) for more information about projects lifecycle management.
:::
