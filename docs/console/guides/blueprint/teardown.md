---
sidebar_position: 5
---

# 3. Teardown

:::caution
**UPDATE**: The Ash Console open beta has ended. Looking to launch your Avalanche L1? See our latest [Ash Managed L1s offer announcement](https://ashavax.hashnode.dev/announcing-ash-managed-l1s-and-avalanche-builder-credits)!
:::

This section will guide you through the steps to delete the entities created in the previous sections.

## Delete the resources

```bash title="Command"
for i in {1..5}; do
  ash console resource delete -y local-node-0$i
done
# If you created a Subnet
ash console resource delete -y ash-subnet
```

Wait for the resources to be deleted (removed from the list):

```bash title="Command"
ash console resource list
```

```bash title="Output"
Resources of project 'ash-devnet':
+---------------+-------------+------+-----------------+------+------------+--------+-------------------+
| Resource name | Resource ID | Type | Cloud region ID | Size | Created at | Status | Resource specific |
+===============+=============+======+=================+======+============+========+===================+
+---------------+-------------+------+-----------------+------+------------+--------+-------------------+
```

## Delete the cloud region

```bash title="Command"
ash console region remove -y "$CLOUD_PROVIDER/$CLOUD_REGION"
```

Wait for the cloud region to be removed (removed from the list):

```bash title="Command"
ash console region list
```

```bash title="Output"
Cloud regions of project 'ash-devnet':
+--------------+-----------+-----------------------+------------+--------+
| Cloud region | Region ID | Cloud creds secret ID | Created at | Status |
+==============+===========+=======================+============+========+
+--------------+-----------+-----------------------+------------+--------+
```

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
ash console project delete -y ash-devnet
```
