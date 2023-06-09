---
sidebar_position: 6
---

# ash.avalanche.ash_cli

This Ansible role allows to install and configure the [Ash CLI](/docs/toolkit/ash-cli/introduction).

## Role variables

| Variable                     | Comment                                                                                                                   | Default value                    |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| `ash_cli_version`            | CLI version                                                                                                               | `0.1.1`                          |
| `ash_cli_install_dir`        | Base directory to install CLI                                                                                             | `/opt/avalanche/ash-cli`         |
| `ash_cli_conf_dir`           | Where to store the default CLI configuration                                                                              | `/etc/avalanche/ash-cli/conf`    |
| `avalanche_network_id`       | The default network of the CLI. Can be `fuji`, `mainnet` or `local`.                                                      | `fuji`                           |
| `avalanche_pchain_local_url` | If `avalanche_network_id` is `local`, this URL will be used as `rpcUrl` for the P-Chain in the CLI default configuration. | `http://127.0.0.1:9650/ext/bc/P` |
| `ash_cli_custom_networks`    | Custom networks to add to the CLI configuration. See [Custom networks](#custom-networks).                                 | NA                               |

## Custom networks

This role allows to add custom networks to the CLI configuration. You can see an example in the [avalanche/node/tasks/main.yml](https://github.com/AshAvalanche/ansible-avalanche-collection/blob/main/roles/node/tasks/main.yml) playbook where the `local` network is added to the CLI configuration.

Each network is defined by a name and the endpoints to use for the P-Chain, C-Chain and X-Chain APIs:

```yaml title="local network definition"
ash_cli_custom_networks:
  local:
    pchain_rpc_url: "http://127.0.0.1:9650/ext/bc/P"
    cchain_rpc_url: "http://127.0.0.1:9650/ext/bc/C/rpc"
    xchain_rpc_url: "http://127.0.0.1:9650/ext/bc/X"
```
