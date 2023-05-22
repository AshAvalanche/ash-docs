---
sidebar_position: 9
---

# Nodes monitoring

In this section, we will learn how to use the `ash.avalanche.install_monitoring_stack` playbook to deploy a monitoring stack for Avalanche nodes.

The monitoring stack is comprised of:

- [Prometheus](https://prometheus.io)
- [Prometheus Node Exporter](https://prometheus.io/docs/guides/node-exporter/)
- [Grafana](https://grafana.com)

:::note
For this tutorial, we will use the [`local`](https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local) inventory provided by the [Ansible Avalanche Getting Started](https://github.com/AshAvalanche/ansible-avalanche-getting-started) repository. See [Create a Local Test Network](./local-test-network) for details.
:::

## Requirements

The `ash.avalanche.install_monitoring_stack` playbook installs Prometheus and Grafana through the [prometheus.prometheus](https://galaxy.ansible.com/prometheus/prometheus) collection and the [cloudalchemy.grafana](https://galaxy.ansible.com/cloudalchemy/grafana) role.

We can make these available locally with:

```bash
ansible-galaxy install -r ansible_collections/ash/avalanche/requirements.yml
```

## Install the monitoring stack

Grafana will be installed on the nodes of the `grafana` Ansible group and Prometheus on the `prometheus` Ansible group. In [Ansible Avalanche Getting Started](https://github.com/AshAvalanche/ansible-avalanche-getting-started), it is the `frontend` node by default. You can change this by editing the [`hosts`](https://github.com/AshAvalanche/ansible-avalanche-getting-started/blob/main/inventories/local/hosts) file.

Prometheus Node Exporter will be installed on all nodes in the `avalanche_nodes` Ansible group.

```bash
ansible-playbook ash.avalanche.install_monitoring_stack -i inventories/local
```

### Grafana

Grafana should be available at [http://192.168.60.19:3000](http://192.168.60.19:3000)

<figure>

![Ash Grafana](/img/ash-grafana.png)

<figcaption style={{textAlign: 'center'}}>Fig.1 - Grafana</figcaption>
</figure>

:::tip
The default admin credentials to log in Grafana in the [`local`](https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local) inventory provided by [Ansible Avalanche Getting Started](https://github.com/AshAvalanche/ansible-avalanche-getting-started) are `admin:admin123`. You can change it in [`grafana.yml`](https://github.com/AshAvalanche/ansible-avalanche-getting-started/blob/main/inventories/local/group_vars/grafana.yml).
:::

#### Dashboards

In the [`local`](https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local) inventory, Grafana is configured to connect with the Prometheus instance and comes with pre-built dashboards (see [`grafana.yml`](https://github.com/AshAvalanche/ansible-avalanche-getting-started/blob/main/inventories/local/group_vars/grafana.yml)). The list of available dashboards can be found in the [dashboards](https://github.com/AshAvalanche/ansible-avalanche-collection/tree/main/files/dashboard) directory.

### Prometheus

Prometheus is also available at [http://192.168.60.19:9090](http://192.168.60.19:9090)

<figure>

![Ash prometheus](/img/ash-prometheus.png)

<figcaption style={{textAlign: 'center'}}>Fig.2 - Prometheus</figcaption>
</figure>

#### Targets

In the [`local`](https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local) inventory, Prometheus is configured (see [`prometheus.yml`](https://github.com/AshAvalanche/ansible-avalanche-getting-started/blob/main/inventories/local/group_vars/prometheus.yml)) to scrape metrics from the Avalanche nodes (endpoint `/ext/metrics` on port `9650` of AvalancheGo, see [documentation](https://docs.avax.network/apis/avalanchego/apis/metrics) for details) and the Prometheus Node Exporter (port `9100` by default).

:::caution
The `ash.avalanche.faucet` role is not yet compatible with secured HTTP API endpoints (see [Node security](./node-security) for details).
:::
