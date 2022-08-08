// var HDWalletProvider = require("truffle-hdwallet-provider");
module.exports = {
  compilers: {
    solc: {
      version: "^0.4.23",
    },
  },
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "5777", // Match any network id
    },
    // rinkeby: {
    //     provider: function() {
    //       var mnemonic = "steel neither fatigue ...";//put ETH wallet 12 mnemonic code
    //       return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/8U0AE4DUGSh8lVO3zmma");
    //     },
    //     network_id: '4',
    //     from: '0xab0874cb61d.....',/*ETH wallet 12 mnemonic code wallet address*/
    // }
  },
};
