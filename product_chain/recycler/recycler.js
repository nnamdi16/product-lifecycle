let fs = require('fs');
const ProductChain = require('../productChain');
const Producer = require('../producer/producer');
class Recycler  {
    constructor(productChain) {
        this.productChain = productChain;
    }
    go() {
        let output = 'Product moved from Recycler';
        fs.appendFile('../data/output-file.txt','\n' + output,(err) => {
            if(err) throw err;
            console.log('Product processed from Producer!');
            return;
        });
        // productChain.nextState(new Producer(productChain));
        
    }
    // createChannel () {
    //     console.log('I am a recycler');
    // }
}


// class RecyclerManager extends ProductChain {
//     makeChannel () {
//         return new Recycler();
//     }
// }

module.exports = Recycler;
