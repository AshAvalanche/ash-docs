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

:::caution
To install a version of the CLI that is compatible with the Ash Console alpha, you need to specify the `--version` flag:

```bash
cargo install ash_cli --version '~0.4.0-alpha'
```

:::

This will make the `ash` command available in your terminal.

```bash
ash help
```

## Fastest method: binary release download

The binary releases are available on the [GitHub releases page](https://github.com/AshAvalanche/ash-rs/releases).

Download the latest release (e.g. `v0.4.0-alpha.5`) and make it executable:

```bash
export ASH_VERSION=v0.4.0-alpha.5
# Can be 'linux' or 'macos'
export OS=linux
# Can be 'amd64' or 'arm64'
export ARCH=amd64
# Download the binary archive
curl -sSfL "https://github.com/AshAvalanche/ash-rs/releases/download/${ASH_VERSION}/ash-${OS}-${ARCH}-${ASH_VERSION}.tar.gz" -o "ash-${OS}-${ARCH}-${ASH_VERSION}.tar.gz"
# Verify binary checksum
curl -sSfL "https://github.com/AshAvalanche/ash-rs/releases/download/${ASH_VERSION}/ash-${OS}-${ARCH}-${ASH_VERSION}.tar.gz.sha512" | sha512sum -c
# Extract the binary
tar -xzf "ash-${OS}-${ARCH}-${ASH_VERSION}.tar.gz"
# Make the binary executable
chmod +x ash
```

You are now ready to use the Ash CLI!

```bash
./ash help
```

:::tip
On MacOS, you will probably need to allow the binary to run in your security settings.
:::
