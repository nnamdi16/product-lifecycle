const fs = require('fs');

// const ProductChain = require('../productChain');
// const Retailer = require('../retailer/retailer');
// const ExecuteOperation = require('../../app');
// const Consumer = require('../consumer/consumer');

class Producer {
    constructor(executeOperation) {
        this.executeOperation = executeOperation;
         
    } 
    async move(prop) {
        let that = this;
        let output = `${prop} Product moved from Producer to Retailer`;
        //  console.log(readFile.product);
        fs.appendFile('/Users/nnamdinwabuokei/Documents/Decagon/Institute/checkpoint/product-lifecycle/product_cycle/data/output-file.txt','\n' + output,(err) => {
            if(err) throw err;
            this.executeOperation.nextState(new main.Retailer(this));
            console.log(`${prop} Product processed from Producer!`);
            return;
        });
        //console.log(this.executeOperation);
    }
 
}

module.exports = Producer;
const main = require('../../main');
