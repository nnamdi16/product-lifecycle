const ProductChain = require('../productChain');
const Producer = require('../producer/producer');
class Recycler extends ProductChain{
    constructor(productChain) {
        this.productChain = productChain;
    }
    go() {
        let output = 'Product moved from Recycler to Producer';
        fs.writeFile('../data/output-file.txt',output,(err) => {
            if(err) throw err;
            console.log('Product processed from Retailer!');
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
