require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip film birth ranch prosper gesture brave equal gentle'; 
let testAccounts = [
"0x61620605cefec66bdec32dbcab38c46438a8178aa36c3f05c02e895013d3640d",
"0x455c11d9023714d9d13af32b2ebe0a08deab51c63f90864fa937d5089671db42",
"0x94ae9415a112a97f843979d5300080651e9573e99070f24474560e149f6093ac",
"0x9264dd916154e013906d6b03b29ecb742bd1d860c2e310e21d20d7a4f5c63f86",
"0x22a52485e826b773e3b1f8124c21fd558cb72d15d98fc3a8a3d66162bb2d5cf8",
"0x885a4a413fbaf7d3aa772d7b14b2c5b5ea70d78d7e10084be790ca9274d098cd",
"0x8cba707abef6de3dfeeb07ffacb7f5e2f07795fb86900279ed9a638cead33cce",
"0x14567c15ba4c111adc804dca0092b959a653b2f4161d3ca7c215b3fbfe0dec59",
"0xe281f8bc9c35b87699ebd1eed2e35f038788ede8ec92221880fe50517792cb24",
"0xadbc583a33d9fc7180cafa5d327dee7f071c7b60be8332e0335662f9bc5cf4f7"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

