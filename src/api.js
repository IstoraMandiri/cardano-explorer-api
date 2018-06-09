module.exports = {
  endpoint: 'https://cardanoexplorer.com/api',
  methods: {
    addressesSummary: {
      path: '/addresses/summary',
      aliases: ['address'],
      params: {
        path: ['address']
      }
    },
    blocksPages: {
      path: '/blocks/pages',
      params: {
        query: ['page', 'pageSize']
      }
    },
    blocksPagesTotal: {
      path: '/blocks/pages/total',
      params: {
        query: ['pageSize']
      }
    },
    blocksSummary: {
      path: '/blocks/summary',
      aliases: ['blockSummary', 'block'],
      params: {
        path: ['hash']
      }
    },
    blocksTxs: {
      path: '/blocks/txs',
      aliases: ['blockTxs'],
      params: {
        path: ['hash'],
        query: ['limit', 'offset']
      },
    },
    epochs: {
      path: '/epochs',
      aliases: ['epoch'],
      params: {
        path: ['epoch'],
        query: ['page']
      }
    },
    epochsSlot: {
      path: '/epochs',
      aliases: ['slot'],
      params: {
        path: ['epoch', 'slot']
      }
    },
    genesisAddress: {
      path: '/genesis/address',
      params: {
        query: ['page', 'pageSize', 'filter']
      }
    },
    genesisAddressPagesTotal: {
      path: '/genesis/address/pages/total',
      params: {
        query: ['pageSize', 'filter']
      }
    },
    genesisSummary: {
      path: '/genesis/summary',
    },
    statsTxs: {
      path: '/stats/txs',
      aliases: ['latestTransactions'],
      params: {
        query: ['page']
      }
    },
    supplyAda: {
      path: '/supply/ada',
      aliases: ['totalSupply']
    },
    txsLast: {
      path: '/txs/last',
      aliases: ['lastTransactions'],
    },
    txsSummary: {
      path: '/txs/summary',
      aliases: ['tx'],
      params: {
        path: ['txid']
      }
    }
  }
}
