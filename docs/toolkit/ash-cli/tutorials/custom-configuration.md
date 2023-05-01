---
sidebar_position: 2
---

# Custom Configuration

The CLI relies on YAML configuration files that contains the list of known Avalanche networks. This is very convenient to quickly **switch between environments** and to **share configurations with other developers**.

:::note
See [Installation](/docs/toolkit/ash-cli/installation) for installation instructions on your platform.
:::

## Configuration file layout

For each network, at least **the P-Chain configuration has to be provided** (in the Primary Network) with its ID and RPC endpoint. All the other Subnets/blockchains will be retrieved/enriched from the P-Chain.

```yaml {9-12} title="~/.config/ash/my-custom-config.yaml"
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

:::tip
A single configuration file can contain multiple networks.
:::

## Initialize and use a custom configuration file

The CLI comes with a convenient command to initialize a configuration file with the default networks:

```bash
ash conf init --config ~/.config/ash/my-custom-config.yaml
```

The generated file contains the default list of networks. You can then edit it to add your own networks.

Once the configuration file is ready, you can use it with the `--config` option or with the `ASH_CONFIG` environment variable:

```bash
ash avalanche subnet list --config ~/.config/ash/my-custom-config.yaml --network my-network
```

```bash
export ASH_CONFIG=~/.config/ash/my-custom-config.yaml

ash avalanche subnet list --network my-network
```
