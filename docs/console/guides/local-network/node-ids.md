---
sidebar_position: 4
---

# 2. Node ID Secrets Generation

:::caution
The Ash Console is currently in alpha and **not production-ready**. It is under active development and subject to breaking changes.
:::

The Ash Console **decorelates the node ID from Avalanche nodes**, so that you can have a better control over your validator nodes' lifecycle.

Node IDs are stored as [secrets](/docs/console/glossary#secret) in the Console.

In this part of the guide, we will create **5 node ID secrets** for the 5 nodes of our Avalanche devnet.

:::tip
The Node ID secrets need to match the hardcoded Node IDs in the [`genesis_local.json`](https://github.com/ava-labs/avalanchego/blob/master/genesis/genesis_local.json#L47) file of the [AvalancheGo](https://github.com/ava-labs/avalanchego) codebase.
:::

## Fetch the node IDs blueprint

:::info
Learn more about blueprints in the [Console Blueprints](/docs/console/reference/blueprints) reference.
:::

We will use the [local-node-ids.yaml blueprint](https://github.com/AshAvalanche/ash-rs/blob/ash-console-alpha/crates/ash_cli/examples/console/blueprint/local-node-ids.yaml) to create the node ID secrets for the 5 nodes of our Avalanche devnet.

1. If not already done, create a folder for this guide and navigate to it:

   ```bash
   mkdir -p ash-console-guides/devnet-network
   cd ash-console-guides/devnet-network
   ```

2. Fetch the blueprint from the [`ash-rs`](https://github.com/AshAvalanche/ash-rs/blob/ash-console-alpha/crates/ash_cli/examples/console/blueprint/local-node-ids.yaml) repository:

   ```bash
   curl -sSL https://raw.githubusercontent.com/AshAvalanche/ash-rs/ash-console-alpha/crates/ash_cli/examples/console/blueprint/local-node-ids.yaml -o local-node-ids.yaml
   ```

3. Take a look at the blueprint. You will see that it defines 5 secrets of type `nodeId` with their TLS keys and certificates:
   ```bash title="Command"
   cat local-node-ids.yaml
   ```
   ```yaml title="Output"
   secrets:
     - name: local-node-id-01
       secretType: nodeId
       nodeId: NodeID-7Xhw2mDxuDS44j42TCB6U5579esbSt3Lg
       nodeCert: LS0tLS...
       nodeKey: LS0tLS...
     # ...
   ```

## Create the node ID secrets

Apply the blueprint with the `console blueprint apply` command to create the node ID secrets:

```bash title="Command"
ash console blueprint apply local-node-ids.yaml
```

```bash title="Confirmation prompt"
Blueprint summary
Secrets
  4 to create: local-node-id-01, local-node-id-02, local-node-id-03, local-node-id-04, local-node-id-05
  0 to update:
Projects
  0 to create:
  0 to update:
? Are you sure you want to apply this blueprint? (y/N)
[This action is irreversible!]
```

After the blueprint is done applying, we can then confirm that the secrets have been created with the `console secret list` command:

```bash title="Command"
ash console secret list
```

```bash title="Output"
+------------------+-------------+----------------+------------------+---------+
| Secret name      | Secret ID   | Type           | Created at       | Used by |
+==================+=============+================+==================+=========+
| local-node-id-01 | 5064...9550 | NodeId         | 2023-12-21T14:54 | 0       |
+------------------+-------------+----------------+------------------+---------+
| local-node-id-02 | 47fb...5531 | NodeId         | 2023-12-21T14:54 | 0       |
+------------------+-------------+----------------+------------------+---------+
| local-node-id-03 | ac71...9ada | NodeId         | 2023-12-21T14:54 | 0       |
+------------------+-------------+----------------+------------------+---------+
| local-node-id-04 | 8f6a...879f | NodeId         | 2023-12-21T14:54 | 0       |
+------------------+-------------+----------------+------------------+---------+
| local-node-id-05 | d5a0...d676 | NodeId         | 2023-12-21T14:54 | 0       |
+------------------+-------------+----------------+------------------+---------+
```

:::note
See the [reference](/docs/console/reference/secret-management) for more information about secrets lifecycle management.
:::
