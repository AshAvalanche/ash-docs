---
sidebar_position: 2
---

# Create a Fuji node on AWS

In this section, we will learn how to use the [ash.avalanche](https://github.com/AshAvalanche/ansible-avalanche-collection) Ansible collection to provision a Fuji [Avalanche](https://docs.avax.network/) node on a [AWS](https://aws.amazon.com) EC2 instance.

## Requirements

- Python >=3.9 with `venv` module installed
- AWS account and access key (see [AWS docs](https://docs.aws.amazon.com/powershell/latest/userguide/pstools-appendix-sign-up.html)) with correct permissions to manage EC2 instances (e.g.: `AmazonEC2FullAccess`)
- [Terraform](https://www.terraform.io/) installed
- For filtering outputs:
  - [jq](https://stedolan.github.io/jq/) (see [Installation](https://stedolan.github.io/jq/download/))

:::note
We recommend installing the Ash CLI to easily get information about your nodes and Subnets. See [Ash CLI - Installation](/docs/toolkit/ash-cli/installation).  
The tutorials still provide the snippets to query the Avalanche APIs with cURL.
:::

## Installation

1. Clone the Getting Started repository:

   ```bash
   git clone https://github.com/AshAvalanche/ansible-avalanche-getting-started
   cd ansible-avalanche-collection-getting-started
   ```

2. Setup and activate Python venv:

   ```bash
   bin/setup.sh
   source .venv/bin/activate
   ```

3. Install the `ash.avalanche` collection:

   ```bash
   ansible-galaxy collection install git+https://github.com/AshAvalanche/ansible-avalanche-collection.git
   ```

## Create EC2 instance with Terraform

1. Setup AWS keys environment variables:


   ```bash
   export AWS_SECRET_ACCESS_KEY="XXXXXXXXXXXXXXXXXXXXXXXXXX"
   export AWS_ACCESS_KEY_ID="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
   ```

2. Created the resources with Terraform:

   ```bash
   terraform apply
   ```

:::note
This command will create the resources defined in the [`main.tf`](https://github.com/AshAvalanche/ansible-avalanche-getting-started/blob/main/main.tf) including a `t2.2xlarge` EC2 instance with `300GiB` of storage, an associated [key pair](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html) and a [security group](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-security-groups.html) configured to allow SSH (port 22) and default AVAX ports (9650 for HTTP and 9651 for staking) as well as all outbound traffic.
:::

3. Save the IP of the newly created EC2 instance:

   ```bash
   terraform output fuji_node_ip
   ```

4. Update the [`fuji-aws/hosts`](https://github.com/AshAvalanche/ansible-avalanche-getting-started/blob/main/inventories/fuji-aws/hosts) file with the IP of your EC2 instance. E.g.:

   ```yaml
   aws-fuji-node ansible_host=35.171.27.213 ansible_user=ubuntu ansible_ssh_private_key_file=files/ansible_key.pem

   [avalanche_nodes]
   aws-fuji-node
   ```

:::tip
Creating the EC2 instance with Terraform is not the only way to go, you can also create it manually using the AWS console or CLI. Just make sure to update the [`fuji-aws/hosts`](https://github.com/AshAvalanche/ansible-avalanche-getting-started/blob/main/inventories/fuji-aws/hosts) file so that Ansible knows how to connect to your EC2 instance.
:::

## Provision Fuji node

We will use the [ash.avalanche.provision_nodes](https://github.com/AshAvalanche/ansible-avalanche-collection/blob/main/playbooks/provision_nodes.yml) playbook to install and configure AvalancheGo on our EC2 instance.

```bash
ansible-playbook ash.avalanche.provision_nodes -i inventories/fuji-aws
```

:::tip
The [`avalanche_nodes.yml`](https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/fuji-aws/group_vars/avalanche_nodes.yml) file holds the configuration for the `ash.avalanche.node` role. We only override the `avalanchego_version` and `avalanchego_network_id` variables, leaving the others as default. For a list of all available variables, see [ash.avalanche.node reference](../reference/roles/avalanche-node.md).
:::

## Monitor bootstrapping

We can SSH to our EC2 instance to follow the synchronization of the P, X and C chains. For example with the P-chain:

```bash {1}
ssh -i ./files/ansible_key.pem ubuntu@$YOUR_EC2_INSTANCE_IP
cd /var/log/avalanche/avalanchego
tail C.log
```

```
[06-02|09:16:47.131] INFO <P Chain> platformvm/vm.go:205 initializing last accepted {"blkID": "99BWrAqUMvTp9nXKXyjPsCqjGwDqVFqssTRQbu58af57Cf9VG"}
[06-02|09:16:47.132] INFO <P Chain> snowman/transitive.go:90 initializing consensus engine
[06-02|09:16:47.133] INFO <P Chain> bootstrap/bootstrapper.go:115 starting bootstrapper
[06-02|09:16:53.011] INFO <P Chain> common/bootstrapper.go:244 bootstrapping started syncing {"numVerticesInFrontier": 1}
[06-02|09:16:58.208] INFO <P Chain> bootstrap/bootstrapper.go:495 fetching blocks {"numFetchedBlocks": 5000, "numTotalBlocks": 105347, "eta": "1m44s"}
[06-02|09:17:07.713] INFO <P Chain> bootstrap/bootstrapper.go:495 fetching blocks {"numFetchedBlocks": 10000, "numTotalBlocks": 105347, "eta": "2m20s"}
[06-02|09:17:10.766] INFO <P Chain> bootstrap/bootstrapper.go:495 fetching blocks {"numFetchedBlocks": 15000, "numTotalBlocks": 105347, "eta": "1m47s"}
[06-02|09:17:14.385] INFO <P Chain> bootstrap/bootstrapper.go:495 fetching blocks {"numFetchedBlocks": 20000, "numTotalBlocks": 105347, "eta": "1m31s"}
[06-02|09:17:18.286] INFO <P Chain> bootstrap/bootstrapper.go:495 fetching blocks {"numFetchedBlocks": 25000, "numTotalBlocks": 105347, "eta": "1m21s"}
[06-02|09:17:21.936] INFO <P Chain> bootstrap/bootstrapper.go:495 fetching blocks {"numFetchedBlocks": 30000, "numTotalBlocks": 105347, "eta": "1m13s"}
```

Logs should look like this once the chain is bootstrapped:

```
[06-02|09:18:18.373] INFO <P Chain> bootstrap/bootstrapper.go:554 executing blocks {"numPendingJobs": 105347}
[06-02|09:18:48.374] INFO <P Chain> queue/jobs.go:203 executing operations {"numExecuted": 36081, "numToExecute": 105347, "eta": "58s"}
[06-02|09:19:18.395] INFO <P Chain> queue/jobs.go:203 executing operations {"numExecuted": 43933, "numToExecute": 105347, "eta": "1m24s"}
[06-02|09:19:48.398] INFO <P Chain> queue/jobs.go:203 executing operations {"numExecuted": 44159, "numToExecute": 105347, "eta": "2m5s"}
[06-02|09:20:18.554] INFO <P Chain> queue/jobs.go:203 executing operations {"numExecuted": 44364, "numToExecute": 105347, "eta": "2m45s"}
[06-02|09:20:48.555] INFO <P Chain> queue/jobs.go:203 executing operations {"numExecuted": 47613, "numToExecute": 105347, "eta": "3m2s"}
[06-02|09:21:18.556] INFO <P Chain> queue/jobs.go:203 executing operations {"numExecuted": 64999, "numToExecute": 105347, "eta": "1m52s"}
[06-02|09:21:48.557] INFO <P Chain> queue/jobs.go:203 executing operations {"numExecuted": 81297, "numToExecute": 105347, "eta": "1m2s"}
[06-02|09:22:18.558] INFO <P Chain> queue/jobs.go:203 executing operations {"numExecuted": 96176, "numToExecute": 105347, "eta": "23s"}
[06-02|09:22:34.657] INFO <P Chain> queue/jobs.go:224 executed operations {"numExecuted": 105347}
```

:::tip
By default, AvalancheGo is configured to use [State Sync](https://docs.avax.network/nodes/maintain/chain-config-flags#state-sync) for faster node bootstrapping. If you want to run an **archival node**, you need to disable State Sync on the C-chain. This is configurable through the Ansible Avalanche Collection by adding the following keys to the [`avalanche_nodes.yml`](https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/fuji-aws/group_vars/avalanche_nodes.yml) file:

```yaml
avalanchego_chains_configs:
  C:
    state-sync-enabled: false
```
:::

## API calls

The node `aws-fuji-node` exposes AvalancheGo APIs on it's public IP: you can query any [Avalanche API](https://docs.avax.network/build/avalanchego-apis/) from your terminal. For example, to check if the P-Chain is done bootstrapping:

```bash
curl -X POST --data '{
  "jsonrpc": "2.0",
  "id"     : 1,
  "method" : "info.isBootstrapped",
  "params": {
    "chain": "C"
  }
}' -H 'content-type:application/json;' http://$YOUR_EC2_INSTANCE_IP:9650/ext/info
```

The output should look like this:

```bash
{"jsonrpc":"2.0","result":{"isBootstrapped":true},"id":1}
```

## Stop or start AvalancheGo

The [ash.avalanche](https://github.com/AshAvalanche/ansible-avalanche-collection) collection creates a [systemd](https://github.com/systemd/systemd) service to manage AvalancheGo. It can be stopped or started using the following commands:

```bash {1}
ssh -i ./files/ansible_key.pem ubuntu@$YOUR_EC2_INSTANCE_IP
# Stop AvalancheGo
systemctl stop avalanchego
# Start AvalancheGo
systemctl start avalanchego
```

## Customization

Different aspects of the installation can be customized:

- To customize the EC2 instance specs (e.g.: instance type, storage capacity, etc.): edit the [`main.tf`](https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/main.tf) file.
- To customize AvalancheGo installation: edit the variables in the [`avalanche_nodes.yml`](https://github.com/AshAvalanche/ansible-avalanche-getting-started/tree/main/inventories/fuji-aws/group_vars/avalanche_nodes.yml) file.

## Where to go next?

All of our tutorials can be run on the EC2 instance created in this tutorial! Go ahead and deploy a [Monitoring stack](/docs/toolkit/ansible-avalanche-collection/tutorials/monitoring) or learn how to [Install the Subnet EVM](/docs/toolkit/ansible-avalanche-collection/tutorials/vm-management) to your node.
