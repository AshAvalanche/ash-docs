---
sidebar_position: 8
---

# Monitoring

In this section, we will learn how to use the `ash.avalanche.install_monitoring_stack` playbook to deploy a monitoring stack for Avalanche nodes and Subnets.

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

Generate the Grafana URL and open it in your browser:

```bash title="Command"
echo "http://$(terraform -chdir=terraform/multipass output -raw frontend_ip):3000"
```

```bash title="Sample output"
http://10.117.207.108:3000
```

<figure>

![Ash Grafana](/img/ash-grafana.png)

<figcaption style={{textAlign: 'center'}}>Fig.1 - Grafana</figcaption>
</figure>

:::tip
The default admin credentials to log in Grafana in the [`local`](https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local) inventory provided by [Ansible Avalanche Getting Started](https://github.com/AshAvalanche/ansible-avalanche-getting-started) are `admin:admin123`. You can change it in [`grafana.yml`](https://github.com/AshAvalanche/ansible-avalanche-getting-started/blob/main/inventories/local/group_vars/grafana.yml).
:::

#### Nodes dashboards

In the [`local`](https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local) inventory, Grafana is configured to connect with the Prometheus instance and comes with pre-built dashboards (see [`grafana.yml`](https://github.com/AshAvalanche/ansible-avalanche-getting-started/blob/main/inventories/local/group_vars/grafana.yml)). The list of available dashboards can be found in the [dashboards](https://github.com/AshAvalanche/ansible-avalanche-collection/tree/main/files/dashboard) directory.

#### Subnet dashboard

If you created [Subnet EVM](https://github.com/ava-labs/subnet-evm) blockchains in the [Subnet Creation](/docs/toolkit/ansible-avalanche-collection/tutorials/subnet-creation) tutorial, you can configure the Grafana role to install a pre-configured dashboard for them.

To do so, define the `grafana_subnets_dashboard_variables` variable (in [`grafana.yml`](https://github.com/AshAvalanche/ansible-avalanche-getting-started/blob/main/inventories/local/group_vars/grafana.yml) for the [`local`](https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local) inventory):

```yaml
grafana_subnets_dashboard_variables:
  - text: Subnet EVM
    value: 2dEmExGjJT6MouJRr1PqV4PSQEbScDAjKuPtT6pgqYR5xdUuac
    selected: true
```

Then rerun the `install_monitoring_stack` playbook:

```bash
ansible-playbook ash.avalanche.install_monitoring_stack -i inventories/local
```

<figure>

![Ash Grafana](/img/ash-subnets-dashboard.png)

<figcaption style={{textAlign: 'center'}}>Fig.2 - Subnets dashboard</figcaption>
</figure>

:::tip
If you deployed multiple Subnet EVM blockchains, you can define them all in the `grafana_subnets_dashboard_variables` variable, Grafana will display a dropdown menu to select the blockchain to display.
:::

### Prometheus

Generate the Prometheus URL and open it in your browser:

```bash title="Command"
echo "http://$(terraform -chdir=terraform/multipass output -raw frontend_ip):9090"
```

```bash title="Sample output"
http://10.117.207.108:9090
```

<figure>

![Ash prometheus](/img/ash-prometheus.png)

<figcaption style={{textAlign: 'center'}}>Fig.3 - Prometheus</figcaption>
</figure>

#### Targets

In the [`local`](https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/local) inventory, Prometheus is configured (see [`prometheus.yml`](https://github.com/AshAvalanche/ansible-avalanche-getting-started/blob/main/inventories/local/group_vars/prometheus.yml)) to scrape metrics from the Avalanche nodes (endpoint `/ext/metrics` on port `9650` of AvalancheGo, see [documentation](https://docs.avax.network/apis/avalanchego/apis/metrics) for details) and the Prometheus Node Exporter (port `9100` by default).

:::caution
The `ash.avalanche.faucet` role is not yet compatible with secured HTTP API endpoints (see [Node security](./node-security) for details).
:::
