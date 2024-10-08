---
sidebar_position: 1
---

# Local Test Network Creation

In this section, we will learn how to use the [ash.avalanche](https://github.com/AshAvalanche/ansible-avalanche-collection) Ansible collection to provision a local [Avalanche](https://docs.avax.network/) test network on [Multipass](https://multipass.run) virtual machines.

## Requirements

- Python >=3.9 with `venv` module installed
- For the local test network:
  - 7+GiB of free RAM
  - Multipass installed (see [Install Multipass](https://multipass.run/install))
    :::info
    [Multipass](https://multipass.run) is a tool to generate cloud-style Ubuntu VMs quickly on Linux, macOS, and Windows
    :::
  - Terraform installed (see [Install Terraform](https://developer.hashicorp.com/terraform/tutorials/aws-get-started/install-cli))
    :::info
    [Terraform](https://terraform.io) is an infrastructure as code tool that lets you build, change, and version infrastructure safely and efficiently
    :::
- For filtering outputs:
  - [jq](https://stedolan.github.io/jq/) (see [Download jq](https://stedolan.github.io/jq/download/))

:::note
We recommend installing the Ash CLI to easily get information about your nodes and Subnets. See [Ash CLI - Installation](/docs/toolkit/ash-cli/installation).  
The tutorials still provide the snippets to query the Avalanche APIs with cURL.
:::

## Setup the environment

1. Clone the Getting Started repository:

   ```bash
   git clone https://github.com/AshAvalanche/ansible-avalanche-getting-started
   cd ansible-avalanche-getting-started
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

4. Initialize the Terraform modules:

   ```bash
   terraform -chdir=terraform/multipass init
   ```

## Bootstrap the local test network

:::note
This section uses the `local` inventory which is pre-configured as a local Avalanche network (see `avalanchego_network_id: local` in [avalanche_nodes.yml](https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local/group_vars/avalanche_nodes.yml#L5)).
:::

1. Create the virtual machines that will host the validator nodes using Terraform (enter `yes` when prompted):

   ```bash
   terraform -chdir=terraform/multipass apply
   ```

We will use the [ash.avalanche.bootstrap_local_network](https://github.com/AshAvalanche/ansible-avalanche-collection/blob/main/playbooks/bootstrap_local_network.yml) playbook to bootstrap the local network. This playbook starts a first validator (`validator01`) and then boostrap additional nodes (`validator02-05`) from the first node, thus creating a local network.

2. Bootstrap the Avalanche nodes:

   ```bash
   ansible-playbook ash.avalanche.bootstrap_local_network -i inventories/local
   ```

It's done! We now have a ready-to-use 5-nodes Avalanche local test network.

## Issue API calls

The validator nodes expose AvalancheGo APIs on their local and public interfaces. Because the public IP address is not known in advance, it is easier to leverage `multipass exec` to query the [Avalanche APIs](https://docs.avax.network/api-reference/p-chain/api) on the local interface. For example, to check if the P-Chain is done bootstrapping:

```bash title="Command"
multipass exec validator01 -- curl -X POST --data '{
  "jsonrpc": "2.0",
  "id"     : 1,
  "method" : "info.isBootstrapped",
  "params": {
    "chain": "P"
  }
}' -H 'content-type:application/json;' http://127.0.0.1:9650/ext/info
```

```bash title="Output"
{"jsonrpc":"2.0","result":{"isBootstrapped":true},"id":1}
```

:::info
You can still **use the public interface** to query the API. To retrieve a node public IP address using the `terraform output` command as shown above. E.g. for `validator02`:

```bash
terraform -chdir=terraform/multipass output -json validators_ips | jq '.[1]'
```

:::

## Use the Ash CLI

The Ash CLI is a powerful tool to interact with Avalanche networks. See [Ash CLI - Introduction](/docs/toolkit/ash-cli/introduction) for more information.

### Use the Ash CLI installed in the VMs

The Ash CLI is **installed and automatically configured in the Avalanche nodes** of the local test network, and can be used through `multipass exec`. For example, to check if the P-Chain is done bootstrapping:

```bash title="Command"
multipass exec validator01 -- ash avalanche node is-bootstrapped P
```

```bash title="Output"
Chain 'P' on node '127.0.0.1:9650': Bootstrapped ✓
```

### Use the Ash CLI installed locally

:::note
See [Ash CLI - Installation](/docs/toolkit/ash-cli/installation) for the installation instructions on your platform.
:::

To use the Ash CLI with the local network, we need to use a **custom configuration file**. Fortunately, the `local-test-network.yml` file is generated by Terraform in the `terraform/multipass` directory. Set it as default for the Ash CLI:

```bash
export ASH_CONFIG=terraform/multipass/local-test-network.yml
export AVALANCHE_NETWORK=local
```

You can now use your local Ash CLI, e.g. to list all the Subnets on the local network:

```bash
ash avalanche subnet list
```

## Pre-funded account

On local Avalanche networks, a pre-funded account is available with the following private key:

- CB58 encoded: `PrivateKey-ewoqjP7PxY4yr3iLTpLisriqt94hdyDFNgchSxGGztUrTXtNN`
- Hex encoded: `0x56289e99c94b6912bfc12adc093c9b51124f0dc54ac7a766b2bc5ccf558d8027`

We will use this account in the next tutorials.

## Customize the installation

Different aspects of the installation can be customized:

- To customize the VMs specs: edit [`terraform/multipass/main.tf`](https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/terraform/multipass/main.tf)
- To customize AvalancheGo installation: edit the variables in [`inventories/local/group_vars/avalanche_nodes.yml`](https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local/group_vars/avalanche_nodes.yml).

For a list of all available variables, see [ash.avalanche.node reference](/docs/toolkit/ansible-avalanche-collection/reference/roles/avalanche-node).

## Use Multipass to manage the VMs

### List the VMs

```bash
multipass list
```

### Stop/restart the VMs

```bash
# Stop all VMs
multipass stop validator0{1..5} frontend
# Start all VMs
multipass start validator0{1..5} frontend
# Restart all VMs
multipass restart validator0{1..5} frontend
```

## Teardown the local test network

1. Destroy the virtual machines:

   ```bash
   terraform -chdir=terraform/multipass destroy
   ```

2. Deactivate the Python venv:

   ```bash
   deactivate
   ```
