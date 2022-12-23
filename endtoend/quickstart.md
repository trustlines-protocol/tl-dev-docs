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

To test out the system with a private dev chain you can run
`./run-e2e.sh -b` in the root folder of this repository.

This will launch all services configured in the docker-compose file.
The file `addresses.json` contains the addresses of currency networks used by the relay.
The key and password for the blockchain node is in the `keys` directory.

There is no persistence of the database of the events indexer used by the relay.
The script exposes the relay api on `127.0.0.1:5000` and the safe-relay on `127.0.0.1:8001`

## Stopping and restarting services

You can stop all services by stoping the script, or you can stop individual docker containers by using 
`docker stop <service>`.
