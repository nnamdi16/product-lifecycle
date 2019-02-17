let fs = require('fs');
const ProductChain = require('../productChain');
const Producer = require('../producer/producer');
const readFile = require('../../data/readData');
const Product = require('../producer/product');
class Recycler  {
    constructor(readFile) {
        this.readFile = readFile;
        // this.product = product;
        
    }
    go() {
        let output = `Product moved from Recycler to Producer`;
        fs.appendFile('../data/output-file.txt','\n' + output,(err) => {
            if(err) throw err;
            console.log('Product processed from Recycler!');
            return;
        });
        // this.readFile.nextState(new Producer(readFile));
        
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
