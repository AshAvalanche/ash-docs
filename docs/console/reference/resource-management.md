---
sidebar_position: 7
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Resource Management

:::caution
**UPDATE**: The Ash Console open beta has ended. Looking to launch your Avalanche L1? See our latest [Ash Managed L1s offer announcement](https://ashavax.hashnode.dev/announcing-ash-managed-l1s-and-avalanche-builder-credits)!
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
<TabItem value="ash-console" label="Using the Ash Console" default>

From the [Ash Console](https://console.ash.center) project overview page, navigate to the **Ressources** tab:

![Ash Console resource list](/img/ash-console-node-list-bis.png)

</TabItem>

<TabItem value="ash-cli" label="Using the Ash CLI">

:::tip
The Ash CLI displays information in a table format by default. To get a more detailed output (or for scripting), use the `--json` flag.
:::

To list resources you have access to, run:

```bash title="Command"
ash console resource list
```

```bash title="Output"
Resources of project 'my-devnet-project':
+---------------+-------------+------+--------------+------+------------+--------+-------------------+
| Resource name | Resource ID | Type | Cloud region | Size | Created at | Status | Resource specific |
+===============+=============+======+==============+======+============+========+===================+
+---------------+-------------+------+--------------+------+------------+--------+-------------------+
```

  </TabItem>
  <TabItem value="ash-api" label="Using the Ash Console API">

:::tip
See [Authentication](/docs/console/reference/authentication?ash-console-auth-client=ash-api) for more information on how to get an access token.
:::

The secret API endpoint is `/secrets`.:

```bash title="Command"
curl https://api.console.ash.center/projects/e05f4f15-f5ca-4ac7-b38c-0726e256c70b/resources \
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

:::tip
You can provide the secrets' or cloud regions' names instead of their IDs.
:::

<Tabs groupId="ash-console-client">
<TabItem value="ash-console" label="Using the Ash Console" default>

From the [Ash Console](https://console.ash.center) project overview page, navigate to the **Ressources** tab:
- Click on the `Create Node(s)` button.
- Configure the node as needed
- Click on the `Create` button.

![Ash Console resource create](/img/ash-console-fuji-node-create.png)

</TabItem>

<TabItem value="ash-cli" label="Using the Ash CLI">

To create a new resource, use the `create resource` command and provide the required resource properties as JSON.

```bash title="Command"
ash console resource create '{
  name: my-avalanche-node,
  resourceType: avalancheNode,
  cloudRegionId: ff69b281-917e-4ebb-b1e0-f5dc1da297fa,
  nodeIdSecretId: my-node-id,
  size: small,
  nodeConfig: {
    isBootstrapNode: true,
    avalancheNodeConfig: {
      avalanchego_version: 1.10.10
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

:::tip
You can also provide the resource name instead of its ID.
:::

<Tabs groupId="ash-console-client">

<TabItem value="ash-console" label="Using the Ash Console" default>

From the [Ash Console](https://console.ash.center) project overview page, navigate to the **Ressources** tab and click on a Resource:

![Ash Console resource](/img/ash-console-node-list.png)

</TabItem>

<TabItem value="ash-cli" label="Using the Ash CLI">

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

<TabItem value="ash-console" label="Using the Ash Console" default>

From the [Ash Console](https://console.ash.center) project overview page, navigate to the **Ressources** tab and click on a Resource:

Change the resource properties as needed and click on the `Update` button.

![Ash Console resource update](/img/ash-console-node-update.png)

</TabItem>

<TabItem value="ash-cli" label="Using the Ash CLI">

The properties that can be updated **depend on the resource type**. For example, you can update an `avalancheNode` resource's `name` and `nodeConfig`:

```bash title="Command"
ash console resource update my-avalanche-node '{name: my-avalanche-node-v2}'
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
curl -X PATCH https://api.console.ash.center/projects/399b6f5b-eed2-4713-8b68-993643babfd0/resources/my-avalanche-node \
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

<TabItem value="ash-console" label="Using the Ash Console" default>

From the [Ash Console](https://console.ash.center) project overview page, navigate to the **Ressources** tab and click on a Resource:

![Ash Console resource restart](/img/ash-console-node-restart.png)

You can then click on the `Restart` button.

</TabItem>

<TabItem value="ash-cli" label="Using the Ash CLI">

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

<TabItem value="ash-console" label="Using the Ash Console" default>

From the [Ash Console](https://console.ash.center) project overview page, navigate to the **Ressources** tab and click on a Resource:

![Ash Console resource delete](/img/ash-console-node-delete.png)

You can then click on the `Delete` button.

</TabItem>

<TabItem value="ash-cli" label="Using the Ash CLI">
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

Here are the available sizes per resource type and their corresponding machine types in each cloud provider:

### AvalancheNode

| Size     | RAM   | CPU | Disk                                    | Azure VM type   | AWS EC2 instance type | GCP machine type |
| -------- | ----- | --- | --------------------------------------- | --------------- | --------------------- | ---------------- |
| `small`  | 1-2GB | 1-2 | 8-32 (OS) + 50 GiB (resource storage)   | `Standard_B1ms` | `t2.small`            | `e2-small`       |
| `medium` | 8GB   | 4   | 8-32 (OS) + 200 GiB (resource storage)  | `Standard_F4s`  | `c5.xlarge`           | `c2d-highcpu-4`  |
| `large`  | 16GB  | 8   | 8-32 (OS) + 1000 GiB (resource storage) | `Standard_F8s`  | `c5.2xlarge`          | `c2d-highcpu-8`  |

## SSH to a resource

Accessing a resource created via the Ash Console can be useful in-depth debugging and additional configuration. Follow the insctructions below to learn how to SSH into a resource.

<Tabs>
<TabItem value="aws" label="On AWS" default>

On the [AWS Console](https://aws.amazon.com/):
- Navigate to `EC2`.
- Click on a machine to access its details, resources created by the Ash Console should follow the `juju-cr-x-machine-x` name pattern.
- Click on the `Connect` button to open an in-browser SSH session.

![AWS Console SSH](/img/aws-console-ssh.png)

:::tip
Add your SSH public key to `/home/ubuntu/.ssh/authorized_keys` to SSH without having to go through the Azure Portal.
:::

</TabItem>

<TabItem value="azure" label="On Azure">

On the [Azure Portal](https://portal.azure.com/):
- Navigate to `Virtual machines`.
- Click on a machine to access its details, resources created by the Ash Console should follow the `machine-x` name pattern.
- Go to `Help` > `Reset password`
- Add a new SSH public key with `Add SSH public key`.

![Azure Portal SSH key](/img/azure-portal-ssh.png)

</TabItem>

<TabItem value="google" label="On Google Cloud">

On the [Google Cloud console](https://console.cloud.google.com/):
- Navigate to `Compute Engine` > `VM instances`.
- Click on a machine to access its details, resources created by the Ash Console should follow the `juju-x` name pattern.
- Click on the `SSH` button to open an in-browser SSH session.

![Google Cloud SSH](/img/google-cloud-ssh.png)

:::tip
Add your SSH public key to `/home/ubuntu/.ssh/authorized_keys` to SSH without having to go through the Google Cloud.
:::

</TabItem>
</Tabs>
