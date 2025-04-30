---
sidebar_position: 13
---

# Avalanche Graph Node

[The Graph](https://thegraph.com/docs/en/) is a decentralized protocol designed for indexing and querying blockchain data, including Avalanche. It enables developers to efficiently access and organize blockchain data using a GraphQL API. A key component of this protocol is the **Graph Node**, which processes and indexes data from the blockchain based on predefined subgraph configurations. For detailed guidance on setting up and using a Graph Node, refer to the [Graph Node Documentation](https://thegraph.com/docs/en/indexing/tooling/graph-node/).

:::note
For this tutorial, we will use the [`local`](https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local) inventory from the [Ansible Avalanche Getting Started](https://github.com/AshAvalanche/ansible-avalanche-getting-started) repository. Also ensure you have already created a Subnet and a blockchain with a smart contract to index; see [Subnet Creation](/docs/toolkit/ansible-avalanche-collection/tutorials/subnet-creation) and [Smart Contract Deployment](/docs/toolkit/ansible-avalanche-collection/tutorials/contract-deployment.md) for details.
:::

:::tip
Always make sure you have the latest version of the collection installed. See [Installation and Upgrade](/docs/toolkit/ansible-avalanche-collection/installation).
:::

## Prerequisites

Before starting, ensure you have the following:

- A local or remote environment with Ansible installed.
- Node.js and npm installed (use [nvm](https://github.com/nvm-sh/nvm) if needed).
- Access to the [Ansible Avalanche Getting Started](https://github.com/AshAvalanche/ansible-avalanche-getting-started) repository.

## Requirements

The `ash.avalanche.graph_node` role relies on Docker, and the playbook `ash.avalanche.install_graph_node` installs Docker via the [geerlingguy.docker](https://galaxy.ansible.com/geerlingguy/docker) role.

Install the required role locally with:

```bash
ansible-galaxy install -r ansible_collections/ash/avalanche/requirements.yml
```

To create and deploy a subgraph, you will also need to install the `graph-cli` tool. You can do this using `npm` or `yarn`:

```bash
npm install -g @graphprotocol/graph-cli
```

or

```bash
yarn global add @graphprotocol/graph-cli
```


If you don't have Node.js installed, follow the instructions on the [Node.js website](https://nodejs.org/en/download/) to install it.

## Configure Graph Node

The Graph Node will be installed as a [Docker Compose](https://docs.docker.com/compose/) service on the nodes of the `graph_nodes` Ansible group. In [Ansible Avalanche Getting Started](https://github.com/AshAvalanche/ansible-avalanche-getting-started), it is the `frontend` node by default. You can change this by editing the [`hosts`](https://github.com/AshAvalanche/ansible-avalanche-getting-started/blob/main/inventories/local/hosts) file.

Set the blockchain ID in `graph_nodes.yml` (the `group_vars` file associated with our hosts' group):

```yaml title="inventories/local/group_vars/graph_nodes.yml"
graph_node_blockchain_id: 2dEmExGjJT6MouJRr1PqV4PSQEbScDAjKuPtT6pgqYR5xdUuac
```

The blockchain ID (`2dEmExGjJT6MouJRr1PqV4PSQEbScDAjKuPtT6pgqYR5xdUuac` in our case) should be the one created in the [Subnet Creation](/docs/toolkit/ansible-avalanche-collection/tutorials/subnet-creation) tutorial.

## Install Graph Node

Run the following command to install Docker and the Docker Compose service:

```bash
ansible-playbook ash.avalanche.install_graph_node -i inventories/local
```

## Create a Graph Node Subgraph

A subgraph is a GraphQL schema that defines the data you want to index and how to query it. Follow these steps to create and deploy a subgraph:

### Step 1: Set the `GRAPH_NODE_IP` Environment Variable

Since we are using a local network, set the `GRAPH_NODE_IP` environment variable to the IP address of the Graph Node (which is the same as the frontend node):

```bash
export GRAPH_NODE_IP=$(terraform -chdir=terraform/multipass output -raw frontend_ip)
```

### Step 2: Create a Subgraph Directory

```bash
mkdir my-subgraph
cd my-subgraph
```

### Step 3: Define the Subgraph Configuration

Create a `subgraph.yaml` file in the `my-subgraph` directory (don't forget to replace the `address` field with the address of your deployed smart contract):

```yaml title="my-subgraph/subgraph.yaml"
specVersion: 0.0.4
description: ASH Token on Subnet
repository: https://example.com
schema:
  file: ./schema.graphql

dataSources:
  - kind: ethereum/contract
    name: ASHToken
    network: subnet
    source:
      address: "0x11Fa7d827e18f28F4e3B2F4D4D8C5a62bCC8C5b3"
      abi: ASHToken
      startBlock: 0
    mapping:
      kind: ethereum/events
      apiVersion: 0.0.7
      language: wasm/assemblyscript
      entities:
        - Transfer
        - Approval
      abis:
        - name: ASHToken
          file: ./abis/ASH.json
      eventHandlers:
        - event: Transfer(indexed address,indexed address,uint256)
          handler: handleTransfer
        - event: Approval(indexed address,indexed address,uint256)
          handler: handleApproval
      file: ./src/mapping.ts
```

:::info
- The `network` field should be set to `subnet` to indicate that you are indexing a Subnet.
- The `kind` field should be set to `ethereum/contract` to indicate that you are indexing an Ethereum-compatible contract.
- The `name` field should be set to a unique name for your subgraph. In this case, we are using `ASHToken`.
- The `description` field should be a brief description of your subgraph.
- The `repository` field should be a link to your subgraph's repository (optional).
- The `address` field in the `source` section should be the address of your deployed smart contract. You can find this address in the output of the [Smart Contract Deployment](/docs/toolkit/ansible-avalanche-collection/tutorials/contract-deployment.md) tutorial.
- The `startBlock` field should be set to the block number where you want to start indexing. You can set it to `0` to index from the beginning.
- The `abi` field should match the name of the ABI file you will create in the next step.
- The `entities` field should include all the entities you want to index. In this case, we are indexing `Transfer` and `Approval` events.
- The `eventHandlers` field should include all the events you want to handle. In this case, we are handling `Transfer` and `Approval` events.
- The `file` field should point to the mapping file you will create in the next step.
:::

### Step 4: Define the GraphQL Schema

Create a `schema.graphql` file in the `my-subgraph` directory:

```graphql title="my-subgraph/schema.graphql"
type Transfer @entity(immutable: false) {
  id: ID!
  from: Bytes!
  to: Bytes!
  value: BigInt!
  blockNumber: BigInt!
  timestamp: BigInt!
}

type Approval @entity(immutable: false) {
  id: ID!
  owner: Bytes!
  spender: Bytes!
  value: BigInt!
  blockNumber: BigInt!
  timestamp: BigInt!
}
```

### Step 5: Add ABI Files

The ABI (Application Binary Interface) is a JSON file that describes the smart contract's functions and events. It is used by the Graph Node to decode the data from the blockchain.
Create an `abis` directory and add the ABI file for the smart contract you want to index:

```bash
mkdir abis
ln ../../ash_token/out/ASHToken.sol/ASHToken.json abis/ASH.json
```

Add the ABI content to `ASH.json`.

:::note
If you are using the [Ansible Avalanche Getting Started](https://github.com/AshAvalanche/ansible-avalanche-getting-started),You can get the ABI of the smart contract in `net/ash_token/out/ASHToken.sol/ASHToken.json` after you deployed your contract.
:::

### Step 6: Add Mapping Functions

Create a `src` directory and add a `mapping.ts` file:

```typescript title="my-subgraph/src/mapping.ts"
import {
    Transfer as TransferEvent,
    Approval as ApprovalEvent
  } from "../generated/ASHToken/ASHToken"
  import { Transfer, Approval } from "../generated/schema"

  export function handleTransfer(event: TransferEvent): void {
    let id = event.transaction.hash.concatI32(event.logIndex.toI32()).toHex()
    let entity = new Transfer(id)
    entity.from = event.params.from
    entity.to = event.params.to
    entity.value = event.params.value
    entity.blockNumber = event.block.number
    entity.timestamp = event.block.timestamp
    entity.save()
  }

  export function handleApproval(event: ApprovalEvent): void {
    let id = event.transaction.hash.concatI32(event.logIndex.toI32()).toHex()
    let entity = new Approval(id)
    entity.owner = event.params.owner
    entity.spender = event.params.spender
    entity.value = event.params.value
    entity.blockNumber = event.block.number
    entity.timestamp = event.block.timestamp
    entity.save()
  }
```

### Step 7: Install Dependencies

Run the following command to install dependencies:

```bash
npm install --save-dev @graphprotocol/graph-cli @graphprotocol/graph-ts
```

### Step 8: Generate TypeScript Types

This command generates the necessary TypeScript types based on your GraphQL schema and smart contract ABIs. These types are later used in the mapping file for strong typing.

```bash
graph codegen
```

### Step 9: Build the Subgraph

Build your subgraph to ensure that all configurations, generated types, and mappings are correctly bundled.

```bash
graph build
```

### Step 10: Create the Subgraph on the Graph Node

This command creates the subgraph on your Graph Node instance. Replace `subgraph-name` with your desired name.

```bash
graph create --node http://$GRAPH_NODE_IP:8020/ subgraph-name
```

### Step 11: Deploy the Subgraph

Deploy your subgraph to the Graph Node using this command. This makes your subgraph available for indexing and querying. don't forget to replace `subgraph-name` with the name you used in the previous step.

```bash
graph deploy --node http://$GRAPH_NODE_IP:8020/ --ipfs http://$GRAPH_NODE_IP:5001/ subgraph-name
```

### Step 12: Query the Subgraph

Use the GraphQL API at `http://$GRAPH_NODE_IP:8000/subgraphs/name/subgraph-name` to query your subgraph.

Example query:

```graphql
{
  transfers(first: 1) {
    id
    from
    to
    value
    blockNumber
    timestamp
  }
}
```
output:
```json
{
  "data": {
    "transfers": [
      {
        "id": "0xea6dc0b9e51e12753b069ec14256ba425ecdb2fd8bf1528acdd18e622bb444d700000000",
        "from": "0x0000000000000000000000000000000000000000",
        "to": "0x8db97c7cece249c2b98bdc0226cc4c2a57bf52fc",
        "value": "200000000000000000000",
        "blockNumber": "1",
        "timestamp": "1745577540"
      }
    ]
  }
}
```
