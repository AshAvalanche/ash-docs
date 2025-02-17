---
sidebar_position: 10
---

# Nodes Rolling Restart

In this section, we will learn how to **restart Avalanche nodes sequentially** (a.k.a. perform a "rolling restart") to avoid Subnet downtime.

:::note
For this tutorial, we will use the [`local`](https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local) inventory provided by the [Ansible Avalanche Getting Started](https://github.com/AshAvalanche/ansible-avalanche-getting-started) repository. See [Create a Local Test Network](./local-test-network) for details.
:::

:::tip
Always make sure you have the latest version of the collection installed. See [Installation and upgrade](/docs/toolkit/ansible-avalanche-collection/installation).
:::

## Disable automatic restarts

By default, **any change to the node/VMs versions or configurations** will trigger a restart of AvalancheGo. This is fine for testing purposes but **not recommended for Subnet validators**, (especially for a small-size permissioned Subnet where each validator has a high weight).

To disable automatic restarts, set `avalanchego_auto_restart` to `false` in the [`avalanche_nodes.yml`](https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local/group_vars/avalanche_nodes.yml) group variables file:

```yml
avalanchego_auto_restart: false
```

## Trigger a rolling restart of the nodes

After an upgrade or configation change, use the `rolling_restart` playbook. This playbook will restart every node sequentially, waiting for the node to be **bootstrapped on all chains** and **healthy on all tracked Subnets** before moving to the next node.

```bash
ansible-playbook ash.avalanche.rolling_restart -i inventories/local
```

:::info
It can take a while for a node to be bootstrapped and healthy depending on the node hardware and the Subnet activity.
:::
