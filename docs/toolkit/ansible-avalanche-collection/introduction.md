---
sidebar_position: 1
---

# Introduction

The [Ansible Avalanche Collection](https://github.com/AshAvalanche/ansible-avalanche-collection) provides [Ansible](https://www.ansible.com) roles, playbooks and modules to manage [Avalanche](https://docs.avax.network) nodes, Subnets, blockchains and more!

## What is Ansible? And why do we use it?

Ansible is an open-source IT automation tool developed by [RedHat](https://www.redhat.com). It has become the de facto tool used to automate systems configuration, software deployment and zero downtime rolling updates. This makes it the perfect tool to operate large-scale Avalanche node clusters.

The Ash team has years of experience operating large-scale distributed systems with Ansible.

**Learn more:**

- [Ansible homepage](https://www.ansible.com/)
- [Ansible documentation](https://docs.ansible.com/ansible/latest/index.html)
- [Ansible GitHub (56k :star:)](https://github.com/ansible/ansible)

## Why an Ansible collection for Avalanche?

Ava Labs provides [avalanche-network-runner](https://github.com/ava-labs/avalanche-network-runner) to easily run a local test network (either locally or in [Kubernetes](https://kubernetes.io)).

This collection takes a different approach and provides tools for production environments. Those can also be used to bootstrap realistic test networks.

It aims at:

- **Provisioning Avalanche nodes** on Fuji or Mainnet with flawless upgrade capabilities. Ansible also brings easy node configuration persistence and idempotent deployments.
- **Bootstrapping local test networks** that really mimic production environments
- **Automating Subnet and blockchain operations** (subnet whitelisting, plugin deployment) for node operators
- And more

## Getting started

Follow the [tutorials](/docs/toolkit/ansible-avalanche-collection/tutorials/local-test-network) to get started!

## Collection resources

### Roles

- [ash.avalanche.node](/docs/toolkit/ansible-avalanche-collection/reference/roles/avalanche-node): install, configure and upgrade Avalanche nodes
- [ash.avalanche.subnet](/docs/toolkit/ansible-avalanche-collection/reference/roles/avalanche-subnet): create Avalanche subnets
- [ash.avalanche.blockchain](/docs/toolkit/ansible-avalanche-collection/reference/roles/avalanche-blockchain): create Avalanche blockchains
- [ash.avalanche.faucet](/docs/toolkit/ansible-avalanche-collection/reference/roles/avalanche-faucet): create Avalanche Faucet instances
- [ash.avalanche.evm.blockscout](/docs/toolkit/ansible-avalanche-collection/reference/roles/avalanche-blockscout): create Blockscout instances
- [ash.avalanche.ash_cli](/docs/toolkit/ansible-avalanche-collection/reference/roles/avalanche-ash-cli): install and configure the Ash CLI

### Modules

- [ash.avalanche.tx](/docs/toolkit/ansible-avalanche-collection/reference/modules/tx): submit a transaction to an Avalanche network
- [ash.avalanche.eth_call](/docs/toolkit/ansible-avalanche-collection/reference/modules/eth_call): `eth_call` a smart contract's function on an EVM Avalanche network

### Filters

- [ash.avalanche.convert](/docs/toolkit/ansible-avalanche-collection/reference/filters/convert): convert an amount between AVAX units
- [ash.avalanche.XXX_to_XXX](/docs/toolkit/ansible-avalanche-collection/reference/filters/xxx_to_xxx): convert a string between encodings

### Playbooks

- [ash.avalanche.bootstrap_local_network](https://github.com/AshAvalanche/ansible-avalanche-collection/blob/main/playbooks/bootstrap_local_network.yml): bootstrap a local test network (`avalanchego_network_id: local`)
- [ash.avalanche.provision_nodes](https://github.com/AshAvalanche/ansible-avalanche-collection/blob/main/playbooks/provision_nodes.yml): provision nodes for Fuji or Mainnet (`avalanchego_network_id: fuji|mainnet`)
- [ash.avalanche.create_local_subnet](https://github.com/AshAvalanche/ansible-avalanche-collection/blob/main/playbooks/create_local_subnet.yml): create a Subnet on a local test network (**do not** use in production)
- [ash.avalanche.create_local_blockchains](https://github.com/AshAvalanche/ansible-avalanche-collection/blob/main/playbooks/create_local_blockchains.yml): create blockchains in a Subnet on a local test network (**do not** use in production)
- [ash.avalanche.transfer_avax](https://github.com/AshAvalanche/ansible-avalanche-collection/blob/main/playbooks/transfer_avax.yml): example of how to transfer AVAX from the X-Chain to the C-Chain (**do not** use in production)
- [ash.avalanche.create_admin_user](https://github.com/AshAvalanche/ansible-avalanche-collection/blob/main/playbooks/create_admin_user.yml): create an admin user on a node using the `/ext/keystore` API (**do not** use in production)
- [ash.avalanche.add_validator](https://github.com/AshAvalanche/ansible-avalanche-collection/blob/main/playbooks/add_validator.yml): starts a validation cycle using the `platform.addValidator` API (**do not** use in production)
- [ash.avalanche.install_blockscout_docker](https://github.com/AshAvalanche/ansible-avalanche-collection/blob/main/playbooks/install_blockscout_docker.yml): installs a Blockscout instance over a Subnet EVM blockchain using Docker
- [ash.avalanche.install_faucet_docker](https://github.com/AshAvalanche/ansible-avalanche-collection/blob/main/playbooks/install_faucet_docker.yml): installs an Avalache Faucet instance over a Subnet EVM blockchain using Docker
- [ash.avalanche.install_monitoring_stack](https://github.com/AshAvalanche/ansible-avalanche-collection/blob/main/playbooks/install_monitoring_stack.yml): installs and configures Grafana, Prometheus and Node Exporter to monitor Avalanche nodes
