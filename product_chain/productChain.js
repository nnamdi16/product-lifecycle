

class ProductChain {
    constructor(product) {
        this.product = product;
    }
    createProductChannel(){
            const productChannel = this.makeChannel();
            productChannel.createChannel();
    }


}


class Retailer {
    createChannel() {
        console.log('I am a retailer');
    }
}

class Consumer {
    createChannel () {
        console.log('I am a consumer');
    }
}

class Recycler {
    createChannel () {
        console.log('I am a recycler');
    }
}

// class ProductManager extends ProductChain {
//     makeChannel () {
//         return new Producer();
//     }
// }

class RetailerManager extends ProductChain {
    makeChannel () {
        return new Retailer();
    }
}

class ConsumerManager extends ProductChain {
    makeChannel () {
        return new Consumer();
    }
}

class RecyclerManager extends ProductChain {
    makeChannel () {
        return new Recycler();
    }
}

// const devProducer = new ProductManager();
// devProducer.createProductChannel();

const devRetailer = new RetailerManager();
devRetailer.createProductChannel();
// module.exports = ProductManager;
module.exports = ProductChain;