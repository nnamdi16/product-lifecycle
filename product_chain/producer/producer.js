const ProductChain = require('../productChain');
class Producer {
    createChannel() {
        console.log('I am a producer');
    }
}

class ProductManager extends ProductChain {
    makeChannel () {
        return new Producer();
    }
}

const devProducer = new ProductManager();
devProducer.createProductChannel();


module.exports = ProductManager;