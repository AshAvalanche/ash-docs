---
sidebar_position: 1
---

# ash.avalanche.node

This Ansible role allows to manage Avalanche nodes:

- Install and configure [AvalancheGo](https://github.com/ava-labs/avalanchego) following Linux best practices
- Install Virtual Machines that can later be used to create blockchains
- (On local networks) Create an account with access to pre-funded addresses

## Role variables

| Variable                                 | Comment                                                                                                                                                                                                                                                                | Default value                                                      |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| `avalanchego_version`                    | See [AvalancheGo releases](https://github.com/ava-labs/avalanchego/releases)                                                                                                                                                                                           | `1.10.0`                                                           |
| `avalanchego_install_dir`                | Base directory to store all AvalancheGo software                                                                                                                                                                                                                       | `/opt/avalanche/avalanchego`                                       |
| `avalanchego_vms_dir`                    | Where to unpack VMs releases                                                                                                                                                                                                                                           | `/opt/avalanche/vms`                                               |
| `avalanchego_db_dir`                     | [--db-dir](https://docs.avax.network/api-reference/avalanche-go-configs-flags#--db-dir-string-file-path) argument                                                                                                                                                      | `/var/lib/avalanche/avalanchego/db`                                |
| `avalanchego_conf_dir`                   | Where to store AvalancheGo config files                                                                                                                                                                                                                                | `/etc/avalanche/avalanchego/conf`                                  |
| `avalanchego_staking_dir`                | Where to store the node's TLS certificates and BLS key used to communicate with peers on the Avalanche network                                                                                                                                                         | `/etc/avalanche/avalanchego/staking`                               |
| `avalanchego_https_certs_dir`            | Where to store the node's TLS certificates used to secure HTTP API endpoints                                                                                                                                                                                           | `/etc/ssl/certs/avalanche/avalanchego`                             |
| `avalanchego_gpg_dir`                    | Where to store Ava Labs GPG public key (used to verify AvalancheGo binary)                                                                                                                                                                                             | `/etc/avalanche/avalanchego/gnupg`                                 |
| `avalanchego_log_dir`                    | Where to write logs                                                                                                                                                                                                                                                    | `/var/log/avalanche/avalanchego`                                   |
| `avalanchego_user`                       | The user that will run the AvalancheGo Linux service                                                                                                                                                                                                                   | `avalanche`                                                        |
| `avalanchego_group`                      | The group of the user that will run the AvalancheGo Linux service                                                                                                                                                                                                      | `avalanche`                                                        |
| `avalanchego_auto_restart`               | Whether to automatically restart AvalancheGo upon version or configuration changes                                                                                                                                                                                     | `true`                                                             |
| `avalanchego_http_host`                  | [--http-host](https://docs.avax.network/api-reference/avalanche-go-configs-flags#--http-host-string) argument                                                                                                                                                          | `127.0.0.1`                                                        |
| `avalanchego_http_port`                  | [--http-port](https://docs.avax.network/api-reference/avalanche-go-configs-flags#--http-port-int) argument                                                                                                                                                             | `9650`                                                             |
| `avalanchego_http_allowed_hosts`         | [--http-allowed-hosts](https://docs.avax.network/api-reference/avalanche-go-configs-flags#--http-allowed-hosts-string) argument                                                                                                                                        | `localhost`                                                        |
| `avalanchego_https_enabled`              | Whether to secure the HTTP API endpoints using TLS. See [--http-tls-enabled](https://docs.avax.network/api-reference/avalanche-go-configs-flags#--http-tls-enabled-boolean) argument. If `true` will upload TLS certificates from `avalanchego_https_local_certs_dir`. | `false`                                                            |
| `avalanchego_https_local_certs_dir`      | Where to find the TLS certificates on the Ansible host, will not lookup for files if value is `""`                                                                                                                                                                     | `"{{ playbook_dir }}/files/https"`                                 |
| `avalanchego_https_cert_file`            | Path to TLS certificate for the HTTPS server. See [--http-tls-cert-file](https://docs.avax.network/api-reference/avalanche-go-configs-flags#--http-tls-cert-file-string-file-path) argument.                                                                           | `"{{ avalanchego_https_certs_dir }}/{{ inventory_hostname }}.crt"` |
| `avalanchego_https_key_file`             | Path to TLS private key for the HTTPS server. See [--http-tls-key-file](https://docs.avax.network/api-reference/avalanche-go-configs-flags#--http-tls-key-file-string-file-path) argument.                                                                             | `"{{ avalanchego_https_certs_dir }}/{{ inventory_hostname }}.key"` |
| `avalanchego_public_ip`                  | The node's [public IP](https://docs.avax.network/api-reference/avalanche-go-configs-flags#public-ip). Set to `""` to resolve the public IP automatically using NAT traversal.                                                                                          | `"{{ ansible_host }}"`                                             |
| `avalanchego_staking_port`               | [--staking-port](https://docs.avax.network/api-reference/avalanche-go-configs-flags#--staking-port-int) argument                                                                                                                                                       | `9651`                                                             |
| `avalanchego_staking_use_local_certs`    | If `true` will upload TLS certificates from `avalanchego_staking_local_certs_dir`. If `false` AvalancheGo will automatically create new certs.                                                                                                                         | `false`                                                            |
| `avalanchego_staking_local_certs_dir`    | Where to find the existing certificates on the Ansible host. Should be named `{{ inventory_hostname }}.(crt\| key)`.                                                                                                                                                   | `"{{ playbook_dir }}/files/staking"`                               |
| `avalanchego_staking_use_local_bls_keys` | If set to `true`, will use existing BLS keys found in `avalanchego_staking_local_bls_keys_dir`. If `false`, AvalancheGo will automatically create a new key.                                                                                                           | `false`                                                            |
| `avalanchego_staking_local_bls_keys_dir` | Where to find the existing BLS key on the Ansible host. Should be named `{{ inventory_hostname }}.bls.key`.                                                                                                                                                            | `"{{ playbook_dir }}/files/staking"`                               |
| `avalanchego_custom_genesis`             | If set to `true`, will use existing genesis file at `avalanchego_custom_genesis_local_file`                                                                                                                                                                            | `false`                                                            |
| `avalanchego_custom_genesis_local_file`  | See [Genesis](https://docs.avax.network/api-reference/avalanche-go-configs-flags#--genesis-file-string)                                                                                                                                                                | `"{{ playbook_dir }}/files/genesis.json"`                          |
| `avalanchego_network_id`                 | See [Network ID](https://docs.avax.network/api-reference/avalanche-go-configs-flags/#network-id)                                                                                                                                                                       | `fuji`                                                             |
| `avalanchego_bootstrap_node_ids`         | Node IDs of the bootstrap nodes on networks other than `mainnet` and `fuji`                                                                                                                                                                                            | `['NodeID-7Xhw2mDxuDS44j42TCB6U5579esbSt3Lg']`                     |
| `avalanchego_bootstrap_db`               | The local path to a snapshot of Avalanche database                                                                                                                                                                                                                     | `""`                                                               |
| `avalanchego_track_subnets`              | The list of tracked subnets that the node can validate. See [Subnet Tracking](https://docs.avax.network/api-reference/avalanche-go-configs-flags#--track-subnets-string)                                                                                               | `[]`                                                               |
| `avalanchego_vms_install`                | A dictionary of VMs to install on the node with their versions. The key is the VM name and the value its version. See [VMs install](#vms-installation).                                                                                                                | `{}`                                                               |
| `avalanchego_node_json`                  | The AvalancheGo node configuration that will be templated to `node.json` addresses                                                                                                                                                                                     | NA                                                                 |
| `avalanchego_subnets_configs`            | The configuration of each subnet. See [Subnet Configs](https://docs.avax.network/api-reference/avalanche-go-configs-flags#subnet-configs).                                                                                                                             | `{}`                                                               |
| `avalanchego_chain_aliases`              | The aliases of each chain. See [chain-aliases-file](https://docs.avax.network/api-reference/avalanche-go-configs-flags#--chain-aliases-file-string).                                                                                                                   | `{}`                                                               |
| `avalanchego_chain_configs`              | The configuration of each chain. See [Chain Configs](https://docs.avax.network/api-reference/avalanche-go-configs-flags#chain-configs).                                                                                                                                | `{ C: { state-sync-enabled: true }}`                               |
| `avalanchego_chain_upgrades`             | The list of upgrades of each chain. See [Network Upgrades](https://docs.avax.network/subnets/upgrade/customize-subnet#network-upgrades-enabledisable-precompiles).                                                                                                     | `{}`                                                               |
| `validator_txs_private_key`              | The private key used to sign the `addValidator` transactions                                                                                                                                                                                                           | `PrivateKey-ewoqjP7PxY4yr3iLTpLisriqt94hdyDFNgchSxGGztUrTXtNN`     |
| `validator_txs_key_encoding`             | Encoding of the private key. Can be `cb58` or `hex`.                                                                                                                                                                                                                   | `cb58`                                                             |
| `validator_start_time_command`           | Command used to dynamically compute `start_time_command_output`                                                                                                                                                                                                        | 2 minutes from now using `date`                                    |
| `validator_end_time_command`             | Command used to dynamically compute `end_time_command_output`                                                                                                                                                                                                          | 1 week and 2 minutes from now using `date`                         |
| `validator_start_time`                   | Start time of the validation either in RFC 3339 format (`YYYY-MM-DDTHH:MM:SSZ`) or `start_time_command_output` that will be resolved by executing `validator_start_time_command`                                                                                       | `start_time_command_output`                                        |
| `validator_end_time`                     | End time of the validation either in RFC 3339 format (`YYYY-MM-DDTHH:MM:SSZ`) or `end_time_command_output` that will be resoved by executing `validator_end_time_command`                                                                                              | `end_time_command_output`                                          |
| `validator_stake_or_weight`              | Stake (for elastic Subnets) or weight (for permissioned Subnets) of validators                                                                                                                                                                                         | `1`                                                                |
| `validator_delegation_fee`               | Delegation fee in percentage                                                                                                                                                                                                                                           | `2`                                                                |
| `avalanchego_service_options`            | Additional systemd avalanchego.service options. Only modify this variable if you are absolutely sure about what you are doing.                                                                                                                                         | `# ExecStartPost=/bin/echo "Example ExecStartPost option"`         |
| `ash_cli_install`                        | Whether to install and configure Ash CLI on the node                                                                                                                                                                                                                   | `true`                                                             |
| `ash_cli_network_id`                     | The Avalanche network to be used in the Ash CLI (sets the RPC endpoints to use)                                                                                                                                                                                        | `"{{ avalanchego_network_id }}"`                                   |

# Ash CLI configuration

:::note
All config arguments are passed to AvalancheGo through a JSON config file stored at `avalanchego_config_dir`.
:::

## Inventory requirements

- **All the nodes** on which to install avalanchego have to be in the `avalanche_nodes` group.
- For local networks, **at least one of the nodes** has to be in the `bootstrap_nodes` group. This nodes have to **be started first to serve as bootstrap nodes** for the others. For an example of how to do that, see the `bootstrap_local_network.yml` playbook.

## Installation folders

The default installation follows [Linux Filesystem Hierarchy Standard](https://refspecs.linuxfoundation.org/FHS_3.0/fhs-3.0.html) by creating 3 main directories:

- `/opt/avalanche` to store **Avalanche softwares**
  - `└── avalanchego` contains the different versions of AvalancheGo
    - `└──current` contains symlinks to the currently used `avalanchego` binary and plugins
- `/etc/avalanche` to store **Avalanche related configuration files**
  - `├── conf` contains AvalancheGo configs
  - `├── staking` contains the Avalanche node's TLS certificates and BLS key
  - `└── gnupg` contains the AvalancheGo GPG keys used to sign the AvalancheGo binaries
- `/var/lib/avalanche/avalanchego` to store **AvalancheGo data**
  - `└── db` contains AvalancheGo's database
- `/var/log/avalanche/avalanchego` to store **AvalancheGo logs**
- `/etc/ssl/certs/avalanche/avalanchego` to store **AvalancheGo TLS certificates** used to secure the node's HTTP API endpoints

:::caution
This differs from AvalancheGo default setup that stores the database and configuration files under `$HOME/.avalanchego`.
:::

## VMs installation

To install a VM on the node, add it to `avalanchego_vms_install` following `VM_NAME: VM_VERSION` format (e.g. `timestampvm: 1.2.0`).

### Supported VMs and AvalancheGo compatibility

List of VMs supported by the collection:

- `subnet-evm`:
  - Provider: [Ava Labs](https://www.avalabs.org/)
  - GitHub repository: [ava-labs/subnet-evm](https://github.com/ava-labs/subnet-evm)
  - Versions: `0.4.8` or later

Here is the compatibility matrix with AvalancheGo versions:

| RPC protocol | AvalancheGo       | `subnet-evm`    |
| ------------ | ----------------- | --------------- |
| `22`         | `1.9.6-1.9.8`     | `0.4.8`         |
| `23`         | `1.9.9`           | `0.4.9-0.4.10`  |
| `24`         | `1.9.10-1.9.16`   | `0.4.11-0.4.12` |
| `25`         | `1.10.0`          | `0.5.0`         |
| `26`         | `1.10.1-1.10.4`   | `0.5.1-0.5.2`   |
| `27`         | `1.10.5-1.10.8`   | `0.5.3`         |
| `28`         | `1.10.9-1.10.12`  | `0.5.5-0.5.6`   |
| `29`         | `1.10.13-1.10.14` | `0.5.7-0.5.8`   |
| `30`         | `1.10.15-1.10.17` | `0.5.9-0.5.10`  |
| `31`         | `1.10.18-1.10.19` | `0.5.11`        |
| `33`         | `1.11.0-1.11.1`   | `0.6.0-0.6.1`   |
| `34`         | `1.11.2`          | `0.6.2`         |
| `35`         | `1.11.3-1.11.9`   | `0.6.3-0.6.7`   |
| `36`         | `1.11.10`         | `0.6.8`         |
| `37`         | `1.11.11`         | `0.6.9`         |

:::tip
If a versions incompatibility is detected, an error message will be prompted and the role execution will stop.
:::
