require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner arena bone table edge rare remember equip grid arctic bottom general'; 
let testAccounts = [
"0x7bf5d44110d4ed1c46ae3fe974bc3086c36d4d7e4e1d1c45892045c8cb28c398",
"0x9f4d1a66a66a55361e7e1de68f4721b7621a3927db84cb5babefbb32c6bbb4fe",
"0x13a0a4480777ba894747d43f386eed8a2357d40a058c9415841ce30081059b8d",
"0xbeb97c4bb7dddc1f2a53aae60bbb386d1007ffa638dcf7b4fa781d99d0fac075",
"0x64abdd326acf0cab8090c93b77073d5d1aa08bf3f64e4d03f198df305ea35f13",
"0xb87fcb2f6287b5b350b154756f47a0116f2404c991db7a2a6dbafff8493c2ccf",
"0x765b982ea2dcc868e72fece7edb3b4fce4ab7faae4f362fafa58fc7eccf43569",
"0x34a1a06c705c1a040be8b35be5c89a71be1c1d9e36f9363622baf85f5b1d9372",
"0xe4734bc272ccb8c615ead379721f3f96a0cb676a7dab8e20d18b0627320bcd09",
"0xadcdc137d5161f1fc3ec9d1c6f633cc6b685e93634f67605684cf3216abf8940"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

