---
sidebar_position: 3
---

# ash.avalanche.ash_cli

The `ash.avalanche.ash_cli` module is a [Ash CLI](/docs/toolkit/ash-cli/introduction) wrapper.

## Usage

```yaml
- name: Get node info with Ash CLI
  ash.avalanche.ash_cli:
    command: avalanche node info
    options:
      http-host: 192.168.60.11
      http-port: 9650
  register: ash_cli_command

- name: Print node Id from Ash CLI output
  debug:
    msg: "{{ ash_cli_command['output']['id'] }}"

- name: Get list of Subnets on Fuji with Ash CLI
  ash.avalanche.ash_cli:
    command: avalanche subnet list
    options:
      network: fuji
  register: ash_cli_output

- name: Print number of Subnets on Fuji from Ash CLI output
  debug:
    msg: "There are {{ ash_cli_output['output'] | length }} Subnets on Fuji"
```

## Parameters

| Parameter | Required | Type   | Default              | Description                                                                                             |
| --------- | -------- | ------ | -------------------- | ------------------------------------------------------------------------------------------------------- |
| command   | Yes      | string |                      | The command to run                                                                                      |
| options   | No       | dict   | {}                   | The options to pass to the command. See [Ash CLI](/docs/toolkit/ash-cli/introduction) for more details. |
| ash_path  | No       | string | "/usr/local/bin/ash" | The path to the Ash CLI binary.                                                                         |
| no_json   | No       | bool   | False                | If `True`, output will not be rendered in JSON                                                          |
