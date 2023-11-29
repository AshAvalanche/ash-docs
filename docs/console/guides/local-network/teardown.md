---
sidebar_position: 7
---

# 5. Teardown

:::caution
The Ash Console is currently in alpha and **not production-ready**. It is under active development and subject to breaking changes.
:::

This section will guide you through the steps to delete the resources created in the previous sections.

## Delete resources

1. Gather the resource IDs:

   ```bash title="Command"
   resource_ids=$(ash console resource list --json | jq -r '.[].id')
   ```

2. Delete the resources:

   ```bash title="Command"
    echo $resource_ids | while IFS= read -r resource_id; do
      echo "Deleting resource $resource_id..."
      ash console resource delete -y $resource_id
    done
    ```

    ```bash title="Output"
    Deleting resource 4e1d6b8c-fbb0-497b-94d9-a0c0e58a27fa...
    Resource deleted successfully!
    [...]
    Deleting resource 9c2c37dd-2f68-4acf-8baf-f2d540794031...
    Resource deleted successfully!
    ```

## Delete cloud region

1. Gather the cloud region ID:

   ```bash title="Command"
   ash console region remove -y aws/us-east-1
   ```

## Delete secrets

1. Gather the secret IDs:

   ```bash title="Command"
   secret_ids=$(ash console secret list --json | jq -r '.[].id')
   ```

2. Delete the secrets:

   ```bash title="Command"
    echo $secret_ids | while IFS= read -r secret_id; do
      echo "Deleting secret $secret_id..."
      ash console secret delete -y $secret_id
    done
    ```

    ```bash title="Output"
    Deleting secret 08183731-869f-4099-8725-9fe3b56cf0bf...
    Secret deleted successfully!
    [...]
    Deleting secret 9c2c37dd-2f68-4acf-8baf-f2d540794031...
    Secret deleted successfully!
    ```

## Delete project

1. Delete the project:

   ```bash title="Command"
   ash console project delete -y 70228a47-5ab1-493b-b921-5c22b83bfbf7
   ```

   ```bash title="Output"
   Project deleted successfully!
   ```

**Note:** Replace `70228a47-5ab1-493b-b921-5c22b83bfbf7` with the project ID from step [3. Project and Cloud Region Creation](/docs/console/guides/local-network/project-region).
