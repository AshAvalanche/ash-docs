---
sidebar_position: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Secret Management

:::caution
The Ash Console is currently in beta and **not production-ready**. It is under active development and subject to breaking changes.
:::

[Secrets](/docs/console/glossary#secret) are used at different steps of an Avalanche L1 deployment through the Ash Console.

## Types of secrets

There are several types of secrets, each with a different purpose. See [Secret](/docs/console/glossary#secret) for more information.

## List secrets

<Tabs groupId="ash-console-client">
  <TabItem value="ash-console" label="Using the Ash Console" default>

  To list the secrets in the Ash Console, navigate to the `Secrets` tab:

  ![Ash Console Secrets list](/img/ash-console-secret-list.png)

  </TabItem>

  <TabItem value="ash-cli" label="Using the Ash CLI">

:::tip
The Ash CLI displays information in a table format by default. To get a more detailed output (or for scripting), use the `--json` flag.
:::

To list secrets you have access to, run:

```bash title="Command"
ash console secret list
```

```bash title="Output"
+-------------+-----------+------+------------+---------+
| Secret name | Secret ID | Type | Created at | Used by |
+=============+===========+======+============+=========+
+-------------+-----------+------+------------+---------+
```

  </TabItem>
  <TabItem value="ash-api" label="Using the Ash Console API">

:::tip
See [Authentication](/docs/console/reference/authentication?ash-console-auth-client=ash-api) for more information on how to get an access token.
:::

The secret API endpoint is `/secrets`.:

```bash title="Command"
curl https://api.console.ash.center/secrets \
  -H "Authorization: Bearer ${access_token}"
```

```bash title="Output"
[]
```

  </TabItem>
</Tabs>

## Create a secret

:::caution
A secret **sensitive values can never be retrieved** from the Ash Console! Make sure to **keep a copy** in a safe place.
:::

<Tabs groupId="ash-console-client">
  <TabItem value="ash-console" label="Using the Ash Console" default>

  To create a secret, navigate to the `Secrets` tab, click on the `Create secret` button, and provide the required secret properties:

  ![Ash Console Secrets create](/img/ash-console-create-aws-secret.png)

  </TabItem>

  <TabItem value="ash-cli" label="Using the Ash CLI">

To create a new secret, use the `create secret` command and provide the required secret properties as JSON:

```bash title="Command"
ash console secret create '{name: my-secret, secretType: generic, content: "***"}'
```

```bash title="Output"
Secret created successfully!
+-------------+-------------+---------+------------------+---------+
| Secret name | Secret ID   | Type    | Created at       | Used by |
+=============+=============+=========+==================+=========+
| my-secret   | 5a46...fba3 | Generic | 2024-04-04T15:27 | 0       |
+-------------+-------------+---------+------------------+---------+
```

</TabItem>
<TabItem value="ash-api" label="Using the Ash Console API">

To create a new secret, you have to send a `POST` request with the required secret properties as JSON:

```bash title="Command"
curl -X POST https://api.console.ash.center/secrets \
  -H "Authorization: Bearer ${access_token}" \
  -H "Content-Type: application/json" \
  -d '{"name": "my-secret", "secretType": "generic", "content": "***"}'
```

```json title="Output"
{
  "id": "6c7f3c7a-7e15-4359-b7cf-3eaacb1938c2", 
  "ownerId": "4d4dee2d-e943-432c-91ee-678975615caa", 
  "name": "my-secret", 
  "secretType": "generic", 
  "created": "2024-04-04T15:28:36.954694", 
  "usedBy": {}, 
  "content": "**********"
}
```

  </TabItem>
</Tabs>

## Update a secret

:::tip
You can also provide the secret name instead of its ID.
:::

<Tabs groupId="ash-console-client">
  <TabItem value="ash-console" label="Using the Ash Console" default>

  To update a secret, navigate to the `Secrets` tab, click on a secret. Update the needed properties and :

  ![Ash Console Secrets update](/img/ash-console-secret-update.png)

  </TabItem>

  <TabItem value="ash-cli" label="Using the Ash CLI">

The properties that can be updated **depend on the secret type**. For example, you can update a `generic` secret's `name` and `content`:

```bash title="Command"
ash console secret update 6c7f3c7a-7e15-4359-b7cf-3eaacb1938c2 '{name: my-secret-updated, content: "****"}'
```

```bash title="Output"
Secret updated successfully!
+-------------------+-------------+---------+------------------+---------+
| Secret name       | Secret ID   | Type    | Created at       | Used by |
+===================+=============+=========+==================+=========+
| my-secret-updated | 6c7f...38c2 | Generic | 2024-04-04T15:28 | 0       |
+-------------------+-------------+---------+------------------+---------+
```

  </TabItem>
  <TabItem value="ash-api" label="Using the Ash Console API">

The properties that can be updated **depend on the secret type**. For example, you can update a `generic` secret's `name` and `content` by sending a `PATCH` to the `secrets/${secretId}` endpoint:

```bash title="Command"
curl -X PATCH https://api.console.ash.center/secrets/6c7f3c7a-7e15-4359-b7cf-3eaacb1938c2 \
  -H "Authorization: Bearer ${access_token}" \
  -H "Content-Type: application/json" \
  -d '{"name": "my-secret-updated", "content": "****"}'
```

```json title="Output"
{
  "id": "6c7f3c7a-7e15-4359-b7cf-3eaacb1938c2", 
  "ownerId": "4d4dee2d-e943-432c-91ee-678975615caa", 
  "name": "my-secret-updated", 
  "secretType": "generic", 
  "created": "2024-04-04T15:28:36.954694", 
  "usedBy": {}, 
  "content": "**********"
}
```

  </TabItem>
</Tabs>

## Delete a secret

:::caution
Deleting a secret is not allowed if it used by another entity.
:::

<Tabs groupId="ash-console-client">
  <TabItem value="ash-console" label="Using the Ash Console" default>

  To delete a secret, navigate to the `Secrets` tab, click on the ... and then Delete button of secret:

  ![Ash Console Secrets delete](/img/ash-console-secret-delete.png)

  </TabItem>

  <TabItem value="ash-cli" label="Using the Ash CLI">

The CLI will ask for confirmation before deleting the secret. To skip the confirmation, use the `--yes` flag.

```bash title="Command"
ash console secret delete my-secret-updated
```

```bash title="Output"
+-------------------+-------------+---------+------------------+---------+
| Secret name       | Secret ID   | Type    | Created at       | Used by |
+===================+=============+=========+==================+=========+
| my-secret-updated | 6c7f...38c2 | Generic | 2024-04-04T15:28 | 0       |
+-------------------+-------------+---------+------------------+---------+

> Are you sure you want to delete this secret? Yes
Secret deleted successfully!
```

  </TabItem>
  <TabItem value="ash-api" label="Using the Ash Console API">

```bash title="Command"
curl -X DELETE https://api.console.ash.center/secrets/my-secret-updated \
  -H "Authorization: Bearer ${access_token}"
```

```bash title="Output"
{
  "id": "6c7f3c7a-7e15-4359-b7cf-3eaacb1938c2", 
  "ownerId": "4d4dee2d-e943-432c-91ee-678975615caa", 
  "name": "my-secret-updated", 
  "secretType": "generic", 
  "created": "2024-04-04T15:28:36.954694", 
  "usedBy": {}, 
  "content": "**********"
}
```

  </TabItem>
</Tabs>
