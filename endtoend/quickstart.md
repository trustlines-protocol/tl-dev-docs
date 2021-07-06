---
title: End to End Quickstart Script
---

To quickly set up an easy-to-use environment for the Trustlines Protocol, one can use the [end2end quickstart package](https://github.com/trustlines-protocol/end2end/tree/master/quickstart).

## Get Up and Running

You will need to have [Docker](https://docker.com) and [docker-compose](https://docs.docker.com/compose/)
installed and configured. You must have at least version [`1.18.0`](https://github.com/docker/compose/releases/tag/1.18.0)
of `docker-compose`. Please refer to the official documentation and make sure your user is added
to the `docker` user group if you cannot access root permissions to run containers.

You will also need python3.6 or up and pip.

To start installing the pre-requisites on Ubuntu 18.04, run the following command:
```
sudo apt install build-essential python3 python3-pip python3-dev libsecp256k1-dev \
python3-virtualenv virtualenv pkg-config libssl-dev automake \
autoconf libtool git libpq-dev
```

You should then clone the repository:
```
git clone https://github.com/trustlines-protocol/end2end.git
cd end2end
```

then create and activate a fresh virtual environment:
```
virtualenv -p python3 venv
source venv/bin/activate
```

Finally, to install all dependencies and the quickstart script, run:
```
pip install -r quickstart/requirements.txt -e quickstart/
```

You can verify the proper installation by running `quickstart --help` which should bring about the help.

## Running the script

You can run the script with `quickstart tlbc` or `quickstart laika`, depending on whether you want to
test out the Trustlines system on the main Trustlines Blockchain or the Laika testnet.

To test out the system you will need an account with either TLC or Laika coins.
If you do not have access to coins, you can still test out the system with a private dev chain by running
`./run-e2e.sh` in the root folder of this repository.

The script will prompt you for three means of setting up your account:
 - Generate a new private key, you will need to transfer coins to the new address
 - Import an encrypted keystore.json
 - Import a raw private key

The script will generate a new directory called either `/tlbc` or `/laika` with all the
files necessary to run the trustlines system. It will then run the trustlines system.
You will find the file `config.toml` that can be used to modify the config of the relay.
The file `addresses.json` contains the addresses of currency networks used by the relay.
The key and password for the blockchain node is in the `config` directory.
The directories `databases`, `enode`, and `shared` are used to persist the data of the blockchain node.
There is no persistence of the database of the events indexer used by the relay.
The script uses the port `30302` for networking of the blockchain node and exposes the relay api on
`127.0.0.1:5000`

## Stopping and restarting services

You can stop the running via `docker stop <service>` or stop all running docker
containers with `docker stop $(docker ps -a -q)`. You can remove the containers
similarly using `docker rm <service>` or `docker rm $(docker ps -a -q)`.

To resume running the services, change directory into the created `/tlbc` or `/laika`
and execute `./run-e2e.sh`.
