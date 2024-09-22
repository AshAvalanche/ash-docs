---
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 2. Blueprint Configuration and Apply

:::caution
The Ash Console is currently in beta and **not production-ready**. It is under active development and subject to breaking changes.
:::

We need to write [blueprints](/docs/console/reference/blueprints) that define all the entities needed to deploy a 5-node Avalanche devnet and to create the Subnet. For convenience, we have prepared the [devnet.yml](https://github.com/AshAvalanche/ash-rs/blob/main/crates/ash_cli/examples/console/blueprint/devnet.yml) and [devnet-evm-subnet.yml](https://github.com/AshAvalanche/ash-rs/blob/main/crates/ash_cli/examples/console/blueprint/devnet-evm-subnet.yml) blueprints for you.

## Download the blueprints

1. If not already done, create a folder for this guide and navigate to it:

   ```bash
   mkdir -p ash-console-guides/one-command-devnet
   cd ash-console-guides/one-command-devnet
   ```

2. Download the [devnet.yml](https://github.com/AshAvalanche/ash-rs/blob/main/crates/ash_cli/examples/console/blueprint/devnet.yml) and [devnet-evm-subnet.yml](https://github.com/AshAvalanche/ash-rs/blob/main/crates/ash_cli/examples/console/blueprint/devnet-evm-subnet.yml) blueprints from the [ash-rs](https://github.com/AshAvalanche/ash-rs) GitHub repository.

   ```bash
   curl -sSL https://raw.githubusercontent.com/AshAvalanche/ash-rs/main/crates/ash_cli/examples/console/blueprint/devnet.yml -o devnet.yml
   curl -sSL https://raw.githubusercontent.com/AshAvalanche/ash-rs/main/crates/ash_cli/examples/console/blueprint/devnet-evm-subnet.yml -o devnet-evm-subnet.yml
   ```

## Review the blueprints

Let's take a look at the first blueprint, `devnet.yml`. You will see that it defines:

- **5 `nodeId` secrets** for the 5 nodes of our Avalanche devnet (the node IDs of a `local` Avalanche network are hard-coded in AvalancheGo).  
  A `nodeId` [secret](/docs/console/glossary#secret) contains the TLS keys, certificates and BLS keys for an Avalanche node:
  ```yaml
  secrets:
    - name: local-node-id-01
      secretType: nodeId
      nodeId: NodeID-7Xhw2mDxuDS44j42TCB6U5579esbSt3Lg
      nodeCert: LS0tLS...
      nodeKey: LS0tLS...
      nodeBlsKey: U2fcxy...
    # ...
  ```
- **1 [project](/docs/console/glossary#project)** named `ash-devnet` and tied to the `local` network. It is the **logical set** that will contain all the resources of our devnet:
  ```yaml
  projects:
    - project:
        name: ash-devnet
        network: local
        sharedResourceConfig:
          avalancheNodeConfig:
            avalanchego_version: 1.10.17
  ```
  :::tip
  The project also defines `sharedResourceConfig.avalancheNodeConfig` that will be used by all the `avalancheNode` resources of the project.
  :::
- **1 [region](/docs/console/glossary#cloud-region)** in the `ash-devnet` project. We will deploy all our resources in this region.
  ```yaml
  regions:
    - cloudProvider: "${CLOUD_PROVIDER}}"
      region: "${CLOUD_REGION}"
      cloudCredentialsSecretId: "${CLOUD_CREDENTIALS_SECRET}"
  ```
  :::tip
  Here we **reference environment variables** that we will define in the [next section](#define-environment-variables).
  :::
- **5 `avalancheNode` [resources](/docs/console/glossary#resource)** in the `ash-devnet` project. Each `avalancheNode` resource references a `nodeId` secret:
  ```yaml
  resources:
    - name: local-node-01
      resourceType: avalancheNode
      cloudRegionId: "${CLOUD_PROVIDER}/${CLOUD_REGION}"
      nodeIdSecretId: local-node-id-01
      size: small
    # ...
  ```
  :::tip
  We **reference environment variables** to determine to which cloud region the resources will be deployed. We will define these variables in the [next section](#define-environment-variables).
  :::

The second blueprint, `devnet-evm-subnet.yml`, defines:

- **1 `wallet` [secret](/docs/console/glossary#secret)**. This wallet will be use to sign the **Subnet transactions** (creation, validator management, etc.) and the P-Chain address will be used as the **control key** of the Subnet.
  ```yaml
  secrets:
    # Local network pre-funded account wallet
    - name: ewoq-key
      secretType: wallet
      pChainAddress: P-fuji18jma8ppw3nhx5r4ap8clazz0dps7rv5u6wmu4t
      privateKey: PrivateKey-ewoqjP7PxY4yr3iLTpLisriqt94hdyDFNgchSxGGztUrTXtNN
      privateKeyFormat: cb58
  ```

  :::warning
  Do not use this wallet as control key in production!
  :::

- **1 `avalancheSubnet` [resource](/docs/console/glossary#resource)** in the `ash-devnet` project. It references the `ewoq-key` secret above and defines a [Subnet EVM](https://github.com/ava-labs/subnet-evm) blockchain to be created with a standard [genesis](https://docs.avax.network/build/subnet/upgrade/customize-a-subnet#genesis) configuration:
  ```yaml
  resources:
    - name: ash-subnet
      resourceType: avalancheSubnet
      cloudRegionId: "${CLOUD_PROVIDER}/${CLOUD_REGION}"
      subnetControlKeySecretId: ewoq-key
      subnetConfig:
        createSubnet: true
        avalancheSubnetConfig:
            subnet_blockchains_list:
              - name: AshSubnetEVM
                vm: subnet-evm
    # ...
  ```

  :::tip
  The `avalancheSubnetConfig` field is following the same structure as the [Ansible Avalanche Collection](/docs/toolkit/ansible-avalanche-collection/introduction)'s `ash.avalanche_subnet` role. See [Blockchain configuration](/docs/toolkit/ansible-avalanche-collection/reference/roles/avalanche-subnet#blockchain-configuration) for more information on how to generate a custom genesis configuration.
  :::

## Define environment variables

A blueprint is **very flexible thanks to the use of environment variables**. Here we can dynamically specify the cloud provider, region, and cloud credentials secret ID. Let's define them depending on your cloud provider you set up in [step 1](/docs/console/guides/blueprint/cloud-credentials):

<Tabs groupId="cloud-provider">
  <TabItem value="aws" label="Example for AWS" default>

```bash
export CLOUD_PROVIDER=aws
export CLOUD_REGION=us-east-1
export CLOUD_CREDENTIALS_SECRET=aws-credentials
```

</TabItem>
<TabItem value="azure" label="Example for Azure">

```bash
export CLOUD_PROVIDER=azure
export CLOUD_REGION=westus
export CLOUD_CREDENTIALS_SECRET=azure-credentials
```

</TabItem>
<TabItem value="google" label="Example for Google Cloud">

```bash
export CLOUD_PROVIDER=google
export CLOUD_REGION=us-central1
export CLOUD_CREDENTIALS_SECRET=google-credentials
```

</TabItem>
</Tabs>

Of course, pick the `CLOUD_REGION` of your choice.

## Apply the devnet blueprint

Everything is ready to deploy our devnet! Let's apply the first blueprint:

```bash title="Command"
ash console blueprint apply ./devnet.yml
```

The CLI will ask you to confirm the action:

```bash title="Confirmation prompt"
Blueprint summary
Secrets
  5 to create: local-node-id-01, local-node-id-02, local-node-id-03, local-node-id-04, local-node-id-05
  0 to update:
Projects
  1 to create:
  - 'ash-devnet':
      Regions: aws/us-east-1
      Resources: local-node-01, local-node-02, local-node-03, local-node-04, local-node-05
  0 to update:
? Are you sure you want to apply this blueprint? (y/N)
[This action is irreversible!]
```

Enter `y` and watch the magic happen!

```bash title="Output"
> Are you sure you want to apply this blueprint? Yes
Creating entities...
Creating secret: local-node-id-01
Secret created successfully!
+------------------+-------------+--------+------------------+---------+
| Secret name      | Secret ID   | Type   | Created at       | Used by |
+==================+=============+========+==================+=========+
| local-node-id-01 | f906...0afc | NodeId | 2024-01-02T11:54 | 0       |
+------------------+-------------+--------+------------------+---------+
# ...
Creating resource: ash-devnet:local-node-05
Resource successfully created in project 'ash-devnet'!
+---------------+-------------+---------------+-----------------+-------+------------------+---------+--------------------------+
| Resource name | Resource ID | Type          | Cloud region ID | Size  | Created at       | Status  | Resource specific        |
+===============+=============+===============+=================+=======+==================+=========+==========================+
| local-node-05 | cd99...0342 | AvalancheNode | 8d01...b4fc     | Small | 2024-01-02T11:56 | Pending |  IP address   | None     |
|               |             |               |                 |       |                  |         |  Running      | false    |
|               |             |               |                 |       |                  |         |  Bootstrapped | [false]  |
|               |             |               |                 |       |                  |         |  Healthy      | [false]  |
|               |             |               |                 |       |                  |         |  Restart req. | false    |
+---------------+-------------+---------------+-----------------+-------+------------------+---------+--------------------------+
```

## Health

1. It will take **a few minutes** before the local network is `Bootstrapped` and `Healthy`. You can get its updated status with the `console resource info` command:

   ```bash title="Command"
    ash console resource info local-node-01
   ```

   ```bash title="Output"
   Resource 'local-node-01' of project 'devnet-guide':
   +-------------------+-------------+---------------+-----------------+-------+------------------+---------+--------------------------------+
   | Resource name     | Resource ID | Type          | Cloud region ID | Size  | Created at       | Status  | Resource specific              |
   +===================+=============+===============+=================+========+==================+=========+================================+
   | local-node-01     | 9419...6722 | AvalancheNode | 634d...c9d9     | Small | 2024-01-02T11:54 | Running |  IP address   | 3.210.183.166  |
   |                   |             |               |                 |       |                  |         |  Running      | true           |
   |                   |             |               |                 |       |                  |         |  Bootstrapped | [false]        |
   |                   |             |               |                 |       |                  |         |  Healthy      | [false]        |
   |                   |             |               |                 |       |                  |         |  Restart req. | false          |
   +-------------------+-------------+---------------+-----------------+-------+------------------+---------+--------------------------------+
   ```

2. Once a node is `Running`, you can also query the node `info` endpoint with the `avalanche node info` command:

   ```bash title="Command"
   ash avalanche node info -n 3.210.183.166
   ```

   ```bash title="Output"
    Node '3.210.183.166:9650':
      ID:            NodeID-7Xhw2mDxuDS44j42TCB6U5579esbSt3Lg
      Network:       local
      Public IP:     3.210.183.166
      Staking port:  9651
      Versions:
        AvalancheGo:  avalanche/1.10.17
        Database:     v1.4.5
        RPC Protocol: 28
        Git commit:   145dfb0dc179d688f45ad44067ef6f9821148b36
        VMs:
          AvalancheVM: v1.10.17
          Coreth:      v0.12.5
          PlatformVM:  v1.10.17
          Subnet VMs:  []
      Uptime:
        Rewarding stake:  100%
        Weighted average: 100%
   ```

   :::note
   Your node IP address will be different.
   :::

Your local Avalanche network is now up and running!

## Apply the Subnet blueprint

Now that we have a devnet ready to be used, we can apply the second blueprint, `devnet-evm-subnet.yml`:

```bash title="Command"
ash console blueprint apply ./devnet-evm-subnet.yml
```

The CLI will ask you to confirm the action:

```bash title="Confirmation prompt"
Blueprint summary
Secrets
  1 to create: ewoq-key
  0 to update:
Projects
  0 to create:
  1 to update:
  - 'ash-devnet':
      Resources: ash-subnet
? Are you sure you want to apply this blueprint? (y/N)
[This action is irreversible!]
```

Enter `y` and watch the magic happen!

```bash title="Output"
> Are you sure you want to apply this blueprint? Yes
Creating entities...
Creating secret: ewoq-key
Secret created successfully!
+-------------+-------------+--------+------------------+---------+
| Secret name | Secret ID   | Type   | Created at       | Used by |
+=============+=============+========+==================+=========+
| ewoq-key    | e9b0...5e35 | Wallet | 2024-01-30T17:25 | 0       |
+-------------+-------------+--------+------------------+---------+

Updating entities...
Updating project: ash-devnet
Project updated successfully!
+--------------+-------------+---------+-----------------+--------------------+------------------+
| Project name | Project ID  | Network | Cloud regions   | Resources          | Created at       |
+==============+=============+=========+=================+====================+==================+
| ash-devnet   | 3443...5326 | Local   |  aws/us-east-1  |  avalancheNode: 5  | 2024-01-30T13:21 |
+--------------+-------------+---------+-----------------+--------------------+------------------+

Adding resource: ash-devnet:ash-subnet
Resource successfully created in project 'ash-devnet'!
+---------------+-------------+-----------------+---------------+-------+------------------+---------+-------------------+
| Resource name | Resource ID | Type            | Cloud region  | Size  | Created at       | Status  | Resource specific |
+===============+=============+=================+===============+=======+==================+=========+===================+
| ash-subnet    | 396d...6cc8 | AvalancheSubnet | aws/us-east-1 | Small | 2024-01-30T17:26 | Pending |  ID         |     |
|               |             |                 |               |       |                  |         |  Validators | 0   |
+---------------+-------------+-----------------+---------------+-------+------------------+---------+-------------------+
```

## Subnet information

After a few minutes, we can get the Subnet ID, control keys, blockchains, and validator nodes information from the `subnetStatus` field returned by the `console resource info` command:

```bash title="Command"
ash console resource info ash-subnet --json | jq '.subnetStatus'
```

:::tip
We use the `--json` flag to get the extended information about the Subnet. All those information cannot be displayed in a table format.
:::

```python title="Output"
{
  "blockchains": [
    {
      "id": "RfX8YRUHePxFENBZFwaNt1tP6CR6RQ4hJJ5AqYv49LRoSKniK",
      "name": "AshLocalEVM",
      "vm_id": "srEXiWaHuhNyGwPUi444Tu47ZEDwxTWrbQiuD7FmgSAQ6X7Dy",
      "vm_type": "SubnetEVM"
    }
  ],
  "controlKeys": [
    "P-local18jma8ppw3nhx5r4ap8clazz0dps7rv5u00z96u"
  ],
  "id": "29uVeLPJB1eQJkzRemU8g8wZDw5uJRqpab5U2mX9euieVwiEbL",
  "pendingValidators": [],
  "subnetType": "Permissioned",
  "threshold": 1,
  "validators": [
    {
      "connected": true,
      "end_time": 1707486609,
      "node_id": "NodeID-MFrZFVCXPv5iCn6M9K6XduxGTYp891xXZ",
      "stake_amount": 100,
      "start_time": 1706881809,
      "tx_id": "DhEgYijBur6QDUDgUMpmDAyF5XGyq6JwG919B8bkryDLijvua",
      "uptime": 100,
      "weight": 100
    },
    # ...
  ]
}
```

## Blockchain RPC endpoint

The CLI provides a powerful helper to get the RPC endpoint that can be used to query the Subnet EVM blockchain (e.g. to connect a Web3 wallet). Provide the `avalancheNode` resource name to be used as RPC and the `avalancheSubnet` resource name:

```bash title="Command"
ash console helper rpc local-node-01 ash-subnet
```

```bash title="Output"
AshLocalEVM RCP endpoint:
  http://44.223.28.33:9650/ext/bc/RfX8YRUHePxFENBZFwaNt1tP6CR6RQ4hJJ5AqYv49LRoSKniK/rpc
```

:::note
See the [reference](/docs/console/reference/resource-management) for more information about resources lifecycle management.
:::
