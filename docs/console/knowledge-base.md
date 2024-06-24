---
sidebar_position: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Knowledge Base

This is a list of the known issues or limitations and their solutions about the Ash console.

## Issues and limitations

### Unable to add a new cloud region

<Tabs groupId="cloud-provider">
  <TabItem value="gcp" label="On GCP" default>

- Invalid or expired credential

        ```output
        Error adding cloud region to the project: error in response: 400 Bad Request: 
        {
            "type": "about:blank",
            "title": "Bad Request",
            "detail": "GenericJujuError: failed to create environ: Get \"https://compute.googleapis.com/compute/v1/projects/GCP-PROJECT?alt=json&prettyPrint=false\": oauth2: cannot fetch token: 400 Bad Request\nResponse: {\"error\":\"invalid_grant\",\"error_description\":\"Invalid grant: account not found\"}",
            "status": 400
        }
        ```
    - Resolution:

        In that case you need to renew your GCP credentials and then update it in ash console.

- Insufficient access right

    If a resource is created right after the region, the ash cli will raise the following error:

    ```output
    Error adding cloud region to the project: error in response: 400 Bad Request: 
    {
        "type": "about:blank",
        "title": "Bad Request",
        "detail": "GenericJujuError: failed to create environ: googleapi: Error 403: Required 'compute.projects.get' permission for 'projects/GCP-PROJECT', forbidden",
        "status": 400
    }
    ```
    - Resolution:

        In that case you need to change GCP credentials access right.

</TabItem>
</Tabs>

### Cloud region already exists
- Symptoms:

    ```output
    Error adding cloud region to the project: error in response: 400 Bad Request:
    {
        "type": "about:blank",
        "title": "Bad Request",
        "detail": "CloudRegionAlreadyInProjectError: CloudRegion 'aws/us-east-2' already exists in project '6d6fead3-7fb1-4454-ba26-ca74b3a25004'",
        "status": 400
    }
    ```
- Resolution:

    In that case you need to run the following command to update they region internally:
    ```shell
    ash console region list
    ```
