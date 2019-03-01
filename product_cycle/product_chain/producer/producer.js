const fs = require('fs');

// const ProductChain = require('../productChain');
// const Retailer = require('../retailer/retailer');
// const ExecuteOperation = require('../../app');
// const Consumer = require('../consumer/consumer');

class Producer {
    constructor() {
         
    } 
    async move(prop) {
        
        let output = `${prop} Product moved from Producer to Retailer`;
        //  console.log(readFile.product);
        fs.appendFile('/Users/nnamdinwabuokei/Documents/Decagon/Institute/checkpoint/product-lifecycle/product_cycle/data/output-file.txt','\n' + output,(err) => {
            if(err) throw err;
            new main.Retailer().move(prop);
            console.log(`${prop} Product processed from Producer!`);
            return;
        });
        //console.log(this.executeOperation);
    }
 
}

module.exports = Producer;
const main = require('../../main');
