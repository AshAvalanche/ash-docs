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
