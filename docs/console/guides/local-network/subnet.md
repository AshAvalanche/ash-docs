---
sidebar_position: 7
---

# 5. Subnet

:::caution
The Ash Console is currently in alpha and **not production-ready**. It is under active development and subject to breaking changes.
:::

In this section, we will create a Subnet [resource](/docs/console/glossary#resource) on our local network.

## Control key creation

Before creating a Subnet, we need to create a `wallet` [secret](/docs/console/glossary#secret). This wallet will be use to sign the **Subnet transactions** (creation, validator management, etc.) and the P-Chain address will be used as the **control key** of the Subnet.

To make things easier, we will use the `ewoq` address which is pre-funded on the local network.

```bash title="Command"
ash console secret create '{
  "name": "ewoq-key",
  "secretType": "wallet",
  "pChainAddress": "P-fuji18jma8ppw3nhx5r4ap8clazz0dps7rv5u6wmu4t",
  "privateKey": "PrivateKey-ewoqjP7PxY4yr3iLTpLisriqt94hdyDFNgchSxGGztUrTXtNN",
  "privateKeyFormat": "cb58"
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
Do not use this wallet in production!
:::

## Subnet creation

```bash title="Command"
ash console resource create '{
  name: my-subnet-evm,
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
      "subnet_blockchains_list": [
          {
            "name": "AshLocalEVM",
            "vm": "subnet-evm",
            "genesis_data": {
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
| my-subnet-evm | 542c...f94e | AvalancheSubnet | aws/us-east-1 | Small | 2024-01-30T13:58 | Pending |  ID         |     |
|               |             |                 |               |       |                  |         |  Validators | 0   |
+---------------+-------------+-----------------+---------------+-------+------------------+---------+-------------------+
```

:::info
Unlike the `avalancheNode` resource, there is no concept of `size` for the `avalancheSubnet` resource. The Ash Console will create a small instance (e.g.: `t2.micro`) that will serve as the Subnet control plane.
:::

## Subnet ID

We can now get the Subnet ID of our Subnet with the `console resource info` command:

```bash title="Command"
ash console resource info my-subnet-evm
```

```bash title="Output"
Resource 'my-subnet-evm' of project 'ash-devnet':
+---------------+-------------+-----------------+---------------+-------+------------------+---------+------------------------------------------------------------------+
| Resource name | Resource ID | Type            | Cloud region  | Size  | Created at       | Status  | Resource specific                                                |
+===============+=============+=================+===============+=======+==================+=========+==================================================================+
| my-subnet-evm | 525c...c33e | AvalancheSubnet | aws/us-east-1 | Small | 2024-01-30T16:05 | Running |  ID         | VDyFNft1FnKQn1bxZfLsjshokhQRP1j4cTBjhob89CFFLcrRE  |
|               |             |                 |               |       |                  |         |  Validators | 5                                                  |
+---------------+-------------+-----------------+---------------+-------+------------------+---------+------------------------------------------------------------------+
```

## Blockchain ID

From here, we can query one of our nodes to get information about the Subnet:

```bash title="Command"
ash avax subnet info VDyFNft1FnKQn1bxZfLsjshokhQRP1j4cTBjhob89CFFLcrRE
```

```bash title="Output"
Subnet 'VDyFNft1FnKQn1bxZfLsjshokhQRP1j4cTBjhob89CFFLcrRE':
  Type: Permissioned
  Control keys: ["P-local18jma8ppw3nhx5r4ap8clazz0dps7rv5u00z96u"]
  Threshold:    1
  Blockchains list (1): 
  - 'AshLocalEVM':
    ID:      2VgLztfZWQewKVqtsBVpdbMdEFWScDgcwP21UWQwifomCG8weF
    VM ID:   srEXiWaHuhNyGwPUi444Tu47ZEDwxTWrbQiuD7FmgSAQ6X7Dy
    VM type: SubnetEVM
  Validators list (5): 
  - NodeID-7Xhw2mDxuDS44j42TCB6U5579esbSt3Lg
  - NodeID-GWPcbFJZFfZreETSoWjPimr846mXEKCtu
  - NodeID-NFBbbJ4qCmNaCzeW7sxErhvWqvEQMnYcN
  - NodeID-MFrZFVCXPv5iCn6M9K6XduxGTYp891xXZ
  - NodeID-P7oB2McjBGgW2NXXWVYjV8JEDFoW9xDE5
```
