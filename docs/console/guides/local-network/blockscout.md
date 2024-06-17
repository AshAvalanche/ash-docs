---
sidebar_position: 8
---

# 6. Block-explorer Deployment

:::caution
The Ash Console is currently in alpha and **not production-ready**. It is under active development and subject to breaking changes.
:::

In this section, we will create a [Blockscout](https://www.blockscout.com/) [resource](/docs/console/glossary#resource) on our local network.

In addition to indexing blocks, this instance will be able to verify smart contracts. 

## Requirements

Before setting up [Blockscout](https://www.blockscout.com/), we must deploy at least one [local Subnet](/docs/console/guides/local-network/subnet) to be indexed and wait until it's ready, as described in the [previous section](/docs/console/guides/local-network/subnet#subnet-information).

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
      NEXT_PUBLIC_NETWORK_NAME: Ash-network
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
| blockscout    | e1d6...9a0b | Blockscout | aws/us-east-1 | Medium | 2024-06-07T21:20 | Pending |  IP address |        |
|               |             |            |               |        |                  |         |  Running    | false  |
+---------------+-------------+------------+---------------+--------+------------------+---------+----------------------+
```

:::info
Unlike other resources, there is no secrets to create here.
:::

## Blockscout endpoint

Ones blockscout is available through its information's:

```bash title="Command"
ash console resource info blockscout
```

```bash title="Output"
Resource 'blockscout' of project 'ash-devnet':
+---------------+-------------+------------+---------------+--------+------------------+---------+------------------------------+
| Resource name | Resource ID | Type       | Cloud region  | Size   | Created at       | Status  | Resource specific            |
+===============+=============+============+===============+========+==================+=========+==============================+
| blockscout    | e1d6...9a0b | Blockscout | aws/us-east-1 | Medium | 2024-06-07T21:20 | Running |  IP address | 44.210.241.77  |
|               |             |            |               |        |                  |         |  Running    | true           |
+---------------+-------------+------------+---------------+--------+------------------+---------+------------------------------+
```

The CLI provides a powerful helper to get the URL where the user interface is.

```bash title="Command"
ash console helper explorer_url blockscout
```

```bash title="Output"
Explorer URL:
  http:/44.210.241.77:80
```

:::note
See the [reference](/docs/console/reference/resource-management) for more information about resources lifecycle management.
:::

