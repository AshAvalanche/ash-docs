---
sidebar_position: 6
---

# 5. Teardown

:::caution
The Ash Console is currently in alpha and **not production-ready**. It is under active development and subject to breaking changes.
:::

This section will guide you through the steps to delete the entities created in the previous sections.

## Delete resource

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

## Delete cloud region

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

## Delete Node ID secret

```bash title="Command"
ash console secret delete -y fuji-node-id-01
```

## Delete project

Delete the project:

```bash title="Command"
ash console project delete -y fuji-node-guide
```
