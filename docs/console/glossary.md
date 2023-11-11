---
sidebar_position: 5
---

# Glossary

This section define the terms used in the Ash Console.

## User

A `User` who interacts with the Ash Console, either through the Console Website, the Ash CLI, or the Console REST API.

**Every Console entity is owned by a single `User`.**

<details>
  <summary><code>User</code> properties</summary>
  <div>

```python
id: UUID4
username: str
firstname: str
lastname: str
email: str
```

  </div>
</details>

## Organization

:::note
Not implemented in alpha
:::

A group of `User`s that collaborate on the same `Project`s.

The owner of the `Organization` can add other `User`s and give them `Role`s.

## Role

:::note
Not implemented in alpha
:::

A set of permissions granted to `User`s that have this role.

## Operation

Any `User` query made on the Console triggers an `Operation` that is logged.

Examples of operation types: `ProjectAPI.create_project`, `SecretAPI.get_all_secrets`

An `Operation` can result in `success` or `failure`.

<details>
  <summary><code>Operation</code> properties</summary>
  <div>

```python
id: UUID4
owner_id: UUID4 # The user who performed the operation
logged: datetime
target_type: str
target_id: UUID4 | None # Can be None if the operation is not related to a specific item
target_value: str | None
operation_type: str
args: List[str]
kwargs: Dict[str, str]
result: OperationResult
error_msg: str | None
```

  </div>
</details>

## Secret

A `Secret` is an encrypted piece of information which can be used in:

