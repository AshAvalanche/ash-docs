---
sidebar_position: 1
---

# Local Test Network Creation

In this section, we will learn how to use the [ash.avalanche](https://github.com/AshAvalanche/ansible-avalanche-collection) Ansible collection to provision a local [Avalanche](https://docs.avax.network/) test network on [VirtualBox](https://www.virtualbox.org/) virtual machines.

## Requirements

- Python >=3.9 with `venv` module installed
- For the local test network:
  - 6+ GB of free RAM
  - Vagrant (see [Installing Vagrant](https://www.vagrantup.com/docs/installation))
  - VirtualBox (see [Download VirtualBox](https://www.virtualbox.org/wiki/Downloads))
- For filtering outputs:
  - [jq](https://stedolan.github.io/jq/) (see [Installation](https://stedolan.github.io/jq/download/))

:::note
We recommend installing the Ash CLI to easily get information about your nodes and Subnets. See [Ash CLI - Installation](/docs/toolkit/ash-cli/installation).  
The tutorials still provide the snippets to query the Avalanche APIs with cURL.
:::

## Installation

1. Clone the Getting Started repository:

   ```bash
   git clone https://github.com/AshAvalanche/ansible-avalanche-getting-started
   cd ansible-avalanche-collection-getting-started
   ```

2. Setup and activate Python venv:

   ```bash
   bin/setup.sh
   source .venv/bin/activate
   ```

3. Install the `ash.avalanche` collection:

   ```bash
   ansible-galaxy collection install git+https://github.com/AshAvalanche/ansible-avalanche-collection.git
   ```

## Bootstrap a local test network

:::note
This section uses the `local` inventory which is pre-configured as a local Avalanche network (see `avalanchego_network_id: local` in [avalanche_nodes.yml](https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local/group_vars/avalanche_nodes.yml#L5)).
:::

1. Create the 5 virtual machines that will host the Avalanche nodes:

   ```bash
   vagrant up
   ```

We will use the [ash.avalanche.bootstrap_local_network](https://github.com/AshAvalanche/ansible-avalanche-collection/blob/main/playbooks/bootstrap_local_network.yml) playbook to bootstrap the local network. This playbook starts a first validator (`validator01`) and then boostrap additional nodes (`validator02-05`) from the first node, thus creating a local network.

2. Bootstrap the Avalanche nodes:

   ```bash
   ansible-playbook ash.avalanche.bootstrap_local_network -i inventories/local
   ```

It's done! We now have a ready to use 5 nodes Avalanche local test network.

## API calls

The node `validator01-local` exposes AvalancheGo APIs on it's public IP: you can query any [Avalanche API](https://docs.avax.network/build/avalanchego-apis/) at `192.168.60.11:9650` from your terminal. For example, to check if the P-Chain is done bootstrapping:

```bash
curl -X POST --data '{
  "jsonrpc": "2.0",
  "id"     : 1,
  "method" : "info.isBootstrapped",
  "params": {
    "chain": "P"
  }
}' -H 'content-type:application/json;' http://192.168.60.11:9650/ext/info
```

The output should like this:

```bash
{"jsonrpc":"2.0","result":{"isBootstrapped":true},"id":1}
```

## Pre-funded account

A user with access to the default pre-funded account (see [Import the Local Network's Pre-funded Address](https://docs.avax.network/apis/avalanchejs/create-an-asset-on-the-x-chain#import-the-local-networks-pre-funded-address) is automatically created on `validator01-local`:

- Username: `ewoq`
- Password: `I_l1ve_@_Endor`
- Private key: `PrivateKey-ewoqjP7PxY4yr3iLTpLisriqt94hdyDFNgchSxGGztUrTXtNN`

## Customization

Different aspects of the installation can be customized:

- To customize the VMs specs: edit the [Vagrantfile](https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/Vagrantfile) and the [`hosts` file](https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local/hosts) accordingly
- To customize AvalancheGo installation: edit the variables in `inventories/local/group_vars`:
  - [avalanche_nodes.yml](https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local/group_vars/avalanche_nodes.yml) is applied to all nodes
  - [bootstrap_node.yml](https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local/group_vars/bootstrap_node.yml) is only applied to the bootstrap node

For a list of all available variables, see [ash.avalanche.node reference](../reference/roles/avalanche-node.md).
