---
sidebar_position: 4
---

# 2. Node ID / BLS key Secret Generation

:::caution
The Ash Console is currently in alpha and **not production-ready**. It is under active development and subject to breaking changes.
:::

The Ash Console **decorelates the node ID and BLS key from Avalanche nodes**, so that you can have a better control over your validator nodes' lifecycle.

The Node ID is stored as a [secret](/docs/console/glossary#secret) in the Console.

## Generate a new node ID secret

1. If not already done, create a folder for this guide and navigate to it:

   ```bash
   mkdir -p ash-console-guides/fuji-node
   cd ash-console-guides/fuji-node
   ```

2. Generate a new Node ID with the `avalanche node generate-id` command:

   ```bash title="Command"
   ash avalanche node generate-id -o node-id
   ```

   ```bash title="Output"
   Node ID: NodeID-Bdf7YwriWbpY15CPcXH5791uDTqtCYyjw
   Certificate and key files written to 'node-id/node.crt' and 'node-id/node.key'
   ```

   :::note
   Your node ID will be different.
   :::

3. Make sure to **keep a backup of the certificate and key files** in a safe place. If an outage occurs, you will need them to recreate a node with the same ID.
4. **Save the Node ID** for later use. You can also compute it from the node certificate with the `avalanche node id` command:

   ```bash title="Command"
   ash avalanche node id-from-cert -f node-id/node.crt
   ```

   ```bash title="Output"
   Node ID: NodeID-Bdf7YwriWbpY15CPcXH5791uDTqtCYyjw
   ```

## Generate a BLS key

1. Generate a new BLS key with the `avalanche node generate-bls-key` command:

   ```bash title="Command"
   ash avalanche node generate-bls-key -o node-id
   ```

   ```bash title="Output"
   BLS public key: 0x94a8ee6943e043b2b523f9b507fca27cad3d96fd443d5a7b1e4496f6ed7bb4eb934f03bc36a4fd9719c06b7d36931523
   BLS proof of possession: 0x97fd003ae1719d7d8bdac4a703909a169101f0d27d73077a3241c8fc01861a82603f45582f34266a5602b3ff3b28ee5910bb01f10a418cad08c2de0b0debbfd035f9900d8ffa78c3769476e599ae028b256cd08acadfa69974ae27f26f6c17e7
   BLS private key file written to 'node-id/bls.key'
   ```

   :::note
   Your BLS key will be different.
   :::

## Create the node ID secret

:::tip
The Ash Console subcommands support both JSON and YAML.
:::

Use the certificate, key and BLS key files to create a `nodeId` secret with the `console secret create` command.  
Don't forget to **replace the Node ID** with yours:

```bash title="Command"
ash console secret create '{
  name: fuji-node-id-01,
  secretType: nodeId,
  nodeId: NodeID-Bdf7YwriWbpY15CPcXH5791uDTqtCYyjw,
  nodeCert: node-id/node.crt,
  nodeKey: node-id/node.key,
  nodeBlsKey: node-id/bls.key
}'
```

```bash title="Output"
Secret created successfully!
+-----------------+-------------+--------+------------------+---------+
| Secret name     | Secret ID   | Type   | Created at       | Used by |
+=================+=============+========+==================+=========+
| fuji-node-id-01 | 41ea...c755 | NodeId | 2023-12-21T11:05 | 0       |
+-----------------+-------------+--------+------------------+---------+
```

:::note
See the [reference](/docs/console/reference/secret-management) for more information about secrets lifecycle management.
:::
