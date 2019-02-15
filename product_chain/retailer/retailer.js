const ProductChain = require('../productChain');
class Retailer {
    createChannel() {
        console.log('I am a retailer');
    }
}


class RetailerManager extends ProductChain {
    makeChannel () {
        return new Retailer();
    }
}

const devRetailer = new RetailerManager();
devRetailer.createProductChannel();

module.exports = RetailerManager;