---
sidebar_position: 4
---

# ash.avalanche.evm.blockscout

This Ansible role allows to deploy a [Blockscout](https://www.blockscout.com/) instance as a Docker service.

## Role variables

| Variable                      | Comment                                                                                                  | Default value                                                                             |
| ----------------------------- | -------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `blockscout_image`            | Base image of Blockscout                                                                                 | `blockscout/blockscout`                                                                   |
| `blockscout_image_version`    | Tag to be used                                                                                           | `5.1.0`                                                                                   |
| `blockscout_conf_dir`         | Where to store the Blockscout config files                                                               | `/etc/blockscout/conf`                                                                    |
| `blockscout_custom_dir`       | Dir used to upload custom assets                                                                         | `"{{ blockscout_conf_dir }}/custom"`                                                      |
| `blockscout_log_dir`          | Where to store the Blockscout logs                                                                       | `/var/log/blockscout`                                                                     |
| `blockscout_data_dir`         | Where to store the Postgres data                                                                         | `/var/lib/postgres`                                                                       |
| `blockscout_user`             | User that will run Blockscout                                                                            | `root`                                                                                    |
| `blockscout_rpc`              | RPC of the blockchain to index                                                                           | `http://192.168.60.11:9650/ext/bc/27Lga51x8AQnBDJTnE6sUSiFmdrDSqCYhbkiTQD8oBd1EqotZ1/rpc` |
| `blockscout_header_logo_file` | Blockscout header logo file                                                                              | `ash-logo-circle-30.svg`                                                                  |
| `blockscout_env_vars`         | See [Blockscout docs](https://docs.blockscout.com/for-developers/information-and-settings/env-variables) | NA                                                                                        |

## Inventory requirements

- The host on which to install Blockscout have to be in the `blockscout` group.

## How to?

See the [Subnet Blockchain Explorer](/docs/toolkit/ansible-avalanche-collection/tutorials/subnet-blockchain-explorer) tutorial to learn how to deploy Blockscout.
