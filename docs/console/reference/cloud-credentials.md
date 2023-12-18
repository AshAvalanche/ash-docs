---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Cloud Credentials

:::caution
The Ash Console is currently in alpha and **not production-ready**. It is under active development and subject to breaking changes.
:::

The Ash Console is a PaaS that allow you to **deploy [resources](/docs/console/glossary#resource) into your own cloud accounts/subscriptions/projects**. To do so, you need to provide the Console with appropriate credentials.

## Create cloud credentials

:::caution
The Ash Console needs some **high privileges** to deploy resources into your cloud accounts/subscriptions/projects. We recommend you to create a **dedicated account/subscription/project** for the Console.

**Check with your internal security team if you have any doubt**.
:::

<Tabs groupId="cloud-provider">
  <TabItem value="aws" label="On AWS" default>

The Ash Console needs specific permissions to deploy resources into your AWS account. We will create a custom policy and assign it to a new user.

**Create a custom policy with limited permissions**

Navigate to AWS [IAM/Policies](https://console.aws.amazon.com/iam/home#/policies) and create a new policy:

1. Switch the editor to `JSON` mode and replace the content with the following JSON:

   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Sid": "AshConsoleEC2Actions",
         "Effect": "Allow",
         "Action": [
           "ec2:AssociateIamInstanceProfile",
           "ec2:AttachVolume",
           "ec2:AuthorizeSecurityGroupIngress",
           "ec2:CreateSecurityGroup",
           "ec2:CreateTags",
           "ec2:CreateVolume",
           "ec2:DeleteSecurityGroup",
           "ec2:DeleteVolume",
           "ec2:DescribeAccountAttributes",
           "ec2:DescribeAvailabilityZones",
           "ec2:DescribeIamInstanceProfileAssociations",
           "ec2:DescribeInstances",
           "ec2:DescribeInstanceTypeOfferings",
           "ec2:DescribeInstanceTypes",
           "ec2:DescribeInternetGateways",
           "ec2:DescribeNetworkInterfaces",
           "ec2:DescribeRouteTables",
           "ec2:DescribeSecurityGroups",
           "ec2:DescribeSpotPriceHistory",
           "ec2:DescribeSubnets",
           "ec2:DescribeVolumes",
           "ec2:DescribeVpcs",
           "ec2:DetachVolume",
           "ec2:RevokeSecurityGroupIngress",
           "ec2:RunInstances",
           "ec2:TerminateInstances"
         ],
         "Resource": "*"
       },
       {
         "Sid": "AshConsoleIAMActions",
         "Effect": "Allow",
         "Action": [
           "iam:AddRoleToInstanceProfile",
           "iam:CreateInstanceProfile",
           "iam:CreateRole",
           "iam:DeleteInstanceProfile",
           "iam:DeleteRole",
           "iam:DeleteRolePolicy",
           "iam:GetInstanceProfile",
           "iam:GetRole",
           "iam:ListInstanceProfiles",
           "iam:ListRolePolicies",
           "iam:ListRoles",
           "iam:PassRole",
           "iam:PutRolePolicy",
           "iam:RemoveRoleFromInstanceProfile"
         ],
         "Resource": "*"
       },
       {
         "Sid": "AshConsoleSSMActions",
         "Effect": "Allow",
         "Action": [
           "ssm:ListInstanceAssociations",
           "ssm:UpdateInstanceInformation"
         ],
         "Resource": "*"
       }
     ]
   }
   ```

2. Click on `Next`
3. **Review and create:**

   - **Name:** `AshConsole`

4. Click on `Create policy`

   ![AshConsole policy](/img/ash-console-credentials-aws-policy.png)

**Create a user and assign the custom policy**

1. Navigate to AWS [IAM/Users](https://console.aws.amazon.com/iam/home#/users) and create a new user:

   1. **User details:**
      - **User name:** `ash-console-creds-01`
   2. Click on `Next`
   3. **Set permissions:**
      - **Permissions options:** `Attach policies directly`
      - **Permissions policies:** `AshConsole`
   4. Click on `Next`
   5. Click on `Create user`

   ![AshConsole user](/img/ash-console-credentials-aws-user.png)

2. Go to the newly created user interface [IAM/Users/ash-console-creds-01](https://console.aws.amazon.com/iam/home#/users/ash-console-creds-01)

   1. Navigate to the `Security credentials` tab
   2. Click on `Create access key` under `Access keys`
   3. Select the `Other` use case
   4. Set description tag: `ash-console-access-key-01`

   ![AshConsole access key](/img/ash-console-credentials-aws-key.png)

   5. Save the `Access key` and `Secret access key` somewhere safe

</TabItem>
<TabItem value="azure" label="On Azure">

The Ash Console needs specific permissions to deploy resources into your Azure subscription. We will create a custom role and assign it to a new application.

**Create an application and an application password**

1. Navigate to `Microsoft Entra ID` → `App registrations`
2. Click on `+ New registration`
3. **Register an application:**
   - **Name:** `ash-console-creds-01`
   - **Supported account types:** `Accounts in this organizational directory only`
4. Click on `Register`

![AshConsole application](/img/ash-console-credentials-azure-app.png)

5. Navigate to the `Certificates & secrets` tab of the newly created application
6. Click on `+ New client secret`
7. **Add a client secret:**
   - **Description:** `ash-console-creds-01-password`
   - **Expires:** Set the expiration date to whatever you see fit
8. Click on `Add`
9. Save the `Value` of the newly created client secret somewhere safe

**Create a custom role with limited permissions**

Create the `AshConsole` role:

1. Navigate to your subscription `Access control (IAM)` tab
2. Click on `+ Add` and select `Add custom role`
3. **Create a custom role**

   1. In the `Basic` tab
      - **Custom role name:** `AshConsole`
   2. Navigate to the `JSON` tab and replace the `permissions` property with the following JSON:

      ```json
      {
        "permissions": [
          {
            "actions": [
              "Microsoft.Compute/skus/read",
              "Microsoft.Compute/virtualMachineScaleSets/read",
              "Microsoft.Compute/virtualMachineScaleSets/write",
              "Microsoft.Compute/virtualMachineScaleSets/delete",
              "Microsoft.Compute/virtualMachineScaleSets/start/action",
              "Microsoft.Compute/virtualMachineScaleSets/powerOff/action",
              "Microsoft.Compute/virtualMachineScaleSets/restart/action",
              "Microsoft.Compute/virtualMachineScaleSets/deallocate/action",
              "Microsoft.Compute/virtualMachines/read",
              "Microsoft.Compute/virtualMachines/write",
              "Microsoft.Compute/virtualMachines/delete",
              "Microsoft.Compute/virtualMachines/start/action",
              "Microsoft.Compute/virtualMachines/powerOff/action",
              "Microsoft.Compute/virtualMachines/restart/action",
              "Microsoft.Compute/virtualMachines/deallocate/action",
              "Microsoft.Compute/disks/read",
              "Microsoft.Compute/disks/delete",
              "Microsoft.Compute/disks/write",
              "Microsoft.Compute/availabilitySets/read",
              "Microsoft.Compute/availabilitySets/delete",
              "Microsoft.Compute/availabilitySets/write",
              "Microsoft.Network/networkSecurityGroups/read",
              "Microsoft.Network/networkSecurityGroups/write",
              "Microsoft.Network/networkSecurityGroups/delete",
              "Microsoft.Network/networkSecurityGroups/join/action",
              "Microsoft.Network/networkSecurityGroups/securityRules/read",
              "Microsoft.Network/networkSecurityGroups/securityRules/write",
              "Microsoft.Network/networkSecurityGroups/securityRules/delete",
              "Microsoft.Network/virtualNetworks/read",
              "Microsoft.Network/virtualNetworks/write",
              "Microsoft.Network/virtualNetworks/delete",
              "Microsoft.Network/virtualNetworks/subnets/read",
              "Microsoft.Network/virtualNetworks/subnets/write",
              "Microsoft.Network/virtualNetworks/subnets/delete",
              "Microsoft.Network/virtualNetworks/subnets/join/action",
              "Microsoft.Network/publicIPAddresses/read",
              "Microsoft.Network/publicIPAddresses/write",
              "Microsoft.Network/publicIPAddresses/delete",
              "Microsoft.Network/publicIPAddresses/join/action",
              "Microsoft.Network/networkInterfaces/read",
              "Microsoft.Network/networkInterfaces/write",
              "Microsoft.Network/networkInterfaces/delete",
              "Microsoft.Network/networkInterfaces/join/action",
              "Microsoft.Resources/subscriptions/resourceGroups/read",
              "Microsoft.Resources/subscriptions/resourceGroups/write",
              "Microsoft.Resources/subscriptions/resourceGroups/delete",
              "Microsoft.Resources/deployments/read",
              "Microsoft.Resources/deployments/write",
              "Microsoft.Resources/deployments/delete",
              "Microsoft.Resources/deployments/cancel/action",
              "Microsoft.Resources/deployments/validate/action",
              "Microsoft.Resources/deployments/operationStatuses/read"
            ],
            "notActions": [],
            "dataActions": [],
            "notDataActions": []
          }
        ]
      }
      ```

   3. Click on `Review + create` and then `Create`

   ![AshConsole role](/img/ash-console-credentials-azure-role.png)

**Assign the custom role to the application**

1. Navigate to your subscription `Access control (IAM)` tab
2. Click on `+ Add` and select `Add role assignment`
3. **Add role assignment:**
   - **Role:** `AshConsole`
   - **Assign access to:** `Azure AD user, group, or service principal`
   - **Select members:** `ash-console-creds-01`
4. Click on `Review + assign` and then `Assign`

</TabItem>
<TabItem value="google" label="On Google Cloud">

The Ash Console needs specific permissions to deploy resources into your Google Cloud project. We will create a new service account and give it the appropriate roles.

**Create a service account with limited permissions**

1. Navigate to `IAM & Admin` → `Service accounts`
2. Click on `+ Create service account`
3. **Create service account:**

   - **Service account name:** `ash-console-creds-01`
   - **Service account ID:** `ash-console-creds-01`

   ![AshConsole service account](/img/ash-console-credentials-google-account.png)

4. Click on `Create and continue`
5. **Grant this service account access to project:**

   - **Role:** `Service Account Key Admin`
   - **Role:** `Compute Instance Admin (v1)`
   - **Role:** `Compute Security Admin`

   ![AshConsole service account roles](/img/ash-console-credentials-google-roles.png)

6. Click on `Done`

**Create a service account key**

1. Navigate to `IAM & Admin` → `Service accounts`
2. Click on the newly created service account `ash-console-creds-01`
3. Navigate to the `Keys` tab
4. Click on `ADD KEY` and select `Create new key`
5. Select `JSON` and click on `CREATE`
6. Save the downloaded JSON file somewhere safe

:::tip
You can easily get the service account RSA private key with `jq`:

```bash
jq -r '.private_key' ./${project_id}-${key_id}.json > ash-console-creds-01.key
```

:::

</TabItem>
</Tabs>

## Add cloud credentials to the Console as a secret

<Tabs groupId="cloud-provider">
  <TabItem value="aws" label="AWS credentials" default>

<Tabs groupId="ash-console-client">
  <TabItem value="ash-cli" label="Using the Ash CLI" default>

To create a new `awsCredentials` secret, use the `create secret` command and provide the required secret properties as JSON:

```bash title="Command"
ash console secret create '{"name": "my-aws-credentials", "secretType": "awsCredentials", "accessKey": "***", "secretKey": "***"}'
```

```bash title="Output"
Secret created successfully!
+--------------------------------------+-------------+--------------------+----------------+------------------+---------+
| Secret ID                            | Owner ID    | Name               | Type           | Created at       | Used by |
+======================================+=============+====================+================+==================+=========+
| 36296030-7a2b-4df6-9b17-6a79c4214e59 | 2870...dc26 | my-aws-credentials | AwsCredentials | 2023-11-08T16:04 | 0       |
+--------------------------------------+-------------+--------------------+----------------+------------------+---------+
```

</TabItem>
<TabItem value="ash-api" label="Using the Ash Console API">

:::tip
See [Authentication](/docs/console/reference/authentication?ash-console-auth-client=ash-api) for more information on how to get an access token.
:::

To create a new `awsCredentials` secret, you have to send a `POST` request with the required secret properties as JSON:

```bash title="Command"
curl -X POST https://api.console.ash.center/secrets \
  -H "Authorization: Bearer ${access_token}" \
  -H "Content-Type: application/json" \
  -d '{"name": "my-aws-credentials", "secretType": "awsCredentials", "accessKey": "***", "secretKey": "***"}'
