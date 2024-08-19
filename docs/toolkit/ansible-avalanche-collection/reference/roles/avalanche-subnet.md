---
sidebar_position: 2
---

# ash.avalanche.subnet

This Ansible role allows to create an Avalanche Subnet, its blockchains and add validators to it.

:::caution
This role uses Ash CLI under the hood.

The Ash CLI uses **plain-text private keys** to interact with wallets. **It should never be used on the mainnet**. If you try do so, commands will fail with: `AvalancheNetwork error: wallet creation is not allowed on network 'mainnet'`.

To interact with wallets on the mainnet (e.g. to create Subnets and blockchains), you should use the [Avalanche CLI](https://docs.avax.network/tooling/create-deploy-subnets/deploy-on-mainnet) which is compatible with Ledger devices.
:::

## Role variables

| Variable                              | Comment                                                                                                                                                                                 | Default value                                                  |
| ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| `subnet_avalanche_network_id`         | The [Network ID](https://docs.avax.network/api-reference/avalanche-go-configs-flags/#network-id) in which to create the Subnet                                                          | `local`                                                        |
| `subnet_txs_private_key`              | The private key used to sign all Subnet related transactions. The P-Chain address of the account will also be used as control key for the Subnet.                                       | `PrivateKey-ewoqjP7PxY4yr3iLTpLisriqt94hdyDFNgchSxGGztUrTXtNN` |
| `subnet_txs_key_encoding`             | Encoding of the private key. Can be `cb58` or `hex`.                                                                                                                                    | `cb58`                                                         |
| `subnet_blockchains_check_name`       | Whether to fail if a blockchain with the same name already exists                                                                                                                       | `true`                                                         |
| `subnet_blockchains_list`             | List of blockchains to create in the Subnet. See [Blockchain configuration](#blockchain-configuration) for the list structure.                                                          | NA                                                             |
| `subnet_validators_add`               | Whether to add the validatores from `subnet_validators_params` to the Subnet                                                                                                            | `true`                                                         |
| `subnet_validators_params`            | Validation parameters for each validator to add to the Subnet. See [Validators parameters](#validators-parameters).                                                                     | `[]`                                                           |
| `subnet_validator_start_time_command` | Command used to dynamically compute `start_time_command_output`                                                                                                                         | 2 minutes from now using `date`                                |
| `subnet_validator_end_time_command`   | Command used to dynamically compute `end_time_command_output`                                                                                                                           | 1 week and 2 minutes from now using `date`                     |
| `subnet_validator_start_time`         | Start time of the validation either in RFC 3339 format (`YYYY-MM-DDTHH:MM:SSZ`) or `start_time_command_output` that will be resolved by executing `subnet_validator_start_time_command` | `start_time_command_output`                                    |
| `subnet_validator_end_time`           | End time of the validation either in RFC 3339 format (`YYYY-MM-DDTHH:MM:SSZ`) or `end_time_command_output` that will be resoved by executing `subnet_validator_end_time_command`        | `end_time_command_output`                                      |
| `subnet_validator_stake_or_weight`    | Default stake (for elastic Subnets) or weight (for permissioned Subnets) of validators                                                                                                  | `100`                                                          |
| `subnet_validator_delegation_fee`     | Default delegation fee in percentage.                                                                                                                                                   | `2`                                                            |

## Inventory requirements

- **The node used to issue transactions** has to be in the `subnet_txs_host` group.
- **The nodes to be added as validators** to the Subnet have to be in the `subnet_validators` group. The Ansible host has to be able to connect to those nodes via SSH.

## Blockchain configuration

Each blockchain in `subnet_blockchains_list` is defined by a dictionary with the following keys:

- `name`: Name of the blockchain
- `vm`: Name of the VM in the collection to use for the blockchain. See [Supported VMs and AvalancheGo compatibility](/docs/toolkit/ansible-avalanche-collection/reference/roles/avalanche-node#supported-vms-and-avalanchego-compatibility) for the list of supported VMs.
- `genesis_data`: Genesis data of the blockchain. The structure of the genesis data is different for each VM:
  - For the `subnet-evm`:
    ```yaml
    config:
      chainId: 66666
      homesteadBlock: 0
      eip150Block: 0
      eip150Hash: "0x2086799aeebeae135c246c65021c82b4e15a2c451340993aacfd2751886514f0"
      eip155Block: 0
      eip158Block: 0
      byzantiumBlock: 0
      constantinopleBlock: 0
      petersburgBlock: 0
      istanbulBlock: 0
      muirGlacierBlock: 0
      subnetEVMTimestamp: 0
      feeConfig:
        gasLimit: 8000000
        minBaseFee: 25000000000
        targetGas: 15000000
        baseFeeChangeDenominator: 36
        minBlockGasCost: 0
        maxBlockGasCost: 1000000
        targetBlockRate: 2
        blockGasCostStep: 200000
    alloc:
      8db97C7cEcE249c2b98bDC0226Cc4C2A57BF52FC:
        balance: "0x295BE96E64066972000000"
    nonce: "0x0"
    timestamp: "0x0"
    extraData: "0x00"
    gasLimit: "0x7A1200"
    difficulty: "0x0"
    mixHash: "0x0000000000000000000000000000000000000000000000000000000000000000"
    coinbase: "0x0000000000000000000000000000000000000000"
    number: "0x0"
    gasUsed: "0x0"
    parentHash: "0x0000000000000000000000000000000000000000000000000000000000000000"
    ```

:::tip
To generate the genesis data for a new blockchain, you can use the Avalanche CLI wizard. See [Create the Subnet EVM blockchain configuration](/docs/toolkit/ash-cli/tutorials/local-subnet#create-the-subnet-evm-blockchain-configuration).
:::

## Validators parameters

Each validator can have its own validation parameters. The parameters are defined by a dictionary with the following keys:

- `node_id`: ID of the node to add as validator
- `start_time`: Start time of the validation in RFC 3339 format: `YYYY-MM-DDTHH:MM:SSZ` format
- `end_time`: End time of the validation in RFC 3339 format: `YYYY-MM-DDTHH:MM:SSZ` format
- `stake_or_weight`: Stake (for elastic Subnets) or weight (for permissioned Subnets) of the validator
- `delegation_fee`: Delegation fee in percentage

Default values are available as variables, e.g. `subnet_validator_start_time`.

```yaml
subnet_validators_params:
  - node_id: NodeID-7Xhw2mDxuDS44j42TCB6U5579esbSt3Lg
    start_time: "{{ subnet_validator_start_time }}"
    end_time: "{{ subnet_validator_end_time }}"
    stake_or_weight: 100
    delegation_fee: 2
```
