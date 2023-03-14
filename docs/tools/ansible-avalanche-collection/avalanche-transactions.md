---
sidebar_label: Avalanche transactions
sidebar_position: 7
---

# Avalanche transactions

In this section, we will learn how to use the `ash.avalanche.tx` module of the [Ansible Avalanche Collection](https://github.com/AshAvalanche/ansible-avalanche-collection) to submit transactions to an Avalanche network.

:::note
For this tutorial, we will use the [`local`](https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local) inventory provided by the [Ansible Avalanche Getting Started](https://github.com/AshAvalanche/ansible-avalanche-getting-started) repository. See [Create a local test network](./local-test-network) for details.
:::

## Runing a X chain to P chain transaction

The notebook [ash.avalanche.transfer_avax](https://github.com/AshAvalanche/ansible-avalanche-collection/tree/main/playbooks/transfer_avax.yml) is provided as an example. We will call this notebook and follow best practices to secure Avalanche keystore credentials using [Ansible vault](https://docs.ansible.com/ansible/latest/user_guide/vault.html):

1. In [inventories/local/group_vars/api_node.yml](https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local/group_vars/api_node.yml), the keystore crendentials have been encrypted using Ansible vault:

   ```yaml
   avax_transfer_from_username: !vault |
     $ANSIBLE_VAULT;1.1;AES256
     65643665373461343366366161623038383134396339303931386131653662356663366530613539
     3461323730646262626531396461353164653939333730380a393637626637366136366439383035
     37653661343365376531316264316464343763356136306430383865363863343933323333373437
     6366336430313233340a343465316663653630626566363131636438333338383236613631633563
     6138
   avax_transfer_from_password: !vault |
     $ANSIBLE_VAULT;1.1;AES256
     36363962333839616366363730306264373332373336316332356162323230313039393265626639
     6265613633623538396266323232353130643466646261370a653161333066663034346536346365
     38346235653736636438663265353130303665323939343663663961386635626539616464373636
     3232643435333437660a666137323964386338316361333931356232616163663636646262386130
     3461
   ```

   This avoids storing usernames and passwords in plain text.

2. To run the notebook, we need to provide the vault password (`ewoq`):

   ```bash
   ansible-playbook ash.avalanche.transfer_avax -i inventories/local --ask-vault-password
   ```

3. The notebook issues 2 transactions to transfer 1 AVAX from the X-Chain to the C-Chain and you can see the `tx` module output format:

   ```yaml
   xchain_transac_res:
     blockchain: X
     changed: true
     endpoint: http://192.168.60.11:9650/ext/bc/X
     failed: false
     num_retries: 0
     response:
       id: 1
       jsonrpc: "2.0"
       result:
         status: Accepted
     tx_data:
       id: 1
       jsonrpc: "2.0"
       method: avm.export
       params:
         amount: 1000000000
         assetID: AVAX
         password: VALUE_SPECIFIED_IN_NO_LOG_PARAMETER
         to: C-local18jma8ppw3nhx5r4ap8clazz0dps7rv5u00z96u
         username: VALUE_SPECIFIED_IN_NO_LOG_PARAMETER
     tx_id: 2vQi7Smp7jm39moowZNZMfCfismswerYVtB14iSHk4jfg6nPyA
   ```
