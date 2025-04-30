---
sidbar_position: 3
---

# ash.avalanche.graph_node

This Ansible role installs and configures a [Graph Node](https://github.com/graphprotocol/graph-node) for indexing and querying Avalanche blockchain data.


## Role Variables

| Variable                  | Description                                                                 | Default Value |
|---------------------------|-----------------------------------------------------------------------------|---------------|
| `graph_node.version`      | Version of the Graph Node to install.                                       | `v0.38.0`     |
| `graph_node.user`         | User under which the Graph Node service will run.                          | `root`        |
| `graph_node.ports`        | Ports for GraphQL and admin services.                                       | See below     |
| `graph_node.postgres`     | PostgreSQL configuration, including internal and external options.          | See below     |
| `graph_node.ipfs`         | IPFS configuration (host, port, gateway port).                              | See below     |
| `graph_node.RPC`          | The network configuration (network, RPC URL).                               | See below     |
| `graph_node.paths`        | Paths for configuration, custom files, assets, and logs.                   | See below     |
| `graph_node.metrics.port` | Port for metrics service.                                                  | `8040`        |
| `graph_node_auto_restart` | Whether to enable auto-restart for the Graph Node service.                 | `true`        |

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
  create: true
  user: graph
  password: "yqopFTn6n7MG0*FcG0*v"
  db: graph
  port: 5432
  graph_node_postgres_external:
    host: ""
    port: ""
    user: ""
    password: ""
    db: ""
```

#### IPFS

```yaml
ipfs:
  host: ipfs
  port: 5001
  gateway_port: 8082
```

#### RPC

```yaml
RPC:
  network: subnet
  rpc_url: "http://127.0.0.1:9650/ext/bc/{{ graph_node_blockchain_id }}/rpc"
```

#### Paths

```yaml
paths:
  conf:   /etc/graph-node
  custom: /etc/graph-node/conf/custom
  assets: /etc/graph-node/conf/custom/shared
  logs:   /var/log/graph_node
```

#### Metrics

```yaml
metrics:
  port: 8040
```

#### Auto Restart

```yaml
graph_node_auto_restart: true
```

## Inventory Requirements

- **The node used to run the Graph Node service** must be in the `graph_node` group.
- **The blockchain ID** must be set in the `graph_node.yml` group variables file.

## Usage Example

### Playbook Example

```yaml
- name: Install and configure Graph Node
  hosts: graph_node
  roles:
    - role: ash.avalanche.graph_node
      vars:
        graph_node_version: latest
        graph_node_user: root
        graph_node_ports:
          graphql: 8000
          admin: 8020
        graph_node_postgres:
          create: true
          user: graph
          password: "yqopFTn6n7MG0*FcG0*v"
          db: graph
          port: 5432
          graph_node_postgres_external:
            host: ""
            port: ""
            user: ""
            password: ""
            db: ""
        graph_node_ipfs:
          host: ipfs
          port: 5001
          gateway_port: 8082
        graph_node_RPC:
          network: subnet
          rpc_url: "http://127.0.0.1:9650/ext/bc/{{ graph_node_blockchain_id }}/rpc"
        graph_node_paths:
          conf:   /etc/graph-node
          custom: /etc/graph-node/conf/custom
          assets: /etc/graph-node/conf/custom/shared
          logs:   /var/log/graph_node
        graph_node_metrics_port: 8040
        graph_node_auto_restart: true
```

## Additional Notes

- Ensure Docker is installed and running on the target node.
- The `graph_node_blockchain_id` must match the blockchain ID of the Subnet you want to index.
- Use the GraphQL API at `http://<node-ip>:8000` to query indexed data.
