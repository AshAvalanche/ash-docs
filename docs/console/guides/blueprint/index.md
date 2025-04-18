---
sidebar_position: 1.2
---

# One-Command Devnet (Local Network)

:::caution
**UPDATE**: The Ash Console open beta has ended. Looking to launch your Avalanche L1? See our latest [Ash Managed L1s offer announcement](https://ashavax.hashnode.dev/announcing-ash-managed-l1s-and-avalanche-builder-credits)!
:::

Similarly to the [Avalanche Devnet guide](/docs/console/guides/local-network/), this guide will walk you through setting up **a 5-node Avalanche devnet** ([local network](https://docs.avax.network/api-reference/avalanche-go-configs-flags#network-id)) and a **[Subnet EVM](https://github.com/ava-labs/subnet-evm) blockchain** with the Ash Console, but this time with **a single command**! (well actually 2 commands in this guide, but we could do it in one)

We will leverage the [blueprint](/docs/console/reference/blueprints) feature of the Ash CLI.

:::tip
Devnets allow you to **develop your Subnet out of sight** in an environment where you have full control!
:::

:::info
Devnets use the `local` network setup with hardcoded validator nodes and airdrop address.
:::
