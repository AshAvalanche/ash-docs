---
sidebar_label: Node upgrade
sidebar_position: 3
---

# Node upgrade

In this section, we will learn how to upgrade the [AvalancheGo](https://github.com/ava-labs/avalanchego) version on many nodes simultaneously with a single command.

:::note
For this tutorial, we will use the [`local`](https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local) inventory provided by the [Ansible Avalanche Getting Started](https://github.com/AshAvalanche/ansible-avalanche-getting-started) repository. See [Create a local test network](./local-test-network) for details.
:::

## Check the current AvalancheGo version

Let's start by checking the current version of my node(s) with an API call:

```bash
curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     :1,
    "method" :"info.getNodeVersion"
}' -H 'content-type:application/json;' http://192.168.60.11:9650/ext/info
```

:::tip
The `192.168.60.11` matches the validator01 VM IP in the [Vagrantfile](https://github.com/AshAvalanche/ansible-avalanche-getting-started/blob/main/Vagrantfile#L8) of [Ansible Avalanche Getting Started](https://github.com/AshAvalanche/ansible-avalanche-getting-started).
:::

The output should look like this:

```bash
{"jsonrpc":"2.0","result":{"version":"avalanche/1.9.6","databaseVersion":"v1.4.5","rpcProtocolVersion":"22","gitCommit":"e153cf55236751112f9bf108279447a9dfb6de88","vmVersions":{"avm":"v1.9.6","evm":"v0.11.5","platform":"v1.9.6"}},"id":1}
```

As we can see above, our node is currently running AvalancheGo version `1.9.6`. This is what's expected because of the Ansible role variable `avalanchego_version: 1.9.6` set at [avalanche_nodes.yml](https://github.com/AshAvalanche/ansible-avalanche-getting-started/blob/main/inventories/local/group_vars/avalanche_nodes.yml#L4) in our inventory.

## Upgrade the AvalancheGo version

Let's upgrade our nodes by changing the `avalanchego_version` Ansible variable to `1.9.9` with the following command:

```bash
sed -i 's/avalanchego_version: 1.9.6/avalanchego_version: 1.9.9/' inventories/local/group_vars/avalanche_nodes.yml
```

We can then upgrade all the nodes defined in our Ansible inventory by running the `provision_nodes` playbook again:

```bash
ansible-playbook ash.avalanche.provision_nodes -i inventories/local
```

## Verify the new AvalancheGo version

By running the same API call as previously:

```bash
curl -X POST --data '{
    "jsonrpc":"2.0",
    "id"     :1,
    "method" :"info.getNodeVersion"
}' -H 'content-type:application/json;' http://192.168.60.11:9650/ext/info
```

We can confirm that our node is now running AvalancheGo 1.9.9:

```bash
{"jsonrpc":"2.0","result":{"version":"avalanche/1.9.9","databaseVersion":"v1.4.5","rpcProtocolVersion":"23","gitCommit":"d755f872a4bf0de12297b3994b729ea684f78519","vmVersions":{"avm":"v1.9.9","evm":"v0.11.7","platform":"v1.9.9"}},"id":1}
```
