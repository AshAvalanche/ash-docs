---
sidebar_position: 6
---

# 4. Avalanche Node Deployment

:::caution
The Ash Console is currently in alpha and **not production-ready**. It is under active development and subject to breaking changes.
:::

We can finally deploy our Avalanche node [resource](/docs/console/glossary#resource)!

:::tip
The Ash Console subcommands support both JSON and YAML.
:::

1. Gather the node ID secret ID and cloud region ID from the previous steps.
2. Create the `avalancheNode` resource with the `console resource create` command:

   ```bash title="Command"
   ash console resource create '{
     name: avalanche-node-01,
     resourceType: avalancheNode,
     cloudRegionId: azure/francecentral,
     nodeIdSecretId: fuji-node-id-01,
     size: medium,
     nodeConfig: {
       avalancheNodeConfig: {
         avalanchego_version: 1.10.17
       }
     }
   }'
   ```

   ```bash title="Output"
   Resource successfully created in project 'fuji-node-guide'!
   +-------------------+-------------+---------------+-----------------+--------+------------------+---------+--------------------------+
   | Resource name     | Resource ID | Type          | Cloud region ID | Size   | Created at       | Status  | Resource specific        |
   +===================+=============+===============+=================+========+==================+=========+==========================+
   | avalanche-node-01 | 1dda...b457 | AvalancheNode | 3975...8ab1     | Medium | 2023-12-21T11:21 | Pending |  IP address   | None     |
   |                   |             |               |                 |        |                  |         |  Running      | false    |
   |                   |             |               |                 |        |                  |         |  Bootstrapped | [false]  |
   |                   |             |               |                 |        |                  |         |  Healthy      | [false]  |
   |                   |             |               |                 |        |                  |         |  Restart req. | false    |
   +-------------------+-------------+---------------+-----------------+--------+------------------+---------+--------------------------+
   ```

   **Note:** By default, [state sync](https://docs.avax.network/nodes/configure/chain-config-flags#state-sync) is enabled on the C-Chain.

   **Note:** See [Resource sizes](/docs/console/reference/resource-management#resource-sizes) for available resource sizes.

3. It will take some time before the node is `Bootstrapped` and `Healthy`. You can get its updated status with the `console resource info` command:

   ```bash title="Command"
    ash console resource info avalanche-node-01
   ```

   ```bash title="Output"
   Resource 'avalanche-node-01' of project 'fuji-node-guide':
   +-------------------+-------------+---------------+-----------------+--------+------------------+-------------+--------------------------------+
   | Resource name     | Resource ID | Type          | Cloud region ID | Size   | Created at       | Status      | Resource specific              |
   +===================+=============+===============+=================+========+==================+=============+================================+
   | avalanche-node-01 | 1dda...b457 | AvalancheNode | 3975...8ab1     | Medium | 2023-12-21T11:21 | Configuring |  IP address   | 20.199.59.152  |
   |                   |             |               |                 |        |                  |             |  Running      | false          |
   |                   |             |               |                 |        |                  |             |  Bootstrapped | [false]        |
   |                   |             |               |                 |        |                  |             |  Healthy      | [false]        |
   |                   |             |               |                 |        |                  |             |  Restart req. | false          |
   +-------------------+-------------+---------------+-----------------+--------+------------------+-------------+--------------------------------+
   ```

4. Once the node is `Running`, can already query the node `info` endpoint with the `avalanche node info` command:

   ```bash title="Command"
   ash avalanche node info -n 20.199.59.152
   ```

   :::note
   Your node IP address will be different.
   :::

   ```bash title="Output"
   Node '20.199.59.152:9650':
     ID:            NodeID-6BbSeHZcmHzN2MAXvQu83FHostsxVGvHC
     Network:       fuji
     Public IP:     20.199.59.152
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
       Rewarding stake:  0%
       Weighted average: 0%
   ```

:::note
See the [reference](/docs/console/reference/resource-management) for more information about resources lifecycle management.
:::
