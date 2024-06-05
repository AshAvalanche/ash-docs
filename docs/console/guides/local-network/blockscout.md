---
sidebar_position: 8
---

# 6. Blockscout Creation

:::caution
The Ash Console is currently in alpha and **not production-ready**. It is under active development and subject to breaking changes.
:::

In this section, we will create a Blockscout [resource](/docs/console/glossary#resource) on our local network.

## Subnet relation

Before creating a Blockscout, we need to this guide until here. The Subnet will be linked to a subnet to index their first blockchain.

## Blockscout creation

The following command will create a [Blockscout](https://www.blockscout.com/) instance.

```bash title="Command"
ash console resource create '{
  name: blockscout, 
  resourceType: blockscout, 
  cloudRegionId: aws/us-east-1, 
  size: medium, 
  subnetResourceId: ash-subnet, 
  blockscoutConfig: {
    blockscout_frontend_env_variables: {
      NEXT_PUBLIC_NETWORK_NAME: Ash network
    }
  }
}'
```

:::tip
The `blockscoutConfig` field is following the same structure as the [Ansible Avalanche Collection](/docs/toolkit/ansible-avalanche-collection/introduction)'s `ash.avalanche.evm.blockscout` role. See [Blockscout configuration](/docs/toolkit/ansible-avalanche-collection/reference/roles/avalanche-evm-blockscout) for more information on how to configure blockscout.
:::

```bash title="Output"
Resource successfully created in project 'ash-devnet'!
+---------------+-------------+------------+---------------+--------+------------------+---------+----------------------+
| Resource name | Resource ID | Type       | Cloud region  | Size   | Created at       | Status  | Resource specific    |
+===============+=============+============+===============+========+==================+=========+======================+
| blockscout    | 1d7f...960e | Blockscout | aws/us-east-1 | Medium | 2024-06-04T18:44 | Pending |  IP address |        |
|               |             |            |               |        |                  |         |  Running    | false  |
+---------------+-------------+------------+---------------+--------+------------------+---------+----------------------+
```

:::info
Unlike other resources, there is no secrets to create here.
:::

## Blockscout endpoint

The CLI provides a powerful helper to get the URL where the user interface is.

```bash title="Command"
ash console helper blockscout blockscout
```

```bash title="Output"
Blockscout URL:
  http:/10.223.241.15:3000/
```

:::note
See the [reference](/docs/console/reference/resource-management) for more information about resources lifecycle management.
:::

