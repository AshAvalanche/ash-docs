---
sidebar_position: 2
---

# Installation and upgrade

The Ansible Avalanche Collection can be installed and upgraded either using `ansible-galaxy` or by cloning the GitHub repository.

## Using `ansible-galaxy`

### Installing the collection

```bash
ansible-galaxy collection install git+https://github.com/AshAvalanche/ansible-avalanche-collection.git
```

### Upgrading the collection

Simply run the same command as above to upgrade the collection!

## Using Git

### Installing the collection

You have to clone the collection to the Ansible `COLLECTIONS_PATHS`. To find the `COLLECTIONS_PATHS`:

```bash
ansible-config dump | grep COLLECTIONS_PATHS
# Example output:
# COLLECTIONS_PATHS(/home/gauthier/Projects/ash/ansible-avalanche-getting-started/ansible.cfg) = ['/home/gauthier/Projects/ash/ansible-avalanche-getting-started']
```

```bash
cd $COLLECTIONS_PATHS
git clone https://github.com/AshAvalanche/ansible-avalanche-collection.git
```

### Upgrading the collection

```bash
cd $COLLECTIONS_PATHS/ansible-avalanche-collection
git pull
```
