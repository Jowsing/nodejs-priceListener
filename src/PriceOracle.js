const { providers, Contract } = require("ethers");

const ABI = require('./MultiPriceOracle.json');

function PriceOracle(address) {
	const provider = new providers.JsonRpcProvider('https://http-mainnet.hecochain.com', {
        name: 'heco',
        chainId: 128,
    });
	return new Contract(address, ABI, provider);
}

module.exports = PriceOracle;
