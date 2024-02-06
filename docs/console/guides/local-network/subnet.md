---
sidebar_position: 7
---

# 5. Subnet Creation

:::caution
The Ash Console is currently in alpha and **not production-ready**. It is under active development and subject to breaking changes.
:::

In this section, we will create a Subnet [resource](/docs/console/glossary#resource) on our local network.

## Control key creation

Before creating a Subnet, we need to create a `wallet` [secret](/docs/console/glossary#secret). This wallet will be use to sign the **Subnet transactions** (creation, validator management, etc.) and the P-Chain address will be used as the **control key** of the Subnet.

To make things easier, we will use the `ewoq` address which is pre-funded on the local network.

```bash title="Command"
ash console secret create '{
  name: ewoq-key,
  secretType: wallet,
  pChainAddress: P-fuji18jma8ppw3nhx5r4ap8clazz0dps7rv5u6wmu4t,
  privateKey: PrivateKey-ewoqjP7PxY4yr3iLTpLisriqt94hdyDFNgchSxGGztUrTXtNN,
  privateKeyFormat: cb58
}'
```

```bash title="Output"
Secret created successfully!
+-------------+-------------+--------+------------------+---------+
| Secret name | Secret ID   | Type   | Created at       | Used by |
+=============+=============+========+==================+=========+
| ewoq-key    | 657b...949e | Wallet | 2024-01-30T13:40 | 0       |
+-------------+-------------+--------+------------------+---------+
```

:::warning
Do not use this wallet as control key in production!
:::

## Subnet creation

The following command will create a [Subnet EVM](https://github.com/ava-labs/subnet-evm) blockchain with a standard [genesis](https://docs.avax.network/build/subnet/upgrade/customize-a-subnet#genesis) configuration.

```bash title="Command"
ash console resource create '{
  name: ash-subnet,
  resourceType: avalancheSubnet,
  cloudRegionId: aws/us-east-1,
  subnetControlKeySecretId: ewoq-key,
  subnetNodesResourceIds: [
    local-node-01,
    local-node-02,
    local-node-03,
    local-node-04,
    local-node-05,
  ],
  subnetConfig: {
    avalancheSubnetConfig: {
      subnet_blockchains_list: [
          {
            name: AshLocalEVM,
            vm: subnet-evm,
            genesis_data: {
              "config": {
                "chainId": 66666,
                "homesteadBlock": 0,
                "eip150Block": 0,
                "eip150Hash": "0x2086799aeebeae135c246c65021c82b4e15a2c451340993aacfd2751886514f0",
                "eip155Block": 0,
                "eip158Block": 0,
                "byzantiumBlock": 0,
                "constantinopleBlock": 0,
                "petersburgBlock": 0,
                "istanbulBlock": 0,
                "muirGlacierBlock": 0,
                "subnetEVMTimestamp": 0,
                "feeConfig": {
                  "gasLimit": 8000000,
                  "minBaseFee": 25000000000,
                  "targetGas": 15000000,
                  "baseFeeChangeDenominator": 36,
                  "minBlockGasCost": 0,
                  "maxBlockGasCost": 1000000,
                  "targetBlockRate": 2,
                  "blockGasCostStep": 200000
                }
              },
              "alloc": {
                "8db97C7cEcE249c2b98bDC0226Cc4C2A57BF52FC": {
                  "balance": "0x295BE96E64066972000000"
                }
              },
              "nonce": "0x0",
              "timestamp": "0x0",
              "extraData": "0x00",
              "gasLimit": "0x7A1200",
              "difficulty": "0x0",
              "mixHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
              "coinbase": "0x0000000000000000000000000000000000000000",
              "number": "0x0",
              "gasUsed": "0x0",
              "parentHash": "0x0000000000000000000000000000000000000000000000000000000000000000"
          }
        }
      ]
    }
  },
}'
```

:::tip
The `avalancheSubnetConfig` field is following the same structure as the [Ansible Avalanche Collection](/docs/toolkit/ansible-avalanche-collection/introduction)'s `ash.avalanche_subnet` role. See [Blockchain configuration](/docs/toolkit/ansible-avalanche-collection/reference/roles/avalanche-subnet#blockchain-configuration) for more information on how to generate a custom genesis configuration.
:::

```bash title="Output"
Resource successfully created in project 'ash-devnet'!
+---------------+-------------+-----------------+---------------+-------+------------------+---------+-------------------+
| Resource name | Resource ID | Type            | Cloud region  | Size  | Created at       | Status  | Resource specific |
+===============+=============+=================+===============+=======+==================+=========+===================+
| ash-subnet    | 542c...f94e | AvalancheSubnet | aws/us-east-1 | Small | 2024-01-30T13:58 | Pending |  ID         |     |
|               |             |                 |               |       |                  |         |  Validators | 0   |
+---------------+-------------+-----------------+---------------+-------+------------------+---------+-------------------+
```

:::info
Unlike the `avalancheNode` resource, there is no concept of `size` for the `avalancheSubnet` resource. The Ash Console will create a small instance (e.g.: `t2.micro`) that will serve as the Subnet control plane.
:::

## Subnet information

After a few minutes, we can get the Subnet ID, control keys, blockchains, and validator nodes information from the `subnetStatus` field returned by the `console resource info` command:

```bash title="Command"
ash console resource info ash-subnet --json | jq '.subnetStatus'
```

:::tip
We use the `--json` flag to get the extended information about the Subnet. All those information cannot be displayed in a table format.
:::

```python title="Output"
{
  "blockchains": [
    {
      "id": "RfX8YRUHePxFENBZFwaNt1tP6CR6RQ4hJJ5AqYv49LRoSKniK",
      "name": "AshLocalEVM",
      "vm_id": "srEXiWaHuhNyGwPUi444Tu47ZEDwxTWrbQiuD7FmgSAQ6X7Dy",
      "vm_type": "SubnetEVM"
    }
  ],
  "controlKeys": [
    "P-local18jma8ppw3nhx5r4ap8clazz0dps7rv5u00z96u"
  ],
  "id": "29uVeLPJB1eQJkzRemU8g8wZDw5uJRqpab5U2mX9euieVwiEbL",
  "pendingValidators": [],
  "subnetType": "Permissioned",
  "threshold": 1,
  "validators": [
    {
      "connected": true,
      "end_time": 1707486609,
      "node_id": "NodeID-MFrZFVCXPv5iCn6M9K6XduxGTYp891xXZ",
      "stake_amount": 100,
      "start_time": 1706881809,
      "tx_id": "DhEgYijBur6QDUDgUMpmDAyF5XGyq6JwG919B8bkryDLijvua",
      "uptime": 100,
      "weight": 100
    },
    # ...
  ]
}
```

## Blockchain RPC endpoint

The CLI provides a powerful helper to get the RPC endpoint that can be used to query the Subnet EVM blockchain (e.g. to connect a Web3 wallet). Provide the `avalancheNode` resource name to be used as RPC and the `avalancheSubnet` resource name:

```bash title="Command"
ash console helper rpc local-node-01 ash-subnet
```

```bash title="Output"
AshLocalEVM RCP endpoint:
  http://44.223.28.33:9650/ext/bc/RfX8YRUHePxFENBZFwaNt1tP6CR6RQ4hJJ5AqYv49LRoSKniK/rpc
```

:::note
See the [reference](/docs/console/reference/resource-management) for more information about resources lifecycle management.
:::

