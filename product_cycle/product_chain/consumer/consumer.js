const fs = require('fs');

class Consumer {
    constructor(){  }
    
    async move(prop) {
        let output = `${prop} Product moved from Consumer to Recycler`;
        fs.appendFile('/Users/nnamdinwabuokei/Documents/Decagon/Institute/checkpoint/product-lifecycle/product_cycle/data/output-file.txt','\n' + output,(err) => {
            if(err) throw err;
            new main.Recycler().move(prop);
            console.log(`${prop} Product processed from Consumer!`);
            return;
        });

        
    }
    
}

module.exports = Consumer;
const main = require('../../main');
