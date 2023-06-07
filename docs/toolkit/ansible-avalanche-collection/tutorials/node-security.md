---
sidebar_position: 9
---

# Node Security

In this section, we will learn how to secure Avalanche nodes installed by the [Ansible Avalanche Collection](https://github.com/AshAvalanche/ansible-avalanche-collection).

:::note
For this tutorial, we will use the [`local`](https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local) inventory provided by the [Ansible Avalanche Getting Started](https://github.com/AshAvalanche/ansible-avalanche-getting-started) repository. See [Create a Local Test Network](./local-test-network) for details.
:::

## Enable HTTPS for API endpoints

By default, the HTTP API endpoints are **not secured**. This is fine for testing purposes but **not recommended for mainnet deployments**.

:::tip
The Getting Started repository provides self-signed TLS certificates and keys that can be used for testing purposes in the `files/https` directory.
:::

To secure the API endpoints, we need to:

1. Provide the TLS certificate and key for each Avalanche node. They have to be named after the Ansible `inventory_hostname` of each node.
2. Provide the CA certificate used to sign the TLS certificate. The CA certificate has to be named `ca.crt`.
   ```bash {2}
   # Example of the certs and the keys provided in ansible-avalanche-getting-started
   ls files/https
   ca.crt           validator02.crt  validator03.key  validator05.crt
   validator01.crt  validator02.key  validator04.crt  validator05.key
   validator01.key  validator03.crt  validator04.key
   ```
3. Enable TLS in the node configuration using the `avalanchego_https_enabled` variable. In the Getting Started repository, edit `inventories/local/group_vars/avalanche_nodes.yml`:
   ```yml
   # The variable is set to false by default
   avalanchego_https_enabled: true
   ```

After modifying the configuration, we can run the `provision_nodes` playbook again to update the nodes:

```bash
ansible-playbook ash.avalanche.provision_nodes -i inventories/local
```

After enabling HTTPS, all curl commands have to provide the `--cacert` option to specify the CA certificate used to sign the TLS certificate:

```bash
curl --cacert files/https/ca.crt -X POST --data '{
  "jsonrpc": "2.0",
  "id"     : 1,
  "method" : "info.isBootstrapped",
  "params": {
    "chain": "P"
  }
}' -H 'content-type:application/json;' https://192.168.60.11:9650/ext/info
```

:::caution
We recommend using different CA certificates for the HTTP API endpoints and staking. By doing so, you have the **flexibility of migrating a node to different server** without having to change its node ID.
:::
