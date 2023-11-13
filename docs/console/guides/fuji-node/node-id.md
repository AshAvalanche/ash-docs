---
sidebar_position: 4
---

# 2. Node ID Secret Generation

:::caution
The Ash Console is currently in alpha and **not production-ready**. It is under active development and subject to breaking changes.
:::

The Ash Console **decorelates the node ID from Avalanche nodes**, so that you can have a better control over your validator nodes' lifecycle.

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

   **Note:** Your node ID will be different.

3. Make sure to **keep a backup of the certificate and key files** in a safe place. If an outage occurs, you will need them to recreate a node with the same ID.
4. **Save the Node ID** for later use. You can also compute it from the node certificate with the `avalanche node id` command:

   ```bash title="Command"
   ash avalanche node id-from-cert -f node-id/node.crt
   ```

   ```bash title="Output"
   Node ID: NodeID-Bdf7YwriWbpY15CPcXH5791uDTqtCYyjw
   ```

## Create the node ID secret

Use the certificate and key files to create a `nodeId` secret with the `console secret create` command:

```bash title="Command"
ash console secret create '{
  "name": "node-id-01",
  "secretType": "nodeId",
  "nodeId": "NodeID-Bdf7YwriWbpY15CPcXH5791uDTqtCYyjw",
  "nodeCert": "node-id/node.crt",
  "nodeKey": "node-id/node.key"
}'
```

```bash title="Output"
Secret created successfully!
+--------------------------------------+-------------+------------+---------+------------------+---------+
| Secret ID                            | Owner ID    | Name       | Type    | Created at       | Used by |
+======================================+=============+===========+=========+==================+=========+
| 0b3ab7f4-c355-4971-b9d1-74f67414abc0 | 2870...dc26 | node-id-01 | NodeId  | 2023-11-12T10:35 | 0       |
+--------------------------------------+-------------+------------+---------+------------------+---------+
```

:::note
See the [reference](/docs/console/reference/secret-management) for more information about secrets lifecycle management.
:::
