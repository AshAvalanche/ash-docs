---
sidbar_position: 3
---

# ash.avalanche.graph_node

This Ansible role installs and configures a Graph Node for indexing and querying Avalanche blockchain data.

:::note
Graph Node is a powerful tool for indexing and querying blockchain data. It provides a GraphQL API for efficient data access.
:::

## Role Variables

| Variable                  | Description                                                                 | Default Value |
|---------------------------|-----------------------------------------------------------------------------|---------------|
| `graph_node_version`      | Version of the Graph Node to install.                                       | `latest`      |
| `graph_node_user`         | User under which the Graph Node service will run.                          | `root`        |
| `graph_node_compose_dir`  | Directory for Docker Compose configuration.                                | `/opt/graph-node` |
| `graph_node_ports`        | Ports for GraphQL, admin, and metrics services.                            | See below     |
| `graph_node_postgres`     | PostgreSQL configuration (user, password, database, port).                 | See below     |
| `graph_node_ipfs`         | IPFS configuration (port, gateway port).                                  | See below     |
| `graph_node_ethereum`     | The network configuration (network, RPC URL).                        | See below     |
| `graph_node_paths`        | Paths for configuration, custom files, assets, and logs.                  | See below     |
| `graph_node_metrics_port` | Port for metrics service.                                                  | `8040`        |

### Default Values

#### Ports

```yaml
ports:
  graphql: 8000
  admin: 8020
```

#### PostgreSQL

```yaml
postgres:
  user: graph
  password: "yqopFTn6n7MG0*FcG0*v"
  db: graph
  port: 5432
```

#### IPFS

```yaml
ipfs:
  port: 5001
  gateway_port: 8082
```

#### Ethereum

```yaml
ethereum:
  network: subnet
  rpc_url: "http://{{ hostvars[ groups['bootstrap_nodes'][0] ].ansible_host }}:9650/ext/bc/{{ graph_node_blockchain_id }}/rpc"
```

#### Paths

```yaml
paths:
  conf:   /etc/graph-node/conf
  custom: /etc/graph-node/conf/custom
  assets: /etc/graph-node/conf/custom/shared
  logs:   /var/log/graph_node
```

## Inventory Requirements

- **The node used to run the Graph Node service** must be in the `graph_nodes` group.
- **The blockchain ID** must be set in the `graph_nodes.yml` group variables file.

## Usage Example

### Playbook Example

```yaml
- name: Install and configure Graph Node
  hosts: graph_nodes
  roles:
    - role: ash.avalanche.graph_node
      vars:
        graph_node_version: latest
        graph_node_user: root
        graph_node_compose_dir: /opt/graph-node
        graph_node_ports:
          graphql: 8000
          admin: 8020
        graph_node_postgres:
          user: graph
          password: "yqopFTn6n7MG0*FcG0*v"
          db: graph
          port: 5432
        graph_node_ipfs:
          port: 5001
          gateway_port: 8082
        graph_node_ethereum:
          network: subnet
          rpc_url: "http://{{ hostvars[ groups['bootstrap_nodes'][0] ].ansible_host }}:9650/ext/bc/{{ graph_node_blockchain_id }}/rpc"
        graph_node_paths:
          conf:   /etc/graph-node/conf
          custom: /etc/graph-node/conf/custom
          assets: /etc/graph-node/conf/custom/shared
          logs:   /var/log/graph_node
        graph_node_metrics_port: 8040
```

## Additional Notes

- Ensure Docker is installed and running on the target node.
- The `graph_node_blockchain_id` must match the blockchain ID of the Subnet you want to index.
- Use the GraphQL API at `http://<node-ip>:8000` to query indexed data.
