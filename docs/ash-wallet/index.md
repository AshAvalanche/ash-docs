---
sidebar_position: 1
sidebar_label: Overview
---

# Ash Wallet

![Ash Wallet](/img/ash-wallet-landing.png)

:::info
The Ash Wallet web interface is a fork of [Safe{Wallet}](https://github.com/safe-global/safe-wallet-monorepo).
:::

[**Ash Wallet**](https://wallet.ash.center/) is **Safe**-based multi-signature wallet built for **Avalanche L1s** and the **Avalanche C-Chain**. It can be used to secure your team's treasury and critical operations, and manage assets across every L1.


**Features:**
- Multi-sig wallet for Avalanche L1s
- Powered by [Safe](https://safe.global) Smart Accounts
- Team treasury & asset management
- One wallet across all L1s*

*: Available if Safe 1.4.1 is deployed on the L1

Ash Wallet is currently available for the following L1s:
- Avalanche C-Chain
- Fuji C-Chain
- [GUNZ Chain](https://gunbygunz.com/)
- [FIFA Collect](https://collect.fifa.com/pages/fifa-blockchain)
- [Kite AI](https://gokite.ai/)
- [Beam](https://onbeam.com/)
- [Lamina1](https://lamina1.com/)
- [Datagram](https://datagram.network/)
- [Soshi Testnet](https://subnets-test.avax.network/tsoshi)
- [Ozeki Testnet](https://subnets-test.avax.network/ozeki)

:::danger
### Never fully trust a web UI for your critical operations

While we are doing everything possible to adhere **to best-in-class SecOps standards** for Ash Wallet, we have seen in the past that **even the best teams can be hacked**. The [Safe team itself has been hacked](https://rekt.news/bybit-rekt), compromising the official Safe web UI and resulting in a loss of over $1.4B for the [ByBit](https://www.bybit.com/en) exchange.

To **maximize the security** of your Safe operations, always follow the **best practices outlined in the transaction signing process**:

1. **Review what you will sign:** Signing is an irreversible action so make sure you know what you are signing. [**Read more**](https://help.safe.global/articles/2485383995-how-to-perform-basic-transactions-checks-on-safewallet)
2. **Compare with your wallet:** Once you click **Sign**, the transaction will appear in your signing wallet. Make sure that all the details match.
3. **Verify with external tools:** You can additionally cross-verify your transaction data in a third-party tool like [**Safe Utils**](https://safeutils.openzeppelin.com/)
:::
