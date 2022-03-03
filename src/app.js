const { Lend_MultiPriceOracle, Lend_LXRP } = require('./config');
const PriceOracle = require('./PriceOracle');

const priceOracle = PriceOracle(Lend_MultiPriceOracle);

async function runloop() {
	const price = await priceOracle.getUnderlyingPrice(Lend_LXRP);
	console.log('xrp price ->', price.toString());
}

setInterval(runloop, 60 * 1000);
runloop();
