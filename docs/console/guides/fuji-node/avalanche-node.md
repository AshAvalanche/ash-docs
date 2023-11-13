---
sidebar_position: 6
---

# 4. Avalanche Node Deployment

:::caution
The Ash Console is currently in alpha and **not production-ready**. It is under active development and subject to breaking changes.
:::

We can finally deploy our Avalanche node [resource](/docs/console/glossary#resource)!

1. Gather the node ID secret ID and cloud credentials secret ID from the previous steps.
2. Create the `avalancheNode` resource with the `console resource create` command:

   ```bash title="Command"
   ash console resource create '{
     "name": "avalanche-node-01",
     "resourceType": "avalancheNode",
     "cloudRegionId": "0c102d85-4e75-414d-abfe-b0679ab0adc7",
     "nodeIdSecretId": "0b3ab7f4-c355-4971-b9d1-74f67414abc0",
     "size": "medium",
     "nodeConfig": {
       "isBootstrapNode": true,
       "avalancheNodeConfig": {
         "avalanchego_network_id": "fuji",
         "avalanchego_version":"1.10.12"
       }
     }
   }'
   ```

   ```bash title="Output"
   Resource successfully created in project '399b6f5b-eed2-4713-8b68-993643babfd0'!
   +--------------------------------------+-------------------+---------------+--------------------------------------+--------+------------------+---------+--------------------------+
   | Resource ID                          | Name              | Type          | Cloud region ID                      | Size   | Created at       | Status  | Resource specific        |
   +======================================+===================+===============+======================================+========+==================+=========+==========================+
   | dfa1e029-bf0b-4333-b45d-be0454536d26 | avalanche-node-01 | AvalancheNode | 0c102d85-4e75-414d-abfe-b0679ab0adc7 | Medium | 2023-11-12T10:41 | Pending |  IP address   | pending  |
   |                                      |                   |               |                                      |        |                  |         |  Running      | false    |
   |                                      |                   |               |                                      |        |                  |         |  Bootstrapped | [false]  |
   |                                      |                   |               |                                      |        |                  |         |  Healthy      | [false]  |
   |                                      |                   |               |                                      |        |                  |         |  Restart req. | false    |
   +--------------------------------------+-------------------+---------------+--------------------------------------+--------+------------------+---------+--------------------------+
   ```

   **Note:** By default, [state sync](https://docs.avax.network/nodes/configure/chain-config-flags#state-sync) is enabled on the C-Chain.

3. It will take some time before the node is `Bootstrapped` and `Healthy`. You can get its updated status with the `console resource info` command:

   ```bash title="Command"
    ash console resource info dfa1e029-bf0b-4333-b45d-be0454536d26
   ```

   ```bash title="Output"
   +--------------------------------------+-------------------+---------------+--------------------------------------+--------+------------------+---------+------------------------------+
   | Resource ID                          | Name              | Type          | Cloud region ID                      | Size   | Created at       | Status  | Resource specific            |
   +======================================+===================+===============+======================================+========+==================+=========+==============================+
   | dfa1e029-bf0b-4333-b45d-be0454536d26 | avalanche-node-01 | AvalancheNode | 0c102d85-4e75-414d-abfe-b0679ab0adc7 | Medium | 2023-11-12T10:41 | Running |  IP address   | 20.74.16.34  |
   |                                      |                   |               |                                      |        |                  |         |  Running      | true         |
   |                                      |                   |               |                                      |        |                  |         |  Bootstrapped | [false]      |
   |                                      |                   |               |                                      |        |                  |         |  Healthy      | [false]      |
   |                                      |                   |               |                                      |        |                  |         |  Restart req. | false        |
   +--------------------------------------+-------------------+---------------+--------------------------------------+--------+------------------+---------+------------------------------+
   ```

4. You can already query the node `info` endpoint with the `avalanche node info` command:

   ```bash title="Command"
   ash avalanche node info -n 20.74.16.34
   ```

   ```bash title="Output"
   Node '20.74.16.34:9650':
     ID:            NodeID-Bdf7YwriWbpY15CPcXH5791uDTqtCYyjw
     Network:       fuji
     Public IP:     20.74.16.34
     Staking port:  9651
     Versions:
       AvalancheGo:  avalanche/1.10.12
       Database:     v1.4.5
       RPC Protocol: 28
       Git commit:   e70a17d9d988b5067f3ef5c4a057f15ae1271ac4
       VMs:
         AvalancheVM: v1.10.8
         Coreth:      v0.12.5
         PlatformVM:  v1.10.8
     Uptime:
       Rewarding stake:  99.9935%
       Weighted average: 99.8935%
   ```

   **Note:** Your node IP address will be different.

:::note
See the [reference](/docs/console/reference/resource-management) for more information about resources lifecycle management.
:::
