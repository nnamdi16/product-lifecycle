const fs = require('fs');

class Producer {
    constructor() {  } 
    async move(prop) {
        
        let output = `${prop} Product moved from Producer to Retailer`;
        fs.appendFile('/Users/nnamdinwabuokei/Documents/Decagon/Institute/checkpoint/product-lifecycle/product_cycle/data/output-file.txt','\n' + output,(err) => {
            if(err) throw err;
            new main.Retailer().move(prop);
            // this.isLast(prop);
            // console.log(sample);
            console.log(`${prop} Product processed from Producer!`);
            return;
        });
    }

    // isLast(prop) {
    //     console.log('The Prop',prop);
    //     if(prop ==='18599 Rosetta Fagen Producer') throw new Error('Product Cycle Completed ' + prop);
    // }
 
}

module.exports = Producer;
const main = require('../../main');
