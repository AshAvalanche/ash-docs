---
sidebar_position: 6
---

# Knowledge Base

This is a list of the known issues and their solutions.

## Issues

### Multipass Instance already existing

```bash
│ Error: Error from multipass
│
│   with multipass_instance.frontend,
│   on main.tf line 39, in resource "multipass_instance" "frontend":
│   39: resource "multipass_instance" "frontend" {
│
launch failed: instance "frontend" already exists
exit status 2
```

In that case you need to run this command to delete the instance:
```bash
multipass delete --purge frontend
```

And then you can run the command to create instances once again. 

:::note
Note that you could have this error with multiple instances. In that case delete each instances before trying to create other instances.
:::