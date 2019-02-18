const fs  = require('fs');

const ProductChain = require('../productChain');
const Consumer = require('../consumer/consumer');
const readFile = require('../entry_point/readData');
const Producer = require('../producer/producer');
class Retailer {
    constructor(products) {
        this.products = products;

    }
    move(prop) {

        let output = `${prop} Product moved from Retailer to Consumer`;
        fs.appendFile('../../data/output-file.txt','\n' + output,(err) => {
            if(err) throw err;
            console.log(`${prop} Product processed from Retailer to Consumer!`);
            return;
        });
        
        // this.readFile.nextState(new Consumer(readFile));
        
    }
}


// const retailer = new  Retailer();
// console.log(retailer);

module.exports = Retailer;