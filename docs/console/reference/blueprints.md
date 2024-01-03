---
sidebar_position: 7
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Console Blueprints

:::caution
The Ash Console is currently in alpha and **not production-ready**. It is under active development and subject to breaking changes.
:::

The Ash CLI provides a powerful blueprint feature that allows **creating and/or updating Ash Console entities** (projects, cloud regions, resources, etc.) using **declarative configuration files**. These files can be easily version-controlled and shared with your team, enabling **infrastructure-as-code** workflows.

## Blueprints structure

A blueprint is a YAML or JSON file with the following structure:

```yaml
---
# The list of secrets to create or update
secrets:
  - name: aws-credentials
    secretType: awsCredentials
    # ...
  - name: local-node-id-01
    secretType: nodeId
    # ...
# The list of projects to create or update
projects:
  # The project properties
  - project:
      name: ash-devnet
      network: local
    # The list of cloud regions to add to the project
    regions:
      - cloudProvider: aws
        region: us-east-1
        cloudCredentialsSecretId: aws-credentials
    # The list of resources to create or update in the project
    resources:
      - name: local-node-01
        resourceType: avalancheNode
        cloudRegionId: aws/us-east-1
        nodeIdSecretId: local-node-id-01
        # ...
```

### Blueprint features

Blueprints have some nice features:

- You can **reference other entities by their name** (e.g. `cloudCredentialsSecretId: aws-credentials`) before they are created. But always **make sure that the referenced entity is listed before the entity that references it**.
- You can use **environment variables** in the blueprint:
  ```yaml
  secrets:
    - name: aws-credentials
      secretType: awsCredentials
      accessKey: "${AWS_ACCESS_KEY}"
      secretKey: "${AWS_SECRET_KEY}"
  ```

## Apply a blueprint

Applying a blueprint is as simple as running the `blueprint apply` command and providing the blueprint path:

```bash title="Command"
ash console blueprint apply ./blueprint.yml
```

The Ash CLI will display a summary of the changes that will be applied and ask for confirmation:

```bash title="Confirmation prompt"
Blueprint summary
Secrets
  2 to create: aws-credentials, local-node-id-01
  0 to update:
Projects
  1 to create:
  - 'ash-devnet':
      Regions: aws/us-east-1
      Resources: local-node-01
  0 to update:
? Are you sure you want to apply this blueprint? (y/N)
[This action is irreversible!]
```

Once you confirm, the CLI will create or update the entities in sequence and display the result:

```bash title="Output"
Creating entities...
Creating secret: aws-credentials
Secret created successfully!
+-----------------+-------------+----------------+------------------+---------+
| Secret name     | Secret ID   | Type           | Created at       | Used by |
+=================+=============+================+==================+=========+
| aws-credentials | 9954...ac4b | AwsCredentials | 2023-12-21T14:34 | 0       |
+-----------------+-------------+----------------+------------------+---------+

Creating secret: local-node-id-01
Secret created successfully!
+------------------+-------------+--------+------------------+---------+
| Secret name      | Secret ID   | Type   | Created at       | Used by |
+==================+=============+========+==================+=========+
| local-node-id-01 | 5064...9550 | NodeId | 2023-12-21T14:34 | 0       |
+------------------+-------------+--------+------------------+---------+

Creating project: ash-devnet
Project created successfully!
+--------------+-------------+---------+---------------+------------------+
| Project name | Project ID  | Network | Cloud regions | Created at       |
+==============+=============+=========+===============+==================+
| ash-devnet   | 519b...c103 | Local   |               | 2023-12-21T14:34 |
+--------------+-------------+---------+---------------+------------------+

Switched to project 'ash-devnet' (519b5d03-6ab2-44db-9a01-61774650c103)!
Adding region: ash-devnet:aws/us-east-1
Cloud region successfully added to project 'ash-devnet'!
+---------------+-------------+-----------------------+------------------+-----------+
| Cloud region  | Region ID   | Cloud creds secret ID | Created at       | Status    |
+===============+=============+=======================+==================+===========+
| aws/us-east-1 | 010b...5d55 | 9954...ac4b           | 2023-12-21T14:34 | Available |
+---------------+-------------+-----------------------+------------------+-----------+

Adding resource: ash-devnet:local-node-01
Resource successfully created in project 'ash-devnet'!
+---------------+-------------+---------------+-----------------+-------+------------------+---------+--------------------------+
| Resource name | Resource ID | Type          | Cloud region ID | Size  | Created at       | Status  | Resource specific        |
+===============+=============+===============+=================+=======+==================+=========+==========================+
| local-node-01 | 352e...ba20 | AvalancheNode | 010b...5d55     | Small | 2023-12-21T14:34 | Pending |  IP address   | None     |
|               |             |               |                 |       |                  |         |  Running      | false    |
|               |             |               |                 |       |                  |         |  Bootstrapped | [false]  |
|               |             |               |                 |       |                  |         |  Healthy      | [false]  |
|               |             |               |                 |       |                  |         |  Restart req. | false    |
+---------------+-------------+---------------+-----------------+-------+------------------+---------+--------------------------+

Updating entities: Nothing to update
```

You can use the same command to update existing entities. For example, if you add a new region to the blueprint:

```yaml
---
# ...
projects:
  - project:
      name: ash-devnet
      network: local
    regions:
      # ...
      # New region
      - cloudProvider: aws
        region: us-west-2
        cloudCredentialsSecretId: aws-credentials
    # ...
```

```bash title="Command"
ash console blueprint apply ./blueprint.yml
```

```bash title="Confirmation prompt"
Blueprint summary
Secrets
  0 to create:
  2 to update: aws-credentials, local-node-id-01
Projects
  0 to create:
  1 to update:
  - 'ash-devnet':
      Regions: aws/us-east-1, aws/us-east-2
      Resources: local-node-01
? Are you sure you want to apply this blueprint? (y/N)
[This action is irreversible!]
```
