---
sidebar_position: 6
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Resource Management

:::caution
The Ash Console is currently in alpha and **not production-ready**. It is under active development and subject to breaking changes.
:::

[Resources](/docs/console/glossary#secret) are the core feature of the Ash Console. They are the building blocks of your infrastructure, deployed in [cloud regions](/docs/console/glossary#cloud-region) of your cloud account/subscription/project and managed by Ash.

:::info
The Ash Console alpha supports **AvalancheNode** resources.
:::

:::note
**Resources live under a project and a cloud region**. To manage resources, you need to have **at least one project and one cloud region**.

See [Project Management](/docs/console/reference/project-management) and [Cloud Region Management](/docs/console/reference/cloud-region-management).
:::

## Types of resources

There are several types of resources. See [Resource](/docs/console/glossary#resource) for more information.

## List resources

<Tabs groupId="ash-console-client">
  <TabItem value="ash-cli" label="Using the Ash CLI" default>

:::tip
The Ash CLI displays information in a table format by default. To get a more detailed output (or for scripting), use the `--json` flag.
:::

To list resources you have access to, run:

```bash title="Command"
ash console resource list
```

```bash title="Output"
Resources of project '399b6f5b-eed2-4713-8b68-993643babfd0':
+-------------+------+------+-----------------+------+------------+--------+-------------------+
| Resource ID | Name | Type | Cloud region ID | Size | Created at | Status | Resource specific |
+=============+======+======+=================+======+============+========+===================+
+-------------+------+------+-----------------+------+------------+--------+-------------------+
```

  </TabItem>
  <TabItem value="ash-api" label="Using the Ash Console API">

:::tip
See [Authentication](/docs/console/reference/authentication?ash-console-auth-client=ash-api) for more information on how to get an access token.
:::

The secret API endpoint is `/secrets`.:

```bash title="Command"
curl https://api.console.ash.center/projects/399b6f5b-eed2-4713-8b68-993643babfd0/resources \
  -H "Authorization: Bearer ${access_token}"
```

```bash title="Output"
[]
```

  </TabItem>
</Tabs>

## Create a resource

Each resource type has specific requirements, e.g. a `nodeId` secret is required to create an `AvalancheNode` resource.

<details>
  <summary><b>Resource specific requirements</b></summary>
  <div>

<details>
  <summary><code>AvalancheNode</code></summary>
  <div>

```json
{
  "name": "my-avalanche-node",
  "resourceType": "avalancheNode",
  "cloudRegionId": "ff69b281-917e-4ebb-b1e0-f5dc1da297fa",
  "nodeIdSecretId": "4cc8f792-83af-475d-8be0-20c35efc1bd4",
  "size": "small",
  "nodeConfig": {
    "isBootstrapNode": true,
    "avalancheNodeConfig": {
      "avalanchego_network_id": "local",
      "avalanchego_version": "1.10.10"
    }
  }
}
```

You can pass any variable available in the [ash.avalanche.node](/docs/toolkit/ansible-avalanche-collection/reference/roles/avalanche-node) role under `nodeConfig.avalancheNodeConfig`.

</div>
</details>

</div>
</details>

<Tabs groupId="ash-console-client">
  <TabItem value="ash-cli" label="Using the Ash CLI" default>

To create a new resource, use the `create resource` command and provide the required resource properties as JSON.

```bash title="Command"
ash console resource create '{
  "name": "my-avalanche-node",
  "resourceType": "avalancheNode",
  "cloudRegionId": "ff69b281-917e-4ebb-b1e0-f5dc1da297fa",
  "nodeIdSecretId": "4cc8f792-83af-475d-8be0-20c35efc1bd4",
  "size": "small",
  "nodeConfig": {
    "isBootstrapNode": true,
    "avalancheNodeConfig": {
      "avalanchego_network_id": "local",
      "avalanchego_version":"1.10.10"
    }
  }
}'
```

```bash title="Output"
Resource successfully created in project '399b6f5b-eed2-4713-8b68-993643babfd0'!
+--------------------------------------+-------------------+---------------+--------------------------------------+-------+------------------+---------+--------------------------+
| Resource ID                          | Name              | Type          | Cloud region ID                      | Size  | Created at       | Status  | Resource specific        |
+======================================+===================+===============+======================================+=======+==================+=========+==========================+
| 70877036-e8df-4ad3-af95-c0f085a094a6 | my-avalanche-node | AvalancheNode | ff69b281-917e-4ebb-b1e0-f5dc1da297fa | Small | 2023-11-10T16:41 | Pending |  IP address   | pending  |
|                                      |                   |               |                                      |       |                  |         |  Running      | false    |
|                                      |                   |               |                                      |       |                  |         |  Bootstrapped | [false]  |
|                                      |                   |               |                                      |       |                  |         |  Healthy      | [false]  |
|                                      |                   |               |                                      |       |                  |         |  Restart req. | false    |
+--------------------------------------+-------------------+---------------+--------------------------------------+-------+------------------+---------+--------------------------+
```

</TabItem>
<TabItem value="ash-api" label="Using the Ash Console API">

To create a new resource, you have to send a `POST` request with the required secret properties as JSON:

```bash title="Command"
curl -X POST https://api.console.ash.center/projects/399b6f5b-eed2-4713-8b68-993643babfd0/resources \
  -H "Authorization: Bearer ${access_token}" \
  -H "Content-Type: application/json" \
  -d '{
  "name": "my-avalanche-node",
  "resourceType": "avalancheNode",
  "cloudRegionId": "ff69b281-917e-4ebb-b1e0-f5dc1da297fa",
  "nodeIdSecretId": "4cc8f792-83af-475d-8be0-20c35efc1bd4",
  "size": "small",
  "nodeConfig": {
    "isBootstrapNode": true,
    "avalancheNodeConfig": {
      "avalanchego_network_id": "local",
      "avalanchego_version": "1.10.10"
    }
  }
}'
```

```json title="Output"
{
  "id": "157f2652-8282-4738-937f-b11e8dcb7f38",
  "cloudRegionId": "ff69b281-917e-4ebb-b1e0-f5dc1da297fa",
  "name": "my-avalanche-node",
  "resourceType": "avalancheNode",
  "status": "pending",
  "size": "small",
  "ownerId": "287090ee-7fae-4bd7-9263-d690959edc26",
  "projectId": "399b6f5b-eed2-4713-8b68-993643babfd0",
  "created": "2023-11-10T17:03:21.545230",
  "nodeIdSecretId": "4cc8f792-83af-475d-8be0-20c35efc1bd4",
  "nodeConfig": {
    "ansibleAvalancheCollectionVersion": "v0.8.9",
    "isBootstrapNode": true,
    "avalancheNodeConfig": {
      "avalanchego_network_id": "local",
      "avalanchego_version": "1.10.10"
    }
  },
  "nodeStatus": {
    "running": false,
    "bootstrapped": {
      "all": false
    },
    "healthy": {
      "all": false
    },
    "restartRequired": false
  },
  "nodeIp": "pending"
}
```

  </TabItem>
</Tabs>

**Note:** See [Resource sizes](/docs/console/reference/resource-management#resource-sizes) for a list of available resource sizes.

## Get a resource and its status

A resource can be in one of the following statuses:

- `pending`: the resource is pending for a machine to be allocated in the cloud region
- `configuring`: the resource is being configured
- `running`: the resource is running
- `stopped`: the resource is stopped
- `error`: the resource is in an error state
- `destroying`: the resource is being destroyed

<Tabs groupId="ash-console-client">
  <TabItem value="ash-cli" label="Using the Ash CLI" default>

To get information about a resource, including its status, use the `resource info` command and provide the resource ID.

```bash title="Command"
ash console resource info 70877036-e8df-4ad3-af95-c0f085a094a6
```

```bash title="Output"
Resource '70877036-e8df-4ad3-af95-c0f085a094a6' of project '399b6f5b-eed2-4713-8b68-993643babfd0':
+--------------------------------------+-------------------+---------------+--------------------------------------+-------+------------------+---------+------------------------------+
| Resource ID                          | Name              | Type          | Cloud region ID                      | Size  | Created at       | Status  | Resource specific            |
+======================================+===================+===============+======================================+=======+==================+=========+==============================+
| 70877036-e8df-4ad3-af95-c0f085a094a6 | my-avalanche-node | AvalancheNode | ff69b281-917e-4ebb-b1e0-f5dc1da297fa | Small | 2023-11-10T16:41 | Running |  IP address   | 20.74.16.34  |
|                                      |                   |               |                                      |       |                  |         |  Running      | true         |
|                                      |                   |               |                                      |       |                  |         |  Bootstrapped | [false]      |
|                                      |                   |               |                                      |       |                  |         |  Healthy      | [false]      |
|                                      |                   |               |                                      |       |                  |         |  Restart req. | false        |
+--------------------------------------+-------------------+---------------+--------------------------------------+-------+------------------+---------+------------------------------+
```

  </TabItem>
  <TabItem value="ash-api" label="Using the Ash Console API">

You can get information about a resource, including its status by sending a `GET` to the `projects/${projectId}/resources/${resourceId}` endpoint:

```bash title="Command"
curl https://api.console.ash.center/projects/399b6f5b-eed2-4713-8b68-993643babfd0/resources/157f2652-8282-4738-937f-b11e8dcb7f38 \
  -H "Authorization: Bearer ${access_token}"
```

```json title="Output"
{
  "id": "157f2652-8282-4738-937f-b11e8dcb7f38",
  "cloudRegionId": "ff69b281-917e-4ebb-b1e0-f5dc1da297fa",
  "name": "my-avalanche-node",
  "resourceType": "avalancheNode",
  "status": "running",
  "size": "small",
  "ownerId": "287090ee-7fae-4bd7-9263-d690959edc26",
  "projectId": "399b6f5b-eed2-4713-8b68-993643babfd0",
  "created": "2023-11-10T17:03:21.545230",
  "nodeIdSecretId": "4cc8f792-83af-475d-8be0-20c35efc1bd4",
  "nodeConfig": {
    "ansibleAvalancheCollectionVersion": "v0.8.9",
    "isBootstrapNode": true,
    "avalancheNodeConfig": {
      "avalanchego_network_id": "local",
      "avalanchego_version": "1.10.10"
    }
  },
  "nodeStatus": {
    "running": true,
    "bootstrapped": {
      "all": false
    },
    "healthy": {
      "all": false
    },
    "restartRequired": false
  },
  "nodeIp": "20.19.110.67"
}
```

  </TabItem>
</Tabs>

## Update a resource

:::info
For some resource types, updates will not take effect until the resource is restarted. See [Restart a resource](#restart-a-resource).
:::

<Tabs groupId="ash-console-client">
  <TabItem value="ash-cli" label="Using the Ash CLI" default>

The properties that can be updated **depend on the resource type**. For example, you can update an `avalancheNode` resource's `name` and `nodeConfig`:

```bash title="Command"
ash console resource update 70877036-e8df-4ad3-af95-c0f085a094a6 '{"name": "my-avalanche-node-v2"}'
```

```bash title="Output"
Resource updated successfully!
+--------------------------------------+----------------------+---------------+--------------------------------------+-------+------------------+---------+------------------------------+
| Resource ID                          | Name                 | Type          | Cloud region ID                      | Size  | Created at       | Status  | Resource specific            |
+======================================+======================+===============+======================================+=======+==================+=========+==============================+
| 70877036-e8df-4ad3-af95-c0f085a094a6 | my-avalanche-node-v2 | AvalancheNode | ff69b281-917e-4ebb-b1e0-f5dc1da297fa | Small | 2023-11-10T16:41 | Running |  IP address   | 20.74.16.34  |
|                                      |                      |               |                                      |       |                  |         |  Running      | true         |
|                                      |                      |               |                                      |       |                  |         |  Bootstrapped | [false]      |
|                                      |                      |               |                                      |       |                  |         |  Healthy      | [false]      |
|                                      |                      |               |                                      |       |                  |         |  Restart req. | false        |
+--------------------------------------+----------------------+---------------+--------------------------------------+-------+------------------+---------+------------------------------+
```

  </TabItem>
  <TabItem value="ash-api" label="Using the Ash Console API">

The properties that can be updated **depend on the resource type**. For example, you can update an `avalancheNode` resource's `name` and `nodeConfig` by sending a `PATCH` to the `projects/${projectId}/resources/${resourceId}` endpoint:

```bash title="Command"
curl -X PATCH https://api.console.ash.center/projects/399b6f5b-eed2-4713-8b68-993643babfd0/resources/157f2652-8282-4738-937f-b11e8dcb7f38 \
  -H "Authorization: Bearer ${access_token}" \
  -H "Content-Type: application/json" \
  -d '{"name": "my-avalanche-node-v2"}'
```

```json title="Output"
{
  "id": "157f2652-8282-4738-937f-b11e8dcb7f38",
  "cloudRegionId": "ff69b281-917e-4ebb-b1e0-f5dc1da297fa",
  "name": "my-avalanche-node-v2",
  "resourceType": "avalancheNode",
  "status": "running",
  "size": "small",
  "ownerId": "287090ee-7fae-4bd7-9263-d690959edc26",
  "projectId": "399b6f5b-eed2-4713-8b68-993643babfd0",
  "created": "2023-11-10T17:03:21.545230",
  "nodeIdSecretId": "4cc8f792-83af-475d-8be0-20c35efc1bd4",
  "nodeConfig": {
    "ansibleAvalancheCollectionVersion": "v0.8.9",
    "isBootstrapNode": true,
    "avalancheNodeConfig": {
      "avalanchego_network_id": "local",
      "avalanchego_version": "1.10.10"
    }
  },
  "nodeStatus": {
    "running": true,
    "bootstrapped": {
      "all": false
    },
    "healthy": {
      "all": false
    },
    "restartRequired": false
  },
  "nodeIp": "20.19.110.67"
}
```

  </TabItem>
</Tabs>

## Restart a resource

Restarting a resource will **apply any pending configuration changes** and is required if the resource has `"restartRequired": true` in its status.

:::caution
Restarting a resource will **interrupt its service** for a few seconds/minutes.
:::

<Tabs groupId="ash-console-client">
  <TabItem value="ash-cli" label="Using the Ash CLI" default>

The CLI will ask for confirmation before restarting the resource. To skip the confirmation, use the `--yes` flag.

```bash title="Command"
ash console resource restart 70877036-e8df-4ad3-af95-c0f085a094a6
```

```bash title="Output"
Resource updated successfully!
+--------------------------------------+----------------------+---------------+--------------------------------------+-------+------------------+---------+------------------------------+
| Resource ID                          | Name                 | Type          | Cloud region ID                      | Size  | Created at       | Status  | Resource specific            |
+======================================+======================+===============+======================================+=======+==================+=========+==============================+
| 70877036-e8df-4ad3-af95-c0f085a094a6 | my-avalanche-node-v2 | AvalancheNode | ff69b281-917e-4ebb-b1e0-f5dc1da297fa | Small | 2023-11-10T16:41 | Running |  IP address   | 20.74.16.34  |
|                                      |                      |               |                                      |       |                  |         |  Running      | true         |
|                                      |                      |               |                                      |       |                  |         |  Bootstrapped | [false]      |
|                                      |                      |               |                                      |       |                  |         |  Healthy      | [false]      |
|                                      |                      |               |                                      |       |                  |         |  Restart req. | false        |
+--------------------------------------+----------------------+---------------+--------------------------------------+-------+------------------+---------+------------------------------+
```

  </TabItem>
  <TabItem value="ash-api" label="Using the Ash Console API">

A resource can be restarted by sending a `POST` to the `projects/${projectId}/resources/${resourceId}/restart` endpoint:

```bash title="Command"
curl -X POST https://api.console.ash.center/projects/399b6f5b-eed2-4713-8b68-993643babfd0/resources/157f2652-8282-4738-937f-b11e8dcb7f38/restart \
  -H "Authorization: Bearer ${access_token}"
```

```json title="Output"
{
  "id": "157f2652-8282-4738-937f-b11e8dcb7f38",
  "cloudRegionId": "ff69b281-917e-4ebb-b1e0-f5dc1da297fa",
  "name": "my-avalanche-node-v2",
  "resourceType": "avalancheNode",
  "status": "running",
  "size": "small",
  "ownerId": "287090ee-7fae-4bd7-9263-d690959edc26",
  "projectId": "399b6f5b-eed2-4713-8b68-993643babfd0",
  "created": "2023-11-10T17:03:21.545230",
  "nodeIdSecretId": "4cc8f792-83af-475d-8be0-20c35efc1bd4",
  "nodeConfig": {
    "ansibleAvalancheCollectionVersion": "v0.8.9",
    "isBootstrapNode": true,
    "avalancheNodeConfig": {
      "avalanchego_network_id": "local",
      "avalanchego_version": "1.10.10"
    }
  },
  "nodeStatus": {
    "running": true,
    "bootstrapped": {
      "all": false
    },
    "healthy": {
      "all": false
    },
    "restartRequired": false
  },
  "nodeIp": "20.19.110.67"
}
```

  </TabItem>
</Tabs>

## Delete a resource

:::info
**Removing a resource is not instantaneous**. The resource will be in status `destroying` for a few seconds/minutes before it is completely removed.
:::

<Tabs groupId="ash-console-client">
  <TabItem value="ash-cli" label="Using the Ash CLI" default>

The CLI will ask for confirmation before deleting the resource. To skip the confirmation, use the `--yes` flag.

```bash title="Command"
ash console resource delete 70877036-e8df-4ad3-af95-c0f085a094a6
```

```bash title="Output"
> Are you sure you want to delete this resource? Yes
Resource deleted successfully!
```

  </TabItem>
  <TabItem value="ash-api" label="Using the Ash Console API">

```bash title="Command"
curl -X DELETE https://api.console.ash.center/projects/399b6f5b-eed2-4713-8b68-993643babfd0/resources/157f2652-8282-4738-937f-b11e8dcb7f38 \
  -H "Authorization: Bearer ${access_token}"
```

```json title="Output"
{
  "id": "157f2652-8282-4738-937f-b11e8dcb7f38",
  "cloudRegionId": "ff69b281-917e-4ebb-b1e0-f5dc1da297fa",
  "name": "my-avalanche-node-v2",
  "resourceType": "avalancheNode",
  "status": "destroying",
  "size": "small",
  "ownerId": "287090ee-7fae-4bd7-9263-d690959edc26",
  "projectId": "399b6f5b-eed2-4713-8b68-993643babfd0",
  "created": "2023-11-10T17:03:21.545230",
  "nodeIdSecretId": "4cc8f792-83af-475d-8be0-20c35efc1bd4",
  "nodeConfig": {
    "ansibleAvalancheCollectionVersion": "v0.8.9",
    "isBootstrapNode": true,
    "avalancheNodeConfig": {
      "avalanchego_network_id": "local",
      "avalanchego_version": "1.10.10"
    }
  },
  "nodeStatus": {
    "running": true,
    "bootstrapped": {
      "all": false
    },
    "healthy": {
      "all": false
    },
    "restartRequired": false
  },
  "nodeIp": "20.19.110.67"
}
```

  </TabItem>
</Tabs>

## Resource sizes

The `size` property of a resource is used to determine **the machine type** to use. The available sizes depend on the cloud provider.

Here are the available sizes and their corresponding machine types in each cloud provider:

| Size     | RAM  | CPU | Disk     | Azure VM type   | AWS EC2 instance type | GCP machine type |
| -------- | ---- | --- | -------- | --------------- | --------------------- | ---------------- |
| `small`  | 1GB  | 1   | 50 GiB   | `Standard_B1s`  | `t2.micro`            | `e2-micro`       |
| `medium` | 4GB  | 2   | 200 GiB  | `Standard_B2s`  | `t2.medium`           | `e2-medium`      |
| `large`  | 32GB | 8   | 1000 GiB | `Standard_B8ms` | `t2.2xlarge`          | `e2-standard-8`  |
