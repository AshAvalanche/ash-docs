---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Wallet Funding on a Local Test Network

The Ash CLI allows to interact with wallets and issue transactions with them on the [Primary Network](https://docs.avax.network/learn/avalanche/avalanche-platform).

:::caution
The Ash CLI uses **plain-text private keys** to interact with wallets. **It should never be used on the mainnet**. If you try do so, your command will fail with: `AvalancheNetwork error: wallet creation is not allowed on network 'mainnet'`.

To interact with wallets on the mainnet, e.g. to create Subnets and blockchains, you should use the [Avalanche CLI](https://docs.avax.network/subnets/create-a-mainnet-subnet) that is compatible with Ledger devices.
:::

<br/>

In this tutorial, we will see how to **create and fund a new wallet** on a local Avalanche test network (see [Local Test Network Creation](/docs/toolkit/ansible-avalanche-collection/tutorials/local-test-network) for more information on how to deploy such an environment).

:::note
See [Installation](/docs/toolkit/ash-cli/installation) for installation instructions on your platform.
:::

## Create the local network configuration

Create the file `~/.config/ash/local-test-network.yml` with the following content (see [Custom Configuration](/docs/toolkit/ash-cli/tutorials/custom-configuration) for more information):

```yaml title="~/.config/ash/local-test-network.yml"
avalancheNetworks:
  - name: local
    subnets:
      - id: 11111111111111111111111111111111LpoYY
        subnetType: PrimaryNetwork
        blockchains:
          - id: 11111111111111111111111111111111LpoYY
            name: P-Chain
            vmId: 11111111111111111111111111111111LpoYY
            vmType: PVM
            rpcUrl: http://192.168.60.11:9650/ext/bc/P
          - id: 2oYMBNV4eNHyqk2fjjV5nVQLDbtmNJzq5s3qs3Lo6ftnC6FByM
            name: X-Chain
            vmId: jvYyfQTxGMJLuGWa55kdP2p2zSUYsQ5Raupu4TW34ZAUBAbtq
            vmType: AVM
            rpcUrl: http://192.168.60.11:9650/ext/bc/X
```

Then set the `ASH_CONFIG` and the `AVALANCHE_NETWORK` environment variables to use this configuration:

```bash
export ASH_CONFIG=~/.config/ash/local-test-network.yml
export AVALANCHE_NETWORK=local
```

## Create a new wallet

Creating a wallet is actually **generating a new private key**. We can do it with the `wallet generate` command:

```bash
ash avalanche wallet generate
```

```bash
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

```bash
ash avalanche wallet info
```

  </TabItem>
  <TabItem value="argument" label="Passing the private key as argument (unsafe)">

```bash
ash avalanche wallet info 0xXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX -e hex
```

  </TabItem>
</Tabs>

```bash
Wallet information:
  X-Chain address:  X-local1aszv6y7ugcnhgfvd7lzv8v3fk9hytlpstcazfk
  P-Chain address:  P-local1aszv6y7ugcnhgfvd7lzv8v3fk9hytlpstcazfk
  Ethereum address: 0xE8eeF4A23106f11DFf676a41Eb1A58E585546aca
```

:::info
The addresses will be different for you as the private key is randomly generated.
:::

## Transfer AVAX to the wallet from the pre-funded account

Now that we have a wallet and its address on the X-Chain, we can **transfer some AVAX to it**. Fortunately, a pre-funded account is available on local Avalanche networks (see [Pre-funded account](/docs/toolkit/ansible-avalanche-collection/tutorials/local-test-network#pre-funded-account) for more information) with plenty of AVAX.

### Check the wallet balance before the transfer

Let's use the `x balance` command to check the wallet's balance on our local network:

```bash
ash avalanche x balance X-local1aszv6y7ugcnhgfvd7lzv8v3fk9hytlpstcazfk
```

```bash
Balance of 'X-local1aszv6y7ugcnhgfvd7lzv8v3fk9hytlpstcazfk' on X-Chain (asset 'AVAX'):  0
```

### Transfer AVAX to the wallet

Let's use the `x transfer` command to transfer 133.7 AVAX to our new wallet (from the pre-funded account):

```bash
ash avalanche x transfer 133.7 X-local1aszv6y7ugcnhgfvd7lzv8v3fk9hytlpstcazfk \
  -p PrivateKey-ewoqjP7PxY4yr3iLTpLisriqt94hdyDFNgchSxGGztUrTXtNN -w
```

```bash
Waiting for transaction to be accepted...
Transfered 133.7 of asset 'AVAX' to 'X-local1aszv6y7ugcnhgfvd7lzv8v3fk9hytlpstcazfk'!
Transaction ID: BoLhWiiwfA7b2rq7WUyNTQrZ54nRqCYVSLt6oYWKc2AX5Lmpu
```

:::note
We used the `-w` flag to wait for the transaction to be accepted.
:::

### Check the wallet balance after the transfer

```bash
ash avalanche x balance X-local1aszv6y7ugcnhgfvd7lzv8v3fk9hytlpstcazfk
```

```bash
Balance of 'X-local1aszv6y7ugcnhgfvd7lzv8v3fk9hytlpstcazfk' on X-Chain (asset 'AVAX'):  133.7
```

Great! We can now use this wallet to interact with the X-Chain and other blockchains on the network.
