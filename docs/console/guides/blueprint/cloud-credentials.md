---
sidebar_position: 3
---

# 1. Cloud Credentials Setup

:::caution
**UPDATE**: The Ash Console open beta has ended. Looking to launch your Avalanche L1? See our latest [Ash Managed L1s offer announcement](https://ashavax.hashnode.dev/announcing-ash-managed-l1s-and-avalanche-builder-credits)!
:::

To **deploy the Avalanche node [resources](/docs/console/glossary#resource) into your cloud account/subscription/project**, you need to provide the Console with appropriate credentials.

1. Follow the instructions provided in the [Cloud Credentials reference](/docs/console/reference/cloud-credentials) to create a **cloud credentials [secret](/docs/console/glossary#secret)** in the Console. You can **pick the cloud provider of your choice** among: AWS, Azure, and Google Cloud (more coming soon).
2. **Save the secret ID** for later use. You can always get it with the `console secret list` command:
   ```bash
   ash console secret list
   ```
