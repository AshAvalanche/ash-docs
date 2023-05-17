---
sidebar_position: 2
---

# ash.avalanche.eth_call

The `ash.avalanche.eth_call` module calls a smart contract's function on an EVM Avalanche network.

## Module arguments

| Argument        | Required | Type  | Default value | Comment                                                                                 |
| --------------- | -------- | ----- | ------------- | --------------------------------------------------------------------------------------- |
| `rpc_url`       | Yes      | `str` | `None`        | RPC endpoint to call                                                                    |
| `contract_addr` | Yes      | `str` | `None`        | Address of the smart contract to query (in `0x...` format)                              |
| `abi`           | Yes      | `str` | `None`        | JSON ABI of the smart contract. Can be retrieved from [Snowtrace](https://snowtrace.io) |
| `function_sig`  | Yes      | `str` | `None`        | Signature of the function to call. Looks like `foo(uint32,bool)`                        |
| `parameters`    | Yes      | `raw` | `None`        | List of parameters of the functions.                                                    |

## Example playbook

The playbook `ash.avalanche.node/ash-node` makes use of this plugin to enrich the node configuration with on-chain data.
