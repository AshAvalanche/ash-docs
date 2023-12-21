---
sidebar_position: 6
---

# 4. Avalanche Nodes Deployment

:::caution
The Ash Console is currently in alpha and **not production-ready**. It is under active development and subject to breaking changes.
:::

We can finally deploy our 5 Avalanche node [resources](/docs/console/glossary#resource)!

## Set shared configuration at the project level

It is common that **resources of the same type share some configuration**. For example, all the Avalanche nodes of our devnet will have the **same AvalancheGo version**.

We will use the `sharedResourceConfig` field of the project to set this shared configuration:

```bash title="Command"
ash console project update devnet-guide '{
  sharedResourceConfig: {
    avalancheNodeConfig: {
      avalanchego_version: 1.10.17
    }
  }
}'
```

:::info
To see the `sharedResourceConfig` of a project, use the `console project info` command with the `--json` flag:

```bash title="Command"
ash console project info devnet-guide --json | jq
```

```bash title="Output"
{
  "cloudRegionsIds": {
    "aws/us-east-1": "634d78b0-c8ba-44ac-a08b-5b27300ac9d9"
  },
  "created": "2023-12-21T15:55:06.285003",
  "id": "ac00583b-7b98-4a3a-9a43-2402f8796673",
  "name": "devnet-guide",
  "network": "local",
  "ownerId": "287090ee-7fae-4bd7-9263-d690959edc26",
  "resourcesIds": {},
  "sharedResourceConfig": {
    "avalancheNodeConfig": {
      "avalanchego_version": "1.10.17"
    }
  }
}
```

:::

## Bootstrap node creation

1. Gather the cloud region secret ID from the previous steps.
2. Create the `avalancheNode` "avalanche-node-01" resource with the `console resource create` command:

   ```bash title="Command"
   ash console resource create '{
     name: avalanche-node-01,
     resourceType: avalancheNode,
     cloudRegionId: aws/us-east-1,
     nodeIdSecretId: local-node-id-01,
     size: medium,
     nodeConfig: {
       isBootstrapNode: true
     }
   }'
   ```

   ```bash title="Output"
   Resource successfully created in project 'devnet-guide'!
   +-------------------+-------------+---------------+-----------------+--------+------------------+---------+--------------------------+
   | Resource name     | Resource ID | Type          | Cloud region ID | Size   | Created at       | Status  | Resource specific        |
   +===================+=============+===============+=================+========+==================+=========+==========================+
   | avalanche-node-01 | 9419...6722 | AvalancheNode | 634d...c9d9     | Medium | 2023-12-21T16:01 | Pending |  IP address   | None     |
   |                   |             |               |                 |        |                  |         |  Running      | false    |
   |                   |             |               |                 |        |                  |         |  Bootstrapped | [false]  |
   |                   |             |               |                 |        |                  |         |  Healthy      | [false]  |
   |                   |             |               |                 |        |                  |         |  Restart req. | false    |
   +-------------------+-------------+---------------+-----------------+--------+------------------+---------+--------------------------+
   ```

   **Note:** See [Resource sizes](/docs/console/reference/resource-management#resource-sizes) for available resource sizes.

:::tip
`avalanche-node-01` is the "bootstrap" node. It has a different configuration than the other nodes of the local Avalanche network. See the [Create a resource](/docs/console/reference/resource-management#create-a-resource) for more information.
:::

## Other nodes creation

Create the 4 other `avalancheNode` resources with the `console resource create` command:

```bash title="Command"
for i in {2..5}; do
  ash console resource create "{
    name: avalanche-node-0$i,
    resourceType: avalancheNode,
    cloudRegionId: aws/us-east-1,
    nodeIdSecretId: local-node-id-0$i,
    size: medium,
    nodeConfig: {
      isBootstrapNode: false
    },
    nodeBootstrapResourceId: avalanche-node-01
  }"
done
```

:::caution

- The above command takes about ~30 seconds to complete.
- Providing a `nodeBootstrapResourceId` is only supported for resources created in the **same cloud region** as the bootstrap node.

:::

## Health

1. It will take a few minutes before the local network is `Bootstrapped` and `Healthy`. You can get its updated status with the `console resource info` command:

   ```bash title="Command"
    ash console resource info avalanche-node-01
   ```

   ```bash title="Output"
   Resource 'avalanche-node-01' of project 'devnet-guide':
   +-------------------+-------------+---------------+-----------------+--------+------------------+---------+--------------------------------+
   | Resource name     | Resource ID | Type          | Cloud region ID | Size   | Created at       | Status  | Resource specific              |
   +===================+=============+===============+=================+========+==================+=========+================================+
   | avalanche-node-01 | 9419...6722 | AvalancheNode | 634d...c9d9     | Medium | 2023-12-21T16:01 | Running |  IP address   | 3.210.183.166  |
   |                   |             |               |                 |        |                  |         |  Running      | true           |
   |                   |             |               |                 |        |                  |         |  Bootstrapped | [false]        |
   |                   |             |               |                 |        |                  |         |  Healthy      | [false]        |
   |                   |             |               |                 |        |                  |         |  Restart req. | false          |
   +-------------------+-------------+---------------+-----------------+--------+------------------+---------+--------------------------------+
   ```

2. Once a node is `Running`, you can also query the node `info` endpoint with the `avalanche node info` command:

   ```bash title="Command"
   ash avalanche node info -n 3.210.183.166
   ```

   ```bash title="Output"
    Node '3.210.183.166:9650':
      ID:            NodeID-7Xhw2mDxuDS44j42TCB6U5579esbSt3Lg
      Network:       local
      Public IP:     3.210.183.166
      Staking port:  9651
      Versions:
        AvalancheGo:  avalanche/1.10.17
        Database:     v1.4.5
        RPC Protocol: 28
        Git commit:   145dfb0dc179d688f45ad44067ef6f9821148b36
        VMs:
          AvalancheVM: v1.10.17
          Coreth:      v0.12.5
          PlatformVM:  v1.10.17
          Subnet VMs:  []
      Uptime:
        Rewarding stake:  100%
        Weighted average: 100%
   ```

   :::note
   Your node IP address will be different.
   :::

Your local Avalanche network is now up and running!

:::note
See the [reference](/docs/console/reference/resource-management) for more information about resources lifecycle management.
:::
