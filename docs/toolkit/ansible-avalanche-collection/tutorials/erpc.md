---
sidebar_position: 6
---

# eRPC

eRPC is a fault-tolerant EVM RPC proxy with persistent caching, optimized for read-intensive workloads such as data indexing and high-traffic frontends. For more details, refer to the [eRPC Documentation](https://docs.erpc.cloud/).

It leverages all available (or specified) network nodes to expose every detected (or specified) blockchain, enhancing availability and load balancing.

:::note
For this tutorial, we will use the [`local`](https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local) inventory from the [Ansible Avalanche Getting Started](https://github.com/AshAvalanche/ansible-avalanche-getting-started) repository. Also ensure you have already created a Subnet and a blockchain; see [Subnet Creation](/docs/toolkit/ansible-avalanche-collection/tutorials/subnet-creation) for details.
:::

:::tip
Always make sure you have the latest version of the collection installed. See [Installation and Upgrade](/docs/toolkit/ansible-avalanche-collection/installation).
:::

## Requirements

The `ash.avalanche.erpc` role relies on Docker, and the playbooks `ash.avalanche.install_erpc_docker` and `ash.avalanche.install_erpc_network` install Docker via the [geerlingguy.docker](https://galaxy.ansible.com/geerlingguy/docker) role.

Install the required role locally with:

```bash
ansible-galaxy install -r ansible_collections/ash/avalanche/requirements.yml
```

## Deployment Guide

There are two playbook to deploy an eRPC instance using this Ansible role:

- **Auto-detect Network and Nodes:**  
  This method automatically scans your Avalanche network, detects all available blockchains, and configures the corresponding endpoints on all accessible nodes in your `avalanche_nodes` group (as defined in your host inventory).
  
  ```bash title="Command"
  ansible-playbook ash.avalanche.install_erpc_network -i inventories/local
  ```
  
- **Custom Configuration:**  
  You can manually specify the node endpoints used by eRPC by setting the `erpc_endpoint_list` variable and define which blockchains to expose using `erpc_chains`. By default, the standard collection node URLs are used, and only the C-Chain is exposed.
  
  ```bash title="Command"
  ansible-playbook ash.avalanche.install_erpc_docker -i inventories/local
  ```

:::info
In both cases, you can further customize additional variables such as `erpc_include_c_chain`, `erpc_aliasing_rules`, and `erpc_limiters_budgets`.
:::

## Endpoint Access

To access a chain, use its EVM chain ID:  
`<erpc-ip>:4000/<evm_chain_id>`

## Usage Example

After deploying eRPC, you can interact with the endpoints using:
  
  ```bash title="Command"
  curl -X POST --data '{"jsonrpc":"2.0","id":1,"method":"eth_blockNumber","params":[]}' -H 'content-type:application/json;' $(terraform -chdir=terraform/multipass output -raw frontend_ip):4000/43113
  ```

  ```json title="Output"
  {"jsonrpc":"2.0","id":1,"result":"0x0"}
  ```

:::info
For advanced [eRPC](https://docs.erpc.cloud/) configurations, you can use the `erpc_projects` variable to set up dedicated [projects](https://docs.erpc.cloud/config/projects). Additionally, `erpc_aliasing_rules` can be used to define [aliases](https://docs.erpc.cloud/config/aliasing-rules) and `erpc_limiters_budgets` for setting up [Rate Limiters](https://docs.erpc.cloud/config/rate-limiters).
:::

:::caution
The `ash.avalanche.erpc` role is currently not compatible with secured HTTP API endpoints.
:::
