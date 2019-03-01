let fs = require('fs');
// const ProductChain = require('../productChain');
// const Producer = require('../producer/producer');
// const ExecuteOperation = require('../../app');

class Recycler  {
    constructor() {
        
      
        
    }
    async move(prop) {
        let output = `${prop} Product moved from Recycler to Producer`;
        fs.appendFile('/Users/nnamdinwabuokei/Documents/Decagon/Institute/checkpoint/product-lifecycle/product_cycle/data/output-file.txt','\n' + output,(err) => {
            if(err) throw err;
            new main.Producer().move(prop);
            console.log(`${prop} Product processed from Recycler!`);
            return;
        });
        
        
    }
    
}



module.exports = Recycler;
const main = require('../../main');
