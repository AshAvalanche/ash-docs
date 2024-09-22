---
sidebar_position: 6
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 5. Teardown

:::caution
The Ash Console is currently in beta and **not production-ready**. It is under active development and subject to breaking changes.
:::

This section will guide you through the steps to delete the entities created in the previous sections.

<Tabs>

<TabItem value="console" label="Using the Ash Console" default>

## Delete the resource

From the `Resources` tab of the project, click on the `...` and then `Delete` button of the Avalanche node resource:

![Ash Console node delete](/img/ash-console-resource-delete.png)

## Delete the cloud region

From the `Cloud Regions` tab of the project, click on the `...` and then `Delete` button of the cloud region:

![Ash Console cloud region delete](/img/ash-console-cloud-region-delete.png)

:::tip
Deleting the cloud region will also delete all the resources associated with it.
:::

## Delete the `nodeId` secret

From the `Secrets` tab of the project, click on the `...` and then `Delete` button of the Node ID secret:

![Ash Console secret delete](/img/ash-console-secret-delete.png)

## Delete the project

From the `Project overview` tab, click on `Project Settings` and then `Delete` button:

![Ash Console project delete](/img/ash-console-project-delete.png)

</TabItem>

<TabItem value="cli" label="Using the Ash CLI">

## Delete the resource

```bash title="Command"
ash console resource delete -y avalanche-node-01
```

Wait for the resource to be deleted (removed from the list):

```bash title="Command"
ash console resource list
```

```bash title="Output"
Resources of project 'fuji-node-guide':
+---------------+-------------+------+-----------------+------+------------+--------+-------------------+
| Resource name | Resource ID | Type | Cloud region ID | Size | Created at | Status | Resource specific |
+===============+=============+======+=================+======+============+========+===================+
+---------------+-------------+------+-----------------+------+------------+--------+-------------------+
```

## Delete the cloud region

```bash title="Command"
ash console region remove -y azure/francecentral
```

Wait for the cloud region to be removed (removed from the list):

```bash title="Command"
ash console region list
```

```bash title="Output"
Cloud regions of project 'fuji-node-guide':
+--------------+-----------+-----------------------+------------+--------+
| Cloud region | Region ID | Cloud creds secret ID | Created at | Status |
+==============+===========+=======================+============+========+
+--------------+-----------+-----------------------+------------+--------+
```

:::tip
Deleting the cloud region will also delete all the resources associated with it.
:::

## Delete the `nodeId` secret

```bash title="Command"
ash console secret delete -y fuji-node-id-01
```

## Delete the project

```bash title="Command"
ash console project delete -y fuji-node-guide
```

</TabItem>
</Tabs>
