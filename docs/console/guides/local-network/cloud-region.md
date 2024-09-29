---
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 2. Cloud Credentials and Regions setup

:::caution
The Ash Console is currently in beta and **not production-ready**. It is under active development and subject to breaking changes.
:::

## Create a cloud credentials secret

To **deploy the Avalanche node [resource](/docs/console/glossary#resource) into your cloud account/subscription/project**, you need to provide the Console with appropriate credentials.

1. Follow the instructions provided in the [Cloud Credentials reference](/docs/console/reference/cloud-credentials) to create a **cloud credentials [secret](/docs/console/glossary#secret)** in the Console. You can **pick the cloud provider of your choice** among: AWS, Azure, and Google Cloud (more coming soon).

2. **Save the secret ID** for later use. You can always get it with the `console secret list` command:
   ```bash
   ash console secret list
   ```

## Add a cloud region to the project

<Tabs>

<TabItem value="console" label="Using the Ash Console" default>

From the [Ash Console](https://console.ash.center) project overview page, navigate to the **Cloud Regions** tab:
- Click on the `Add Cloud Region` button.
- Select the cloud provider and region you want to use (see [list of supported regions](/docs/console/glossary#cloud-region)).
- Select the cloud credentials secret you created the previous step.
- Click on the `Create` button to add the cloud region to the project.

![Ash Console cloud region create](/img/ash-console-create-cloud-region.png)

</TabItem>

<TabItem value="cli" label="Using the Ash CLI">

Add a cloud region of your choice to the project with the `console region add` (see [list of supported regions](/docs/console/glossary#cloud-region))

:::tip
You need the **name of the cloud credentials secret** created above.
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

</TabItem>
</Tabs>

:::note
See the [reference](/docs/console/reference/resource-management) for more information about cloud regions lifecycle management.
:::
