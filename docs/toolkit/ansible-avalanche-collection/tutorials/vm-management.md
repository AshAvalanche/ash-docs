---
sidebar_position: 4
---

# VM Management

In this section, we will learn how to use the [Ansible Avalanche Collection](https://github.com/AshAvalanche/ansible-avalanche-collection) to install or upgrade VMs on the nodes.

:::note
For this tutorial, we will use the [`local`](https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local) inventory provided by the [Ansible Avalanche Getting Started](https://github.com/AshAvalanche/ansible-avalanche-getting-started) repository. See [Create a Local Test Network](./local-test-network) for details.
:::

## Install a VM

:::note
For now only the [Subnet EVM](https://github.com/ava-labs/subnet-evm) is supported by the collection.
:::

The VMs are managed by the `avalanchego_vms_install` role variable which is empty by default ([`avalanchego_vms_install: []`](https://github.com/AshAvalanche/ansible-avalanche-collection/blob/main/roles/node/defaults/main.yml#L42)).

To add a new VM that will be installed on our validator nodes, we just have to update the `avalanchego_vms_install` variable. For the next example, we will install Ava Labs' [Subnet EVM](https://github.com/ava-labs/subnet-evm) in version 0.4.9. The variable we are should be added to `inventories/local/group_vars/avalanche_nodes.yml`:

```yml
[...]
avalanchego_vms_install:
  - subnet-evm=0.4.9
[...]
```

We can then install this VM to all the nodes defined in our Ansible inventory by running the `provision_nodes` playbook again:

```bash
ansible-playbook ash.avalanche.provision_nodes -i inventories/local
```

:::tip
The Ash team maintains a AvalancheGo / Ava Labs' VMs [compatibility matrix](../reference/roles/avalanche-node.md#available-vms-and-avalanchego-compatibility) that keeps you from mistakenly add a VM that is not compatible with your current AvalancheGo version which could cause a critical node failure.
:::

The VM binary can then be found on the Avalanche node at `/opt/avalanche/avalanchego/current/plugins/`:

```bash {2,4}
# First SSH to the node
vagrant ssh validator01-local

ll /opt/avalanche/avalanchego/current/plugins/
total 8
drwxr-xr-x 2 avalanche avalanche 4096 Mar 10 18:30 ./
drwxr-xr-x 3 avalanche avalanche 4096 Mar  9 16:10 ../
lrwxrwxrwx 1 root      root        56 Mar 10 18:30 subnet-evm -> /opt/avalanche/vms/subnet-evm/subnet-evm-v0.4.9/subnet-evm
```

AvalancheGo has been automatically restarted and the VM is ready to be used.

## Upgrade a VM

Upgrading a VM is as simple as updating the `avalanchego_vms_install` variable.

For example, if we want to upgrade the `subnet-evm` from version 0.4.9 to 0.4.10:

```yml
[...]
avalanchego_vms_install:
  - subnet-evm=0.4.10
[...]
```

Re-run the `provision_nodes` playbook:

```bash
ansible-playbook ash.avalanche.provision_nodes -i inventories/local
```

`/opt/avalanche/avalanchego/current/plugins/` has been updated accordingly:

```bash {1}
ll /opt/avalanche/avalanchego/current/plugins/
total 8
drwxr-xr-x 2 avalanche avalanche 4096 Mar 10 18:32 ./
drwxr-xr-x 3 avalanche avalanche 4096 Mar  9 16:10 ../
lrwxrwxrwx 1 root      root        56 Mar 10 18:32 subnet-evm -> /opt/avalanche/vms/subnet-evm/subnet-evm-v0.4.10/subnet-evm
```

## Uninstall a VM

Uninstalling a VM can be done by removing it from the `avalanchego_vms_install` variable and re-running the `provision_nodes` playbook.
