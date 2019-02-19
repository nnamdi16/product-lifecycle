const fs  = require('fs');

const ProductChain = require('../productChain');
const Consumer = require('../consumer/consumer');
const ExecuteOperation = require('../../app');
const Producer = require('../producer/producer');
class Retailer {
    constructor(executeOperation) {
        this.executeOperation = executeOperation;

    }
    move(prop) {

        let output = `${prop} Product moved from Retailer to Consumer`;
        fs.appendFile('/Users/nnamdinwabuokei/Documents/Decagon/Institute/checkpoint/product-lifecycle/product_cycle/data/output-file.txt','\n' + output,(err) => {
            if(err) throw err;
            console.log(`${prop} Product processed from Retailer to Consumer!`);
            return;
        });
        
        // this.executeOperation.nextState(new Consumer(this));
        
    }
}


// const retailer = new  Retailer();
// console.log(retailer);

module.exports = Retailer;