- `Resource`s configuration keys
- `CloudRegion`s creation
- A `Secret` can be one of:
  - `generic`: contains any arbitrary value
  - `wallet`: contains a wallet's private key, used to sign transactions
  - `nodeId`: contains a [NodeID](https://docs.avax.network/nodes/maintain/node-backup-and-restore#nodeid) with its related TLS certificate and key, used to spin up an Avalanche node
  - `awsCredentials`: contains AWS credentials, used to manage resources in an AWS cloud region
  - `azureCredentials`: contains Azure credentials, used to manage resources in an Azure cloud region
  - `googleCredentials`: contains GCP credentials, used to manage resources in a Google cloud region
  - `lxdCredentials` (Not implemented in alpha)

A `Secret` can be used across `Project`s by multiple `Resource`s, and `CloudRegion`s.

<details>
  <summary><code>Secret</code> properties</summary>
  <div>

```python
id: UUID4
owner_id: UUID4
name: str
secret_type: SecretType
created: datetime
used_by: Dict[UUID4, str] # (UUID => EntityType)
... # extra properties based on type
```

  </div>
</details>

## Project

A `Project` managed by a `User` (later an `Organization`). It is a **logical set of `Resource`s that are deployed in `CloudRegion`s**.

A `User` can have access to multiple projects.

A `Project` is linked to a (blockchain) `Network`: `local`, `testnet`, or `mainnet`. All the `Resource`s created in the project will automatically be configured to belong to this `Network`.

<details>
  <summary><code>Project</code> properties</summary>
  <div>

```python
id: UUID4
owner_id: UUID4
name: str
network: Network
created: datetime
cloud_regions_ids: Dict[str, UUID4]
resources_ids: Dict[str, UUID4]
...
```

  </div>
</details>

## Cloud Region

A `CloudRegion` is managed by a `User` (later an `Organization`) inside a `Project`.

A `CloudRegion` is created from a `AwsCredentials`, `AzureCredentials` or`GcpCredentials`

A `CloudRegion`'s format is always `cloudprovider/region`.

<details>
  <summary>A <code>region</code> can be one of:</summary>
  <div>

<details>
  <summary><code>azure/*</code></summary>
  <div>

- `azure/australiacentral`
- `azure/australiacentral2`
- `azure/australiaeast`
- `azure/australiasoutheast`
- `azure/brazilsouth`
- `azure/canadacentral`
- `azure/canadaeast`
- `azure/centralindia`
- `azure/centralus`
- `azure/eastasia`
- `azure/eastus`
- `azure/eastus2`
- `azure/francecentral`
- `azure/francesouth`
- `azure/germanynorth`
- `azure/germanywestcentral`
- `azure/japaneast`
- `azure/japanwest`
- `azure/koreacentral`
- `azure/koreasouth`
- `azure/northcentralus`
- `azure/northeurope`
- `azure/norwayeast`
- `azure/norwaywest`
- `azure/qatarcentral`
- `azure/southafricanorth`
- `azure/southafricawest`
- `azure/southcentralus`
- `azure/southeastasia`
- `azure/southindia`
- `azure/swedencentral`
- `azure/switzerlandnorth`
- `azure/switzerlandwest`
- `azure/uaecentral`
- `azure/uaenorth`
- `azure/uksouth`
- `azure/ukwest`
- `azure/westcentralus`
- `azure/westeurope`
- `azure/westindia`
- `azure/westus`
- `azure/westus2`
- `azure/westus3`

</div>
</details>

<details>
  <summary><code>aws/*</code></summary>
  <div>

- `aws/af-south-1`
- `aws/ap-east-1`
- `aws/ap-northeast-1`
- `aws/ap-northeast-2`
- `aws/ap-northeast-3`
- `aws/ap-south-1`
- `aws/ap-south-2`
- `aws/ap-southeast-1`
- `aws/ap-southeast-2`
- `aws/ap-southeast-3`
- `aws/ap-southeast-4`
- `aws/ca-central-1`
- `aws/eu-central-1`
- `aws/eu-central-2`
- `aws/eu-north-1`
- `aws/eu-south-1`
- `aws/eu-south-2`
- `aws/eu-west-1`
- `aws/eu-west-2`
- `aws/eu-west-3`
- `aws/me-central-1`
- `aws/me-south-1`
- `aws/sa-east-1`
- `aws/us-east-1`
- `aws/us-east-2`
- `aws/us-west-1`
- `aws/us-west-2`

</div>
</details>

<details>
  <summary><code>google/*</code></summary>
  <div>

- `google/asia-east1`
- `google/asia-east2`
- `google/asia-northeast1`
- `google/asia-northeast2`
- `google/asia-northeast3`
- `google/asia-south1`
- `google/asia-southeast1`
- `google/asia-southeast2`
- `google/australia-southeast1`
- `google/europe-central2`
- `google/europe-north1`
- `google/europe-west1`
- `google/europe-west2`
- `google/europe-west3`
- `google/europe-west4`
- `google/europe-west6`
- `google/northamerica-northeast1`
- `google/southamerica-east1`
- `google/us-central1`
- `google/us-east1`
- `google/us-east4`
- `google/us-west1`
- `google/us-west2`
- `google/us-west3`
- `google/us-west4`

</div>
</details>

</div>
</details>

**A `CloudRegion` belongs to only one `project`.**

<details>
  <summary><code>CloudRegion</code> properties</summary>
  <div>

```python
id: UUID4
owner_id: UUID4
project_id: UUID4
created: datetime
cloud_provider: CloudProvider
region: Region
cloud_credentials_secret_id: UUID4
status: CloudRegionStatus
```

  </div>
</details>

## Resource

A `Resource` is managed by a `User` (later an `Organization`) inside a `Project` and in a `CloudRegion`.

A `Resource` can be:

- An `avalancheNode`
- An `avalancheSubnet`
- An `avalancheFaucet` (Not implemented in alpha)
- A `blockExplorer` (Not implemented in alpha)
- A `monitoringStack` (Not implemented in alpha)

**A `Resource` belongs to only one `Project` and one `CloudRegion`.**

<details>
  <summary><code>Resource</code> properties</summary>
  <div>

```python
id: UUID4
owner_id: UUID4
project_id: UUID4
created: datetime
resource_type: ResourceType
cloud_region_id: UUID4
... # extra properties based on type
```

  </div>
</details>
