---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Node Upgrade

In this section, we will learn how to upgrade the [AvalancheGo](https://github.com/ava-labs/avalanchego) version on many nodes simultaneously with a single command.

:::note
For this tutorial, we will use the [`local`](https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local) inventory provided by the [Ansible Avalanche Getting Started](https://github.com/AshAvalanche/ansible-avalanche-getting-started) repository. See [Create a local test network](./local-test-network) for details.
:::

## Check the current AvalancheGo version

<Tabs>
  <TabItem value="ash-cli" label="Using Ash CLI" default>

Let's start by checking the current version of my node(s) with the Ash CLI:

```bash
ash avalanche node info --http-host 192.168.60.11
```

The output should look like this:

```bash {6}
Node '192.168.60.11:9650':
  ID:            NodeID-7Xhw2mDxuDS44j42TCB6U5579esbSt3Lg
  Public IP:     192.168.60.11
  Stacking port: 9651
  Versions:
    AvalancheGo: avalanche/1.9.6
    [...]
```

  </TabItem>
  <TabItem value="curl" label="Using cURL">

Let's start by checking the current version of my node(s) with an API call:

```bash
curl -s -X POST --data '{
    "jsonrpc":"2.0",
    "id"     :1,
    "method" :"info.getNodeVersion"
}' -H 'content-type:application/json;' http://192.168.60.11:9650/ext/info |
jq -r '.result.version'
```

The output should look like this:

```bash
avalanche/1.9.6
```

  </TabItem>
</Tabs>

:::tip
The `192.168.60.11` matches the validator01 VM IP in the [Vagrantfile](https://github.com/AshAvalanche/ansible-avalanche-getting-started/blob/main/Vagrantfile#L8) of [Ansible Avalanche Getting Started](https://github.com/AshAvalanche/ansible-avalanche-getting-started).
:::

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

<Tabs>
  <TabItem value="ash-cli" label="Using Ash CLI" default>

By running the same command as previously:

```bash
ash avalanche node info --http-host 192.168.60.11
```

We can confirm that our node is now running AvalancheGo 1.9.9:

```bash {6}
Node '192.168.60.11:9650':
  ID:            NodeID-7Xhw2mDxuDS44j42TCB6U5579esbSt3Lg
  Public IP:     192.168.60.11
  Stacking port: 9651
  Versions:
    AvalancheGo: avalanche/1.9.9
    [...]
```

  </TabItem>
  <TabItem value="curl" label="Using cURL">

By running the same API call as previously:

```bash
curl -s -X POST --data '{
    "jsonrpc":"2.0",
    "id"     :1,
    "method" :"info.getNodeVersion"
}' -H 'content-type:application/json;' http://192.168.60.11:9650/ext/info |
jq -r '.result.version'
```

We can confirm that our node is now running AvalancheGo 1.9.9:

```bash
avalanche/1.9.9
```

  </TabItem>
</Tabs>
