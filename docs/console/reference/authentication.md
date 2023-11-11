---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Authentication

:::caution
The Ash Console is currently in alpha and **not production-ready**. It is under active development and subject to breaking changes.
:::

Before interacting with the Ash Console, you need to authenticate yourself. The authentication flow depends on the tool you are using (Ash Console Web UI, Ash CLI, Ash Console API).

:::info
During the Console alpha, **user accounts are created by the Ash team**. If you want to get access to the Console alpha, please contact us!

- [Register in advance](https://forms.gle/m66KkKT8FC2Jb9Y97)
- [Book a call](https://calendly.com/ash-e36knots)
- [DM us on Twitter](https://twitter.com/ash_avax)
- [Join our Discord](https://discord.gg/7xSEzC2n7v)

:::

<Tabs queryString="ash-console-auth-client">
  <TabItem value="ash-cli" label="Authenticate using the Ash CLI" default>

To authenticate, run:

```bash title="Command"
ash console auth login
```

The CLI will prompt you an URL and a code to enter in the browser:

```bash title="Prompt"
Logging in to the Ash Console at http://localhost:8080
Please open the following URL in your browser:
http://localhost:8090/realms/jeeo/device
and enter the code: CGAX-GSVT
```

Once you have provided the code and authenticated yourself, the CLI will display the following message:

```bash
Login successful! The credentials have been stored in your device keyring.
```

:::note
The Console **session lasts at most 24 hours** (and 10 hours in case of inactivity). After that, you will need to login again. When trying to use the Console after the session has expired, you will get the following error:

```bash
Console OAuth2 error: failed to request OAuth2 token: Server returned error response
```

:::

  </TabItem>
  <TabItem value="ash-api" label="Authenticate using the Ash Console API">

To get an access token and a refresh token for the Ash Console API, you need to use the [OpenID Connect](https://openid.net/connect/) protocol:

```bash
curl -X POST -d "client_id=cf83e1357eefb8bd" \
  -d "username=alice" \
  -d "password=password4alice" \
  -d "grant_type=password" \
  "http://localhost:8090/realms/jeeo/protocol/openid-connect/token" | jq
```

The `access_token` has to be used in the `Authorization` header of Ash Console API requests:

```bash
curl "..." \
  -H "Authorization: Bearer ${access_token}"
```

You can use the `refresh_token` to get a new `access_token` when the current one has expired:

```bash
curl -X POST -d "client_id=cf83e1357eefb8bd" \
  -d "refresh_token=eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI3NGY4MzgyYi00NTVkLTQ1Y2QtODA3NS05YmZkM2Q4ZjZlYWEifQ.eyJleHAiOjE2OTgyMDQ2NTIsImlhdCI6MTY5ODE2ODY1MiwianRpIjoiMmQ1MTA1YzgtNWRkNy00OWFjLThlZmItOTY4ZjlkNjBjYTY4IiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDkwL3JlYWxtcy9qZWVvIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo4MDkwL3JlYWxtcy9qZWVvIiwic3ViIjoiMjg3MDkwZWUtN2ZhZS00YmQ3LTkyNjMtZDY5MDk1OWVkYzI2IiwidHlwIjoiUmVmcmVzaCIsImF6cCI6ImNmODNlMTM1N2VlZmI4YmQiLCJzZXNzaW9uX3N0YXRlIjoiMWY1Yjk3MmMtMWZlMC00MjU0LTlmMTctNjNkZmM1YTZkYTViIiwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwic2lkIjoiMWY1Yjk3MmMtMWZlMC00MjU0LTlmMTctNjNkZmM1YTZkYTViIn0.lKbwKZwqMLqk-K6T_iLwT-b3zw80Q1cOSuAgy0wEt2w" \
  -d "grant_type=refresh_token" \
  "http://localhost:8090/realms/jeeo/protocol/openid-connect/token" | jq
```

:::note
**An access token expire after 5 minutes** and a **refresh token after at most 24 hours** (and 10 hours in case of inactivity). After that, you will need to authenticate again. When trying to use the Console API after the access token has expired, you will get the following response:

```json
{
  "detail": "Provided token is not valid",
  "status": 401,
  "title": "Unauthorized",
  "type": "about:blank"
}
```

:::

:::tip
An access token can also be obtain from the Ash CLI with the `auth show-token` command:

```bash title="Command"
ash console auth show-token
```

```bash title="Output"
Showing access token for the Ash Console at http://localhost:8080
Access token (valid):
eyJ...WcA
```

If the access token is marked as `expired`, you can use the `auth refresh-token` command to get a new one:

```bash title="Command"
ash console auth refresh-token
```

```bash title="Output"
Refreshing access token for the Ash Console at http://localhost:8080

Access token refreshed successfully!
```

:::

  </TabItem>
</Tabs>
