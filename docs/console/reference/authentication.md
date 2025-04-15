---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Authentication

:::caution
**UPDATE**: The Ash Console open beta has ended. Looking to launch your Avalanche L1? See our latest [Ash Managed L1s offer announcement](https://ashavax.hashnode.dev/announcing-ash-managed-l1s-and-avalanche-builder-credits)!
:::

Before interacting with the Ash Console, you need to authenticate yourself. The authentication flow depends on the tool you are using (Ash Console Web UI, Ash CLI, Ash Console API).

:::info
During the Console beta, **the Console is free to use**. User [registration](/docs/console/reference/registration) are invites only. If you want to get access or have any questions regarding the Ash Console beta, please contact us!

- [Join our Discord](https://discord.gg/ktSyGrzWXy)
:::

<Tabs queryString="ash-console-auth-client">
  <TabItem value="ash-console" label="Authenticate using the Ash Console" default>

  To authenticate in the Ash Console, just navigate to the [Ash Console](https://console.ash.center) and log in with your credentials.
  
  ![Ash Console login page](/img/ash-console-login.png)

  </TabItem>
  <TabItem value="ash-cli" label="Authenticate using the Ash CLI" default>

To authenticate, run:

```bash title="Command"
ash console auth login
```

The CLI will prompt you an URL and a code to enter in the browser:

```bash title="Prompt"
Logging in to the Ash Console at https://api.console.ash.center
Please open the following URL in your browser:
https://auth.console.ash.center/realms/jeeo/device
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

:::tip
If you plan to use the API directly, run:
```bash title="Command"
ash console auth refresh-token
export access_token=$(ash console auth show-token | grep -)
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
  "https://auth.console.ash.center/realms/jeeo/protocol/openid-connect/token" | jq
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
  "https://auth.console.ash.center/realms/jeeo/protocol/openid-connect/token" | jq
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
Showing access token for the Ash Console at https://api.console.ash.center
Access token (valid):
eyJ...WcA
```

If the access token is marked as `expired`, you can use the `auth refresh-token` command to get a new one:

```bash title="Command"
ash console auth refresh-token
```

```bash title="Output"
Refreshing access token for the Ash Console at https://api.console.ash.center

Access token refreshed successfully!
```

:::

  </TabItem>
</Tabs>
