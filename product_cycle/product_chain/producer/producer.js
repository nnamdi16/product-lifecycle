const fs = require('fs');
const ProductChain = require('../productChain');
const Retailer = require('../retailer/retailer');
const ExecuteOperation = require('../../app');
const Consumer = require('../consumer/consumer');

class Producer {
    constructor(executeOperation) {
        this.executeOperation = executeOperation;
        
        
    }
    move(prop) {
        let output = `${prop} Product moved from Producer to Retailer`;
        //  console.log(readFile.product);
        fs.appendFile('/Users/nnamdinwabuokei/Documents/Decagon/Institute/checkpoint/product-lifecycle/product_cycle/data/output-file.txt','\n' + output,(err) => {
            if(err) throw err;
            console.log(`${prop} Product processed from Producer!`);
            return;
        });
        this.executeOperation.nextState(new Retailer(this));
        
    }
 
}

module.exports = Producer;
