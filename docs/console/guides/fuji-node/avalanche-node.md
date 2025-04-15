---
sidebar_position: 6
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 4. Avalanche Node Creation

:::caution
**UPDATE**: The Ash Console open beta has ended. Looking to launch your Avalanche L1? See our latest [Ash Managed L1s offer announcement](https://ashavax.hashnode.dev/announcing-ash-managed-l1s-and-avalanche-builder-credits)!
:::

:::warning
Running this step **will occur costs** on your cloud provider account.
:::

We can finally deploy our Avalanche node [resource](/docs/console/glossary#resource)!

<Tabs>

<TabItem value="console" label="Using the Ash Console" default>

From the [Ash Console](https://console.ash.center) project overview page, navigate to the **Ressources** tab:
- Click on the `Create Node(s)` button.
- Pick a name for your node, e.g., `avalanche-node-01`.
- Select the cloud region you added in the previous step.
- Choose a VM size between `small`, `medium`, and `large` (see [Resource sizes](/docs/console/reference/resource-management#resource-sizes) for details on available sizes).  
  For a testnet node, we recommend the `medium` size.
- Select the `Node ID` secret you created in the previous step.
- (Optional) Configure the node with custom configurations if needed. See the [ash.avalanche.node](/docs/toolkit/ansible-avalanche-collection/reference/roles/avalanche-node) reference doc for a list of all supported configuration keys.
- Click on the `Create` button.

![Ash Console node create](/img/ash-console-fuji-node-create.png)

It will take some time before the node is `Bootstrapped` and `Healthy`. You can get its updated status by clicking on the node name in the list of resources:

![Ash Console node list](/img/ash-console-node-list.png)

You can also SSH to the remote machine to check the node's synchronization progress see [**SSH to a resource**](/docs/console/reference/resource-management#ssh-to-a-resource) for details. You can then check the status of the synchronization of the node by printing the P/C-Chain logs:

```bash
ubuntu@machine-0:~$ ash avax node is-bootstrapped P
Chain 'P' on node '127.0.0.1:9650': Not yet bootstrapped ✗

ubuntu@machine-0:~$ sudo tail /var/log/avalanche/avalanchego/P.log # C.log for the C-Chain
[09-25|14:01:23.956] INFO <P Chain> bootstrap/storage.go:245 executing blocks {"numExecuted": 44389, "numToExecute": 162562, "eta": "4m2s"}
[09-25|14:01:28.985] INFO <P Chain> bootstrap/storage.go:245 executing blocks {"numExecuted": 44419, "numToExecute": 162562, "eta": "4m16s"}
[09-25|14:01:34.041] INFO <P Chain> bootstrap/storage.go:245 executing blocks {"numExecuted": 44455, "numToExecute": 162562, "eta": "4m29s"}
[09-25|14:01:39.117] INFO <P Chain> bootstrap/storage.go:245 executing blocks {"numExecuted": 44490, "numToExecute": 162562, "eta": "4m42s"}
[09-25|14:01:44.117] INFO <P Chain> bootstrap/storage.go:245 executing blocks {"numExecuted": 45770, "numToExecute": 162562, "eta": "4m44s"}
[09-25|14:01:49.117] INFO <P Chain> bootstrap/storage.go:245 executing blocks {"numExecuted": 55056, "numToExecute": 162562, "eta": "3m47s"}
[09-25|14:01:54.117] INFO <P Chain> bootstrap/storage.go:245 executing blocks {"numExecuted": 63149, "numToExecute": 162562, "eta": "3m11s"}
[09-25|14:01:59.117] INFO <P Chain> bootstrap/storage.go:245 executing blocks {"numExecuted": 71478, "numToExecute": 162562, "eta": "2m41s"}
[09-25|14:02:04.117] INFO <P Chain> bootstrap/storage.go:245 executing blocks {"numExecuted": 79412, "numToExecute": 162562, "eta": "2m17s"}
[09-25|14:02:09.152] INFO <P Chain> bootstrap/storage.go:245 executing blocks {"numExecuted": 84092, "numToExecute": 162562, "eta": "2m7s"}
```

Once the node is `Running`, can already query the node `info` endpoint with the `avalanche node info` command:

   ```bash title="Command"
   ash avalanche node info -n 54.241.188.97
   ```

:::note
Your node IP address will be different.
:::

   ```bash title="Output"
  Node '54.241.188.97:9650':
    ID:            NodeID-2rVh5jWQ5xtxRDWNuP91XvciQNPBWWy8n
    Signer (BLS):
      Public key:  0xacea07e9cf535b308fcc3794021d85178a403f2d061d24f3ed87a2f702a49df098ee5e926c15798853711c1eed58d7f6
      PoP:         0x95e7bded3b1c4e790eca8e448e16355add615612c1474fbecf73e3ad4a53541644d870ba50f602aed939f49634621b8e14b427a085de5a220fa9c8001ed9b0a5bb147287f365d0a7cbd704cda6836bcabc0f855623449982fb4af2587fd38ab1
    Network:       fuji
    Public IP:     54.241.188.97
    Staking port:  9651
    Versions:
      AvalancheGo:  avalanchego/1.11.11
      Database:     v1.4.5
      RPC Protocol: 37
      Git commit:   d3c09eb19d6e8c85a4757f17cd5da7e713c2baba
      VMs:
        AvalancheVM: v1.11.11
        Coreth:      v0.13.7
        PlatformVM:  v1.11.11
        Subnet VMs:  []
    Uptime:
      Rewarding stake:  0%
      Weighted average: 0%
   ```

</TabItem>

<TabItem value="cli" label="Using the Ash CLI" default>


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

   **Note:** By default, [state sync](https://docs.avax.network/nodes/configure/chain-configs/C#state-sync) is enabled on the C-Chain.

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

</TabItem>
</Tabs>

:::note
See the [reference](/docs/console/reference/resource-management) for more information about resources lifecycle management.
:::
