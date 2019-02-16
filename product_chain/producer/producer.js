const ProductChain = require('../productChain');
const producerStation = require('../../data/producerStation');
class Producer {
    createChannel() {
        console.log('I am a producer');
    }
}

class ProductManager extends ProductChain {
    makeChannel() {
        return new Producer();
    }

    receiveProduct(productName) {
        producerStation.push({
            'ProductName': productName
        });
    }

    sendProduct() {

    }
}





module.exports = ProductManager;