---
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Secret Management

:::caution
The Ash Console is currently in alpha and **not production-ready**. It is under active development and subject to breaking changes.
:::

[Secrets](/docs/console/glossary#secret) are used at different steps of an Appchain deployment through the Ash Console.

## Types of secrets

There are several types of secrets, each with a different purpose. See [Secret](/docs/console/glossary#secret) for more information.

## List secrets

<Tabs groupId="ash-console-client">
  <TabItem value="ash-cli" label="Using the Ash CLI" default>

:::tip
The Ash CLI displays information in a table format by default. To get a more detailed output (or for scripting), use the `--json` flag.
:::

To list secrets you have access to, run:

```bash title="Command"
ash console secret list
```

```bash title="Output"
+-----------+----------+------+------+------------+---------+
| Secret ID | Owner ID | Name | Type | Created at | Used by |
+===========+==========+======+======+============+=========+
+-----------+----------+------+------+------------+---------+
```

  </TabItem>
  <TabItem value="ash-api" label="Using the Ash Console API">

:::tip
See [Authentication](/docs/console/tutorials/authentication?ash-console-auth-client=ash-api) for more information on how to get an access token.
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
  <TabItem value="ash-cli" label="Using the Ash CLI" default>

To create a new secret, use the `create secret` command and provide the required secret properties as JSON:

```bash title="Command"
ash console secret create '{"name": "my-secret", "secretType": "generic", "content": "***"}'
```

```bash title="Output"
Secret created successfully!
+--------------------------------------+-------------+-----------+---------+------------------+---------+
| Secret ID                            | Owner ID    | Name      | Type    | Created at       | Used by |
+======================================+=============+===========+=========+==================+=========+
| ed8a3653-b6cc-4cd4-899f-ceee4159f545 | 2870...dc26 | my-secret | Generic | 2023-10-30T21:58 | 0       |
+--------------------------------------+-------------+-----------+---------+------------------+---------+
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
  "content": "**********",
  "created": "2023-10-30T22:16:41.870842",
  "id": "465a6c24-5640-46d4-963f-98c0990484e1",
  "name": "my-secret",
  "ownerId": "287090ee-7fae-4bd7-9263-d690959edc26",
  "secretType": "generic",
  "usedBy": {}
}
```

  </TabItem>
</Tabs>

## Update a secret

<Tabs groupId="ash-console-client">
  <TabItem value="ash-cli" label="Using the Ash CLI" default>

The properties that can be updated **depend on the secret type**. For example, you can update a `generic` secret's `name` and `content`:

```bash title="Command"
ash console secret update ed8a3653-b6cc-4cd4-899f-ceee4159f545 '{"name": "my-secret-updated", "content": "****"}'
```

```bash title="Output"
Secret updated successfully!
+--------------------------------------+-------------+-------------------+---------+------------------+---------+
| Secret ID                            | Owner ID    | Name              | Type    | Created at       | Used by |
+======================================+=============+===================+=========+==================+=========+
| ed8a3653-b6cc-4cd4-899f-ceee4159f545 | 2870...dc26 | my-secret-updated | Generic | 2023-10-30T21:58 | 0       |
+--------------------------------------+-------------+-------------------+---------+------------------+---------+
```

  </TabItem>
  <TabItem value="ash-api" label="Using the Ash Console API">

The properties that can be updated **depend on the secret type**. For example, you can update a `generic` secret's `name` and `content` by sending a `PATCH` to the `secrets/${secretId}` endpoint:

```bash title="Command"
curl -X PATCH https://api.console.ash.center/secrets/465a6c24-5640-46d4-963f-98c0990484e1 \
  -H "Authorization: Bearer ${access_token}" \
  -H "Content-Type: application/json" \
  -d '{"name": "my-secret-updated", "content": "****"}'
```

```json title="Output"
{
  "content": "**********",
  "created": "2023-10-30T22:16:41.870842",
  "id": "465a6c24-5640-46d4-963f-98c0990484e1",
  "name": "my-secret-updated",
  "ownerId": "287090ee-7fae-4bd7-9263-d690959edc26",
  "secretType": "generic",
  "usedBy": {}
}
```

  </TabItem>
</Tabs>

## Delete a secret

:::caution
Deleting a secret is not allowed if it used by another entity.
:::

<Tabs groupId="ash-console-client">
  <TabItem value="ash-cli" label="Using the Ash CLI" default>

The CLI will ask for confirmation before deleting the secret. To skip the confirmation, use the `--yes` flag.

```bash title="Command"
ash console secret delete ed8a3653-b6cc-4cd4-899f-ceee4159f545
```

```bash title="Output"
> Are you sure you want to delete this secret? Yes
Secret deleted successfully!
```

  </TabItem>
  <TabItem value="ash-api" label="Using the Ash Console API">

```bash title="Command"
curl -X DELETE https://api.console.ash.center/secrets/465a6c24-5640-46d4-963f-98c0990484e1 \
  -H "Authorization: Bearer ${access_token}"
```

```bash title="Output"
{
  "content": "**********",
  "created": "2023-10-30T23:23:23.883772",
  "id": "465a6c24-5640-46d4-963f-98c0990484e1",
  "name": "my-secret",
  "ownerId": "287090ee-7fae-4bd7-9263-d690959edc26",
  "secretType": "generic",
  "usedBy": {}
}
```

  </TabItem>
</Tabs>
