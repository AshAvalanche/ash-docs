---
sidebar_position: 6
sidebar_label: FAQ - Known Issues
hide_title: true
title: FAQ - Known Issues
---

## FAQ

<details>
  <summary>How do I get my Avalanche L1 indexed in Ash Wallet?</summary>
  <div>
  If you are running an Avalanche L1 and want Safe deployed and indexed on Ash Wallet (we can also run private or dedicated instances if needed), reach out <a href="https://x.com/SuzakuNetwork" target="_blank">on X</a> or fill out this form: <a href="https://docs.google.com/forms/d/e/1FAIpQLSfs_d-otuz7e50lvyLgoM6kFjr8QFkRKqSWolvzMMpVTI-N8w/viewform" target="_blank">Ash Wallet Integration Request</a>.
  <br />
  <br />
  Integration is free as the Ash Wallet initiative is subsidized by the Avalanche Foundation.
  </div>
</details>

<details>
  <summary>The ERC-20 logo of <b>TOKEN_SYMBOL</b> is missing</summary>
  <div>
  ERC-20 token logos are updated manually and set for the top Avalanche C-Chain tokens. If you want your token to be displayed, reach out on <a href="https://discord.com/invite/4XP6aqFkKX" target="_blank">Discord</a> in the 🔥(ash-wallet channel).
  </div>
</details>

<details>
  <summary>Some tokens are not displaying</summary>
  <div>
  Some tokens and DeFi positions might not appear directly in your Safe due to missing price feeds. To show all tokens, head over to the <b>Assets</b> tab and disable the <b>Hide small balances</b> option.
  </div>
</details>

## Known Issues

<details>
  <summary>My transaction is stuck in "Indexing" state</summary>
  <div>
  While indexing always takes some time, it can happen that the "Transaction was processed" modal gets stuck. Most likely, your transaction has still been successfully executed and indexed. You can check the status of your transaction in the <b>Transactions</b> page > <b>History tab</b>.
  </div>
</details>

<details>
  <summary>My WAVAX balance is not showing</summary>
  <div>
  ERC-20 tokens are indexed based on <b>Transfer</b> events. If you are not seeing $WAVAX in your balance, it is likely because your WAVAX comes from calling the <b>deposit()</b> function.
  </div>
</details>

## Report an issue

You can report any issue with Ash Wallet on [Discord](https://discord.com/invite/4XP6aqFkKX) in the `🔥|ash-wallet` channel.
