---
sidebar_position: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 3. Node ID / BLS key Secret Generation

:::caution
**UPDATE**: The Ash Console open beta has ended. Looking to launch your Avalanche L1? See our latest [Ash Managed L1s offer announcement](https://ashavax.hashnode.dev/announcing-ash-managed-l1s-and-avalanche-builder-credits)!
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
   Node ID: NodeID-2rVh5jWQ5xtxRDWNuP91XvciQNPBWWy8n
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
   Node ID: NodeID-2rVh5jWQ5xtxRDWNuP91XvciQNPBWWy8n
   ```

## Generate a BLS key

1. Generate a new BLS key with the `avalanche node generate-bls-key` command:

   ```bash title="Command"
   ash avalanche node generate-bls-key -o node-id
   ```

   ```bash title="Output"
   BLS public key: 0xa64edc101b5260a35a004fa0d81e129f6f592d2ccb037181c7aebb2ff9d8c90135f780d326555adde901f5bbd7cbf9d5
   BLS proof of possession: 0xae8debe9b551a094f8503d8fe86f68243dfb2be93a782d69c32ca883c6e96d5293cd6047fda146366cf9f2c58d2254fe183433faffa1d459d93ba97ba6f91a5388ad8d61aa23c18a5b15551961e5b5289badcf931722dc9e6ba0a8539f74d442
   BLS private key file written to 'node-id/bls.key'
   ```

   :::note
   Your BLS key will be different.
   :::

## Create the node ID secret

<Tabs>

<TabItem value="console" label="Using the Ash Console" default>

From the [Ash Console](https://console.ash.center) project overview page, navigate to the **Secrets** tab:
- Click on the `Create Secret` button.
- Select the `Node ID` secret type.
- Pick a name for your secret, e.g., `fuji-node-id-01`.
- Paste the Node ID generated in the previous step.
- Upload the certificate, key and BLS key files generated in the previous step in the corresponding fields.
- Click on the `Create` button to add secret to the project.

![Ash Console NodeID secret create](/img/ash-console-fuji-nodeid-create.png)

</TabItem>

<TabItem value="cli" label="Using the Ash CLI">

:::tip
The Ash Console subcommands support both JSON and YAML.
:::

Use the certificate, key and BLS key files to create a `nodeId` secret with the `console secret create` command.  
Don't forget to **replace the Node ID** with yours:

```bash title="Command"
ash console secret create '{
  name: fuji-node-id-01,
  secretType: nodeId,
  nodeId: NodeID-2rVh5jWQ5xtxRDWNuP91XvciQNPBWWy8n,
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

</TabItem>
</Tabs>

:::note
See the [reference](/docs/console/reference/secret-management) for more information about secrets lifecycle management.
:::