```

```json title="Output"
{
  "accessKey": "***",
  "created": "2023-11-08T16:10:51.134222",
  "id": "6838cc30-58b1-4fc1-b008-8cde7df34594",
  "name": "my-aws-credentials",
  "ownerId": "287090ee-7fae-4bd7-9263-d690959edc26",
  "secretKey": "**********",
  "secretType": "awsCredentials",
  "usedBy": {}
}
```

  </TabItem>
</Tabs>

You can now use the secret upon [cloud region](/docs/console/glossary#cloud-region) addition to a [project](/docs/console/glossary#project)!

</TabItem>
<TabItem value="azure" label="Azure credentials">

<Tabs groupId="ash-console-client">
  <TabItem value="ash-cli" label="Using the Ash CLI" default>

To create a new `azureCredentials` secret, use the `create secret` command and provide the required secret properties as JSON:

```bash title="Command"
ash console secret create '{"name": "my-azure-credentials", "secretType": "azureCredentials", "subscriptionId": "4f23aeac-34f9-4f26-9d52-44d6ca1f1abc", "applicationId": "6c6d0fa9-6f58-46f7-88c9-5248450147dc", "applicationPassword": "***"}'
```

```bash title="Output"
Secret created successfully!
+--------------------------------------+-------------+----------------------+------------------+------------------+---------+
| Secret ID                            | Owner ID    | Name                 | Type             | Created at       | Used by |
+======================================+=============+======================+==================+==================+=========+
| 2d9b7d10-7990-4999-b320-864e76527f1a | 2870...dc26 | my-azure-credentials | AzureCredentials | 2023-11-08T16:24 | 0       |
+--------------------------------------+-------------+----------------------+------------------+------------------+---------+
```

</TabItem>
<TabItem value="ash-api" label="Using the Ash Console API">

:::tip
See [Authentication](/docs/console/reference/authentication?ash-console-auth-client=ash-api) for more information on how to get an access token.
:::

To create a new `azureCredentials` secret, you have to send a `POST` request with the required secret properties as JSON:

```bash title="Command"
curl -X POST https://api.console.ash.center/secrets \
  -H "Authorization: Bearer ${access_token}" \
  -H "Content-Type: application/json" \
  -d '{"name": "my-azure-credentials", "secretType": "azureCredentials", "subscriptionId": "4f23aeac-34f9-4f26-9d52-44d6ca1f1abc", "applicationId": "6c6d0fa9-6f58-46f7-88c9-5248450147dc", "applicationPassword": "***"}'
