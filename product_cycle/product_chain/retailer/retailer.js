const fs  = require('fs');
class Retailer {
    constructor() {   }
    async move(prop) {

        let output = `${prop} Product moved from Retailer to Consumer`;
        fs.appendFile('/Users/nnamdinwabuokei/Documents/Decagon/Institute/checkpoint/product-lifecycle/product_cycle/data/output-file.txt','\n' + output,(err) => {
            if(err) throw err;
           new main.Consumer().move(prop);
            console.log(`${prop} Product processed from Retailer to Consumer!`);
            return;
        });
    }
}

module.exports = Retailer;
const main = require('../../main');
