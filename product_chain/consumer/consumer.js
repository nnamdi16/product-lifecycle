const ProductChain = require('../productChain');
const Recycler = require('../recycler/recycler');
const fs = require('fs');
// let lyrics = 'I am reading a book';


class Consumer extends ProductChain {
    constructor(productChain){
        this.productChain = productChain;
    }
    
    go() {
        let output = 'Product moved from Consumer to Recycler';
        fs.writeFile('../data/output-file.txt',output,(err) => {
            if(err) throw err;
            console.log('Product processed from Consumer!');
        });
        productChain.nextState(new Recycler(productChain));
        
    }
    // createChannel () {
    //     console.log('I am a consumer');
    // }
}

// class ConsumerManager extends ProductChain {
//     makeChannel () {
//         return new Consumer();
//     }
// }

// const devConsumer = new ConsumerManager();
// devProducer.createProductChannel();

// module.exports = ConsumerManager;

module.exports = Consumer;
