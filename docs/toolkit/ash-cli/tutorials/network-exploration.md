---
sidebar_position: 1
---

# Network Exploration

The Ash CLI is the perfect tool to explore Avalanche networks from the command line. Here are some examples of what you can do with it.

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
- 7o2ywrBRa7EerWrKTHvaE1YSKWwWrQfVtHenLiqXmvcB2FN4j:
    Number of blockchains: 1
    Control keys:          ["P-fuji1ncfxrmzxfwmjtq5dyfujt42rgkgv8uxxxkdacx"]
    Threshold:             1
    Blockchains:
   - MovoEVM:
      ID:      xPUagXQMwXQ9wmAcQFS1oKN7QQf7RkeiqVQpYWwep3utGxa7o
      VM type:
      RPC URL:
[...]
```

### Get detailed information about a Subnet

To get detailed information about a Subnet, including its list of validators, you can use the `subnet info` command:

```bash
ash avalanche subnet info --network fuji --id 9m6a3Qte8FaRbLZixLhh8Ptdkemm4csNaLwQeKkENx5wskbWP
```

```bash
Subnet '9m6a3Qte8FaRbLZixLhh8Ptdkemm4csNaLwQeKkENx5wskbWP':
  Number of blockchains: 1
  Control keys:          ["P-fuji1n3f5zmv6md96glq9sevnzmmtur5ugvfaghj3jh"]
  Threshold:             1
  Blockchains:
  - main:
     ID:      XuEPnCE59rtutASDPCDeYw8geQaGWwteWjkDXYLWvssfuirde
     VM type:
     RPC URL:
  Validators:
  - NodeID-FkbkPTVMLbZZJKFHYUKZTt1Z3quNUurV
  [...]
```

### Get detailed information about a Subnet validator

To get detailed information about one Subnet validator, you can use the `validator info` command:

```bash
ash avalanche validator info --network fuji --id NodeID-FkbkPTVMLbZZJKFHYUKZTt1Z3quNUurV --subnet-id 9m6a3Qte8FaRbLZixLhh8Ptdkemm4csNaLwQeKkENx5wskbWP
```

```bash
Validator 'NodeID-54RagM4VF5VNeKWoVV5UNHJfM6ccHtBob' on Subnet '9m6a3Qte8FaRbLZixLhh8Ptdkemm4csNaLwQeKkENx5wskbWP':
  Tx ID:            6qQdasWo9xyQ1kctTd1AGzdbrrL1HkSriSR7aCap51qivH1GU
  Start time:       1672859120
  End time:         1688481650
  Stake amount:     1000
  Weight:           1000
  Potential reward: 0
  Delegation fee:   0
  Connected:        false
  Uptime:           0
  [...]
```

:::tip
Some information is not available for validators on permissioned Subnets (e.g. `Potential reward`, `Connected`, `Uptime`).
:::

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
