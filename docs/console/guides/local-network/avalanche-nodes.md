---
sidebar_position: 6
---

# 4. Avalanche Nodes Deployment

:::caution
The Ash Console is currently in alpha and **not production-ready**. It is under active development and subject to breaking changes.
:::

We can finally deploy our 5 Avalanche node [resources](/docs/console/glossary#resource)!

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
       isBootstrapNode: true,
       avalancheNodeConfig: {
         avalanchego_version: 1.10.12
       }
     }
   }'
   ```

   ```bash title="Output"
   Resource successfully created in project 'devnet-guide'!
   +-------------------+-------------+---------------+-----------------+--------+------------------+---------+--------------------------+
   | Resource name     | Resource ID | Type          | Cloud region ID | Size   | Created at       | Status  | Resource specific        |
   +===================+=============+===============+=================+========+==================+=========+==========================+
   | avalanche-node-01 | 9bb2...abc5 | AvalancheNode | 2433...98ad     | Medium | 2023-12-21T15:00 | Pending |  IP address   | None     |
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
      isBootstrapNode: false,
      avalancheNodeConfig: {
        avalanchego_version: 1.10.12
      }
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
   | avalanche-node-01 | 9bb2...abc5 | AvalancheNode | 2433...98ad     | Medium | 2023-12-21T15:00 | Running |  IP address   | 3.210.183.166  |
   |                   |             |               |                 |        |                  |         |  Running      | true           |
   |                   |             |               |                 |        |                  |         |  Bootstrapped | [false]        |
   |                   |             |               |                 |        |                  |         |  Healthy      | [false]        |
   |                   |             |               |                 |        |                  |         |  Restart req. | false          |
   +-------------------+-------------+---------------+-----------------+--------+------------------+---------+--------------------------------+
   ```

2. You can also query the node `info` endpoint with the `avalanche node info` command:

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
        AvalancheGo:  avalanche/1.10.12
        Database:     v1.4.5
        RPC Protocol: 28
        Git commit:   145dfb0dc179d688f45ad44067ef6f9821148b36
        VMs:
          AvalancheVM: v1.10.12
          Coreth:      v0.12.5
          PlatformVM:  v1.10.12
          Subnet VMs:  []
      Uptime:
        Rewarding stake:  100%
        Weighted average: 100%
   ```

   **Note:** Your node IP address will be different.

Your local Avalanche network is now up and running!

:::note
See the [reference](/docs/console/reference/resource-management) for more information about resources lifecycle management.
:::
