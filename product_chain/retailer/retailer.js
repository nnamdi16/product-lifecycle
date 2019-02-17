const fs  = require('fs');
const ProductChain = require('../productChain');
const Consumer = require('../consumer/consumer');
const readFile = require('../../data/readData');
class Retailer {
    constructor(readFile) {
        this.readFile = readFile;
    }
    go() {
        let output = 'Product moved from Retailer to Consumer';
        fs.appendFile('../data/output-file.txt','\n' + output,(err) => {
            if(err) throw err;
            console.log('Product processed from Retailer to Consumer!');
            return;
        });
        this.readFile.nextState(new Consumer(readFile));
        
    }
}


// class RetailerManager extends ProductChain {
//     makeChannel () {
//         return new Retailer();
//     }
// }

// const devRetailer = new RetailerManager();
// devRetailer.createProductChannel();

module.exports = Retailer;