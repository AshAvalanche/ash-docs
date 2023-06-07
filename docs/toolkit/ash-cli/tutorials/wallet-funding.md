---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Wallet Funding

The Ash CLI allows to interact with wallets and issue transactions with them on the [Primary Network](https://docs.avax.network/learn/avalanche/avalanche-platform).

:::caution
The Ash CLI uses **plain-text private keys** to interact with wallets. **It should never be used on the mainnet**. If you try do so, the command will fail with: `AvalancheNetwork error: wallet creation is not allowed on network 'mainnet'`.

To interact with wallets on the mainnet (e.g. to create Subnets and blockchains), you should use the [Avalanche CLI](https://docs.avax.network/subnets/create-a-mainnet-subnet) which is compatible with Ledger devices.
:::

<br/>

In this tutorial, we will see how to **create and fund a new wallet** on:

- A local test network (see [Local Test Network Creation](/docs/toolkit/ansible-avalanche-collection/tutorials/local-test-network) for more information on how to deploy such an environment).
- The Fuji testnet.

:::note
See [Installation](/docs/toolkit/ash-cli/installation) for the Ash CLI installation instructions on your platform.
:::

## Configure the Ash CLI for your network

Prior to using the CLI, we will use a configuration file and environment variables to configure it for our target Avalanche network (see [Custom Configuration](/docs/toolkit/ash-cli/tutorials/custom-configuration) for more information).

<Tabs>
  <TabItem value="local" label="Local test network" default>

Create the file `~/.config/ash/local-test-network.yml` with the following content:

```yaml title="~/.config/ash/local-test-network.yml"
avalancheNetworks:
  - name: local
    subnets:
      - id: 11111111111111111111111111111111LpoYY
        subnetType: PrimaryNetwork
        blockchains:
          - id: 11111111111111111111111111111111LpoYY
            name: P-Chain
            vmID: 11111111111111111111111111111111LpoYY
            vmType: PlatformVM
            rpcUrl: http://192.168.60.11:9650/ext/bc/P
          - name: X-Chain
            vmID: jvYyfQTxGMJLuGWa55kdP2p2zSUYsQ5Raupu4TW34ZAUBAbtq
            vmType: AvalancheVM
            rpcUrl: http://192.168.60.11:9650/ext/bc/X
```

Then set the `ASH_CONFIG` and the `AVALANCHE_NETWORK` environment variables to use this configuration:

```bash
export ASH_CONFIG=~/.config/ash/local-test-network.yml
export AVALANCHE_NETWORK=local
```

  </TabItem>
  <TabItem value="fuji" label="Fuji testnet">

The Fuji network is already pre-configured in the Ash CLI. You just need to set the `AVALANCHE_NETWORK` environment variable:

```bash
export AVALANCHE_NETWORK=fuji
```

  </TabItem>
</Tabs>

## Create a new wallet

Creating a wallet is actually **generating a new private key**. We can do it with the `wallet generate` command:

```bash title="Command"
ash avalanche wallet generate
```

```bash title="Output"
Private key (CB58): PrivateKey-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
Private key (hex):  0xXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

**Store your private key in a safe place!** You will need it to sign transactions.

:::info
Wallets generated with the Ash CLI only give access to one account (one address per blockchain).
:::

## Store and reuse the private key

An acceptable solution **for test environments** is to generate a JSON file with the `wallet generate --json` command:

```bash
# Generate a JSON file with the private key
ash avalanche wallet generate --json > ~/.config/ash/test-wallet.json
# Secure the file so that only you can read it
chmod 600 ~/.config/ash/test-wallet.json
```

You can then easily retrieve the private key with [jq](https://stedolan.github.io/jq/) and leverage the `AVALANCHE_PRIVATE_KEY` environment variable:

```bash
export AVALANCHE_PRIVATE_KEY=$(jq -r '.cb58' ~/.config/ash/test-wallet.json)
```

:::tip
Using the `AVALANCHE_PRIVATE_KEY` environment variable is the safest way to interact with wallets (as long as you keep the private key out of your shell history!).
:::

## Show information about the wallet

You can get the list of the wallet's addresses with the `wallet info` command:

<Tabs>
  <TabItem value="env var" label="Using AVALANCHE_PRIVATE_KEY" default>

```bash title="Command"
ash avalanche wallet info
```

  </TabItem>
  <TabItem value="argument" label="Passing the private key as argument (unsafe)">

```bash title="Command"
ash avalanche wallet info PrivateKey-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

  </TabItem>
</Tabs>

```bash title="Output"
Wallet information:
  X-Chain address: X-local1aszv6y7ugcnhgfvd7lzv8v3fk9hytlpstcazfk
  P-Chain address: P-local1aszv6y7ugcnhgfvd7lzv8v3fk9hytlpstcazfk
  EVM address:     0xE8eeF4A23106f11DFf676a41Eb1A58E585546aca
```

:::info
The addresses will be different for you as the private key is randomly generated.  
Also, the X-Chain and P-Chain addresses are different depending on the network (Fuji, local, etc.)!
:::

## Fund the wallet

Now that we have a wallet and its addresses, we can **transfer some AVAX to it**:

- On local Avalanche networks, we will transfer AVAX on the X-Chain from the pre-funded account (see [Pre-funded account](/docs/toolkit/ansible-avalanche-collection/tutorials/local-test-network#pre-funded-account) for more information).
- On the Fuji testnet, we will use the official [Fuji Faucet](https://faucet.avax.network/) to request a 2-AVAX airdrop on the C-Chain.

<Tabs>
  <TabItem value="local" label="Local test network" default>

### Check the wallet balance before the transfer

Let's use the `x balance` command to check the wallet's balance on our local network:

```bash title="Command"
ash avalanche x balance X-local1aszv6y7ugcnhgfvd7lzv8v3fk9hytlpstcazfk
```

```bash title="Output"
Balance of 'X-local1aszv6y7ugcnhgfvd7lzv8v3fk9hytlpstcazfk' on X-Chain (asset 'AVAX'):  0
```

### Transfer AVAX to the wallet

Let's use the `x transfer` command to transfer 2 AVAX to our new wallet (from the pre-funded account):

```bash title="Command"
ash avalanche x transfer 2 X-local1aszv6y7ugcnhgfvd7lzv8v3fk9hytlpstcazfk \
  -p PrivateKey-ewoqjP7PxY4yr3iLTpLisriqt94hdyDFNgchSxGGztUrTXtNN -w
```

```bash title="Output"
Waiting for transaction to be accepted...
Transfered 2 of asset 'AVAX' to 'X-local1aszv6y7ugcnhgfvd7lzv8v3fk9hytlpstcazfk'!
Transaction ID: BoLhWiiwfA7b2rq7WUyNTQrZ54nRqCYVSLt6oYWKc2AX5Lmpu
```

:::note
We used the `-w` flag to wait for the transaction to be accepted.
:::

### Check the wallet balance after the transfer

```bash title="Command"
ash avalanche x balance X-local1aszv6y7ugcnhgfvd7lzv8v3fk9hytlpstcazfk
```

```bash title="Output"
Balance of 'X-local1aszv6y7ugcnhgfvd7lzv8v3fk9hytlpstcazfk' on X-Chain (asset 'AVAX'):  2
```

  </TabItem>
  <TabItem value="fuji" label="Fuji testnet">

Follow the official tutorial: [Get a Drip from the Fuji Faucet](https://docs.avax.network/quickstart/fuji-workflow#get-a-drip-from-the-fuji-faucet) and use the wallet's `EVM address`.

  </TabItem>
</Tabs>

Great! We can now use this wallet to interact with blockchains on the network.

## Transfer AVAX to the P-Chain

In order to perform Subnet-related operations (e.g. create Subnets/blockchains, add validators), we need to transfer some AVAX to the P-Chain. We will use [Avalanche Wallet](https://wallet.avax.network/) to do so.

### Connect to the wallet with Avalanche Wallet

Open a new tab in your browser and open: https://wallet.avax.network/

<Tabs>
  <TabItem value="local" label="Local test network" default>

#### Add a custom network

On the top right corner, click on the `🟢 Mainnet` and then `Add Custom`. Use the following values:

**Network Name**: `Ash Local Network`  
**URL**: `http://127.0.0.1:9661`  
**Explorer API**: `N/A`  
**Explorer Site**: `N/A`

Then click `Add Network` and select it.

  </TabItem>
  <TabItem value="fuji" label="Fuji testnet">

#### Select the Fuji network

On the top right corner, click on the `🟢 Mainnet` and then select `Fuji`.

  </TabItem>
</Tabs>

#### Access the wallet

Click on `Access Wallet` and select `Private Key`. Paste the private key of the wallet and click `Access Wallet`.

### Transfer AVAX to the P-Chain

Follow the [Avalanche Wallet FAQ](https://support.avax.network/en/collections/3439750-avalanche-wallet-wallet-avax-network) to transfer AVAX to the P-Chain from the X-Chain or C-Chain.
