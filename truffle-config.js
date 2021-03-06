module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: 'localhost',
      port: 9545,
      network_id: '*',
      gas: 8000000000,
      gasPrice: 1000000000, // web3.eth.gasPrice
    },
    coverage: {
      host: 'localhost',
      port: 8555,
      network_id: '*',
      gas: 8000000000,
      gasPrice: 1000000000, // web3.eth.gasPrice
    }
  },
  compilers: {
    solc: {
      version: '0.6.8',
      settings: {
        optimizer: {
          enabled: true,
          runs: 200000000,
        }
      }
    },
  },
  mocha: { // https://github.com/cgewecke/eth-gas-reporter
    reporter: 'eth-gas-reporter',
    reporterOptions : {
      currency: 'USD',
      gasPrice: 1,
      onlyCalledMethods: true,
      showTimeSpent: true,
      excludeContracts: ['Migrations']
    }
  }
};
