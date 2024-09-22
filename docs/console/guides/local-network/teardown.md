---
sidebar_position: 9
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 7. Teardown

:::caution
The Ash Console is currently in beta and **not production-ready**. It is under active development and subject to breaking changes.
:::

This section will guide you through the steps to delete the entities created in the previous sections.

<Tabs>

<TabItem value="console" label="Using the Ash Console" default>

## Delete the resources

From the `Resources` tab of the project, click on the `...` and then `Delete` button of the Avalanche nodes, Subnet and Block explorer resources:

![Ash Console node delete](/img/ash-console-resource-delete.png)

## Delete the cloud region

From the `Cloud Regions` tab of the project, click on the `...` and then `Delete` button of the cloud region:

![Ash Console cloud region delete](/img/ash-console-cloud-region-delete.png)

:::tip
Deleting the cloud region will also delete all the resources associated with it.
:::

## Delete the `nodeId` secrets

From the `Secrets` tab of the project, click on the `...` and then `Delete` button of the Node ID secrets:

![Ash Console secret delete](/img/ash-console-secret-delete.png)

## Delete the project

From the `Project overview` tab, click on `Project Settings` and then `Delete` button:

![Ash Console project delete](/img/ash-console-project-delete.png)

</TabItem>

<TabItem value="cli" label="Using the Ash CLI">

## Delete the resources

```bash title="Command"
for i in {1..5}; do
  ash console resource delete -y local-node-0$i
done
# If you created a Subnet
ash console resource delete -y ash-subnet
# If you created a Blockscout
ash console resource delete -y ash-blockscout
```

Wait for the resources to be deleted (removed from the list):

```bash title="Command"
ash console resource list
```

```bash title="Output"
Resources of project 'devnet-guide':
+---------------+-------------+------+-----------------+------+------------+--------+-------------------+
| Resource name | Resource ID | Type | Cloud region ID | Size | Created at | Status | Resource specific |
+===============+=============+======+=================+======+============+========+===================+
+---------------+-------------+------+-----------------+------+------------+--------+-------------------+
```

## Delete the cloud region

```bash title="Command"
ash console region remove -y aws/us-east-1
```

Wait for the cloud region to be removed (removed from the list):

```bash title="Command"
ash console region list
```

```bash title="Output"
Cloud regions of project 'devnet-guide':
+--------------+-----------+-----------------------+------------+--------+
| Cloud region | Region ID | Cloud creds secret ID | Created at | Status |
+==============+===========+=======================+============+========+
+--------------+-----------+-----------------------+------------+--------+
```

:::tip
Deleting the cloud region will also delete all the resources associated with it.
:::

## Delete the `nodeId` secrets

```bash title="Command"
for i in {1..5}; do
  ash console secret delete -y local-node-id-0$i
done
# If you created a Subnet
ash console secret delete -y ewoq-key
```

:::note
You can also keep the `nodeId` secrets for later use as they will be used for all devnet (`local`) networks.
:::

## Delete the project

```bash title="Command"
ash console project delete -y devnet-guide
```

</TabItem>
</Tabs>
