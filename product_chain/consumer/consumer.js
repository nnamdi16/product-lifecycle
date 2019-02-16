const fs = require('fs');
const ProductChain = require('../productChain');
const Recycler = require('../recycler/recycler');

// let lyrics = 'I am reading a book';
// const content = 'Some content!';

// fs.appendFile('../data/output-file.txt', '\n'+ content, (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   //done!
// });

class Consumer {
    constructor(productChain){
        this.productChain = productChain;
        this.productChannel = new ProductChain();
    }
    
    go() {
        let output = 'Product moved from Consumer to Recycler';
        fs.appendFile('../data/output-file.txt','\n' + output,(err) => {
            if(err) throw err;
            console.log('Product processed from Consumer!');
            return;
        });
        this.productChain.nextState(new Recycler(productChain));
        
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
