---
sidbar_position: 5
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
| `graph_node.rpc`          | The network configuration (network, rpc URL).                               | See below     |
| `graph_node.paths`        | Paths for configuration, custom files, assets, and logs.                   | See below     |
| `graph_node.metrics.port` | Port for metrics service.                                                  | `8040`        |
| `graph_node_auto_restart` | Whether to enable auto-restart for the Graph Node service.                 | `true`        |

### Default Values

#### Ports

The default ports for the Graph Node services are as follows:

```yaml
ports:
  graphql: 8000
  admin: 8020
```

#### PostgreSQL

The PostgreSQL configuration includes options for both internal and external databases. The internal database is created by default, while the external database can be configured if needed.

```yaml
postgres:
  create: true
  user: graph
  password: "yqopFTn6n7MG0*FcG0*v"
  db: graph
  port: 5432
  host: localhost
```

#### IPFS

The IPFS configuration includes the host, port, and gateway port.

```yaml
ipfs:
  host: ipfs
  port: 5001
  gateway_port: 8082
```

#### rpc

The rpc configuration specifies the network and the URL for the rpc endpoint.

```yaml
rpc:
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

The metrics service is configured to run on port `8040` by default.

```yaml
metrics:
  port: 8040
```

#### Auto Restart

The `graph_node_auto_restart` variable controls whether the Graph Node service should automatically restart if it fails. Set this to `true` to enable auto-restart.

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
        graph_node:
          version: v0.38.0
          user: root
          ports:
            graphql: 8000
            admin: 8020
          postgres:
            create: true
            user: graph
            password: yqopFTn6n7MG0*FcG0*v
            db: graph
            port: 5432
            host: localhost
          ipfs:
            host: ipfs
            port: 5001
            gateway_port: 8082
          rpc:
            network: subnet
            rpc_url: "http://127.0.0.1:9650/ext/bc/{{ graph_node_blockchain_id }}/rpc"
          paths:
            conf: /etc/graph-node
            custom: /etc/graph-node/conf/custom
            assets: /etc/graph-node/conf/custom/shared
            logs:   /var/log/graph_node
          metrics:
            port: 8040

        graph_node_auto_restart: true
```

## Additional Notes

- The `graph_node_blockchain_id` must match the blockchain ID of the Subnet you want to index.
- Use the GraphQL API at `http://<node-ip>:8000` to query indexed data.
