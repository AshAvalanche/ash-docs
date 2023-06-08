---
sidebar_position: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Subnet Creation

In this section, we will learn how to use the `ash.avalanche.subnet` role to create a Subnet with an EVM Subnet, and add validator nodes to the Subnet.

:::note
For this tutorial, we will use the [`local`](https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local) inventory provided by the [Ansible Avalanche Getting Started](https://github.com/AshAvalanche/ansible-avalanche-getting-started) repository. See [Create a Local Test Network](./local-test-network) for details.
:::

## Configure the Subnet

All the transactions related to the Subnet creation will be **issued from the `subnet_txs_host` node**. Thus, we configure the Subnet in [`inventories/local/group_vars/subnet_txs_host.yml`](https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local/group_vars/subnet_txs_host.yml).

### Configure the blockchains

The `ash.avalanche.subnet` role allows to configure the blockchains that will be created in the Subnet with the `subnet_blockchains_list` variable. You can edit the blockchains parameters, e.g. its name:

```yaml title="inventories/local/group_vars/subnet_txs_host.yml"
subnet_blockchains_list:
  - name: AshLocalEVM
    vm: subnet-evm
    genesis_data:
      config:
        chainId: 66666
        homesteadBlock: 0
        eip150Block: 0
        [...]
```

### Configure the validators list

There are 2 ways to add validators to the Subnet:

#### The `subnet_validators` group

:::info
You need to have SSH access to the nodes to use this method.
:::

Add validators to the `subnet_validators` group in the inventory. This is the **most convenient way** because the validators' node IDs are automatically resolved on each host (in the [`ash.avalanche.node.add-validator`](https://github.com/AshAvalanche/ansible-avalanche-collection/tree/main/roles/node/tasks/add-validator.yml) playbook).

In the `local` inventory, the `subnet_validators` group is already configured with all the nodes:

```toml title="inventories/local/hosts"
[subnet_validators]
validator0[1:5]
```

##### The `subnet_validators_list` variable

Add validators to the `subnet_validators_list` variable. This is especially usefull to **include third-party nodes** to which you don't have SSH access.

For this tutorial, we will not use this method.

### Configure the Subnet transactions wallet

:::info
The wallet P-Chain address will be used as the Subnet control key.
:::

Creating Subnet, blockchains and adding validators requires using a wallet to **pay for transaction fees**. The private key of the wallet is configured with the `subnet_txs_private_key` variable:

```yaml title="inventories/local/group_vars/subnet_txs_host.yml"
# Private key of the pre-funded account
subnet_txs_private_key: PrivateKey-ewoqjP7PxY4yr3iLTpLisriqt94hdyDFNgchSxGGztUrTXtNN
subnet_txs_key_encoding: cb58
```

You can use another wallet by changing the `subnet_txs_private_key` variable. See [Wallet funding](/docs/toolkit/ash-cli/tutorials/wallet-funding) for more information on how to create and fund a wallet using the Ash CLI.

### Extra configuration

Extra configuration is possible for the Subnet, e.g. the validation start and end times, the validator weight, etc. For a list of all available variables, see the [ash.avalanche.subnet role reference](/docs/toolkit/ansible-avalanche-collection/reference/roles/avalanche-subnet).

## Create the Subnet

Run the [ash.avalanche.create_subnet](https://github.com/AshAvalanche/ansible-avalanche-collection/tree/main/playbooks/create_subnet.yml) playbook to create the Subnet, blockchains and add validators:

```bash
ansible-playbook ash.avalanche.create_subnet -i inventories/local
```

At the end of the Subnet creation, information about the new Subnet is displayed:

```yaml
ok: [validator01] =>
  msg: |-
    The Subnet has been created with its blockchains, and the validators added.
    Make sure to add the Subnet ID to the `avalanchego_track_subnets` list of each validator.
    Subnet ID = p4jUwqZsA2LuSftroCd3zb4ytH8W99oXKuKVZdsty7eQ3rXD6
```

:::info

This playbook calls

1. The `ash.avalanche.subnet` role to create the Subnet, the blockchains and add the validators from the `subnet_validators_list` variable
2. The `ash.avalanche.node.add-validator` playbook to add the validators from the `subnet_validators` group

:::

## Track the Subnet with the validators

The `ash.avalanche.subnet` role does not handle Subnet tracking on validator nodes. The list of tracked Subnets is handled by the `avalanchego_track_subnets` variable in the `ash.avalanche.node` role.

To track the Subnet on our nodes:

1. Add the Subnet ID to the `avalanchego_track_subnets` variable. For this tutorial, this variable is in [`avalanche_nodes.yml`](https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local/group_vars/avalanche_nodes.yml):

   ```yaml title="inventories/local/group_vars/avalanche_nodes.yml"
   avalanchego_track_subnets:
     - p4jUwqZsA2LuSftroCd3zb4ytH8W99oXKuKVZdsty7eQ3rXD6
   ```

2. Run the `ash.avalanche.provision_nodes` to apply the new configuration and restart the :

   ```yaml
   ansible-playbook ash.avalanche.provision_nodes -i inventories/local
   ```

## Check the Subnet validators

After 2 minutes, we can check the validators list of the Subnet:

<Tabs>
  <TabItem value="ash-cli" label="Using Ash CLI" default>

:::note
If not already done, configure the Ash CLI for local Avalanche network by following [Configure the Ash CLI for your network](/docs/toolkit/ash-cli/tutorials/wallet-funding#configure-the-ash-cli-for-your-network).
:::

```bash title="Command"
ash avalanche subnet info p4jUwqZsA2LuSftroCd3zb4ytH8W99oXKuKVZdsty7eQ3rXD6 -n local
```

```bash title="Output"
Subnet 'p4jUwqZsA2LuSftroCd3zb4ytH8W99oXKuKVZdsty7eQ3rXD6':
  Type: Permissioned
  Control keys: ["P-local18jma8ppw3nhx5r4ap8clazz0dps7rv5u00z96u"]
  Threshold:    1
  Blockchains list (1):
  - AshLocalEVM:
    ID:      2dEmExGjJT6MouJRr1PqV4PSQEbScDAjKuPtT6pgqYR5xdUuac
    VM ID:   spePNvBxaWSYL2tB5e2xMmMNBQkXMN8z2XEbz1ML2Aahatwoc
    VM type: SubnetEVM
  Validators list (5):
  - NodeID-7Xhw2mDxuDS44j42TCB6U5579esbSt3Lg
  - NodeID-MFrZFVCXPv5iCn6M9K6XduxGTYp891xXZ
  - NodeID-NFBbbJ4qCmNaCzeW7sxErhvWqvEQMnYcN
  - NodeID-GWPcbFJZFfZreETSoWjPimr846mXEKCtu
  - NodeID-P7oB2McjBGgW2NXXWVYjV8JEDFoW9xDE5
```

:::tip
You can use the `--extended` flag to get more information about the validators, notably their weight and the start/end time of their validation period.
:::

  </TabItem>
  <TabItem value="curl" label="Using cURL">

```bash title="Command"
curl -X POST --data '{
    "jsonrpc": "2.0",
    "method": "platform.getCurrentValidators",
    "params": {
      "subnetID": "p4jUwqZsA2LuSftroCd3zb4ytH8W99oXKuKVZdsty7eQ3rXD6"
    },
    "id": 1
}' -H 'content-type:application/json;' 192.168.60.11:9650/ext/bc/P | jq '.result.validators'
```

```bash title="Output"
[
  {
    "txID": "2RWJL12Uh26aE1i5hcUfs19NvZ4NgGtDVX35SvQeRZKWpxPs4M",
    "startTime": "1686149361",
    "endTime": "1686754041",
    "weight": "1",
    "nodeID": "NodeID-7Xhw2mDxuDS44j42TCB6U5579esbSt3Lg",
    "stakeAmount": "1",
    "connected": true,
    "uptime": "100.0000"
  },
  [...]
]
```

  </TabItem>
</Tabs>

## Connect to the Subnet and start issuing transactions

The Subnet is now ready to be used! You can connect any EVM-compatible wallet (e.g. [MetaMask](https://metamask.io/), [Core](https://core.app), [Frame](https://frame.sh), etc.) to it and start issuing transactions, deploying smart contracts, etc.

Use the following settings to connect to the Subnet:

**Network name**: `AshLocalEVM`  
**New RPC URL**: `http://192.168.60.11:9650/ext/bc/2dEmExGjJT6MouJRr1PqV4PSQEbScDAjKuPtT6pgqYR5xdUuac/rpc`  
**Chain ID**: `66666`  
**Symbol**: `ASH`  
**Explorer URL**: http://192.168.60.19:4000
