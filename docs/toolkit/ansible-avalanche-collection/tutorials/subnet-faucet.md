---
sidebar_position: 7
---

# Subnet Faucet

In this section, we will learn how to use the `ash.avalanche.faucet` role to deploy an [Avalanche Faucet](https://github.com/ava-labs/avalanche-faucet) for an EVM blockchain.

:::note
For this tutorial, we will use the [`local`](https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local) inventory provided by the [Ansible Avalanche Getting Started](https://github.com/AshAvalanche/ansible-avalanche-getting-started) repository. See [Create a Local Test Network](./local-test-network) for details.

We should also have created a Subnet and a blockchain, see [Subnet Creation](/docs/toolkit/ansible-avalanche-collection/tutorials/subnet-creation) for details.
:::

## Requirements

The `ash.avalanche.faucet` role uses Docker and the `ash.avalanche.install_faucet_docker` playbook installs Docker through the [geerlingguy.docker](https://galaxy.ansible.com/geerlingguy/docker).

We can make this role available locally with:

```bash
ansible-galaxy install -r ansible_collections/ash/avalanche/requirements.yml
```

## Configure the faucet

The Avalanche Faucet will be installed as a [Docker Compose](https://docs.docker.com/compose/) service on the nodes of the `faucet` Ansible group. In [Ansible Avalanche Getting Started](https://github.com/AshAvalanche/ansible-avalanche-getting-started), it is the `frontend` node by default. You can change this by editing the [`hosts`](https://github.com/AshAvalanche/ansible-avalanche-getting-started/blob/main/inventories/local/hosts) file.

We need to set the blockchain configuration using the `avalanche_faucet_evmchains` variable. Let's modify [`faucet.yml`](https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local/group_vars/faucet.yml) (the `group_vars` file associated with our hosts' group):

```yaml title="inventories/local/group_vars/faucet.yml"
avalanche_faucet_evmchains:
  - ID: ASH
    NAME: AshLocalEVM
    TOKEN: ASH
    RPC: http://192.168.60.11:9650/ext/bc/2dEmExGjJT6MouJRr1PqV4PSQEbScDAjKuPtT6pgqYR5xdUuac/rpc
    CHAINID: 66666
    EXPLORER: http://192.168.60.19:4000
    IMAGE: https://docs.ash.center/img/ash-logo.svg
    MAX_PRIORITY_FEE: 2000000000
    MAX_FEE: 100000000000
    DRIP_AMOUNT: 2
    RATELIMIT:
      MAX_LIMIT: 1
      WINDOW_SIZE: 1440
```

The blockchain ID (`2dEmExGjJT6MouJRr1PqV4PSQEbScDAjKuPtT6pgqYR5xdUuac` in our case) should be the one created in the [Subnet Creation](/docs/toolkit/ansible-avalanche-collection/tutorials/subnet-creation) tutorial.

:::tip
If you went through all the tutorials with the [`local`](https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local) inventory and the default variables, you should be good to go! Otherwise, check out the other variables at [`ash.avalanche.faucet`](/docs/toolkit/ansible-avalanche-collection/reference/roles/avalanche-faucet).
:::

## Install the faucet

Running the `ash.avalanche.install_faucet_docker` will install Docker and the docker-compose service:

```bash
ansible-playbook ash.avalanche.install_faucet_docker -i inventories/local
```

The Faucet should then be available at [http://192.168.60.19:8000](http://192.168.60.19:8000)

<figure>

![Ash faucet](/img/ash-faucet.png)

<figcaption style={{textAlign: 'center'}}>Fig.1 - Ash faucet</figcaption>
</figure>

:::caution
The `ash.avalanche.faucet` role is not yet compatible with secured HTTP API endpoints (see [Node security](./node-security) for details).
:::
