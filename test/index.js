const assert = require('assert');
const CardanoExplorerApi = require('../src');

// altenrative usage
// const explorer = new CardanoExplorerApi({ debug: true, endpoint: 'http://localhost:8100/api' });
const explorer = new CardanoExplorerApi();

(async () => {
  assert.equal(JSON.stringify(await explorer.addressesSummary({ address: 'Ae2tdPwUPEYyVPUHmDGGLy75Yx4rvcZGygbYXQi4b2jP7T1qyGYhXa8JH3d' })), '{"caAddress":"Ae2tdPwUPEYyVPUHmDGGLy75Yx4rvcZGygbYXQi4b2jP7T1qyGYhXa8JH3d","caType":"CRedeemAddress","caTxNum":0,"caBalance":{"getCoin":"8217726000000"},"caTxList":[]}');
  /*
  TODO: use mock server so this is static
  assert.equal(JSON.stringify(await explorer.blocksPages({ page: 100, pageSize: 10 })), '[111654,[{"cbeEpoch":0,"cbeSlot":999,"cbeBlkHash":"f84748ae7f413a7f73ddb599fd77e4ed488484c1353c6075a05f30e9c78c9de9","cbeTimeIssued":1506223071,"cbeTxNum":0,"cbeTotalSent":{"getCoin":"0"},"cbeSize":669,"cbeBlockLead":"5411c7bf87c252609831a337a713e4859668cba7bba70a9c3ef7c398","cbeFees":{"getCoin":"0"}},{"cbeEpoch":0,"cbeSlot":998,"cbeBlkHash":"18c7525617b8747a721c3fb003776826fe60a55e64f6b4f5396d06b1ff88ce02","cbeTimeIssued":1506223051,"cbeTxNum":0,"cbeTotalSent":{"getCoin":"0"},"cbeSize":669,"cbeBlockLead":"1deb82908402c7ee3efeb16f369d97fba316ee621d09b32b8969e54b","cbeFees":{"getCoin":"0"}},{"cbeEpoch":0,"cbeSlot":997,"cbeBlkHash":"b15e0e6e745510df502f5e3241d0e203aa39fb129de9cd1a22f27419b62eee48","cbeTimeIssued":1506223031,"cbeTxNum":0,"cbeTotalSent":{"getCoin":"0"},"cbeSize":669,"cbeBlockLead":"1deb82908402c7ee3efeb16f369d97fba316ee621d09b32b8969e54b","cbeFees":{"getCoin":"0"}},{"cbeEpoch":0,"cbeSlot":996,"cbeBlkHash":"c9688e881a16cf2be4cd7f7615e28960d15995dcffba70b7d22d84b83ec94f77","cbeTimeIssued":1506223011,"cbeTxNum":0,"cbeTotalSent":{"getCoin":"0"},"cbeSize":669,"cbeBlockLead":"5411c7bf87c252609831a337a713e4859668cba7bba70a9c3ef7c398","cbeFees":{"getCoin":"0"}},{"cbeEpoch":0,"cbeSlot":995,"cbeBlkHash":"836d8c4664c4ddf9d7f0a835ecc5c5d7205cf3cc76a6d7f88eed7b09f882ad68","cbeTimeIssued":1506222991,"cbeTxNum":0,"cbeTotalSent":{"getCoin":"0"},"cbeSize":669,"cbeBlockLead":"5411c7bf87c252609831a337a713e4859668cba7bba70a9c3ef7c398","cbeFees":{"getCoin":"0"}},{"cbeEpoch":0,"cbeSlot":994,"cbeBlkHash":"5071b72547b6cceb5ca09e36b9a6a82ecbf82d8e5d3e5adeefe24c06f14e3368","cbeTimeIssued":1506222971,"cbeTxNum":0,"cbeTotalSent":{"getCoin":"0"},"cbeSize":669,"cbeBlockLead":"1deb82908402c7ee3efeb16f369d97fba316ee621d09b32b8969e54b","cbeFees":{"getCoin":"0"}},{"cbeEpoch":0,"cbeSlot":993,"cbeBlkHash":"a14e7d10b964ea9071f09b0e3c6646671a9bcb747120a08917beea16bc3ac2a7","cbeTimeIssued":1506222951,"cbeTxNum":0,"cbeTotalSent":{"getCoin":"0"},"cbeSize":669,"cbeBlockLead":"6c9e14978b9d6629b8703f4f25e9df6ed4814b930b8403b0d45350ea","cbeFees":{"getCoin":"0"}},{"cbeEpoch":0,"cbeSlot":992,"cbeBlkHash":"4f08836e3f5b26773c32af13f341fe3a19b096a82195f77ec385f403d2ea8b4b","cbeTimeIssued":1506222931,"cbeTxNum":0,"cbeTotalSent":{"getCoin":"0"},"cbeSize":669,"cbeBlockLead":"65904a89e6d0e5f881513d1736945e051b76f095eca138ee869d543d","cbeFees":{"getCoin":"0"}},{"cbeEpoch":0,"cbeSlot":991,"cbeBlkHash":"b3fcdb7de684f68559dcf80e927e5df9199b23497278c788da329e8400eca5c9","cbeTimeIssued":1506222911,"cbeTxNum":0,"cbeTotalSent":{"getCoin":"0"},"cbeSize":669,"cbeBlockLead":"43011479a595b300e0726910d0b602ffcdd20466a3b8ceeacd3fbc26","cbeFees":{"getCoin":"0"}},{"cbeEpoch":0,"cbeSlot":990,"cbeBlkHash":"cf1d70fb34ffa3836550580524b3a2d973b54f0f0c162b39efabf8775acf597e","cbeTimeIssued":1506222891,"cbeTxNum":0,"cbeTotalSent":{"getCoin":"0"},"cbeSize":669,"cbeBlockLead":"5411c7bf87c252609831a337a713e4859668cba7bba70a9c3ef7c398","cbeFees":{"getCoin":"0"}}]]')
  assert.equal(JSON.stringify(await explorer.blocksPagesTotal({ pageSize: 10 })), '111654')
  */
  assert.equal(JSON.stringify(await explorer.blocksSummary({ hash: 'f9b473a4a8f264adc14dbe349921a35d9580aa357dcbe1181c12553c12a7312c' })), '{"cbsEntry":{"cbeEpoch":2,"cbeSlot":5,"cbeBlkHash":"f9b473a4a8f264adc14dbe349921a35d9580aa357dcbe1181c12553c12a7312c","cbeTimeIssued":1507067191,"cbeTxNum":1,"cbeTotalSent":{"getCoin":"8000001486438"},"cbeSize":1028,"cbeBlockLead":"1deb82908402c7ee3efeb16f369d97fba316ee621d09b32b8969e54b","cbeFees":{"getCoin":"171246"}},"cbsPrevHash":"2333fb5f09a894d8cd698239fa70712d40432726da752f8469724bcd2eed9c4b","cbsNextHash":"47daf279ff8af6beb487869c64c0e207fd0eba5e4be69ec66a31b195d2df7e8f","cbsMerkleRoot":"080d93fe4516a4860f954cad6c5d3a012daac264fb47fcf8215505b03fc890b1"}')
  assert.equal(JSON.stringify(await explorer.blocksTxs({ hash: 'f9b473a4a8f264adc14dbe349921a35d9580aa357dcbe1181c12553c12a7312c', limit: 10, offset: 0 })), '[{"ctbId":"26e7c88d260da59c5fbd6de278198b82c98c0efe72646442ec72038c5c6a43d9","ctbTimeIssued":1507067191,"ctbInputs":[["DdzFFzCqrhsgkD2ywiE7VDyG2hrfnHgZV9WUwZxM6RM83rChDpgZy8sLSe6eV8CqonuTLu2M4ei23PnRhyV2fPjc9aNUK7TrD6u2Yfgn",{"getCoin":"8000001657684"}]],"ctbOutputs":[["DdzFFzCqrhsqo9Lpg67yagLetT43vw4khADPgdkKfDcijLxB6a7tYjG9EbZiWbKQmZbmcw7Lrb9WLcX3kYRcebZJZBWDkd2KhsUo1xcL",{"getCoin":"7000001486438"}],["DdzFFzCqrhstKTbNDVwVfmdyLhg2SXv98P9nu48wsVjAUu2wgG7nF8mAhXh3F2zNwsJXtdmbRkmZCifmYLe6Xu59QNTaWCgfMARnv3vt",{"getCoin":"1000000000000"}]],"ctbInputSum":{"getCoin":"8000001657684"},"ctbOutputSum":{"getCoin":"8000001486438"}}]')
  assert.equal(JSON.stringify(await explorer.epochs({ epoch: 2, page: 1 })), '[2160,[{"cbeEpoch":2,"cbeSlot":8,"cbeBlkHash":"5f8d1dffcf875b722a1f84826207076cf1a92a5eed8cc51e20e084bce1d89133","cbeTimeIssued":1507067251,"cbeTxNum":0,"cbeTotalSent":{"getCoin":"0"},"cbeSize":667,"cbeBlockLead":"1deb82908402c7ee3efeb16f369d97fba316ee621d09b32b8969e54b","cbeFees":{"getCoin":"0"}},{"cbeEpoch":2,"cbeSlot":7,"cbeBlkHash":"a18c867ed44ac250b9eae92cbba23f777aa93ac33ca27269e3d6e614217af33c","cbeTimeIssued":1507067231,"cbeTxNum":0,"cbeTotalSent":{"getCoin":"0"},"cbeSize":667,"cbeBlockLead":"1deb82908402c7ee3efeb16f369d97fba316ee621d09b32b8969e54b","cbeFees":{"getCoin":"0"}},{"cbeEpoch":2,"cbeSlot":6,"cbeBlkHash":"47daf279ff8af6beb487869c64c0e207fd0eba5e4be69ec66a31b195d2df7e8f","cbeTimeIssued":1507067211,"cbeTxNum":0,"cbeTotalSent":{"getCoin":"0"},"cbeSize":667,"cbeBlockLead":"43011479a595b300e0726910d0b602ffcdd20466a3b8ceeacd3fbc26","cbeFees":{"getCoin":"0"}},{"cbeEpoch":2,"cbeSlot":5,"cbeBlkHash":"f9b473a4a8f264adc14dbe349921a35d9580aa357dcbe1181c12553c12a7312c","cbeTimeIssued":1507067191,"cbeTxNum":1,"cbeTotalSent":{"getCoin":"8000001486438"},"cbeSize":1028,"cbeBlockLead":"1deb82908402c7ee3efeb16f369d97fba316ee621d09b32b8969e54b","cbeFees":{"getCoin":"171246"}},{"cbeEpoch":2,"cbeSlot":4,"cbeBlkHash":"2333fb5f09a894d8cd698239fa70712d40432726da752f8469724bcd2eed9c4b","cbeTimeIssued":1507067171,"cbeTxNum":0,"cbeTotalSent":{"getCoin":"0"},"cbeSize":4516,"cbeBlockLead":"5071d8802ddd05c59f4db907bd1749e82e6242caf6512b20a8368fcf","cbeFees":{"getCoin":"0"}},{"cbeEpoch":2,"cbeSlot":3,"cbeBlkHash":"5ed8f3204d432352443697e0469257036b11cc753d5f0b3f58a615baaeaa672d","cbeTimeIssued":1507067151,"cbeTxNum":0,"cbeTotalSent":{"getCoin":"0"},"cbeSize":667,"cbeBlockLead":"43011479a595b300e0726910d0b602ffcdd20466a3b8ceeacd3fbc26","cbeFees":{"getCoin":"0"}},{"cbeEpoch":2,"cbeSlot":2,"cbeBlkHash":"7e89b8df0e4f7f16c04d6068d839052ff1a514054d7146625ce2c42511f80d6f","cbeTimeIssued":1507067131,"cbeTxNum":1,"cbeTotalSent":{"getCoin":"50805565431559"},"cbeSize":4877,"cbeBlockLead":"43011479a595b300e0726910d0b602ffcdd20466a3b8ceeacd3fbc26","cbeFees":{"getCoin":"171246"}},{"cbeEpoch":2,"cbeSlot":1,"cbeBlkHash":"d2210effd1b09da47998c7fc9e890beb1825114e734c343dd920829e781c6325","cbeTimeIssued":1507067111,"cbeTxNum":2,"cbeTotalSent":{"getCoin":"874479486262"},"cbeSize":2554,"cbeBlockLead":"af2800c124e599d6dec188a75f8bfde397ebb778163a18240371f2d1","cbeFees":{"getCoin":"171246"}},{"cbeEpoch":2,"cbeSlot":0,"cbeBlkHash":"075e3090b26ed2aafea541231146626e24dfd456f6df18b706a6a4d9448dd139","cbeTimeIssued":1507067091,"cbeTxNum":0,"cbeTotalSent":{"getCoin":"0"},"cbeSize":667,"cbeBlockLead":"43011479a595b300e0726910d0b602ffcdd20466a3b8ceeacd3fbc26","cbeFees":{"getCoin":"0"}}]]')
  assert.equal(JSON.stringify(await explorer.epochsSlot({ epoch: 2, slot: 4 })), '[{"cbeEpoch":2,"cbeSlot":4,"cbeBlkHash":"2333fb5f09a894d8cd698239fa70712d40432726da752f8469724bcd2eed9c4b","cbeTimeIssued":1507067171,"cbeTxNum":0,"cbeTotalSent":{"getCoin":"0"},"cbeSize":4516,"cbeBlockLead":"5071d8802ddd05c59f4db907bd1749e82e6242caf6512b20a8368fcf","cbeFees":{"getCoin":"0"}}]')
  assert.equal(JSON.stringify(await explorer.genesisAddress({ page: 1, pageSize: 2, filter: 'all' })), '[{"cgaiCardanoAddress":"Ae2tdPwUPEZHhgPpDi2g5nE1UhHn6hCqihNxwkhTgxQayQ6FwE3eKEypDZU","cgaiGenesisAmount":{"getCoin":"3011269000000"},"cgaiIsRedeemed":true},{"cgaiCardanoAddress":"Ae2tdPwUPEYyVPUHmDGGLy75Yx4rvcZGygbYXQi4b2jP7T1qyGYhXa8JH3d","cgaiGenesisAmount":{"getCoin":"8217726000000"},"cgaiIsRedeemed":false}]')
  assert.equal(JSON.stringify(await explorer.genesisAddressPagesTotal({ pageSize: 1, filter: 'all' })), '14505')
  /*
  TODO: use mock server so this is static
  assert.equal(JSON.stringify(await explorer.genesisSummary()), '{"cgsNumTotal":14505,"cgsNumRedeemed":13329,"cgsNumNotRedeemed":1176,"cgsRedeemedAmountTotal":{"getCoin":"29897141098000000"},"cgsNonRedeemedAmountTotal":{"getCoin":"1215343647000000"}}')
  assert.equal(JSON.stringify(await explorer.statsTxs({ page: 100000 })), '[111655,[["4c5c996c38dec1eec6ca9b225cf56e7ac2fc89a36a618046ab5d86a7f3dbf740",134],["f8ef0fa3e91b4e540df1d3745d2c872cfb13e8b4d783dabd0fc0aefb3e1d0ba5",220],["a06568b4be9d98d6cabca5f3b874b49b8ef9fde313b18303872b107f22f24500",214]]]')
  */
  assert.ok(await explorer.supplyAda() > 1);
  /*
  TODO: use mock server so this is static
  assert.equal(JSON.stringify(await explorer.txsLast()), 'test')
  */
  assert.equal(JSON.stringify(await explorer.txsSummary({ txid: '8f4b511ab405263ecd9a112ac7c5ee4ea17e830e3faa3e037525dd054c61f98f' })), '{"ctsId":"8f4b511ab405263ecd9a112ac7c5ee4ea17e830e3faa3e037525dd054c61f98f","ctsTxTimeIssued":1528534911,"ctsBlockTimeIssued":1528534911,"ctsBlockHeight":1116421,"ctsBlockEpoch":51,"ctsBlockSlot":14991,"ctsBlockHash":"258bb2ed54b899086ac97bc9b1667bb2838d7f4d2965b0e723d731d8dfb10533","ctsRelayedBy":null,"ctsTotalInput":{"getCoin":"9668212"},"ctsTotalOutput":{"getCoin":"9481497"},"ctsFees":{"getCoin":"186715"},"ctsInputs":[["DdzFFzCqrhsyfyszqiU5Ahmucbh5ZxDfm8pWKtBo32Xw3ieG1KhhQC6CQGVZ8R4mNRUoJ1XwEUQa7LSTp62yGZxjH3uTKmzMp9Zj58yS",{"getCoin":"9658212"}],["DdzFFzCqrhsyfyszqiU5Ahmucbh5ZxDfm8pWKtBo32Xw3ieG1KhhQC6CQGVZ8R4mNRUoJ1XwEUQa7LSTp62yGZxjH3uTKmzMp9Zj58yS",{"getCoin":"5000"}],["DdzFFzCqrhsyfyszqiU5Ahmucbh5ZxDfm8pWKtBo32Xw3ieG1KhhQC6CQGVZ8R4mNRUoJ1XwEUQa7LSTp62yGZxjH3uTKmzMp9Zj58yS",{"getCoin":"5000"}]],"ctsOutputs":[["DdzFFzCqrht59ixY2e58pQG3zLs4xQZkhgM5hAv4LvKWWAMRd5QZbSN2kWBn33UV1yPqNMgR2wVdKQ4Nrw8kju8psGEGkmUWF1wuApe2",{"getCoin":"9476297"}],["DdzFFzCqrhsqqxuNhgafbPY8hgSAijZoZ4CaqSa9VbUvZhW7yHcgRxoBmQNS2QsEMGs2cPkkamSuGquJrsF5xxFre2mvShtTx2LkWiPX",{"getCoin":"5200"}]]}')
  console.log('tests pass');
})();
