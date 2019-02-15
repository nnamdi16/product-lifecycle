const ProductChain = require('../productChain');
class Consumer {
    createChannel () {
        console.log('I am a consumer');
    }
}

class ConsumerManager extends ProductChain {
    makeChannel () {
        return new Consumer();
    }
}

const devConsumer = new ConsumerManager();
devProducer.createProductChannel();

module.exports = ConsumerManager;
