---
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Local Subnet Creation

The Ash CLI allows to **create Subnets and blockchains**, and to **add validators** to Subnets (including the Primary Network).

:::caution
The Ash CLI uses **plain-text private keys** to interact with wallets. **It should never be used on the mainnet**. If you try do so, the command will fail with: `AvalancheNetwork error: wallet creation is not allowed on network 'mainnet'`.

To interact with wallets on the mainnet (e.g. to create Subnets and blockchains), you should use the [Avalanche CLI](https://docs.avax.network/subnets/create-a-mainnet-subnet) which is compatible with Ledger devices.
:::

<br/>

In this tutorial, we will see how to create **a new Subnet with a Subnet EVM blockchain** on a local test network (see [Local Test Network Creation](/docs/toolkit/ansible-avalanche-collection/tutorials/local-test-network) for more information on how to deploy such an environment).

## Prerequisites

- **A deployed local network**. You can use:
  - The **Ansible Avalanche Collection**. See [Local Test Network Creation](/docs/toolkit/ansible-avalanche-collection/tutorials/local-test-network).
  - Or the **Avalanche Network Runner** via Avalanche CLI: `avalanche network start`
- A wallet with **some AVAX on the P-Chain**. See [Wallet Funding](/docs/toolkit/ash-cli/tutorials/wallet-funding).
- **Ash CLI installed and configured** for your network. See [Installation](/docs/toolkit/ash-cli/installation) and [Configure the Ash CLI for your network](/docs/toolkit/ash-cli/tutorials/wallet-funding#configure-the-ash-cli-for-your-network).
- **Avalanche CLI installed**. We use it to create the Subnet EVM genesis configuration using a nice wizard. See [Install Avalanche CLI](https://docs.avax.network/subnets/install-avalanche-cli).

## Create the Subnet

We use the `subnet create` command to create a new Subnet:

<Tabs groupId="pkey-arg">
  <TabItem value="env var" label="Using AVALANCHE_PRIVATE_KEY" default>

```bash title="Command"
ash avalanche subnet create -w
```

  </TabItem>
  <TabItem value="argument" label="Passing the private key as argument (unsafe)">

```bash title="Command"
ash avalanche subnet create -w -p PrivateKey-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

  </TabItem>
</Tabs>

```bash title="Output"
Waiting for transaction to be accepted...
Subnet created! (Tx ID: 'GQE4XUWgCR8ZryvhNdaCoyqVi25YNyh2nxyAjyCB3jXFL6gbk')
Subnet 'GQE4XUWgCR8ZryvhNdaCoyqVi25YNyh2nxyAjyCB3jXFL6gbk':
  Type: Permissioned
  Control keys: ["P-local18jma8ppw3nhx5r4ap8clazz0dps7rv5u00z96u"]
  Threshold:    1
  Blockchains list (0): []
  Validators list (0): []
```

:::note
We used the `-w` flag to wait for the transaction to be accepted.
:::

## Create the Subnet EVM blockchain configuration

Avalanche CLI provides an awesome wizard to create the Subnet EVM blockchain genesis configuration. Follow the official tutorial: [Create Your Subnet Configuration](https://docs.avax.network/subnets/build-first-subnet#create-your-subnet-configuration).

This will create a `genesis.json` file at `~/.avalanche-cli/subnets/$YOUR_SUBNET` where `$YOUR_SUBNET` is the name you chose for your Subnet (e.g. `testSubnetEVM`):

```bash title="Command"
cat ~/.avalanche-cli/subnets/testSubnetEVM/genesis.json
```

```json title="Output"
{
  "config": {
    "chainId": 11111,
    "feeConfig": {
      [...]
    }
  }
}
```

## Create the Subnet EVM blockchain

### Encode the genesis data

At blockchain creation, we need to provide the byte-encoded genesis data. We use the `vm encode-genesis` command and store the output to a temporary JSON file:

```bash title="Commands"
# Encode the genesis data
ash avalanche vm encode-genesis \
  ~/.avalanche-cli/subnets/testSubnetEVM/genesis.json --json > /tmp/encoded-genesis.json

# Display the encoded genesis data
cat /tmp/encoded-genesis.json
```

```json title="Output"
{ "genesisBytes": "0x7b22636f6e666967223a..." }
```

### Submit the blockchain creation transaction

Use the `blockchain create` command to create the Subnet EVM blockchain in the Subnet we created earlier:

<Tabs groupId="pkey-arg">
  <TabItem value="env var" label="Using AVALANCHE_PRIVATE_KEY" default>

```bash title="Command"
ash avalanche blockchain create testSubnetEVM \
  --subnet-id GQE4XUWgCR8ZryvhNdaCoyqVi25YNyh2nxyAjyCB3jXFL6gbk \
  --vm-type SubnetEVM \
  --vm-id srEXiWaHuhNyGwPUi444Tu47ZEDwxTWrbQiuD7FmgSAQ6X7Dy \
  --genesis-file /tmp/encoded-genesis.json -w
```

  </TabItem>
  <TabItem value="argument" label="Passing the private key as argument (unsafe)">

```bash title="Command"
ash avalanche blockchain create testSubnetEVM \
  -p PrivateKey-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX \
  --subnet-id GQE4XUWgCR8ZryvhNdaCoyqVi25YNyh2nxyAjyCB3jXFL6gbk \
  --vm-type SubnetEVM \
  --vm-id srEXiWaHuhNyGwPUi444Tu47ZEDwxTWrbQiuD7FmgSAQ6X7Dy \
  --genesis-file /tmp/encoded-genesis.json -w
```

  </TabItem>
</Tabs>

```bash title="Output"
Waiting for transaction to be accepted...
Blockchain created! (Tx ID: 'i2ZXw8NbVFxUK3kMjpwPtF2T3mtyoc6VWuH41rMfbc1NWE1Pb')
Blockchain 'testSubnetEVM':
  ID:      i2ZXw8NbVFxUK3kMjpwPtF2T3mtyoc6VWuH41rMfbc1NWE1Pb
  VM ID:   srEXiWaHuhNyGwPUi444Tu47ZEDwxTWrbQiuD7FmgSAQ6X7Dy
  VM type: SubnetEVM
```

## Add validators to the Subnet

Our Subnet has been created but we still need to add some validators to it.

### Get validator IDs

First, we need to get the validator IDs of the validators we want to add to the Subnet. We can use the `subnet info` command to get the list of validators on the Primary Network:

```bash title="Command"
ash avalanche subnet info 11111111111111111111111111111111LpoYY
```

```bash title="Output"
Subnet '11111111111111111111111111111111LpoYY':
  Type: PrimaryNetwork
  Blockchains list (3): [...]
  Validators list (5):
  - NodeID-P7oB2McjBGgW2NXXWVYjV8JEDFoW9xDE5
  - NodeID-GWPcbFJZFfZreETSoWjPimr846mXEKCtu
  - NodeID-NFBbbJ4qCmNaCzeW7sxErhvWqvEQMnYcN
  - NodeID-MFrZFVCXPv5iCn6M9K6XduxGTYp891xXZ
  - NodeID-7Xhw2mDxuDS44j42TCB6U5579esbSt3Lg
```

### Submit the validator add transactions

Let's add a first validator with a weight of `100` to the Subnet using the `validator add` command. It takes a lot of arguments:

```bash title="Command"
#                           | Node ID of the validator to add        | Validator weight
ash avalanche validator add NodeID-P7oB2McjBGgW2NXXWVYjV8JEDFoW9xDE5 100 \
  --subnet-id GQE4XUWgCR8ZryvhNdaCoyqVi25YNyh2nxyAjyCB3jXFL6gbk \
  --start-time "$(date -d '2 minutes' --rfc-3339=seconds | sed 's/ /T/')" \
  --end-time "$(date -d '2 days' --rfc-3339=seconds | sed 's/ /T/')"
```

```bash title="Output"
Initiated validator addition to Subnet! (Tx ID: 'NodeID-P7oB2McjBGgW2NXXWVYjV8JEDFoW9xDE5')
Validator 'NodeID-P7oB2McjBGgW2NXXWVYjV8JEDFoW9xDE5' on Subnet 'GQE4XUWgCR8ZryvhNdaCoyqVi25YNyh2nxyAjyCB3jXFL6gbk':
Tx ID:            UcreXaaf5nt9Chy3nXSvJEAKHW9eqCQSjWB21KLxFBiUzuQvM
Start time:       2023-05-29 16:29:12
End time:         2023-05-31 16:27:12
Weight:           100
```

:::tip
The `start-time` and `end-time` arguments should follow the RFC 3339 format: `YYYY-MM-DDTHH:MM:SSZ`. You can use the `date` command as above to generate them.
:::

In this example validation period will start 2 minutes after the transaction is accepted and will end 2 days after.

:::info
See [platform.addSubnetValidator](https://docs.avax.network/apis/avalanchego/apis/p-chain#platformaddsubnetvalidator) for more information about **the weight parameter**.
:::

We can now **repeat the process** for the 4 other validators.

## Check the Subnet validators

After 2 minutes, we can check the validators list of the Subnet:

```bash title="Command"
ash avalanche subnet info GQE4XUWgCR8ZryvhNdaCoyqVi25YNyh2nxyAjyCB3jXFL6gbk
```

```bash title="Output"
Subnet 'GQE4XUWgCR8ZryvhNdaCoyqVi25YNyh2nxyAjyCB3jXFL6gbk':
  Type: Subnet
  Blockchains list (1):
  - testSubnetEVM:
      ID:      i2ZXw8NbVFxUK3kMjpwPtF2T3mtyoc6VWuH41rMfbc1NWE1Pb
      VM ID:   srEXiWaHuhNyGwPUi444Tu47ZEDwxTWrbQiuD7FmgSAQ6X7Dy
      VM type: SubnetEVM
  Validators list (5):
  - NodeID-P7oB2McjBGgW2NXXWVYjV8JEDFoW9xDE5
  - NodeID-GWPcbFJZFfZreETSoWjPimr846mXEKCtu
  - NodeID-NFBbbJ4qCmNaCzeW7sxErhvWqvEQMnYcN
  - NodeID-MFrZFVCXPv5iCn6M9K6XduxGTYp891xXZ
  - NodeID-7Xhw2mDxuDS44j42TCB6U5579esbSt3Lg
```

:::tip
You can use the `--extended` flag to get more information about the validators, notably their weight and the start/end time of their validation period.
:::

:::caution
Don't forget that the validator nodes should be **configured to track the Subnet**, otherwise you will not be able to issue transactions. See [Track the Subnet with the validators](/docs/toolkit/ansible-avalanche-collection/tutorials/subnet-creation#track-the-subnet-with-the-validators).
:::

## Connect to the Subnet and start issuing transactions

The Subnet is now ready to be used! You can connect any EVM-compatible wallet (e.g. [MetaMask](https://metamask.io/), [Core](https://core.app), [Frame](https://frame.sh), etc.) to it and start issuing transactions, deploying smart contracts, etc.

Use the following settings to connect to the Subnet:

<Tabs>
  <TabItem value="ansible" label="Local Ash network" default>

**Network name**: `testSubnetEVM`  
**New RPC URL**: `https://192.168.60.11:9650/ext/bc/${YOUR_BLOCKCHAIN_ID}/rpc`  
**Chain ID**: The one entered during `avalanche subnet create`. Can be found via `avalanche subnet describe testSubnetEVM`  
**Symbol**: Whatever you want to name your token  
**Explorer URL**: NA

  </TabItem>
  <TabItem value="avalanche-cli" label="Avalanche Network Runner">

**Network name**: `testSubnetEVM`  
**New RPC URL**: `https://127.0.0.1:9650/ext/bc/${YOUR_BLOCKCHAIN_ID}/rpc`  
**Chain ID**: The one entered during `avalanche subnet create`. Can be found via `avalanche subnet describe testSubnetEVM`  
**Symbol**: Whatever you want to name your token  
**Explorer URL**: NA

  </TabItem>
</Tabs>
