---
sidebar_position: 4
---

# Blockchain VM Management

In this section, we will learn how to use the [Ansible Avalanche Collection](https://github.com/AshAvalanche/ansible-avalanche-collection) to install or upgrade blockchain VMs on the nodes.

:::note
For this tutorial, we will use the [`local`](https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local) inventory provided by the [Ansible Avalanche Getting Started](https://github.com/AshAvalanche/ansible-avalanche-getting-started) repository. See [Create a Local Test Network](./local-test-network) for details.
:::

:::tip
Always make sure you have the latest version of the collection installed. See [Installation and upgrade](/docs/toolkit/ansible-avalanche-collection/installation).
:::

## Install a VM

:::note
For now only the [Subnet EVM](https://github.com/ava-labs/subnet-evm) is supported by the collection, see section [Install a custom VM](#install-a-custom-vm) if you want to use the collection to install your own VM.
:::

The VMs are managed by the `avalanchego_vms_install` role variable which is empty by default ([`avalanchego_vms_install: {}`](https://github.com/AshAvalanche/ansible-avalanche-collection/blob/main/roles/node/defaults/main.yml#L42)).

To add a new VM that will be installed on our validator nodes, we just have to update the `avalanchego_vms_install` variable. For the next example, we will install Ava Labs' [Subnet EVM](https://github.com/ava-labs/subnet-evm) in version `0.6.3`. The variable we are should be added to [`avalanche_nodes.yml`](https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local/group_vars/avalanche_nodes.yml):

```yml title="inventories/local/group_vars/avalanche_nodes.yml"
avalanchego_vms_install:
  subnet-evm: 0.6.3
```

We can then install this VM to all the nodes defined in our Ansible inventory by running the `provision_nodes` playbook again:

```bash
ansible-playbook ash.avalanche.provision_nodes -i inventories/local
```

:::tip
The Ash team maintains a AvalancheGo / Ava Labs' VMs [compatibility matrix](/docs/toolkit/ansible-avalanche-collection/reference/roles/avalanche-node#supported-vms-and-avalanchego-compatibility) that keeps you from mistakenly add a VM that is not compatible with your current AvalancheGo version which could cause a critical node failure.
:::

The VM binary can then be found on the Avalanche node at `/opt/avalanche/avalanchego/current/plugins/`:

```bash {2} title="Command"
# First SSH to the node
multipass shell validator01

ll /opt/avalanche/avalanchego/current/plugins/
```

```bash title="Output"
total 8
drwxr-xr-x 2 avalanche avalanche 4096 Jul 25 11:21 ./
drwxr-xr-x 3 avalanche avalanche 4096 Jul 25 11:05 ../
lrwxrwxrwx 1 root      root        58 Jul 25 11:21 subnet-evm -> /opt/avalanche/vms/subnet-evm/subnet-evm-v0.5.5/subnet-evm*
```

AvalancheGo has been automatically restarted and the VM is ready to be used.

## Upgrade a VM

Upgrading a VM is as simple as updating the `avalanchego_vms_install` variable.

For example, if we want to upgrade the `subnet-evm` from version `0.5.5` to `0.5.6`:

```yml title="inventories/local/group_vars/avalanche_nodes.yml"
avalanchego_vms_install:
  subnet-evm: 0.5.6
```

Re-run the `provision_nodes` playbook:

```bash
ansible-playbook ash.avalanche.provision_nodes -i inventories/local
```

`/opt/avalanche/avalanchego/current/plugins/` has been updated accordingly:

```bash {1} title="Command"
multipass shell validator01

ll /opt/avalanche/avalanchego/current/plugins/
```

```bash title="Output"
total 8
drwxr-xr-x 2 avalanche avalanche 4096 Jul 25 11:22 ./
drwxr-xr-x 3 avalanche avalanche 4096 Jul 25 11:05 ../
lrwxrwxrwx 1 root      root        58 Jul 25 11:22 subnet-evm -> /opt/avalanche/vms/subnet-evm/subnet-evm-v0.5.6/subnet-evm*
```

## Uninstall a VM

Uninstalling a VM can be done by removing it from the `avalanchego_vms_install` variable and re-running the `provision_nodes` playbook.

## Install a custom VM

You can use the Ansible Avalanche Collection to install your own VMs by extending the [compatibility matrix](/docs/toolkit/ansible-avalanche-collection/reference/roles/avalanche-node#supported-vms-and-avalanchego-compatibility).

In this example, we will add [Movement Labs](https://movementlabs.xyz/)'s [M1](https://github.com/movemntdev/M1), a VM bringing an [Aptos](https://aptoslabs.com/)-compatible blockchain to the Subnet ecosystem.

The compatibility matrix is managed by the `avalanchego_vms_list` role variable. We can extend the list by adding the following to [`avalanche_nodes.yml`](https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local/group_vars/avalanche_nodes.yml).

```yaml
# List of VMs supported by the collection
avalanchego_vms_list:
  m1:
    download_url: https://github.com/AshAvalanche/M1/releases/download
    id: qCP4kDnEWVorqyoUmcAtAmJybm8gXZzhHZ7pZibrJJEWECooU
    ash_vm_type: Custom
    binary_filename: m1
    versions_comp:
      0.1.0:
        ge: 1.10.9
        le: 1.10.12
```

Here are some details about the variables:

- `m1`: The name of the VM.
- `download_url`: URL where the VM binary archive and checksum can be downloaded from.
- `id`: The VM ID (see [Installing a VM](https://docs.avax.network/build/vm/intro#installing-a-vm)).
- `ash_vm_type`: The VM type used by the [Ash CLI](/docs/toolkit/ash-cli/introduction). `Custom` for a custom VM.
- `binary_filename`: The name of the VM binary (will be used to generate the archive filename, the checksum filename and the extracted binary filename)
- `versions_comp`: AvalancheGo version boundaries for which the VM is compatible. `le` is for "less or equal" and `ge` for "greater or equal".

:::tip
By defining the `m1` VM with the variables above, the collection will download the VM binary archive from `https://github.com/AshAvalanche/M1/releases/download/v0.1.0/m1_0.1.0_linux_amd64.tar.gz`, validate its SHA-256 checksum with `https://github.com/AshAvalanche/M1/releases/download/v0.1.0/m1_0.1.0_checksums.txt` and extract the `m1` VM binary.
:::

With the example above, we can now install the M1 VM to our nodes by adding the following to [`avalanche_nodes.yml`](https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local/group_vars/avalanche_nodes.yml):

```yml title="inventories/local/group_vars/avalanche_nodes.yml"
avalanchego_vms_install:
  m1: 0.1.0
```

We can then install this VM to all the nodes defined in our Ansible inventory by running the `provision_nodes` playbook again:

```bash
ansible-playbook ash.avalanche.provision_nodes -i inventories/local
```

:::caution
For security reasons, the collection will checksum test the downloaded VM. The checksum file must be available at the same location as the VM binary archive. The standard follows is the same as Ava Lab's [Subnet EVM](https://github.com/ava-labs/subnet-evm) (see release [v0.5.3](https://github.com/ava-labs/subnet-evm/releases/tag/v0.5.3) for an example.).
:::
