---
sidebar_position: 1
---

# ash.avalanche.convert

The `ash.avalanche.convert` filter converts an amount between AVAX units.

## Usage

This filter is useful to submit transactions without errors in the number of zeros:

```yaml
ash.avalanche.tx:
  ...
  params:
  	...
    amount: "{{ 25 | ash.avalanche.convert('AVAX', 'nAVAX') | int }}"
```

## Supported units

| Unit              | Amount in wei                  |
| ----------------- | ------------------------------ |
| `wei`             | `1`                            |
| `gwei` or `navax` | `1e9` (`1000000000`)           |
| `avax` or `eth`   | `1e18` (`1000000000000000000`) |

:::note
The filter is not case sensitive: `ash.avalanche.convert('AVAX', 'nAVAX')` is the same as `ash.avalanche.convert('avax', 'navax')`
:::
