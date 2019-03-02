const fs = require('fs');

class Producer {
    constructor() {  } 
    async move(prop) {
        
        let output = `${prop} Product moved from Producer to Retailer`;
        fs.appendFile('/Users/nnamdinwabuokei/Documents/Decagon/Institute/checkpoint/product-lifecycle/product_cycle/data/output-file.txt','\n' + output,(err) => {
            if(err) throw err;
            new main.Retailer().move(prop);
            console.log(`${prop} Product processed from Producer!`);
            return;
        });
    }

    // isLast() {
    //     return;
    // }
 
}

module.exports = Producer;
const main = require('../../main');
