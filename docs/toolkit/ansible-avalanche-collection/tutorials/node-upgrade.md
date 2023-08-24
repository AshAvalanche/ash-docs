---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Node Upgrade

In this section, we will learn how to upgrade the [AvalancheGo](https://github.com/ava-labs/avalanchego) version on many nodes simultaneously with a single command.

:::note
For this tutorial, we will use the [`local`](https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local) inventory provided by the [Ansible Avalanche Getting Started](https://github.com/AshAvalanche/ansible-avalanche-getting-started) repository. See [Create a Local Test Network](./local-test-network) for details.
:::

:::tip
Always make sure you have the latest version of the collection installed. See [Installation and upgrade](/docs/toolkit/ansible-avalanche-collection/installation).
:::

## Check the current AvalancheGo version

<Tabs>
  <TabItem value="ash-cli" label="Using Ash CLI" default>

Let's start by checking the current version of my node(s) with the Ash CLI:

```bash title="Command"
multipass exec validator01 -- ash avalanche node info
```

```bash {7} title="Output"
Node '127.0.0.1:9650':
  ID:            NodeID-7Xhw2mDxuDS44j42TCB6U5579esbSt3Lg
  Network:       local
  Public IP:     10.117.207.160
  Staking port:  9651
  Versions:
    AvalancheGo:  avalanche/1.10.8
    [...]
```

  </TabItem>
  <TabItem value="curl" label="Using cURL">

Let's start by checking the current version of my node(s) with an API call:

```bash title="Command"
multipass exec validator01 -- curl -s -X POST --data '{
    "jsonrpc":"2.0",
    "id"     :1,
    "method" :"info.getNodeVersion"
}' -H 'content-type:application/json;' http://127.0.0.1:9650/ext/info |
jq -r '.result.version'
```

```bash title="Output"
avalanche/1.10.8
```

  </TabItem>
</Tabs>

As we can see above, our node is currently running AvalancheGo version `1.10.8`. This is what's expected because of the Ansible role variable `avalanchego_version: 1.10.8` set at [avalanche_nodes.yml](https://github.com/AshAvalanche/ansible-avalanche-getting-started/blob/main/inventories/local/group_vars/avalanche_nodes.yml#L4) in our inventory.

## Upgrade the AvalancheGo version

Let's upgrade our nodes by changing the `avalanchego_version` Ansible variable to `1.10.9` with the following command:

```bash
sed -i 's/avalanchego_version: 1.10.8/avalanchego_version: 1.10.9/' inventories/local/group_vars/avalanche_nodes.yml
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
multipass exec validator01 -- ash avalanche node info
```

We can confirm that our node is now running AvalancheGo 1.10.9:

```bash {7}
Node '127.0.0.1:9650':
  ID:            NodeID-7Xhw2mDxuDS44j42TCB6U5579esbSt3Lg
  Network:       local
  Public IP:     10.117.207.160
  Staking port:  9651
  Versions:
    AvalancheGo:  avalanche/1.10.9
    [...]
```

  </TabItem>
  <TabItem value="curl" label="Using cURL">

By running the same API call as previously:

```bash
multipass exec validator01 -- curl -s -X POST --data '{
    "jsonrpc":"2.0",
    "id"     :1,
    "method" :"info.getNodeVersion"
}' -H 'content-type:application/json;' http://127.0.0.1:9650/ext/info |
jq -r '.result.version'
```

We can confirm that our node is now running AvalancheGo 1.10.9:

```bash
avalanche/1.10.9
```

  </TabItem>
</Tabs>
