---
sidebar_position: 8
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 6. Block explorer Deployment

:::caution
The Ash Console is currently in alpha and **not production-ready**. It is under active development and subject to breaking changes.
:::

In this section, we will create a [Blockscout](https://www.blockscout.com/) [resource](/docs/console/glossary#resource) on our local network.

In addition to indexing blocks, this instance will be able to verify smart contracts. 

## Requirements

Before setting up [Blockscout](https://www.blockscout.com/), we must deploy at least one [local Subnet](/docs/console/guides/local-network/subnet) to be indexed and wait until it's ready, as described in the [previous section](/docs/console/guides/local-network/subnet#subnet-information).

## Blockscout creation


<Tabs>

<TabItem value="console" label="Using the Ash Console" default>


From the [Ash Console](https://console.ash.center) project overview page, navigate to the **Block Explorers** tab:
- Click on the `Create Block Explorer` button.
- Pick a name for your Blockscout instance, e.g., `ash-blockscout`.
- Select the cloud region you added in the previous step.
- Choose a VM size between `small`, `medium`, and `large` (see [Resource sizes](/docs/console/reference/resource-management#resource-sizes) for details on available sizes).
- Select the `ash-subnet` Subnet resource you created in the previous step.
- (Optional) Configure the block explorer with custom configurations if needed.
- Click on the `Create` button.

:::tip
The `blockscoutConfig` field is following the same structure as the [Ansible Avalanche Collection](/docs/toolkit/ansible-avalanche-collection/introduction)'s `ash.avalanche.evm.blockscout` role. See [Blockscout configuration](/docs/toolkit/ansible-avalanche-collection/reference/roles/avalanche-evm-blockscout) for more information on how to configure blockscout.
:::

![Ash Console block explorer create](/img/ash-console-block-explorer-create.png)

:::info
Unlike other resources, there is no secrets to create here.
:::

## Blockscout endpoint

After a few minutes, we can get the details on the Blockscout, including its URL:

![Ash Console block explorer URL](/img/ash-console-block-explorer-url.png)

</TabItem>

<TabItem value="cli" label="Using the Ash CLI" default>

The following command will create a [Blockscout](https://www.blockscout.com/) instance.

```bash title="Command"
ash console resource create '{
  name: ash-blockscout, 
  resourceType: blockscout, 
  cloudRegionId: aws/us-east-1, 
  size: medium, 
  subnetResourceId: ash-subnet, 
  blockscoutConfig: {
    blockscout_frontend_env_variables: {
      NEXT_PUBLIC_NETWORK_NAME: Ash-network
    }
  }
}'
```

:::tip
The `blockscoutConfig` field is following the same structure as the [Ansible Avalanche Collection](/docs/toolkit/ansible-avalanche-collection/introduction)'s `ash.avalanche.evm.blockscout` role. See [Blockscout configuration](/docs/toolkit/ansible-avalanche-collection/reference/roles/avalanche-evm-blockscout) for more information on how to configure blockscout.
:::

```bash title="Output"
Resource successfully created in project 'ash-devnet'!
+----------------+-------------+------------+---------------+--------+------------------+---------+----------------------+
| Resource name  | Resource ID | Type       | Cloud region  | Size   | Created at       | Status  | Resource specific    |
+================+=============+============+===============+========+==================+=========+======================+
| ash-blockscout | e1d6...9a0b | Blockscout | aws/us-east-1 | Medium | 2024-06-07T21:20 | Pending |  IP address |        |
|                |             |            |               |        |                  |         |  Running    | false  |
+----------------+-------------+------------+---------------+--------+------------------+---------+----------------------+
```

:::info
Unlike other resources, there is no secrets to create here.
:::

## Blockscout endpoint

After a few minutes, we can get the details on the Blockscout:

```bash title="Command"
ash console resource info ash-blockscout
```

```bash title="Output"
Resource 'ash-blockscout' of project 'ash-devnet':
+----------------+-------------+------------+---------------+--------+------------------+---------+------------------------------+
| Resource name  | Resource ID | Type       | Cloud region  | Size   | Created at       | Status  | Resource specific            |
+================+=============+============+===============+========+==================+=========+==============================+
| ash-blockscout | e1d6...9a0b | Blockscout | aws/us-east-1 | Medium | 2024-06-07T21:20 | Running |  IP address | 44.210.241.77  |
|                |             |            |               |        |                  |         |  Running    | true           |
+----------------+-------------+------------+---------------+--------+------------------+---------+------------------------------+
```

The CLI provides a powerful helper to get the URL where the user interface is.

```bash title="Command"
ash console helper blockscout-url ash-blockscout
```

```bash title="Output"
Explorer URL:
  http:/44.210.241.77:80
```

</TabItem>
</Tabs>

:::note
See the [reference](/docs/console/reference/resource-management) for more information about resources lifecycle management.
:::

