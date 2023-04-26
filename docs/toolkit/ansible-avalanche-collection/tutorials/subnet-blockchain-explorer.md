---
sidebar_position: 7
---

# Subnet Blockchain Explorer

In this section, we will learn how to use the `ash.avalanche.blockscout` role to deploy a [Blockscout](https://www.blockscout.com/) instance for an EVM blockchain.

:::note
For this tutorial, we will use the [`local`](https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local) inventory provided by the [Ansible Avalanche Getting Started](https://github.com/AshAvalanche/ansible-avalanche-getting-started) repository. See [Create a local test network](./local-test-network) for details.

We should also have created a Subnet and a blockchain, see [Blockchain management](./blockchain-management) for details.
:::

## Requirements

The `ash.avalanche.faucet` role uses Docker and the `ash.avalanche.install_blockscout_docker` playbook installs Docker through the [geerlingguy.docker](https://galaxy.ansible.com/geerlingguy/docker).

We can make this role available locally with:

```bash
ansible-galaxy install -r ansible_collections/ash/avalanche/requirements.yml
```

## Configure Blockscout

The Blockscout instance will be installed as a [Docker Compose](https://docs.docker.com/compose/) service on the node targeted by the `blockscout` Ansible group. In [Ansible Avalanche Getting Started](https://github.com/AshAvalanche/ansible-avalanche-getting-started), it is `validator01` by default. You can change this by editing the [`hosts`](https://github.com/AshAvalanche/ansible-avalanche-getting-started/blob/main/inventories/local/hosts) file.

We need to set the blockchain configuration using the `blockscout_docker_rpc` variable. Let's modify [`blockscout.yml`](https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local/group_vars/blockscout.yml) (the `group_vars` file associated with our hosts' group):

```yaml
blockscout_docker_rpc: http://192.168.60.11:9650/ext/bc/2qySivgXbE13Guu3icudmMj5HTnDiXnJHznLd22JZSWCCA3tbL/rpc
```

The blockchain ID (`2qySivgXbE13Guu3icudmMj5HTnDiXnJHznLd22JZSWCCA3tbL` in our case) should be the one created in the [Blockchain management](./blockchain-management) tutorial.

:::tip
If you went through all the tutorials with the [`local`](https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local) inventory and the default variables, you should be good to go! Otherwise, check out the other variables at [`ash.avalanche.blockscout`](/docs/toolkit/ansible-avalanche-collection/reference/roles/avalanche-blockscout).
:::

## Install Blockscout

Running the `ash.avalanche.install_blockscout_docker` will install Docker and the docker-compose service:

```bash
ansible-playbook ash.avalanche.install_blockscout_docker -i inventories/local
```

Blockscout should then be available at [http://192.168.60.11:4000](http://192.168.60.11:4000)

<figure>

![Ash Blockscout](/img/ash-blockscout.png)

<figcaption style={{textAlign: 'center'}}>Fig.1 - Ash Blockscout</figcaption>
</figure>

:::caution
The `ash.avalanche.blockscout` role is not yet compatible with secured HTTP API endpoints (see [Node security](./node-security) for details).
:::
