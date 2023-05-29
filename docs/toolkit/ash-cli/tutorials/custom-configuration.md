---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Custom Configuration

The Ash CLI relies on YAML configuration files that contains the list of known Avalanche networks. This is very convenient to quickly **switch between environments** and to **share configurations with other developers**.

:::note
See [Installation](/docs/toolkit/ash-cli/installation) for the Ash CLI installation instructions on your platform.
:::

## Configuration file layout

For each network, at least **the P-Chain configuration has to be provided** (in the Primary Network) with its ID and RPC endpoint. All the other Subnets/blockchains will be retrieved/enriched from the P-Chain.

```yaml {8-11} title="~/.config/ash/my-custom-config.yml"
---
avalancheNetworks:
  - name: my-network
    subnets:
      - id: 11111111111111111111111111111111LpoYY
        subnetType: PrimaryNetwork
        blockchains:
          - id: 11111111111111111111111111111111LpoYY
            name: P-Chain
            vmType: PlatformVM
            rpcUrl: http://validator01.ash.local:9650/ext/bc/P
          [...]
```

:::tip
A single configuration file can contain multiple networks.
:::

## Initialize and use a custom configuration file

The CLI comes with a convenient command to initialize a configuration file with the default networks:

```bash
ash conf init --config ~/.config/ash/my-custom-config.yml
```

The generated file contains the default list of networks. You can then edit it to add your own networks.

Once the configuration file is ready, you can use it with the `--config` argument or with the `ASH_CONFIG` environment variable:

<Tabs>
  <TabItem value="argument" label="Using --config arg" default>

```bash
ash avalanche subnet list --config ~/.config/ash/my-custom-config.yml --network my-network
```

  </TabItem>
  <TabItem value="env var" label="Using ASH_CONFIG">

```bash
export ASH_CONFIG=~/.config/ash/my-custom-config.yml

ash avalanche subnet list --network my-network
```

  </TabItem>
</Tabs>
