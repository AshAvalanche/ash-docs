---
sidebar_position: 2
---

# ash.avalanche.XXX_to_XXX

The `ash.avalanche.XXX_to_XXX` filter converts a string between encodings

## Usage

This is useful to convert string between different encodings, e.g. from hexadecimal to [CB58](https://support.avax.network/en/articles/4587395-what-is-cb58).

```yaml
# Example of cb58_to_hex conversion
- name: Convert NodeID to hexadecimal
  set_fact:
    node_id_hex: |-
      {{ (get_node_id_res.json.result.nodeID | split('-'))[1]
         | ash.avalanche.cb58_to_hex }}
```

## Supported conversions

- `cb58_to_hex`
- `cb58_to_bytes`
- `hex_to_cb58`
- `hex_to_bytes`
