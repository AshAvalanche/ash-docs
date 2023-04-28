---
sidebar_position: 2
---

# Installation

The Ash CLI is written in Rust and can therefore be installed on any platform supported by Rust.

:::tip
The CLI is **installed and pre-configured** on the Avalanche nodes by default when using the [Ansible Avalanche Collection](/docs/toolkit/ansible-avalanche-collection/introduction)!
:::

## Rust native method: cargo install

:::info
The installation can take a few minutes as it will compile the CLI and all its dependencies.
:::

Prior to installing the CLI, you need to install Rust on your machine. Follow the [official installation instructions](https://www.rust-lang.org/tools/install) to install Rust.

```bash
cargo install ash_cli
```

This will make the `ash` command available in your terminal.

```bash
ash help
```

## Fastest method: binary release download

:::caution
The binary release is only available for Linux at the moment.
:::

The binary releases are available on the [GitHub releases page](https://github.com/AshAvalanche/ash-rs/releases).

Download the latest release (e.g. `v0.1.1`) and make it executable:

```bash
# Download the binary release
wget https://github.com/AshAvalanche/ash-rs/releases/download/v0.1.1/ash-linux-amd64-v0.1.1 -O ash
# Download the binary checksum
wget https://github.com/AshAvalanche/ash-rs/releases/download/v0.1.1/ash-linux-amd64-v0.1.1.sha512 -O ash.sha512
# Verify the checksum
sha512sum -c ash.sha512
# Make the binary executable
chmod +x ash
```

You are now ready to use the Ash CLI!

```bash
./ash help
```
