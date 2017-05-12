# blockapps-ba

## Getting Started

### Dependencies

Install the dependencies

```
npm i
```

Install the UI dependencies

```
cd ui
npm i
```

### Deployment

Make sure there is a config file under `./server/config` with the naming convention `<server-name>.config.yaml`. The contents of the file should be as follows.

```
apiDebug: true
password: '1234'
timeout: 600000
libPath: ./server/lib
contractsPath: ./contracts/
dataFilename: ./server/dapp/dapp.presets.yaml
deployFilename: ./server/config/<server-name>.deploy.yaml

# WARNING - extra strict syntax
# DO NOT change the nodes order
# node 0 is the default url for all single node api calls
nodes:
  - id: 0
    explorerUrl: 'http://<your-ip-or-dns>:9000'
    stratoUrl: 'http://<your-ip-or-dns>/strato-api'
    blocUrl: 'http://<your-ip-or-dns>/bloc/'
    searchUrl: 'http://<your-ip-or-dns>/cirrus'
```

Replace <server-name> with your actual server name in the above file and then run the following from the project root.

```
SERVER=<server-name> npm run deploy
```

Replace the `config.yaml` in the root with the newly minted `<server-name>.config.yaml` in `./server/config/`. This is a temporary measure and will be streamlined soon.

### Launch the API

From the root

```
npm run start
```

### Launch the UI

```
cd ui
npm run start
```

### Testing

```
mocha tests/v1
```