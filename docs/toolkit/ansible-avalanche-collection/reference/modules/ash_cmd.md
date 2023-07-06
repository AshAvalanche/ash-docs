---
sidebar_position: 3
---

# ash.avalanche.ash_cmd

The `ash.avalanche.ash_cmd` module is a [Ash CLI](/docs/toolkit/ash-cli/introduction) wrapper.

## Usage

```yaml
- name: Get node info with Ash CLI
  ash.avalanche.ash_cmd:
    command: ["avalanche", "node", "info"]
    options:
      http-host: 192.168.60.11
      http-port: 9650
  register: ash_cli_command

- name: Print node Id from Ash CLI output
  debug:
    msg: "{{ ash_cli_command.output.id }}"

- name: Get list of Subnets on Fuji with Ash CLI
  ash.avalanche.ash_cmd:
    command: avalanche subnet list
    options:
      network: fuji
  register: ash_cli_command

- name: Print number of Subnets on Fuji from Ash CLI output
  debug:
    msg: "There are {{ ash_cli_command.output | length }} Subnets on Fuji"
```

## Parameters

| Parameter    | Required | Type   | Default                                   | Description                                                                                                              |
| ------------ | -------- | ------ | ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `command`    | Yes      | `list` | NA                                        | The command to run as a string (e.g. `avalanche node info`) or a list of strings (e.g.: `["avalanche", "node", "info"]`) |
| `options`    | No       | `dict` | `{}`                                      | The options to pass to the command. See [Ash CLI](/docs/toolkit/ash-cli/introduction) for more details.                  |
| `ash_path`   | No       | `str`  | `/opt/avalanche/ash-cli/bin/ash`          | The path to the Ash CLI binary                                                                                           |
| `ash_config` | No       | `str`  | `/etc/avalanche/ash-cli/conf/default.yml` | The path to the Ash CLI configuration file                                                                               |
| `json`       | No       | `bool` | `True`                                    | If `True`, output will be rendered in JSON                                                                               |
