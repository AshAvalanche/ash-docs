---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Introduction

The Ash CLI aims at **boosting Avalanche developers productivity** by providing a set of commands to interact with Avalanche.

## Features

<details>
  <summary>The <b>easiest way to explore</b> 🔍 Avalanche networks from the command line</summary>
  <div>

See the [Network Exploration](/docs/toolkit/ash-cli/tutorials/network-exploration) tutorial

```bash {1}
ash avalanche help
Interact with Avalanche Subnets, blockchains and nodes

Usage: ash avalanche [OPTIONS] <COMMAND>

Commands:
  network    Interact with Avalanche networks
  node       Interact with Avalanche nodes
  subnet     Interact with Avalanche Subnets
  validator  Interact with Avalanche validators
  help       Print this message or the help of the given subcommand(s)
```

  </div>
</details>

<details>
  <summary>Support for <b>any Avalanche network</b> with custom configuration 📝</summary>
  <div>

See the [Custom Configuration](/docs/toolkit/ash-cli/tutorials/custom-configuration) tutorial

```yaml {3,12} title="~/.config/ash/my-custom-config.yaml"
---
avalancheNetworks:
  - name: my-network
    subnets:
      - id: 11111111111111111111111111111111LpoYY
        controlKeys: []
        threshold: 0
        blockchains:
          - id: 11111111111111111111111111111111LpoYY
            name: P-Chain
            vmType: PVM
            rpcUrl: http://validator01.ash.local:9650/ext/bc/P
          [...]
```

  </div>
</details>

<details>
  <summary>Create Subnets and blockchains 🛠️, 100% <b>compatible with Avalanche CLI</b> wizard</summary>
  <div>

Coming soon! Stay tuned by following [@ash_avax](https://twitter.com/ash_avax) 🐦!

  </div>
</details>

<details>
  <summary>Lightweight (written in Rust 🦀) and <b>perfect for scripting</b> with JSON output</summary>
  <div>

```bash
export AVALANCHE_NETWORK=my-network
export ASH_CONFIG_PATH=~/.config/ash/my-network.yaml
export ASH_JSON=true

ash avalanche validator info --id NodeID-CskPetRMvtH5Xr6gLa5cwfY4hR34UgkM5 | jq '.uptime'
```

  </div>
</details>

<details>
  <summary>The <b>command line companion</b> 🧑‍💻 of all the other Ash tools</summary>
  <div>

Coming soon! Stay tuned by following [@ash_avax](https://twitter.com/ash_avax) 🐦!

  </div>
</details>

## Motivation

Several factors motivated us to create the Ash CLI:

**The need of an easy and scriptable way to explore Avalanche networks from the command line**

- A network information is accessible through [AvalancheGo JSON-RPC APIs](https://docs.avax.network/apis/avalanchego/apis/issuing-api-calls), that are not made to be queried directly by developers. Extra development is required to reach an acceptable level of usability (don't tell us you like querying JSON-RPC endpoints with cURL 😬).
- The **API layout is not optimal for all queries** and sometimes requires multiple calls to get the desired information. The Ash CLI abstracts this complexity and provides a single command to get the information you need.

Let's see how easy it is to list all the blockchains of the `Vn3aX6hNRstj5VHHm63TCgPNaeGnRSqCYXQqemSqDd2TQH4qJ` Subnet using Ash CLI vs cURL:

<Tabs>
  <TabItem value="curl" label="Using cURL" default>

```bash
curl -s -X POST --data '{
    "jsonrpc": "2.0",
    "method": "platform.getBlockchains",
    "params": {},
    "id": 1
}' -H 'content-type:application/json;' https://api.avax.network/ext/bc/P |
jq '.result.blockchains[] | select(.subnetID == "Vn3aX6hNRstj5VHHm63TCgPNaeGnRSqCYXQqemSqDd2TQH4qJ")'
```

  </TabItem>
  <TabItem value="ash-cli" label="Using Ash CLI">

```bash
ash avalanche subnet info --id Vn3aX6hNRstj5VHHm63TCgPNaeGnRSqCYXQqemSqDd2TQH4qJ
```

  </TabItem>
</Tabs>

<br/>

**Limitations of the [Avalanche CLI](https://github.com/ava-labs/avalanche-cli) developped by Ava Labs**

- The Avalanche CLI only support using the [avalanche-network-runner](https://github.com/ava-labs/avalanche-network-runner) for local/private networks. We needed a way to interact with **any** Avalanche network.
- The Avalanche CLI **outputs were not made to be parsed**, which makes it impossible to use it in scripts, CI/CD pipelines or other automation tools.

The `--json` flag is available on all Ash CLI commands, making it super easy to filter the output with tools like [jq](https://stedolan.github.io/jq/):

```bash {1}
ash avalanche validator info --id NodeID-CskPetRMvtH5Xr6gLa5cwfY4hR34UgkM5 --json | jq '.uptime'
99.9911
```
