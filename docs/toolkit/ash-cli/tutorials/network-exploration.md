---
sidebar_position: 1
---

# Avalanche Networks Exploration

The Ash CLI is **the perfect tool to explore Avalanche networks** from the command line. Here are some examples of what you can do with it.

:::note
See [Installation](/docs/toolkit/ash-cli/installation) for the Ash CLI installation instructions on your platform.
:::

:::tip
This tutorial does not go through all the commands! You can find the full list of commands available with the `ash avalanche help` command.
:::

## List available networks

The CLI comes with a list of networks that you can use out of the box. You can list them with the `network list` command:

```bash
ash avalanche network list
```

```bash
Available Avalanche networks:
  - 'mainnet'
  - 'fuji'
  - 'mainnet-ankr'
  - 'fuji-ankr'
  - 'mainnet-blast'
  - 'fuji-blast'
```

:::tip
The `mainnet` and `fuji` networks use [Avalanche public API servers](https://docs.avax.network/apis/avalanchego/public-api-server) that tend to reach their rate limit quickly. If this happens you can use the `*-ankr` and `*-blast` networks instead (they use [Ankr](https://www.ankr.com/) and [Blast](https://blastapi.io/) public API servers).
:::

## Get information about Subnets and their blockchains and validators

### List Subnets

You can get the list of Subnets and their blockchains with the `subnet list` command:

```bash
ash avalanche subnet list --network fuji
```

```bash
Found 2011 Subnet(s) on 'fuji':
------------------------------------------------------
- XHLRR9cvMtCR8KZsjU8nLxg1JbV7aS23AcLVeBMVHLKkSBriS:
  Type: Permissioned
  Control keys: ["P-fuji1apckely9e4ue26gds6mdmyf7ys7e4tv4l2cr9j"]
  Threshold:    1
  Blockchains list (1):
  - DFK Chain:
     ID:      32sexHqc3tBQsik8h7WP5F2ruL5svqhX5opeTgXCRVX8HpbKF
[...]
```

### Get detailed information about a Subnet

To get detailed information about a Subnet, including its list of validators, you can use the `subnet info` command:

```bash
ash avalanche subnet info -n fuji \
  9m6a3Qte8FaRbLZixLhh8Ptdkemm4csNaLwQeKkENx5wskbWP
```

```bash
Subnet '9m6a3Qte8FaRbLZixLhh8Ptdkemm4csNaLwQeKkENx5wskbWP':
  Type: Permissioned
  Control keys: ["P-fuji1n3f5zmv6md96glq9sevnzmmtur5ugvfaghj3jh"]
  Threshold:    1
  Blockchains list (1):
  - main:
     ID:      XuEPnCE59rtutASDPCDeYw8geQaGWwteWjkDXYLWvssfuirde
     VM type:
     RPC URL:
  Validators list (4):
  - NodeID-54RagM4VF5VNeKWoVV5UNHJfM6ccHtBob
  [...]
```

### Get detailed information about a Subnet validator

To get detailed information about one Subnet validator, you can use the `validator info` command:

```bash
# On a permissioned Subnet
ash avalanche validator info -n fuji  \
  NodeID-54RagM4VF5VNeKWoVV5UNHJfM6ccHtBob \
  --subnet-id 9m6a3Qte8FaRbLZixLhh8Ptdkemm4csNaLwQeKkENx5wskbWP
```

```bash
Validator 'NodeID-54RagM4VF5VNeKWoVV5UNHJfM6ccHtBob' on Subnet '9m6a3Qte8FaRbLZixLhh8Ptdkemm4csNaLwQeKkENx5wskbWP':
  Tx ID:            6qQdasWo9xyQ1kctTd1AGzdbrrL1HkSriSR7aCap51qivH1GU
  Start time:       1672859120
  End time:         1688481650
  Weight:           1000
```

Some properties are only returned for validators on **elastic (or PoS) Subnets** like the [Primary Network](https://docs.avax.network/learn/avalanche/avalanche-platform) (e.g. `Potential reward`, `Connected`, `Uptime`. See [platform.getCurrentValidators](https://docs.avax.network/apis/avalanchego/apis/p-chain#platformgetcurrentvalidators)):

```bash
# On an elastic Subnet
ash avalanche validator info -n fuji \
  NodeID-54RagM4VF5VNeKWoVV5UNHJfM6ccHtBob \
  --subnet-id 11111111111111111111111111111111LpoYY
```

```bash
Validator 'NodeID-54RagM4VF5VNeKWoVV5UNHJfM6ccHtBob' on Subnet '11111111111111111111111111111111LpoYY':
  Tx ID:            sWWFFk64LAVEHWzyW3LZEHVqcrA84Djv1qYSCMwrwCXTxLiEr
  Start time:       1672842965
  End time:         1688481650
  Connected:        true
  Uptime:           99.9951
  Stake amount:     1000000000
  Potential reward: 50570835
  Validation reward owner: [...]
  Delegator count:  0
  Delegator weight: 0
  Delegation fee:   2%
  Delegation reward owner: [...]
```

## Filter the CLI output using jq

All commands of the Ash CLI can output JSON data. Combined with [jq](https://stedolan.github.io/jq/), this makes a very powerful tool to get any information you need about Avalanche networks.

For example, get the IDs of all the Subnets that have at least one blockchain on the mainnet:

```bash
ash avalanche subnet list --json | jq -r '.[] | select((.blockchains | length) > 0) | .id'
```

```bash
yDxaSh2hoVxQKRHmacV1xFpuSgHf6Q6cCMu4v3GoLQnqQWk6L
D3YwWGVE7MxBkiHq6s9Qkd978QyCBDxAMcJeBqsEyVRZf4XGh
[...]
2ibTg9ruyJRQf4NpRbkd1Utcfayo3gRRpkoWGCWNC3oXTZoYCe
11111111111111111111111111111111LpoYY
```