```

```json title="Output"
{
  "applicationId": "6c6d0fa9-6f58-46f7-88c9-5248450147dc",
  "applicationPassword": "**********",
  "created": "2023-11-08T16:26:27.224459",
  "id": "eac5de30-b546-4b0f-acf3-e18690035aa1",
  "name": "my-azure-credentials",
  "ownerId": "287090ee-7fae-4bd7-9263-d690959edc26",
  "secretType": "azureCredentials",
  "subscriptionId": "4f23aeac-34f9-4f26-9d52-44d6ca1f1abc",
  "usedBy": {}
}
```

  </TabItem>
</Tabs>

</TabItem>
<TabItem value="google" label="Google credentials">

<Tabs groupId="ash-console-client">
  <TabItem value="ash-cli" label="Using the Ash CLI" default>

To create a new `googleCredentials` secret, use the `create secret` command and provide the required secret properties as JSON.

The `privateKey` can be provided as a PEM key file path (or as a base-64 encoded string):

```bash title="Command"
ash console secret create '{"name": "my-google-credentials", "secretType": "googleCredentials", "projectId": "***", "clientEmail": "ash-console-creds-01@***.iam.gserviceaccount.com", "clientId": "***", "privateKey": "~/Downloads/ash-console-creds-01.key"}'
```

**Note:** Make sure to replace `***` to the name of the Google Cloud project in which you created the service account in the `clientEmail` field.

```bash title="Output"
Secret created successfully!
+--------------------------------------+-------------+-----------------------+-------------------+------------------+---------+
| Secret ID                            | Owner ID    | Name                  | Type              | Created at       | Used by |
+======================================+=============+=======================+===================+==================+=========+
| 78e51b80-dece-4446-bff4-49963b2a8fa3 | 2870...dc26 | my-google-credentials | GoogleCredentials | 2023-11-08T17:36 | 0       |
+--------------------------------------+-------------+-----------------------+-------------------+------------------+---------+
```

</TabItem>
<TabItem value="ash-api" label="Using the Ash Console API">

:::tip
See [Authentication](/docs/console/reference/authentication?ash-console-auth-client=ash-api) for more information on how to get an access token.
:::

To create a new `googleCredentials` secret, you have to send a `POST` request with the required secret properties as JSON.

The `privateKey` can be provided as a base-64 encoded string:

```bash title="Command"
# Encode the private key as a base-64 string
export google_key=$(cat ~/Downloads/ash-console-creds-01.key | base64 -w 0)

curl -X POST https://api.console.ash.center/secrets \
  -H "Authorization: Bearer ${access_token}" \
  -H "Content-Type: application/json" \
  -d "{\"name\": \"my-google-credentials\", \"secretType\": \"googleCredentials\", \"projectId\": \"***\", \"clientEmail\": \"ash-console-creds-01@my-project.iam.gserviceaccount.com\", \"clientId\": \"***\", \"privateKey\": \"${google_key}\"}"
```

```json title="Output"
{
  "clientEmail": "ash-console-creds-01@my-project.iam.gserviceaccount.com",
  "clientId": "***",
  "created": "2023-11-08T17:40:28.391723",
  "id": "4f5d4a9b-dfca-44d5-a203-862d93bd5296",
  "name": "my-google-credentials",
  "ownerId": "287090ee-7fae-4bd7-9263-d690959edc26",
  "privateKey": "**********",
  "projectId": "***",
  "secretType": "googleCredentials",
  "usedBy": {}
}
```

  </TabItem>
</Tabs>

</TabItem>
</Tabs>
