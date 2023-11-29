---
sidebar_position: 6
---

# 5. Teardown

:::caution
The Ash Console is currently in alpha and **not production-ready**. It is under active development and subject to breaking changes.
:::

This section will guide you through the steps to delete the resources created in the previous sections.

## Delete resource

```bash title="Command"
ash console resource delete -y dfa1e029-bf0b-4333-b45d-be0454536d26
```

```bash title="Output"
Resource deleted successfully!
```

**Note:** Replace `dfa1e029-bf0b-4333-b45d-be0454536d26` with the resource ID from step [4. Avalanche Node Deployment](/docs/console/guides/fuji-node/avalanche-node).

## Delete cloud region

```bash title="Command"
ash console region remove -y azure/francecentral
```

```bash title="Output"
Cloud region removed successfully!
```

## Delete Node ID secret

```bash title="Command"
ash console secret delete -y 0b3ab7f4-c355-4971-b9d1-74f67414abc0
```

**Note:** Replace `0b3ab7f4-c355-4971-b9d1-74f67414abc0` with the secret ID from step [2. Node ID Secret Generation](/docs/console/guides/fuji-node/node-id).

```bash title="Output"
Secret deleted successfully!
```

## Delete project

Delete the project:

```bash title="Command"
ash console project delete -y 1c464e44-1e2c-46de-a08c-79ac58f6e632
```

```bash title="Output"
Project deleted successfully!
```

**Note:** Replace `1c464e44-1e2c-46de-a08c-79ac58f6e632` with the project ID from step [3. Project and Cloud Region Creation](/docs/console/guides/fuji-node/project-region).
