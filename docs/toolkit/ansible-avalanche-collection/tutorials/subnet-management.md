---
sidebar_position: 5
---

# Subnet Management

In this section, we will learn how to use the `ash.avalanche.subnet` role to create a Subnet.

:::note
For this tutorial, we will use the [`local`](https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local) inventory provided by the [Ansible Avalanche Getting Started](https://github.com/AshAvalanche/ansible-avalanche-getting-started) repository. See [Create a Local Test Network](./local-test-network) for details.
:::

## Create control keys

For this tutorial, we will use the [ash.avalanche.create_local_subnet](https://github.com/AshAvalanche/ansible-avalanche-collection/tree/main/playbooks/create_local_subnet.yml) notebook that leverages the pre-funded account to create the Subnet. Therefore, before creating the Subnet, we need to create 2 addresses that will serve as control keys for the Subnet (see [Create a Subnet](https://docs.avax.network/build/tutorials/platform/subnets/create-a-subnet) for more information):

```bash
data='{
  "jsonrpc": "2.0", "id": 1, "method" : "platform.createAddress",
  "params" : {"username":"ewoq", "password": "I_l1ve_@_Endor"}
}'
key_1=$(curl -s -X POST -H 'content-type:application/json;' --data "$data" http://192.168.60.11:9650/ext/bc/P | jq -r '.result.address')
key_2=$(curl -s -X POST -H 'content-type:application/json;' --data "$data" http://192.168.60.11:9650/ext/bc/P | jq -r '.result.address')
```

:::danger
You should only use the keystore API on nodes you manage yourself.
:::

## Create a Subnet

We will use the 2 addresses created above as control keys for the Subnet:

```bash
ansible-playbook ash.avalanche.create_local_subnet -i inventories/local \
  --extra-vars "{\"subnet_control_keys\": [\"$key_1\",\"$key_2\"]}"
```

## Track the Subnet with the validators

The `ash.avalanche.subnet` role does not handle Subnet tracking on validator nodes. The list of tracked Subnets is handled by the `avalanchego_track_subnets` variable in the `ash.avalanche.node` role.

At the end of the Subnet creation, information about the new Subnet is displayed:

```yaml
ok: [validator01] =>
  msg: |-
    The Subnet has been created and the validators added.
    Make sure to add the Subnet ID to the track-subnets list of the validators.
    Subnet ID = QBEQJBMPLQTQw7JzG1GtqLDasvcFyj5RLnvwyxDi6LfooQr7L
```

To track the Subnet on our nodes:

1. Add the following lines to the `group_vars` file associated with the hosts to add the `avalanchego_track_subnets` variable. In our case it is [`avalanche_nodes.yml`](https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local/group_vars/avalanche_nodes.yml):

   ```yaml
   avalanchego_track_subnets:
     - QBEQJBMPLQTQw7JzG1GtqLDasvcFyj5RLnvwyxDi6LfooQr7L
   ```

2. Run the `ash.avalanche.provision_nodes` to apply the new configuration and restart the :

   ```yaml
   ansible-playbook ash.avalanche.provision_nodes -i inventories/local
   ```

## Customization

To customize the Subnet: edit the variables in `inventories/local/group_vars/subnet_control_node.yml`.

For a list of all available variables, see the [ash.avalanche.subnet role reference](../reference/roles/avalanche-subnet.md).
