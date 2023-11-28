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

## Fetch the 5 node IDs certificates

The [Local Test Network Creation tutorial](/docs/toolkit/ansible-avalanche-collection/tutorials/local-test-network) uses the same certificates and keys for the 5 validator nodes. Let's fetch the certificate and key files from the [`ansible-avalanche-getting-started`](https://github.com/AshAvalanche/ansible-avalanche-getting-started) repository.

1. If not already done, create a folder for this guide and navigate to it:

   ```bash
   mkdir -p ash-console-guides/devnet-network
   cd ash-console-guides/devnet-network
   ```

2. Fetch the local nodes certificates and keys from the [`ansible-avalanche-getting-started`](https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/files/staking) repository:

   ```bash title="Command"
   for i in {1..5}; do
     curl -sSL https://raw.githubusercontent.com/AshAvalanche/ansible-avalanche-getting-started/main/files/staking/validator0$i.crt -o node0$i.crt
     curl -sSL https://raw.githubusercontent.com/AshAvalanche/ansible-avalanche-getting-started/main/files/staking/validator0$i.key -o node0$i.key
   done
   ```

## Create the node ID secrets

Use the certificate and key files to create a `nodeId` secret for each cert/key pair with the `console secret create` command:

```bash title="Command"
# Node IDs
nodeIds=("NodeID-7Xhw2mDxuDS44j42TCB6U5579esbSt3Lg" "NodeID-MFrZFVCXPv5iCn6M9K6XduxGTYp891xXZ" "NodeID-NFBbbJ4qCmNaCzeW7sxErhvWqvEQMnYcN" "NodeID-GWPcbFJZFfZreETSoWjPimr846mXEKCtu" "NodeID-P7oB2McjBGgW2NXXWVYjV8JEDFoW9xDE5")

for i in {1..5}; do
   secret_id_var=secret_id_0$i
   eval $secret_id_var=$(ash console secret create "{
      \"name\": \"node-id-0$i\",
      \"secretType\": \"nodeId\",
      \"nodeId\": \"${nodeIds[@]:$(($i - 1)):1}\",
      \"nodeCert\": \"node0$i.crt\",
      \"nodeKey\": \"node0$i.key\"
   }" --json | jq .id)
done
```

:::tip
The Node ID secrets' IDs have been saved in environment variables (e.g.: `$secret_id_01`), we will use them later in this guide!
:::

We can then confirm that the secrets have been created with the `console secret list` command:

```bash title="Command"
ash console secret list
```

```bash title="Output"
+--------------------------------------+-------------+--------------------+----------------+------------------+---------+
| Secret ID                            | Owner ID    | Name               | Type           | Created at       | Used by |
+======================================+=============+====================+================+==================+=========+
| 43a4743f-1f29-4815-9dc3-b12dfd7bfb55 | fce8...3695 | node-id-01         | NodeId         | 2023-11-23T14:54 | 0       |
+--------------------------------------+-------------+--------------------+----------------+------------------+---------+
| 7af586eb-627f-4fcb-8fc5-ab5fd7b6d0a1 | fce8...3695 | node-id-02         | NodeId         | 2023-11-23T14:54 | 0       |
+--------------------------------------+-------------+--------------------+----------------+------------------+---------+
| f951bd5b-c005-4d75-b710-7ade6b0c7f41 | fce8...3695 | node-id-03         | NodeId         | 2023-11-23T14:54 | 0       |
+--------------------------------------+-------------+--------------------+----------------+------------------+---------+
| a3748643-e94f-4cd1-be47-22ec6177dfb8 | fce8...3695 | node-id-04         | NodeId         | 2023-11-23T14:54 | 0       |
+--------------------------------------+-------------+--------------------+----------------+------------------+---------+
| ec23306c-0003-427d-9d78-b12a2f797e36 | fce8...3695 | node-id-05         | NodeId         | 2023-11-23T14:54 | 0       |
+--------------------------------------+-------------+--------------------+----------------+------------------+---------+
```

**Note:** Your secret IDs will be different.

:::note
See the [reference](/docs/console/reference/secret-management) for more information about secrets lifecycle management.
:::
