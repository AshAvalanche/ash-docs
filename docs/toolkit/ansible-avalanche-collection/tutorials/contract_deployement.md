---
sidebar_position: 11
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Smart Contract Deployement

In this section, we will deploy a smart contract to launch the ASHToken ERC20 token on an Evm subnet deployed using the ash Ansible collection.

:::note
For this tutorial, we will use the [`local`](https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local) inventory provided by the [Ansible Avalanche Getting Started](https://github.com/AshAvalanche/ansible-avalanche-getting-started) repository. See [Create a Local Test Network](./local-test-network) for details.

We should also have created a Subnet and a blockchain, see [Subnet Creation](/docs/toolkit/ansible-avalanche-collection/tutorials/subnet-creation) for details.
:::

## Configure the environement

For this tutorial, we will use the [Foundry suit](https://github.com/foundry-rs/foundry) which can be installed through their [tutorial](https://book.getfoundry.sh/getting-started/installation).
To compile the contract, we need to clone two dependencies into the "ash_token/lib" folder.

```bash title="Command"
git clone https://github.com/foundry-rs/forge-std
git clone https://github.com/OpenZeppelin/openzeppelin-contracts.git
```

## Deploy the contract

In order to deploy the ASH token we need to sign the trensaction and to know the rpc url. To do so, we will use the private key of the pre-funded account. (see [configure-the-subnet-transactions-wallet](https://ash.center/docs/toolkit/ansible-avalanche-collection/tutorials/subnet-creation#configure-the-subnet-transactions-wallet))
:::tip
This key is CB58-encoded which is not handled by forge commands. see [show-information-about-the-wallet](https://ash.center/docs/toolkit/ash-cli/tutorials/wallet-funding#show-information-about-the-wallet) to retrive the Hex-encoded version.
:::

We also need the rpc url (see [connect-to-the-subnet-and-start-issuing-transactions](https://ash.center/docs/toolkit/ansible-avalanche-collection/tutorials/subnet-creation#connect-to-the-subnet-and-start-issuing-transactions)) for each cmds.

```bash title="Command"
export RPC_URL=http://${VALIDATOR01_IP}:9650/ext/bc/${BLOCKCHAIN_ID}/rpc
export BOB_PRIVATE_KEY=0x56289e99c94b6912bfc12adc093c9b51124f0dc54ac7a766b2bc5ccf558d8027
```

Now, we can deploy our ERC20 with an initial supply of 200 tokens:

```bash title="Command"
forge create --rpc-url $RPC_URL --private-key $BOB_PRIVATE_KEY src/ASHToken.sol:ASHToken --constructor-args 200000000000000000000
```

```bash title="Output"
Compiler run successful!
 Deployer: 0x95AF400F4FDB27281bcc6Fc60Ad8aB5cD31dC35a
 Deployed to: 0x631a3621031d9483b2Ca0f34c3A6F0d0fEf17155
 Transaction hash: 0xfeb4b67875c1daaf92be3cf7ffbb01fdfdbffcf81e81d4c9fd329397f492af99
```

## Interact with the contract

### Using cast

Firstly we defind the followings variables for convegnence:
```bash title="command"
export BOB_ADDR=0x95AF400F4FDB27281bcc6Fc60Ad8aB5cD31dC35a
export ALICE_ADDR=${NEW_TEST_ADDRESS}
export CONTRACT_ADDRESS=0x631a3621031d9483b2Ca0f34c3A6F0d0fEf17155
```

As [forge](https://book.getfoundry.sh/reference/forge/), [cast](https://book.getfoundry.sh/reference/cast/) is a part of the [foundry](https://github.com/foundry-rs/foundry) suit which allow us to interact with the contract:
```bash title="command"
cast call $CONTRACT_ADDRESS "totalSupply()(uint256)" --rpc-url $RPC_URL
cast call $CONTRACT_ADDRESS "balanceOf(address)(uint256)" $ALICE_ADDR --rpc-url $RPC_URL
```

Let's transfer some ASH to Alice:
```bash title="command"
cast send $CONTRACT_ADDRESS "transfer(address,uint256)(bool)" $ALICE_ADDR 100 --private-key $BOBS_PRIVATE_KEY --rpc-url $RPC_URL
```
```bash title="output"
blockHash               0xbd644e33e5b9db09edcd6d76b261b4c761e6fa5988e5e2e3203aedffaddd0712
blockNumber             4
contractAddress         
cumulativeGasUsed       51560
effectiveGasPrice       28000000000
from                    0x95AF400F4FDB27281bcc6Fc60Ad8aB5cD31dC35a
gasUsed                 51560
logs                    [{"address":"0x631a3621031d9483b2ca0f34c3a6f0d0fef17155","topics":["0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef","0x00000000000000000000000095af400f4fdb27281bcc6fc60ad8ab5cd31dc35a","0x0000000000000000000000002c7266d1674502da3bcbe8b850a204deecde821a"],"data":"0x0000000000000000000000000000000000000000000000000000000000000064","blockHash":"0xbd644e33e5b9db09edcd6d76b261b4c761e6fa5988e5e2e3203aedffaddd0712","blockNumber":"0x4","transactionHash":"0x573652b9bf55a74ea6f211d913798b6e8aeb60dc0f11ccd44cd71fd8a8cbc78b","transactionIndex":"0x0","logIndex":"0x0","removed":false}]
logsBloom               0x08000000100000000000000020000000000000200000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000008040000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000400000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100
root                    
status                  1
transactionHash         0x573652b9bf55a74ea6f211d913798b6e8aeb60dc0f11ccd44cd71fd8a8cbc78b
transactionIndex        0
type                    2
to                      0x631a…7155
```
### Using your wallet

:::tip
To be connected on the correct blockchain, please refer to  [connect-to-the-subnet-and-start-issuing-transactions](http://localhost:3000/docs/toolkit/ansible-avalanche-collection/tutorials/subnet-creation#connect-to-the-subnet-and-start-issuing-transactions) section.
:::

As every blockchain running an Evm, we can register a new token in a wallet (core in our case) to interact with. To do so, open the wallet, add a custom token and fill the contract address:

![alt text](../../../../static/img/ash-workflow-ASHToken-Wallet.png)