# Cardano Explorer API

### Isomorphic Javascript Interface for `cardano-explorer`

Wrapper for https://cardanodocs.com/technical/explorer/api/#path--api-blocks-pages using promises.

## Install

```
npm instal cardano-explorer-api
```

## Usage

Initialize with optional options `endpoint` and `debug`. Default Endpoint: [https://cardanoexplorer.com/api](https://cardanoexplorer.com/api).

```javascript
new CardanoExplorerApi(options);
```

## API

|Method (Params)|Aliases|URI|
|--|--|--|
|`addressesSummary({ address })`|`address`|/addresses/summary/{address}|
|`blocksPages({ page, pageSize })`||/blocks/pages|
|`blocksPagesTotal({ pageSize })`||/blocks/pages/total|
|`blocksSummary({ hash })`|`blockSummary`, `block`|/blocks/summary/{hash}|
|`blocksTxs({ hash, limit, offset })`|`blockTxs`|/blocks/txs/{hash}|
|`epochs({ epoch, page })`|`epoch`|/epochs/{epoch}|
|`epochsSlot({ epoch, slot })`|`slot`|/epochs/{epoch}/{slot}|
|`genesisAddress({ page, pageSize, filter })`||/genesis/address|
|`genesisAddressPagesTotal({ pageSize, filter })`||/genesis/address/pages/total|
|`genesisSummary({  })`||/genesis/summary|
|`statsTxs({ page })`|`recentTransactions`|/stats/txs|
|`supplyAda({  })`|`totalSupply`|/supply/ada|
|`txsLast({  })`|`lastTransaction`|/txs/last|
|`txsSummary({ txid })`|`tx`|/txs/summary/{txid}|

## Example

```javascript
const explorer = new CardanoExplorerApi();
// or configure  new CardanoExplorerApi({ debug: true, endpoint: 'http://localhost:8100/api' });

(async () => {
  const hash = 'f9b473a4a8f264adc14dbe349921a35d9580aa357dcbe1181c12553c12a7312c';
  const block = await explorer.blocksSummary({ hash });
  console.log(block);
  /*
  { cbsEntry:
     { cbeEpoch: 2,
       cbeSlot: 5,
       cbeBlkHash: 'f9b473a4a8f264adc14dbe349921a35d9580aa357dcbe1181c12553c12a7312c',
       cbeTimeIssued: 1507067191,
       cbeTxNum: 1,
       cbeTotalSent: { getCoin: '8000001486438' },
       cbeSize: 1028,
       cbeBlockLead: '1deb82908402c7ee3efeb16f369d97fba316ee621d09b32b8969e54b',
       cbeFees: { getCoin: '171246' } },
    cbsPrevHash: '2333fb5f09a894d8cd698239fa70712d40432726da752f8469724bcd2eed9c4b',
    cbsNextHash: '47daf279ff8af6beb487869c64c0e207fd0eba5e4be69ec66a31b195d2df7e8f',
    cbsMerkleRoot: '080d93fe4516a4860f954cad6c5d3a012daac264fb47fcf8215505b03fc890b1' }
  */
})();
```

## Test

Currently uses default endpoint mainnet data, todo: implement mock test server.

```
npm run test
```

---

MIT 2018
