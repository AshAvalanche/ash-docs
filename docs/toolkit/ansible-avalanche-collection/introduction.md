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
