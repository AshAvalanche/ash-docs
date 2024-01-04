---
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 2. Blueprint Configuration and Apply

:::caution
The Ash Console is currently in alpha and **not production-ready**. It is under active development and subject to breaking changes.
:::

We need to write a [blueprint](/docs/console/reference/blueprints) that defines all the entities needed to deploy a 5-node Avalanche devnet. For convenience, we have prepared the [devnet.yml](https://github.com/AshAvalanche/ash-rs/blob/ash-console-alpha/crates/ash_cli/examples/console/blueprint/devnet.yml) blueprint for you.

## Download the blueprint

1. If not already done, create a folder for this guide and navigate to it:

   ```bash
   mkdir -p ash-console-guides/one-command-devnet
   cd ash-console-guides/one-command-devnet
   ```

2. Download the [devnet.yml](https://github.com/AshAvalanche/ash-rs/blob/ash-console-alpha/crates/ash_cli/examples/console/blueprint/devnet.yml) blueprint from the [ash-rs](https://github.com/AshAvalanche/ash-rs) GitHub repository.

   ```bash
   curl -sSL https://raw.githubusercontent.com/AshAvalanche/ash-rs/ash-console-alpha/crates/ash_cli/examples/console/blueprint/devnet.yml -o devnet.yml
   ```

## Review the blueprint

Let's take a look at the blueprint. You will see that it defines:

- **5 `nodeId` secrets** for the 5 nodes of our Avalanche devnet (the node IDs of a `local` Avalanche network are hard-coded in AvalancheGo).  
  A `nodeId` [secret](/docs/console/glossary#secret) contains the TLS keys and certificates for an Avalanche node:
  ```yaml
  secrets:
    - name: local-node-id-01
      secretType: nodeId
      nodeId: NodeID-7Xhw2mDxuDS44j42TCB6U5579esbSt3Lg
      nodeCert: LS0tLS...
      nodeKey: LS0tLS...
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

## Apply the blueprint

Everything is ready to deploy our devnet! Let's apply the blueprint:

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

1. It will take a few minutes before the local network is `Bootstrapped` and `Healthy`. You can get its updated status with the `console resource info` command:

   ```bash title="Command"
    ash console resource info avalanche-node-01
   ```

   ```bash title="Output"
   Resource 'avalanche-node-01' of project 'devnet-guide':
   +-------------------+-------------+---------------+-----------------+-------+------------------+---------+--------------------------------+
   | Resource name     | Resource ID | Type          | Cloud region ID | Size  | Created at       | Status  | Resource specific              |
   +===================+=============+===============+=================+========+==================+=========+================================+
   | avalanche-node-01 | 9419...6722 | AvalancheNode | 634d...c9d9     | Small | 2024-01-02T11:54 | Running |  IP address   | 3.210.183.166  |
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

:::note
See the [reference](/docs/console/reference/resource-management) for more information about resources lifecycle management.
:::