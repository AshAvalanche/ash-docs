---
sidebar_label: Blockchain management
sidebar_position: 6
---

# Blockchain management

In this section, we will learn how to use the `ash.avalanche.blockchain` role to create blockchains in Subnets.

:::note
For this tutorial, we will use the [`local`](https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local) inventory provided by the [Ansible Avalanche Getting Started](https://github.com/AshAvalanche/ansible-avalanche-getting-started) repository. See [Create a local test network](./local-test-network) for details.

Make sure to have gone through [VM management](./vm-management) as we need the Subnet EVM binary installed on our nodes.

We should also have created and tracked a Subnet, see [Subnet management](./subnet-management) for details.
:::

## Create a Subnet EVM blockchain in a Subnet

The playbook [ash.avalanche.create_local_blockchains](https://github.com/AshAvalanche/ansible-avalanche-collection/tree/main/playbooks/create_local_blockchains.yml) will create the blockchains listed in the `create_blockchains` variable in [`subnet_control_node.yml`](https://github.com/AshAvalanche/ansible-avalanche-getting-started/blob/main/inventories/local/group_vars/subnet_control_node.yml#L9).

By default, the `Subnet EVM` blockchain is created using the `subnetevm` VM.

```bash
ansible-playbook ash.avalanche.create_local_blockchains -i inventories/local \
  -e subnet_id=$MY_SUBNET_ID
```

:::tip
`$MY_SUBNET_ID` should be the Subnet ID returned by the [Subnet creation](./subnet-management#subnet-creation) step.
:::

The blockchain information are displayed at the end of its creation:

```yaml
ok: [validator01] =>
  blockchain_info:
    id: 2qySivgXbE13Guu3icudmMj5HTnDiXnJHznLd22JZSWCCA3tbL
    name: Subnet EVM
    subnetID: QBEQJBMPLQTQw7JzG1GtqLDasvcFyj5RLnvwyxDi6LfooQr7L
    vmID: srEXiWaHuhNyGwPUi444Tu47ZEDwxTWrbQiuD7FmgSAQ6X7Dy
```

## Customization

To customize the blockchains created: edit the variables in `inventories/local/group_vars/subnet_control_node.yml`.

For a list of all available variables, see the [ash.avalanche.blockchain role documentation](https://github.com/AshAvalanche/ansible-avalanche-collection/tree/main/roles/blockchain).
